import React from 'react';
import './Sidebar.css';
import SidebareOption from './SidebareOption';

function Sidebar() {
  return (
    <div className='sidebar'>
        <img className='sidebar_logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />

        <SidebareOption title="Home" />
        <SidebareOption title="Search" />
        <SidebareOption title="Your Library" />
    </div>
  )
}

export default Sidebar