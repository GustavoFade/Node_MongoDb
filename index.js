const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

const linkSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    url: {type: String, required: true},
    click: {type: Number, default: 0},
})

const Link = mongoose.model("Link", linkSchema);
let link = new Link({
    title: "Gussstavo Fadel",
    description: "Link para o Linkedin",
    url: "https://www.linkedin.com/in/gustavo-fadel-91b05b202/",
})

link.save().then(doc=>console.log(doc)).catch(console.log("Erro ao inserir"));

mongoose.connect("mongodb://localhost/links",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on("error", ()=>console.log("errou"))
db.once("open", ()=>{console.log("Carregou");})

app.get('/', (req,res)=>{
    res.send("Hello World");
})

app.listen(PORT,()=>{
    console.log("Running");
})