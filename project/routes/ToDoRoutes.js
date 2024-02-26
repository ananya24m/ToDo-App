const{Router}=require("express");
const{getToDos,saveToDo,deleteToDo}=require("../controllers/ToDoController");
const isAuthenticated = require("../middlewares/isauthenticated")
const router=Router();
router.post("/get",isAuthenticated, getToDos);
router.post("/save",isAuthenticated,saveToDo);
router.delete("/delete/:id",isAuthenticated,deleteToDo);
module.exports=router