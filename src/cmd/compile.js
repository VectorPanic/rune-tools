/**
 * Collects project assets and regenerates the application's resource request class.
 *
 * @param {Object} args Parsed CLI options; r or resource selects file references instead of Base64.
 * @returns {undefined}
 */
module.exports = function(args) {
    const path = require('path');
    const root = path.join(process.cwd(), '/asset');
    const print = require('./../util/print');
    
    print.out('Processing files:', false);
    save(getSyntax(encode(getFiles(root), args)));
    print.out('Done.', false);
};

/**
 * Recursively collects supported image, audio, JSON and XML files.
 * Exits with a failure status if a directory cannot be read.
 *
 * @param {string} root Absolute directory path to scan.
 * @returns {string[]} Absolute paths of supported resource files.
 */
function getFiles(root) {
    const fs = require("fs");
    const path = require("path");
    const exts = ['.jpg', '.jpeg', '.png', '.gif', '.wav', '.mp3', '.json', '.xml'];
    
    let files = [];
    let ext;
    
    try {
        let dirs = fs.readdirSync(root, { withFileTypes: true });
        for (const dir of dirs) {
            const abs = path.resolve(root, dir.name);
            if (dir.isDirectory()) {
                files = files.concat(getFiles(abs));
            } else {
                ext = path.extname(abs);
                if (exts.includes(ext)) {
                    files.push(abs);
                }
            }
        }
    } catch(error) {
        require('./../util/print').err('Unable to find (or read) resource files.', true);
    }
    
    return files;
}

/**
 * Converts resource files to relative references or Base64 data URIs.
 *
 * @param {string[]} files Absolute resource file paths.
 * @param {Object} args Parsed options controlling resource representation.
 * @returns {Array<{name: string, data: string}>} Resource names and their encoded data or references.
 */
function encode(files, args) {
    const path = require('path');
    const fs = require("fs");
    
    let output = [];
    
    files.forEach(function(file) {
        let str;
        
        if (args.r || args.resource) {
            str = './../asset' + file.split('asset').pop();
            require('./../util/print').out(' -- ' + str, false);
        } else {
            require('./../util/print').out(' -- ' + file, false);
            
            str = 'data:%MIME%;base64,%DATA%';
            let dat = fs.readFileSync(file, 'base64');
            
            str = str.replace('%MIME%', mime(path.extname(file)));
            str = str.replace('%DATA%', dat);
        }
        
        output.push({
            name: path.basename(file, path.extname(file)),
            data: str
        });
    });
        
    return output;
}

/**
 * Resolves a file extension to its MIME type, using a binary fallback for unknown types.
 *
 * @param {string} ext File extension, with or without a leading dot.
 * @returns {string} MIME type associated with the extension.
 */
function mime(ext) {
    ext = ext.trim().toLowerCase().replace( /^\.+/, '');
    switch (ext) {
        case 'jpg':
        case 'jpeg':
        return 'image/jpeg';
        
        case 'png':
        return 'image/png';
        
        case 'gif':
        return 'image/gif';
        
        case 'wav':
        return 'audio/wav';
        
        case 'mp3':
        return 'audio/mpeg';
        
        case 'json':
        return 'application/json';
        
        case 'xml':
        return 'application/xml';
        
        default:
        return 'application/octet-stream';
    }
}

/**
 * Generates resource registration statements for the Requests class.
 *
 * @param {Array<{name: string, data: string}>} files Prepared resource entries.
 * @returns {string} JavaScript statements calling this.add for each resource.
 */
function getSyntax(files) {
    let tpl = 'this.add("%APP%", "%DATA%");\n\t';
    let str = '';
    let tmp = '';
    
    for (var i = 0; i < files.length; i++) {
        tmp = tpl.replace('%APP%', files[i].name);
        tmp = tmp.replace('%DATA%', files[i].data);
        
        str += tmp;
    }
    
    str = str.slice(0, -2);
    
    return str;
}

/**
 * Renders Requests.tpl using the project package name and overwrites Requests.js.
 * Exits with a failure status if the template cannot be read or the output cannot be written.
 *
 * @param {string} dat Generated resource registration statements.
 * @returns {undefined}
 */
function save(dat) {
    const fs = require('fs');
    const path = require('path');
    
    const pak = require(path.join(process.cwd(), 'package.json'));
    const src = path.join(__dirname, '../../asset/tpl/Requests.tpl');
    const dst = path.join(process.cwd(), '/src/data/resource/Requests.js');
    
    try {
        let tpl = fs.readFileSync(src, "utf8");
        tpl = tpl.replace('%REQUESTS%', dat);
        tpl = tpl.replace(/%APP%/g, pak.name);
        fs.writeFileSync(dst, tpl);   
    } catch(error) {
        require('./../util/print').err('could not create manifest file', true);
    }
}
