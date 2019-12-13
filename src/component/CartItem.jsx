import React from 'react';

// import CartItem from './CartItem';

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  // console.log('ini id :', id);
  const { increase, decrease, removeItem } = value;
  console.log('ini value di cartItem :', value);
  return (
    <div className='row my-1 text-capitalize text-center'>
      <div className='col-10 mx-auto col-lg-2'>
        <img
          src={img}
          alt='produk'
          style={{ width: '5rem', height: '5rem' }}
          className='img-fluid'
        />
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>Produk : </span>
        {title}
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>Price : </span>
        {price}
      </div>
      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
        <div className='d-flex justify-content-center'>
          <div>
            <span className='btn btn-black mx-1' onClick={() => decrease(id)}>
              -
            </span>
            <span className='btn btn-black mx-1'>{count}</span>
            <span className='btn btn-black mx-1' onClick={() => increase(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <div className='cart-icon' onClick={() => removeItem(id)}>
          <i className='fas fa-trash'></i>
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <strong className='d-lg-none'>item Total : </strong>
        <strong> Rp. {total}</strong>
      </div>
    </div>
  );
}
