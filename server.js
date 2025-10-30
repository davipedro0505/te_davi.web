const express = require("express");
const exphbs = require ("express-handlebars");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine("handlebars", exphbs.engine ({defaultLayout: false}));
app.set ("view engine", "handlebars");

//Arrays de Pessoas
let pessoas = [
    {id: 1, nome: "Pessoa 1"},
    {id: 2, nome: "Pessoa 2"},
    {id: 3, nome: "Pessoa 3"},
];


//Principal
app.get('/', (req, res) => { 
    res.render('home')  
});

//Listar Pessoas
app.get("/pessoas", (req, res) => {
    res.render('listarPessoas', {pessoas});
});

app.get('/pessoas/nova', (req, res) => { 
    res.render('cadastrarPessoa')  
});

app.post('/pessoas', (req, res) =>{
    const nome = req.body.nome;
    

    const novaPessoa = {
        id: pessoas.length + 1,
        nome: nome
    };

    pessoas.push(novaPessoa);

    res.render('listarPessoas', { pessoas});
});

app.get('/pessoas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pessoa = pessoas.find(p => p.id ===id);

    if(pessoa){
        res.render('detalharPessoa', {pessoa});
    }else{
        res.status(404).send('Pessoa não encontrada!');
    }
});


app.listen(port,()=>{
    console.log(`servidor em execução: http://localhost:${port}`)
});

