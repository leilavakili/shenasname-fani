import React, { Component } from 'react'
import Check from './Check.jpeg';
import './Box.css';


class Box extends Component{

render(){
    return(
        <div>
            <section className='section1'>
             <img src={Check} className="Check" alt="Check"/>
             <a>مشخصات کلی</a>
             <table>
             <th>کد نوسازی</th>
             <th>کد ثبتی سازمان</th>
             <th>پلاک ثبتی</th>
             <td></td>
             <td>137835</td>
             <td>10613/318</td>
             </table>
             <table>
             <th>نام مالک</th>
             <th>کد ملی مالک</th>
             <td>محمدرضا سرخوش</td>
             <td></td>
             </table>
             <th>بلوک</th>
             </section>
            <section className='section2'>
            <img src={Check} className="Check" alt="Check"/>
             <th>تعداد کل جداول</th>
             <th>جداول مربوط به شما</th>
             <th>جدول تکمیل شده توسط شما</th>
             <th>جدول در انتظار تکمیل شما</th>
             <th>تعداد بخش های مربوط به شما</th>
             <th>بخش های ارسال شده</th>
             <th>بخش های ارسال نشده</th>
            </section>
        </div>
        )
    }
}
    export default Box;