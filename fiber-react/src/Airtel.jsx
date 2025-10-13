import React from 'react'
import { Link } from 'react-router-dom'
import app01 from '/src/assets/img/streamApp/app-01.jpg'
import app02 from '/src/assets/img/streamApp/app-02.jpg'
import app03 from '/src/assets/img/streamApp/app-03.jpg'
import app04 from '/src/assets/img/streamApp/app-04.jpg'
import app05 from '/src/assets/img/streamApp/app-05.jpg'
import app06 from '/src/assets/img/streamApp/app-06.jpg'
import app07 from '/src/assets/img/streamApp/app-07.jpg'
import app08 from '/src/assets/img/streamApp/app-08.jpg'
import airtel1 from '/src/assets/img/airtelPlan/airtel1.jpg'
import airtel2 from '/src/assets/img/airtelPlan/airtel2.jpg'
import airtel3 from '/src/assets/img/airtelPlan/airtel3.jpg'
import airtel4 from '/src/assets/img/airtelPlan/airtel4.jpg'
import airtel from '/src/assets/img/airtel.jpg'
import airtel01 from '/src/assets/img/airtel.jpg'
import subscribe_bg02 from '/src/assets/img/bg/subscribe_bg02.jpg'
import img1 from '/src/assets/img/1.jpg'
import img2 from '/src/assets/img/2.jpg'
import img3 from '/src/assets/img/3.jpg'
import img4 from '/src/assets/img/4.jpg'
import img5 from '/src/assets/img/5.jpg'
import img7 from '/src/assets/img/7.jpg'

