import React,{useState,useEffect,} from 'react'
import { useParams } from 'react-router-dom';
import Api from '../Api/Api';

export default function GetMeal(props) {
  const [data,setData]=useState(null)
  const params = useParams();
  useEffect(() => {
    feachData()
    
    
  }, [])

  const feachData=async()=>{
   const res=await Api.get(`/lookup.php?i=${params.id}`)
    console.log(res.data);
  }
  return (
    <div>
      
    </div>
  )
}
