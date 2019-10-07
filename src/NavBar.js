import React from 'react'
import PropTypes from 'prop-types'

const NavBar = ({ onBack, showBackButton }) => (
  <div className='nav-bar flex-container'>
    <div className='flex-column' style={{ maxWidth: '33.33%' }}>
      {showBackButton && 
        <img 
          className='icon' 
          onClick={() => onBack()} 
          alt='back'
          style={{marginLeft: '12px',
                  marginRight: 'auto'}}
          src='images/ic_webBack@2x.png' />}
    </div>

    <div className='flex-column' style={{ maxWidth: '33.33%' }}>
      <h2 className='title'>Lunch Tyme</h2>
    </div>

    <div className='flex-column' style={{ maxWidth: '33.33%' }}>
      <img 
        className='icon' 
        alt='map' 
        style={{marginRight: '12px',
                marginLeft: 'auto'}}
        src='images/icon_map@2x.png' />
    </div>
  </div>
)

NavBar.propTypes = {
  onBack: PropTypes.func,
  showBackButton: PropTypes.bool
}

export default NavBar