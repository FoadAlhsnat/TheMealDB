
import React, { useEffect, useState } from 'react'
import API from '../Api/Api'
import MapReults from '../MapReults.component'
import './main.css'
export default function MainPage() {
  const [data, SetData] = useState(null)
  useEffect(() => {
    feathdata()
  }, [])


  const feathdata = async () => {
    const arr=[]
    for(let i=0;i<10;i++){
      const res = await API.get('/random.php')
    arr.push(res.data.meals[0])
    }
    console.log(arr);
    SetData(arr)
  }

  return (
    <div className="mealsContener">
      {/* <MapResult /> */}
      <MapReults data={data} sender='meal'/>
    </div>
  )
}