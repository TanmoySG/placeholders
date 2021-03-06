import express from "express";

const app = express();
const PORT =  process.env.PORT || 8080

app.use(express.json());

app.get("/", function(request, response){
    response.send({
        test : "success"
    })
})

app.get("/test/:id", function(request, response){
    response.sendFile('./documentation/images/Logo.png', { root : "."})
})

app.listen(PORT, function(){
    console.log("Running on http://localhost:"+PORT)
})
