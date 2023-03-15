import React from 'react'
import ReturnButton from './Components/ReturnButton'
import "./Styles/ArtDetail.css"

function ArtDetailView({pieceData}) {

    const dimArray = pieceData.dimensions.split(" ")

    const dimensions = dimArray[0] + '" x ' + dimArray[1] + '"'


  return (
    <>  
        
        <div className='detailContainer'>
            <img src={require("../images/art/" + pieceData.imageName)} className="imageStyle"/>
            <div style={{maxWidth: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <h1 style={{fontWeight: '500', fontStyle: 'italic'}}>"{pieceData.title}"</h1>
                    <h1 style={{fontWeight: '400'}}>{dimensions}</h1>
                </div>
                <h1>${pieceData.price}</h1>
                <div>
                    <h3 style={{margin: 0}}>Description</h3>
                    <p style={{margin: 0}} className='descriptionText'>{pieceData.description}</p>
                </div>
                
            </div>
        </div>

        <ReturnButton path="/artwork" />
    </>
  )
}

export default ArtDetailView