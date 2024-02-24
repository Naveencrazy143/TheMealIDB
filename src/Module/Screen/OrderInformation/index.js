import React from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '../../../Component';

function OrderInformation() {
  const { shippingInformations, mealIngredientsList } = useSelector((state) => state.AuthReducers);

  const  capitalizeFirstLetter=(string)=> {
    if (string !== undefined && string !== null && string.length > 0)
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const renderValue = (keyValue) => {
    return Object.keys(keyValue).map((key) => {
      let value = keyValue[key];
      return <p  style={{fontWeight:'bolder'}}> {capitalizeFirstLetter(key)}  : <span style={{fontWeight:'normal'}}>{value}</span> </p>;
    });
  };

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
          {renderValue(shippingInformations)}
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
