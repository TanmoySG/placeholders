import express from "express";

const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/", function(request, response){
    response.send({
        test : "success"
    })
})

app.listen(PORT, function(){
    console.log("Running")
})
