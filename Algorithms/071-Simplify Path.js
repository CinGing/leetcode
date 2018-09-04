/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];
    const a = path.split("/").filter(t => !['/', '', '.'].includes(t));
    // a.forEach(function(t){ t === '..' ? stack.pop() : stack.push(t)});
    a.forEach(t => t === '..' ? stack.pop() : stack.push(t));
    return '/'+stack.join('/');
};
var a = "/a/b/c/e/f/.//../../d";
console.log(simplifyPath(a));