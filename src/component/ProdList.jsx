import React, { Component } from 'react';
// import { storeProducts } from '../data';
import { ProductConsumer } from '../Context';
import Prod from './Prod';

export default class ProdList extends Component {
  // state = {
  //   produk: storeProducts
  // };

  render() {
    // console.log(this.state.produk);
    return (
      <React.Fragment>
        <div className='py-5'>
          <div className='container'>
            <div className='row'>
              <ProductConsumer>
                {/* <p>Ini produk</p> */}
                {value => {
                  return value.produk.map(prod => {
                    return <Prod key={prod.id} prod={prod} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
