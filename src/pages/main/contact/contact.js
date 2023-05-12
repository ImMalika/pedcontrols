import React from 'react'
import { Nav } from "../../../components/navbar/nav";
import navData from "../../../components/data/data.json";
import Footer from "../../../components/footer/footer";
import Paragraph from '../../../components/paragraph/paragraph';
import Myimg from "../../../components/myimg/myimg";
import Img from "../../../media/contact.jpeg"

const Contact = () => {
    return (
        <div>
            <Nav dataLink={navData.navHome} />
            <div className='main'>
             <div className="contactimg">
                <img src={Img} alt="contactimage" />
             </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact