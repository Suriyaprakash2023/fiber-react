import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './Footer'
import Header from './Header'
import Home from './Home'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/shop/" element={<Shop />} /> */}





        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
