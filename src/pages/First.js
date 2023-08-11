import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Navbar2 from '../components/Navbar2/Navbar2';
import Table from '../components/Table/Table';
import Footer from '../components/Footer/Footer';
import './First.css';

class First extends Component{

render(){
    return(
        <body>
        <Navbar />
        <Navbar2 />
        <Table />
        <Footer />
        </body>
        )
    }
}
    export default First;