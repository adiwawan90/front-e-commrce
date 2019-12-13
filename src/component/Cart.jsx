import React from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../Context';
import CartList from './CartList';

export default class Cart extends React.Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            console.log('value dari cart', value);
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <h2 className='text-center'>Halaman Cart</h2>
                  <br />
                  <hr />
                  <CartColumns />
                  <CartList value={value} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
