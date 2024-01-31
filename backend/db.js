const mongoose = require('mongoose');
import "dotenv/config";


mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo: todo,
}