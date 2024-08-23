import './App.css'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage/LandingPage'
import AboutPage from './components/AboutPage/AboutPage'
import KeyStaffPage from './components/KeyStaffPage/KeyStaffPage'
import RareEarthsPage from './components/RareEarthsPage/RareEarthsPage'
import ServicesPage from './components/ServicesPage/ServicesPage'
import ContactPage from './components/ContactPage/ContactPage'
import CollaborationsPage from './components/CollaborationsPage/CollaborationsPage'

function App() {
  return (
    <div className="global">
      <Navbar />
      <LandingPage />
      <AboutPage />
      <KeyStaffPage />
      <RareEarthsPage />
      <ServicesPage />
      <CollaborationsPage />
      <ContactPage />
    </div>
  )
}

export default App
