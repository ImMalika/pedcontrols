import React from 'react'
import "./gabling.scss"
import { Nav } from "../../../../components/navbar/nav";
import navData from "../../../../components/data/data.json";
import Footer from "../../../../components/footer/footer";
import Paragraph from '../../../../components/paragraph/paragraph';
import Title from '../../../../components/title/title';
import Title2 from '../../../../components/title2/title2';
import Link from '../../../../components/links/links';
import Myimg from '../../../../components/myimg/myimg';
// 
import Img from "../../../../media/youngsmedia/gabling.jpg";
import Img2 from "../../../../media/youngsmedia/gabling2.jpg";
// 

const Gabling = () => {
  return (
    <div className="gabling">
      <Nav dataLink={navData.navYoungs} />
      <div className='main'>
      <Title titleName={"Onlayn qimor "}/>
      <Paragraph text={"Soʻnggi paytlarda onlayn qimor oʻyinlari ayrim toifadagi insonlar hayotining ajralmas qismiga aylanib bormoqda. Bunday oʻyinlar natijasida nafaqat moliyaviy taʼsirga, balki qaramlikni keltirib chiqaruvchi hissiy taʼsirga ham tushib qolish holatlari koʻp uchramoqda."}/>
      <Myimg img={Img}/>

      <Paragraph text={"Milliy urf-odatlarimiz va mentalitetimizga, shuningdek, diniy qarashlarimizga yot boʻlgan qimor oʻyinlarini noqonuniy ravishda tashkil etish holatlari, ayniqsa, onlayn tarzda ommalashib, oʻsmir va yoshlarni oʻz domiga tortayotgani achinarli holatlardan biridir. Hattoki, bunday oʻyinlarda koʻp miqdoridagi pulini yutqazib qoʻyib, oxir-oqibat oʻz joniga qasd qilish yoki yutqazib qoʻygan pulini toʻlash uchun jinoyat sodir qilish holatlari ham yuz bermoqda.Taʼkidlash joizki, bugungi kunda respublikamizda totalizator va bukmekerlik faoliyatini amalga oshirish va albatta, bunday xizmatlarni reklama qilish noqonuniy hisoblanadi."}/><br/>
      <Paragraph text={"Binobarin, mamlakatimizda qimor va tavakkalchilikka asoslangan oʻyinlarni qonunga xilof ravishda tashkil etish hamda oʻtkazish Oʻzbekiston Respublikasi Jinoyat kodeksining 278-moddasida jinoyat sifatida belgilab qoʻyilgan. Qolaversa, bunday oʻyinlarda qonunga xilof ravishda ishtirok etish, shuningdek voyaga yetmagan shaxsni qimor va tavakkalchilikka asolangan boshqa oʻyinlarda ishtirok etishga jalb qilish Oʻzbekiston Respublikasi Maʼmuriy javobgarlik toʻgʻrisidagi kodeksining 191-moddasida maʼmuriy huquqbuzarlik sifatida eʼtirof etilgan.Jumladan, qimor va tavakkalchilikka asoslangan boshqa oʻyinlarni qonunga xilof ravishda tashkil etish yoki oʻtkazish, shu jumladan ana shunday oʻyinlar uchun qimorxonalar tashkil etish yoki ularni saqlash yetti yilgacha ozodlikdan mahrum qilish bilan jazolanadi"}/>
      
      <Myimg img={Img2}/>

      <Paragraph text={"Voyaga yetmagan shaxsni qimor va tavakkalchilikka asoslangan boshqa oʻyinlarga jalb qilish, shunday harakatlar uchun maʼmuriy jazo qoʻllanilganidan keyin sodir etilgan boʻlsa, eng kam oylik ish haqining yigirma besh baravaridan ellik baravarigacha miqdorda jarima yoki ikki yilgacha axloq tuzatish ishlari yoxud toʻrt oygacha qamoq bilan jazolanadi."}/><br/>
      <Paragraph text={"Qimor va tavakkalchilikka asoslangan boshqa oʻyinlarni tashkil etish yoki oʻtkazish uchun telekommunikatsiya tarmoqlarida, shu jumladan Internet jahon axborot tarmogʻi provayderlari tomonidan xizmatlar koʻrsatish, tegishli dasturiy taʼminotdan nusxa koʻpaytirish, tarqatish, shunday harakatlar uchun maʼmuriy jazo qoʻllanilganidan keyin sodir etilgan boʻlsa, eng kam oylik ish haqining ellik baravaridan yetmish besh baravarigacha miqdorda jarima yoki uch yilgacha axloq tuzatish ishlari yoxud olti oygacha qamoq bilan jazolanadi”."}/><br/><br/>
      <Link link={"https://xs.uz/uz/post/qimor-va-tavakkalchilikka-asoslangan-ojinlarning-zhiddij-oqibatlari "}/>
      </div>
      <Footer />
    </div>
  )
}

export default Gabling