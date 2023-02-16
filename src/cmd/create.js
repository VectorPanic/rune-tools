module.exports = function(args) {
    const path = require('path');
    const title = String(args.app || args.a || 'app');
    const root = path.join(process.cwd(), title);
    
    createFolders(root);
    createFiles(args);
    
    require('./../util/print').out('Done.', true);
};

function createFolders(root) {
    const { template } = require('../../package.json');
    const path = require('path');
    template.folders.forEach(function(folder) {
        if (!createFolder(path.join(root, folder))) {
            require('./../util/print').err('Unable to create folder structure.', true);
        }
    });
}

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

function createFiles(args) {
    const { template } = require('../../package.json');
    const path = require('path');
    template.files.forEach(function(file) {
        if (!createFile(file, args)) {
            require('./../util/print').err('Unable to create file structure.', true);
        }
    });
}

function createFile(file, args) {
    const fs = require('fs');
    const path = require('path');
    
    const src = path.join(__dirname, file.src);
    const dst = path.join(process.cwd(), (args.app || args.a || 'app'), file.dst);
    
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

function trim(str, args) {
    str = str.replace(/%DEVELOPER%/g, args.developer || args.d || '');
    str = str.replace(/%APP%/g,       args.app       || args.a || 'app');
    str = str.replace(/%BUILD%/g,     args.build     || args.b || '0.0.0');
    str = str.replace(/%REQUESTS%/g, '');
    
    return str;
}