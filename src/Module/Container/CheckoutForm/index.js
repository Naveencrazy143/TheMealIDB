import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import {shippingInformation} from '../../../Redux'
import { useNavigate } from "react-router-dom";
function CheckoutForm() {
  const navigation =useNavigate()
    const dispatch=useDispatch()
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    phone: '',
    quantity:''
  });

  const handleChange = (e) => {
    const { name, value,type } = e.target;
    setShippingInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const getCurrentTime = () => {
    const currentDate = new Date();
    let currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const period = currentHours < 12 ? 'AM' : 'PM';

    if (currentHours > 12) {
      currentHours -= 12;
    } else if (currentHours === 0) {
      currentHours = 12;
    }
    return `${currentHours}:${currentMinutes < 10 ? '0' : ''}${currentMinutes} ${period}`;
  };


  const handleSubmit = (e) => {
  dispatch(shippingInformation({...shippingInfo,time:getCurrentTime()}));
  setShippingInfo({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    phone: ''
  });
  navigation('/order');
  };

  return (
    <div className='pb-5' >
      <h3 className='text-center pb-2' style={{color:'#014e25' ,fontWeight:'bolder'}}>Shipping Information</h3>
      <form style={{color:'#014e25'}} onSubmit={
        handleSubmit
      } >
        <div className="form-group" >
          <label>Full Name</label>
          <input type="text" className="form-control" name="fullName" value={shippingInfo.fullName} onChange={handleChange} required style={{backgroundColor:"#f2faf0"}} />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" className="form-control" name="address" value={shippingInfo.address} onChange={handleChange} required style={{backgroundColor:"#f2faf0"}}  />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>City</label>
            <input type="text" className="form-control" name="city" value={shippingInfo.city} onChange={handleChange} required style={{backgroundColor:"#f2faf0"}}  />
          </div>
          <div className="form-group col-md-4">
            <label>State</label>
            <input type="text" className="form-control" name="state" value={shippingInfo.state} onChange={handleChange} required  style={{backgroundColor:"#f2faf0"}} />
          </div>
          <div className="form-group col-md-2">
            <label>ZIP</label>
            <input type="tel"
             maxLength={6} 
             className="form-control" name="zip" value={shippingInfo.zip} onChange={handleChange} required style={{backgroundColor:"#f2faf0"}}  />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
          <label>Email</label>
          <input type="email" className="form-control" name="email" value={shippingInfo.email} onChange={handleChange} required style={{backgroundColor:"#f2faf0"}}  />
          </div>
          <div className="form-group col-md-6">
          <label>Phone</label>
          <input type="tel" className="form-control" name="phone" value={shippingInfo.phone} 
          maxLength={10} 
          onChange={handleChange} required style={{backgroundColor:"#f2faf0"}} />
          </div>
          <div className="form-group col-md-6">
          <label>Quantity</label>
          <input type="tel" className="form-control" name="quantity" value={shippingInfo.quantity} 
          maxLength={2} 
          onChange={handleChange} required style={{backgroundColor:"#f2faf0"}} />
          </div>
        </div>
        <div className='text-center'>
        <button type="submit"  className="btn btn-primary px-lg-5">Purchase</button>
        </div>
     
      </form>
    </div>
  );
}

export { CheckoutForm}
