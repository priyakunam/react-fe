var express = require('express');

var router = express.Router();



const pool = require("../db");




//getting all data

router.get("/",async(req, res) => {



    try{

      const allTodos = await pool.query("select * from sample" );

      res.json(allTodos.rows);

    }

    catch(err) {

      console.error(err.message);

    }

  });

 

  //getting a particular data

 

//   router.get("/todo/:id",async(req, res) => {

//     const {id} = req.params;

//     try {

//       const todo = await pool.query("select * from todo where todo_id = $1",[id] );

//       res.json(todo.rows[0]);

     

//     } catch (error) {

//       console.error(error.message);

     

//     }

//   });

 

//   // inserting the data

//   router.post("/", async (req, res) => {

//     try {

   

//       const { description} = req.body;

   

//       const newTodo = await pool.query("insert into todo (description) values ($1) returning *",[description]);

   

//        res.json(newTodo.rows[0]);

   




//     }

 

//     catch (err) {

//       console.error(err.message);

//     }

 

//   });

 

 

//   //updating the data

 

//   router.put("/todo/:id",async(req, res)=> {

//     try {

//       const {id}  = req.params;

//       const {description} = req.body;

 

//       const updateTodo = await pool.query("update todo set description = $1 where todo_id = $2",[description,id]);

     

//       res.json("todo was Updated !");

     

//     } catch (error) {

//       console.error(error.message);

     

//     }

//   });

 

 

//   // deleting the data

 

//   router.delete("/todo/:id",async(req, res) => {

 

//     const {id} =req.params;

 

//     const deleteTodo = await pool.query("Delete from todo where todo_id = $1",[id]);

 

//     res.json("todo Was deleted successfully!");

 

//   });



  module.exports = router;