import React from 'react'
import { NavLink } from 'react-router-dom'

const LfcTv = () => {
  return (
    <div
    style={{
      position: 'absolute',
      top: '2.2%',
      height:'170px',
      width: '100%',
      left: '50%',
      transform: 'translate(-50%)',
      background: 'linear-gradient(90.02deg, rgba(247, 138, 138, 0.5) 0.02%, rgba(245, 168, 100, 0.5) 15.01%, rgba(247, 247, 98, 0.5) 31.01%, rgba(105, 253, 107, 0.5) 48%, rgba(99, 122, 253, 0.5) 64%, rgba(180, 31, 245, 0.5) 81.99%, rgba(231, 103, 253, 0.5) 99.98%)',
     
      borderRadius:'25px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '20rem',
          height: '100%',
          gap:'0.4rem'
        }}
      >
        <NavLink to={'/media'} style={{ textDecoration: 'none' }}>
          <h3
            style={{
              color: ' #003301',
              backgroundColor:  ' #92FF76F7',
              borderRadius:'15px',
              height: '80px',
              textAlign: 'center',
              padding: '1.5rem ',
              fontSize: '22px',
              fontWeight: 'bold',
              boxShadow: '0px 4px 4px 0px #00000040',
              boxShadow: '0px 4px 4px 0px #00000040',
            }}
          >
            MEDIA
          </h3>
        </NavLink>
        <NavLink to={'/match'} style={{ textDecoration: 'none' }}>
          <h3
            style={{
              color: ' #003301',
              backgroundColor: '#92FF76F7',
              borderRadius:'15px',
              height: '80px',
              textAlign: 'center',
              padding: '1.5rem ',
              fontSize: '22px',
              fontWeight: 'bold',
              boxShadow: '0px 4px 4px 0px #00000040',
              boxShadow: '0px 4px 4px 0px #00000040',
            }}
          >
            MATCH
          </h3>
        </NavLink>
        <NavLink to={'/gallery'} style={{ textDecoration: 'none' }}>
          <h3
            style={{
              color: ' #003301',
              backgroundColor: '#92FF76F7',
              borderRadius:'15px',
              height: '80px',
              textAlign: 'center',
              padding: '1.5rem ',
              fontSize: '22px',
              fontWeight: 'bold',
              boxShadow: '0px 4px 4px 0px #00000040',
              boxShadow: '0px 4px 4px 0px #00000040',
            }}
          >
            GALLERY
          </h3>
        </NavLink>
        <NavLink to={'/trainning'} style={{ textDecoration: 'none' }}>
          <h3
            style={{
              color: ' #003301',
              backgroundColor: ' #92FF76F7',
              borderRadius:'15px',
              height: '80px',
              textAlign: 'center',
              padding: '1.5rem ',
              fontSize: '22px',
              fontWeight: 'bold',
              boxShadow: '0px 4px 4px 0px #00000040',
              boxShadow: '0px 4px 4px 0px #00000040',
            }}
          >
            TRAINNING
          </h3>
        </NavLink>
      </div>
    </div>
  )
}

export default LfcTv
