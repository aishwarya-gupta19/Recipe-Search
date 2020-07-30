import React from 'react';
import style from "./recipe.module.css";

const Recipe = ({title,calories,image,ingredients,url}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>Caloric Value  {calories}</p>
            <img className={style.image} src={image} alt=""/>
            <a href={url}>View Details</a>       
        </div>
    );
};

export default Recipe;