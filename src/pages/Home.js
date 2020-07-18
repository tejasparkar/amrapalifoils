import React from 'react'
import image1 from '../assets/bgcarousel/slider-img-1.jpg';
import image2 from '../assets/bgcarousel/slider-img-2.jpg';
import image3 from '../assets/bgcarousel/slider-img-3.jpg';
import BackgroundSlider from 'react-background-slider';
import {Link  ,withRouter} from 'react-router-dom';

const Home=(props)=> {
    return (
        <div>
          <BackgroundSlider
  images={[image1, image2, image3]}
  duration={10} transition={2} />
           <div className="slider-area">
           <div className="single-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 offset-xl-1 col-lg-7">
                            <div className="slider-content">
                                <p>Quality work. Trustable service. Dedicated team</p>
                                <h3>We provide your Industrial solution</h3>
                                <div className="slider-btn">
                                    <Link className="boxed-btn2" to="/Product">Our Products <i
                                            className="Flaticon flaticon-right-arrow"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}
export default withRouter(Home);