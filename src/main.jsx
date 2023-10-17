import React from 'react'
import ReactDOM from 'react-dom/client'
import Info from './components/Info.jsx'
import Details from './components/Details.jsx'
import About from './components/About.jsx'
import Interests from './components/Interests.jsx'
import Footer from './components/Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='wrapper'>
      <div className='inner-wrapper'>
      <Info />
      <Details/>
      <About/>
      <Interests />
      <Footer/>
      </div>
    </div>
  </React.StrictMode>,
)
