import React, { Component } from 'react'
import "./Table.css";
import Red from './R.png';
import Yellow from './yellow-circle.png';
import Note from './notepad.jpeg';
class Table extends Component{

render(){
    return(
      <div className='Tablediv'>
      <h4>گزارش پروژه ها</h4>
      <div className="table1">
            <span className='head'></span>
            <span className="head">کد نوسازی</span>
            <span className="head">کد ثبتی سازمان</span>
            <span className="head">پلاک ثبتی</span>
            <span className="head">بلوک</span>
            <span className="head">آدرس</span>
            <span className="head">مالک</span>
            <span className="head">کد ملی مالک</span>
            <span className="head">تلفن مالک</span>
            <span className="head">تاریخ ایجاد</span>
            <span className="head">نقش شما</span>
            <span className="head">وضعیت</span>
            <span className="head">عملیات</span>
            <span>
              <img src={Yellow} className="Yellow" alt="Yellow" />
            </span>
            <span></span>
            <span>97589</span>
            <span>2207/20.21</span>
            <span></span>
            <span></span>
            <span>مجید حمیدی</span>
            <span></span>
            <span></span>
            <span>1401/08/22</span>
            <span>اجراء مجری</span>
            <span className="waiting">منتظر تکمیل سایرین</span>
            <span className="note">
              <a href="http://localhost:3000/Second">
                <img src={Note} className="Note" alt="Note" />
              </a>
            </span>
            <span>
              <img src={Yellow} className="Yellow" alt="Yellow" />
            </span>
            <span></span>
            <span>222391</span>
            <span>232231124422</span>
            <span></span>
            <span></span>
            <span>تست تستی</span>
            <span></span>
            <span></span>
            <span>1401/05/08</span>
            <span>اجراء مجری</span>
            <span className="waiting">منتظر تکمیل سایرین</span>
            <span className="note">
              <a href="http://localhost:3000/Second">
                <img src={Note} className="Note" alt="Note" />
              </a>
            </span>
            <span>
              <img src={Yellow} className="Yellow" alt="Yellow" />
            </span>
            <span></span>
            <span>137835</span>
            <span>10613/318</span>
            <span></span>
            <span></span>
            <span>محمدرضا سرخوش</span>
            <span></span>
            <span></span>
            <span>1401/05/08</span>
            <span>اجراء مجری</span>
            <span className="waiting">منتظر تکمیل شما</span>
            <span className="note">
              <a href="http://localhost:3000/Second">
                <img src={Note} className="Note" alt="Note" />
              </a>
            </span>
            <span>
              <img src={Yellow} className="Yellow" alt="Yellow" />
            </span>
            <span></span>
            <span>202181</span>
            <span>124564189</span>
            <span></span>
            <span>قم-بلوارامین</span>
            <span>محمد محمدی</span>
            <span></span>
            <span>09121234567</span>
            <span>1399/09/20</span>
            <span>طراحی عمران</span>
            <span className="waiting">منتظر تکمیل سایرین</span>
            <span className="note">
              <a href="http://localhost:3000/Second">
                <img src={Note} className="Note" alt="Note" />
              </a>
            </span>
            <span>
              <img src={Yellow} className="Yellow" alt="Yellow" />
            </span>
            <span></span>
            <span>202181</span>
            <span>124564189</span>
            <span></span>
            <span></span>
            <span>محمد محمدی</span>
            <span></span>
            <span></span>
            <span>1399/04/39</span>
            <span>طراحی عمران</span>
            <span className="waiting">منتظر تکمیل سایرین</span>
            <span className="note">
              <a href="http://localhost:3000/Second">
                <img src={Note} className="Note" alt="Note" />
              </a>
            </span>
            <span>
              <img src={Red} className="Red" alt="Red" />
            </span>
            <span>2-5-6-3-1</span>
            <span>47585</span>
            <span>1864</span>
            <span>ساختمان</span>
            <span></span>
            <span>احمد و رعنا نوروزی و آقا پور</span>
            <span></span>
            <span></span>
            <span>1397/03/08</span>
            <span>طراحی عمران</span>
            <span className="faild">برگشت شده</span>
            <span className="note">
              <a href="http://localhost:3000/Second">
                <img src={Note} className="Note" alt="Note" />
              </a>
            </span>
          </div>
      </div>

    )
  }
}

export default Table;

