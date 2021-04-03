import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Api from '../Api/Api';
import MapReults from '../MapReults.component';
import Pagination from '../Pagination.component';

export default function CategoryMeals() {
  const id = useParams()
  const [data, setData] = useState([])
  const [currentpage, seCurrentpage] = useState(1);
  const [mealsperpage] = useState(10)
  useEffect(() => {
    feachData()
  }, [])

  
  let indexOflLastPost = currentpage * mealsperpage
  const indexOfFirstPost = indexOflLastPost - mealsperpage
  if(indexOflLastPost>data.length){
    indexOflLastPost=data.length;
  }
  //indexOflLastPost=indexOflLastPost>data.length?data.length:indexOflLastPost
  //const indexOfFirstPost = indexOflLastPost - mealsperpage
  const currentmeals = data.slice(indexOfFirstPost, indexOflLastPost);
  console.log('indexOfFirstPost='+indexOfFirstPost+' indexOflLastPost='+indexOflLastPost);

  const paginate = (number) => {
    seCurrentpage(number)

  }

  const feachData = async () => {
    const res = await Api.get(`/filter.php?c=${id.categoty}`)
    setData(res.data.meals)
    console.log(res.data.meals);
  }
  return (
    <div className='mealsContener'>
      <MapReults data={currentmeals} sender={'meal'} />
      <Pagination mealsPerPage={mealsperpage} totalmeals={data.length} paginate={paginate} />
    </div>
  )
}
