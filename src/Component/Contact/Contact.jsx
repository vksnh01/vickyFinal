import React from "react";
import Map from '../Home/Map'
import './Contact.css';
import { MdLocationOn } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import img from './oxford-contact.jpg'

const Contact = () => {

    return (<>
        <div className="contact-main-div">
            <div className="contact-header">
                <h1>Contact us</h1>
            </div>
            <div className="contact-container">
                <div className="contact-container-div">
                <div className="contact-div">
                    <p><MdLocationOn /><span>Location</span></p>
                    <p className="contact-div-details">Maharana Partap College, Rohini East,Delhi,2452541</p>
                </div >
                <div className="contact-div">
                    <p className="contact-div-heading"><BsFillTelephoneFill /><span>Contact Number</span></p>
                    <p className="contact-div-details">8868063012</p>
                </div>
                <div className="contact-div">
                    <p className="contact-div-heading"><SiGmail /><span>Email Id</span></p>
                    <p className="contact-div-details">MaharanaPartapCollegeDelhi@gmail.com</p>
                    <p className="contact-div-details">MaharanaPartapCollege@yahoomail.com</p>
                </div>
                </div>


                <div className="img-divs">
                    <img src={img} alt="" />
                </div>
                <div>

                </div>
            </div>
            <div className="contact-location">
                <h1>Location</h1>
                <Map />
            </div>
        </div>
    </>)
}
export default Contact;