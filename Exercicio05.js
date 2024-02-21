// Escreva um programa que imprima os números de 1 a 10 no console usando um loop. Os número devem ser separados com um traço, ex.: 1 – 2 – 3 - ... – 10. Observação: após o número 10 não pode ter um traço.

let pos = '';

for (let index = 1; index <= 10; index++) {
    pos += index
    if (index < 10) {
        pos += ' - '
    }
}
console.log(pos);