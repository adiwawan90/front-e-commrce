import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default class Banner extends React.Component {
  render() {
    return (
      <div className='container '>
        <div className='image'>
          <Link to='/'>
            <img
              src={require('../images/996x500_HERO_PAYDAYUPTO70EXTRA20_WOMEN.gif')}
              alt='banner'
            />
          </Link>
        </div>
      </div>
    );
  }
}
