import express from "express";

const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/", function(request, response){
    response.send({
        test : "success"
    })
})

app.get("/test", function(request, response){
    response.sendFile('./documentation/images/Logo.png', { root : "."})
})

app.listen(PORT, function(){
    console.log("Running")
})
