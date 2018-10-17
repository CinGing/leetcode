// console.log(parseInt("0.5"));

// var a = "undefined"
// var b = "false"
// var c = ""

// function cc(gg) {
//     if (gg) console.log(true);
//     else console.log(false)
// }
// cc(a)
// cc(b)
// cc(c)
// if(undefined) console.log(true);
// 	else console.log(false);
// function test1(){
// 	var n = 4399;
// 	function add(){
// 		n++;
// 		console.log(n)
// 	}
// 	return {n:n,add:add}
// }
// var res = test1()
// var res2 = test1()
// res.add()
// res.add()
// console.log(res.n)
// res2.add()
// function * gen(){
// 	yield 1;
// 	yield 2;
// 	yield 3;
// 	return 4;
// }
// var a = gen();
// console.log(2>0&&5<9)
// var a = "cc";
// var a;
// console.log(a)
// var a = [2,3,1,4];
// console.log(Math.max.apply(Math,a))
// var a = new Array("11",'22','33')
// console.log(0 == false)
// var arr = [{a:1},{}]
// arr.forEach(function(item,idex){
// 	item.s = idex;
// })
// console.log(arr)
// var i = 10;
// var arr = [0,1,2,3,4,5,6]
// arr.splice(i-1,1)
// console.log(arr.slice(0, i).concat(arr.slice(i+1,arr.length)));
// arr.splice(i-1,1)
// console.log(arr+"   "+arr.length)
// Array.prototype.remove = function(dx) {
//     if (isNaN(dx) || dx > this.length) { return false; }
//     for (var i = 0, n = 0; i < this.length; i++) { if (this[i] != this[dx]) { this[n++] = this[i] } } this.length -= 1
// }
// arr.remove(3);
// console.log(arr)
// var foo = {n:1}
// foo.n = 2;
// foo.n = 3;
// console.log(foo.n)
// var foo= {n:1};
// (function (foo) {
//     console.log(foo);
//     foo.n=3;
//     foo = {n:2};
//     console.log(foo);
// })(foo);
// console.log(foo);
// var arr = new Array(1,2,3,4,5);
// console.log(arr instanceof Array);
// console.log(Math.max.apply(Function,arr))
// var arr = [1,3,2]
// console.log([].sort.call(arr))
// console.log(arr.reverse())
// console.log(arr)
// var a = new Boolean(false);
// if(a) {
// 	console.log('xixi')
// }
// var b = Boolean(0)
// if(b) {
// 	console.log('xixi')
// }
// var a = undefined;
// var b = null;
// var c = true;
// console.log(undefined == null)
// var obj = {
//     a: 1,
//     b: function() { 
//     	var a = 55;
//         console.log(this.a)
//     }
// }
// var fun = obj.b;
// fun();
// obj.b();
// function add(a,b){
// 	return a+b;
// }
// console.log(add(4,5))
// var color = 'green'
// var test = {
//     color: 'blue',
//     getColor: function() {
//     	var color = 'red'
//         console.log(this.color)
//     }
// }
// var getColor = test.getColor;
// getColor();
// test.getColor()
// setTimeout(function(){console.log(20)},1000);
// (function(){
// 	var a = 5
// 	 b = a;
// })();
// console.log(b);
// console.log(a);
// var a = 1.2;
// console.log(typeof a == "float")
var i, j, k;
for (var i = 0; i < 21; i++) {
    for (var j = 0; j < 34; j++) {
        if (7 * i + 4 * j == 100) {
            console.log(i + ' ' + j + ' ' + (100 - i - j));
            break;
        }
    }
}
// var a,b;
// for(a = 0;a<10;a+=2){
// 	for(b=1;b<10;b+=2){
// 		if(a+b>5){
// 			console.log(a+" "+b);
// 			break;
// 		}
// 	}
// }
var a =5
console.log((5>6)?1.1:1)