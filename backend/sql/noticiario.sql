DROP DATABASE IF EXISTS noticiario;

CREATE DATABASE IF NOT EXISTS noticiario;
USE noticiario;
CREATE TABLE noticias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR (250) NOT NULL,
    conteudo TEXT NOT NULL,
    caminhoImagem VARCHAR(250),
    link VARCHAR(250)
);

INSERT INTO noticias (
    titulo,
    conteudo,
    caminhoImagem,
    link
) VALUES (
    'O Processo de Implantação do Novo Serviço Corporativo de TI',
    'Por outro lado, o desenvolvimento de novas tecnologias de virtualização nos obriga à migração das ferramentas OpenSource. A implantação, na prática, prova que o uso de servidores em datacenter inviabiliza a implantação do sistema de monitoramento corporativo. Do mesmo modo, a lógica proposicional afeta positivamente o correto provisionamento dos paralelismos em potencial. No entanto, não podemos esquecer que a complexidade computacional auxilia no aumento da segurança e/ou na mitigação dos problemas dos métodos utilizados para localização e correção dos erros. O incentivo ao avanço tecnológico, assim como a necessidade de cumprimento dos SLAs previamente acordados possibilita uma melhor disponibilidade da gestão de risco.',
    '../img/ciclo-vida-servico.png',
    '../html/noticia.html'
);

SELECT  
    titulo,
    conteudo,
    caminhoImagem,
    link 
FROM
    noticias;