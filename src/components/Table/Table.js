import React, { Component } from 'react'
import "./Table.css";
import Red from './R.png';
import Yellow from './yellow-circle.png';
import Note from './notepad.jpeg';
import arrow from './arrow-transformed.png';
import magnifier from './magnifier.png';
import P from './P.jpeg';
import N from './N.jpeg';
const formatFarsiNumber = (number) => {
  return new Intl.NumberFormat('fa-IR').format(number);
};
const formatFarsiDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('fa-IR', options);
};


class Table extends Component{

render(){
    return(
      <div className='Tablediv'>
      <h5>گزارش پروژه ها</h5>
      <a href='/Empty'><img src={arrow} className="arrow" alt="arrow" /></a>
      <a href='/Empty'><img src={magnifier} className="magnifier" alt="magnifier" /></a>
      <span className='page'>از1تا6 از6</span>
      <a><img src={P} className="P" alt="P"/></a>
      <a><img src={N} className="N" alt="N"/></a>
      <div className="table1">
          <div className='firstrow'>
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
          </div>
          <div className='row hover'>
            <div className='back'><span>
              <img src={Yellow} className="Yellow" alt="Yellow" />
            </span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'>{formatFarsiNumber(97589)}</span></div>
            <div className='back'><span className='border'>{formatFarsiNumber(2207/20.21)}</span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'>مجید حمیدی</span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'>{formatFarsiDate('8/12/2023')}</span></div>
            <div className='back'><span className='border'>اجراء مجری</span></div>
            <div className='back'><span className="waiting border"><a>منتظر تکمیل سایرین</a></span></div>
            <div className='back'><span className="note border">
              <img src={Note} className="Note" alt="Note" onClick={"/Second"} />
            </span></div>
          </div>
          <div className='row hover'>
            <div><span>
              <img src={Yellow} className="Yellow" alt="Yellow" />
            </span></div>
            <div><span className='border'></span></div>
            <div><span className='border'>{formatFarsiNumber(222391)}</span></div>
            <div><span className='border'>{formatFarsiNumber(232231124422)}</span></div>
            <div><span className='border'></span></div>
            <div><span className='border'></span></div>
            <div><span className='border'>تست تستی</span></div>
            <div><span className='border'></span></div>
            <div><span className='border'></span></div>
            <div><span className='border'>1401/05/08</span></div>
            <div><span className='border'>اجراء مجری</span></div>
            <div><span className="waiting border"><a>منتظر تکمیل سایرین</a></span></div>
            <div><span className="note border">
              <a href="http://localhost:3000/Second">
                <img src={Note} className="Note" alt="Note" />
              </a>
            </span></div>
          </div>
          <div className='row hover'>
            <div className='back'><span>
              <img src={Yellow} className="Yellow" alt="Yellow" />
            </span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'>{formatFarsiNumber(137835)}</span></div>
            <div className='back'><span className='border'>{formatFarsiNumber(10613/318)}</span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'>محمدرضا سرخوش</span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'>1401/05/08</span></div>
            <div className='back'><span className='border'>اجراء مجری</span></div>
            <div className='back'><span className="waiting border"><a>منتظر تکمیل شما</a></span></div>
            <div className='back'><span className="note border">
              <a href="http://localhost:3000/Second">
                <img src={Note} className="Note" alt="Note" />
              </a>
            </span></div>
          </div>          
          <div className='row hover'>
            <div><span>
              <img src={Yellow} className="Yellow" alt="Yellow" />
            </span></div>
            <div><span className='border'></span></div>
            <div><span className='border'>{formatFarsiNumber(202181)}</span></div>
            <div><span className='border'>{formatFarsiNumber(124564189)}</span></div>
            <div><span className='border'></span></div>
            <div><span className='border'>قم-بلوارامین</span></div>
            <div><span className='border'>محمد محمدی</span></div>
            <div><span className='border'></span></div>
            <div><span className='border'>{formatFarsiNumber('09121234567')}</span></div>
            <div><span className='border'>1399/09/20</span></div>
            <div><span className='border'>طراحی عمران</span></div>
            <div><span className="waiting border"><a>منتظر تکمیل سایرین</a></span></div>
            <div><span className="note border">
              <a href="http://localhost:3000/Second">
                <img src={Note} className="Note" alt="Note" />
              </a>
            </span></div>
          </div>
          <div className='row hover'>
            <div className='back'><span>
              <img src={Yellow} className="Yellow" alt="Yellow" />
            </span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'>{formatFarsiNumber(202181)}</span></div>
            <div className='back'><span className='border'>{formatFarsiNumber(124564189)}</span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'>محمد محمدی</span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'>1399/04/39</span></div>
            <div className='back'><span className='border'>طراحی عمران</span></div>
            <div className='back'><span className="waiting border"><a>منتظر تکمیل سایرین</a></span></div>
            <div className='back'><span className="note border">
              <a href="http://localhost:3000/Second">
                <img src={Note} className="Note" alt="Note" />
              </a>
            </span></div>
          </div>
          <div className='row hover'>
            <div><span>
              <img src={Red} className="Red" alt="Red" />
            </span></div>
            <div><span className='border'>{formatFarsiNumber(2-5-6-3-1)}</span></div>
            <div><span className='border'>{formatFarsiNumber(47585)}</span></div>
            <div><span className='border'>{formatFarsiNumber(1864)}</span></div>
            <div><span className='border'>ساختمان</span></div>
            <div><span className='border'></span></div>
            <div><span className='border'>احمد و رعنا نوروزی و آقا پور</span></div>
            <div><span className='border'></span></div>
            <div><span className='border'></span></div>
            <div><span className='border'>1397/03/08</span></div>
            <div><span className='border'>طراحی عمران</span></div>
            <div><span className="faild border"><a>برگشت شده</a></span></div>
            <div><span className="note border">
              <a href="/Second">
                <img src={Note} className="Note" alt="Note" />
              </a>
            </span></div>
          </div>
          </div>
      </div>

    )
  }
}

export default Table;

