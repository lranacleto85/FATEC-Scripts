let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

const [a,b,c] = lines;
let aPeso = 2
let bPeso = 3
let cPeso = 5

let media = ((a*aPeso)+(b*bPeso)+(c*cPeso))/(aPeso+bPeso+cPeso)

console.log('MEDIA = ' + (media.toFixed(1)));