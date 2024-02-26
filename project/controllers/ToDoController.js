const ToDoModel=require("../models/ToDoModel")
module.exports.getToDos=async(req,res)=>{
    const{email}=req.body
    const toDos =await ToDoModel.find({email});
    res.send(toDos);
};

module.exports.saveToDo=(req,res)=>{
    const{toDo,email}=req.body
    ToDoModel.create({toDo,email}).then((data)=>{
        console.log("saved....");
        res.status(201).send(data)
    }).catch((err)=>{
        console.log(err);
        res.send({error: err,msg:"something went wrong !!"});
    });
};
module.exports.deleteToDo=(req,res)=>{
    const {id}=req.params
    ToDoModel.findByIdAndDelete(id).then(()=>{
        console.log("Deleted...");
        res.send("Deleted...")
    }).catch(err=>{
        console.log(err);
        res.send({error:err,msg:"something went wrong!"});
    });
};