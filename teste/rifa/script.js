var nome = [];

onload = function () { 
    // nomev = JSON.parse(localStorage.getItem('nomev')) || [];
    nome = JSON.parse(localStorage.getItem('nome')) || [];
    console.log(nome);
    // console.log(nomev);
    marcar();
}



function sorteio() {
    let ns=0;
    let inscritos=0;
    let nomesort=[];
    let n=0;
    let sorteio=0;
    let k =0;
    let inde=0;

    while(n<101){//verificar qtd de inscritos
        n++;
        if(nome[n]==null){}
            else{
                ns++
                nomesort[ns]=nome[n];
                inscritos++;            
            }
    }
   
    sorteio=101;// forçar entrar no loop while abaixo
    while(sorteio>inscritos){//loop criado para sortear somente número já comprados
       
        sorteio = Math.floor(Math.random()*100);
        if(sorteio<1){
            sorteio = Math.floor(Math.random()*100);};

        k++;
        if(k > 1000) { 
            console.log("break");
            break;
        }
    }

    inde= nome.indexOf(nomesort[sorteio]);

    console.log("nr sorteio "+sorteio);
    console.log("nome do ganhador: "+nomesort[sorteio]);
    console.log("nr escolhido pelo ganhador: "+inde);

    dis=document.getElementById('res');
    dis.style.display = "block";

    document.getElementById('nomes').innerHTML ="Parabéns "+ nomesort[sorteio]+"<br>" + "O número sorteado foi: "+inde;

}




function Cadastrar() {
        if(document.getElementById('numeroRifa').value>100){console.log("Número inválido")}
        else{
            var nm = document.getElementById('nomeRifa').value;
            let nr = document.getElementById('numeroRifa').value;
            if(nm==""){
                console.log("Digite o nome")}
                else{
                    nome[nr]=nm;
                    console.log(nome[nr]);
                    localStorage.setItem('nome', JSON.stringify(nome));

    

                    document.getElementById('nomeRifa').value = "";
                    document.getElementById('numeroRifa').value = "";
                    document.getElementById('nomec').value = "";
   
                };
            };
marcar();

}
var t=0;

function excluir(){
        let td=0;

        td=document.getElementById("n"+t)
        td.removeAttribute('class','marcado')

        console.log(td);
        nome.splice(t,1,null);
       
        localStorage.setItem('nome', JSON.stringify(nome));
        
        dis=document.getElementById('Apagar');
        dis.style.display = "none";
        document.getElementById('nomec').value = "";

    }


function consultatd(tds){
   t= tds.innerHTML;
    if(nome[t]==null){document.getElementById('nomec').innerHTML = "Vazio";
        document.getElementById('numeroRifa').value = t;

        dis=document.getElementById('Apagar');
        dis.style.display = "none";
    
    }else{
    document.getElementById('nomec').innerHTML = nome[t];
    document.getElementById('numeroRifa').value = "";
    
    dis=document.getElementById('Apagar');
    dis.style.display = "block";


    }
    
}



function marcar(){
    let n = 0;
    let inde= nome.indexOf(nome[n]);
    let mar=document.getElementById('n'+inde);

    while(n < 102) {
        n++;

        if(nome[n] == null) {}
        else {
            inde= nome.indexOf(nome[n]);
            mar=document.getElementById('n'+inde);
            mar.setAttribute('class','marcado');
            console.log(nome[n]);
            console.log(inde);
         
        }
       
    }  
   }

   function apagMemoria(){
    console.log(nome);
    // console.log(nomev);
    let i = 0;

    while(i < 101) {
        i++;
        nome.shift();
        // nomev.shift();
    }
    localStorage.clear();

    console.log(nome);
    // console.log(nomev);   

   }

   function listar(){
    let bk=0;
    let n = 0;
    let list = document.getElementById('list');
     list.innerHTML = "";//se clicar mais de uma vez não duplica a lista
     
    console.log("clIcado");
    
    while(n < 100) {n++;
        if(nome[n] == null) {console.log(n);
            bk++
            if(bk == 100) { 
            list.innerHTML=("<p>Não há inscritos</p>");
            console.log(bk);
            
            
        }
        }
        else { 
            inde= nome.indexOf(nome[n]);
            list.innerHTML += ("<li>"+nome[n]+": "+ inde+"</li>")
        
        
       
       
    }
    }
   }
