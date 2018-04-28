const {getProperties} =require('../index.js');
const test = require('ava');

test('normal input',t=>{
	let obj = {a:{b:{c:1}},d:2};

	t.deepEqual(getProperties(obj),['a.b.c','d']);
});


test('undefined obj',t=>{
	let obj = {a:undefined};

	t.deepEqual(getProperties(obj),['a']);
});


test('null obj',t=>{
	let obj = {a:null};

	t.deepEqual(getProperties(obj),['a']);
});

test('{} obj',t=>{
	let obj = {a:{}};

	t.deepEqual(getProperties(obj),['a']);
});

test('more obj',t=>{
	let obj = {a:{b:{c:1,d:3}},e:{f:2,g:{h:{i:{j:4,k:5}}}}};

	t.deepEqual(getProperties(obj),['a.b.c','a.b.d','e.f','e.g.h.i.j','e.g.h.i.k']);
});

test('not obj',t=>{								//思想不要受限，考虑需要全面！！！不要在细节部分掉血！！
    t.deepEqual(getProperties("str"),[]);
    t.deepEqual(getProperties(1),[]);
    t.deepEqual(getProperties(true),[]);
    t.deepEqual(getProperties(null),[]);
    t.deepEqual(getProperties(undefined),[]);
    t.deepEqual(getProperties([1,2]),[]);
});

//钩子，，，，，相同功能批量复制语法糖，，，
//e.g. 需要先登录且用户名密码相同   beforeEach（）
//     数据库测试，测试后需要保证数据库干净，，，每次插入数据什么的再把数据清掉
//效果同在每个test中调用同一个function
//e.g.  test(()=>{login()})		但这样可维护性太低了，每次都需要重复操作