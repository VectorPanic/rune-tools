module.exports = function() {
    const args = require('./util/args')(process.argv.slice(2));
    let cmd = args._[0];
    
    if ((args._.length == 0) && (args.v || args.version)) {
        require('./cmd/version')(args);
        return;
    }
    
    if ((args._.length == 0) && (args.h || args.help)) {
        require('./cmd/help')(args);
        return;
    }
    
    switch (cmd) {
        case 'compile':
            require('./cmd/compile')(args);
            break;
        case 'create':
            require('./cmd/create')(args);
            break;
        case 'update':
            require('./cmd/update')(args);
            break;
        default:
            require('./util/print').err('Invalid input. Use: --help.', true);
            break;
    }
};