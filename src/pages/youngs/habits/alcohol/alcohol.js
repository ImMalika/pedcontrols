import React from 'react'
import "./alcohol.scss";
import { Nav } from "../../../../components/navbar/nav";
import navData from "../../../../components/data/data.json";
import Footer from "../../../../components/footer/footer";
import Paragraph from '../../../../components/paragraph/paragraph';
import Title from '../../../../components/title/title';
import Link from '../../../../components/links/links';
import Myimg from "../../../../components/myimg/myimg";
import Img from "../../../../media/youngsmedia/alcohol.jpg"
import Img2 from "../../../../media/youngsmedia/alcohol2.jpg"

const Alhocol = () => {
    return (
        <div>
            <Nav dataLink={navData.navHome} />
            <div className='main'>
                <Title titleName={"Spirtli ichimliklar"} />
                <Paragraph text={"Alkogol dunyoda aholi salomatligiga eng katta zarar yetkazuvchi psixoaktiv moddalardan biri hisoblanadi. Barcha o‘limlarning taxminan 5% spirtli ichimliklarni iste’mol qilish ta’siridan kelib chiqadi, deb hisoblamoqda Jahon sog‘liqni saqlash tashkiloti."} /><br />
                <Myimg img={Img}/>
                <Paragraph text={"Har 10 soniyada bir kishi dunyoda uning halokatli ta’siri oqibatlaridan vafot etadi, bu yiliga 3 millionga yaqin qurbonni tashkil qiladi. Spirtli ichimliklar yurak-qon tomir va ruhiy kasalliklarga, saratonning ayrim turlariga olib kelishi mumkin. Tashkilot ma’lumotlariga ko‘ra, mastlik yoshlarga ayniqsa qattiq ta’sir qiladi: dunyoda 20−39 yoshli insonlar orasidagi o‘limning 13,5 foizi ichkilikbozlik bilan bog‘liq."} /><br />
                <Myimg img={Img2}/>

                <Paragraph text={"Inson salomatligiga va millionlab odamlarning hayotiga katta zarar yetkazishiga qaramasdan, dunyoda spirtli ichimliklar marketingi ustidan nazorat boshqa psixoaktiv mahsulotlarni nazorat qilishdan ancha zaifroq, deya qayd etilgan JSSTning transchegaraviy reklama usullari va ishlab chiqaruvchilar tomonidan ishlatiladigan spirtli ichimliklarni onlayn reklamasi haqidagi yangi hisobotida."} /><br />
                <Paragraph text={" JSST o‘rganishlariga ko‘ra, spirtli ichimliklarga qaram bo‘lgan bemorlar ko‘pincha reklama xabarlarini ko‘rganda yoki u bilan bog‘liq boshqa ma’lumotlarni olganida alkogolga bo‘lgan ishtiyoq kuchayishi haqida tez-tez ma’lum qilishadi."} />
            </div>
            <Footer />
        </div>
    )
}

export default Alhocol