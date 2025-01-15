var nome = [];
var nr = 0;
var nrv=0;
var nomev = [];


onload = function () { 
    nomev = JSON.parse(localStorage.getItem('nomev'));
    nome = JSON.parse(localStorage.getItem('nome'));
    if (nome == null) {
        nome = [];
    }
    console.log(nome);
    console.log(nomev);
   
}

var cont=0;

function sorteio() {
    dis=document.getElementById('res');
    console.log(dis);
    dis.style.display = "block";

    var n = Math.floor(Math.random() * nomev.length);
    inde= nome.indexOf(nomev[n]);
    if(n==0){n++;}
 
    console.log(inde);
   console.log(nomev[n]);
    console.log(n);
    document.getElementById('nomes').innerHTML ="Parabéns "+ nomev[n]+"<br>" + "O número sorteado foi: "+inde;
    
    
    
}

function add() {
    var nm = document.getElementById('nomeRifa').value;
    let nr = document.getElementById('numeroRifa').value;
    if(nm==""){console.log("Digite o nome")}else{
    nome[nr]=nm;
    console.log(nome[nr]);
    localStorage.setItem('nome', JSON.stringify(nome));

    document.getElementById('nomeRifa').value = "";
    document.getElementById('numeroRifa').value = "";
   
    };
}

function consulta(n) {
   n=document.getElementById('consultaRifa').value;
    ng = localStorage.getItem('nome');
    document.getElementById('nomec').innerHTML = nome[n];
    console.log(nome[n]);
    console.log(ng);
}

function consultatd(tds){
   t= tds.innerHTML;
    console.log(t);
    document.getElementById('nomec').innerHTML = nome[t];
    
}

function elimiNull(){
    let i = 0;
    let k = 0;
    nrv=0;
   
    
    while(i < 102) {
        
        i++;
        if(nome[i] == null) {}
        else {
            nrv++;
            nomev[nrv] = nome[i];
            console.log(nome[i]);
            console.log(nomev[nrv]);
        }

        k++;
        if(k > 102) { 
            console.log("break");
            break;
        }
    }
    localStorage.setItem('nomev', JSON.stringify(nomev));
    console.log(nomev);

}




//usar uma função com for para compilar todos os numeros em um array menor onde será feito o sorteio e depois que o sorteio for feito usar o indexOf no array principal para descobrir o número escolhidos pelo ganhador