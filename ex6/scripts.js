const palavra1 = window.prompt('Insira uma palavra')

var palavra2 = palavra1.split('')

palavra2.reverse();
palavra2 = palavra2.join('');


document.write('Palavra original: ',palavra1,'<hr>')
document.write('Palavra invertida: ',palavra2)