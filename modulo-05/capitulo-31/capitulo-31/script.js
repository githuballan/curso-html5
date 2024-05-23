familia = new Array("Allan","Karol","Maya","Moana");
console.log(familia[3]);

for(var membro in familia){
    console.log(membro);
}

let frutas = ['maçã', 'banana', 'laranja'];
console.log(frutas[1]);

console.log(frutas.push('Morango'));
console.log(frutas.pop());
console.log(frutas.length);

let indice = frutas.indexOf('banana');
console.log(indice);

console.log(frutas.shift());
console.log(frutas.unshift('Uva'));


frutas.splice(1, 0, "maçã", "bolo", "refrigerante");




frutas.forEach(function(item, indice) {
    console.log(item, indice);
  });
  console.log("------------------------------------------------------")

  frutas.splice(2, 2);

  frutas.forEach(function(item, indice) {
    console.log(item, indice);
  });

  let novoArray = frutas.slice(3, 4);
  console.log(novoArray)