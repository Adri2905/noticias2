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
function exibir_noticias(){
    const section  = document.getElementById("noticias");

    var noticias =[
        {
            imagem:"../img/img2.jpg",
            titulo:"O cuidado",
            descricao:"O cuidado em identificar pontos críticos na adoção de políticas descentralizadoras acarreta um processo de reformulação e modernização do processo de comunicação como um todo.",
            link:"../html/noticias.html"
        },
         
        {
            imagem:"../img/img3.jpg",
            titulo:"O cuidado",
            descricao:"O empenho em analisar a execução dos pontos do programa pode nos levar a considerar a reestruturação de alternativas às soluções ortodoxas. ",
            link:"../html/noticias.html"
        },
        {
            imagem:"../img/img2.jpg",
            titulo:"O cuidado",
            descricao:"O cuidado em identificar pontos críticos na adoção de políticas descentralizadoras acarreta um processo de reformulação e modernização do processo de comunicação como um todo.",
            link:"../html/noticias.html"
        },
         
        {
            imagem:"../img/img3.jpg",
            titulo:"O cuidado",
            descricao:"O empenho em analisar a execução dos pontos do programa pode nos levar a considerar a reestruturação de alternativas às soluções ortodoxas. ",
            link:"../html/noticias.html"
        },
        {
            imagem:"../img/img3.jpg",
            titulo:"O cuidado",
            descricao:"O empenho em analisar a execução dos pontos do programa pode nos levar a considerar a reestruturação de alternativas às soluções ortodoxas. ",
            link:"../html/noticias.html"
        }
    ];
    var html = "";
    noticias.forEach(noticia => {
        html +=`
        <article class="noticia">
            <img src="${noticia.imagem}" onclick="abrir_lightbox(this)" alt="${noticia.titulo}">
            <h2>${noticia.titulo}</h2>
            <p>${noticia.descricao}</p>
            <a href="${noticia.link}">Leia mais...</a>
        </article>
        `;
    });
    section.innerHTML = html
}