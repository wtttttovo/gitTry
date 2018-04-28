console.log(Object.prototype.toString.call(new Date));
console.log(typeof(new Date));
console.log(Object.prototype.toString.call(undefined));
console.log(typeof(undefined));
console.log(Object.prototype.toString.call(null));
console.log(typeof(null));

let arr=[1,2,3];

console.log(Object.prototype.toString.call(arr[0]));
console.log(Object.prototype.toString.call(arr));
var res = (arr.toString());
console.log(Object.prototype.toString.call(res));


//toString()不改变原对象，返回一个新的对象,判断类型返回的是字符串，他可以访问到对象的class属性故能返回类型,Object原型链上的tostring()方法功能是返回类型，使用.tostring()调用的是其他类型重写的方法

//array-like object :have length property,indexed elements e.g.arguments\string\
function fun(){
console.log(Object.prototype.toString.call(arguments));
}
fun(1,2);

//have length property but can't be visited by index 
console.log((function(x,y){}).length);
console.log((function(x=1,y){}).length);
console.log(Array.from.length);

//so str is array-like object ,,,new 出来的是对象，，啊啊啊怎么搞都是对象啊，，，
var str=new String('123');
console.log(str[2]);
console.log(Object.prototype.toString(str));
strr = str.toString();
console.log(Object.prototype.toString(str));
str = "as";
console.log(Object.prototype.toString(str));
String(str);

console.log(Object.prototype.toString(str));
var arr=Array.from({length: 5}, (v, i) => i);
console.log(arr);
//定义的length属性直接赋给这个对象，相当于有5个元素，我靠之前用的时候怎么没意识到啊，，，一直就当数组来用了觉得跟下标是0没什么区别


