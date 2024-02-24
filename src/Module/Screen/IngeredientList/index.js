import React, { useState } from 'react'
import  { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux'
import { fetchMealIngredients} from '../../../Redux'
import { CheckoutForm, IngredientCard } from '../../Container';
import { Link } from 'react-router-dom'; 

function IngredientList() {
    const dispatch=useDispatch()
    const {  mealIngredientsList,
        selectedMealId,}=useSelector((state)=>state.AuthReducers)
        const [select,setSelected]=useState(false)

    useEffect(()=>{
      const params=selectedMealId?.idMeal
      dispatch(
        fetchMealIngredients(params)
      )
   
  

    },[])

  return (
    <div style={{backgroundColor:"#2d2013"}} className='pt-3' >
<div className='container-fluid px-lg-5 '>
<IngredientCard/>

{mealIngredientsList && <div className='text-center pb-4'onClick={()=>{
setSelected(true)
}} >
<Link href="#checkout-form" className='btn text-center px-4  py-2 mt-2 bg-primary' style={{ color: 'white' }}>Check Out</Link>
        </div>
}
</div>
{ select && 
<div  id="checkout-form" className='container-fluid  px-lg-5 pt-4' style={{backgroundColor:"#f2faf0"}}>
      <CheckoutForm/>
    </div>
}
</div>
  )
}

export {IngredientList}