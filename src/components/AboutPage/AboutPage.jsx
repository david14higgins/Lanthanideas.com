import React from 'react'
import Commonwealth from "../../assets/images/Commonwealth.jpg"
import Ningbo from "../../assets/images/Ningbo.jpg"
import Beijing from "../../assets/images/Beijing.jpg"
import '../Page.css'
import './AboutPage.css'
import { Element, Link } from "react-scroll";


const AboutPage = () => {
  return (
    <Element name="about-page">
        <div id="about-page" className="page">
            <div className="content about-content">
                <h2>About</h2>
                <div className="about-boxes-container">
                    <div className="about-box text-box item-1">
                        <p>Lanthanideas Ltd was founded in January 2023 to provide consultancy services to the rare earth industry, with focus on key mid-stream processes of metal and alloy production, and on overall supply chain dynamics for the industry.</p>
                        <br/>
                        <p>The founder of Lanthanideas Ltd, <Link to="key-staff-page" className="staff-link" smooth={true} duration={1000}>Ian Higgins</Link>, was previously Managing Director of Less Common Metals Ltd (LCM), the UK-based rare earth manufacturing company. At LCM, Ian oversaw the establishment of commercial neodymium metal production and strip cast neodymium iron boron flake production, the first such commercial activities outside China or the far-east. For many years Ian was also directly responsible for raw material purchasing at LCM and retains an detailed understanding of the rare earth supply chain, both within and outside China.</p>
                    </div>

                    <div className="about-box image-box item-2">
                        <div className="about-image-container right-image">
                            <img src={Commonwealth}/>
                        </div>
                        <div className="about-image-background"></div>
                        <div className="image-caption">
                            <p>Ian presenting at the Commonwealth Games, Birmingham 2022</p>
                        </div>
                    </div>

                    <div className="about-box image-box item-3">
                        <div className="about-image-container left-image">
                            <img src={Ningbo}/>
                        </div>
                        <div className="about-image-background"></div>
                        <div className="image-caption">
                            <p>Speaking with Tu Jian of GQD, Ningbo 2018</p>
                        </div>
                    </div>

                    <div className="about-box text-box item-4">
                        <p>At Lanthanideas, Ian is supported by <Link to="end-of-ians-section" className="staff-link" smooth={true} duration={1000}>Dave Murphy</Link> who is retained as Senior Advisor. Dave was previously Managing Director of Johnson Matthey Rare Earth Products before joining LCM and, more recently, Lanthanideas. Whilst working at Johnson Matthey in the 1970s and 1980s, Dave developed many of the processes still used today for commercial production of certain rare earth metals, including samarium, terbium and dysprosium.</p>
                        <br/>
                        <p>Together, Ian and Dave offer a comprehensive technology service advising both on current practices for rare earth metal and alloy production, and proposing methods for improving efficiencies of the processes.</p>
                    </div>

                    <div className="about-box text-box item-5">
                        <p>The growing importance of rare earth permanent magnets in various green technologies, such as electric vehicles and wind power, is widely recognised. Currently this industry is dominated by China and attempts by non-Chinese entities to address this strategic vulnerability have faced significant hurdles. With extensive knowledge of supply chain dynamics, Lanthanideas is able to provide advice to new market entrants on requirements for viability, main challenges and methodologies to address these issues.</p>
                    </div>

                    <div className="about-box image-box item-6">
                        <div className="about-image-container right-image">
                            <img src={Beijing}/>
                        </div>
                        <div className="about-image-background"></div>
                        <div className="image-caption">
                            <p>GRIREM, Beijing 2004</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Element>
  )
}

export default AboutPage