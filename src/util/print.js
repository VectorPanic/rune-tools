function out(msg, exit = false) {
    console.log(msg);
    if (exit === true) {
        process.exit(0);
    }
}

function err(msg, exit = true) {
    console.error(msg);
    if (exit === true) {
        process.exit(1);
    }
}

module.exports = { out, err };