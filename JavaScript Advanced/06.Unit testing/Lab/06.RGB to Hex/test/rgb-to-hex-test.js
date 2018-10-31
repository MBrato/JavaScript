let expect = require('chai').expect;

const RGB = require('../rgb-to-hex.js');

describe('RGB to Hex Tests', function(){
	it('Shoul return undefined for "0" , -160, 755', function(){
		expect(RGB('0', 160, 75)).to. be.equal(undefined);
	});
	it('Shoul return undefined for -1, "160", -75', function(){
		expect(RGB(-1, "160", -75)).to. be.equal(undefined);
	});
	it('Shoul return undefined for 1000, 1600, "75"', function(){
		expect(RGB(1000, 1600, "75")).to. be.equal(undefined);
	});
	it('Shoul return undefined for 100, "160", 750', function(){
		expect(RGB(100, "160", 750)).to. be.equal(undefined);
	});
	it('Shoul return undefined for 1000, 160, -75', function(){
		expect(RGB(1000, 160, -75)).to. be.equal(undefined);
	});
	it('Shoul return undefined for 10, -160, 5', function(){
		expect(RGB(10, -160, 5)).to. be.equal(undefined);
	});
	it('Shoul return undefined for 123, 16, "75"', function(){
		expect(RGB(123, 16, "75")).to. be.equal(undefined);
	});
	it('Shoul return undefined for 1023, 16, 17', function(){
		expect(RGB(1023, 16, 17)).to. be.equal(undefined);
	});
	it('Shoul return undefined for 12.123, 16, 17', function(){
		expect(RGB(12.123, 16, 17)).to. be.equal(undefined);
	});
	it('Shoul return undefined for 10, 16.12, 17', function(){
		expect(RGB(10, 16.12, 17)).to. be.equal(undefined);
	});
	it('Shoul return undefined for 23, 26, 17.52', function(){
		expect(RGB(23, 26, 17.52)).to. be.equal(undefined);
	});
	it('Shoul return #FF9EAA for 255, 158, 170', function(){
		expect(RGB(12, 13, 14)).to. be.equal('#0C0D0E');
	});
	it('Shoul return #000000 for 0, 0, 0', function(){
		expect(RGB(0, 0, 0)).to. be.equal('#000000');
	});
	it('Shoul return #FFFFFF for 255, 255, 255', function(){
		expect(RGB(255, 255, 255)).to. be.equal('#FFFFFF');
	});
});