import React, { Component } from 'react'
import "./Table.css";
import Red from './R.png';
import Yellow from './yellow-circle.png';
import Note from './notepad.jpeg';
class Table extends Component{

render(){
    return(

<table>

    <tr class="white-row row-1" id="head">
        <th></th>
        <th className='KN'>کد نوسازی</th>
        <th className='KSS'>کد ثبتی سازمان</th>
        <th className='PS'>پلاک ثبتی</th>
        <th className='Block'>بلوک</th>
        <th className='Adress'>آدرس</th>
        <th className='Owner'>مالک</th>
        <th className='NIO'>کد ملی مالک</th>
        <th className='OT'>تلفن مالک</th>
        <th className='Date'>تاریخ ایجاد</th>
        <th className='Rol'>نقش شما</th>
        <th className='Status'>وضعیت</th>
        <th className='Opreation'>عملیات</th>
    </tr>
    <tbody>
    <tr class="gray-row row-2">
        <td><img src={Yellow} className="Yellow" alt="Yellow"/></td>
        <td></td>
        <td>97589</td>
        <td>2207/20.21</td>
        <td></td>
        <td></td>
        <td>مجید حمیدی</td>
        <td></td>
        <td></td>
        <td>1401/08/22</td>
        <td>اجراء مجری</td>
        <td className='waiting'>منتظر تکمیل سایرین</td>
        <td><img src={Note} className="Note" alt="Note"/></td>
    </tr>
    <tr class="white-row row-3">
        <td><img src={Yellow} className="Yellow" alt="Yellow"/></td>
        <td></td>
        <td>222391</td>
        <td>232231124422</td>
        <td></td>
        <td></td>
        <td>تست تستی</td>
        <td></td>
        <td></td>
        <td>1401/05/08</td>
        <td>اجراء مجری</td>
        <td className='waiting'>منتظر تکمیل سایرین</td>
        <td><img src={Note} className="Note" alt="Note"/></td>
    </tr>
    <tr class="gray-row row-4">
        <td><img src={Yellow} className="Yellow" alt="Yellow"/></td>
        <td></td>
        <td>137835 </td>
        <td>10613/318</td>
        <td></td>
        <td></td>
        <td>محمدرضا سرخوش</td>
        <td></td>
        <td></td>
        <td>1401/05/08</td>
        <td>اجراء مجری</td>        
        <td className='waiting'>منتظر تکمیل شما</td>
        <td><img src={Note} className="Note" alt="Note"/></td>
    </tr>
    <tr class="white-row row-5">
        <td><img src={Yellow} className="Yellow" alt="Yellow"/></td>
        <td></td>
        <td>202181</td>
        <td>124564189</td>
        <td></td>
        <td>قم-بلوارامین</td>
        <td>محمد محمدی</td>
        <td></td>
        <td>09121234567</td>
        <td>1399/09/20</td>
        <td>طراحی عمران</td>
        <td className='waiting'>منتظر تکمیل سایرین</td>
        <td><img src={Note} className="Note" alt="Note"/></td>
    </tr>
    <tr class="gray-row row-6">
        <td><img src={Yellow} className="Yellow" alt="Yellow"/></td>
        <td></td>
        <td>202181</td>
        <td>124564189</td>
        <td></td>
        <td></td>
        <td>محمد محمدی</td>
        <td></td>
        <td></td>
        <td>1399/04/39</td>
        <td>طراحی عمران</td>
        <td className='waiting'>منتظر تکمیل سایرین</td>
        <td><img src={Note} className="Note" alt="Note"/></td>
    </tr>
    <tr class="white-row row-7">
        <td><img src={Red} className="Red" alt="Red"/></td>
        <td>2-5-6-3-1</td>
        <td>47585</td>
        <td>1864</td>
        <td>ساختمان</td>
        <td></td>
        <td>احمد و رعنا نوروزی و آقا پور</td>
        <td></td>
        <td></td>
        <td>1397/03/08</td>
        <td>طراحی عمران</td>
        <td className='faild'>برگشت شده</td>
        <td><img src={Note} className="Note" alt="Note"/></td>
    </tr>
    </tbody>
</table>
    )
    }
}
    export default Table;