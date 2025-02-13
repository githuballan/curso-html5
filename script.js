function exibir(x){
    k = x.nextElementSibling;
    
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