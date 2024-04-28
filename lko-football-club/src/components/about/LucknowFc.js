import React from 'react'


import './style.css'
import Background from '../Background';
const LucknowFc = () => {
  return (
   <div style={{ position: 'relative' }}>
    <Background />
    
    <div
      style={{
        position: 'absolute',
        top: '10.7%',
        width: '100%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'linear-gradient(90.02deg, rgba(247, 138, 138, 0.5) 0.02%, rgba(245, 168, 100, 0.5) 15.01%, rgba(247, 247, 98, 0.5) 31.01%, rgba(105, 253, 107, 0.5) 48%, rgba(99, 122, 253, 0.5) 64%, rgba(180, 31, 245, 0.5) 81.99%, rgba(231, 103, 253, 0.5) 99.98%)',
        borderRadius:'25px',
       
       
        
      }}
    >
        
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '15rem',
          height: '100%',
                
         
        }}
      >
        <h3 className='lucknowFc-heading'>LUCKNOW FC</h3>
      </div>
      <div
        
          style={{
            color: '#753800',
            fontSize: '15px',
            fontFamily: 'sans-serif',
          
            
            
          }}
          >
        
         <h3 className='containers-about'> Board of Governance | LFC Code of Conduct | Executive Body | Home
          Stadium | Mission | Vision</h3>
          

        
      </div>
     
    </div>
  
    </div>
   
  )
}

export default LucknowFc;