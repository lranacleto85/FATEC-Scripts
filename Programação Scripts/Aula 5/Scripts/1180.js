var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [qnt,vetor] = lines;
const lista = vetor.split(" ");

let menor = lista[0];
let posicao = 0;

for (x in lista){
    if (parseInt(lista[x]) < menor){
        menor = parseInt(lista[x]);
        posicao = x;
    }
}

console.log("Menor valor: "+menor);
console.log("Posicao: "+posicao);