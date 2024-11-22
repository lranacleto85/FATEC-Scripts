let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

const [salario] = lines
let imposto;

const fullTax8 = 999.99*0.08
const fullTax18 = 1499.99*0.18

if (salario>4500){
    imposto = "R$ "+
    (fullTax8+fullTax18+((salario-4500)*0.28)).toFixed(2);
}else if (salario>3000.01){
    imposto = "R$ "+
    (fullTax8+((salario-3000.01)*0.18)).toFixed(2);
}else if (salario>2000.01){
    imposto = "R$ "+
    ((salario-2000.01)*0.08).toFixed(2);
}else{
    imposto = "Isento"
}

console.log(imposto);