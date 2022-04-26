import React from 'react';
import './SidebarOption.css';

function SidebareOption({ title, Icon }) {
  return (
    <div className='sidebarOption'>
      <p> {title} </p>
    </div>
  )
}

export default SidebareOption