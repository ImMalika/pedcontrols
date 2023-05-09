import React from 'react'
import "./footer.scss";
import WhiteLogo from "../../media/whitelogo.png"
import {Link} from "react-router-dom";
import App1 from "../../media/app1.png"
import App2 from "../../media/app2.png"

const Footer = () => {
  return (
    <div className='footer'>
    <div className="foot">
    <div className='foot__left'>
        <Link to={"/"}><div className="foot__left__logo"> <img src={WhiteLogo} alt="pedcontrols" /><p>Pedcontrols.uz</p></div></Link>
        {/* <ul className="foot__left__icons">
            <li><i class="fa-brands fa-youtube"></i></li>
            <li><i class="fa-brands fa-telegram"></i></li>
            <li><i class="fa-brands fa-facebook"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
        </ul> */}
        <p>“PEDCONTROLS.UZ” saytida eʼlon qilingan materiallardan nusxa koʻchirish, tarqatish va boshqa shakllarda foydalanish faqat tahririyat yozma roziligi bilan amalga oshirilishi mumkin. </p>
        
    </div>

      <div className='foot__right'>
          <ul>
            <li><span>Ota-onalar uchun:</span></li>
            <Link to={'/younges/lifestyle'} ><li>Sog'lom turmush</li></Link>
            <Link to={'/younges/advices'}><li>Foydali maslahatlar</li></Link>
           <Link to={'/younges/resources'}><li>Tavsiyaviy manbalar</li></Link> 
          </ul>
          <br />
          <ul>
            <li><span>O'smirlar uchun:</span></li>
           <Link to={'/parents/useful-advices'}><li>Foydali maslahatlar</li></Link> 
           <Link to={"/parents/psychologist's-advice"}><li>Psixolog maslahati</li></Link> 
           <Link to={'/parents/useful-resources'}><li>Foydali manbalar</li></Link> 
          </ul>
      </div>
    </div>
    <div className="footer__bottom">
    <ul className='footer__bottom__icons'>
    <i class="fa-brands fa-youtube"></i>
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-telegram"></i>
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-twitter"></i>

    </ul>
      <hr />
      <div className="footer__bottom__section">
      <p>© pedcontrols.uz  2023</p>
      <ul>
        <img src={App1} alt="app" />
        <img src={App2} alt="app" />
      </ul>
      </div>
    </div>
    </div>
  )
}

export default Footer
