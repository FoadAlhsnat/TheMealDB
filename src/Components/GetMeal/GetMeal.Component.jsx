import React,{useState,useEffect,} from 'react'
import { useParams } from 'react-router-dom';
import Api from '../Api/Api';

export default function GetMeal(props) {
  const [data,setData]=useState(null)
  //const [ingredient, setIngredient] = useState(null)
  const params = useParams();
  useEffect(() => {
    feachData()
    // eslint-disable-next-line
  }, [])

  useEffect(()=>{
    fershEntries()
    // eslint-disable-next-line
  },[data])

  const feachData=async()=>{
    const res=await Api.get(`/lookup.php?i=${params.id}`)
    setData(res.data.meals[0])
    console.log(res.data.meals[0]);
  }

  const fershEntries=()=>{
    if(data){
      let temp=Object.entries(data)
      console.log(temp);
      let InreIngredient=[]
      let Measure=[]
      for(let i=0;i<temp.length;i++){
        if(temp[i][0].includes("Ingredient")&&temp[i][1]!==null&&temp[i][1].length>1){
            InreIngredient.push(temp[i][1])
        }
        else if(temp[i][0].includes("Measure")&&temp[i][1]!==null && temp[i][1].length>1){
          Measure.push(temp[i][1])
          
        }
      }
      for(let i=0;i<InreIngredient.length;i++){
        Measure[i]+=` ${InreIngredient[i]}`
      }
      console.log(Measure[Measure.length-1][1].length);
      console.log(Measure);
    }
  }
  return (
    <div>
      hi
    </div>
  )
}
