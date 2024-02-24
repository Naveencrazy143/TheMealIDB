import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import {shippingInformation} from '../../../Redux'
import { useNavigate } from "react-router-dom";
import { Input } from '../../../Component';
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
        <Input name={'fullName'} labelName={'FullName'}  value={shippingInfo.fullName} onChange={handleChange}  />
        <Input name={'address'} labelName={'Address'}  value={shippingInfo.address} onChange={handleChange}  />
        <div className="form-row">
        <Input name={'city'} labelName={'City'} className={'col-md-6 '} value={shippingInfo.city} onChange={handleChange}  />
        <Input name={'state'} labelName={'State'}  className={'col-md-4 '} value={shippingInfo.state} onChange={handleChange}  />
        <Input name={'zip'} labelName={'ZIP'}max={6}  type={'tel'} className={'col-md-2 '}value={shippingInfo.zip} onChange={handleChange}  />
        </div>
        <div className="form-row">
        <Input name={'phone'} labelName={'Phone'}  max={10}  type={'tel'} className={'col-md-6 '} value={shippingInfo.phone} onChange={handleChange}  />
        <Input name={'email'}type={"email" } labelName={'Email'} className={'col-md-6 '}value={shippingInfo.email} onChange={handleChange}  />
        </div>
        <Input name={'quantity'} labelName={'Quantity'}max={2}  type={'tel'}  value={shippingInfo.quantity} onChange={handleChange}  />
        <div className='text-center'>
        <button type="submit"  className="btn btn-primary px-lg-5">Purchase</button>
        </div>
     
      </form>
    </div>
  );
}

export { CheckoutForm}
