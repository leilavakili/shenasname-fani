import React, { Component } from 'react'
import Check from './Check.jpeg';
import './Box.css';


class Box extends Component{

render(){
    return(
        <div>
            <section className='section1'>
             <a className='topic'>مشخصات کلی</a>
             <table className='table2'>
             <tr>
             <th>کد نوسازی</th>
             <th>کد ثبتی سازمان</th>
             <th>پلاک ثبتی</th>
             </tr>
             <tr>
             <td></td>
             <td>137835</td>
             <td>10613/318</td>
             </tr>
             </table>
             <table className='table3'>
             <tr>
             <th>نام مالک</th>
             <th>کد ملی مالک</th>
             </tr>
             <td>محمدرضا سرخوش</td>
             <td></td>
             </table>
             <th>بلوک</th>
             </section>
            <section className='section2'>
            <a className='topic'>وضعیت تکمیل دفترچه</a>
            <table className='table3'>
            <tr>
             <th>تعداد کل جداول</th>
             </tr>
             </table>
             <table className='table3'>
             <tr>
             <th>جداول مربوط به شما</th>
             <th>جدول تکمیل شده توسط شما</th>
             <th>جدول در انتظار تکمیل شما</th>
             </tr>
             </table>
             <table className='table3'>
             <tr>
             <th>تعداد بخش های مربوط به شما</th>
             <th>بخش های ارسال شده</th>
             <th>بخش های ارسال نشده</th>
             </tr>
             </table>
            </section>
        </div>
        )
    }
}
    export default Box;