import React from 'react'
import '../Page.css'
import './RareEarthsPage.css'
import rareEarthStones from '../../assets/images/Rare-Earth-Stones.png'
import supplyChain from '../../assets/images/Supply-Chain.png'
import factory from "../../assets/images/Factory-Blue.png"
import manufacture from "../../assets/images/Manufacture.png"
import Table from './Table'
import { Element } from "react-scroll";

const RareEarthsPage = () => {
  return (
    <Element name="rare-earths-page">
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
              
              <h3>Applications of Rare Earths</h3>
              <div className="icon-container rare-earth-stones-container">
                  <img src={rareEarthStones}/>
              </div>

              <p>Early applications of rare earths were generally based on unseparated or part-separated elements. These included lighter flints, glass polishing powders and colouring agents for welding goggles. As techniques for separating and purifying rare earths became more efficient, higher tech applications, such as phosphors for lighting and colour televisions, became established.</p>
              <br/>
              <p>In addition to lighter flints, early metallurgical applications for rare earths were based mainly on processing aids for steel production and on additives to modify mechanical properties of complex structural alloy systems. Many of these applications are still used today.</p>
              <br/>
              <p>Other alloy systems include magnetostrictive, magneto-optic and magneto-calorific materials, all typically based on alloys of one or more rare earth, transition metal and other elements. Far and away the main metallurgical application for rare earths today is in the permanent magnet industry. The development of commercial markets, initially based on samarium cobalt and now on the significantly larger neodymium iron boron system, has transformed the rare earth supply chain. </p>
              <br/>
              <p>In addition to neodymium, the main rare earth elements used in neodymium iron boron magnets are praseodymium, which can partially substitute for neodymium in many magnet formulations, together with terbium and dysprosium, which both improve resistance to demagnetisation and increase operating temperature. Demand for these four elements for magnet applications is now the key driver for the entire rare earth industry.</p>
              <br/>
              <p>Rare earth permanent magnets find use in computer drives, sensors, chemical couplings and various electrical motors. Significant growth in demand is projected, in particular for electric vehicle and wind power applications. The technical advantages presented by rare earth permanent magnets over other systems has resulted in the key elements becoming highly strategic, with significant imbalance and vulnerability in the current supply chain.</p>
          
              <h3>Rare Earth Supply Chain</h3>
              <div className="icon-container supply-chain-container">
                  <img src={supplyChain}/>
              </div>

              <p>With huge focus and support from the government, China is far and away the main  global supply of rare earth-based materials such as neodymium iron boron magnets. The geological advantage held by China, together with centrally planned long term strategies and significant state investment have combined to establish China’s dominance, in particular for supply of rare earth permanent magnets.</p>
              <br/>
              <p>High quality magnets are readily available today from a number of Chinese companies offering rapid response times, excellent technical support and customer focus, all at highly competitive terms.</p>
              <br/>
              <p>All this has come at a cost. China now faces huge legacy issues due to a failure over many years to enforce environmental regulations in their processing industries.</p>
              <br/>
              <p>In addition, the strategic vulnerability of overdependence on a single source for critical materials has now been recognised worldwide. Japan, USA, India and the European Union are all at various stages of enacting policies to support domestic production of rare earths and / or added value downstream processing. Other jurisdictions are now following suit. However, the challenges of establishing competitive supply, in the face of stiff competition from Chinese companies, are immense.</p>
              <br/>
              <p>Lanthanideas’ staff have decades of experience working within the rare earth supply chain and actively track progress of global projects at various stages of development. With our industry knowledge we are well placed to offer support and advice, either to ventures working in the supply chain, researchers seeking to develop new technologies or investors wishing to understand more about the industry dynamics.</p>
          
              <h3>Rare Earth Metal Production</h3>
              <p>A variety of processes have been proposed for producing rare earth metals. However, only a limited few have become established for commercial production. The main metal making processes are shown in the following table:</p>
              <br/>
              <Table/>

              <div className="process-container">
                <div className="process">
                  <h4>Molten Salt Electrolysis</h4>
                  <p>Molten salt electrolysis is the standard production route for the light rare earth metals, lanthanum, cerium, praseodymium, neodymium and NdPr master alloy. The core process entails dissolution of rare earth oxides in a molten salt bath, splitting RE-O chemical bonds via application of a DC electrical current and reduction of the resulting RE3+ ion at the cathode. Traditionally, a high level of operator experience and knowhow has been required to maintain the process in control and produce metal of appropriate quality for subsequent magnet production.</p>
                  <br/>
                  <p>The higher melting points of intermediate and heavy rare earths, such as gadolinium, terbium and dysprosium, means that production of pure elements is not possible. Consequently, the process has been adapted to allow for commercial production of rare earth – iron binary eutectic alloys, suitable raw materials for production of iron-based magnet alloys. However, in modern magnet production, additions of terbium and/or dysprosium are routinely made via a post-magnet forming process, grain boundary diffusion. For such processing, the rare earth must be in the form of a salt or a pure metal. Binary alloys are not suitable.</p>
                </div>

                <div className="process vacuum-reduction">
                  <div className="factory-container">
                    <img src={factory}/>
                  </div>
                  <h4 className="vacuum-reduction-header">Vacuum Reduction and Remelting</h4>
                  <p>Heavy rare earth metals such as terbium and dysprosium are commercially produced via a two-stage process of vacuum reduction and remelting. This entails reacting rare earth fluorides with calcium at elevated temperatures to produce impure rare earth metals and calcium fluoride by-product. The second stage involves remelting the metal under a high vacuum to remove volatile metals such as residual calcium.</p>
                  <br/>
                  <p>The process is highly efficient in terms of yield. However, traditional production has been based on small scale batch processing and is both labour-intensive and with poor furnace utilisation. </p>
                  <br/>
                
                </div>

                <div className="process">
                  <h4>Direct Sublimation</h4>
                  <p>For many rare earth elements, the direct chemical reduction of oxides is thermodynamically unfavourable due to the highly negative Gibbs Free Energies associated with oxide formation. Despite this, certain rare earth metals possess a unique ability to readily sublime, which enables oxide reduction through the application of Le Chatelier’s principle. This principle can be summarized as follows:</p>
                  <br/>
                  <p><span className="italics">"If a dynamic equilibrium is disturbed by changing the conditions, the position of equilibrium shifts to counteract the change, thereby reestablishing equilibrium.”</span></p>
                  <br/>
                  <p>In the case of rare earth elements like samarium, the metallic product formed from oxide reduction easily sublimes under vacuum conditions, thereby driving the reaction towards the right-hand side:</p>
                  <br/>
                  <p>Sm2O3(s) + 2La(l) ↔ 2Sm(g) + La2O3(s)</p>
                  <br/>
                  <p>This reaction is the foundation for the commercial production of samarium metal, which is extensively used in the manufacturing of samarium cobalt magnets and various metallurgical applications.</p>
                </div>
              </div>

              <h3>Rare Earth Alloy Production</h3>
              <div className="icon-container manufacture-container">
                  <img src={manufacture}/>
              </div>

              <p>Historical rare earth alloy production was carried out using vacuum induction melting and casting. In this process, alloy constituents are melted using direct induction, typically under a partial pressure of inert gas, and cast into a static mould. Such a process generates alloys with good compositional control, low level of impurities and high melting yields. However, for alloys where the cast microstructure is important for subsequent processing, traditional casting into static moulds is not the ideal process.</p>
              <br/>
              <p>A key example of an alloy system where microstructural control is important is neodymium iron boron. Traditional casting results in alloys with a wide range of grain sizes, not ideal for subsequent magnet production.  Furthermore, adjustments need to be made on the alloy composition to avoid, or at least minimise, formation of free alpha iron during cooling. Such compromises mean that optimum magnetic strength cannot be achieved using traditionally cast alloy.</p>
              <br/>
              <p>To overcome these limitations, strip casting, a process commercially used in the steel industry since the 1960s, has been applied to produce neodymium iron boron alloys with optimum microstructures for subsequent magnet production. The process entails casting molten alloy onto a water-cooled rotating copper wheel thereby rapidly chilling the alloy to give a uniform, fine-grained microstructure with little or no free alpha iron.</p>
              <br/>
              <p>Another, highly niche, method of producing rare earth alloys is co-reduction, whereby a rare earth salt or oxide is simultaneously reduced, together with a transition metal salt or oxide, and combined with other elements to produce a functional alloy. One such example is the production of samarium cobalt alloy whereby samarium oxide, calcium, cobalt oxide and cobalt metal are reacted together to yield samarium cobalt together with calcium oxide as a by-product. This process has been operated commercially at LCM since the later 1990s.</p>
          </div>
      </div>
    </Element>
  )
}

export default RareEarthsPage