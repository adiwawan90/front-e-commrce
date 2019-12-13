import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default class BottomHead extends Component {
  render() {
    return (
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-light warna'>
          <div className='header-bottom'>
            <span className='header-bottom-left'>
              <ul className='navbar-nav'>
                <li className='nav-item mr-4'>
                  <i className='fab fa-angellist  mr-1'></i>
                  <Link to='/' className='itemcontact'>
                    Produk original & Terjamin
                  </Link>
                </li>
                <li className='nav-item mr-1'>
                  <i className='fab fa-angellist mr-1'></i>
                  <Link to='/' className='itemcontact'>
                    Ribuan fashion Brand
                  </Link>
                </li>
                <li className='nav-item mr-1'>
                  <i className='fab fa-angellist  mr-1'></i>
                  <Link to='/' className='itemcontact'>
                    Gratis Pengembalian
                  </Link>
                </li>
                <li className='nav-item mr-1'>
                  <i className='fab fa-angellist  mr-1'></i>
                  <Link to='/' className='itemcontact'>
                    Pertanyaan?
                  </Link>
                </li>
              </ul>
            </span>
            <span className='header-bottom-right'>
              <Link to='/' className='itemcontact'>
                Download & dapatkan diskon 22%
              </Link>
              <i className='fab fa-angellist  ml-2'></i>
            </span>
          </div>
        </nav>
      </div>
    );
  }
}
