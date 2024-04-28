import React from 'react';
import bgimage from '../assets/bgimage.png';

const Background = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src={bgimage}
        alt='Home Photos Home Poster Football'
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '100%',
          borderRadius: '25px',
          marginTop: '1rem',
          marginBottom: '2rem',
        }}
      />
    </div>
  );
}

export default Background;