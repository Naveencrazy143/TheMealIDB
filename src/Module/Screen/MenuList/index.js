import {useEffect, useState} from 'react'
import {  MenuCard } from '../../Container'
import { useDispatch ,useSelector} from 'react-redux'
import { fetchFoodList,selectedMeal,fetchSearchMeal,setLoader} from '../../../Redux'
import { useNavigate } from "react-router-dom";
import { Loader } from '../../../Component';


function MenuList() {
   const navigation =useNavigate()
    const dispatch=useDispatch()
    const {foodMealsList,filterMeals,loader}=useSelector((state)=>state.AuthReducers)
    const [search,setSearch]=useState('')
    const [selected,setSelected]=useState(false)

    let mealsList=selected?filterMeals:foodMealsList

    const  capitalizeFirstLetter=(string)=> {
      if (string !== undefined && string !== null && string.length > 0)
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(()=>{
      const params={}

      dispatch(
        fetchFoodList(params)
      )
    },[])
    const searchHandler=()=>{
     if(search){
      setSelected(true)
      const params=capitalizeFirstLetter(search)
      dispatch(
        fetchSearchMeal(params)
      )
     }
     else{
      setSelected(false)
     }
    }

  return (
   
    <div style={{backgroundColor:"#2d2013"}} className='pt-5 px-lg-3'>
<div className='container-fluid px-lg-5'>
<div className='pb-1'>
    <h1 className='text-center' style={{color:"white"}}>Welcome to TheMealDB</h1>
</div>
<hr style={{backgroundColor:"white",borderWidth:"2px"}} >
</hr>
<div>
<div className="container">
  <div className="row justify-content-center">
    <div className="col-lg-4 col-md-5"> 
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a Meal"
          onChange={(e)=>{
            setSearch(e.target.value)

          }}
        ></input>
        <div className="input-group-append">
          <button
            className="btn d-sm-block"
            type="button"
            onClick={searchHandler}
          >
            <i className="fas fa-search"></i> 
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<hr style={{backgroundColor:"white",borderWidth:"2px"}}>
</hr>
<div className='text-center mt-lg-4' style={{color:"white"}}>
    Latest Meals
</div>
  
  {mealsList ?
    <div className='row '>
    {
      mealsList?.map((element)=>{
        return(
    <MenuCard src={element.strMealThumb} text={element.strMeal}
    onClick={()=>{
      dispatch(
        selectedMeal(element)
      )
         navigation('/ingredient')
    }}
    /> 
        )
      })
    }
    </div>:
    
    <Loader/>
}
  
    </div>

    </div>
  )
}

export { MenuList}