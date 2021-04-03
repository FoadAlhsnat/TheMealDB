import React from 'react'
import {Link}from 'react-router-dom'
export default function MapReults({data,sender}) {
  const addtolocal=()=>{
    
    if( localStorage.getItem('meals')){
      console.log(localStorage.getItem('meals'));
    }
    else{
      console.log('not');
    }

  }
  const RenderDAta=()=>{
    if(data===null) return  <>loadeng</>;
    if(sender==='meal'){
      return data.map((meal,i)=>{
        return (
          
        <div key={meal.idMeal} className='mealContener'>
          <Link key={meal.idMeal} to={`/meal/${meal.idMeal}`}>
          <div >
            <h4>{meal.strMeal.length>17?meal.strMeal.slice(0,15)+'...':meal.strMeal}</h4>
            <img src={meal.strMealThumb} alt="" />
          </div>
          </Link>
          <input type="button" value="save"/>
        </div>
        )
      })
    } 
    else{
      return data.map(cat=>{
        return(
          <Link key={cat.idCategory} to={`/categories/${cat.strCategory}`}>
          <div key={cat.idCategory} className="mealContener">
            <h4>{cat.strCategory.length>20?cat.strCategory.slice(0,15)+'...':cat.strCategory}</h4>
            <img src={cat.strCategoryThumb} alt={''}></img>
          </div>
          </Link>
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
