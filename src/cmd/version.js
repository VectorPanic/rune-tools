module.exports = function(args) {
    const { name, version } = require('../../package.json');
    const print = require('./../util/print');
    print.out(name + ' ' + version);
};