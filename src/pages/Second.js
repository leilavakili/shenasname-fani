import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Navbar2 from '../components/Navbar2/Navbar2';
import Footer from '../components/Footer/Footer';
import Box from '../components/Boxes/Box';

import "./Second.css";


class Second extends Component{

render(){
    return(
        <div>
        <Navbar />
        <Navbar2 />
        <Box />
        <Footer />
        </div>
        )
    }
}
    export default Second;