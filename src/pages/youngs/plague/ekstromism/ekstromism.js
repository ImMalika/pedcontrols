import React from 'react'
import  "./ekstromism.scss"
import { Nav } from "../../../../components/navbar/nav";
import navData from "../../../../components/data/data.json";
import Footer from "../../../../components/footer/footer";
import Paragraph from '../../../../components/paragraph/paragraph';
import Title from '../../../../components/title/title';
import Title2 from '../../../../components/title2/title2';
import Link from '../../../../components/links/links';

// 
import Img1 from "../../../../media/youngsmedia/ekstrmismimg1.jpg";


const Ekstromism = () => {
  return (
    <div className="ekstromism">
      <Nav dataLink={navData.navHome} />
      <div className='main'>
        <Title titleName={"Eksteremizm"} />
        <Paragraph text={"Ekstremizm — ijtimoiy-siyosiy vaziyatni beqarorlashtirishga, O‘zbekiston Respublikasining konstitutsiyaviy tuzumini zo‘rlik bilan o‘zgartirishga, hokimiyatni zo‘rlik ishlatib egallashga va uning vakolatlarini o‘zlashtirib olishga, milliy, irqiy, etnik yoki diniy adovat qo‘zg‘atishga qaratilgan harakatlarning ashaddiy shakllari ifodasi"} />
        <Paragraph text={"“Ekstremizmga qarshi kurashish to‘g‘risida”gi O‘zbekiston Respublikasining O‘RQ-489-son qonuni // https://lex.uz/docs/-3841957#-3843174"} />
        <br /><br />
        <div className='mainimg'><img src={Img1} alt="" /></div>
        <br />
        <Paragraph text={"Ekstremizm – jamiyat uchun an'anaviy bo'lgan diniy qadriyatlar va aqidalarni rad etish, ularga zid bo'lgan g'oyalarni aldov va zo'rlik bilan targ'ib qilishga asoslangan nazariya va amaliyotni anglatadi."}/><br/>
        <Paragraph text={"Ekstremizm va terrorizm bir-biri bilan bog'liq bo'lgan yagona jarayonning birin-ketin rivojlanadigan bosqichlaridir."}/>
        <Paragraph text={"Ekstremizm va terrorizm bir-biri bilan bog'liq bo'lgan yagona jarayonning birin-ketin rivojlanadigan bosqichlaridir.Ayni paytda, dunyoviy va diniy bilimlarning sayozligi, sof diniy tushunchalarning asl mazmunini bilmaslik ham ekstremistik g'oyalarning tarqalishiga sabab bo'lishi mumkin."}/><br/>
        <Paragraph text={"Yuqorida qayd etilganidek, ekstremistik tashkilotlarning aksariyati o'z nomini muqaddas islom dini bilan bog'lashga urinadi. Ular o'zlarini “najot topgan guruh”, qolgan musulmonlarni esa kofir deb hisoblaydilar."}/><br/>
        <Paragraph text={"Zamonaviy terrorizm xilma-xil moliyaviy manbalardan oziqlanishi hisobiga faoliyat qamrovini kengaytirishga, moddiy-texnik bazasini mustahkamlashga harakat qilmoqda. Terrorchi tash kilotlarni oziqlantirib turuvchi asosiy moliyaviy manbalar quyidagilar hisoblanadi:"}/><br/>
        <div className='ektromismdiv'>
        <ul>
            <li><b>•</b>ochiq, rasmiy faoliyat yurituvchi tuzilmalaridan olinadigan daromadlar</li>
            <li><b>•</b>uyushma a'zolari to'laydigan badallar</li>
            <li><b>•</b>noqonuniy qurol-yarog' savdosi</li>
            <li><b>•</b>kidnepping (odamlarni tovon puli undirish maqsadida o'g'irlash)</li>
            <li><b>•</b>qaroqchilik va bosqinchilik</li>
            <li><b>•</b>narkobiznes</li>
            <li><b>•</b>shu bilan birga, terrorchilik tashkilotlari ayrim yirik davlatlar tomonidan moliyalashtirilib turilishini ham alohida qayd etish lozim</li>
        </ul><br />
        <p><b>Ekstremistik oqimlar faoliyatida turli shakllarda ishtirok etish O'zbekiston Respublikasi Jinoyat Kodeksining quyidagi moddalari asosida jinoiy javobgarliklarga olib keladi:</b></p><br />
        <ol>
          <li><b>154-1-modda. </b>Chet davlatlarning harbiy xizmatiga, xavfsizlik, politsiya, harbiy adliya organlari yoki shunga o'xshash boshqa organlariga xizmatga kirish, yollanish;</li>
          <li><b>156-modda.  </b>Milliy, irqiy, etnik yoki diniy adovat qo'zg'atish;</li>
          <li><b>159-modda. </b>O'zbekiston Respublikasining konstitutsiyaviy tuzumiga tajovuz qilish;</li>
          <li><b>216-modda. </b>Jamoat birlashmalari yoki diniy tashkilotlarni qonunga xilof ravishda tuzish;</li>
          <li><b>216-1-modda.  </b>G'ayriqonuniy jamoat birlashmalari va diniy tashkilotlar fao-liyatida qatnashishga undash;</li>
          <li><b>216-1-modda.  </b>G'ayriqonuniy jamoat birlashmalari va diniy tashkilotlar fao-liyatida qatnashishga undash;</li>
          <li><b>216-2-modda.  </b>Diniy tashkilotlar to'g'risidagi qonunchilikni buzish;</li>
          <li><b>244-1-modda. </b>Jamoat xavfsizligi va jamoat tartibiga tahdid  soladigan mate-riallarni tayyorlash, saqlash, tarqatish yoki namoyish etish;</li>
          <li><b>244-2-modda.  </b>JDiniy ekstremistik, separatistik, fundamentalistik yoki boshqa taqiqlangan tashkilotlar tuzish, ularga rahbarlik qilish, ularda ishtirok etish;</li>
          <li><b>244-3-modda.  </b>Diniy mazmundagi materiallarni qonunga xilof ravishda tayyorlash, saqlash, olib kirish yoki tarqatish;</li>
          <li><b>246-modda.  </b>Kontrabanda(... diniy ekstremizm, separatizm va aqidaparastlikni targ'ib qiluvchi materiallarni O'zbekiston Respublikasining bojxona chegarasidan o'tkazish).</li>
        </ol>
        </div>
        <Link link={"Muslim.uz (http://old.muslim.uz/index.php/jaholatga-qarshi-marifat/maqola/item/34508)"}/>
      </div>
      <Footer />
    </div>
  )
}

export default Ekstromism