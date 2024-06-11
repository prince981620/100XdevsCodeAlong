const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
app.use(express.json());

app.post("/todo",(req,res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You have sent the wrong inputs"
        })
        return;
    }else{ //put in database

    }
})

app.get("/todos",(req,res)=>{})

app.put("/completed",(req,res)=>{
    const updatePayload = req.body;
    const parseUpPayload = updateTodo.safeParse(updatePayload);
    if(!parseUpPayload.success){
        res.status(411).json({
            msg: "You have sent the wrong id"
        })
        return;
    }else{ //update todo to completed in database

    }
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})