import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';

export default class Detail extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            const {
              id,
              company,
              img,
              info,
              price,
              title,
              inCart
            } = value.detailProduk;
            return (
              <div className='ontainer'>
                <div className='row'>
                  <div className='col-10 mx-auto ol-md-6 my-3'>
                    <img src={img} alt='detail' className='img-fluid' />
                  </div>
                  <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                    <h1> Model : {title}</h1>
                    <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                      made by :
                      <span className='text-uppercase '>{company}</span>
                    </h4>
                    <h4 className='text-blue'>
                      <strong>
                        Price : <span className='text-uppercase '>{price}</span>
                      </strong>
                    </h4>
                    <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                      Some Info Abbout Product :
                    </p>
                    <p className='text-muted lead'>{info}</p>
                    <div>
                      <Link to='/'>
                        <button>Bact to Product</button>
                      </Link>
                      <button
                        onClick={() => value.addToCart(id)}
                        disabled={inCart ? true : false}
                      >
                        {inCart ? 'In Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
        >
      </div>
    );
  }
}
