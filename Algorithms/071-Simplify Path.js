/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];
    const a = path.split("/").filter(t => !['/', '', '.'].includes(t));
    a.forEach(t => t === '..' ? stack.pop() : stack.push(t));
    return '/'+stack.join('/');
};
var a = "/a/b/c/.///../../d";
console.log(simplifyPath(a));