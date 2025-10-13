import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import About from './About'
import Airtel from './Airtel'
import Contact from './Contact'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/airtel/" element={<Airtel />} />
          <Route path="/contact/" element={<Contact />} />





        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
