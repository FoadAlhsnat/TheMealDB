import React from 'react'
import { Link } from 'react-router-dom'



export default function MapReults({ data, sender, setData }) {
  const addtolocal = (mealtosave) => {
    let meals;
let filter=data.map(item=>{
  if(item.idMeal===mealtosave.idMeal){
    item.isSaved=!item.isSaved
  }
  return item
})
    if (localStorage.getItem('saved') === null) {
      meals = []
      meals.push(mealtosave)

    }
    else {
      meals = JSON.parse(localStorage.getItem('saved'))
      let findl = meals.find(meal => meal.idMeal === mealtosave.idMeal)
      if (findl === undefined) {
        meals.push(mealtosave)
      }
    }
    localStorage.setItem("saved", JSON.stringify(meals));
    setData(filter)
  }

  const removefromlocal = (mealtoremove) => {
    console.log(window.location.href);
    let meals = JSON.parse(localStorage.getItem('saved'))
    if(window.location.href==='http://localhost:3001/'||window.location.href==='https://foadmealdb.netlify.app/'){
      meals = meals.filter(meal => meal.idMeal !== mealtoremove.idMeal)
      let filter=data.map(item=>{
        if(item.idMeal===mealtoremove.idMeal){
          item.isSaved=!item.isSaved
        }
        return item
      })
      localStorage.setItem("saved", JSON.stringify(meals));
      setData(filter)
      return;
    }
    //let meals = JSON.parse(localStorage.getItem('saved'))
    meals = meals.filter(meal => meal.idMeal !== mealtoremove.idMeal)
    localStorage.setItem("saved", JSON.stringify(meals));
    console.table(meals);
    setData(meals)
  }
  // if(JSON.parse(localStorage.getItem('saved')).some(item=>item.idMeal===meal.idMeal)){

  // }
  const RenderDAta = () => {
    if (data === null) return <>loadeng</>;
    if (sender === 'meal') {
      return data.map((meal, i) => {
        return (

          <div key={meal.idMeal} className='mealContener'>
            <Link key={meal.idMeal} to={`/meal/${meal.idMeal}`}>
              <div >
                <h4>{meal.strMeal.length > 17 ? meal.strMeal.slice(0, 15) + '...' : meal.strMeal}</h4>
                <img src={meal.strMealThumb} alt="" />
              </div>
            </Link>
            {
              meal.isSaved ? <input type="button" onClick={() => removefromlocal(meal)} value="remove" /> :
                <input type="button" onClick={() => addtolocal(meal)} value="save" />
            }

          </div>
        )
      })
    }
    else {
      return data.map(cat => {
        return (
          <Link key={cat.idCategory} to={`/categories/${cat.strCategory}`}>
            <div key={cat.idCategory} className="mealContener">
              <h4>{cat.strCategory.length > 20 ? cat.strCategory.slice(0, 15) + '...' : cat.strCategory}</h4>
              <img src={cat.strCategoryThumb} alt={''}></img>
            </div>
          </Link>
        )
      })
    }
  }
  return (
    <>
      <RenderDAta />
    </>
  )
}
