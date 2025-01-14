var val1 = window.prompt('Insira um primeiro número: ')
var val2 = window.prompt('Insira um segundo número: ')
val1 = Number(val1);
val2 = Number(val2);


function soma(val1,val2){
    return window.alert(val1+val2);
}

soma(val1,val2);
document.write(val1+val2)