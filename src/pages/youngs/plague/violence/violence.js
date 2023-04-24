import React from 'react'
import "./violence.scss"
import { Nav } from "../../../../components/navbar/nav";
import navData from "../../../../components/data/data.json";
import Footer from "../../../../components/footer/footer";
import Paragraph from '../../../../components/paragraph/paragraph';
import Title from '../../../../components/title/title';
import Title2 from '../../../../components/title2/title2';
import Link from '../../../../components/links/links';
// 
import Img from "../../../../media/youngsmedia/violenceimg1.jpg"
import Img1 from "../../../../media/youngsmedia/violenceimg.jpg"
import Img3 from "../../../../media/youngsmedia/violenceimg2.jpg"
import Img4 from "../../../../media/youngsmedia/violenceimg3.jpg"

const Violence = () => {
  return (
    <div className="violence">
      <Nav dataLink={navData.navHome} />
      <div className='main'>
        <Title titleName={"Zo‘ravonlik"} />
        <Paragraph text={"Zo'ravonlik — xotin-qizlarga nisbatan jismoniy, ruhiy, jinsiy yoki iqtisodiy ta'sir o'tkazish yoki bunday ta'sir o'tkazish choralarini qo'llash bilan tahdid qilish orqali ularning hayoti, sog'lig'i, jinsiy daxlsizligi, sha'ni, qadr-qimmati va qonun bilan himoya qilinadigan boshqa huquqlari hamda erkinliklariga tajovuz qiladigan g'ayrihuquqiy harakat (harakatsizlik)"} /><br />
        <div className='img'><img src={Img} alt="" /></div>
        <Paragraph text={"Dunyoda hech bir inson tazyiq va zo'ravonlikdan mutlaq himoya qilinganman, deb ayta olmaydi. Zo'ravonlik hodisasi atrofimizda, turli odamlar hayotida uchrab turadigan ijtimoiy illatlardan biridir. Zo'ravonlik ijtimoiy munosabatlar ichida yuz beradi va mana shu ijtimoiy munosabatlarning noto'g'ri tarzda tashkil qilinishi oqibati sanaladi. Binobarin, tazyiq va zo'ravonlik hodisalari ijtimoiy makonning o'ziga xos illat, xato holat, dardli va ayanchli vaziyatlaridan biridir. Shunga ko'ra, tazyiq va zo'ravonlik haqidagi axborot, holat va vaziyatlar, odamlar hayotidagi konkret hodisalar haqida ochiq-oydin va samimiy so'zlash, gapirish, ularni muhokama qilish zarur. Uning sabablari, yuzaga kelish asoslari va oqibatlari, zo'ravonlikdan jabr ko'rgan shaxs psixologik tiplari, bunday jabrdiydalar bilan ishlash metodikalari va ularni reabilitatsiya qilish, ya'ni ularni sog'lom va tinch hayotga qaytarish usullari haqida keng jamoatchilikka imkon qadar ilmiy-nazariy va amaliy bilim, malaka va ko'nikmalarni shakllantirish va tarqatish bugungi kunning eng dolzarb vazifalaridandir."} /><br />
        <div className='img'><img src={Img1} alt="" /></div>

        <Paragraph text={"Binobarin, tazyiq va zo'ravonlik yosh tanlamaydi, jins tanlamaydi, millat tanlamaydi, davlat tanlamaydi, mansab, mavqe, martaba, boylik va kelib chiqish tanlamaydi."} /><br />
        <Paragraph text={"Tazyiq va zo'ravonlikni qo'llagan odam har vaqt o'zidan ojizroq, ruhiy-emotsional holati barqaror bo'lmagan, ruhiyati singan, tang holatda bo'lgan, ruhiy ezilgan, jussasi kichikroq, jismoniy baquvvat bo'lmagan, zo'ravonga adekvat, ya'ni mos kelgan munosabat va javobni ko'rsata olmaydigan, zo'ravondan o'zini himoya qilishga shaxsiy jur'ati bo'lmagan, javob qaytarishga mavqei yo'l qo'ymaydigan va imkoni bo'lmagan, har jihatdan zo'ravonga tobe bo'lgan odamni qidiradi va unga nisbatan zo'ravonlik ishlatadi. Zo'ravonlik aslida jismoniy kuchli bo'lgan odamning jismoniy kuchsiz odamga nisbatan aynan kuch qo'llashidir. "} /><br />
        <Paragraph text={"Tazyiq va zo'ravonlik verbal (so'zlar orqali) yoki noverbal (harakatlar orqali) tarzda qo'llanilishi mumkin. Verbal zo'ravonlik so'zlarni o'ziga qurol qilib oladi. So'zlar orqali o'zga odamga hujum qilinadi. Hujumdan maqsad esa o'zga odamdan o'ch olish, uning nafsoniyatiga tegish, uni yerga urish, uni yo'q qilish, unga ruhiy zarar va zarba yetkazish, uning o'ziga bo'lgan ishonchini sindirish, uni o'ziga ruhiy-psixologik jihatdan qul qilib olish va ojizligiga iqror qildirish kabilardan iborat bo'ladi. "} /><br />
        <Paragraph text={"Verbal zo'ravonlik so'z aytishish, birovlarni ayblash, so'kinish, g'azablanish, jahl bilan gaplashish, kesatish, do'q qilish, qo'rqitishga urinish, “u qilaman, bu qilaman” deb, odamga tahdid qilish, qasd qilish, zo'rlash, shantaj, piching bilan gapirish, to'g'ri so'zlar mazmunini buzib talqin qilish, birovlarning orqasidan gapirish, kamsitish, odamlar ustidan kulish, dilsiyohlik, xafagarchilik, nafrat va qasos, birovlarni mensimaslik, kibr, o'zini boshqalardan ustun qo'yish, kek saqlash, nafsoniyatga tegadigan so'zlar ishlatish, yerga urish, kamchiliklar qidirish, yo'q yerdan janjal ko'tarish, jerkib berish, birovning har bir so'zi va amalidan yomonlik qidirish, turli bo'htonlar bilan aybiga “iqror” qildirish, zo'ravonlik asosida “kechirim” so'rattirish kabilarda namoyon bo'ladi."} /><br />
        <Paragraph text={"Noverbal, xususan jismoniy zo'ravonlik esa agressiyaning eng yuqori cho'qqisi bo'lib, aynan inson jismiga, uning tanasiga maqsadli zarar yetkazish, uni majruh qilish, urish, kaltaklash, tepish, musht tushirish, boshini yerga urish, zarba berish, yiqitish, mushtlash, yotqizib olib, badaniga tepish, boshiga zarba berish, quloqlariga urib, garang qilib qo'yish, kutilmaganda shapaloq tortib yuborish, itarish, turtkilash, bir zarb bilan yerga yiqitish, uloqtirib tashlash, sochlaridan tortish, sudrash, qiynoqqa solish, turli qaynoq asboblar bilan odamning yuzini, qo'llari, oyoqlari va tanasini kuydirish, oyoqlaridan tortib, uloqtirib yuborish, piyoladagi issiq choyni odamning yuziga sepib yuborish, zarb bilan itarib yuborish, turli o'tkir buyum va narsalarni otish, qurollar (pichoq, bolta, to'pponcha, arqon, arra v.b.) bilan inson hayotiga xavf solish yoki yaralash, burni tagiga narsalarni tiqishtirish, najaslarni va boshqa oziq-ovqat bo'lmagan narsalarni yedirish, pichoq o'qtalish, pichoqni bo'yni tagiga olib kelib, qasam ichdirish, og'zini yopish, qo'llarini bog'lab qo'yish, kuch ishlatib, bir-biri bilan to'qnashish, “bolalarga ziyon yetkazaman” deb ayolni qo'rqitish, keyin ayolni ayblash, “sen yomon onasan, o'z bolalaringni himoya qila olmading” deyish va ayoldan o'ch olish, bolalarini o'rtaga qo'yib, ayolni o'z hukmiga bo'ysundirish, ayol qadrini yerga urish va uni o'z qarorlariga so'zsiz bo'ysunishini talab etish, uning o'z yo'lida bo'lishini talab qilish, pul va nafaqa bermaslik, ayol kishining o'zini va bolalarini puldan qisib qo'yish, ovqat bermaslik, och qoldirish yoki ovqatni o'lchab berish, uyga qamab qo'yish, ko'chaga chiqarmaslik, o'z yaqinlari bilan muloqot qilishiga ruxsat bermaslik, kechasi uxlashga yo'l qo'ymaslik, barcha hayotdagi yo'qotish va omadsizliklarda ayolni ayblash kabilarda o'zini namoyon etadi."} /><br />
        <Paragraph text={"O'zbekiston Respublikasida demokratik fuqarolik jamiyati qurish yo'lidan borilmoqda ekan, bu jarayon keng xalq ommasi ichida yangi siyosiy munosabatlar, yangi siyosiy dunyoqarash, yangi siyosiy madaniyatning shakllanib borayotganligidan dalolat beradi. O'zbekiston uchun yangilik bo'lgan demokratik siyosiy madaniyatni esa xotin-qizlar manfaatlarining yangi miqyosda va mazmunda namoyon etilishi, to'laqonli amal qilishi, jamiyat ongidan muntazam joy olishi, va nihoyat, har qanday sharoit va davrlarda ham o'zligini yo'qotmasligi kabi omillarsiz tasavvur etib bo'lmaydi.O'zbekiston ayollari jinsi, millati, ijtimoiy kelib chiqishi, moddiy ta'minoti, ma'lumotidan qat'iy nazar o'zini tazyiq va zo'ravonlikdan himoya qilish huquqiga egadirlar."} /><br />
        <Paragraph text={"“Xotin-qizlarni tazyiq va zo‘ravonlikdan himoya qilish to‘g‘risida”gi O‘zbekiston Respublikasining O‘RQ-561-son Qonuni, 3-modda // https://lex.uz/docs/-4494709"} /><br />
        <div className='violencediv'>
          <Title2 titlename={"Qo’shimcha ma’lumotlar:"} /><br />
          <p className='violencetext'><b>Oilada zoʻravonlik </b>– oila aʼzosining huquqlari, erkinliklari va qonuniy manfaatlarini buzish hamda ularni jismoniy yoki ruhiy azob-uqubatlarga olib keladigan jismoniy, psixologik, jinsiy xarakterdagi harakatlardir. </p>
          <div className='img3'><img src={Img3} alt="this image was not found" /></div>
          <Title2 titlename={"ZOʻRAVONLIK UCHUN JAVOBGARLIKNI INKOR ETISHNING USULLARI:"} />
          <ul className='list'>
            <li><b>></b>	Stress</li>
            <li><b>></b>	Emotsional portlash</li>
            <li><b>></b>  Vaqtinchalik oʻzini boshqara olmaslik</li>
            <li><b>></b>	Giyohvandlik yoki spirtli ichimliklar</li>
            <li><b>></b>  Gʻazab va jahl, norozilik tuygʻulari</li>
          </ul>
          <Title2 titlename={"ZOʻRAVONLIKNING KOʻRINISHLARI"} />
          <ol>
            <li><b>1.</b>	Oila a’zolaringiz sizdan qoʻrqishadi</li>
            <li><b>2.</b>	Nizoli vaziyatlarda haqoratli soʻzlar osongina tilingizdan chiqib ketadi</li>
            <li><b>3.</b>	Bolalarni tortib olish bilan tahdid qildingiz, jazo sifatida pul bermadingiz</li>
          </ol><br />

          <Title2 titlename={"ZOʻRAVONLIKDAN OʻZINI TOʻXTATISH USULLARI:"} />
          <hr />
          <p className='title3'>1. TINCHLANISH, ICHKI XOTIRJAMLIKKA ERISHISH</p>
          <p className='violencetext'>Ushbu belgilarning birortasini his etishingiz bilan oʻzingizni tinchlantirishga yordam beradigan oddiy soʻzlarni takrorlang</p><br />
          <ul>
            <li>•	“Jahl va gʻazab mendan kuchli emas, men uni boshqara olaman”</li>
            <li> •	“U bunga loyiq emas”</li>
            <li> •	“U aslida yomon emas”</li>
          </ul>
          <p className='title3'>2. VAZIYATGA OYDINLIK KIRITISH</p>
          
          <ul>
            <li>−	Gʻolib chiqishga, jazolashga yoki fikringizni isbotlashga urinmang. </li>
            <li>−	Boshqa odamning his-tuygʻulari haqida aniq tasavvurga ega boʻlishga harakat qiling.</li>
            <li>−	Demak, siz ... deb aytmoqdasiz, chunki siz ... oʻylaysiz? Bu munozaradagi tarang vaziyatni yumshatadi va sizga oʻylash uchun biroz vaqt beradi.</li><br />
            <div className='img4'><img src={Img4} alt="" /></div>
          </ul><br />
          <p className='violencetext'>Agar siz hali ham oila a’zolaringizga baqirishni xohlayotgan boʻlsangiz, biron narsani otmoqchi boʻlsangiz yoki sizda qoʻl koʻtarish istagi boʻlsa, bir soatga uydan chiqib keting. Tinchlaning, yuguring, sayr qiling, nima qilib boʻlsa ham, vaziyatdan chalgʻing. Hotirjam boʻlgandagina, uyga qayting. Tanaffus siz uchun, tinchlanish, fikrni bir joyga toʻplash uchun imkoniyatdir.</p><br />

          <ul>
            <li><b>•	Oiladagi zoʻravonlik doimiy  holatga aylanishiga yoʻl qoʻymaslik uchun yaqinlaringizning fikrini tinglang</b></li>
            <li><b>•	Ularning hayoti bilan qiziqing, kunni qanday oʻtkazganligini soʻrang, ozgina eʻtibor qarating</b></li>
            <li><b>•	Muammoni hal qilmasdan muhokamani tugatmang, albatta, ijobiy yechimni toping</b></li>
          </ul>
        </div>
      </div>
      <Footer />
      </div>
  )
}

export default Violence