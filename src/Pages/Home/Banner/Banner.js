import React from 'react';
import './banner.css';
// import banner from '../../../Images/Banner/3.jpg'
const Banner = () => {
    return (
        <div>
            <div className="container">
                <div className="banner d-flex  align-items-center ">
                    <div className="row container">
                        <div className="col-md-10 col-lg-10 col-12">
                            <h1 className="title text-center">Tour On Bangladesh &#10084;&#65039;</h1>
                            {/* <h2 className="title-two">We are here to treat patients with care and love  &#10084;&#65039;  </h2> */}

                        </div>
                        <div className="col-md-2 col-lg-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;