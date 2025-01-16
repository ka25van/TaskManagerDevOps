const express = require('express');
const mongoose=require('mongoose');
const cors = require('cors');
const dotenv= require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT;

//Middleware
app.use(cors());
app.use(express.json());

//DB connection
mongoose.connect(process.env.MONGODB_URI).then(()=> console.log('Db connected')).catch(err => console.error(err))

//Schema creation
const TaskScheme = new mongoose.Schema({
    title:String,
    completed:{type:Boolean, default:false}
})

const Task = mongoose.model('Task', TaskScheme);

app.get('/tasks', async(req,res)=>{
    try{
        const tasks = await Task.find();
        res.json(tasks)

    }catch(err){
        console.error(err)
    }
})

app.post('/tasks', async(req,res)=>{
    const title = req.body.title;
    const newTask = new Task({title});
    await newTask.save();
    res.json(newTask);
})

app.delete('/tasks/:id', async(req,res)=>{
    await Task.findByIdAndDelete(req.params.id)
    res.json({message:'Task deleted'})
})

app.listen(PORT, ()=> console.log(`Server Running on ${PORT}`))