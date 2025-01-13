function calcv(col){
    n3 = parseFloat(document.getElementById("valor"+col).value) || 0;
    n4 = parseFloat(document.getElementById("ml"+col).value) || 0;
    
    result = document.getElementById("result"+col);

    let calc = n3/n4*1000;
    result.innerHTML = calc.toFixed(2);
}

function cor(){
    n3 = parseFloat(document.getElementById("result1").value) || 0;
    n4 = parseFloat(document.getElementById("result2").value) || 0;

    if( n3 < n4){
       
        document.getElementById("result1").style.backgroundColor = "greenyellow";
        document.getElementById("result2").style.backgroundColor = "red";} else{
            document.getElementById("result1").style.backgroundColor = "red";
            document.getElementById("result2").style.backgroundColor = "greenyellow";
        }
    }