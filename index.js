const express = require ("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql")

const app = express()

app.engine("handlebars", exphs.emgine())
app.set("view engine", "handlebars")

app.use(express.static("public"))

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.get("/", (requisicao, resposta) => {
    resposta.reder("home")
})

const conn = mysql.createConnection({
    
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodemysql",
    port: 3306
})

conn.connect((error) => {
    if (error) {
        console.log("conectado ao mysql!")

        app.listen(3000, () =>{
            console.log("servidor rodando na porta 3000!")
        })