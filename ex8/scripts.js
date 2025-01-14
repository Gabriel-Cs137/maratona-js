// Logica: Verificar o número pelos primos antes dele, ir verificando todos os primos até o número, while, numeros, pontos, sim
var primo = window.prompt('Insira um número para verificar se é primo:  ')

primo = Number(primo)
var casa_dos_primo = [2,3,5,7]
var ver_prim = false
var n2 = primo
for (x in casa_dos_primo){
    x = casa_dos_primo[x]
    if (primo % x != 0) 
}