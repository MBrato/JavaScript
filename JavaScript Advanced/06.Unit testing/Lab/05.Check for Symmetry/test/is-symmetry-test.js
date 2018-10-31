let expect = require('chai').expect;
const SYMMETRY = require('../is-symmetry.js');

describe('Symmetry test', function(){
	it('Shold return false for [1,2]', function(){
		expect(SYMMETRY([1,2])).to.be.equal(false);
	});
	it('Shold return false for [1, 2, -1]', function(){
		expect(SYMMETRY([1, 2, -1])).to.be.equal(false);
	});
	it('Shold return false for "hi"', function(){
		expect(SYMMETRY('hi')).to.be.equal(false);
	});
	it('Shold return true for [-1,-2]', function(){
		expect(SYMMETRY([-1, 2, -1])).to.be.equal(true);
	});
	it('Shold return true for [{},{}]', function(){
		expect(SYMMETRY([{}, {}])).to.be.equal(true);
	});
	it('Shold return true for [1,2,1]', function(){
		expect(SYMMETRY([1,2,1])).to.be.equal(true);
	});
	it('Shold return true for []', function(){
		expect(SYMMETRY([])).to.be.equal(true);
	});
	it('Shold return true for [hi, 1 hi]', function(){
		expect(SYMMETRY(['hi', 1, 'hi'])).to.be.equal(true);
	});
	it('Shold return true for []', function(){
		expect(SYMMETRY(['hi'])).to.be.equal(true);
	});
})
