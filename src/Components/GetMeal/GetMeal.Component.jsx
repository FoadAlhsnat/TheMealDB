import React, { useState, useEffect, } from 'react'
import { useParams } from 'react-router-dom';
import Api from '../Api/Api';
import './getmeal.css'

export default function GetMeal(props) {
  const [data, setData] = useState(null)
  const [ingredient, setIngredient] = useState(null)
  const params = useParams();
  useEffect(() => {
    feachData()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    fershEntries()
    // eslint-disable-next-line
  }, [data])

  const feachData = async () => {
    const res = await Api.get(`/lookup.php?i=${params.id}`)
    console.log(res.data.meals[0].strYoutube.slice(32, -1));
    setData(res.data.meals[0])
  }

  const fershEntries = () => {
    if (data) {
      let temp = Object.entries(data)
      let InreIngredient = []
      let Measure = []
      for (let i = 0; i < temp.length; i++) {
        if (temp[i][0].includes("Ingredient") && temp[i][1] !== null && temp[i][1].length > 1) {
          InreIngredient.push(temp[i][1])
        }
        else if (temp[i][0].includes("Measure") && temp[i][1] !== null && temp[i][1].length > 1) {
          Measure.push(temp[i][1])

        }
      }
      for (let i = 0; i < InreIngredient.length; i++) {
        Measure[i] += ` ${InreIngredient[i]}`
      }

      setIngredient(Measure)
    }
  }

  const RenderIngreadintes = () => {
    if (ingredient) {
      return ingredient.map((ing, index) => <li key={index}>{ing}</li>)
    }
    return <></>

  }
  const addtolocal = () => {
    let meals = []
    if (localStorage.getItem('saved') === null) {
      meals.push(data)

    }
    else {
      meals = JSON.parse(localStorage.getItem('saved'))
      let findl = meals.find(meal => meal.idMeal === data.idMeal)
      if (findl === undefined) {
        meals.push(data)
      }
    }
    localStorage.setItem("saved", JSON.stringify(meals));
  }

  return (
    <div className='meal-content'>
      {
        data ? <><h1>{data.strMeal}</h1>
          <img src={data.strMealThumb} widt='500px' height='500px' alt="" />
          <p>Category:{data.strCategory}</p>
          <p>kitchen:{data.strArea}</p>
          <h3>Ingredients</h3>
          <ul>
            {RenderIngreadintes()}
          </ul>
          <h3>Instructions</h3>
          <p style={{ width: '70%' }}>{data.strInstructions}</p>
          <div className='video'>
            <iframe title="video player" src={`https://www.youtube.com/embed/${data.strYoutube.slice(32)}`} />
          </div>

          {/* <iframe title="video player" src={ `https://www.youtube.com/embed/rokGy0huYEA`} /> */}
          <input type="button" onClick={addtolocal} value="add to saved" />
        </>
          : <p>loading</p>
      }

    </div>
  )
}
