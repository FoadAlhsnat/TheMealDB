
import React, { useEffect, useState } from 'react'
import API from '../Api/Api'
import MapReults from '../MapReults.component'
import './main.css'
export default function MainPage() {
  const [data, SetData] = useState(null)
  useEffect(() => {
    feathdata()
  }, [])

useEffect(()=>{
  console.log('render');
},[data])
  const feathdata = async () => {
    const arr = []
    for (let i = 0; i < 15; i++) {
      const res = await API.get('/random.php')
      arr.push(res.data.meals[0])
    }

    let temp = []
    let flag
    for (let i = 0, f = 0; f < 10 && i < arr.length; i++, f++) {
      flag = 0
      for (let j = 0; j < temp.length; j++) {
        if (arr[i].idMeal === temp[j].idMeal) {
          f--;
          flag = 1;
        }
      }
      if (flag === 0) {
        arr[i].isSaved=false
        temp.push(arr[i])
      }
    }
    console.table(temp);
    SetData(temp)
  }

  return (
    <div className="mealsContener">
      <MapReults data={data} sender='meal' setData={SetData} />
    </div>
  )
}
