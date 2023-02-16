module.exports = function(args) {
    const path = require('path');
    const root = path.join(process.cwd(), '/asset');
    const print = require('./../util/print');
    
    print.out('Processing files:', false);
    save(getSyntax(encode(getFiles(root), args)));
    print.out('Done.', false);
};

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

function encode(files, args) {
    const path = require('path');
    const fs = require("fs");
    
    let output = [];
    
    files.forEach(function(file) {
        let str;
        
        if (args.r || args.reference) {
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

function mime(ext) {
    ext = ext.trim().toLowerCase().replace( /^\.+/, '');
    switch (ext) {
        case 'jpg':
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