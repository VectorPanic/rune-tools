/**
 * Creates a Sprite or Scene class in the current directory and prints registration reminders.
 * Exits with a failure status for invalid input or file creation errors.
 *
 * @param {Object} args Parsed CLI arguments.
 * @param {string[]} args._ Command, template type and fully qualified class reference.
 * @returns {undefined}
 */
module.exports = function(args) {
    const print = require('./../util/print');
    const type = args._[1];
    const reference = args._[2];
    const templates = {
        sprite: 'Sprite.tpl',
        scene: 'Scene.tpl'
    };

    if (args._.length !== 3 || !Object.prototype.hasOwnProperty.call(templates, type)) {
        print.err('Use: rune-tools add <sprite|scene> APPLICATION.PACKAGE.CLASS', true);
    }

    if (!isClassReference(reference)) {
        print.err('Invalid class reference. Use: APPLICATION.PACKAGE.CLASS', true);
    }

    createFile(templates[type], reference);

    const name = reference.split('.').pop();
    print.out('Created ' + name + '.js.');
    print.out('Remember to manually add the file to:');
    print.out('  - bin-debug/index.html');
    print.out('  - scripts/shell/build.sh', true);
};

/**
 * Checks that a reference contains an application, package and class made of valid identifiers.
 * The application identifier must not be a reserved JavaScript keyword.
 *
 * @param {string} reference Dot-separated class reference.
 * @returns {boolean} Whether the reference is valid for class generation.
 */
function isClassReference(reference) {
    const parts = reference.split('.');
    const identifier = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    const reserved = [
        'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger', 'default',
        'delete', 'do', 'else', 'enum', 'export', 'extends', 'false', 'finally',
        'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof',
        'interface', 'let', 'new', 'null', 'package', 'private', 'protected',
        'public', 'return', 'static', 'super', 'switch', 'this', 'throw', 'true',
        'try', 'typeof', 'var', 'void', 'while', 'with', 'yield', 'await'
    ];

    return parts.length >= 3 && parts.every(function(part) {
        return identifier.test(part);
    }) && !reserved.includes(parts[0]);
}

/**
 * Renders a class template and writes it without overwriting an existing file.
 * Exits with a failure status if the template cannot be read or the file cannot be created.
 *
 * @param {string} template Template filename within asset/tpl.
 * @param {string} reference Validated, fully qualified class reference.
 * @returns {undefined}
 */
function createFile(template, reference) {
    const fs = require('fs');
    const path = require('path');
    const print = require('./../util/print');
    const parts = reference.split('.');
    const name = parts[parts.length - 1];
    const src = path.join(__dirname, '../../asset/tpl', template);
    const dst = path.join(process.cwd(), name + '.js');

    try {
        const dat = fs.readFileSync(src, 'utf8');
        fs.writeFileSync(dst, trim(dat, parts), { flag: 'wx' });
    } catch(error) {
        if (error.code === 'EEXIST') {
            print.err(name + '.js already exists.', true);
        } else {
            print.err('Unable to create class file.', true);
        }
    }
}

/**
 * Replaces application, package and class placeholders in a class template.
 *
 * @param {string} str Template source.
 * @param {string[]} parts Application, package segments and class name.
 * @returns {string} Rendered class source.
 */
function trim(str, parts) {
    const values = {
        APP: parts[0],
        PACKAGE: parts.slice(1, -1).join('.'),
        CLASS: parts[parts.length - 1]
    };

    return str.replace(/%(APP|PACKAGE|CLASS)%/g, function(match, key) {
        return values[key];
    });
}
