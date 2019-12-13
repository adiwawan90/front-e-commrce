import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BottomHead from './BottomHead';
import Banner from './Banner';
import Promo from './Promo';

export default class Home extends React.Component {
  render() {
    return (
      <Router>
        <BottomHead />
        <Banner />
        <Promo />
      </Router>
    );
  }
}
