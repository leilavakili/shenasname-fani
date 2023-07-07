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
        <th>کد نوسازی</th>
        <th>کد ثبتی سازمان</th>
        <th>پلاک ثبتی</th>
        <th>بلوک</th>
        <th>آدرس</th>
        <th>مالک</th>
        <th>کد ملی مالک</th>
        <th>تلفن مالک</th>
        <th>تاریخ ایجاد</th>
        <th>نقش شما</th>
        <th>وضعیت</th>
        <th>عملیات</th>
    </tr>
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
</table>
    )
    }
}
    export default Table;