const express=require("express")
const path=require("path")

const app=express()

const viewsDir=path.join(__dirname,"/views")
const publicDir=path.join(__dirname,"/public")

app.use(express.static(publicDir))

app.set("view engine","ejs")
app.set("views", viewsDir)




app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/products",(req,res)=>{
    res.render("products")
})
app.get("/team",(req,res)=>{
    res.render("team")
})



app.listen("80",()=>{
    console.log("server is up on port 80")
})