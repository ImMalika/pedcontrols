import React from 'react'
import "./parentsInternet.scss";
import { Nav } from "../../../../components/navbar/nav";
import navData from "../../../../components/data/data.json";
import Footer from "../../../../components/footer/footer";
import Paragraph from '../../../../components/paragraph/paragraph';
import Title from '../../../../components/title/title';
import Title2 from '../../../../components/title2/title2';
import Link from '../../../../components/links/links';
import Title3 from '../../../../components/title3/title3';
import Myimg from '../../../../components/myimg/myimg';


const ParentsInternet = () => {
  return (
    <div className="parentsInternet">
      <Nav dataLink={navData.navParents} />
      <div className='main'>
        <Title titleName={"Internet nazorati"} />
        <Title2 titlename={"iOS’da"} />
        <Paragraph text={"iPhone va iPad’da ishlovchi iOS tizimi tashqi aralashuvlardan himoya qiladi, ammo gadjet ichida ma’lum dasturlarni o‘rnatish va yoshga mos kelmaydigan kontentni ko‘rishni cheklash mumkin. Shuningdek, ekran vaqtini, musiqa hajmini cheklang, AppStore va onlayn-do'konlarda xaridlarni taqiqlang. Ota-onalar blokni olib tashlashni so'rab xabar oladi. Eng so'nggi versiyalarda GPS kuzatuvi va batareya darajasini nazorat qilish oldindan o'rnatilgan Locator ilovasi orqali mavjud."} /><br />
        <Title2 titlename={"Androidda"} />
        <Paragraph text={"Android sizga ko'proq tashqi boshqaruvni beradi. Raqobatchilar singari, Play Marketdan dasturlarni yuklab olish va o'rnatishni cheklash, shuningdek, yoshga qarab kontent filtrlarini o'rnatish mumkin. Ota-onalar uchun aniq bir ortiqcha - bu smartfonning geolokatsiyasini o'rnatilgan kuzatish. Bundan tashqari, agar foydalanuvchi 13 yoshdan oshgan bo'lsa, Google hisobini o'zingiz yaratishingiz mumkin. Aks holda, hisob yaratishda siz ota-onalardan birining pochta va telefon raqamini ko'rsatishingiz kerak. Va kiruvchi xabarga ijobiy javob berib, harakatlaringizni tasdiqlang. Endi bola hisobidagi barcha harakatlar ota-onaga xabar qilinadi."} />
        <Title2 titlename={"Siz yoningizda bo'lmaganingizda ham farzandlaringiz xavfsiz."} />
        <div className='ektromismdiv'>
          <ul>
            <li><b>• </b>Nomaqbul kontentga kirishni bloklash</li>
            <li><b>• </b>Qurilmadan foydalanish vaqtini cheklang</li>
            <li><b>• </b>Bolalar uchun GPS joylashuvni kuzatish</li>
          </ul>
        </div>
        <Title2 titlename={"Veb-sayt va ilovalar filtrlari"} />
        <Title3 title3={"Kattalar saytlariga kirishni bloklash va bola faqat sizning ruxsatingiz bilan tashrif buyurishi mumkin bo'lgan saytlar va ilovalar ro'yxatini tuzish"} />
        <br />
        <div className='ektromismdiv'>
          <ul>
            <li><b>• </b>Qimor oʻyinlari, zoʻravonlik va qurollar kabi kiruvchi ilovalar va veb-saytlarga kirishni bloklash</li>
            <li><b>• </b>Ilovadan foydalanish vaqtini boshqaring va farzandingiz ochishi uchun ruxsatingiz kerak boʻlgan ilovalar roʻyxatini tuzing</li>
            <li><b>• </b>Bolaning sahifasidagi nashrlar va uning Vkontakte do'stlari ro'yxatidagi o'zgarishlar haqida hisobotlar</li>
          </ul>
        </div>
        <Title2 titlename={"YouTubeda xavfsiz qidiruv"} />
        <Title3 title3={"YouTube qidiruv tarixini tekshiring va bolalarni kattalar kontentidan himoya qiling."} />
        <br />
        <div className='ektromismdiv'>
          <ul>
            <li><b>• </b>YouTube qidiruv tarixini ko‘ring - Farzandingizning onlayn xatti-harakatlari xavfsiz ekanligiga ishonch hosil qiling</li>
            <li><b>• </b>Spirtli ichimliklar, chekish va qimor o'yinlari bilan bog'liq qidiruv so'rovlarini bloklash</li>
          </ul>
        </div>

        <Title2 titlename={"Kaspersky Safe Kids-ni sozlash oson"}/>
        <div className='ektromismdiv'>
          <ul>
              <li><b>1.	</b>Farzandingiz qurilmasiga ilovani yuklab olish uchun kas.pr/kids saytiga o‘ting va yuklab olish tugmasini bosing.
              O'rnatishdan so'ng "Bola" rejimini tanlang.
              </li>
              <li><b>2.	</b>O'rnatish vaqtida My Kaspersky hisob qaydnomangizni belgilang yoki yangisini yarating. Barcha bolalaringizni himoya qilish uchun sizga faqat bitta hisob kerak bo'ladi.</li>
              <li><b>3.	</b>Kaspersky Safe Kids-ni mobil ilovalar do'konidan yuklab oling.
              So'ralganda Ota-ona rejimini tanlang. Ushbu rejimda siz istalgan vaqtda sozlamalarni o'zgartirishingiz mumkin.
              </li>
          </ul>
          </div><br/>
          <Title3 title3={"Internetga qaramlik"}/>
          <Paragraph text={"Bola internetga ulansa, u doimiy nazoratga muhtoj. Bolada yomon odatlar paydo bo'lmasligini ta'minlash kerak: juda ko'p o'ynash va butun kunni ekran ortida o'tkazish xavfsiz emas."}/><br/>
          <Title3 title3={"Ba'zi saytlar bolalar uchun mo'ljallanmagan"}/>
          <Paragraph text={"Internetda kattalar uchun juda ko'p kontent mavjud. Internet hamma uchun ochiq va bola noto'g'ri saytga osongina qoqilib ketishi mumkin."}/>
          <br/>
          <br/>
          <Title titleName={"Ko'p so'raladigan savollar"}/>
          <Title3 title3={"Android ilovasi juda ko'p ruxsatlarni so'raydi. Ular haqiqatan ham kerakmi?"}/>
          <Paragraph text={"Ilova juda ko'p ruxsat so'rayotgandek tuyulishi mumkin, ammo buning sabablari bor. Bu ruxsatlarning barchasi bolangizni iloji boricha samarali himoya qilish va sizdan boshqa hech kim Kaspersky Safe Kids dasturini oʻchirib tashlay olmasligini taʼminlash uchun kerak."}/><br/>
          <Title3 title3={"Farzandimning mobil qurilmasiga Kaspersky Safe Kids dasturini o'rnatgandan so'ng, ba'zi ilovalar yo'qoldi yoki bloklandi. Nega?"}/>
          <Paragraph text={"Bolaning profilini yaratishda siz uning yoshini belgilaysiz. O'rnatishdan so'ng Kaspersky Safe Kids darhol himoya qoidalarini faollashtiradi, ularning ba'zilari bolaning yoshiga asoslanadi. Shunday qilib, ko'rsatilgan yoshdagi bola uchun nomaqbul deb hisoblangan barcha ilovalar yashiriladi. Bundan tashqari, Android qurilmalarida Kaspersky Safe Kids ba'zi ilovalar toifalari uchun standart qoidalarni qo'llaydi. Misol uchun, onlayn xaridlar va ijtimoiy tarmoqlar 12 yoshgacha bo'lgan bolalarga ko'rinmaydi, FTP mijozlari, fayl almashish ilovalari va tarmoq xotiralari esa 6 yoshgacha bo'lgan bolalar uchun yashirin bo'ladi."}/>
          <Paragraph text={"Siz ushbu sozlamalarni mobil qurilmangizdagi Kaspersky Safe Kids ilovasidagi Ilovalar ko‘rinishida yoki My Kaspersky hisob qaydnomangizda o‘zgartirishingiz mumkin."}/><br/>
          <Title3 title3={"Agar uning mobil qurilmasi qulflangan bo'lsa, bola qo'ng'iroq qilish va qo'ng'iroqlarni qabul qila oladimi?"}/>
          <br/>
          <Paragraph text={"Ha, bolangiz mobil qurilmadan foydalanishning kunlik limitiga yetib, bloklangan bo'lsa ham, siz telefon orqali aloqada bo'lishingiz mumkin bo'ladi."}/>
          <br/>
          <Paragraph text={"Bundan tashqari, siz o'rnatilgan cheklovlardan qat'i nazar, Android smartfoni yoki planshetidagi qaysi ilovalar bola uchun mavjud bo'lishini belgilashingiz mumkin."}/>
          <br/>
          <Title3 title3={"Farzandimning qurilma faoliyati haqidagi hisobotlarni qayerda ko‘rishim mumkin?"}/>
          <br/>
          <Paragraph text={"Farzandingiz qurilmalariga Kaspersky Safe Kids dasturini o'rnatganingizda, My Kaspersky hisob qaydnomasini yaratishingiz kerak bo'ladi. Siz istalgan vaqtda hisobingizga kirishingiz va farzandingizning qurilma faoliyati haqida batafsil hisobotlarni koʻrishingiz, shuningdek sozlamalar va siyosatlarga oʻzgartirishlar kiritishingiz mumkin. Bundan tashqari, siz mobil qurilmangizdagi ilovada bolaning xaritadagi joylashuvini ko'rishingiz mumkin bo'ladi."}/><br/>
          <Title2 titlename={"Kaspersky Safe Kids-dan foydalanish uchun qanday tizim talablari mavjud?"}/>
          <Title3 title3={"Barcha qurilmalar uchun"}/>
          <Paragraph text={"Internetga ulanish"}/>
          <Title3 title3={"Windows kompyuterlari va noutbuklari"}/>
          <div className='ektromismdiv'>
          <ul>
            <li><b>• </b>Operatsion tizim: Windows 11 Home / Professional / Education; Windows 10 </li>
            <li><b>• </b>Home / Professional / Ta'lim; Windows 8 va 8.1 / Professional / Enterprise / 8.1 </li>
            <li><b>• </b>Yangilash; Windows 7 Starter/Home Basic/Home Premium/Professional/Ultimate </li>
            <li><b>• </b>- SP1 KB4474419 va KB4490628 o'rnatilgan va undan yuqori</li>
            <li><b>• </b>Disk maydoni: qattiq diskda 200 MB bo'sh joy</li>
            <li><b>• </b>Protsessor: 1 GHz</li>
            <li><b>• </b>operativ xotira: 1 GB (32 bitli tizim uchun) yoki 2 GB ( 64 bitli tizim uchun)</li>
            <li><b>• </b>Minimal ekran o'lchamlari: 1024 x 768</li>
          </ul>
        </div>
        <Title3 title3={"Dasturiy ta'minot"}/>
        <Paragraph text={"Microsoft® Internet Explorer® 11 va undan yuqori"}/>
        <Paragraph text={"Microsoft .NET Framework 4 va undan yuqori"}/>
        <Title3 title3={"Android smartfon va planshetlari¹"}/>
        <Paragraph text={"Operatsion tizim: Android 8 - 13"}/>
        <Paragraph text={"Minimal ekran o'lchamlari: 320 x 480"}/>
        <Title3 title3={"iPhone va iPad"}/>
        <Paragraph text={"operatsion tizimi: iOS 15 - 16"}/>
        <Title3 title3={"Mac® kompyuterlari"}/>
        <Paragraph text={"Operatsion tizim: macOS 10.15 - 13"}/>
        <Paragraph text={"Disk maydoni: 650 MB bo'sh qattiq disk maydoni"}/>
        <Paragraph text={"Tasodifiy kirish xotirasi (RAM): 2 GB"}/>
        
        
        


      </div>
      <Footer />

    </div>
  )
}

export default ParentsInternet