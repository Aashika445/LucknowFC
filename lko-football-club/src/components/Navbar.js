import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FaUser } from 'react-icons/fa6'
import { IoMailSharp } from 'react-icons/io5'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

const Navbar = ({ isModalOpen, setIsModalOpen }) => {
  const [active, setActive] = useState(() => {
    return sessionStorage.getItem('active') || '/';
  });

  const handleActive = (id) => {
    setActive(id)
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  useEffect(() => {
    sessionStorage.setItem('active', active);
  }, [active]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        color: '#F24423',
        margin: '1rem 0',
      
      
      }}
    >
      {/* logo and heading */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          marginBottom:'0.02rem'
          
        }}
      >
        <img
          src={logo}
          alt='logo'
          width={113}
          height={150}
        />
        
      </div> 
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1 style={{ 
  marginTop: '1.3rem', 
  fontWeight: 'bold',
  fontSize: '55px',
  background: 'linear-gradient(to right,#900D0D,#EE7303,#6C6C02,#018B08,#1027A9,#670194,#650277 )',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}}>
  LUCKNOW FOOTBALL CLUB
</h1>



        {/* navbar menu */}
        <ul
          style={{
            display: 'flex',
            gap: '1.3rem',
            marginTop: '1.5rem',
            listStyle: 'none',
            marginBottom: '0.8rem',
          
            
            fontSize: '25px',
            alignItems: 'center'
          }}
        >
          <li onClick={() => handleActive('/')}>
            {' '}
            <NavLink
              style={{ color: 'red'   }}
              className={` ${active === '/' ? 'active-btn' : 'none-btn'}`}
              to={'/'}
            >
              HOME
            </NavLink>
          </li>
          <li onClick={() => handleActive('/about')}>
            {' '}
            <NavLink
              style={{ color: ' #884000', }}
              className={` ${active === '/about' ? 'active-btn' : 'none-btn'}`}
              to={'/about'}
            >
              ABOUT
            </NavLink>
          </li>
          <li onClick={() => handleActive('/squad')}>
            {' '}
            <NavLink
              style={{ color: ' #5C5C01', }}
              className={` ${active === '/squad' ? 'active-btn' : 'none-btn'}`}
              to={'/squad'}
            >
              SQUAD
            </NavLink>
          </li>
          <li onClick={() => handleActive('/lfc-tv')}>
            {' '}
            <NavLink
              style={{ color: ' #005A03' }}
              className={` ${active === '/lfc-tv' ? 'active-btn' : 'none-btn'}`}
              to={'/lfc-tv'}
            >
              LFC TV
            </NavLink>
          </li>
          <li>
            {' '}
            <NavLink
              style={{ color: ' #011266'}}
              className={` ${active === '#' ? 'active-btn' : 'none-btn'}`}
              to={'#'}
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            {' '}
            <NavLink
              style={{ color: ' #4C006E'}}
              className={` ${active === '#' ? 'active-btn' : 'none-btn'}`}
              to={'#'}
            >
              TICKETS
            </NavLink>
          </li>
          <li>
            {' '}
            <NavLink
             style={{ color: ' #820099'}}
              className={` ${active === '#' ? 'active-btn' : 'none-btn'}`}
              to={'#'}
            >
              SHOP
            </NavLink>
          </li>
          <li>
            {' '}
            <NavLink
              style={{ color: '  #2B2828' ,   }}
              className={` ${active === '#' ? 'active-btn' : 'none-btn'}`}
              to={'#'}
            >
              APPLICATION
            </NavLink>
          </li>
        </ul>
      </div>

      {/* user social media and login icons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          width: '6rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'space-between',
            color: '#9A3A14',
          }}
        >
          <IoMailSharp size={20} />
          <FaInstagram size={20} />
          <FaFacebook size={20} />
        </div>
        
      </div>
    </div>
  )
}

export default Navbar 