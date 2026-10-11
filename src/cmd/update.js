/**
 * Downloads the SDK build from its main branch into the current project's lib/rune.js.
 * Exits with a failure status if the directory is not recognized as a Rune project.
 *
 * @param {Object} args Parsed CLI arguments; unused by this command.
 * @returns {undefined}
 */
module.exports = function(args) {
    const print = require('./../util/print');
    const URL = 'https://raw.githubusercontent.com/VectorPanic/rune-sdk/main/dist/rune.js';
    
    print.out('Downloading.', false);
    
    if (isRootDir()) {
        const dst = require('path').join(process.cwd(), 'lib/rune.js');
        fetch(URL, dst, function(e) {
            if (e) print.err('Unable to write to disk.');
            else print.out('Update complete.');
        });
    } else print.err('Invalid directory.', true);
};

/**
 * Checks for the Main.js and lib paths used to recognize a Rune project root.
 *
 * @returns {boolean} Whether both paths exist in the current directory.
 */
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

/**
 * Downloads a UTF-8 SDK file over HTTPS and writes it after an HTTP 200 response.
 * Exits with a failure status for other HTTP response codes.
 *
 * @param {string} src HTTPS URL to download.
 * @param {string} dst Destination file path.
 * @param {function(?Error): void} clb Called after writing with the filesystem error, or null on success.
 * @returns {undefined}
 */
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
