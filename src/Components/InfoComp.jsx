import React from 'react'
import './info.css'

function InfoComp({icon, title,}) {
  return (
    <div className='main-container'>
        <div className="top-container">
            <div className="icon-container">{icon}</div>
            <div className="title-container">{title}</div>
        </div>

        <div className="info-details">
            <p>For the people who would love to risk huge to get rewarded. People who would love to risk huge to get rewarded</p>
        </div>

        <div className="bottom-container">
            <div className="bottom-first">
                <p className='cagr-container'>CAGR</p>
                <p className='percentage-val'>17.80%</p>
            </div>
            <div className="bottom-second">
                <p className='cagr-container'>Min Amount</p>
                <p className='percentage-val'>120</p>
            </div>
        </div>
    </div>
  )
}

export default InfoComp