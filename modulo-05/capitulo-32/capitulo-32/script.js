

console.log(saudacao());



function saudacao(nome = 'mundo') {
    return `Olá, ${nome}!`;
    }
    nome= "allan"
    
    console.log(saudacao(nome));

//const media =function (n1=0,n2=0,n3=0,n4=0){
  //  return `Sua média é: ${(n1+n2+n3+n4)/4}`;
//};


//console.log(media(5,5,15,8));

function soma(n1=0,n2=0,n3=0,n4=0){
    return n1+n2+n3+n4;
}
console.log(soma(10,15,5,7))

const soma1 =function (n1=0,n2=0,n3=0,n4=0){
    return n1+n2+n3+n4;
};


console.log(soma1(5,5,15,8));

const soma2=(a1=0,a2=0,a3=0,a4=0)=>a1+a2+a3+a4;

console.log(soma2(5,5,18,8));



console.log("_---------------------------------------------------------------------");
//desafio juntando tudo
// Criar um sistema de notas por alunos com média e Aviso de aprovado ou reprovado:

var aluno=["Allan", "Karol", "Maya", "Moana"];
var notas1b=[10,7,8,9];
var notas2b=[10,5,7,8];
var notas3b=[10,6,6,7];
var notas4b=[10,10,8,6];
var a=0;//   10 7 7,25 7,5 


function media( nt1=0,nt2=0,nt3=0,nt4=0){
    nt1=notas1b[a];
    nt2=notas2b[a];
    nt3=notas3b[a];
    nt4=notas4b[a];
    return (nt1+nt2+nt3+nt4)/4    
}
console.log(media())



function sera(m=media()) {
    
    if(m>=7){return"Aprovado"}
    else{return"Reprovado"}
};// return deve ficar antes do resultado final de if

notas2b.splice(1,1,3);//modificando a nota do 2º bimestre da karol com splice.

console.log(sera())

for(var a in aluno){
   
    console.log(aluno[a]+"  "+notas1b[a]+"  "+notas2b[a]+"  "+notas3b[a]+"  "+notas4b[a]+" Sua média é: "+media()+"  "+sera());
    a++
}
