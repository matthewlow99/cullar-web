import React from 'react'
import '../Styles/Header.css'
import HeaderButton from './HeaderButton'

function HeaderBar() {

  return (
    <div className='headerContainer'>
        <HeaderButton title="Home" path="/"/>
        <HeaderButton title="Art Gallery" path="/artwork"/>
        <HeaderButton title="About the Artist" path="/about"/>
    </div>
  )
}

export default HeaderBar