import React, { Component } from 'react'
import Check from './Check.jpeg';
import './Box.css';
class Box extends Component{

render(){
    return(
        <div className='body'>
         <div class="grid-item1">
            <div class="pie"><div className='dot'><span className='percent'>100% تکمیل شده</span></div></div>
            <buttom>ارسال اطلاعات</buttom>
         </div>
        </div>
        )
    }
}
    export default Box;