const Airtel = () => {
  return (
    <>
               {/* main-area */}
        <main>

             {/* breadcrumb-area */}
            <section className="breadcrumb-area breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-8">
                            <div className="breadcrumb-content">
                                <h3 className="title">Airtel </h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to='/' >Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Airtel Broadband Plans in Chennai</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             {/* breadcrumb-area-end */}

            <div className="container">
                    <div className="row justify-content-center">
						<marquee className="mt-20"style={{ color: 'red' }} >
							<b>Connections Providing All Areas Chennai City Only</b>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <b> Pay 6 Month Get 7.5% Bill Discount | Free Installation Charges | Free Router </b>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            
                            <b>Pay 12 Month Plan Get 15% Rental Discount | Free Installation Charges | Free Router</b>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								   <b>3 Month Plans | Free Router | Free Installation Charges </b>
								
							
						</marquee>
                    </div>
                 </div >
			
             {/* pricing-area */}
            <section className="pricing-area pt-110 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10 col-md-11">
                            <div className="section-title text-center mb-55">
                                <h2 className="title" style={{ fontSize: '32px' }}>Let's Discover Our Best </h2>
                                <h1 className="title" style={{ fontSize: '32px' }}>Airtel Fibernet Broadband Plans in Chennai</h1>
                                <p>One of the leading <b> Airtel fibernet broadband plans provider in Chennai</b> city and on the other big reason pay more should is that they're too loyal.</p>
                            </div>
                        </div>
                    </div>
				<div className="row justify-content-center">
                       {/*  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8  col-10">
                            <div className="pricing-three-item mb-30">
                                <div className="pricing-three-head">
                                    <h4 className="title">Fiber Stand-by </h4>
                                    <span className="devices-support"></span>
                                    <ul className="devices-icon-wrap">
                                        <li><i className="flaticon-tv"></i></li>
                                        <li><i className="flaticon-wifi-router-1"></i></li>
                                        <li><i className="flaticon-device"></i></li>
                                    </ul>
                                </div>
                                <div className="pricing-three-list">
                                    <ul>
                                        <li>10 Mbps Speed</li>
                                        <li>Unlimited Data</li>
                                        <li>Landline Unlimited Calls</li>
                                    </ul>
                                </div>
								<br/>
                                <h2 className="pricing-three-price"> ₹ 199<span> + GST</span></h2>
                                <a className="contact-icon btn transparent-btn">Enquiry Now</a>
                            </div>
                        </div> -*/}
                    
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8  col-10">
                            <div className="pricing-three-item mb-30">
                                <div className="pricing-three-head">
                                    <h4 className="title">Standard </h4>
                                    <span className="devices-support"></span>
                                    <ul className="devices-icon-wrap">
                                        <li><i className="flaticon-tv"></i></li>
                                        <li><i className="flaticon-wifi-router-1"></i></li>
                                        <li><i className="flaticon-device"></i></li>
                                    </ul>
                                </div>
                                <div className="pricing-three-list">
                                    <ul>
                                        <li>40 Mbps Speed</li>
                                        <li>Unlimited Data</li>
                                        <li>Landline Unlimited Calls </li>
                                        <li>Streaming Apps : No</li>
                                    </ul>
                                </div>
								<br/>
								<br/>
								<br/>
								<br/>
								<br/>
								<br/>
                                <h2 className="pricing-three-price"> ₹ 499<span> + GST</span></h2>
                                <a className="contact-icon btn transparent-btn">Enquiry Now</a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8  col-10">
                            <div className="pricing-three-item mb-30">
                                <div className="pricing-three-head">
                                    <h4 className="title">Airtel Black Plan </h4>
                                    <span className="devices-support"></span>
                                    <ul className="devices-icon-wrap">
                                        <li><i className="flaticon-tv"></i></li>
                                        <li><i className="flaticon-wifi-router-1"></i></li>
                                        <li><i className="flaticon-device"></i></li>
                                    </ul>
                                </div>
                                <div className="pricing-three-list">
                                    <ul>
                                        <li>40 Mbps Speed</li>
                                        <li>Unlimited Data</li>
                                        <li>Landline Unlimited Calls </li>
                                        <li>350+ TV Channels </li>
										<li>Streaming Apps :  </li> 
                                        
											<ul className="StreamingApps">
												<li> </li>
												<li><img style={{ width: '60%' }}  src={app04} /></li>
												<li><img style={{ width: '60%' }} src={app05} /></li>
												<li><img style={{ width: '60%' }} src={app06} /></li>
												<li><img style={{ width: '60%' }} src={app07} /></li>
												<li><img style={{ width: '60%' }} src={app08} /></li>
											</ul>
											<br/>
											<span style={{ color: '#000' }} >&  More OTT Apps...</span>
                                    </ul>
                                </div>
                                <h2 className="pricing-three-price"> ₹ 699<span> + GST</span></h2>
                                <a className="contact-icon btn transparent-btn">Enquiry Now</a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-10">
                            <div className="pricing-three-item mb-30">
                                <div className="pricing-three-head">
                                    <h4 className="title">Premium </h4>
                                    <span className="devices-support"></span>
                                    <ul className="devices-icon-wrap">
                                        <li><i className="flaticon-tv"></i></li>
                                        <li><i className="flaticon-wifi-router-1"></i></li>
                                        <li><i className="flaticon-device"></i></li>
                                    </ul>
                                </div>
                                <div className="pricing-three-list">
                                    <ul>
                                        <li>100 Mbps Speed</li>
                                        <li>Unlimited Data</li>
                                        <li>Landline Unlimited Calls </li>
                                        <li>Streaming Apps : No</li>
                                    </ul>
                                </div>
								<br/>
								<br/>
								<br/>
								<br/>
								<br/>
								<br/>
								<br/>
                                <h2 className="pricing-three-price"> ₹ 799<span> + GST</span></h2>
                                <a className="contact-icon btn transparent-btn">Enquiry Now</a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8  col-10">
                            <div className="pricing-three-item mb-30">
						 <div className="bestSeller mt-0 mb-1"> <b>Best Seller</b></div>
                           
                                <div className="pricing-three-head">
                                    <h4 className="title">Airtel Black Plan </h4>
                                    <span className="devices-support"></span>
                                    <ul className="devices-icon-wrap">
                                        <li><i className="flaticon-tv"></i></li>
                                        <li><i className="flaticon-wifi-router-1"></i></li>
                                        <li><i className="flaticon-device"></i></li>
                                    </ul>
                                </div>
                                <div className="pricing-three-list">
                                    <ul>
                                        <li>100 Mbps Speed</li>
                                        <li>Unlimited Data</li>
                                        <li>Landline Unlimited Calls </li>
                                        <li>350+ TV Channels </li>
										<li>Streaming Apps :  </li> 
                                        
											<ul className="StreamingApps">
												<li> </li>
												<li><img style={{ width: '60%' }} src={app04} /></li>
												<li><img style={{ width: '60%' }} src={app05} /></li>
												<li><img style={{ width: '60%' }} src={app06} /></li>
												<li><img style={{ width: '60%' }} src={app07} /></li>
												<li><img style={{ width: '60%' }} src={app08} /></li>
											</ul>
											<br/>
											<span  style={{ color: '#000' }} >&  More OTT Apps...</span>
                                    </ul>
                                </div>
								<br/>
                                <h2 className="pricing-three-price"> ₹ 899<span> + GST</span></h2>
								 <a className="contact-icon btn transparent-btn">Enquiry Now</a>
                         </div>
                        </div>
                      
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-10">
                            <div className="pricing-three-item mb-30">
							<div className="bestSeller mt-0 mb-1" style={{ background: 'red' }} > <b>Hot Seller</b></div>
                                <div className="pricing-three-head">
                                    <h4 className="title">Airtel Black Plan </h4>
                                    <span className="devices-support"></span>
                                    <ul className="devices-icon-wrap">
                                        <li><i className="flaticon-tv"></i></li>
                                        <li><i className="flaticon-wifi-router-1"></i></li>
                                        <li><i className="flaticon-device"></i></li>
                                    </ul>
                                </div>
                                <div className="pricing-three-list">
                                    <ul>
                                        <li>100 Mbps Speed</li>
                                        <li>Unlimited Data</li>
                                        <li>Landline Unlimited Calls </li>
                                        <li>350+ TV Channels </li>
										<li>Streaming Apps :  </li> 
                                        
											<ul className="StreamingApps">
												<li> </li>
												<li><img src={app01} /></li>
												<li><img src={app02} /></li>
												<li><img src={app03} /></li>
												<li><img src={app04} /></li>
												<li><img src={app05} /></li>
												<li><img src={app06} /></li>
												<li><img src={app07} /></li>
												<li><img src={app08} /></li>
											</ul>
											<br/>
											<span style={{ color: '#000' }}>&  More OTT Apps...</span>
											
                                    </ul>
                                </div>
								<br/>
                                <h2 className="pricing-three-price"> ₹ 1199<span> + GST</span></h2>
                                <a className=" contact-icon btn transparent-btn">Enquiry Now</a>
                            </div>
                        </div>
						
                        
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-10">
                            <div className="pricing-three-item mb-30">
                                <div className="pricing-three-head">
                                    <h4 className="title">Airtel Black Plan<b></b></h4>
                                    <span className="devices-support"></span>
                                    <ul className="devices-icon-wrap">
                                        <li><i className="flaticon-tv"></i></li>
                                        <li><i className="flaticon-wifi-router-1"></i></li>
                                        <li><i className="flaticon-device"></i></li>
                                    </ul>
                                </div>
                                <div className="pricing-three-list">
                                    <ul>
                                        <li>300 Mbps Speed</li>
                                        <li>Unlimited Data</li>
                                        <li>Landline Unlimited Calls </li>
                                        <li>350+ TV Channels </li>
										<li>Streaming Apps :  </li> 
                                        
											<ul className="StreamingApps">
												<li> </li>
												<li><img src={app01} /></li>
												<li><img src={app02} /></li>
												<li><img src={app03} /></li>
												<li><img src={app04} /></li>
												<li><img src={app05} /></li>
												<li><img src={app06} /></li>
												<li><img src={app07} /></li>
												<li><img src={app08} /></li>
											</ul>
											<br/>
											<span style={{ color: '#000' }}>&  More OTT Apps...</span>
                                    </ul>
                                </div>
                                <h2 className="pricing-three-price"> ₹ 1599<span> + GST</span></h2>
                                <a className=" contact-icon btn transparent-btn">Enquiry Now</a>
                            </div>
                        </div>
					
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-10">
                            <div className="pricing-three-item mb-30">
                                <div className="pricing-three-head">
                                    <h4 className="title">1Gbps Speed Plan</h4>
                                    <span className="devices-support"></span>
                                    <ul className="devices-icon-wrap">
                                        <li><i className="flaticon-tv"></i></li>
                                        <li><i className="flaticon-wifi-router-1"></i></li>
                                        <li><i className="flaticon-device"></i></li>
                                    </ul>
                                </div>
                                <div className="pricing-three-list">
                                    <ul>
                                        <li>1Gbps Speed</li>
                                        <li>Unlimited Data</li>
                                        <li>Landline Unlimited Calls </li>
                                        <li>350+ TV Channels </li>
										<li>Streaming Apps :  </li> 
                                        
											<ul className="StreamingApps">
												<li> </li>
												<li><img src={app01} /></li>
												<li><img src={app02} /></li>
												<li><img src={app03} /></li>
												<li><img src={app04} /></li>
												<li><img src={app05} /></li>
												<li><img src={app06} /></li>
												<li><img src={app07} /></li>
												<li><img src={app08} /></li>
											</ul>
											<br/>
											<span style={{ color: '#000' }}>&  More OTT Apps...</span>
                                    </ul>
                                </div>
								
                                <h2 className="pricing-three-price"> ₹ 3999<span> + GST</span></h2>
                                <a className=" contact-icon btn transparent-btn">Enquiry Now</a>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
             {/* pricing-area-end */}
			

             {/* subscribe-two-area */}
            <section className="subscribe-two-area subscribe-two-bg" style={{
    backgroundImage: `url(${subscribe_bg02})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                            <div className="subscribe-img wow fadeInRight" data-wow-delay=".2s">
                                <div className="welcome-image-box clearfix">
									<div id="myCarousel" className="carousel slide" data-ride="carousel">
										 {/* Carousel indicators */}
										
										 {/* Wrapper for carousel items */}
										<div className="carousel-inner">
											<div className="carousel-item active">
												<a className="pan" data-big={airtel1} href="#"><img src={airtel1} alt="1 Slide"  width="100%"/></a>
											</div> 
											<div className="carousel-item ">
												<a className="pan" data-big={airtel2} href="#"><img src={airtel2} alt="1 Slide"  width="100%"/></a>
											</div>
											<div className="carousel-item ">
												<a className="pan" data-big={airtel3} href="#"><img src={airtel3} alt="1 Slide"  width="100%"/></a>
											</div>
											<div className="carousel-item ">
												<a className="pan" data-big={airtel4} href="#"><img src={airtel4} alt="1 Slide"  width="100%"/></a>
											</div>
											<div className="carousel-item ">
												<a className="pan" data-big={airtel} href="#"><img src={airtel} alt="1 Slide"  width="100%"/></a>
											</div>
											<div className="carousel-item ">
												<a className="pan" data-big={airtel01} href="#"><img src={airtel01} alt="2 Slide"  width="100%"/></a>
											</div>
											<div className="carousel-item">
												<a className="pan" data-big={img1} href="#"><img src={img1} alt="3 Slide" width="100%" /></a>
											</div>
											<div className="carousel-item">
												<a className="pan" data-big={img2} href="#"><img src={img2} alt="4 Slide" width="100%"/></a>
											</div>
											<div className="carousel-item">
												<a className="pan" data-big={img3} href="#"><img src={img3} alt="5 Slide" width="100%"/></a>
											</div>
											<div className="carousel-item">
												<a className="pan" data-big={img4} href="#"><img src={img4} alt="6 Slide"  width="100%" /></a>
											</div>
											<div className="carousel-item">
												<a className="pan" data-big={img7} href="#"><img src={img7} alt="7 Slide" width="100%"/></a>
											</div>
										</div>
										 {/* Carousel controls */}
										<a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
											<span className="carousel-control-prev-icon"></span>
										</a>
										<a className="carousel-control-next" href="#myCarousel" data-slide="next">
											<span className="carousel-control-next-icon"></span>
										</a>
									</div>
								
								</div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="section-title white-title mb-30">
                                <h2 className="title">Looking for the Perfect <br/>Wi-Fi Plan ?</h2>
                            </div>
                            <div className="subscribe-content">
                                <p align="justify"> <b>Airtel Broadband Offers in Chennai, </b>
                                    Airtel Fiber Home Wifi Connection & Plans
                                    Airtel wifi plans – Getting a Wi-Fi connection for the house is the best way to keep all your digital devices connected at all times. Pick our newly launched wifi plans starts @499/- only, it gives superfast speed upto 40MBPS for your home, 
                                    stay speedy, always-on connectivity without network problems. 
                                </p>

                                <p align="justify"> Airtel wifi plans also provided fastest speed upto 1Gbps, with unlimited Internet and unlimited STD/Local calls. You also get Airtel Xstream box With Amazon Prime, Zee5 and many others included in Airtel best home wifi plans.</p>
                                
                                <p align="justify"> However, some Wi-Fi plans consume more power Airtel unlimited home Wi-Fi plans do not trade off between power consumption, range and bandwidth. You do not compromise on speeds and transmission vis-a-vis power consumption.</p>


                                <p align="justify"> A good Wi-Fi plan is characterised by high security, superfast speeds and always-on connectivity. For instance, Airtel broadband offers the superior V-fiber technology that has 99% uptime and speeds
                                ranging from 100 Mbps to 1 Gbps, based on the Wi-Fi plan you choose.</p>


                                <p align="justify"> So every time you want to watch something over your smartphone, just switch over from your data plan to your Wi-Fi plan used at home. We offer the best wifi plans that have a host of benefits and add-on features that provide a 
                                cost-effective solution to the entire home’s Internet needs.</p>
                                <h4 className="title"><span>Superfast and ultra-reliable.</span> Our fastest ever router.</h4>
                                <a className="btn contact-icon">Try Now </a>
								
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             {/* subscribe-two-area-end */}

            

             {/* brand-area */}
            <div className="brand-area pt-60 pb-40">
  
            </div>
             {/* brand-area-end */}


        </main>
         {/* main-area-end */}
        {/*  */}
    </>
  )
}

export default Airtel
