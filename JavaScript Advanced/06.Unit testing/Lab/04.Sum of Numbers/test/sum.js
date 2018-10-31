function sum(arr){
  let sum = 0;
  for(let num of arr){
    sum += +num;
  }
  return sum;
}

let expect = require('chai').expect;
describe('Test summator', function(){
  it("Should return 3 for [1,2]", function(){
    expect(sum([1, 2])).to.equal(3);
  });
  it("Should return NaN", function(){
    expect(sum(['Sofia', 2, 3])).to.be.NaN;
  });
  it("Should return 3.3", function(){
    expect(sum([1.1, 1.1, 1.1])).to.be.closeTo(3.3, 0.0001);
  });
  it("Should return 4", function(){
    expect(sum([4])).to.equal(4);
  });
  it("Should return 5", function(){
    expect(sum([3.5, 3.5, -1])).to.equal(6);
  });
  it("Should return 0 for []", function(){
    let expected = 0;
    let actual = sum([]);
    if(expected !== actual)
      throw new Error("0 != 0");
  });
})
