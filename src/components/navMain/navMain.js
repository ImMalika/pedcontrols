import React from 'react'
import "./navMain.scss";
import Logo from "../../media/logo.png";
import { Link } from "react-router-dom";


const NavMain = () => {
    return (
        <div className='navMain'>
            <div className='navMain__menu wrapper'>
                <img src={Logo} alt='logo' className='navMain__menu-logo'/>
                <div className='navMain__menu-links'>
                    <Link to={""} className='navMain__menu-links-link'>Biz haqimizda</Link>
                    <Link to={""} className='navMain__menu-links-link'>Ota-onalar uchun</Link>
                    <Link to={""} className='navMain__menu-links-link'>O'smirlar uchun</Link>
                    <Link to={""} className='navMain__menu-links-link'>Mo'dulli o'quv dastur</Link>
                </div>
            </div>
        </div>
    )
}

export default NavMain
