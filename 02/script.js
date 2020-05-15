//parte 02.1
const soma = (a, b) => a + b
const replace = (frase, nome1, nome2) => frase.replace(nome1, nome2)
console.log(soma(5, 5))
console.log(replace("Bruno mora no Brasil", "Brasil", "Japão"))

console.log()

var idade = prompt("Qual sua idade?")
const verificaIdade = idade => ((idade >= 18) ? "True" : "False");
console.log(verificaIdade(idade));

console.log()
console.log()
