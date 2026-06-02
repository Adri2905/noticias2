function alterar_tema() { 
    var body = document.body;

    if (body.classList.contains("escuro")){
        body.classList.remove("escuro");
        body.classList.add("claro");
    }
    else{
        body.classList.remove("claro");
        body.classList.add("escuro");
    }
}
function mudar_titulo(element){
    element.innerHTML="Portal Web";
}

function abrir_lightbox(element){
    var lightbox = document.getElementById("lightbox");
    var lightbox_img = document.getElementById("lightbox-img");
    
    lightbox_img.src = element.src;
    lightbox.style.display = "flex";
}


function fechar_lightbox(){
    document.getElementById("lightbox").style.display = "none";
}

async function exibir_noticias(){
    const section  = document.getElementById("noticias");
    section.innerHTML = "<h2>Aguarde, carregado documento...</h2>"
try{

        const resposta = await fetch('http://127.0.0.1:3000/noticias');
        var noticias = await resposta.json();
        
        var html = "";
        noticias.forEach(noticia => {
            html +=`
            <article class="noticia">
            <img src="${noticia.caminhoImagem}" onclick="abrir_lightbox(this)" alt="${noticia.titulo}">
            <h2>${noticia.titulo}</h2>
            <p>${noticia.conteudo}</p>
            <a href="${noticia.link}">Leia mais...</a>
            </article>
            `;
        });
        section.innerHTML = html
    }
    catch(erro){
        section.innerHTML('<h2> Erro ao carregar noticias</h2>')
    }

}