import React from 'react'
import '../Page.css'
import './CollaborationsPage.css'
import eutectixLogo from "../../assets/images/Eutectix-Logo.jpg"
import trafalgarLogo from "../../assets/images/Trafalgar-Logo.jpg"

const CollaborationsPage = () => {

  const handleClick = (destination) => {
    window.open(destination, "_blank")
  }


  return (
    <div id="collaborations-page" className="page">
        <div className="content collaborations-content">
            <h2>Collaborations</h2>


            <div className="collaborations-container">

              <div className="collaboration-container clickable-collaboration" onClick={() => handleClick("https://eutectix.com/")}>
                <h3>Eutectix</h3>
                <p>In late 2023, Lanthanideas started to work closely with the American company, Eutectix LLC, particularly at their Tolleson, Arizona facility. This facility was previously owned by Santoku Corporation, the Japanese rare earth metal and alloy manufacturer, and is well-equipped with a highly experienced and knowledgeable staff that has been instrumental in maintaining its operations</p>
                <p>To date, the collaboration has primarily focused on practical trials aimed at improving the vacuum reduction and remelting process for the production of rare earth metals, with ongoing efforts to refine and optimize these techniques.</p>
                <div className="logo-container eutectix-logo-container">
                  <img src={eutectixLogo}/>
                </div>
              </div>
     

              <div className="collaboration-container">
                <h3>Trafalgar Rare Earth Alloys</h3>
                <p>In 2023, Ian Higgins began working with an international group to establish a vertically integrated rare earth metals, alloy, and magnet manufacturing facility in India. The group is led by Trafalgar EPC (Pte) Ltd, based in Gurugram, with support from Ian Higgins in the UK and experts in the USA and Switzerland.</p>
                <p>A new company, Trafalgar Rare Earth Alloys (Pte) Ltd, has been established to manage the project. The facility will process India-produced rare earth oxides into high-performance magnets, mainly for domestic industries. A site in Halol, Gujerat, has been secured, and a detailed project report is being prepared by M. N. Dastur & Company (Pte) Ltd.</p>
                <div className="logo-container trafalgar-logo-container">
                  <img src={trafalgarLogo}/>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CollaborationsPage