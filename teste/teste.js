
function calcvporc(col){
    n3 = parseFloat(document.getElementById("valor"+col).value) || 0;
    n4 = parseFloat(document.getElementById("embala"+col).value) || 0;
    n5 = parseFloat(document.getElementById("porc"+col).value) || 0;
    result = document.getElementById("vporc"+col);

    calc = n5*n3/n4;
    result.innerHTML = calc.toFixed(2);
} 

function calcvprot(col){
    n6 = parseFloat(document.getElementById("prot"+col).value) || 0;
    n7 = parseFloat(document.getElementById("vporc"+col).value) || 0;
    result = document.getElementById("vprot"+col);

    calc = n7/n6;
    result.innerHTML = calc.toFixed(2);
   
} 

function calcvd(col){
    n8 = parseFloat(document.getElementById("vprot"+col).value) || 0;
    kg= parseFloat(document.getElementById("kg").value) || 0;
    gord= parseFloat(document.getElementById("gord").value) || 0;
    result = document.getElementById("vd"+col);

    calc = n8*(kg*gord);
    result.innerHTML = calc.toFixed(2);
   

}

function calcvm(col){
    n9 = parseFloat(document.getElementById("vd"+col).value) || 0;
    result = document.getElementById("vm"+col);

    calc = n9*30;
    result.innerHTML = calc.toFixed(2);
   

}