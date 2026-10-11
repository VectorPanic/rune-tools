module.exports = function(a) {
    const booleans = new Set(['h', 'help', 'v', 'version', 'r', 'resource']);
    let o = {'_':[]};
    for (let i = 0; i < a.length; i++) {
        if (a[i].match(/^--?[^-]/)) {
            const option = a[i].replace(/^--?/, '');
            const separator = option.indexOf('=');
            const key = separator === -1 ? option : option.slice(0, separator);
            if (separator !== -1) {
                o[key] = option.slice(separator + 1);
            } else if (!booleans.has(key) && a[i + 1] !== undefined && !a[i + 1].startsWith('-')) {
                o[key] = a[++i];
            } else {
                o[key] = true;
            }
        } else {
            o['_'].push(a[i]);
        }
    }
    
    return o;
};