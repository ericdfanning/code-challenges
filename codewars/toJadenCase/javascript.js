/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/

Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase(s) {
     console.log('what is s', this)
     return this.replace(/(^|\s)[a-z]/g, c => c.toUpperCase());
   }
  }
);

// first solution I wanted to figure out a regex solution. The common search results
// didn't work since they don't handle the contractions properly with with \b[a-z] and instead used
// what I did to match only white space characters with \s

Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase() {
     return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
   }
  }
);
// I wanted to do it more programatically ^