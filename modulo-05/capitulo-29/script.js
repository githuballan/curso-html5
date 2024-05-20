
console.log("Exemplo Switch")

var a = 3;
a=8
console.log(a)

switch(a){
    case 2:
        console.log("case 2")
        break

    case 3:
        console.log("case 3")
        break

    case 4:
        console.log("case 4")
        break

    default:
        break

}
console.log("Fora")
console.log("---------------------------Fim do exemplo Switch----------------")

console.log("Exemplo For")
var backup =1
for(var i=1; i<15; i++){
    console.log(i+"ª vez impresso")
    backup++
    if(backup>20){console.log("break"); break}
}
console.log("---------------------------Fim do exemplo For----------------")

console.log("Exemplo While")

backup =1;
var w=1;
while(w<11){
    console.log(w+"ª vez");
    w++

    backup++;
    if(backup>20){console.log("break"); break}
}

console.log("---------------------------Fim do exemplo While----------------")

console.log("Exemplo do... While")

var d=11;
backup =1
do{
    
    console.log(d+"ª vez");
    d++;


    backup++
    if(backup>200){console.log("break"); break}
}while(d<10);

console.log("---------------------------Fim do exemplo do... While----------------")

console.log("Exemplo math.random");

var m=Math.random()*100;

console.log(m);
console.log("---------------------------Fim do exemplo math.random----------------");