import React from 'react'
import '../../Styles/ArtDisplay.css'
import ArtDisplayEntry from './ArtDisplayEntry'

function ArtDisplayContainer() {

    const artData = require('../../../data/art_details.json')



  return (
    <div className='pageContainer'>
        
        {artData.map(e => {
            return <ArtDisplayEntry key={e.id} pieceDetails={e}/>
        })}
        
    </div>
  )
}

export default ArtDisplayContainer