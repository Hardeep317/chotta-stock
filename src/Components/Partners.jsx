import React from 'react'
import './partners.css'

function Partners() {
  return (
    <div className="partners-details">
    <div className="partners-details-top-container">
      <div className="partners-details-top-heading">
        Some partners who make InvestPe products possible—
      </div>
      <div className="partners-details-top-images">
        <div className="kotak-image"></div>
        <div className="angel-one"></div>
        <div className="upstox"></div>
        <div className="amfi"></div>
        <div className="lendbox"></div>
        <div className="liquiloans"></div>
      </div>
    </div>

    <div className="partners-details-bottom-container">
      <div className="partners-details-bottom-heading">
        ...and a few of the businesses building some incredible solutions
        with InvestPe
      </div>
      <div className="partners-details-bottom-images">
        <div className="siply-container">
          <div className="siply"></div>
        </div>
        <div className="jupiter-container">
          <div className="jupiter"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Partners