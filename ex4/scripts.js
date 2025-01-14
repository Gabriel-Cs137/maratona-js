var var1 = window.prompt('Insira um número:')

var1 = Number(var1)

for (let i = 0; i < 11; i++ ){
    document.write(var1 , 'x' , i , ' = ' , var1*i , '<br>')
}