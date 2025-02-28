function exibir(x){
   let k = x.nextElementSibling;
    
    if(k.style.display === "block")
        {k.style.display = "none";}
        else{k.style.display = "block";}
};

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



function createLinkToVideos() {

  const navVideos= document.getElementById('nav_videos');
 
navVideos.innerHTML = `
<img src="../../icones/YouTube_icon_(2013-2017).png" alt="Play" id="botao_menu-videos" class="buttom-videos" onclick="exibir(this)">

<nav id="lista_videos"></nav>
`;

  // Seleciona todos os elementos <li> dentro da <ul>
  const videoList = document.getElementById('video_list');
 let item = videoList.getElementsByTagName('li');
 let itemArray = [...item];
 

  var navList = document.getElementById('lista_videos');
 
  
  itemArray.forEach((item) => {
      let newLi = document.createElement('li');
     
      newLi.innerHTML = `<ins class="link-vid-sqn" onclick="clicador('botao_menu-videos'); iframeload(this)" data-video-src="${item.getAttribute('data-adress')}">${item.textContent}</ins>`;
      navList.appendChild(newLi);
    
  });
}

function createMenuAcessoRapido(){
  var MenuAcessoRapido=document.getElementById('menu_acesso_rapido');
  MenuAcessoRapido.innerHTML = `<button id="menu-hamburguer" onclick="toggleMenu(this); exibir(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </button>
    <nav id="shortcuts_list"></nav>
    `;
    
    
    const itemShortcutsName = document.getElementById('shortcuts');
    var itemShortcutsNameArray = [...itemShortcutsName.getElementsByTagName('li')];
   
    let shortcutsList = document.getElementById('shortcuts_list');
   
   
    // Itera sobre cada elemento <li> e faz algo com ele
    itemShortcutsNameArray.forEach((item) => {
        let newLi = document.createElement('li');
        newLi.innerHTML = `<a onclick="clicante('menu-hamburguer')" href="${item.getAttribute('data-adress')}">${item.textContent}</a>`;
        shortcutsList.appendChild(newLi);
      
    });
}

function createIndexButton(){
  document.getElementById('button_index').innerHTML = `<a class="buttom buttom-index" href="../../index.html">Índice</a>`;

  
}

function createTelaVideo(){
  document.getElementById('video_iframe').innerHTML = `
  `;
};//Lembrar de colocar o src do iframe igual ao primeiro video da lista usando o array de videos


window.addEventListener('load', () => {
  createIndexButton();
  // createTelaVideo();
  createLinkToVideos();
  createMenuAcessoRapido();
});




function botaoPip() {
  const configIframe = document.getElementById('config_iframe');
  const botaoFixaSolta = document.getElementById('botao_fixa_solta');
  const rangeVideo = document.getElementById('range_video');
  const pip = document.getElementById('pip');
  const pipOut = document.getElementById('pipout');

  configIframe.style.position = 'fixed';
  configIframe.style.left = '15px';
  configIframe.style.bottom = '5px';
  configIframe.style.top = 'unset';
  configIframe.style.width = '45vmin';

  botaoFixaSolta.style.display = 'none';
  botaoFixaSolta.innerHTML = 'Fixar';

  rangeVideo.style.display = 'none';
  pip.style.display = 'none';
  pipOut.style.display = 'inline-block';
}
 

function botaoGetOutPip() {
  const configIframe = document.getElementById('config_iframe');
  const pip = document.getElementById('pip');
  const botaoFixaSolta = document.getElementById('botao_fixa_solta');
  const rangeVideo = document.getElementById('range_video');
  const pipOut = document.getElementById('pipout');

  configIframe.style.position = 'static';
  configIframe.style.width = '100%';
  pip.style.display = 'inline-block';
  botaoFixaSolta.style.display = 'inline-block';
  rangeVideo.style.display = 'inline-block';
  pipOut.style.display = 'none';
}

function toggleIframePosition(button) {
  const configIframe = document.getElementById('config_iframe');

  if (configIframe.style.position === 'sticky') {
    configIframe.style.position = 'static';
    button.innerHTML = 'Fixar';
  } else {
    configIframe.style.position = 'sticky';
    configIframe.style.top = '0px';
    button.innerHTML = 'Soltar';
  }
}

       
  