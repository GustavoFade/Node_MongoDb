const express = require('express');
const mongoose = require('mongoose');
const linkRouter = require('./routes/linkRoute');
const app = express();
const PORT = 3000;

app.use('/',linkRouter);
// let link = new Link({
//     title: "Gussstavo Fadel",
//     description: "Link para o Linkedin",
//     url: "https://www.linkedin.com/in/gustavo-fadel-91b05b202/",
// })

// link.save().then(doc=>console.log(doc)).catch(console.log("Erro ao inserir"));

mongoose.connect("mongodb://localhost/links",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on("error", ()=>console.log("errou"))
db.once("open", ()=>{console.log("Carregou");})

app.listen(PORT,()=>{
    console.log("Running");
})