import React from 'react'

const Header = () => {
  return (
    <>
    {/*  */}
        {/* Scroll-top */}
    <button className="scroll-top scroll-to-target" data-target="html">
      <i className="fas fa-angle-up"></i>
    </button>
    {/* Scroll-top-end*/}

    {/* header-area */}
    <header>
      <div className="header-top-wrap">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-7 col-sm-7">
              <div className="header-top-left">
                <ul>
                  <li className="d-none d-xl-flex">
                    <i className="flaticon-location"></i> Chennai
                  </li>
                  <li className="d-none d-lg-flex">
                    <i className="flaticon-email"></i
                    ><a
                      href="mailto:arunairtel41@gmail.com"
                     
                      style={{color:"grey"}}
                    >
                      arunairtel41@gmail.com</a
                    >
                  </li>
                  <li>
                    <i className="flaticon-telephone-handle-silhouette"></i>
                    <a
                      href="tel:+919087001153"
                      style={{color:"000",fontWeight:'600'}}
                      >9087001153</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-5 col-sm-5">
              <div className="header-top-right">
                <ul>
                  <li className="header-user-info">
                    <i className="flaticon-businessman"></i>
                    <a  style={{color:"000"}}> 24*7 customer service</a>
                  </li>
                  <li className="header-social">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="header-top-fixed"></div>
      <div id="sticky-header" className="menu-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler d-none">
                <i className="fas fa-bars"></i>
              </div>
              <div className="menu-wrap">
                <nav className="menu-nav">
                  <div className="logo">
                    <a href="{% url 'index' %}"
                      ><p className="logo-box">Fibernet Broadband Chennai</p></a
                    >
                  </div>
                  <div className="navbar-wrap main-menu d-lg-flex">
                    <ul className="navigation">
                      <li className="d-none d-lg-flex active">
                        <a href="{% url 'index' %}">Home</a>
                      </li>
                      <li className="d-none d-lg-flex">
                        <a href="{% url 'about' %}">About</a>
                      </li>

                      <li><a href="{% url 'airtel' %}">Airtel Plans</a></li>
                      {/* <li><a href="{% url 'act' %}">Act Plans</a></li>
											<li><a href="{% url 'hathway' %}">Hathway  Plans</a></li>
                                             */}

                      <li className="d-none d-lg-flex">
                        <a href="{% url 'contact' %}">contact</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/* Mobile Menu  */}
              <div className="mobile-menu">
                <nav className="menu-box">
                  <div className="close-btn"><i className="fal fa-times"></i></div>
                  <div className="nav-logo">
                    <a href="{% url 'index' %}"
                      ><p className="logo-box">Fibernet Broadband Chennai</p></a
                    >
                  </div>
                  <div className="menu-outer">
                    {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                  </div>
                  <div className="social-links">
                    <ul className="clearfix">
                      <li>
                        <a href="#"><span className="fab fa-facebook-f"></span></a>
                      </li>
                      <li>
                        <a href="#"><span className="fab fa-twitter"></span></a>
                      </li>
                      <li>
                        <a href="#"><span className="fab fa-pinterest-p"></span></a>
                      </li>
                      <li>
                        <a href="#"><span className="fab fa-instagram"></span></a>
                      </li>
                      <li>
                        <a href="#"><span className="fab fa-youtube"></span></a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="menu-backdrop"></div>
              {/* End Mobile Menu */}
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* header-area-end */}

    </>
  )
}

export default Header
