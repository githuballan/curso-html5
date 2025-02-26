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
function clicador(id){
  let ondeClickar = document.getElementById(id);
  if (ondeClickar) {
      ondeClickar.click();
  } else {
      console.error(`Elemento com ID ${id} não encontrado.`);
  }
}

function clicante(id){
  if(window.innerWidth<1100){
    clicador(id);}
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

window.addEventListener('load', function() {
  // Seleciona todos os elementos <li> dentro da <ul>
  const itemName = document.querySelectorAll('ul#name li');

  const itemAdress = document.querySelectorAll('ul#adress li');

  // Verifica se as listas têm o mesmo comprimento
  if (itemName.length !== itemAdress.length) {
    console.error('As listas de títulos e endereços não têm o mesmo comprimento.');
    return;
}

  console.log(itemName);
  var ul = document.getElementById('lista_videos');
  
  // Itera sobre cada elemento <li> e faz algo com ele
      itemName.forEach((item, index) => {
      var li = document.createElement('li');
      li.innerHTML = `<ins class="link-vid-sqn" onclick="clicador('botao_menu-videos'); iframeload(this)" data-video-src="${itemAdress[index].textContent}">${item.textContent}</ins>`;
      ul.appendChild(li);
  });
});



function botao_pip(){
  document.getElementById('config_iframe').style.position='fixed';
  document.getElementById('config_iframe').style.left='15px';
  document.getElementById('config_iframe').style.bottom='5px';
  document.getElementById('config_iframe').style.top='unset';
  document.getElementById('config_iframe').style.width='45vmin';
  document.getElementById('botao_fixa_solta').style.display='none';
  document.getElementById('botao_fixa_solta').innerHTML='Fixar';
  document.getElementById('range_video').style.display='none';
  document.getElementById('pip').style.display='none';
  document.getElementById('pipout').style.display='inline-block';
}
 

function botao_getout_pip(){
  document.getElementById('config_iframe').style.position='static';
    document.getElementById('config_iframe').style.width='100%';
    document.getElementById('pip').style.display='inline-block';
    document.getElementById('botao_fixa_solta').style.display='inline-block';
    document.getElementById('range_video').style.display='inline-block';
    document.getElementById('pip').style.display='inline-block';
    document.getElementById('pipout').style.display='none';
}

function botao_fixa_solta(x){
  if(document.getElementById('config_iframe').style.position=='sticky'){
    document.getElementById('config_iframe').style.position='static';
    x.innerHTML='Fixar'}else{
      document.getElementById('config_iframe').style.position='sticky';
      document.getElementById('config_iframe').style.top='0px';x.innerHTML='Soltar'}
}


       
  