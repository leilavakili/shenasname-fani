import React, { Component } from 'react'
import "./Footer.css";
import Certificate from './BuildingCertificate-Small.svg';

class Footer extends Component{

render(){
    return(
        <footer>
        <img src={Certificate} className="Certificate" alt="Certificate"/>
        <span className='footerright'>تمامی حقوق این سایت برای سازمان نظام مهندسی استان قم محفوظ است</span>
        <span>اجرا و پیاده سازی توسط:اندیشه فناوری اطلاعات قرن</span>    
        </footer>
    )
}
}
export default Footer;