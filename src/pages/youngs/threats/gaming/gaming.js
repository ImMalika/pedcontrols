import React from 'react'
import "./gaming.scss"
import { Nav } from "../../../../components/navbar/nav";
import navData from "../../../../components/data/data.json";
import Footer from "../../../../components/footer/footer";
import Paragraph from '../../../../components/paragraph/paragraph';
import Title from '../../../../components/title/title';
import Title2 from '../../../../components/title2/title2';
import Link from '../../../../components/links/links';
// 

import Img from "../../../../media/youngsmedia/gaming.jpg"
import Img2 from "../../../../media/youngsmedia/gaming2.jpg"
import Img3 from "../../../../media/youngsmedia/gaming3.jpg"
import Myimg from '../../../../components/myimg/myimg';
// 

const Gaming = () => {
  return (
    <div className="gaming">
    <Nav dataLink={navData.navHome} />
    <div className='main'>
    <Title titleName={"Kompyuter o‘yinlarining yoshlar ongiga ta’siri"}/>
    <Paragraph text={"Kompyuter o‘yinlariga mukkasidan ketishning jamiyatga zararlari ko‘p. Avvalo manaviy zarar bo‘lib, kompyuter o‘yinlari jamiyatimizni manaviy buzuqlik botqog‘iga botirib, insonni o‘zlikni anglash baxtidan mosuvo qilmoqda."}/><br/>
    <Paragraph text={"Shayton vasvasasiga uchragan ayrim yoshlarning virtual o‘yinlariga xatti-harakatlari o‘zlariga ziynatli ko‘rinadi. O‘yinlar quliga aylangan bola o‘z-o‘zidan ajablanib, qilgan ishi ko‘zini quvontirib, borgan sari haddidan oshaveradi."}/><br/>
    <Myimg img={Img}/>
    <br/>
    <Paragraph text={"Kompuyuter o‘yinlari yoshlarning vaqtini o‘g‘irlamoqda. Internet – klublarda yoshlar ayni o‘qib, ilm hosil qiladigan paytlarida vaqtlarini bekorchi o‘yinlarga, ijtimoiy tarmoqlarda mutlaqo notanish shaxslar bilan qimmatli vaqtini tanishishga sarflayotgani tashvishli holat. Chunki internet va kompyuter o‘yinlari asriga aylangan o‘smirlar hayotdan, ilm olish, kasb o‘rganishdan va ma’naviy qadriyatlardan tamoman uzilib, butunlay manqurtlashib boradi. Hozir kompyuter o‘yinlari orqali o‘smir yoshlarga salbiy ta’sir qilib, ular ongiga o‘z buzg‘unchi g‘oyalarini singdirish yoki ularni to‘g‘ri yo‘ldan ozdirishga urinadigan yashirin kuchlar juda ko‘p. Kompyuter o‘yinlariga mukkasidan ketgan o‘smirlar o‘zlari bilmagan holda yashirin kuchlarning qo‘g‘irchog‘iga aylanadi. Kompyuterga mukkasidan ketgan yoshlarning fikri-xayoli, butun vaqti, hatto uyqusi ham bemani o‘yinlar bilan band bo‘ladi. Oxir-oqibat bunday yoshlar tengdoshlari, yaqinlari va hatto ota-onasiga ham qo‘l ko‘tarishgacha agar mubolag‘a bo‘lmasa qurol o‘qtalishgacha borib yetadi. Bu esa jamiyatda ilimsizlik, johillikning tomir yoyishiga alal oqibat yurt parokanda bo‘lishiga olib keladi."}/>
    <Myimg img={Img2}/>
    <Paragraph text={"Yoshlarning bunday g‘oyalarga aldanmasligi, zalolat botqog‘iga botmasligini ta’minlash niyatida zarur tavsiyalarni bayon qilamiz. Maqsadimiz yoshlarni internetga in qurib, o‘zlarining vayronkor g‘oyalarini virus kabi butun dunyoga tarqatayotgan jinoyatchilarning asl basharasidan ogoh etishdir. Sog‘lom aql egalari internet qulayliklaridan o‘z bilimlarini oshirish yo‘lida oqilona foydalanadi. Lekin ba’zi yoshlar esa ushbu tarmoqdagi yovuzlikka, ma’naviy tanazzulga sabab bo‘ladigan saytlarda “sayir qilib”, o‘zlari va atrofdagilarning ongini zaharlayotganlari aniq. Internet bozorida har kim o‘ziga kerakli narsani oladi, deb tarbiyani o‘z holiga tashlab qo‘yish yaramaydi."}/><br/><br/>
    <Link link={"https://naqshband.uz/makolalar/kompyuterni-yoshlarga-tasiri"}/>
    </div>
    <Footer />

    </div>
  )
}

export default Gaming