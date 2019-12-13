import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
// import BottomHead from './component/BottomHead';
// import Banner from './component/Banner'
import Home from './component/Home'
import Detail from './component/Detail';
import { ProductContext } from './Context';
import Cart from './component/Cart';
import ProdList from './component/ProdList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  const isiCart = useContext(ProductContext)
  console.log('ini dr App : ', isiCart)
  return (
    <Router>
      <div className='header'>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light warna'>
            <Link className='navbar-brand' to='/'>
              <img className='logo' src={logo} alt='logo'></img>
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Togle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              id='navbarSupportedContent'
              className='collapse navbar-collapse'
            >
              <ul className='navbar-nav ml-3 mr-5'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/prod' id='navbarDropdown'>
                    Wanita
                  </Link>
                </li>
                <li className='nav-item '>
                  <Link className='nav-link' to='/prod' id='navbarDropdown'>
                    Pria
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' id='navbarDropdown' to='/prod'>
                    Anak-anak
                  </Link>
                </li>
              </ul>
              <div className=' navbar-nav search'>
                <input type='text' placeholder='cari produk, tren, merek' />
                <button type='submit'>
                  <i className='fa fa-search' aria-hidden='false'></i>
                </button>
              </div>
            </div>
            <span>
              <ul className='navbar-nav'>
                <li className='nav-item mr-3'>
                  <Link className='nav-link' id='navbarDropdown' to='/user'>
                    <i className='fa fa-user-o' aria-hidden='true'></i>
                  </Link>
                </li>
                <li className='nav-item mr-3'>
                  <Link className='nav-link' id='navbarDropdown' to='/like'>
                    <i className='fa fa-heart-o' aria-hidden='true'></i>
                  </Link>
                </li>
                <li className='nav-item mr-0'>
                  <Link className='nav-link' id='navbarDropdown' to='/cart'>
                    <i className='fa fa-shopping-basket' aria-hidden='true'></i>
                  </Link>
                  <div className="jumlah"><span className="isi" >{isiCart.cart.length}</span></div>
                </li>
              </ul>
            </span>
          </nav>
        </div>
      </div>
      <Route path='/prod' component={ProdList} />
      <Route path='/detail' component={Detail} />
      <Route path='/cart' component={Cart} />
      <Route path='/' exact component={Home}/>

      {/* <BottomHead /> */}
      {/* <Banner/> */}
      {/* <Promo/> */}
      {/* <div>
      <Switch>
        {/* <Route path='/prod' component={Prod}/> */}

      {/* </Switch> */}
      {/* </div> */}
      
    </Router>
  );
}

export default App;
