import React from 'react'
import { useNavigate } from 'react-router'
import '../Styles/Header.css'

function HeaderButton({title, path}) {

    const nav = useNavigate()

    function onButtonClick(){
        nav(path)
    }

  return (
    <div className='headerButton' onClick={onButtonClick}>{title}</div>
  )
}

export default HeaderButton