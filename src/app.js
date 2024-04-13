const express=require("express")
const path=require("path")
const fs = require('fs');

const app=express()

const viewsDir=path.join(__dirname,"/views")
const publicDir=path.join(__dirname,"/public")

app.use(express.static(publicDir))

app.set("view engine","ejs")
app.set("views", viewsDir)

const privateKey = fs.readFileSync('cert/private.key');
const certificate = fs.readFileSync('cert/certificate.crt');

const credentials = { key: privateKey, cert: certificate };

const httpsServer = require('https').createServer(credentials, app);


app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/products",(req,res)=>{
    res.render("products")
})
app.get("/team",(req,res)=>{
    res.render("team")
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})



// app.listen("80",()=>{
//     console.log("server is up on port 80")
// })

httpsServer.listen(443, () => {
    console.log('Express server listening on port 443 (HTTPS)');
});