import React from 'react'
import '../Page.css'
import './ServicesPage.css'
import supplyChainManagement from "../../assets/images/Supply-Chain-Management.png"
import marketDynamics from "../../assets/images/Market-Dynamics.png"
import factory from '../../assets/images/Factory-White.png'
import costModelling from "../../assets/images/Cost-Modelling.png"
import { Element } from "react-scroll";

const ServicesPage = () => {
  return (
    <Element name="services-page">
      <div id="services-page" className="page">
          <div className="content services-content">
              <h2>Services</h2>

              <div className="services-container">

                <div className="service-container">
                  <div className="service-container-text">
                    <h3>1. Supply Chains</h3>
                    <ul>
                      <li>Established supply chains for rare earth permanent magnets</li>
                      <li>Planned ventures</li>
                      <li>Primary sources of rare earths</li>
                      <li>Types of minerals commercially processed</li>
                      <li>Technologies for upstream processing (for example; mineral cracking, leaching, rare earth separation)</li>
                      <li>Recycling opportunities</li>
                    </ul>
                  </div>
                  <div className="service-icon-container">
                    <img src={supplyChainManagement}/>
                  </div>
                </div>

                <div className="service-container">
                  <div className="service-container-text right-text">
                    <h3>2. Market Dynamics</h3>
                    <ul>
                      <li>Industry drivers</li>
                      <li>Impact of Chinese government policies</li>
                      <li>Challenges for new entrants</li>
                      <li>Environmental, Health and Safety aspects of rare earth processing</li>
                      <li>Scope for new disruptive technologies</li>
                      <li>Global government and industry-led initiatives to create a more balanced market</li>
                    </ul>
                  </div>
                  <div className="service-icon-container left-icon">
                    <img src={marketDynamics}/>
                  </div>
                </div>

                <div className="service-container">
                  <div className="service-container-text">
                    <h3>3. Rare Earth Metal and Alloy Production</h3>
                    <ul>
                      <li>Challenges for producing rare earth metals</li>
                      <li>Established processes for commercial metal production, advantages and limitations</li>
                      <li>Possible improvements to the established methods for rare earth metal production</li>
                      <li>Assessment of disruptive technologies for metal production</li>
                      <li>Production of rare earth alloys via vacuum induction melting and casting</li>
                      <li>Alternative processes for rare earth alloy production </li>
                    </ul>
                  </div>
                  <div className="service-icon-container">
                    <img src={factory}/>
                  </div>
                </div>

                <div className="service-container">
                  <div className="service-container-text right-text">
                    <h3>4. Cost Modelling</h3>
                    <ul>
                      <li>Spreadsheet-based models illustrating evolution of value throughout the supply chain</li>
                      <li>Detailed cost modelling of rare earth metal and alloy production</li>
                      <li>Descriptions and quantification of main cost contributors</li>
                      <li>Impact of yields and recycling of by-products on overall costs</li>
                      <li>Interactive systems, allowing for varied inputs depending on local costs</li>
                    </ul>
                  </div>
                  <div className="service-icon-container left-icon">
                    <img src={costModelling}/>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </Element>
  )
}

export default ServicesPage