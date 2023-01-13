import React from 'react'

function Header() {
  return (
    <div className='header'>
      <div className='header__content'>
        <h1 className='header__content-h1'>About us</h1>
        <div className='header__content-links'>
            <a className='' href='#'>Home</a>
            <span className='header__content-span'></span>
            <a className='' href='#'>About us</a>
        </div>
      </div>
    </div>
  )
}

export default Header
