import React from 'react'
import { Link } from 'react-router-dom'
import whatsapp from '/src/assets/img/whatsapp.gif'
import call from '/src/assets/img/call.gif'
const Footer = () => {
  const phoneNumber = "919087001153";
  const message = "Hello, I need some information. Please contact me";
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <>
      {/*  */}
      {/* footer-area */}
      <footer>
        <div className="footer-wrap">
          <div className="container">
            <div className="row g-0">
              <div className="col-3">
                <div className="footer-widget">
                  <div className="footer-contact">
                    <div className="footer-call">
                      <div className="icon">
                        <i className="flaticon-support"></i>
                      </div>
                      <div className="content">
                        <span>Call us 24/7</span>
                        <h6 className="title">
                          <a href="tel:+919087001153">9087001153</a>
                        </h6>
                      </div>
                    </div>
                    <h6 className="title">Contact info</h6>
                    <p>Chennai</p>
                    <div className="footer-social">
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="footer-widget">
                  <div className="fw-title">
                    <h4 className="title">Company</h4>
                  </div>
                  <ul className="fw-list">
                    <li><Link to='/about' >About</Link></li>
                    <li><Link to='/' >Plans</Link></li>
                    <li><Link to='/contact' >Contact</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-2">
                <div className="footer-widget">
                  <div className="fw-title">
                    <h4 className="title">Top Brands</h4>
                  </div>
                  <ul className="fw-list">
                    <li><Link to='/airtel'>Airtel Plans</Link></li>
                    {/* <li><a href="">Hathway Plans</a></li>
                  <li><a href="">ACT Plans</a></li>*/}
                </ul> 
                </div>
              </div>
              <div className="col-1">
                <div className="footer-widget">
                  <div className="fw-title">
                    <h4 className="title">Service Schedule</h4>
                  </div>
                  <ul className="fw-schedule-list text-center">
                    <li>Monday - Sunday <span>24x7</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row align-items-center">
              <hr className="mt-15" />
              <div className="col-md-4">
                <div className="footer-logo">
                  <Link to='/'><p className="logo-box">
                      Fibernet Broadband Connection Chennai
                    </p>
                  </Link>
                </div>
              </div>
              <div className="col-md-8">
                <div className="copyright-text text-center text-md-end">
                  <p>
                    Copyrights © 2025 All Rights Reserved by Airtel broadband
                    internet connection Chennai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer-area-end */}
      <a
         href={url}
        target="_blank"
        className="whatsapp_button"
      >
        <img src={whatsapp} style={{width:"80%"}} />
      </a>

      <a href="tel:+919087001153" target="_blank" className="call_button">
        <img src={call} style={{width:"36%"}} />
      </a>
    </>
  )
}

export default Footer
