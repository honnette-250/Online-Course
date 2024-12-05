import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    {/* Quick Links */}
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Quick Link</h4>
                        <a className="btn btn-link" href="">About Us</a>
                        <a className="btn btn-link" href="">Contact Us</a>
                        <a className="btn btn-link" href="">Privacy Policy</a>
                        <a className="btn btn-link" href="">Terms & Condition</a>
                        <a className="btn btn-link" href="">FAQs & Help</a>
                    </div>

                    {/* Contact Information */}
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Contact</h4>
                        <p className="mb-2"><FaMapMarkerAlt className="me-3" /> KIGALI City, Rwanda</p>
                        <p className="mb-2"><FaPhoneAlt className="me-3" /> +0250795206973</p>
                        <p className="mb-2"><FaEnvelope className="me-3" /> Honnette@gmail.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href=""><FaTwitter /></a>
                            <a className="btn btn-outline-light btn-social" href=""><FaFacebookF /></a>
                            <a className="btn btn-outline-light btn-social" href=""><FaYoutube /></a>
                            <a className="btn btn-outline-light btn-social" href=""><FaLinkedinIn /></a>
                        </div>
                    </div>

                    {/* Gallery */}
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Gallery</h4>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src="img/course-1.jpg" alt="Course 1" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src="img/course-2.jpg" alt="Course 2" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src="img/course-3.jpg" alt="Course 3" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src="img/course-2.jpg" alt="Course 2" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src="img/course-3.jpg" alt="Course 3" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src="img/course-1.jpg" alt="Course 1" />
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Newsletter</h4>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                            <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">
                                SignUp
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">Online Course</a>, All Rights Reserved. <br />
                            Designed By <a className="border-bottom" href="https://htmlcodex.com">HONNETTE</a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
