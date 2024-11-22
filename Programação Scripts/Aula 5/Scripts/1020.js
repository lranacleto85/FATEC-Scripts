var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [totalDias] = lines

const qntAnos = Math.floor(totalDias / 365);
const qntMeses = Math.floor((totalDias - 365 * qntAnos) / 30)
const qntDias = totalDias - (365 * qntAnos) - (30 * qntMeses)

console.log(qntAnos+" ano(s)");
console.log(qntMeses+" mes(es)");
console.log(qntDias+" dia(s)");