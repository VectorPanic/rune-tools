module.exports = function(args) {
    const print = require('./../util/print');
    const URL = 'https://raw.githubusercontent.com/VectorPanic/rune/main/dist/rune.js';
    
    print.out('Downloading.', false);
    
    if (isRootDir()) {
        const dst = require('path').join(process.cwd(), 'lib/rune.js');
        fetch(URL, dst, function(e) {
            if (e) print.err('Unable to write to disk.');
            else print.out('Update complete.');
        });
    } else print.err('Invalid directory.', true);
};

function isRootDir() {
    const fs = require('fs');
    const path = require('path');
    
    const a = path.join(process.cwd(), 'src/system/Main.js');
    const b = path.join(process.cwd(), 'lib');
    
    if (fs.existsSync(a) && fs.existsSync(b)) {
        return true;
    }
    
    return false;
}

function fetch(src, dst, clb) {
    const print = require('./../util/print');
    const fs = require('fs');
    const https = require('https');
    let buffer = '';
    
    https.get(src, function(rsp) {
        if (rsp.statusCode == '200') {
            rsp.on('data', function(data) {
                buffer += data;
            });
            rsp.on('end', function() {
                fs.writeFile(dst, buffer, function(error) {
                    clb(error);
                });
            });
        } else print.err('Update failed.');
    });
}