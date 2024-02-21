// Escreva uma função que recebe uma string como argumento e retorna o número de vogais presentes nessa string. Considere apenas vogais minúsculas (a, e, i, o, u). 

var str = "OLHO"

function QtdVogais(str) {
    var totalVogal = 0;
    var vogais = ['a', 'e', 'i', 'o', 'u', 'O'];

    for (var i = 0; i < str.length; i++) {
        if (vogais.indexOf(str[i]) != -1) {
            totalVogal++;
        }
    }
    return totalVogal;
}

console.log(QtdVogais(str))




