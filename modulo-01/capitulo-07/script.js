function exibir(x){
    let k = x.nextElementSibling;
    
    if(k.style.display === "flex")
        {k.style.display = "none";}
        else{k.style.display = "flex";}
};