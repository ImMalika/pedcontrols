import React from 'react'
import "./internet.scss"
import { Nav } from "../../../../components/navbar/nav";
import navData from "../../../../components/data/data.json";
import Footer from "../../../../components/footer/footer";
import Paragraph from '../../../../components/paragraph/paragraph';
import Title from '../../../../components/title/title';
import Title2 from '../../../../components/title2/title2';
import Link from '../../../../components/links/links';
import Title3 from '../../../../components/title3/title3';
// 
import Myimg from '../../../../components/myimg/myimg';
import Img from "../../../../media/youngsmedia/internet.jpg";
import Img2 from "../../../../media/youngsmedia/internet1.jpg";
import Img3 from "../../../../media/youngsmedia/internet3.jpg";

const Internet = () => {
  return (
    <div className="internet">
      <Nav dataLink={navData.navYoungs} />
      <div className='main'>
        <Title titleName={"Internetga qaramlik"} />
        <Myimg img={Img2}/>
        <Paragraph text={"Bugungi kunda kundalik hayotimizni internetsiz tasavvur qilish qiyin. Axborotning juda katta qismini internet sahifalari va ijtimoiy tarmoqlar orqali olamiz. Ko‘pchilik vaqtining ko‘p qismini ijtimoiy tarmoqlar(telegram, instagram, facebook kabi) hamda YouTube tarmog‘ida o‘tkazmoqda. Internet tobora takomillashib borayotganligi sababli, so‘nggi bir necha yil ichida internetga qaramlikning o‘sishi kuzatildi."} /><br />

        <Paragraph text={"Internetga qaramlik ko‘pincha yoshlar, ayniqsa Internetga kirish imkoniga ega bo‘lgan o‘smirlar orasida keng tarqalgan. Dunyo bo‘yicha juda ko‘p yoshlar ijtimoiy tarmoqlar va onlayn oʻyinlarga mukkasidan ketmoqda. Natijada yoshlar orasida stress, depressiya, e’tiborsizlik, qaysarlik, kabi ruhiy kasalliklar kuzatilishi ortmoqda"} /><br />
        <Myimg img={Img}/>

        <Title3 title3={"Internetga qaramlikning keng tarqalgan turlari quyidagilar : "} /><br />
        <div className='ektromismdiv'>
          <ul>
            <li><b>• </b>qancha vaqt davomida onlayn bo‘lganini yashirish;</li>
            <li><b>• </b>internetni boshqa sevimli mashg‘ulotlardan ustun qo‘yish;</li>
            <li><b>• </b>do‘stlari bilan munosabatlarining uzoqlashishi;</li>
            <li><b>• </b>shaxsiy gigiena va kundalik tartiblarga e’tibor bermaslik;</li>
            <li><b>• </b>internetsiz asabiylikni ko‘rsatish;</li>
            <li><b>• </b>doimiy ravishda mobil telefon(planshet) yoki kompyuterda onlayn bo‘lish.</li>
          </ul>

        </div><br/>
        <Title3 title3={"O‘smirda internetga qaramlik natijasida quyidagi vaziyatlar kelib chiqadi :"} /><br />
        <div className='ektromismdiv'> <ul>
          <li><b>• </b>kompyuterdan tashqari shaxsiy munosabatlarni yo‘qotish</li>
          <li><b>• </b>maktabda o‘zlashtirish baxolarining pasayishi;</li>
          <li><b>• </b>o‘smirda ijtimoiy ko‘nikmalarning yetishmasligi;</li>
          <li><b>• </b>atrofdagilar bilan munosabatda g‘azab, zo‘riqish, depressiya holatlarining namoyon bo‘lishi;</li>
          <li><b>• </b>jismoniy faollikning kamligi tufayli sog‘lig‘ining yomonlashishi.</li>
        </ul></div>
        <br />
        <Paragraph text={"Agar o‘smir internetga qaram bo‘lsa, yuqoridagi xavflar paydo bo‘lishidan oldin uni nazoratga olish muhimdir. Bu vaziyatda ota-ona farzandining sog‘lig‘i va uning kelajagi uchun qayg‘urayotganligi haqida tushuntirishi zarur. O‘smir uchun internetdan foydalanishni butunlay cheklab qo‘ymasdan undan foydalanish vaqtini qisqartirish haqida farzandi bilan kelishib olishi va uning bo‘sh vaqtini ko‘proq foydali mashg‘ulotlarga yo‘naltirishi zarur."} /><br /><br />
      </div>
      <Footer />

    </div>
  )
}

export default Internet