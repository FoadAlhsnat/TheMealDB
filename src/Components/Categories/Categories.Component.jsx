import React,{useEffect,useState} from 'react'
import Api from '../Api/Api'
import MapReults from '../MapReults.component'
import './cat.css'
export default function Categories() {
  const [data, setData] = useState(null)
  useEffect(()=>{
    feachdata()
    console.log('render');
  },[])

  const feachdata=async()=>{
    const res=await Api.get('/categories.php')
    setData(res.data.categories)
   
  }
  return (
    <div className="CatContener">
      <MapReults data={data} sender='cat'/>
    </div>
  )
}
