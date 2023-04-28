import React from 'react'
import c from "./lifestyle.scss";
import { Nav } from "../../../components/navbar/nav";
import navData from "../../../components/data/data.json";
import Footer from "../../../components/footer/footer";
import Paragraph from '../../../components/paragraph/paragraph';
import Title from '../../../components/title/title';
import Title2 from '../../../components/title2/title2';
import Link from '../../../components/links/links';
import Title3 from '../../../components/title3/title3';
import Myimg from '../../../components/myimg/myimg';
// Images //
import Img1 from "../../../media/youngsmedia/lifestyle1.jpg"
import Img2 from "../../../media/youngsmedia/lifestyle2.jpg"
import Img3 from "../../../media/youngsmedia/lifestyle3.jpg"
import Img4 from "../../../media/youngsmedia/lifestyle4.jpg"
import Img5 from "../../../media/youngsmedia/lifestyle5.jpg"
import Img6 from "../../../media/youngsmedia/lifestyle6.jpg"
import Img7 from "../../../media/youngsmedia/lifestyle7.jpg"
// 

const Lifestyle = () => {
  return (
    <div className={c.lifestyle}>
      <Nav dataLink={navData.navYoungs} />
      <div className='main'>
        <Title titleName={"SOG‘LOM TURMUSH TARZI"} />
        <Paragraph text={"Quyidagi sog‘lom turmush tarzining eng muhim 7 qoidasi siz-u bizga avvaldan ma’lum bo‘lgan, biroq hayotning mayda-chuyda tashvishlari bilan yodimizdan ko‘tarilgan va amalga oshira olmay qolgan tartiblarni yodga solsa ne ajab."}/>
       
        <Title3 title3={"1. Sport."}/>
        <Myimg img={Img1}/>
        <Paragraph text={"Sport — umrimiz oxiriga qadar sog‘lom hayot kechirishning asosiy shartlaridan. U yosh ham, joy ham, hattoki shart-sharoit ham tanlamaydi. Uning ko‘rinishlari, shakllari, usullari ko‘p. Yoga, pilates, piyoda yurish, yugurish, turnikka tortilish, otjimaniya, raqs, rafting, bodibilding, gimnastika, futbol va hokazo turlari bor. Istaganingizni tanlang, jismonan faol bo‘lsangiz kifoya. Har kuni emas, kunora 30-60 daqiqa sport bilan shug‘ullansangiz, sog‘lom bo‘lishingiz uchun yetarli. Kamroq o‘tirish va ko‘proq harakatlanish kerak. Agarda kasbingiz o‘tirib ishlashni taqozo etsa, har soatda kamida 5 daqiqa tanaffus qiling va bu vaqtda turli yengil mashqlarni bajarib, yelka, bel va oyoqlar chigilini yozing."}/><br/><br/><br />
        <Title3 title3={"2. To‘g‘ri ovqatlanish."}/>
        <Myimg img={Img2}/>
        <Paragraph text={"Ovqatlanish rasioningizga tabiiy mahsulotlar — meva va sabzavotlar, vitamin va minerallarga boy oziq-ovqatlarni ko‘proq kiriting. Ovqatlanish rasionining 65 foizini meva va sabzavotlar, non va turli bo‘tqalar tashkil etishi, 30 foizi go‘sht va sut mahsulotlari, 5 foizi shirinlik va yog‘larga ajratilishi lozim. Ozuqalar imkon qadar yangi, mavsumga mos bo‘lishi lozim. Bahor va yozda o‘simliklar, qishda oqsil va yog‘ga boy mahsulotlarga ko‘proq o‘rin ajratilishi lozim. Har kuni 2 litr atrofida suv iching."}/>
        <Paragraph text={"Fast-fud, gazli ichimliklar, yarim tayyor mahsulotlar, chips va kiriyeshkilar, boshqa ko‘plab sun’iy ta’m, rang va shakl berilgan ozuqalardan voz keching. Ovqatlanishda xilma-xil taomlarni aralashtirib yubormaslik lozim. Mevalar ovqatdan yarim soat avval, choy va ichimliklar 1-2 soat keyin iste’mol qilinishi zarur. Kechki 19-00dan keyin faqatgina bir oz olma tanovvul qilishga ijozat beriladi"}/><br/><br/><br />
        <Title3 title3={"3. Zararli odatlar."}/>
        <Myimg img={Img3}/>
        <Paragraph text={"Organizmimizning asosiy dushmanlaridan bo‘lmish tamaki va alkogol mahsulotlari, turli zararli odatlar (ularni o‘zingiz yaxshi bilasiz)dan voz kechish orqali sog‘lom turmush tarziga keng yo‘l oching. Har bir chekilmagan sigaret, ichilmagan har bir stakan aroq sizning sog‘lom hayot kechirish sari tashlagan muhim qadamingizdir."}/><br/><br/><br />
        <Title3  title3={"4. Kun tartibi."}/>
        <Myimg img={Img4}/>
        <Paragraph text={"Kun tartibiga qat’iy rioya eting. Birinchi navbatda — 8 soatlik uyqu! Ikkinchidan, kunning bir vaqtida uxlash va muayyan vaqtida uyg‘onishga odatlanish! Uyquning buzilishi asta-sekinlik bilan inson ruhiyati, hissiyotlariga ziyon yetkazadi, ishchanlik kayfiyatini yo‘qotadi, keyinchalik turli surunkali, jiddiy xastaliklarning rivojlanishiga sabab bo‘lishi mumin."}/><br/><br/><br />
        <Title3 title3={"5. Ijobiy kayfiyat."}/>
        <Myimg img={Img5}/>
        <Paragraph text={"Sog‘lom turmush tarzining yana bir muhim qoidasi — yorqin va ijobiy kayfiyat! Hayotdan ko‘proq zavq oling, muvaffaqiyatsizlik, omadsizliklarga ko‘p e’tibor qaratmang, doimo olg‘a intilish uchun kuch topa biling va odamlarga nisbatan g‘araz, gina-kudurat, yomon gumonlar saqlab yurmang, kechirimli, bag‘rikeng bo‘ling. Nodonlar bilan aslo tenglasha ko‘rmang!"}/><br/><br/><br />
        <Title3 title3={"6. Toza havo."}/>
        <Myimg img={Img6}/>
        <Paragraph text={"Uyingiz, xona va ish kabinetingizni doimo toza tuting, har kuni uni artib-tozalang, derazalarni ochib, toza havo kirishini ta’minlang. Normal jismoniy holatda bo‘lish uchun albatta chuqur va to‘g‘ri nafas olishni bilish lozim. Tabiat qo‘ynida sayr qilish, oynalarni ma’lum muddat ochib qo‘yish, tomorqa yoki ochiq havoda jismoniy mehnat qilishga yetadigani yo‘q."}/><br/><br/><br />
        <Title3 title3={"7. Shaxsiy gigiyena."}/>
        <Myimg img={Img7}/>
        <Paragraph text={"Ovqatlanishdan avval va keyin albatta qo‘llarni yuvish, uyqudan oldin va ovqatlangandan keyin tishlarni tozalash, toza kiyim, umuman, tozalikka qat’iy rioya etish sog‘lom turmush tarzining asosiy shartlaridan hisoblanadi. Unutmang! Sog‘lom turmush tarzi, bu — har qanday kasalliklar profilaktikasi va salomatlik, kuch-quvvat garovidir. U insonning turli qirralarini rivojlantirish, muvaffaqiyatga erishish garovidir."}/>
        <Paragraph text={"Sog‘lom turmush tarzi qoidalariga rioya etgan odam oilasi, mehnat jamoasi, umuman, jamiyatda o‘z o‘rniga ega bo‘ladi, turli murakkab vaziyatlarni yengib o‘tish, hayot qiyinchiliklari oldida o‘zini yo‘qotmaslikka o‘rganadi.Yana bir gap! Sog‘lom turmush tarzi qoidalari bir-birini qo‘llab-quvvatlaydi, biri ikkinchisiz sodir bo‘lishi amrimahol. Ularni ertaga qoldirmasdan, hoziroq amalga oshirishni boshlash bilan sog‘lom va baxtli hayot sari ilk qadamlarimizni tashlagan bo‘lamiz."}/>
        <br/><br/><br />




        
      </div>
      <Footer />

    </div>
  )
}

export default Lifestyle