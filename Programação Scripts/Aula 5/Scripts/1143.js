var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [qnt] = lines;

for (let cont = 1; cont <= qnt; cont++){
    console.log(cont, cont*cont, cont*cont*cont);
}