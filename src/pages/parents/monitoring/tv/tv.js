import React from 'react'
import c from "./tv.scss";
import { Nav } from "../../../../components/navbar/nav";
import navData from "../../../../components/data/data.json";
import Footer from "../../../../components/footer/footer";
import Paragraph from '../../../../components/paragraph/paragraph';
import Title from '../../../../components/title/title';
import Title2 from '../../../../components/title2/title2';
import Link from '../../../../components/links/links';
import Title3 from '../../../../components/title3/title3';
import Myimg from '../../../../components/myimg/myimg';
// Images //
import Img1 from "../../../../media/parentsmedia/images/parentstv1.jpg";
import Img2 from "../../../../media/parentsmedia/images/parentstv2.jpg";
import Img3 from "../../../../media/parentsmedia/images/parentstv3.jpg";
import Img4 from "../../../../media/parentsmedia/images/parentstv4.jpg";
import Img5 from "../../../../media/parentsmedia/images/parentstv5.jpg";
import Img6 from "../../../../media/parentsmedia/images/parentstv6.jpg";
import Img7 from "../../../../media/parentsmedia/images/parentstv7.jpg";
import Img8 from "../../../../media/parentsmedia/images/parentstv8.jpg";
import Img9 from "../../../../media/parentsmedia/images/parentstv9.jpg";
import Img10 from "../../../../media/parentsmedia/images/parentstv10.jpg";
import Img11 from "../../../../media/parentsmedia/images/parentstv11.jpg";
import Img12 from "../../../../media/parentsmedia/images/parentstv12.jpg";
import Img13 from "../../../../media/parentsmedia/images/parentstv13.jpg";
import Img14 from "../../../../media/parentsmedia/images/parentstv14.jpg";
import Img15 from "../../../../media/parentsmedia/images/parentstv15.jpg";
import Img16 from "../../../../media/parentsmedia/images/parentstv16.jpg";
import Img17 from "../../../../media/parentsmedia/images/parentstv17.jpg";
import Img18 from "../../../../media/parentsmedia/images/parentstv18.png";
import Img19 from "../../../../media/parentsmedia/images/parentstv19.jpg";
import Img20 from "../../../../media/parentsmedia/images/parentstv20.jpg";
import Img21 from "../../../../media/parentsmedia/images/parentstv21.jpg";
import Img22 from "../../../../media/parentsmedia/images/parentstv22.jpg";
import Img23 from "../../../../media/parentsmedia/images/parentstv23.jpg";
import Img24 from "../../../../media/parentsmedia/images/parentstv24.jpg";
import Img25 from "../../../../media/parentsmedia/images/parentstv25.jpg";
import Img26 from "../../../../media/parentsmedia/images/parentstv26.jpg";
// 


