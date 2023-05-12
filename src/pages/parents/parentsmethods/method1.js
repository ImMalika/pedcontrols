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
import Img1 from "../../../media/youngsmedia/carouselimg1.png"
// 

const Method1 = () => {
  return (
    <div className="method">
      <Nav dataLink={navData.navParents} />
    
    <div className="main">
    <Title titleName={"“SENZITIVLIK” TEXNOLOGIYASI"}/>
    <Myimg img={Img1}/>
    <Title3 title3={"Atrof-muhitni bilish jarayonida obyektga nisbatan sezgirlikni rivojlantirish amaliyoti"}/>
    <Title3 title3={"1-bosqich. "}/>
    <Paragraph text={"Bolaga uni bevosita qurshab turgan muhit (shaxsiy xonasi, uy, hovli h.) da so‘ngi kunlarda bo‘lgan eng kichik o‘zgarishlarni e’tiborga olib qo‘yib, har hafta so‘ngida xabar berish vazifasini topshirish."}/>
    <Title3 title3={"2-bosqich. "}/>
    <Paragraph text={"Bolaga o‘quv muassasasigacha bo‘lgan yo‘lda bir haftada ro‘y bergan qandaydir noodatiy hodisalarni qayd etib, asosiysi ularning atrof-muhitidagi holatlarni maksimal aniqlik bilan tasvirlashni taklif etish. "}/>
    <Title3 title3={"3-bosqich. "}/>
    <Paragraph text={"Bolaga muayyan joyda bir vaqtda ro‘y bergan hodisalarni juft-juft qilib (ikkita bir vaqtda sodir bo‘lgan hodisani juftlikda) keltirib berishni, hafta davomida uning e’tiborini tortgan shunday voqealarning ro‘yxatini tuzib chiqishni o‘ziga xos aqliy o‘yin sifatida vazifa qilib qo‘yish (keyinchalik buni uchtadan, to‘rttadan va h. bir vaqtda ro‘y beruvchi hodisalar misolida ham amalga oshirish mumkin). "}/>
    <Title3 title3={"4-bosqich. "}/>
    <Paragraph text={"Bolani agar unda ma’lum narsa-buyum yoki muayyan xatti-harakatni odamlar ko‘radigan ochiq joyda yashirishga qandaydir zarurat bo‘lib qolganda, ularni qaerda, nimalar fonida joylashtirishi mumkinligi haqida o‘ylatirish qo‘yish."}/>
    <Title3 title3={"5-bosqich. "}/>
    <Paragraph text={"Bolaga hayot, salomatlik, mol-mulk va obro‘ga xavf-xatar tug‘dirishi mumkin bo‘lgan vaziyatlarning ro‘yxatini tuzib berish lozim bo‘lsa, uning tarkibidan qanday ogohlantirishlar o‘rin olishi mumkinligi haqida bandma-band (har bir yo‘nalishda, ya’ni hayotga, salomatlikka, mol-mulk va shaxsiy mavqe, obro‘ga) yozib berishni taklif etish. "}/>
    <Paragraph text={"Ko‘rinib turganidek, keltirilgan strategik chora-tadbirlarning negizida, birinchidan, asta-sekin bolani avval unga yaqin bo‘lgan uy-joy sharoitidan kattaroq makondagi voqea-hodisalarni kuzatishga, sinchkovlik bilan ularni o‘rganishga qaratilgan yondashuv tadbiq etiladi, ikkinchidan, bosqichma bosqich, bolaga muayyan kuzatuvchanlik vazifasidan amalda o‘z qo‘li bilan o‘sha sinchkovlikni namoyon etishini nazarda tutadigan topshiriqlarga o‘tiladi. "}/>
    </div>
      <Footer />
    </div>
  )
}

export default Method1