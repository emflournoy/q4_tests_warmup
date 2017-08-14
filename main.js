//Write a function that takes a single string as the input then return the number of vowels the string contains. Do not count “y” as a vowel.


function vowels(str) {
  if(!str){return 'Give me something to count, dingus.'}
  if(typeof str !== 'string'){return 'Please input a string, you wafflehead.'}
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i=0; i<str.length; i++){
    if (vowels.includes(str[i])){
      count++
    }
  }
  if (count===0){return 'Yo, millennial, there is no way this is a sentence since there are no vowels.'}
  return count;
}


module.exports = {
  vowels
};
