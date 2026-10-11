/**
 * Writes a message to standard output and optionally exits successfully.
 *
 * @param {string} msg Message to print.
 * @param {boolean} [exit=false] Whether to exit with status 0 after printing.
 * @returns {undefined}
 */
function out(msg, exit = false) {
    console.log(msg);
    if (exit === true) {
        process.exit(0);
    }
}

/**
 * Writes a message to standard error and optionally exits with a failure status.
 *
 * @param {string} msg Error message to print.
 * @param {boolean} [exit=true] Whether to exit with status 1 after printing.
 * @returns {undefined}
 */
function err(msg, exit = true) {
    console.error(msg);
    if (exit === true) {
        process.exit(1);
    }
}

module.exports = { out, err };
