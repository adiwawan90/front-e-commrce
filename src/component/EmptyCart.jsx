import React from 'react';
import { Link } from 'react-router-dom';

export default function EmptyCart() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-10 mx-auto text-center text-title'>
          <h1>Your Cart Is Empty</h1>
          <hr />
          <Link to='/'>
            <button>Bact to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
