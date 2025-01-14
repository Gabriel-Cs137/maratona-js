var var1 = window.prompt('Insira um número:')

var1 = Number(var1);

function impar_par(val1){
    if (val1 % 2 == 0){
        return 'par'
    }
    else{
        return 'ímpar'
    }
}

const resultado = impar_par(var1);
document.write(resultado)
