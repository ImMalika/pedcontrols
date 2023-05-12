import React from 'react'
// import c from "./psychology.scss"
import { Nav } from "../../../components/navbar/nav";
import navData from "../../../components/data/data.json";
import Footer from "../../../components/footer/footer";
import Paragraph from '../../../components/paragraph/paragraph';
import Title from '../../../components/title/title';
import Title2 from '../../../components/title2/title2';
import Link from '../../../components/links/links';
import Title3 from '../../../components/title3/title3';
import Myimg from '../../../components/myimg/myimg';
// 
import Img1 from "../../../media/youngsmedia/carouselimg2.png"
import Img2 from "../../../media/youngsmedia/carouselimg3.png"
// 

const Method2 = () => {
  return (
    <div className="method2">
      <Nav dataLink={navData.navParents} />
    <div className="main">
    <Title titleName={"“PXAB (POTENTSIAL XATARNI ADEKVAT BAHOLASH)” TEXNOLOGIYASI"}/>
    <Myimg img={Img1}/>
    <Title3 title3={"Atrof-olamdagi narsa-hodisalardagi potensial xatarni adekvat baholash sifatini rivojlantirish amaliyoti: "}/>
    <Title3 title3={"1-bosqich. "}/>
    <Paragraph text={"Bolaga o‘zi ko‘rgan kinofilmlardan yoki o‘qigan kitoblaridan dastlab qahramonlar oshkora e’tiborga olmagan, mensimay qaragan, ammo keyinchalik ulkan talafotlar, olamshumul o‘zgarishlarga olib kelgan hodisalar yuzasidan qiziqarli ma’lumotnoma tayyorlashni taklif etish."}/>
    <Title3 title3={"2-bosqich. "}/>
    <Paragraph text={"Bolaga o‘zida yoki biror do‘stida ro‘y bergan kasallik, tan jarohati dastlab qanday alomatlarda namoyon bo‘lgani, ammo bu ilk kichik alomatlar e’tiborga olinmaganda ko‘p o‘tmay qanday asoratlar yuzaga kelgani haqida o‘ylanib ko‘rish va so‘zlab berish vazifasini topshirish.  "}/>
    <Title3 title3={"3-bosqich. "}/>
    <Paragraph text={"Bolaga vaqti-vaqti bilan o‘ta-ketgan “vahimachi odam” rolida bo‘lib ko‘rishni, shu rolli pozitsiyadan turib qandaydir juda kichik, arzimas hodisani, uning maksimal uzoq oqibatlarini izohlash topshirig‘ini qo‘yish. "}/>
    <Title3 title3={"4-bosqich. "}/>
    <Paragraph text={"Bolani biror yaqin inson yoki do‘st qandaydir xatti-harakat rejasini aytgan vaziyatni tasvirlab (masalan, do‘sti qayergadir metroda borishni reja qilayotganini, qaysidir kitobni kserokopiyadan chiqarib olishni o‘ylayotganini va shu kabi boshqa oddiy kundalik ishlar haqida aytayotgan bo‘lsin), shunday ishlardan oldin uni qanday qilib, qaysi so‘zlar bilan ehtiyotkorlikka undash mumkinligi haqida o‘ylantirib qo‘yish. "}/>
    <Title3 title3={"5-bosqich. "}/>
    <Paragraph text={"Bolani inson hayoti, sog‘lig‘i, mol-mulki va obro‘siga salbiy ta’sir ko‘rsatish mumkin bo‘lgan turli omillarning (har safar bu mavzudagi muloqotda ulardan birini tanlab olib) xavfli tomonlarini, ayanchli oqibatlarini yaqinlar va do‘stlarga qanday qilib tushuntirish mumkinligi yuzasidan mulohaza qilib ko‘rishga chorlash."}/>
    <Paragraph text={"Yuqorida tavsiflab berilgan ikkala yo‘nalish bo‘yicha amalga oshiriladigan amaliy chora-tadbirlarning ta’sir mexanizmini, bizningcha, quyidagicha tasvirlash mumkin (1-rasm)"}/>
    <Myimg img={Img2}/>
    </div>
      <Footer />
    </div>
  )
}

export default Method2