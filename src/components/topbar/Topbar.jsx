import React from 'react'
import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export default function Topbar({ open, close }) {
  return (
    <div className={"topbar " + (open && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>Sadan Mian</a>
          <div className="itemContainer">
            <PersonIcon className='icon' />
            <span>+91-7409907246</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className='icon' />
            <span>sadanmiyan007@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => close(!open)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>

        </div>
      </div>
    </div>
  )
}
