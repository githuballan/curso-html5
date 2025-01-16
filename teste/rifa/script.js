var nome = [];
var nr = 0;
var nrv=0;
var nomev = [];
var inde = 0;

onload = function () { 
    nomev = JSON.parse(localStorage.getItem('nomev')) || [];
    nome = JSON.parse(localStorage.getItem('nome')) || [];
    console.log(nome);
    console.log(nomev);
    marcar();
}

var cont=0;

function sorteio() {
    dis=document.getElementById('res');
    console.log(dis);
    dis.style.display = "block";

    if(nome.length==0){console.log("Rifa vazia")};

    var n = Math.floor(Math.random() * nomev.length);
    inde= nome.indexOf(nomev[n]);
    if(n==0){n++;}
 
    console.log(inde);
   console.log(nomev[n]);
    console.log(n);
    document.getElementById('nomes').innerHTML ="Parabéns "+ nomev[n]+"<br>" + "O número sorteado foi: "+inde;
    
   
    
}

function add() {
    if(document.getElementById('numeroRifa').value>100){console.log("Número inválido")}else{
    var nm = document.getElementById('nomeRifa').value;
    let nr = document.getElementById('numeroRifa').value;
    if(nm==""){console.log("Digite o nome")}else{
    nome[nr]=nm;
    console.log(nome[nr]);
    localStorage.setItem('nome', JSON.stringify(nome));

   

    document.getElementById('nomeRifa').value = "";
    document.getElementById('numeroRifa').value = "";
   
    };
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
    if(nome[t]==null){document.getElementById('nomec').innerHTML = "Vazio";
        document.getElementById('numeroRifa').value = t;
    }else{
    document.getElementById('nomec').innerHTML = nome[t];
    document.getElementById('numeroRifa').value = "";
}
    
}

function elimiNull(){
   
   nomev=nome;
   console.log(nomev);
   console.log(nome);

    let i = 0;
    let k = 0;
    nrv=0;
    
    while(i < 101) {        
        i++;
        if(nome[i] == null) {}
        else {
            nrv++;
            nomev[nrv] = nome[i];
           
        }

        k++;
        if(k > 102) { 
            console.log("break");
            break;
        }
        localStorage.setItem('nomev', JSON.stringify(nomev));
    }

    
    

}

function marcar(){
    let n = 0;
    inde= nome.indexOf(nomev[n]);
    let mar=document.getElementById('n'+inde);

    while(n < 102) {
        n++;

        if(nomev[n] == null) {}
        else {
            inde= nome.indexOf(nomev[n]);
            mar=document.getElementById('n'+inde);
            mar.setAttribute('class','marcado');
            console.log(nomev[n]);
            console.log(inde);
         
        }
       
    }  
   }

   function apagMemoria(){
    console.log(nome);
    console.log(nomev);
    let i = 0;

    while(i < 101) {
        i++;
        nome.shift();
        nomev.shift();
    }
    localStorage.clear();
    

   }

   function listar(){
    
    let n = 0;
    let l = 0;
    let list = document.getElementById('list');
     list.innerHTML = "";//se clicar mais de uma vez não duplica a lista
    let ul = document.createElement('ul');
    list.appendChild(ul);
    
    while(n < 102) {
        n++;
        if(nomev[n] == null) {}
        else {
            inde= nome.indexOf(nomev[n]);
            let li = document.createElement('li');
            ul.appendChild(li);
            li.innerHTML = nomev[n] + " "+inde;
            l++;
        }
        if(l > 100) { 
            console.log("break");
            break;
        }
    }
   }