const Tv = () => {
  return (
    <div className={c.tv}>
      <Nav dataLink={navData.navParents} />
      <div className='main'>
        <Title titleName={"Televizorda OTA-ONA NAZORATINI O'rnatish USULLARI"} />
        <Paragraph text={"Biz allaqachon kabel va sun'iy yo'ldosh televideniyasi operatorlari, agar ular o'z paketlarida kattalar uchun kanallarni taklif qilsalar, ular faqat kechqurun borishadi, shu bilan birga bunday tarkibni tomosha qilishni oldini olish mumkin."} />
        <Paragraph text={"Smart televizorlarning tarqalishi bilan bunday tarkibning manbalari kattalik tartibiga aylandi, shuning uchun masalaning axloqiy tomoni juda dolzarb bo'lib qoldi. Hech bo'lmaganda farzandlarini tarbiyalash haqida qayg'uradigan ota-onalar uchun. "} />
        <Myimg img={Img1} />
        <Paragraph text={"Siz yo'qligingizda bolalar auditoriyasini bunday dasturlarni tomosha qilishdan himoya qilish mumkinmi? Muammo ko'rinadigan darajada oddiy emas, chunki ota-ona nazorati funktsiyasi hamma joyda turli yo'llar bilan amalga oshiriladi va bu ishlatilgan televizor dasturining markasi, modeli va hatto versiyasiga va taqiqlangan tarkibga ega dasturga bog'liq."} />
        <Paragraph text={"Keling, ushbu muammoning barcha jihatlarini ko'rib chiqishga harakat qilaylik. Biz darhol tan olamiz – siz bizning sharhimizga faqat eng keng tarqalgan xizmatlar va televizion brendlarni kiritdingiz. Ushbu joydagi hamma narsani qamrab olishning iloji yo'q, shuning uchun agar siz blokirovka bilan shug'ullana olmagan bo'lsangiz, iloji boricha batafsilroq tafsilotlarni ko'rsatib, sharhlarda ishlamagan narsalarni yozing."} />
        <Title3 title3={"Smart televizorlarda bola bo'lmagan video namoyishini qanday bloklash mumkin "} />
        <Paragraph text={"'Aqlli' televizorlar odatdagidan farq qiladi, chunki bu erda har qanday dasturni o'zingiz o'rnatishga ruxsat beriladi va ularda bolalar yoshiga mos bo'lmagan filmlar va dasturlar bo'lishi mumkin. Biroq, bu muammoning echimi bor – bunday televizorlarning aksariyati YouTube-dan onlayn kinoteatrlar va oqim xizmatlariga qadar o'rnatilgan har qanday dasturga qulf o'rnatishga imkon beradi. Albatta, bunday cheklovlar har qanday kanallarda va hatto aniq teleko'rsatuvlarda ham qo'llanilishi mumkin. Ammo bu blokirovka hamma joyda bir xil tarzda amalga oshirilmaydi, shuning uchun bizning vazifamiz ota – ona nazorati funktsiyasini faollashtirishning eng mashhur usullari haqida gapirishdir."} />
        <Myimg img={Img2} />

        <Title3 title3={"O'yin konsollarida ota-ona nazoratini qanday yoqish mumkin"} />
        <Paragraph text={"Nafaqat video o'yinlarni boshqarish uchun ishlatiladigan o'yin pristavkalari bolalarning harakatlarini kuzatib borish uchun o'z boshqaruv tizimidan foydalanadi."} />
        <Myimg img={Img3} />

        <div className='ektromismdiv'>
          <ul>
            <li><b>•	</b>Xususan, Xbox One konsollarida bunday tizim quyidagilarga imkon beradi:</li>
            <li><b>•	</b>Giyohvandlik paydo bo'lishining oldini olish uchun prefiksdan foydalanish uchun vaqt chegaralarini kiriting;</li>
          </ul>
        </div>
        <Myimg img={Img4} />

        <div className='ektromismdiv'>
          <ul>
            <li><b>•	</b>Internet-do'konlarda tranzaktsiyalarni blokirovka qilish;</li>
            <Myimg img={Img5} />

            <li><b>•	</b>voyaga etmaganlar tomonidan istalmagan tarkibni ko'rishni bloklash, shu jumladan veb-saytlarga kirish, 18+toifadagi ilovalar va o'yinlardan foydalanish.</li>
          </ul>
        </div>
        <Myimg img={Img6} />
        <Paragraph text={"Konsoldan foydalanganda bolani boshqarishni osonlashtiradigan bir qator boshqa funktsiyalar mavjud. Shunday qilib, maxfiylik rejimini ishga tushirganda, ota-onalar ko'p o'yinchi o'yinlarining boshlanishini boshqarish imkoniyatiga ega bo'ladilar. Agar ular bola istalmagan miqdordagi shaxsiy ma'lumotlarni oladi deb hisoblasalar, uni cheklashlari mumkin. Farzandingizning do'stlari ro'yxatiga kiritilgan shaxslarni ko'rish, shuningdek, kerakli deb hisoblaganlarni blokirovka qilish imkoniyati mavjud."} />
        <Paragraph text={"Ota-ona nazoratining barcha funktsiyalari ishlab chiqaruvchi tomonidan tizim dasturiy ta'minoti darajasida amalga oshiriladi. Ushbu imkoniyatdan foydalanish uchun siz oilaviy guruhni yaratishingiz kerak, shundan so'ng funktsiya faollashadi."} />
        <Myimg img={Img7} />
        <Myimg img={Img8} />
        <Title3 title3={"TV-Box qutilarida ota-ona nazorati"} />
        <Paragraph text={"Multimedia pristavkalari oddiy televizorni Smart-ga aylantirishga imkon beradi, bu erda, qoida tariqasida, haqiqiy Smart TV-dagi kabi boshqaruv funktsiyalarining ko'pligi yo'q. Biroq, bu erda ham asosiy darajada bo'lsa ham amalga oshiriladi. Odatda, bunday Sozlamalar 'tizim sozlamalari'bo'limida yashiringan."} />
        <Paragraph text={"Ko'pgina hollarda, ular 'ota – ona sozlamalari'deb nomlanadi. Ularning yordami bilan voyaga etmagan bolalarning harakatlari ustidan nazoratni o'rnatish, shuningdek parolni o'rnatish orqali ularning istalmagan tarkibga kirishini cheklash mumkin."} />
        <Title3 title3={"IPTV video oqimi"} />
        <Paragraph text={"Rossiyaning ko'plab telekommunikatsiya provayderlari televizion kanallar paketlarini, shu jumladan 'kattalar uchun'toifasini ko'rish xizmatini taqdim etadilar. Ota-ona nazorati funktsiyasini faollashtirish xizmat ko'rsatuvchi provayder tomonidan taqdim etilgan pristavka sozlamalarida amalga oshiriladi. Bu parolni alohida kanallar yoki guruhlarga qo'yishdan iborat. MTS 'kattalar' kanallarini ijro etishga urinayotganda shaxsiy kodni kiritishni talab qiladi, Rostelekom operatori har qanday kanallarga individual parollarni o'rnatishga imkon beradi. Belorusiyaning Beltelekom uyali aloqa xizmati provayderi Zala paketiga kiritilgan barcha kiruvchi kanallarga bitta PIN-kodni o'rnatishga imkon beradi. Odatiy bo'lib, bitta belgi kodi amal qiladi, uni tanlash oson, ammo uni yanada murakkabga o'zgartirish mumkin. "} />
        <Myimg img={Img9} />
        <Paragraph text={"Yuklab olinadigan IPTV ro'yxatlariga kelsak, bu erda yagona imkoniyat, agar mavjud bo'lsa, keraksiz kanallarni ro'yxatdan olib tashlashdir."} />
        <Title3 title3={"Routerda boshqarish"} />
        <Paragraph text={"Kam odam biladi, lekin siz istalmagan manbalarga kirishni uy yo'riqchisi darajasida cheklashingiz mumkin. Ha, usul ahamiyatsiz emas, ammo bu erda hech qanday murakkab narsa yo'q, bundan tashqari siz maxsus dasturlardan foydalanish zaruriyatidan xalos bo'lasiz – axir, marshrutizatorlarning barcha modellari blokirovka funktsiyasi mavjud bo'lgan dasturiy ta'minot bilan jihozlangan."} />
        <Myimg img={Img10} />
        <Paragraph text={"Va yana bir muhim afzallik: bunday qulflarning ta'siri yo'riqchiga kabel yoki havo orqali ulangan barcha qurilmalarga tarqaladi. To'g'ri, shu bilan birga, bunday tarkib kattalar uchun mavjud bo'lmaydi, ammo bolalar uchun siz nima qila olmaysiz…"} />
        <Paragraph text={"Biroq, yo'riqnoma ilg'or modellarida bunday cheklovlar belgilangan vaqt oralig'i yoki boshqa shartlar yordamida kiritilishi mumkin, bu esa ushbu usulning qiymati va qo'llanilishini oshiradi. Usulning asosiy kamchiligi uning ko'rinadigan murakkabligidir, ammo buning uchun siz boshqaruv dasturining veb-interfeysiga o'tishingiz kerak. Buni qanday qilish kerak, odatda foydalanuvchi ko'rsatmalarida, shuningdek ota-ona nazoratini o'rnatish usulida batafsil tavsiflanadi."} />
        <Myimg img={Img11} />
        <Paragraph text={"Va to'g'ridan-to'g'ri turli markadagi aqlli televizorlarda ushbu funktsiya qanday ishlaydi? Afsuski, bu erda ota-ona nazorati funktsiyasini amalga oshirishda yagona yondashuv kuzatilmaydi, shuning uchun biz Rossiyada mashhur brendlarning televizion qabul qiluvchilarida faollashtirish tartibini tavsiflash zarur deb hisoblaymiz."} />
        <Myimg img={Img12} />
        <Title3 title3={"LG TV-da ota-ona nazoratini qanday o'rnatish kerak"} />
        <div className='ektromismdiv'>
          <ul>
            <li>Ushbu brendning aqlli televizor modellarining aksariyati tarkibni uch darajada blokirovka qilishga imkon beradi: </li>
            <li><b>•	</b>* yoshga qarab. Ma'lumki, teleoperatorlar, mavjud qonunchilikka muvofiq, barcha teleko'rsatuvlarni yosh toifalariga bo'lishlari kerak. Ehtimol, ular hamma narsada va har doim ham unga rioya qilmaydilar, ammo "bola bo'lmagan" tarkibga kelsak, u deyarli har doim etiketlanadi va LG televizorlari ushbu yosh chegarasini taniy olishadi (masalan, biz 18+toifadagi filmlarni keltiramiz). Bunday filmlarni faqat ota-ona parolini kiritgandan so'ng tomosha qilishingiz mumkin;</li>
            <li><b>•	</b>* kanal darajasida. Bu erda hamma narsa aniq-agar kanal kiruvchi tarkib bo'lsa, ota-onalar uni blokirovka qilishlari mumkin va kodni kiritmasdan rasm va ovoz uzatilmaydi;</li>
            <li>* ilova darajasida. Bu erda imkoniyatlar juda katta, shuning uchun ota-ona kodini kiritish imkoniyati bo'lishi kerak. Eng ko'p bloklanadigan dasturlar-onlayn kazinolar, istalmagan mavzular saytlari, siz hatto ijtimoiy tarmoqlarga tashrif buyurishni bloklashingiz mumkin. Bloklash parolni o'rnatish orqali amalga oshiriladi. </li>
          </ul>
        </div>
        <Myimg img={Img13} />
        <Title3 title3={"Endi LG Smart TV-da ota-ona nazoratini qanday sozlashni ko'rib chiqing:"} />
        <div className='ektromismdiv'>
          <ul>
            <li><b>•	</b>masofadan boshqarish pultidagi "uy" tugmachasini bosing (u uy shaklida piktogramma bilan tasvirlangan);</li>
            <li><b>•</b>	televizor ekranida asosiy menyu paydo bo'ladi, uning ko'rinishi va tarkibi turli xil modellar uchun farq qilishi mumkin, ammo umuman olganda, funktsionallik har qanday darajadagi foydalanuvchilar, shu jumladan yangi boshlanuvchilar uchun tushunarli;</li>
            <li><b>•</b> biz "Sozlamalar" bandiga qiziqamiz, u ham standart belgiga ega-tishli tasvir;</li>
            <li><b>•</b>endi "xavfsizlik" kichik bandini tanlang, natijada ekranda amalga oshirish imkoniyati bo'lgan tegishli oyna paydo bo'ladi блокировок;</li>
            <Myimg img={Img14} />
            <li><b>•</b>	siz faqat xavfsizlik darajasini belgilashingiz, kalitni "yoqish" holatiga o'tkazish orqali rejimni faollashtirishingiz kerak;</li>
            <Myimg img={Img15} />

          </ul>
        </div>
        <Paragraph text={"yakuniy tavsiya etilgan harakat oddiy standart parolni almashtirishdir 'odatda to'rtta nolik yoki '1234' kombinatsiyasi) murakkabroq."} />
        <Title3 title3={"Samsung televizorlarida ota-ona nazoratini faollashtirish"} />

        <div className="ektromismdiv">
          <ul>
            <li>Samsung Smart-TV-da ota-ona nazorati funksiyasini yoqish uchun siz quyidagi oddiy ko'rsatmalarga amal qilishingiz kerak:</li>
            <li><b>•	</b>harakat tugmalaridan foydalanib, "raqamli menyu" yorlig'ini tanlang, Enter tugmasini bosib tasdiqlang;</li>
            <li><b>•	</b>"ota-ona qulfi" bo'limini tanlang va masofadan boshqarish pultidagi Enter tugmasini yana bosing;</li>
            <Myimg img={Img16} />
            <li><b>•	</b>endi siz to'rtta raqamdan iborat o'zingizning PIN-kodingizni o'rnatishingiz kerak (mumkin, lekin zavod kodini qoldirish tavsiya etilmaydi – 0000) Enter tugmasi bilan o'z harakatlarimizni yana tasdiqlang;</li>
            <li><b>•	</b>yuqoriga / pastga tugmalaridan foydalanib, kiruvchi tarkib uchun yosh chegarasini belgilang, Enter tugmasini bosing.</li>
            <li><b>•	</b>Samsung televizorlaridagi parolni keyinroq o'zgartirish mumkin. Bu quyidagicha amalga oshiriladi:</li>
            <li><b>•	</b>masofadan boshqarish pultidan televizorning asosiy menyusiga o'ting;</li>
            <Myimg img={Img17} />
            <li><b>•	</b>«Цифровое меню»bo'limi tanlanadi;</li>
            <Myimg img={Img18} />
            <li><b>•	</b>"o'rnatish" kichik bandiga Enter tugmasini bosing;</li>
            <Myimg img={Img19} />
            <li><b>•	</b>"PIN-kodni o'zgartirish" qatoriga o'ting va Enter tugmasini bosing;</li>
            <Myimg img={Img20} />
            <li><b>•	</b>parolni o'zgartirish uchun avval eskisini ko'rsatishingiz kerak, so'ngra yangisini ikki marta kiriting, har safar Enter tugmasini bosib tasdiqlang;
              parol muvaffaqiyatli o'zgartirilganligi to'g'risida xabar paydo bo'lganda, OK ni bosing va keyin "chiqish"bandini tanlang.
            </li>
            <Title3 title3={"Philips televizoriga parolni qanday qo'yish kerak"} />
            <li><b>•	</b>masofadan boshqarish pultidagi tegishli tugma yordamida televizor menyusiga o'ting;выбираем вкладку «Настройки»;</li>
            <li><b>•	</b>"bolalarni blokirovka qilish"kichik bandida to'xtab, ichki menyu bo'ylab harakatlaning;</li>
            <Myimg img={Img21} />
            <Paragraph text={"'ko'rishni cheklash'opsiyasini bosing. Bu erda siz kiruvchi kontent ilovalariga kirishni bloklash imkoniyatiga egasiz. Siz yosh chegarasini belgilash orqali Google Play-dan ilovalarni yuklab olish chegarasini kiritishingiz mumkin, buning natijasida do'kon darajasida kiritilgan mezonga mos keladigan dasturlar faol bo'lishni to'xtatadi, ya'ni ularni yuklab olish imkonsiz bo'ladi. Ota – ona nazorati uchun standart parol '8888'. Biz uni o'zingizning variantingizga o'zgartirishni qat'iy tavsiya qilamiz."} />
            <Title3 title3={"Televizorni qanday qulfdan chiqarish mumkin"} />
            <Paragraph text={"Mavjud holatlar tufayli ota-ona parolining funktsiyasi ahamiyatsiz bo'lib qoladigan holatlar tez-tez uchraydi, ammo siz parolni xavfsiz unutdingiz. Bunday hollarda parolni qulflash xususiyatini qanday o'chirib qo'yish mumkin? "} />
            <Myimg img={Img22} />
            <Title3 title3={"LG"} />
            <li><b>•	</b>masofadan boshqarish pultidagi "uy" tugmachasini bosing (u uy shaklida piktogramma bilan tasvirlangan);</li>
            <li><b>•	</b>masofadan boshqarish pultidagi "uy" tugmachasini bosing (u uy shaklida piktogramma bilan tasvirlangan);</li>
            <li><b>•	</b>televizor ekranida asosiy menyu paydo bo'ladi, uning ko'rinishi va tarkibi turli modellar uchun farq qilishi mumkin, ammo umuman olganda, funktsionallik har qanday darajadagi foydalanuvchilar, shu jumladan yangi boshlanuvchilar uchun tushunarli;</li>
            <li><b>•	</b>biz "Sozlamalar" bandiga qiziqamiz, u ham standart belgiga ega-tishli tasvir;</li>
            <li><b>•	</b>endi "xavfsizlik" kichik bandini tanlang, natijada ekranda amalga oshirish imkoniyati bo'lgan tegishli oyna paydo bo'ladi блокировок;</li>
            <Myimg img={Img23} />
          </ul>
        </div>
        <Paragraph text={"'PIN-kodni tiklash/o'zgartirish' bandini bosishingiz shart emas. Yuqoriga o'qni ikki marta bosish orqali ishlatishingiz kerak, so'ngra pastga o'qni bosing va yana yuqoriga ko'taring. Natijada, oyna yangilanadi va 'asosiy PIN-kodni kiriting' yozuvi paydo bo'ladi. Siz '0313' qiymatini kiritishingiz kerak va shundan keyingina yuqorida aytib o'tilganidek, ota-ona kodini o'zgartirish mumkin."} />
        <Title3 title3={"Samsung"} />
        <Paragraph text={"Ushbu Janubiy Koreya brendining televizorlarida parolni zavod holatiga qaytarish ancha oson:"} />
        <Paragraph text={"Agar siz parolni unutgan bo'lsangiz, uni zavod holatiga qaytarishingiz mumkin. Buni faqat masofadan boshqarish tugmachalari yordamida (agar sizda oddiy televizor bo'lsa) yoki Smart-TV uchun interaktiv masofadan boshqarish pulti yordamida amalga oshirish mumkin: "} />
        
        
        <Myimg img={Img24} />
        <Title3 title3={"Philips"} />
        <Paragraph text={"Philips markali televizorlarda ota-ona nazoratini o'chirish uchun, agar siz o'zingizning parolingizni eslamasangiz, televizorni qayta o'rnatishingiz (qayta tiklashingiz) kerak, shundan so'ng siz kiritgan barcha Sozlamalar, shu jumladan parol nolga tushiriladi. Siz bunday tiklashni 'umumiy Sozlamalar' menyusi orqali amalga oshirishingiz mumkin, bu erda 'televizorni qayta o'rnatish'deb nomlangan variant mavjud. "} />
        
        
        <Myimg img={Img25} />
        <Myimg img={Img26} />
        <Paragraph text={"Agar siz rejimni faollashtirishda qiyinchiliklarga duch kelsangiz, televizor markasi va modelini ko'rsatadigan sharhlarda muammoingizni tasvirlab bering (ba'zida hatto dasturiy ta'minot versiyasi ham talab qilinadi – dasturiy ta'minot tez-tez emas, lekin ular o'zgaradi, ayniqsa sotib olish talabi yuqori bo'lgan juda muvaffaqiyatli modellar uchun)."}/>



      </div>
      <Footer />
    </div>
  )
}

export default Tv