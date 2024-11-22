//Com erro
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

const catalogo = {
    1: 4,
    2: 4.5,
    3: 5,
    4: 2,
    5: 1.5
}

var [cod, qnt] = lines;
var valTotal = catalogo[cod] * qnt

console.log('Total: R$ ' + valTotal.toFixed(2));