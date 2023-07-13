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
          <div className="row-1" id="head">
            <div></div>
            <div className="KN">کد نوسازی</div>
            <div className="KSS">کد ثبتی سازمان</div>
            <div className="PS">پلاک ثبتی</div>
            <div className="Block">بلوک</div>
            <div className="Adress">آدرس</div>
            <div className="Owner">مالک</div>
            <div className="NIO">کد ملی مالک</div>
            <div className="OT">تلفن مالک</div>
            <div className="Date">تاریخ ایجاد</div>
            <div className="Rol">نقش شما</div>
            <div className="Status">وضعیت</div>
            <div className="Opreation">عملیات</div>
          </div>
          <div className="row-2">
            <div>
              <img src={Yellow} className="Yellow" alt="Yellow" />
            </div>
            <div></div>
            <div>97589</div>
            <div>2207/20.21</div>
            <div></div>
            <div></div>
            <div>مجید حمیدی</div>
            <div></div>
            <div></div>
            <div>1401/08/22</div>
            <div>اجراء مجری</div>
            <div className="waiting">منتظر تکمیل سایرین</div>
            <div className="note">
              <a href="http://localhost:3000/Second">
                <img src={Note} className="Note" alt="Note" />
              </a>
            </div>
          </div>
          <div className="row-3">
            <div>
              <img src={Yellow} className="Yellow" alt="Yellow" />
            </div>
            <div></div>
            <div>222391</div>
            <div>232231124422</div>
            <div></div>
            <div></div>
            <div>تست تستی</div>
            <div></div>
            <div></div>
            <div>1401/05/08</div>
            <div>اجراء مجری</div>
            <div className="waiting">منتظر تکمیل سایرین</div>
            <div className="note">
              <a href="http://localhost:3000/Second">
                <img src={Note} className="Note" alt="Note" />
              </a>
            </div>
          </div>
          <div className="row-4">
            <div>
              <img src={Yellow} className="Yellow" alt="Yellow" />
            </div>
            <div></div>
            <div>137835</div>
            <div>10613/318</div>
            <div></div>
            <div></div>
            <div>محمدرضا سرخوش</div>
            <div></div>
            <div></div>
            <div>1401/05/08</div>
            <div>اجراء مجری</div>
            <div className="waiting">منتظر تکمیل شما</div>
            <div className="note">
              <a href="http://localhost:3000/Second">
                <img src={Note} className="Note" alt="Note" />
              </a>
            </div>
          </div>
          <div className="row-5">
            <div>
              <img src={Yellow} className="Yellow" alt="Yellow" />
            </div>
            <div></div>
            <div>202181</div>
            <div>124564189</div>
            <div></div>
            <div>قم-بلوارامین</div>
            <div>محمد محمدی</div>
            <div></div>
            <div>09121234567</div>
            <div>1399/09/20</div>
            <div>طراحی عمران</div>
            <div className="waiting">منتظر تکمیل سایرین</div>
            <div className="note">
              <a href="http://localhost:3000/Second">
                <img src={Note} className="Note" alt="Note" />
              </a>
            </div>
          </div>
          <div className="row-6">
            <div>
              <img src={Yellow} className="Yellow" alt="Yellow" />
            </div>
            <div></div>
            <div>202181</div>
            <div>124564189</div>
            <div></div>
            <div></div>
            <div>محمد محمدی</div>
            <div></div>
            <div></div>
            <div>1399/04/39</div>
            <div>طراحی عمران</div>
            <div className="waiting">منتظر تکمیل سایرین</div>
            <div className="note">
              <a href="http://localhost:3000/Second">
                <img src={Note} className="Note" alt="Note" />
              </a>
            </div>
          </div>
          <div className="row-7">
            <div>
              <img src={Red} className="Red" alt="Red" />
            </div>
            <div>2-5-6-3-1</div>
            <div>47585</div>
            <div>1864</div>
            <div>ساختمان</div>
            <div></div>
            <div>احمد و رعنا نوروزی و آقا پور</div>
            <div></div>
            <div></div>
            <div>1397/03/08</div>
            <div>طراحی عمران</div>
            <div className="faild">برگشت شده</div>
            <div className="note">
              <a href="http://localhost:3000/Second">
                <img src={Note} className="Note" alt="Note" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;

