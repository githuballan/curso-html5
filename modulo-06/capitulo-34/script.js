{let p = document.getElementById("BHtml")
p.innerHTML="innerHTML";}
{let p = document.getElementById("BHtml2")
console.log(p.innerHTML);}

{let p = document.getElementById("BTxt")
    p.innerText="innerText";}
{let p = document.getElementById("BTxt2")
    console.log(p.innerText);}

{let p = document.getElementById("BCont")
p.textContent="textContent";}
{let p = document.getElementById("BCont2")
    console.log(p.textContent);}


function mudar(m){
    if(m==1){
    let e = document.getElementById("hete")
    let o = document.getElementById("homo")
    e.style.marginRight='6px';
    o.style.marginRight='0px';

    e.innerHTML="Homosexual:";
    o.innerHTML="Heterosexual:"
}else{
    let e = document.getElementById("hete")
    let o = document.getElementById("homo")
    o.style.marginRight='7px';
    e.style.marginRight='0px';

    e.innerHTML="Heterosexual:";
    o.innerHTML="Homosexual:"

}
}

function troca(t){
    if(t==1){
    let f = document.getElementById("lafeminino")
    let m = document.getElementById("lamasculino")
    f.textContent='Masculino:';
    m.textContent='Feminino:';

    f.style.marginRight='0px';
    m.style.marginRight='7px';
    }else{
    let f = document.getElementById("lafeminino")
    let m = document.getElementById("lamasculino")
    m.textContent='Masculino:';
    f.textContent='Feminino:';

    f.style.marginRight='7px';
    m.style.marginRight='0px';

    }
}

 function idade(){
        let p = document.getElementById("lidade")
        let result = document.getElementById("resultado")
        let n= Number.parseInt(p.value);
        let r = n+5;
        result.innerHTML =r;

}

var parente = "filho2";
 var f = "parentElement";

function pai(){
   

    p=document.getElementById(parente);
    let r = document.getElementById("resposta");
    r.innerHTML=p.parentElement;
    console.log(p.parentElement);
}

   
        