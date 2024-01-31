const express = require('express');
const app = express();


app.use(express.json());


app.post("create-todo", function(req, res){

})

app.get("get-todo", function(req, res){

})

app.put("update-todo", function(req, res){
    
})

app.listen(3000, function(){
    console.log("your sever is listening on port 3000");
})