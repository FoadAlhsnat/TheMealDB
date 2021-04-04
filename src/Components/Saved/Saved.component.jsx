import React,{useState,useEffect} from 'react'
import MapReults from '../MapReults.component'

export default function Saved() {
  const [saved,setSaved]=useState(null)
  useEffect(()=>{
    if(localStorage.getItem('saved')==null)return
    const data=JSON.parse(localStorage.getItem('saved'))
    console.table(data);
    setSaved(data)
  },[])
  return (
    <div className={'mealsContener'}>
      <MapReults data={saved} sender={'meal'} setData={setSaved} saved={true}/>
    </div>
  )
}
