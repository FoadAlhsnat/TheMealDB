import React from 'react'
import {Link}from 'react-router-dom'
export default function MapReults({data,sender}) {
  const RenderDAta=()=>{
    console.log(data);
    if(data===null) return  <>loadeng</>;
    if(sender==='meal'){
      return data.map(meal=>{
        return (
          <Link to={`/meal/${meal.idMeal}`}>
        <div key={meal.idMeal} className='mealContener'>
          <div>
            <h4>{meal.strMeal.length>20?meal.strMeal.slice(0,15)+'...':meal.strMeal}</h4>
            <img src={meal.strMealThumb} alt="" />
          </div>
        </div>
          </Link>
        )
      })
    } 
    else{
      console.log(data);
      return data.map(cat=>{
        return(
          <div key={cat.idCategory} className="mealContener">
            <h4>{cat.strCategory.length>20?cat.strCategory.slice(0,15)+'...':cat.strCategory}</h4>
            <img src={cat.strCategoryThumb} alt={''}></img>
          </div>
        )
      })
    }
  }
  return (
   <>
      <RenderDAta/>
    </>
  )
}
