const chai = require('chai');
const assert = chai.assert;

const vowels = require('../main').vowels;

describe('vowels', function() {
  it('should return a number', function() {
    assert.equal(vowels('Fawkes the dragon slayer'), 7);
  });
  it('should display a message if given a non-string input', function() {
    assert.equal(vowels(5), 'Please input a string, you wafflehead.');
  });
  it('should display a message if there are no vowels', ()=>{
    assert.equal(vowels('dnt wnt 2 shw vwls'), 'Yo, millennial, there is no way this is a sentence since there are no vowels.')
  });
  it('should display a message if there is no input', ()=>{
    assert.equal(vowels(), 'Give me something to count, dingus.')
  })
});
