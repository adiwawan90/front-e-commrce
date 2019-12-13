import React from 'react';
import { Link } from 'react-router-dom';

export default class Promo extends React.Component {
  render() {
    return (
      <div className='container slide'>
        <div className='row'>
          <div className='col-md-10'>
            <div
              id='carouselExampleIndicators'
              className='carousel slide'
              data-ride='carousel'
            >
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <Link to='/'>
                    <img
                      className='img-fluid d-block w-15'
                      src={require('../images/blxs-0713-0132501-1.jpg')}
                      alt='slide'
                    />
                  </Link>
                </div>
                <div className='carousel-item'>
                  <Link to='/'>
                    <img
                      className='img-fluid d-block w-15'
                      src={require('../images/lombardi-giovanni-2152-8952671-1.jpg')}
                      alt='slide'
                    />
                  </Link>
                </div>
                <div className='carousel-item'>
                  <Link to='/'>
                    <img
                      className='img-fluid d-block w-15'
                      src={require('../images/mayonette-3965-6389851-1.jpg')}
                      alt='slide'
                    />
                  </Link>
                </div>
                <a
                  className='carousel-control-prev'
                  href='#carouselExampleIndicators'
                  role='button'
                  data-slide='prev'
                >
                  <span
                    className='carousel-control-prev-icon'
                    aria-hidden='true'
                  ></span>
                  <span className='sr-only'>Previous</span>
                </a>
                <a
                  className='carousel-control-next'
                  href='#carouselExampleIndicators'
                  role='button'
                  data-slide='next'
                >
                  <span
                    className='carousel-control-next-icon'
                    aria-hidden='true'
                  ></span>
                  <span className='sr-only'>Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
