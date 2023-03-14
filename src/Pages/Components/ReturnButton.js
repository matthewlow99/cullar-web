import React from 'react'
import { useNavigate } from 'react-router'
import "../Styles/ReturnButtonStyles.css"

function ReturnButton({path}) {

    const nav = useNavigate()

  return (
    <div className='returnButton' onClick={() => { nav(path) }}>
        <p>Return</p>
    </div>
  )
}

export default ReturnButton