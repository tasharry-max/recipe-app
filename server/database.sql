CREATE DATABASE recipedb;

CREATE TABLE recipe(
    recipe_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
)