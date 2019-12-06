import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';
import '../scss/style.scss';

const Layout = props => (
    <React.Fragment>
      <SEO />
      <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ''}`}>
        <div id="wrapper" className="wrapper">
          {props.children}
        </div>
      </div>
    </React.Fragment>
);

export default Layout;
