import React from 'react'
import ArtDisplayContainer from './Components/ArtDisplay/ArtDisplayContainer'

function ArtDisplayPage({setPieceData}) {
  const artData = require('../data/art_details.json')
  return (
    <ArtDisplayContainer setPieceData={setPieceData}/>
  )
}

export default ArtDisplayPage