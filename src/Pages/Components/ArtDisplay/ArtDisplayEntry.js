import React from 'react'
import '../../Styles/ArtDisplay.css'
import { useNavigate } from 'react-router'


function ArtDisplayEntry({pieceDetails, setPieceData}) {

    const nav = useNavigate()


    function artClick(){
        setPieceData(pieceDetails)
        nav("/artDetail")
    }

  return (
    <div className='entryContainer' onClick={artClick}>
        <div className='imageContainer'>
            <img src={require("../../../images/art/" + pieceDetails.imageName)} className='imageGridEntry' title={pieceDetails.title}/>
        </div>
        <h2 style={{margin: 0, fontSize: 22, fontWeight: '500'}}>{pieceDetails.title}</h2>
        <p style={{margin: 0, color: 'blue'}}>${pieceDetails.price}</p>
    </div>
  )
}

export default ArtDisplayEntry