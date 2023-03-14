import React from 'react'
import '../../Styles/ArtDisplay.css'
import ArtDisplayEntry from './ArtDisplayEntry'
import { useNavigate } from 'react-router'

function ArtDisplayContainer({setPieceData}) {

    const artData = require('../../../data/art_details.json')


  return (
    <div className='pageContainer'>
        <div className='artGridContainer'>
            {artData.map(e => {
                return <ArtDisplayEntry key={e.id} pieceDetails={e} setPieceData={setPieceData}/>
            })}
        </div>
    </div>
  )
}

export default ArtDisplayContainer