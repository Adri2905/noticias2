import express from 'express';
import executarQuery from './db.js';

const app = express();
app.use(express.json());

app.get ('/noticiario', async (req, res)=>{
    let query =`
        SELECT  
            titulo,
            conteudo,
            caminhoImagem,
            link 
    FROM
            noticiario;
    `;

    let resultado = await executarQuery(query);
    res.send(resultado);
});

app.get('/check', async (req, res) => {
    var status = {
        status: "Running.."
    };
    res.send(status);
});

app.post('/check', async (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.get('/hello', async (req, res) => {
    var hello = {
        hello: "Hello from Teacher!"
    };
    res.send(hello);
});

app.post('/hello', async (req, res) => {
    try {
        res.send({
            hello: `Adriele diz olá pra você ${req.body.name}`
        })
    }
    catch{
        res.send({
            hello: 'fail'
        })
    }
});

app.listen(3000, () =>{
    console.log("Servidor online em http://localhost:3000");
});5