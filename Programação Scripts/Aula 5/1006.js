var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [a,b,c] = lines;
var aPeso = 2
var bPeso = 3
var cPeso = 5

var media = ((a*aPeso)+(b*bPeso)+(c*cPeso))/(aPeso+bPeso+cPeso)

console.log('MEDIA = ' + (media.toFixed(1)));