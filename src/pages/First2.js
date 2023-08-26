import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Navbar2 from '../components/Navbar2/Navbar2';
import Table2 from '../components/Table/Table2';
import Footer from '../components/Footer/Footer';

class First extends Component{

render(){
    return(
        <body>
        <Navbar />
        <Navbar2 />
        <Table2 />
        <Footer />
        </body>
        )
    }
}
    export default First;