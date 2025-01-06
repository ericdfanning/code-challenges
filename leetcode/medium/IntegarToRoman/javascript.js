/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let romans = {
      'M':  1000, 'CM': 900, 'D':  500, 'CD': 400,
      'C':  100,  'XC': 90,  'L':  50,  'XL': 40,
      'X':  10,   'IX': 9,   'V':  5,   'IV': 4, 'I':  1
  },  
romanNumStr = '';

  for (let letter in romans) {
      while(num >= romans[letter]) {
          romanNumStr += letter;
          num -= romans[letter];
      }
  }
  return romanNumStr; 
};

// I saw other ways that could use division instead of looping multiple times with the inner while loop