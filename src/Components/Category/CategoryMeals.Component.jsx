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
    // eslint-disable-next-line
  }, [])


  const indexOflLastmeal = currentpage * mealsperpage
  const indexOfFirstmeal = indexOflLastmeal - mealsperpage
  const currentmeals = data.slice(indexOfFirstmeal, indexOflLastmeal);

  const paginate = (number) => {
    seCurrentpage(number)
  }

  const feachData = async () => {
    const res = await Api.get(`/filter.php?c=${id.categoty}`)
    setData(res.data.meals)
    console.log(res.data.meals);
  }
  return (
    <>
      <div className='mealsContener'>
        <MapReults data={currentmeals} sender={'meal'} />
      </div>
      <Pagination mealsPerPage={mealsperpage} totalmeals={data.length} paginate={paginate} />
    </>
  )
}
