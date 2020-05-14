//Introdução
var idade = "23"
var idade2 = "10"

var frase = "Bruno mora na Bahia";
console.log(idade + idade2)

console.log(frase)
console.log(frase.replace("na Bahia", "em São Paulo"))

console.log()
//Array e dicionários
var array = ["Bruno", 23, "Campinas", "São Paulo"]

console.log(array[1])
array.push("Nhemon")
console.log(array)


console.log(array.length)
console.log(array.reverse())
console.log(array.join(" - "))

console.log()
//Condicionais e laços de repetição
var idade = 18
var count = 0

if (idade >= 18)
{
    console.log("legal");
}

else 
{
    console.log("não legal")
}

while(count <= 55)
{
    console.log(count)
    count++
}

console.log()
for (count = 0; count < 10; count++)
{
    console.log(count)
}

console.log()
var d = new Date()
alert(d.getMinutes())