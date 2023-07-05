import React, { Component } from 'react'
import Certificate from './BuildingCertificate-Small.svg';
import './Navbar2.css';
class Navbar2 extends Component{

render(){
    return(
        <nav className='nav2'>
        <img src={Certificate} className="Certificate" alt="Certificate"/>
        <a className='project'>پروژه ها</a>
        <a className='project2'>پروژه ها</a>    
        <a className='report'>گزارش پروژه ها</a>    
        </nav>
    )
}
}
export default Navbar2;