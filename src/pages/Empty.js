import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Navbar2 from '../components/Navbar2/Navbar2';
import Footer from '../components/Footer/Footer';

class Empty extends Component{

render(){
    return(
        <div>
        <Navbar />
        <Navbar2 />
        <a>مورد پروژه ها رو  انتخاب کنید</a>
        <Footer />
        </div>
        )
    }
}
    export default Empty;