import React, { Component } from 'react'
import Check from './Check.jpeg';
import Info from './info.jpeg';
import ID from './Id.jpeg';
import TI from './TI.jpeg';
import status from './status.jpeg';
import './Box.css';
class Box extends Component{
render(){
    return(
        <div className='body'>
         <div class="grid-item1">
            <div class="pie"><div className='dot'><span className='percent'>100% تکمیل شده</span></div></div>
             <div className='B'>
              <button className='Button'>ارسال اطلاعات</button>
             </div>
            <table className='sidetop'>
             <tr>
             <td><img src={Info} className="Info" alt="Info" /></td>
             <td className='gray'>کد نوسازی</td>
             <td></td>
             </tr>
             <tr>
             <td></td>
             <td className='gray'>پلاک ثبتی</td>
             <td>10613/318</td>
             </tr>
             <tr>
             <td></td>
             <td className='gray'>مالک</td>
             <td>محمدرضا سرخوش</td>
             </tr>
            </table>
              <div className='sidemiddle'>
                <span className='bluehidden'>پیوست ها</span>
                <span className='bluehidden'>ارجاع به جانشین</span>
                <span className='bluehidden'>سوابق ارسال</span>
              </div>
            <div className='sidedown'>
                <button className='B1'><img src={ID} className="ID" alt="ID" /><span className='MD'> مشخصات دفترچه </span></button>
                <button className='Bth'><img src={TI} className="TI" alt="TI" /><span className='JE'>جداول اطلاعاتی</span></button>
                <button className='Bth'><img src={status} className='status' alt="status" />وضعیت دفترچه</button>
            </div>
         </div>
         <div className='grid-item2'>
            <section className='section1'>
             <img src={Check} className="Check" alt="Check" />
             <a className='topic'>مشخصات کلی</a>
             <div className='border'>
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
             </div>
             <div className='border'>
             <table className='table3'>
             <tr>
             <th>نام مالک</th>
             <th>کد ملی مالک</th>
             </tr>
             <td>محمدرضا سرخوش</td>
             <td></td>
             </table>
             </div>
             <div className='border'>
             <th className='block'>بلوک</th>
             </div>
             </section>
            </div>
            <div class="grid-item3">
            <section className='section2'>
            <img src={Check} className="Check" alt="Check" />
            <a className='topic'>وضعیت تکمیل دفترچه</a>
            <div className='border'>
            <table className='table4'>
            <tr>
             <th>تعداد کل جداول</th>
             </tr>
            </table>
            </div>
            <div className='border'>
             <table className='table5'>
             <tr>
             <th>جداول مربوط به شما</th>
             <th className='jt'>جدول تکمیل شده توسط شما</th>
             <th>جدول در انتظار تکمیل شما</th>
             </tr>
             <tr>
             <td></td>
             <td></td>
             <td><span className='red'></span></td>
             </tr>
             </table>
             </div>
             <div className='border'>
             <table className='table6'>
             <tr>
             <th>تعداد بخش های مربوط به شما</th>
             <th className='be'>بخش های ارسال شده</th>
             <th>بخش های ارسال نشده</th>
             </tr>
             <tr>
             <td></td>
             <td></td>
             <td><span className='red'></span></td>
             </tr>
             </table>
             </div>
            </section>
            </div>
         </div>
        )
    }
}
    export default Box;