// SideMenu.js
import React, { useState } from 'react';
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { Link } from 'react-router-dom';
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose';
import { SideMenuData } from './SideMenuData.js';
import './styles/SideMenu.css';
import { IconContext } from '@react-icons/all-files';

const SideMenu = () => {
  const [sideBar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sideBar);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className='sidebar'>
          <Link to='#' className='Sport'>
            <FaArrowRight onClick={toggleSidebar} style={{marginLeft: '30px'}}/>
          </Link>
        </div>
        <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
              <Link to="#" className='menu-bars' onClick={toggleSidebar}>
                <AiOutlineClose />
              </Link>
            </li>
            {SideMenuData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} onClick={toggleSidebar}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default SideMenu;
