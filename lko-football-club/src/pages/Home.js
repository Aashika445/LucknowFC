import React, { useState } from 'react';
import bgimage from '../assets/bgimage.png';
import { Outlet } from 'react-router-dom';
import LoginSignup from '../components/login-signup/LoginSignup';

const Home = ({ isModalOpen }) => {
  const modalStyle = {
    position: 'absolute',
    top: '0',
    right: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    transition: 'background-color 0.5s ease-out', // Smooth transition
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    maxWidth: '100%',
    borderRadius: '25px',
    marginTop: '1rem',
    marginBottom: '2rem',
  };

  return (
    <div style={{ position: 'relative' }}>
      <img
        src={bgimage}
        alt='Home Photos Home Poster Football'
        style={imgStyle}
      />

      {/* Modal */}
      {isModalOpen && (
        <div style={modalStyle}>
          <LoginSignup />
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default Home;