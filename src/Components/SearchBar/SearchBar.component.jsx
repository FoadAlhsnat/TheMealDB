import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import Api from '../Api/Api'
import './search.css'
export default function SearchBar() {
  const [term,setTerm]=useState('')
const [data, setData] = useState(null)
  useEffect(()=>{
    if(term!==''){
      fetchData()
    }
    else{
      setData(null)
    }
       // eslint-disable-next-line
  },[term])


  const fetchData= async()=>{
    const res =await Api.get(`/search.php?s=${term}`)
    console.log(res.data.meals);
    setData(res.data.meals)
  }

  const RenderData=()=>{
    if(data){
      return data.map((meal)=><div className='item' onClick={(e)=>{setTerm('')}} key={meal.idMeal}><Link to={`/meal/${meal.idMeal}`}>{meal.strMeal.length > 30 ? meal.strMeal.slice(0, 15) + '...' : meal.strMeal}</Link></div>)
    }
    return <></>
  }

  const handleChange=(e)=>{
    setTerm(e.target.value)
    console.log(e.target.value);
  }
  return (
    <div className='absolute'>
      <input type="text" name="" value={term} onChange={handleChange} id=""/>
      <div className='contener' >
        
          {
            <RenderData/>
          }
        
      </div>
    </div>
  )
}
