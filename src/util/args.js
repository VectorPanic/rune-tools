module.exports = function(a) {
    let v;
    let o = {'_':[]};
    for (let i = 0; i < a.length; i++) {
        if (a[i].match(/^--/)) {
            v = a.splice(i, 2);
            v[0] = v[0].replace('--', '');
            i--;
            o[v[0]] = (v[1] === undefined) ? true : v[1];
        } else if (a[i].match(/^-/)) {
            v = a.splice(i, 2);
            v[0] = v[0].replace('-', '');
            v[0] = v[0].charAt(0);
            i--;
            o[v[0]] = (v[1] === undefined) ? true : v[1];
        } else {
            o['_'].push(a[i]);
        }
    }
    
    return o;
};