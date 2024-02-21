// Escreva uma função que recebe um endereço de e-mail como argumento e retorna true se o e-mail for válido ou false caso contrário. Um e-mail válido deve conter um único símbolo '@' e pelo menos um ponto '.' após o '@'.

// Utilizei as Expressões Regulares, pois dos outros jeitos estava uma bagunça, mesmo o professor não tendo passado essa matéria aderi no codígo!

var email = "felipemendonca@gmail.com"
var email2 = "felipe.mendonca@gmailcom"
var email3 = "theuzin.mandrake@gmail.com"
var email4 = "theuzin.mandrakegmail.com"

function checkEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email)
}

console.log(checkEmail(email))
console.log(checkEmail(email2))
console.log(checkEmail(email3))
console.log(checkEmail(email4))
