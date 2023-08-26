import React, { Component } from 'react'
import "./Table2.css";
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


class Table2 extends Component{

render(){
    return(
<div className='TableDiv'>
      <h5>گزارش پروژه ها</h5>
      <a href='/Empty'><img src={arrow} className="arrow" alt="arrow" /></a>
      <a href='/Empty'><img src={magnifier} className="magnifier" alt="magnifier" /></a>
      <span className='page'>از{formatFarsiNumber(1)}تا{formatFarsiNumber(6)} از{formatFarsiNumber(6)}</span>
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
            <div className='back'><span className='border'>{formatFarsiNumber(975)}{formatFarsiNumber(89)}</span></div>
            <div className='back'><span className='border'>{formatFarsiNumber(220)}{formatFarsiNumber(7)}/{formatFarsiNumber(20)}/{formatFarsiNumber(21)}</span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'>مجید حمیدی</span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'>{formatFarsiNumber(140)}{formatFarsiNumber(1)}/{formatFarsiNumber(0)}{formatFarsiNumber(8)}/{formatFarsiNumber(22)}</span></div>
            <div className='back'><span className='border'>اجراء مجری</span></div>
            <div className='back'><span className="waiting border"><a>منتظر تکمیل سایرین</a></span></div>
            <div className='back'><span className="note border">
              <a className='BN' href="/Second">
                <img src={Note} className="Note" alt="Note" />
              </a>
            </span></div>
          </div>
          <div className='row hover'>
            <div><span>
              <img src={Yellow} className="Yellow" alt="Yellow" />
            </span></div>
            <div><span className='border'></span></div>
            <div><span className='border'>{formatFarsiNumber(222)}{formatFarsiNumber(391)}</span></div>
            <div><span className='border'>{formatFarsiNumber(232)}{formatFarsiNumber(231)}{formatFarsiNumber(124)}{formatFarsiNumber(422)}</span></div>
            <div><span className='border'></span></div>
            <div><span className='border'></span></div>
            <div><span className='border'>تست تستی</span></div>
            <div><span className='border'></span></div>
            <div><span className='border'></span></div>
            <div><span className='border'>{formatFarsiNumber(140)}{formatFarsiNumber(1)}/{formatFarsiNumber(0)}{formatFarsiNumber(5)}/{formatFarsiNumber(0)}{formatFarsiNumber(8)}</span></div>
            <div><span className='border'>اجراء مجری</span></div>
            <div><span className="waiting border"><a>منتظر تکمیل سایرین</a></span></div>
            <div><span className="note border">
              <a className='BN' href="/Second">
                <img src={Note} className="Note" alt="Note" />
              </a>
            </span></div>
          </div>
          <div className='row hover'>
            <div className='back'><span>
              <img src={Yellow} className="Yellow" alt="Yellow" />
            </span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'>{formatFarsiNumber(137)}{formatFarsiNumber(835)}</span></div>
            <div className='back'><span className='border'>{formatFarsiNumber(106)}{formatFarsiNumber(13)}/{formatFarsiNumber(318)}</span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'>محمدرضا سرخوش</span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'>{formatFarsiNumber(140)}{formatFarsiNumber(1)}/{formatFarsiNumber(0)}{formatFarsiNumber(3)}/{formatFarsiNumber(26)}</span></div>
            <div className='back'><span className='border'>اجراء مجری</span></div>
            <div className='back'><span className="waiting border"><a>منتظر تکمیل شما</a></span></div>
            <div className='back'><span className="note border">
              <a className='BN' href="/Second">
                <img src={Note} className="Note" alt="Note" />
              </a>
            </span></div>
          </div>          
          <div className='row hover'>
            <div><span>
              <img src={Yellow} className="Yellow" alt="Yellow" />
            </span></div>
            <div><span className='border'></span></div>
            <div><span className='border'>{formatFarsiNumber(202)}{formatFarsiNumber(181)}</span></div>
            <div><span className='border'>{formatFarsiNumber(124)}{formatFarsiNumber(564)}{formatFarsiNumber(189)}</span></div>
            <div><span className='border'></span></div>
            <div><span className='border'>قم-بلوارامین</span></div>
            <div><span className='border'>محمد محمدی</span></div>
            <div><span className='border'></span></div>
            <div><span className='border'>{formatFarsiNumber(0)}{formatFarsiNumber(91)}{formatFarsiNumber(212)}{formatFarsiNumber(345)}{formatFarsiNumber(67)}</span></div>
            <div><span className='border'>{formatFarsiNumber(139)}{formatFarsiNumber(9)}/{formatFarsiNumber(0)}{formatFarsiNumber(4)}/{formatFarsiNumber(20)}</span></div>
            <div><span className='border'>طراحی عمران</span></div>
            <div><span className="waiting border"><a>منتظر تکمیل سایرین</a></span></div>
            <div><span className="note border">
              <a className='BN' href="/Second">
                <img src={Note} className="Note" alt="Note" />
              </a>
            </span></div>
          </div>
          <div className='row hover'>
            <div className='back'><span>
              <img src={Yellow} className="Yellow" alt="Yellow" />
            </span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'>{formatFarsiNumber(202)}{formatFarsiNumber(181)}</span></div>
            <div className='back'><span className='border'>{formatFarsiNumber(124)}{formatFarsiNumber(564)}{formatFarsiNumber(189)}</span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'>محمد محمدی</span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'></span></div>
            <div className='back'><span className='border'>{formatFarsiNumber(139)}{formatFarsiNumber(7)}/{formatFarsiNumber(0)}{formatFarsiNumber(4)}/{formatFarsiNumber(29)}</span></div>
            <div className='back'><span className='border'>طراحی عمران</span></div>
            <div className='back'><span className="waiting border"><a>منتظر تکمیل سایرین</a></span></div>
            <div className='back'><span className="note border">
              <a className='BN' href="/Second">
                <img src={Note} className="Note" alt="Note" />
              </a>
            </span></div>
          </div>
          <div className='row hover'>
            <div><span>
              <img src={Red} className="Red" alt="Red" />
            </span></div>
            <div><span className='border'>{formatFarsiNumber(2)}-{formatFarsiNumber(5)}-{formatFarsiNumber(6)}-{formatFarsiNumber(3)}-{formatFarsiNumber(1)}</span></div>
            <div><span className='border'>{formatFarsiNumber(475)}{formatFarsiNumber(85)}</span></div>
            <div><span className='border'>{formatFarsiNumber(186)}{formatFarsiNumber(4)}</span></div>
            <div><span className='border'>ساختمان</span></div>
            <div><span className='border'></span></div>
            <div><span className='border'>احمد و رعنا نوروزی و آقا پور</span></div>
            <div><span className='border'></span></div>
            <div><span className='border'></span></div>
            <div><span className='border'>{formatFarsiNumber(139)}{formatFarsiNumber(7)}/{formatFarsiNumber(0)}{formatFarsiNumber(3)}/{formatFarsiNumber(0)}{formatFarsiNumber(8)}</span></div>
            <div><span className='border'>طراحی عمران</span></div>
            <div><span className="faild border"><a>برگشت شده</a></span></div>
            <div><span className="note border">
              <a className='BN' href="/Second">
                <img src={Note} className="Note" alt="Note" />
              </a>
            </span></div>
          </div>
          </div>

          <a className='Number' href='/First'>{formatFarsiNumber(1)}</a>
      </div>

    )
  }
}

export default Table2;

