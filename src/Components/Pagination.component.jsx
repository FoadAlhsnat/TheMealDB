import React from 'react'

export default function Pagination({mealsPerPage,totalmeals,paginate}) {
  const pagenumbers=[]
  
  for(let i=1;i<=Math.ceil(totalmeals/mealsPerPage);i++){
    pagenumbers.push(i)
  }
  return (
    <div>
      {
        pagenumbers.map(number=>(
          <input onClick={()=>paginate(number)} key={number} type="button" value={number}/>
        ))
      }
    </div>
  )
}
