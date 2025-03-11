var itemArray = [];
function createLinkToVideos() {

  const navVideos= document.getElementById('nav_videos');
 if(navVideos!==null){
navVideos.innerHTML = `
<img src="../../icones/YouTube_icon_(2013-2017).webp" alt="Play" aria-label="Abrir menu de vídeos" id="botao_menu-videos" class="buttom-videos"
style=" width: 48px; height: 34px;" onclick="
        if(document.getElementById('lista_videos').style.display === 'block')
        {document.getElementById('lista_videos').style.display = 'none';}
        else{document.getElementById('lista_videos').style.display = 'block';}" >
 <nav id="lista_videos">
    <ul id="lista"></ul>
  </nav>
`;

  // Seleciona todos os elementos <li> dentro da <ul>
  const videoList = document.getElementById('video_list');
  let item = videoList.getElementsByTagName('li');
  var itemArray = [...item];
 

  var navList = document.getElementById('lista');
 
  
  itemArray.forEach((item) => {
      let newLi = document.createElement('li');
     
      newLi.innerHTML = `<ins class="link-vid-sqn" onclick="clicador('botao_menu-videos'); iframeload(this);toggleFixarSoltarAposRolarPag()" data-video-src="${item.getAttribute('data-adress')}">${item.textContent}</ins>`;
      navList.appendChild(newLi);
  });
  // iframeload
  // iframeload(navList.firstElementChild.firstElementChild);
}}

function createTelaVideo(){
  const configIframe = document.getElementById('config_iframe');
  configIframe.style.minHeight = "50px"; //para não dar erro no console ao usar o range pois foi definida uma altura mínima no  style do config_iframe na folha de estilo css afim de não criar modificçãoes no layout no carregamento da página.
  if(configIframe!==null){
  let tela=document.createElement('div');
  tela.id = 'tela_iframe';
  configIframe.appendChild(tela);
  tela.innerHTML = `<iframe id="iframev" width="867" height="490" src="../../inicio-iframe.html" title="Criando conta no GitHub - @Curso em Vídeo HTML5 e CSS3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  let controle=document.createElement('div');
  controle.id = 'controles_iframe';
  configIframe.appendChild(controle);
  controle.innerHTML = `
  <button  id="botao_fixa_solta" onclick="toggleIframePosition(this)">Fixar</button>

    <input itemid="range_video" style="width:calc(100% - 130px); display: inline-block" type="range" id="range_video" value="100" min="30" max="100" aria-label="Ajustar tamanho do vídeo" oninput="document.getElementById('config_iframe').style.width=this.value+'%'">

    <img id="pip" aria-label="Modo pictur-in-picture" style=" width: 50px; height: 30px; margin: 10px 0px -5px 0px;" src="../../imagens/pip.svg"onclick="botaoPip()" alt="botão pip
   ">
    
    <img id="pipout" aria-label="Sair do modo pictur-in-picture"  style=" width: 50px; height: 30px;" src="../../imagens/pipout.svg" onclick="botaoGetOutPip()" alt="botão pipout">
</div>
  `;
//Lembrar de colocar o src do iframe igual ao primeiro video da lista usando o array de videos

}}
window.addEventListener('load', () => {
  createTelaVideo();
  createIndexButton();
  createLinkToVideos();
  createMenuAcessoRapido();
  footer();
  head();
  createGoogleTagScript();
});

document.addEventListener('DOMContentLoaded', function() {
  const version = new Date().getTime(); // Usando timestamp como versão

  // Atualizar links de CSS
  const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
  cssLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.setAttribute('href', `${href}?v=${version}`);
  });

  // Atualizar links de JavaScript
  const scripts = document.querySelectorAll('script[src]');
  scripts.forEach(script => {
      const src = script.getAttribute('src');
      script.setAttribute('src', `${src}?v=${version}`);
  });
});

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

    //Verificar se o botão fixar está em fixar, caso não esteja, ele fixa quando o vídeo é trocado
    const configIframe = document.getElementById('config_iframe');

    console.log(configIframe.style.position==='' || configIframe.style.position==='static');


    
}

function toggleFixarSoltarAposRolarPag(){
  let botao=document.getElementById('botao_fixa_solta');
  const configIframe = document.getElementById('config_iframe');
  if(configIframe.style.position==='' || configIframe.style.position==='static'){
    toggleIframePosition(botao);
  }
}

function createGoogleTagScript() {
  const googleTagScript = `
      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z9YVPY1GML"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Z9YVPY1GML');
      </script>
  `;

  const headElement = document.getElementsByTagName('head')[0];

  if (headElement) {
      headElement.insertAdjacentHTML('afterend', googleTagScript);
  }
  console.log('Google Tag adicionado.');
}

function createMenuAcessoRapido(){
  var MenuAcessoRapido=document.getElementById('menu_acesso_rapido');
  if(MenuAcessoRapido!==null){
  MenuAcessoRapido.innerHTML = `<button id="menu-hamburguer" aria-label="Abrir menu de acesso rápido" onclick="toggleMenu(this); 
  
        if(document.getElementById('shortcuts_list').style.display === 'block')
        {document.getElementById('shortcuts_list').style.display = 'none';}
        else{document.getElementById('shortcuts_list').style.display = 'block';}" 
        ">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </button>
    <nav id="shortcuts_list">
    <ul id="list"></ul>
    </nav>
    `;
    
    
    const itemShortcutsName = document.getElementById('shortcuts');

    var itemShortcutsNameArray = [...itemShortcutsName.getElementsByTagName('li')];
   
    let shortcutsList = document.getElementById('list');
   
   
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

  console.log(wayHref);

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

function head(){
  let head = document.getElementsByTagName('head')[0];
console.log(head);

 let metaAuthor = document.createElement('meta');
 metaAuthor.name = 'author';
 metaAuthor.content = 'Allan Cavalcanti';
  head.appendChild(metaAuthor);

  let metaCopyright = document.createElement('meta');
  metaCopyright.name = 'copyright';
  metaCopyright.content = '&copy; 2025 Allan Cavalcanti. Todos os direitos reservados.';
  head.appendChild(metaCopyright);

}

function footer(){
  let footer = document.getElementsByTagName('footer')[0];
  console.log(footer);
  footer.innerHTML = `<p>&copy; 2025 Allan Cavalcanti. Todos os direitos reservados. <a href="../../termos-de-uso.md">Termos de Uso</a></p>`;

}

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
  rangeVideo.value=100;
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
