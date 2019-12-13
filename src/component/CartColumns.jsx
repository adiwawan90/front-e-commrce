import React from 'react';

export default function CartColumns() {
  return (
    <div>
      <div className='ontainer-fluid text-center d none d-lg-blog'>
        <div className='row'>
          <div className='col-10 mx-auto col-lg-2'>
            <p className='text-uppercase'>Product</p>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <p className='text-uppercase'>Product Name</p>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <p className='text-uppercase'>Price</p>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <p className='text-uppercase'>Quantity</p>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <p className='text-uppercase'>Remove</p>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <p className='text-uppercase'>Total</p>
          </div>
        </div>
      </div>
    </div>
  );
}