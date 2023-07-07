import React, { Component } from 'react'
import "./Navbar.css";
import Logo from './Logo.png';
import bell from './bell.png';
import menu from './menu.png';
class Navbar extends Component{

render(){
    return(
        <nav className='nav'>
        <img src={Logo} className="Logo" alt="Logo"/>
        <span className='nezam'>سازمان نظام مهندسی</span>
        <span className='sakhteman'>ساختمان استان قم</span>
    <div className='left'>
        <img src={menu} className="menu" alt="menu"/>
        <img src={bell} className="bell" alt="bell"/>
    </div>
        </nav>
    )
}
}
export default Navbar;