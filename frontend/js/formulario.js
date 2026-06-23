function alterar_tema() {
    const body = document.body;

    if (body.classList.contains("escuro")) {
        body.classList.remove("escuro");
        body.classList.add("claro");
    }
    else {
        body.classList.remove("claro");
        body.classList.add("escuro");
    }
}

async function cadastrar_noticia() {

    const titulo = document.getElementById("titulo").value;
    const conteudo = document.getElementById("conteudo").value;
    const caminhoImagem = document.getElementById("imagem").value;
    const link = document.getElementById("link").value;

    const mensagem = document.getElementById("mensagem");

    try {

        const resposta = await fetch(
            "http://noticias-backend-adrieleleticia-3000.up.railway.appp://127.0.0.1:3000/noticias",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    titulo: titulo,
                    conteudo: conteudo,
                    caminhoImagem: caminhoImagem,
                    link: link
                })
            }
        );

        const resultado = await resposta.json();

        if (resultado.insertId != null) {

            mensagem.innerHTML =
                `✅ Notícia cadastrada com sucesso! ID: ${resultado.insertId}`;

            document.getElementById("titulo").value = "";
            document.getElementById("conteudo").value = "";
            document.getElementById("imagem").value = "";
            document.getElementById("link").value = "";
        }
        else {
            mensagem.innerHTML =
                "❌ Erro ao cadastrar notícia.";
        }

    }
    catch (erro) {
        mensagem.innerHTML =
            "❌ Não foi possível conectar ao servidor.";
    }
}