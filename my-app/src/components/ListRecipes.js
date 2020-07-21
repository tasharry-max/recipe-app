import React, { Fragment, useEffect, useState } from 'react';
import { Button } from "@material-ui/core";
import EditRecipe from './EditTodo';



const ListRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    const deleteRecipe = async (id) => {
        try {
            const deleteRecipe = await fetch(`http://localhost:5000/recipes/${id}`, {
            method: 'DELETE'
        })

        setRecipes(recipes.filter(recipe => recipe.recipe_id !== id))
        }
        catch(err) {
            console.log(err.message);
        }
    }
    const getRecipes= async () => {
        try {
          const response = await fetch("http://localhost:5000/recipes");
          const jsonData = await response.json();
    
          setRecipes(jsonData);
          console.log(jsonData)
        } catch (err) {
          console.error(err.message);
        }
      };

    useEffect(() => {
        getRecipes();
    }, [])
 
    return (
        <Fragment>
            <h2>List of recipes</h2>
            <div className='all-recipes'>
                {recipes.map(recipe =>
                    <div className='recipe' key={recipe.recipe_id}>
                        <h2 className='recipe-name'>{recipe.recipe_name}</h2>
                        <p>{recipe.description}</p>
                        <p className='recipe-date'>{recipe.recipe_date}</p>
                        <Button variant="contained" color="secondary" onClick={() => deleteRecipe(recipe.recipe_id)}>Delete</Button>
                        <EditRecipe recipe={recipe}/>
                    </div>)  
                }
            </div>
        </Fragment>
        
    )
}

export default ListRecipes;