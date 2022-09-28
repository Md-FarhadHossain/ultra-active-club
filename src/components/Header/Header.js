import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <>
        <header className='header'>
            <img src={Logo} alt="Logo" />
            <span>YourStudy</span>
        </header>
    </>
  )
}

export default Header