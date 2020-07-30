import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css';
const App = () => {
  const APP_ID = "0cf555dc";
  const APP_KEY = "6a4c3ae113d6d6bd4f89c0c8111f3de8";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query,setQuery] = useState('chicken');

  useEffect( () => {
    getRecipes();
  },[query]);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  
  setRecipes(data.hits);  //sets the recipes to state object
  console.log(data.hits);

  /* fetch(`https://api.edamam.com/`)
  .then(response => {
    response.json();
  }) */
}

  const updateSearch = e => {
    setSearch(e.target.value);
    
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    
    <div className="App">
      <div className="header">
        <h1>Recipe Searcher!!</h1>
        <i className="fa fa-cutlery" aria-hidden="true"></i>
      </div>
      <form onSubmit={getSearch} className="search-form" >
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        url={recipe.recipe.url}
        />
      ))}
      </div>
    </div>
  )
}


export default App;