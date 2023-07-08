import React, { Component } from 'react'
import "./Footer.css";
import Certificate from './BuildingCertificate-Small.svg';

class Footer extends Component{

render(){
    return(
        <footer>
        <img src={Certificate} className="Certificate" alt="Certificate"/>
        <a>تمامی حقوق این سایت برای سازمان نظام مهندسی استان قم محفوظ است</a>
        <a>اجرا و پیاده سازی توسط:اندیشه فناوری اطلاعات قرن</a>    
        </footer>
    )
}
}
export default Footer;