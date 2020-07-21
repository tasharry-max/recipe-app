const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json())

//ROUTES

app.post('/recipes', async(req, res) => {
    try {
        const { description, date, name } = req.body;
        const newRecipe = await pool.query('INSERT INTO recipe (description, recipe_date, recipe_name) VALUES($1, $2, $3) RETURNING *', 
        [description, date, name]);

    res.json(newRecipe.rows[0]);
    window.location = '/';
    } 
    
    catch (err) {
        console.log(err.message)
    }
})

//get all recipes

app.get('/recipes', async(req, res) => {
    try {
        const allRecipes = await pool.query('SELECT * FROM recipe')
        res.json(allRecipes.rows)
    } 
    catch (err) {
        console.log(err.message)
    }
})

//get recipe

app.get('/recipes/:id', async (req, res)=> {
    try {
        const {id} = req.params;
        const recipe = await pool.query('SELECT * FROM recipe WHERE recipe_id = $1', [id]);
        
        res.json(recipe.rows[0])
    } 
    catch (err) {
        console.log(err.message)
    }
})

//update
app.put("/recipes/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
      const updateRecipe = await pool.query(
        "UPDATE recipe SET description = $1 WHERE recipe_id = $2",
        [description, id]
      );
  
      res.json("Recipe was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //delete
  
  app.delete("/recipes/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteRecipe = await pool.query("DELETE FROM recipe WHERE recipe_id = $1", [
        id
      ]);
      res.json("Recipe was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });
  
app.listen(5000, () => {
    console.log('server has started');
})