var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let x = 0 ;

do{
    var senha = lines[x]
    
    if (senha == 2002){
        console.log("Acesso Permitido");
        break;
    }
    console.log("Senha Invalida");
    x++;
}while(senha != 2002)