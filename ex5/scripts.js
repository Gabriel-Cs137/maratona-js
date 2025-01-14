const var1 = [3, 7, 2, 9, 5];
var var2 = null;
for (let x in var1){
    x = var1[x]
    if (x > var2){
        var2 = x
    }

}

document.write(var2)