/**
 * Validates project identifiers and creates a project from the configured folders and templates.
 * Exits successfully after creation or with a failure status for validation or filesystem errors.
 *
 * @param {Object} args Parsed CLI options for application, developer and build identifiers.
 * @returns {undefined}
 */
module.exports = function(args) {
    
    const aID = /^[a-zA-Z0-9-_]*$/;
    const dID = /^([a-z]{2,3})\.[a-z0-9-]{1,50}$/;
    const bID = /^[0-9]+\.[0-9]+\.[0-9]+$/;
    
    let a = args.a || args.application;
    let d = args.d || args.developer;
    let b = args.b || args.build;
    
    const print = require('./../util/print');
    
    if (!aID.test(a) || !a) {
        print.err('Invalid App-ID.', true);
    }
    
    if (a.toLowerCase() == "app") {
        print.err('Invalid App-ID, "app" is not allowed.', true);
    }
    
    if (!dID.test(d) || !d) {
        print.err('Invalid Developer-ID.', true);
    }
    
    if (!bID.test(b) || !b) {
        print.err('Invalid Build-ID.', true);
    }
    
    const path = require('path');
    const root = path.join(process.cwd(), a);
    
    createFolders(root);
    createFiles(args);
    
    print.out('Done.', true);
};

/**
 * Creates the configured project directories, exiting on failure.
 *
 * @param {string} root Absolute project directory path.
 * @returns {undefined}
 */
function createFolders(root) {
    const { template } = require('../../package.json');
    const path = require('path');
    template.folders.forEach(function(folder) {
        if (!createFolder(path.join(root, folder))) {
            require('./../util/print').err('Unable to create folder structure.', true);
        }
    });
}

/**
 * Creates a directory and its parents if the path does not already exist.
 *
 * @param {string} path Directory path to create.
 * @returns {boolean} Whether the path existed or directory creation succeeded.
 */
function createFolder(path) {
    try {
        const fs = require('fs');
        if (fs.existsSync(path) == false) {
            fs.mkdirSync(path, {
                recursive: true
            });
        }
    } catch(error) {
        return false;
    }
    
    return true;
}

/**
 * Creates all configured project files, exiting if a template cannot be processed.
 *
 * @param {Object} args Parsed project creation options.
 * @returns {undefined}
 */
function createFiles(args) {
    const { template } = require('../../package.json');
    const path = require('path');
    template.files.forEach(function(file) {
        if (!createFile(file, args)) {
            require('./../util/print').err('Unable to create file structure.', true);
        }
    });
}

/**
 * Renders a project template if its destination does not already exist.
 *
 * @param {{src: string, dst: string}} file Template and destination paths from the project configuration.
 * @param {Object} args Parsed project creation options.
 * @returns {boolean} Whether the destination existed or the file was created successfully.
 */
function createFile(file, args) {
    const fs = require('fs');
    const path = require('path');
    
    const src = path.join(__dirname, file.src);
    const dst = path.join(process.cwd(), (args.application || args.a || 'app'), file.dst);
    
    try {
        if (fs.existsSync(dst) == false) {
            let dat = fs.readFileSync(src, "utf8");
            fs.writeFileSync(dst, trim(dat, args));
        }   
    } catch(error) {
        return false;
    }
    
    return true;
}

/**
 * Replaces project metadata placeholders and initializes an empty resource collection.
 *
 * @param {string} str Template source.
 * @param {Object} args Parsed application, developer and build options.
 * @returns {string} Rendered project file contents.
 */
function trim(str, args) {
    str = str.replace(/%DEVELOPER%/g, args.developer || args.d || '');
    str = str.replace(/%APP%/g,       args.application || args.a || 'myapp');
    str = str.replace(/%BUILD%/g,     args.build     || args.b || '0.0.0');
    str = str.replace(/%REQUESTS%/g, '');
    
    return str;
}
