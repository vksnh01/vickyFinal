import React from "react";
import './Footer.css'
const Footer =()=>{
    const date = new Date();
    const year = date.getFullYear();
    return(<>
     <footer className="footer">
    <p>CopyRight © {year} Maharana Partap Degree College,Saharanpur</p>
    <p>Developer: Vikrant Sharma,Vikrantsharna11@gmail.com</p>
  </footer>
    </>)
}
export default Footer;