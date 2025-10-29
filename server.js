const express = require("express");
const exphbs = require ("express-handlebars");

const app = express();
const port = 3000;

app.use(express.json());
app.use = (express.urlencoded({extended: true}));

app.engine("handlebars", exphbs.engine ({defaultLayout: false}));
app.set ("view engine", "handlebars");

let pessoas = [
    {id: 1, nome: "Pessoa 1"},
    {id: 2, nome: "Pessoa 2"},
    {id: 3, nome: "Pessoa 3"},
];

app.listen(port,()=>{
    console.log('servidor em execução: http://localhost:$(port)')
});