
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

console.log("Exemplo Number.parseInt(n)1");
{
let n1="3";
let n2=4;
let soma=n1+n2;
n1=Number.parseInt(n1);
console.log(soma);//34
}
console.log("------------------ fim do exemplo Number.parseInt(n)1----------------");
console.log("Exemplo Number.parseInt(n)2");
{
let n3="3";
let n4=4;
n3=Number.parseInt(n3);
let soma=n3+n4;
console.log(soma);//7
}
console.log("------------------ fim do exemplo Number.parseInt(n)2----------------");
console.log("Exemplo Number.parseFloat(n)");
{
let n1="7.5";
let n2=9;
let soma=Number.parseFloat(n1)+n2;
console.log(soma);//16.5
}
console.log("------------------ fim do exemplo parseFloat(n)2----------------");
console.log("Exemplo Number(n)");
{
    let n1="7.5";
    let n2="10";
    let soma=Number(n1)+Number(n2);
    console.log(soma);//17.5
}
console.log("------------------ fim do exemplo Number(n)2----------------");
console.log("Exemplo Number em string");
{
    let n1=7.5;
   console.log(typeof(n1));//number
   n1=String(n1);
   console.log(typeof(n1));//string
}
console.log("------------------ fim do exemplo Number(n)2----------------");
console.log("Exemplo Concatenar com crase");
{
    let nome="Allan";
    let nota1b=9.5;

    console.log("O aluno "+nome+" ficou com nota "+nota1b+" no 1º bimestre");
    console.log(`O aluno ${nome} ficou com nota ${nota1b} no 1º bimestre`);
}

console.log("------------------ fim do exemplo Number(n)2----------------");
console.log("Exemplos Formatando Strings");

{
    let nome="pé sujo";
    console.log(nome.length);
}

{
    let nome="pé sujo";
    console.log(nome.toUpperCase());
}

{
    let nome="PÉ SUJO";
    console.log(nome.toLowerCase());
}

{
    let num=2;
    console.log(num.toFixed(2));
}



