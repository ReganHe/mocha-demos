var add = require('./add.js');
var expect = require('chai').expect;

describe('加法函数的测试', function () {
	it('1 加 1 应该等于 2', function () {
		expect(add(1, 1)).to.be.equal(2);
	});

	it('1 加 2 应该等于 3', function () {
		expect(add(1, 2)).to.be.equal(3);
	});
});
