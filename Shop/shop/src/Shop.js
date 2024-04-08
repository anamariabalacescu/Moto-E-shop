import React from 'react';
import SideMenu from './SideMenu';
import './styles/Shop.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Items from './Items.js';

const Shop = ({ displayItems = 'all' }) => {
  let renderedItems;

  if (displayItems === 'certain') {
    renderedItems = <Items certainItemsOnly={true}/>;
  } else {
    renderedItems = <Items folderName={"../src/img/img"}/>;
  }

  return (
    <>
      <SideMenu className='front-panel'/>
      <div className='all-items'>
        {renderedItems}
      </div>
    </>
  );
};

export default Shop;
