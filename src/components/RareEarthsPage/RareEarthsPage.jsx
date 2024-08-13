import React from 'react'
import '../Page.css'
import './RareEarthsPage.css'

const RareEarthsPage = () => {
  return (
    <div id="rare-earths-page" className="page">
        <div className="content rare-earths-content">
            <h2>Rare Earths</h2>
            <p>There is no precise definition of rare earths. In general, they are regarded as the lanthanide elements, i.e. lanthanum through to lutetium, plus yttrium and, sometimes scandium. For many years, the main group of elements was regarded as uninteresting. Indeed an academic textbook from 1971 includes the following memorable quote.</p>
            <br/>
            <div className="quote-container">
              <p className="quote">"Lanthanum has only one important oxidation state in aqueous solution, the +3 state. With few exceptions, that statement tells the whole boring story about the other fourteen elements."</p>
              <div className="quote-caption-container">
                <p className="quote-caption">- G.C. Pimentel, R.D. Sprately, Understanding Chemistry; Holden-Day, 1971, San Francisco, CA, p. 862 </p>
              </div> 
            </div>
            <br/>
            <p>For some, the similarity in chemical properties between rare earth elements make them uninteresting. The relatively high stability of rare earth oxides and common salts may help to reinforce such a view. However, others have risen to the challenges of recovering rare earths from their ores, separating mixed rare earth feeds into individual elements and subsequent processing into chemicals, metals and alloys for industrial applications. As society evolves towards a more circular economy, new techniques are being developed to recover rare earths as by-products of other industrial processes or from end of life components. The chemistry of the rare earths is anything but boring.</p>
        </div>
    </div>
  )
}

export default RareEarthsPage