function exibir(x){
   let k = x.nextElementSibling;
    
    if(k.style.display === "block")
        {k.style.display = "none";}
        else{k.style.display = "block";}
};

// function navload(){
   
//     fetch('../../index.html')
//         .then(response => response.text())
//         .then(data => {
//             let parser = new DOMParser();
//             let doc = parser.parseFromString(data, 'text/html');
//             let content = doc.querySelector('#index-tipo'); // Adjust the selector as needed
//             console.log(content);
//             document.querySelector('#inde').innerHTML = content.innerHTML;
//         })
//         .catch(error => console.error('Error fetching the page:', error));
//    }

function toggleMenu(x) {
  x.classList.toggle("change");
}

function clicante(id){
    
  let ondeClickar = document.getElementById(id);
  if(window.innerWidth<1100){
  ondeClickar.click();}
}

function clicador(id){
  let ondeClickar = document.getElementById(id);
  ondeClickar.click();
}

function valueMaxMin(max,min,input){
    
    if(input.value > max){
        input.value = max;
        
    }else if(input.value < min){
        input.value = min;
    }
    console.log(input.value);
}

function iframeload(x){
    let endereco = x.getAttribute('data-video-src');
    let iframe=document.getElementsByTagName('iframe')[0];
    iframe.src = endereco;
    console.log(endereco);
    console.log(iframe);
}