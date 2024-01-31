const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();


app.use(express.json());


app.post("create-todo", function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "your inputs are wrong"
        })
        return;
    }
    //put it in mongoDB

})

app.get("get-todo", function(req, res){

})

app.put("update-todo", function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "not a valid one!"
        })
        return;
    }
    //update in MongoDB
})

app.listen(3000, function(){
    console.log("your sever is listening on port 3000");
})