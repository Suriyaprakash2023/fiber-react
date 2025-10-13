import React,{useState } from 'react'
import banner_bg from '/src/assets/img/slider/banner_bg.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);

    // Simulate async action (e.g., API call)
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  };
  return (
    <>
      {/*  */}
      {/* banner-area */}
      <section className="banner-area banner-bg" style={{ backgroundImage: `url(${banner_bg})` }} data-background={banner_bg}>
        <div className="container">
          <div className="row">

            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="banner-content">
                <div className="formbg fadeInUp wow">
                  <h3><span>Enquiry Now to Get <br /> 15% Discount</span></h3>
                  <form action="" id="enquiryForm airtelauth" method="POST" onSubmit="return false;" encytype="multipart/form-data" className="fadeInUp">

                    {/* 2 column grid layout with text inputs for the first and last names */}

                    <div className="form-outline mb-4">
                      {/* <input type="hidden" id="CForm" name="CForm"> */}
                      <input className="form-control" name="name" placeholder="Name*" type="text" required="required" />
                    </div>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <input className="form-control" name="email" placeholder="Email*" type="email" required="required" />
                    </div>

                    {/* Number input */}
                    <div className="form-outline mb-4">
                      <input className="form-control" name="mobile" placeholder="Mobile*" type="number" required="required" />
                    </div>
                    <div className="form-outline mb-4">
                      <textarea className="form-control" name="message" placeholder="Message" ></textarea>
                    </div>

                    {/* Message input */}

                    {/*<div className="alert alert-success message success1" style="display:none;">Thank You, we'll get back you soon. </div>
											<div className="alert alert-danger message failure1" style="display:none;">Sorry, Please try again </div> */}
                    {/* Submit button */}
                    <button
                        type="submit"
                        className="mt-2 sbbtn d-flex justify-content-center align-items-center"
                        id="submitBtn"
                        style={{ backgroundColor:'green',border:'none',width: '100%', borderRadius: 0 }}
                        onClick={handleSubmit}
                        >
                        {!isLoading && !isSuccess && (
                            <span className='text-light' id="submitText">Enquiry Now!</span>
                        )}

                        {isLoading && (
                            <div
                            id="loadingSpinner"
                            className="spinner-border text-light"
                            style={{ width: '1.5rem', height: '1.5rem', marginLeft: '10px' }}
                            >
                            <span className="visually-hidden">Processing...</span>
                            </div>
                        )}

                        {isSuccess && (
                            <div
                            id="successMessage"
                            style={{
                                color: 'white',
                                fontSize: '20px',
                                marginLeft: '10px',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            >
                            <i className="bi bi-check-circle" style={{ color: 'white' }}></i>
                            <span style={{ marginLeft: '5px' }}>Success</span>
                            </div>
                        )}
                        </button>

                  </form>
                </div>
                <div className="DealingHeader pt-20 pb-10">
                  <h4 className="text-center">We are Dealing Broadbands in</h4>
                  <h5>Airtel | ACT | Hathway</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-phone">
          <div className="icon">
            <i className="fal fa-mobile-android"></i>
          </div>
          <div className="content">
            <span><h5 style={{ fontSize: '18px', fontWeight: 600 }}>Customer Service:</h5></span>
            <h5 className="number"><a className="text-decoration-none" href="tel:+919087001153">9087001153</a></h5>
          </div>
        </div>
      </section>
      {/* banner-area-end */}



      {/* services-area */}
      <section className="services-area pt-110 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-7">
              <div className="section-title text-center mb-50">
                <h2 className="title">Find Perfect Network Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-10">
              <a href="">   <div className="services-item">
                <div className="services-icon">
                  <ul className="devices-icon-wrap">
                    <li><i className="flaticon-tv"></i></li>
                    <li><i className="flaticon-wifi-router-1"></i></li>
                    <li><i className="flaticon-device"></i></li>
                    <li><i className="flaticon-laptop"></i></li>
                  </ul>
                </div>
                <div className="services-content">
                  <h3 className="title text-center"><Link to='/airtel'>Airtel Plans</Link></h3>
                </div>
              </div></a>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-10">
              <a href=""> <div className="services-item">
                <div className="services-icon">
                  <ul className="devices-icon-wrap">
                    <li><i className="flaticon-tv"></i></li>
                    <li><i className="flaticon-wifi-router-1"></i></li>
                    <li><i className="flaticon-device"></i></li>
                    <li><i className="flaticon-laptop"></i></li>
                  </ul>
                </div>
                <div className="services-content">
                  <h3 className="title text-center"><a href="">ACT Plans</a></h3>
                </div>
              </div></a>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-10">
              <a href=""> <div className="services-item">
                <div className="services-icon">
                  <ul className="devices-icon-wrap">
                    <li><i className="flaticon-tv"></i></li>
                    <li><i className="flaticon-wifi-router-1"></i></li>
                    <li><i className="flaticon-device"></i></li>
                    <li><i className="flaticon-laptop"></i></li>
                  </ul>
                </div>
                <div className="services-content">
                  <h3 className="title text-center"><a href="">Hathway Plans</a></h3>
                </div>
              </div></a>
            </div>
          </div>
        </div>
      </section>
      {/* services-area-end */}

      {/* pricing-three-area */}
      <section className="pricing-three-area pt-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="section-title text-center mb-20">
                  <h2 className="title">Our Best Value Plans</h2> 
                  <br/>
                <h5  style={{color:"red"}}>Airtel Broadband Plans in Chennai</h5>
                <hr className="line mt-2" style={{ borderTop: '3px solid red' }}/>

              </div>

            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8  col-10">
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
                  <li>Streaming Apps : No</li>
                </ul>
              </div>
            <br/>
          <br/>
          <h2 className="pricing-three-price"><span>From</span> ₹ 499<span> + GST</span></h2>
          <a href="" className="btn transparent-btn">Enquiry Now</a>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 col-10">
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
              <li>Streaming Apps : No</li>
            </ul>
          </div>
        <br/>
      <br/>
      <h2 className="pricing-three-price"><span>From</span> ₹ 799<span> + GST</span></h2>
      <a href="" className="btn transparent-btn">Enquiry Now</a>
    </div >
                        </div >
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 col-10">
                            <div className="pricing-three-item mb-30">
                                <div className="pricing-three-head">
                                    <h4 className="title">Entertainment </h4>
                                    <span className="devices-support"></span>
                                    <ul className="devices-icon-wrap">
                                        <li><i className="flaticon-tv"></i></li>
                                        <li><i className="flaticon-wifi-router-1"></i></li>
                                        <li><i className="flaticon-device"></i></li>
                                    </ul>
                                </div>
                                <div className="pricing-three-list">
                                    <ul>
                                        <li>200 Mbps Speed</li>
                                        <li>Unlimited Data</li>
                                        <li>Streaming Apps : Amazon Prime & Disney+ Hotstar</li>
                                    </ul>
                                </div>
                                <h2 className="pricing-three-price"><span>From</span> ₹ 999<span> + GST</span></h2>
                                <a href="" className="btn transparent-btn">Enquiry Now</a>
                            </div>
                        </div>
						<div className="subscribe-plan justify-content-center">
							<Link to='/airtel' className="btn transparent-btn emp text-decoration-none"> View All Airtel Plans</Link>
							
						</div>
                    </div >
                </div >
            </section >
  {/* pricing-three-area-end */ }


{/* cta-area 
            <section className="cta-area cta-bg jarallax" data-background="img/bg/cta_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-10">
                            <div className="cta-content text-center">
                                <div className="section-title white-title mb-35">
                                    <h2 className="title">Need Fast & Secure Broadband? Use Netfix & The Real Network</h2>
                                </div>
                                <div className="cta-btn-wrap">
                                    <a href="" className="btn">View our Plans</a>
                                    <span className="or">OR</span>
                                    <a href="tel:123" className="btn transparent-btn">+1 870 920 987</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             cta-area-end */}


{/* faq-area 
            <section className="faq-area pt-110 pb-120">
                <div className="container">
                    <div className="row align-items-center align-items-xl-end">
                        <div className="col-lg-6">
                            <div className="section-title mb-40">
                                <h2 className="title">Frequently Asked Questions</h2>
                            </div>
                            <div className="faq-wrapper">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                aria-expanded="true" aria-controls="collapseOne">
                                                Do I have to be an existing T-Mobile customer?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Yes! You'll be able to use your T-Mobile Home Internet to connect your computer, phone, and numerous other devices in your home simultaneously. People over time-we appreciate your patience! As soon as we're ready for you, we'll let you know
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                What is a commercial on-line service?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Yes! You'll be able to use your T-Mobile Home Internet to connect your computer, phone, and numerous other devices in your home simultaneously. People over time-we appreciate your patience! As soon as we're ready for you, we'll let you know
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                How much does the T-Mobile Home Internet plan cost?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Yes! You'll be able to use your T-Mobile Home Internet to connect your computer, phone, and numerous other devices in your home simultaneously. People over time-we appreciate your patience! As soon as we're ready for you, we'll let you know
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                How can I get Internet for my business?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Yes! You'll be able to use your T-Mobile Home Internet to connect your computer, phone, and numerous other devices in your home simultaneously. People over time-we appreciate your patience! As soon as we're ready for you, we'll let you know
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                When do you expect to roll out more markets?
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Yes! You'll be able to use your T-Mobile Home Internet to connect your computer, phone, and numerous other devices in your home simultaneously. People over time-we appreciate your patience! As soon as we're ready for you, we'll let you know
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-map-area">
                                <div className="faq-map-title">
                                    <h4 className="title">We are everywhere</h4>
                                    <p>Home Internet customers that did not provide an email address for service notifications</p>
                                </div>
                                <div className="faq-map text-center">
                                    <img src="{% static 'img/images/map_img.png' %}" alt="">
                                    <a href="" className="btn map-btn">Check Your Network Coverage</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             faq-area-end */}

{/* streaming-area
            <section className="streaming-area streaming-bg" data-background="img/bg/streaming_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-7">
                            <div className="section-title white-title text-center mb-60">
                                <h2 className="title">Popular TV Shows Now Streaming</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div id="streaming-active">
                                <ul>
                                    <li>
                                        <div className="streaming-item">
                                            <div className="streaming-thumb">
                                                <img src="{% static 'img/images/streaming_img01.jpg' %}" alt="">
                                                <span className="tag">Music Song</span>
                                                <a href="https://www.youtube.com/watch?v=XHOmBV4js_E" className="popup-video"><i className="fas fa-play"></i></a>
                                            </div>
                                            <div className="streaming-content">
                                                <span className="category">Fashion & Life Style</span>
                                                <h5 className="title"><a href="">Rockstar Fashion Show</a></h5>
                                                <div className="stream-rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <span>(80 Reviews)</span>
                                                </div>
                                                <div className="streaming-time">
                                                    <p>fri - mon <span>9:30</span> PM</p>
                                                    <div className="stream-logo">
                                                        <img src="{% static 'img/images/stream_logo.png.png' %}" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="streaming-item">
                                            <div className="streaming-thumb">
                                                <img src="{% static 'img/images/streaming_img02.jpg' %}" alt="">
                                                <span className="tag">Live</span>
                                                <a href="https://www.youtube.com/watch?v=XHOmBV4js_E" className="popup-video"><i className="fas fa-play"></i></a>
                                            </div>
                                            <div className="streaming-content">
                                                <span className="category">Fashion & Life Style</span>
                                                <h5 className="title"><a href="">Rockstar Fashion Show</a></h5>
                                                <div className="stream-rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <span>(80 Reviews)</span>
                                                </div>
                                                <div className="streaming-time">
                                                    <p>fri - mon <span>9:30</span> PM</p>
                                                    <div className="stream-logo">
                                                        <img src="{% static 'img/images/stream_logo.png.png' %}" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="streaming-item">
                                            <div className="streaming-thumb">
                                                <img src="{% static 'img/images/streaming_img03.jpg' %}" alt="">
                                                <span className="tag">Tv Show</span>
                                                <a href="https://www.youtube.com/watch?v=XHOmBV4js_E" className="popup-video"><i className="fas fa-play"></i></a>
                                            </div>
                                            <div className="streaming-content">
                                                <span className="category">Fashion & Life Style</span>
                                                <h5 className="title"><a href="">Rockstar Fashion Show</a></h5>
                                                <div className="stream-rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <span>(80 Reviews)</span>
                                                </div>
                                                <div className="streaming-time">
                                                    <p>fri - mon <span>9:30</span> PM</p>
                                                    <div className="stream-logo">
                                                        <img src="{% static 'img/images/stream_logo.png.png' %}" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="streaming-item">
                                            <div className="streaming-thumb">
                                                <img src="{% static 'img/images/streaming_img04.jpg' %}" alt="">
                                                <span className="tag">TV Serial</span>
                                                <a href="https://www.youtube.com/watch?v=XHOmBV4js_E" className="popup-video"><i className="fas fa-play"></i></a>
                                            </div>
                                            <div className="streaming-content">
                                                <span className="category">Fashion & Life Style</span>
                                                <h5 className="title"><a href="">Rockstar Fashion Show</a></h5>
                                                <div className="stream-rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <span>(80 Reviews)</span>
                                                </div>
                                                <div className="streaming-time">
                                                    <p>fri - mon <span>9:30</span> PM</p>
                                                    <div className="stream-logo">
                                                        <img src="{% static 'img/images/stream_logo.png.png' %}" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="streaming-item">
                                            <div className="streaming-thumb">
                                                <img src="{% static 'img/images/streaming_img05.jpg' %}" alt="">
                                                <span className="tag">Cartoon Show</span>
                                                <a href="https://www.youtube.com/watch?v=XHOmBV4js_E" className="popup-video"><i className="fas fa-play"></i></a>
                                            </div>
                                            <div className="streaming-content">
                                                <span className="category">Fashion & Life Style</span>
                                                <h5 className="title"><a href="">Rockstar Fashion Show</a></h5>
                                                <div className="stream-rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <span>(80 Reviews)</span>
                                                </div>
                                                <div className="streaming-time">
                                                    <p>fri - mon <span>9:30</span> PM</p>
                                                    <div className="stream-logo">
                                                        <img src="{% static 'img/images/stream_logo.png.png' %}" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             streaming-area-end */}

{/* blog-area 
            <section className="blog-area pt-110">
                <div className="container">
                    <div className="row align-items-end justify-content-between mb-60">
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="section-title">
                                <h2 className="title">Read Our Recent Blog Posts</h2>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4">
                            <div className="section-title-btn text-start text-md-end">
                                <a href="" className="btn transparent-btn">Read all posts</a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-9">
                            <div className="blog-post-item mb-50 wow fadeInUp" data-wow-delay=".2s">
                                <div className="blog-post-thumb">
                                    <a href=""><img src="{% static 'img/blog/blog_thumb01.jpg' %}" alt=""></a>
                                </div>
                                <div className="blog-post-content">
                                    <ul className="blog-post-meta">
                                        <li><i className="far fa-folder-open"></i> Network</li>
                                        <li><i className="flaticon-user"></i> <a href="">Netfix</a></li>
                                        <li><i className="flaticon-calendar"></i> 20 Jan 2021</li>
                                    </ul>
                                    <h3 className="title"><a href="">Children Loves the Cartoons And Our New Channels</a></h3>
                                    <a href="" className="btn transparent-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-9">
                            <div className="blog-post-item mb-50 wow fadeInUp" data-wow-delay=".4s">
                                <div className="blog-post-thumb">
                                    <a href="blog-details.html"><img src="{% static 'img/blog/blog_thumb02.jpg' %}" alt=""></a>
                                </div>
                                <div className="blog-post-content">
                                    <ul className="blog-post-meta">
                                        <li><i className="far fa-folder-open"></i> Network</li>
                                        <li><i className="flaticon-user"></i> <a href="blog.html">Netfix</a></li>
                                        <li><i className="flaticon-calendar"></i> 20 Aug 2021</li>
                                    </ul>
                                    <h3 className="title"><a href="blog-details.html">Broadband May Disconnect in July Cause of Electricity Issues</a></h3>
                                    <a href="blog-details.html" className="btn transparent-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-9">
                            <div className="blog-post-item mb-50 wow fadeInUp" data-wow-delay=".6s">
                                <div className="blog-post-thumb">
                                    <a href="blog-details.html"><img src="{% static 'img/blog/blog_thumb03.jpg' %}" alt=""></a>
                                </div>
                                <div className="blog-post-content">
                                    <ul className="blog-post-meta">
                                        <li><i className="far fa-folder-open"></i> Network</li>
                                        <li><i className="flaticon-user"></i> <a href="blog.html">Netfix</a></li>
                                        <li><i className="flaticon-calendar"></i> 20 July 2021</li>
                                    </ul>
                                    <h3 className="title"><a href="blog-details.html">We Newly Added Some International Comedy Channels This Week</a></h3>
                                    <a href="blog-details.html" className="btn transparent-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            blog-area-end */}

{/* brand-area
            <div className="brand-area pt-70 pb-120">
                <div className="container">
                    <div className="row brand-active">
                        <div className="col">
                            <div className="brand-item">
                                <a href="#"><img src="{% static 'img/brand/brand_item01.png' %}" alt=""></a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="brand-item">
                                <a href="#"><img src="{% static 'img/brand/brand_item02.png' %}" alt=""></a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="brand-item">
                                <a href="#"><img src="{% static 'img/brand/brand_item03.png' %}" alt=""></a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="brand-item">
                                <a href="#"><img src="{% static 'img/brand/brand_item04.png' %}" alt=""></a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="brand-item">
                                <a href="#"><img src="{% static 'img/brand/brand_item05.png' %}" alt=""></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             brand-area-end */}


    </>
  )
}

export default Home
