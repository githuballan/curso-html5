var itemArray = [];



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
    iframe=document.getElementById('iframev');
    iframe.src = endereco;
   
}



function createLinkToVideos() {

  const navVideos= document.getElementById('nav_videos');
 if(navVideos!==null){
navVideos.innerHTML = `
<img src="../../icones/YouTube_icon_(2013-2017).png" alt="Play" id="botao_menu-videos" class="buttom-videos" onclick="exibir(this)">

<nav id="lista_videos"></nav>
`;

  // Seleciona todos os elementos <li> dentro da <ul>
  const videoList = document.getElementById('video_list');
  let item = videoList.getElementsByTagName('li');
  var itemArray = [...item];
 

  var navList = document.getElementById('lista_videos');
 
  
  itemArray.forEach((item) => {
      let newLi = document.createElement('li');
     
      newLi.innerHTML = `<ins class="link-vid-sqn" onclick="clicador('botao_menu-videos'); iframeload(this)" data-video-src="${item.getAttribute('data-adress')}">${item.textContent}</ins>`;
      navList.appendChild(newLi);
  });
  // iframeload
  iframeload(navList.firstElementChild.firstElementChild);
}}

function createMenuAcessoRapido(){
  var MenuAcessoRapido=document.getElementById('menu_acesso_rapido');
  if(MenuAcessoRapido!==null){
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
}}
 
function createIndice(h){
    let nextElementIrmão = h.nextElementSibling;
    
    // Verifica se os links já foram criados
    if (nextElementIrmão.getAttribute('data-links-created') === 'true') {
      return; // Sai da função se os links já foram criados
    }
  
    // Marca que os links foram criados
    nextElementIrmão.setAttribute('data-links-created', 'true');

    // Início da criação dos links
  const itemShortcutsName = nextElementIrmão.firstElementChild;

  let wayHref=h.firstElementChild.getAttribute('href');

  console.log(nextElementIrmão.firstElementChild);

  var itemShortcutsNameArray = [...itemShortcutsName.getElementsByTagName('li')];
 
  let shortcutsList = nextElementIrmão;
  
  console.log(itemShortcutsNameArray);
  

  // Itera sobre cada elemento <li> e faz algo com ele
  itemShortcutsNameArray.forEach((item) => {
      let newLi = document.createElement('li');
      newLi.innerHTML = `<a href="${wayHref}${item.getAttribute('data-adress')}">${item.textContent}</a>`;
      shortcutsList.appendChild(newLi);
    
  });
  console.log(shortcutsList);
  //if(shortcutsList.style.display === 'none'){shortcutsList.innerHTML='';}//não dá certo pois ele apaga a ul com os li data-adress então depois fica sem ter de onde pegar informação para criar o indice
}


function createIndexButton(){
  let index = document.getElementById('button_index')
  if(index!==null){
  index.innerHTML = `<a class="buttom buttom-index" href="../../index.html">Índice</a>`;  
}
}

function createTelaVideo(){
  const configIframe = document.getElementById('config_iframe');
  if(configIframe!==null){
  let tela=document.createElement('div');
  tela.id = 'tela_iframe';
  configIframe.appendChild(tela);
  tela.innerHTML = `<iframe id="iframev" width="867" height="490" src="https://www.youtube.com/embed/1QTi8nIlK1o" title="Criando conta no GitHub - @Curso em Vídeo HTML5 e CSS3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  let controle=document.createElement('div');
  controle.id = 'controles_iframe';
  configIframe.appendChild(controle);
  controle.innerHTML = `
  <button  id="botao_fixa_solta" onclick="toggleIframePosition(this)">Fixar</button>

    <input itemid="range_video" style="width:calc(100% - 100px); display: inline-block" type="range" id="range_video" value="100" min="30" max="100" oninput="document.getElementById('config_iframe').style.width=this.value+'%'">

    <img id="pip" src="../../imagens/pip.svg"onclick="botaoPip()" alt="botão pip
   ">
    
    <img id="pipout" src="../../imagens/pipout.svg" onclick="botaoGetOutPip()" alt="botão pipout">
</div>
  `;
//Lembrar de colocar o src do iframe igual ao primeiro video da lista usando o array de videos

}}


window.addEventListener('load', () => {
  createIndexButton();
  createTelaVideo();
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
