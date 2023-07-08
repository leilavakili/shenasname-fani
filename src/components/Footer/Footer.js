import React, { Component } from 'react'
import "./Footer.css";
import Pic from './BuildingCertificate-Small.svg';


class Footer extends Component{

render(){
    return(
        <footer>
        <img src={Pic} className="Pic" alt="Pic"/>
        <a className='aright'>تمامی حقوق این سایت برای سازمان نظام مهندسی استان قم محفوظ است</a>
        <a className='aleft'>اجرا و پیاده سازی توسط:اندیشه فناوری اطلاعات قرن</a>    
        </footer>
    )
}
}
export default Footer;