import React from 'react'
import '../../Styles/ArtDisplay.css'


function ArtDisplayEntry({pieceDetails}) {

  return (
    <div className='entryContainer'>
        <div className='imageContainer'>
            <img src={require("../../../images/art/" + pieceDetails.imageName)} className='imageGridEntry' title={pieceDetails.title}/>
        </div>
        <h1 style={{margin: 0}}>{pieceDetails.title}</h1>
    </div>
  )
}

export default ArtDisplayEntry