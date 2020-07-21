import React from 'react';
import InputRecipe from './components/InputRecipe';
import ListRecipes from './components/ListRecipes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe Book</h1>
        <InputRecipe />
      </header>
      <main>
      <ListRecipes />
      </main>
    </div>
  );
}

export default App;
