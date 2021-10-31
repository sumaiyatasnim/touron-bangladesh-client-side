import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
const Footer = () => {
    return (
        <div>
            <div className=" container-fluid">
                <footer className=" py-3 footer">
                    {/* <div>
                        <Link className="text-white text-decoration-none" to="/contact"><h6>Contact Us</h6></Link>
                    </div> */}
                    <div>
                        <Link className="text-white text-decoration-none" to="/login"><h6>Sign Up Now</h6></Link>
                    </div>

                    <br />

                    <small className="text-white"> &#169; 2021  Tour On Bangladesh</small>
                </footer>
            </div>
        </div>
    );
};

export default Footer;