import React, { Component } from 'react'
import Certificate from './BuildingCertificate-Small.svg';
import './Navbar2.css';
class Navbar2 extends Component{

render(){
    return(
        <nav className='nav2'>
        <img src={Certificate} className="Certificate" alt="Certificate"/>
        <a className='project'>پروژه ها</a>
        <button className='project2'><a className='link' href='http://localhost:3000/First'>پروژه ها</a></button>    
        <button className='report'><a className='link' href='http://localhost:3000'>پروژه های واگذار شده</a></button>    
        </nav>
    )
}
}
export default Navbar2;