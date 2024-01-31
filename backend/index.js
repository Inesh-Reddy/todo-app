const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();


app.use(express.json());


app.post("create-todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "your inputs are wrong"
        })
        return;
    }
    //put it in mongoDB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: createPayload.fasle,
    })
    res.json({
        msg: "Todo created",
    })

})

app.get("get-todo", async function(req, res){
    const todos= await todo.find({});
    res.json({
        todos,
    })
})

app.put("update-todo", async function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "not a valid one!"
        })
        return;
    }
    //update in MongoDB
    await todo.update({
        _id: req.body.id,
    },
    {
        completed: true,
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000, function(){
    console.log("your sever is listening on port 3000");
})