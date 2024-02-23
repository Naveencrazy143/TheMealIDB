import React from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '../../../Component';

function OrderInformation() {
  const { shippingInformations, mealIngredientsList } = useSelector((state) => state.AuthReducers);

  return (
    <d>
{mealIngredientsList ?
    <div className="container-fluid px-lg-5 " style={{backgroundColor:'#2d2013'}}>
      <h2 className="py-3 text-center px-lg-3" style={{color:'white'}}>Order Information</h2>

      <hr  style={{backgroundColor:"white",borderWidth:"2px"}}className='px-lg-3' >
</hr>
      <div style={{backgroundColor:'#2d2013',color:'white'}} className='px-lg-3'>
      <h5 className='py-2' style={{color:'#ffad4e'}}>Shipping Information</h5>
        <div className='row pb-3'>
     
        <div className="col-lg-6 col-md-6">

          <p  style={{fontWeight:'bolder'}}> Name    : <span style={{fontWeight:'normal'}}>{shippingInformations?.fullName}</span> </p>
          <p  style={{fontWeight:'bolder'}}> Address : <span style={{fontWeight:'normal'}}>{shippingInformations?.address}</span> </p>
          <p  style={{fontWeight:'bolder'}}> City : <span style={{fontWeight:'normal'}}> {shippingInformations?.city}</span> </p>
          <p  style={{fontWeight:'bolder'}}> Number : <span style={{fontWeight:'normal'}}>{shippingInformations?.phone}</span> </p>
          <p  style={{fontWeight:'bolder'}}> Email : <span style={{fontWeight:'normal'}}> {shippingInformations?.email}</span> </p>
          <p  style={{fontWeight:'bolder'}}> Ordered Time : <span style={{fontWeight:'normal'}}> {shippingInformations?.time}</span> </p>
    
      
       
        </div>
          <div className='col-lg-6 col-md-6'>
            {mealIngredientsList?.map((meal, index) => (
            <div key={index}>
              <h5 className=" pb-1 pl-lg-2">{meal.strMeal}</h5>
                 <div >
        <div >

        <div className="col-lg-6  my-lg-3 col-md-6 col-sm-6">
  <div className="card" style={{backgroundColor:"#2d2013"}}>
    <img className="card-img-top" src={meal.strMealThumb} alt="Card image cap" />
   
  </div>
</div>
        </div>
     
      </div>

             
            </div>
          ))}

</div>

        </div>
    
     
      </div>

   
    
    </div>
    :<Loader/>
}

    
    </d>
  );
}

export { OrderInformation};
