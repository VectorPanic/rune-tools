/**
 * Prints CLI usage, supported commands and examples.
 *
 * @param {Object} args Parsed CLI arguments; unused by this command.
 * @returns {undefined}
 */
module.exports = function(args) {
    const print = require('./../util/print');
    print.out('NAME');
    print.out('\trune-tools');
    print.out('SYNOPSIS');
    print.out('\trune-tools [OPTION]');
    print.out('\trune-tools [COMMAND]');
    print.out('\trune-tools [COMMAND] [OPTION]');
    print.out('OPTION');
    print.out('\t-h, --help');
    print.out('\t\tOutput usage message and exit.');
    print.out('\t-v, --version');
    print.out('\t\tOutput version information and exit');
    print.out('COMMAND');
    print.out('\tadd sprite APPLICATION.PACKAGE.CLASS');
    print.out('\t\tCreates a Sprite class in the current directory.');
    print.out('\tadd scene APPLICATION.PACKAGE.CLASS');
    print.out('\t\tCreates a Scene class in the current directory.');
    print.out('\tcreate');
    print.out('\t\tCreates new project.');
    print.out('\t\t\t-d, --developer[=DEVELOPER]');
    print.out('\t\t\t\tDeveloper ID, example: com.vectorpanic');
    print.out('\t\t\t-a, --application[=APP]');
    print.out('\t\t\t\tApp ID, for example: MyApp');
    print.out('\t\t\t-b, --build[=BUILD]');
    print.out('\t\t\t\tBuild version, example: 1.0.0');
    print.out('\tcompile');
    print.out('\t\tCompiles resource files.');
    print.out('\t\t\t-r, --resource');
    print.out('\t\t\t\tUse URI, not Base64.');
    print.out('\tupdate');
    print.out('\t\tUpdate to the latest build of Rune.');
    print.out('EXAMPLE');
    print.out('\t$ rune-tools add sprite mygame.mypackage.Player');
    print.out('\t$ rune-tools add scene mygame.mypackage.Scene');
    print.out('\t$ rune-tools --version');
    print.out('\t$ rune-tools update');
    print.out('\t$ rune-tools create -d com.vectorpanic.demo -a demo -b 0.0.0');
};
