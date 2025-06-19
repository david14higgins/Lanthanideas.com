import React, { useState } from 'react'
import profilePicture from "../../assets/images/Profile-Picture.jpeg"
import daveMurphy from "../../assets/images/Dave-Murphy.jpg"
import defaultAvatar from "../../assets/images/Default-Avatar.jpg"
import linkedIn from "../../assets/images/Linked-In.png"
import '../Page.css'
import './KeyStaffPage.css'
import { Element } from "react-scroll";



const KeyStaffPage = () => {
  const [activeStaff, setActiveStaff] = useState(null);

  const isMobile = () => window.matchMedia("(max-width: 991.98px)").matches;

  const handleStaffClick = (index) => {
    if (isMobile()) {
      setActiveStaff(activeStaff === index ? null : index);
    }
  };


  return (
    <Element name="key-staff-page">
      <div id="key-staff-page" className="page">
          <div className="content key-staff-content">
              <h2>Key Staff</h2>
              <h3>Ian Higgins</h3>

              <div className={`staff-details-container ian-details-container${activeStaff === 1 ? " active" : ""}`} onClick={() => handleStaffClick(1)}>
                <div className="staff-photo-container">
                    <img src={profilePicture}/>
                </div>
                <div className="staff-photo-background"></div>
                <div className="staff-linked-in-container">
                  <a href="https://www.linkedin.com/in/ian-higgins-78855139/" target="_blank"><img src={linkedIn}/></a>
                </div>
              </div>

              <p>Ian Higgins has a BSc in Chemistry and Geological Science from the University of Leeds and a PhD in High Temperature Materials from Newcastle University. He joined Johnson Matthey Rare Earth Products in 1993, initially working as a Process Development Engineer before moving into commercial roles within the company.</p>
              <br/>
              <p>In 2001, following the closure of the Rare Earth Products business, Ian joined LCM, and was initially responsible for raw material purchasing. In this role, Ian undertook many tours of China, building up a strong network of commercial and technical contacts. He has also spent much time tracking developments in the non-Chinese rare earth industry and has a good knowledge of global supply chains, in particular the dynamics and challenges faced for new market entrants.</p>
              <br/>
              <p>In 2008, Ian became General Manger at LCM, and was then appointed Managing Director in 2011. As MD, Ian was a founding member of the European Raw Materials Alliance and co-author of the report “Rare Earth Magnets and Motors: A European Call for Action” issued by the Alliance in 2021 and used since to define European Union policy for developing the domestic rare earth magnet industry. <a className="external-link" href="https://erma.eu/european-call-for-action/" target="_blank">https://erma.eu/european-call-for-action/</a></p>
              <br/>
              <p>In the UK, Ian authored two UK-government funded reports, one in 2021 on the rare earth supply chain and one in 2022 on the requirements to establish commercial rare earth magnet production in the UK. Ian was also a member of the UK’s Strategic Materials Committee, contributing to the development of the document “Resilience for the Future: The UK’s Critical Minerals Strategy” published in in July 2022.</p>
              <br/>
              <Element name="end-of-ians-section">
              <p>At the end of 2022, Ian left LCM and established Lanthanideas Ltd as an independent consultancy business for the rare earth industry.</p>
              </Element>
              <br/>

              <hr/>

              <h3>Dave Murphy</h3>

              <div className={`staff-details-container dave-details-container${activeStaff === 2 ? " active" : ""}`} onClick={() => handleStaffClick(2)}>
                <div className="staff-photo-container">
                    <img src={daveMurphy}/>
                </div>
                <div className="staff-photo-background"></div>
                <div className="staff-linked-in-container">
                  <a href="https://www.linkedin.com/in/dave-murphy-878a7943/" target="_blank"><img src={linkedIn}/></a>
                </div>
              </div>

              <p>Dave holds a degree in Chemistry and a Diploma in Business Studies, from the University of Nottingham and the Open University. Following his studies, in 1969, Dave joined Thorium Ltd, a joint venture between Johnson Matthey and Rio Tinto Zinc which eventually evolved into JM-REP, a wholly owned Johnson Matthey company. There he spent several years working on solvent extraction and ion-exchange processing and rare earth salt preparation. Eventually he was made responsible for developing industrial processes for making pure rare earth metals, including both calciothermic reduction of fluorides and reduction of samarium oxide to metal using either mischmetal or lanthanum as the reducing agent.</p>
              <br/>
              <p>During his career at JM-REP, Dave gradually moved into more commercial roles, ultimately becoming General Manager, a post he held for several years.</p>
              <br/>
              <p>Following the closure of the Widnes facility in 2001, Dave joined LCM, initially as a consultant and then as Commercial and Technical Director before retiring from full time work in 2013.</p>
              <br/>
              <p>Since 2013, Dave has worked as a consultant to metal and alloy manufacturing companies.</p>
          </div>
      </div>
    </Element>
  )
}

export default KeyStaffPage