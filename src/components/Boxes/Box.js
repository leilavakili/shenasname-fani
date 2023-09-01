import React, { Component } from 'react'
import { useState } from 'react';
import Check from './Check.jpeg';
import Info from './info.jpeg';
import ID from './Id.jpeg';
import TI from './TI.jpeg';
import Contact from './contact.png';
import status from './status.jpeg';
import './Box.css';
const formatFarsiNumber = (number) => {
  return new Intl.NumberFormat('fa-IR').format(number);
};
class Box extends Component{
render(){
return(
<div class="wrapper">
  <div class="box2"> <div class="pie"><div className='dot'><span className='percent'>{formatFarsiNumber(100)}%<br /><span className='percent1'>تکمیل شده</span></span></div></div>
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
        <td className='black'>{formatFarsiNumber(106)}{formatFarsiNumber(13)}/{formatFarsiNumber(318)}</td>
      </tr>
      <tr>
        <td></td>
        <td className='gray'>مالک</td>
        <td className='black'>محمدرضا سرخوش</td>
      </tr>
    </table>
    <div className='sidemiddle'>
      <div className='accordion'>
        <button class="label">پیوست ها</button>
          <div class="content"><span>nothings to show</span></div>
        <button class="label"> ارجاع به جانشین</button>
          <div class="content"><span>nothings to show</span></div>
        <button class="label"> سوابق ارسال</button>
          <div class="content"><span>nothings to show</span></div>
      </div>
    </div>
    <div className='sidedown'>
      <button className='B1'><img src={ID} className="ID" alt="ID" />مشخصات دفترچه</button>
      <button className='Bth'><img src={TI} className="TI" alt="TI" />جداول اطلاعاتی</button>
      <button className='Bth'><img src={status} className='status' alt="status" />وضعیت دفترچه</button>
    </div>
  </div>
  <div class="box3"><section className='section1'>
        <img src={Check} className="Check" alt="Check" />
        <a className='topic'>مشخصات کلی</a>
      <div className='Border'>
        <table className='table2'>
          <tr>
            <th>کد نوسازی</th>
            <th>کد ثبتی سازمان</th>
            <th>پلاک ثبتی</th>
          </tr>
          <tr>
            <td></td>
            <td className='data'>{formatFarsiNumber(137)}{formatFarsiNumber(835)}</td>
            <td className='data'>{formatFarsiNumber(106)}{formatFarsiNumber(13)}/{formatFarsiNumber(318)}</td>
          </tr>
        </table>
      </div>
      <div className='Border'>
        <table className='table3'>
          <tr>
            <th>نام مالک</th>
            <th>کد ملی مالک</th>
          </tr>
          <tr>
            <td className='data'>محمدرضا سرخوش</td>
            <td></td>
          </tr>
        </table>
      </div>
      <div className='Border'>
        <div className='block'> <th>بلوک</th></div>
      </div>
    </section>
  </div>
  <div class="box5"><section className='section2'>
        <img src={Check} className="Check" alt="Check" />
        <a className='topic'>وضعیت تکمیل دفترچه</a>
        <a className='blue'><img src={Contact} className="Contact" alt="Contact"/>نقش شما:اجرای مجری</a>
      <div className='Border'>
        <table className='table4'>
          <tr>
            <th>تعداد کل جداول</th>
          </tr>
          <tr>
             <td className='data'>{formatFarsiNumber(19)}</td>
          </tr>
        </table>
      </div>
      <div className='Border'>
        <table className='table5'>
          <tr>
            <th>جداول مربوط به شما</th>
            <th className='jt'>جدول تکمیل شده توسط شما</th>
            <th>جدول در انتظار تکمیل شما</th>
          </tr>
          <tr>
            <td className='data'>{formatFarsiNumber(13)}</td>
            <td className='data'>{formatFarsiNumber(13)}</td>
            <td className='data'><span className='red'>{formatFarsiNumber(0)}</span></td>
          </tr>
        </table>
      </div>
      <div className='Border'>
        <table className='table6'>
          <tr>
            <th>تعداد بخش های مربوط به شما</th>
            <th className='be'>بخش های ارسال شده</th>
            <th>بخش های ارسال نشده</th>
          </tr>
          <tr>
            <td className='data'>{formatFarsiNumber(5)}</td>
            <td className='data'>{formatFarsiNumber(1)}</td>
            <td className='data'><span className='red'>{formatFarsiNumber(4)}</span></td>
          </tr>
        </table>
      </div>
    </section>
  </div>
</div>

)}}
export default Box;