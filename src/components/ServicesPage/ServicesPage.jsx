import React from 'react'
import '../Page.css'
import './ServicesPage.css'
import supplyChainManagement from "../../assets/images/Supply-Chain-Management.png"
import marketDynamics from "../../assets/images/Market-Dynamics.png"
import midstreamProcessing from "../../assets/images/Midstream-Processing.png"
import costModelling from "../../assets/images/Cost-Modelling.png"
import processModelling from "../../assets/images/Process-Modelling.png"

const ServicesPage = () => {
  return (
    <div id="services-page" className="page">
        <div className="content services-content">
            <h2>Services</h2>

            <div className="services-container">
              <div className="service-container supply-chains">
                <div className="service-container-text">
                  <h3>1. Supply Chains</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia.  </p>
                </div>
                <div className="service-icon-container">
                  <img src={supplyChainManagement}/>
                </div>
              </div>

              <div className="service-container supply-chains">
                <div className="service-container-text right-text">
                  <h3>2. Market Dynamics</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia.  </p>
                </div>
                <div className="service-icon-container left-icon">
                  <img src={marketDynamics}/>
                </div>
              </div>

              <div className="service-container supply-chains">
                <div className="service-container-text">
                  <h3>3. Midstream Processing</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia.  </p>
                </div>
                <div className="service-icon-container">
                  <img src={midstreamProcessing}/>
                </div>
              </div>

              <div className="service-container supply-chains">
                <div className="service-container-text right-text">
                  <h3>4. Cost Modelling</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia.  </p>
                </div>
                <div className="service-icon-container left-icon">
                  <img src={costModelling}/>
                </div>
              </div>

              <div className="service-container supply-chains">
                <div className="service-container-text">
                  <h3>5. Process Modelling</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia.  </p>
                </div>
                <div className="service-icon-container">
                  <img src={processModelling}/>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesPage