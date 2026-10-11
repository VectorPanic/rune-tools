/**
 * Prints the tool's package name and version.
 *
 * @param {Object} args Parsed CLI arguments; unused by this command.
 * @returns {undefined}
 */
module.exports = function(args) {
    const { name, version } = require('../../package.json');
    const print = require('./../util/print');
    print.out(name + ' ' + version);
};
