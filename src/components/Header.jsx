import '../../src/keeper.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  const logoutButton = {
    position: 'fixed',
    right: '10px',
    top: '5px',
    background: 'red',
    borderRadius: '4px',
  }
  return (
    <>
      <header>
        Keep
        <button style={logoutButton} onClick={props.logoff}>
          logout
        </button>
      </header>
    </>
  )
}

export default Header
