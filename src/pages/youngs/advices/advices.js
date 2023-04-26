import React from 'react'
import "./advices.scss"
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
import Img from "../../../media/youngsmedia/advicesimg.jpg";
import Img2 from "../../../media/youngsmedia/advicesimg2.jpg";
// 

const Advices = () => {
  return (
    <div className="advices">
      <Nav dataLink={navData.navYoungs} />
      <div className='main'>
        <Title titleName={"Foydali maslahatlar"} />
        <Myimg img={Img}/>
        <Title3 title3={"1-savol: "} />
        <Paragraph text={"Meni tanqid qilishsa, jahlim chiqadi Assalomu alaykum. Xulqim yaxshi emas, bundan ko‘p aziyat chekaman. Juda ta’sirchanman. Tez asabiylashaman, tez jahlim chiqadi, tez  xafa bo‘laman. Ota-onam, opam mendan ko‘p xafa bo‘lishadi. Ular meni doim tanqid qilgandek tuyulaveradi, rosa xafa bo‘laman. Doim xulqing yomon deyishadi, men o‘zimni isloh qilishga urinyapman, ammo qo‘limdan kelmayapti, o‘zimni irodasiz his qilyapman. Ishda ham, o‘qishda ham, xatto oilamda ham o‘zimni omadsiz, foydasiz his qilyapman. Tez-tez tushkunlikka tushyapman, xayolimda doim negativ fikrlar aylanyapti. Meni tanqid qilishganda tez jahlim chiqib, oilamdagilar bilan urushib ketaman.  Bu holatda qanday yo‘l tutay, o‘zimni qanday qilib isloh qilay? Iltimos, to‘g‘ri yo‘l ko‘rsating."} /><br />
        <Title3 title3={"1.1. Psixolog:  "} />
        <Paragraph text={"Va alaykum assalom. Oila a’zolaringiz sizdan norozi bo‘lgan holatlarni eslang-da, bir daftar tutib, o‘sha salbiy sifatlaringizni daftarning chap tarafiga yozib chiqing. O‘ng tarafiga esa shu sifatlarning teskarisini, ya’ni ijobiy sifatlarni yozib chiqing. So‘ng yaxshilab idrok qilib ko‘ring. Ana shu ijobiy sifatlarga ega odam sizdek o‘sha vaziyatlarga tushsa, o‘zini qanday tutgan bo‘lar edi? U oila a’zolaringizga nisbatan muomala qilganida o‘zini qanday tutgan bo‘lar edi ? U qanday munosabat qilar edi va qanday so‘zlarni ishlatgan bo‘lar edi? Tasavvurlaringizga erk bering-da, so‘ng xayolingizga kelganini daftaringizga yozib chiqing. Yana o‘sha holatlar takrorlanganida endi o‘zingizni qanday tutish kerakligini bilib olasiz. "} />
        <br />
        <Myimg img={Img2}/>

        <Title3 title3={"Ota va bola munosabati"} /><br />
        <Title3 title3={"2-savol: "} />
        <Paragraph text={"- Assalomu alaykum. Men, alhamdulillah, ibodat qiladigan qizman. Yoshim 32da. Turmushga chiqmadim. Tushkunlikka ko‘p tushaman. Kim nima desa ishonib, kim ozgina mehr bersa, shunga talpinib yashayman. Tengdoshlarimning oilali va farzandli bo‘lganlariga qarab ich-etimni yeyman. Men ham oilali bo‘lsam-u, farzandlarimga Allohni tanitsam, ularga dinimizni, qadriyatlarimizni o‘rgatsam, deyman. Duolarimda shularni so‘rayman. Bu holatimga tushishimning sababchisi otam deb o‘ylayman. Undan nafratlanaman. Ukalarim bordi-keldi qilishadi. Ammo men kechira olmayman. Bolalik chog‘larim otamning onamga qilgan zulmlarini ko‘rib azobda o‘tdi. Endi balog‘atga yetganimda otam bizni tashlab ketgani sababidan ukalarim va onam bilan chet davlatlarda tirikchilik qilib kattalar kabi ishladim. Juda qiynaldim. Hozirda dadamning boshqa oilasi bor. Yoshi katta bo‘lishiga qaramay, yaqinda yana oila qurdi va farzandi ham bor. Ularga qarab mening g‘ashim keladi. Men ko‘rmagan mehrni bu farzandlari ko‘rishayapti, deb nafratim qo‘zg‘ayveradi. Birov qattiqroq gapirsa, dadam bo‘lsa-yu meni himoya qilsa, degan xayol bilan o‘tdi butun yoshligim. Men uni kechira olmasligimni tushunyapman. Shariatimizda birovdan gina-qudratli bo‘lib arazlab yurish mumkin emasligini bilaman. Ammo dadamni hech ham kechira olmayapman. Iltimos, menga nasihat qiling, menga yordam bering. Nima qilsam, men ham baxtli bo‘laman?"} /><br />
        <Title3 title3={"2.2. Psixolog:  "} />
        <Paragraph text={"Otangizni kechirishingiz u yoqda tursin, u insonni Alloh sizning otangiz bo‘lishini, bu yorug‘ dunyoga kelishingizning sababchisi bo‘lishini taqdir qilgani uchungina qanchadan-qancha minnatdorchilik bildirishingiz va shukrini ado etishingiz zarur. Agar bu dunyoda har kim birov xafa qilgani uchun gina-qudrat saqlab yuraversa-yu va kechira olmasa, buzg‘unchiliklar, fitnalarning oxiri bo‘lmay qolar edi, qanchadan-qancha kasalliklar ko‘payib ketgan bo‘lar edi. Hayotingizda nimaiki bo‘lgan bo‘lsa, bu taqdirdir. Dinimizni yaxshi tushungan odam “kechirolmayman” demasligi kerak. Masalaning ikkinchi tarafi ham borki, otangiz bilan til topisha olmas ekansiz, uning duosini olmas ekansiz, bu dunyoda baxtli bo‘la olishingiz nihoyatda qiyin. Otangiz nimaiki qilsa, u voqealar o‘tdi-ketdi. O‘tgan hayotingiz bilan yashamay, kelajagingizga ijobiy boqishingiz zarur. Bu dunyoda insoniyat borki, barchasining o‘ziga yarasha kamchiligi bor. Hech kim mukammal emas. Siz odamlarga nazar solganingizda ularning bir kamchiligi bor bo‘lgan odam deb qaramasangiz, barchadan sizga bo‘layotgan munosabatlarini mukammal bo‘lishini talab etaverasiz. Bu noto‘g‘ri nuqtai nazardir. Alloh bandasiga bir sinov berar ekan, albatta, buning hikmati bor. Bunga sabr qilganlar savob oladilar. Sinov odamni halok qilmasa, bu sinov uni yanada kuchli bo‘lishiga sabab bo‘ladi. Siz ham bu sinovlaringizning ijobiy taraflariga nazar solib ko‘ring. Taqdiringizga bitilgan bu sinovlarning sizga qanday foydali taraflari bo‘ldi? Masalan, boshqa tengdoshlaringizga nisbatan siz ancha tezroq ulg‘aydingiz, ularga nisbatan siz ancha mustaqilroq bo‘ldingiz, bu sinovlar orqali siz yanada bardoshli bo‘ldingiz, bu sinovlar sabab siz oila naqadar muqaddas narsa va bolalarning ko‘ngli qanchalar nozik bo‘lishini tushunib yetdingiz va hokazo. Ko‘nglingizdan bu xafagarchiliklar ketishi uchun otangiz bilan gaplashib oling. U yaxshi ko‘rgan bironta sovg‘a-salomlarni sotib oling-da, unga hadya qilib: “Otajon, nimaiki bo‘lgan bo‘lsa, bu Allohning taqdiri ekanligiga aminman va sizni yaxshi ko‘rishimni aytmoqchiman”, deya odob bilan gapni boshlang. So‘ng nima sababdan siz otasiz ulg‘aydingiz va otangiz uzoq yillar sizdek qizisiz qoldi ekan, ana shularni so‘rab oling. Nihoyatda go‘zal xulq-odob bilan so‘rang. Pardali qilib otangiz o‘sha vaqtlarda nimalarni his etganini, qanday orzulari bo‘lganini so‘rab oling. U bilan ko‘p suhbat qurib turing. Albatta sizga bu og‘ir ish. Lekin aynan sizga buning foydasi juda katta ekanini tushunsangiz, bu ishning uddasidan chiqasiz."} />
        <br /><br />

      </div>
      <Footer />
    </div>
  )
}

export default Advices