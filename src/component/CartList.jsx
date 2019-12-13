import React from 'react';
import CartItem from './CartItem';

export default function CartList({ value }) {
  const { cart } = value;
  console.log('value dari cartList', cart);
  return (
    <div>
      {cart.map(item => {
        // console.log(item);
        return <CartItem key={item.id} item={item} value={value} />;
      })}
    </div>
  );
}
