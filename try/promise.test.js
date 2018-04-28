const {test} = require('ava');
const promise = Promise.reject(new TypeError('err'));

test('rejects', async t => {
	await t.throws(promise);
	t.truthy(promise);
});

test('promise',t => {
	return Promise.resolve(1).then((res)=>{
		t.is(res,1);
	});
});

test('promise&async',  t => {
	t.plan(1);
	t.truthy( Promise.resolve('success').then((data)=>{console.log(data); return data}));
});

test('promise-catch-truthy', async t => {
	t.plan(3);	
	return t.truthy(Promise.reject(1).catch((err)=>{
		t.is(err,1);
		t.is(err,1);
	}));
});
