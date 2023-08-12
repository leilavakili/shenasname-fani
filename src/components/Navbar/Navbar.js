import React, { Component } from 'react'
import "./Navbar.css";
import Logo from './Logo.png';
import bell from './bell.png';
import menu from './menu.png';
const formatFarsiNumber = (number) => {
    return new Intl.NumberFormat('fa-IR').format(number);
};
class Navbar extends Component{

render(){
    return(
        <nav className='nav'>
        <img src={Logo} className="Logo" alt="Logo"/>
        <span className='nezam'>سازمان نظام مهندسی</span>
        <span className='sakhteman'>ساختمان استان قم</span>
    <div className='left'>
        <a href='Empty'><img src={menu} className="menu" alt="menu"/></a>
        <a href="/Empty" className="notification">
         <img src={bell} className="bell" alt="bell"/>
         <a href="/Empty" class="badge">{formatFarsiNumber(19)}</a>
        </a>
      
    </div>
        </nav>
    )
}
}
export default Navbar;