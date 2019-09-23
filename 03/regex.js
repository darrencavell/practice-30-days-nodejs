var regex = /ab*/;
var strings = ['ab', 'abb', 'abbbbbb', 'abab', 'abc', 'bca', 'aaaaaa'];
strings.forEach(string => {
  console.log(string + ':');
  console.log(string.match(regex));
});

// g = globally
// i = incensitive
// m = multiline
var fs = require('fs');
var digitregex = /\d/gim;
var str = fs.readFileSync('data.txt').toString();
var occurance = str.match(digitregex);
console.log('str:' + occurance.length);

var html = fs.readFileSync('data.html')
var htmlregex = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;