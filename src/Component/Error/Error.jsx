import React from 'react'
import './Error.css'
import gif from './GIF/engGif.gif'

const Error = () => {

    return (<>
        <div className='error-main-div'>
            <div className='error-container-div'>
            <div className='error-message-div'>
                    <h1>WORK IN PROGRESS</h1>
                </div>
                <div className="error-img-div">
                    <img src={gif} alt="" />
                </div>
               

            </div>
        </div>
    </>)
}
export default Error;