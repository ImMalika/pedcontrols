import React from "react";
import "./badsites.scss";
import { Link } from "react-router-dom";
import { Nav } from "../../../../components/navbar/nav";
import navData from "../../../../components/data/data.json";
import Footer from "../../../../components/footer/footer";
import Paragraph from "../../../../components/paragraph/paragraph";
import Title from "../../../../components/title/title";
import Title2 from "../../../../components/title2/title2";
// import Link from "../../../../components/links/links";
import Myimg from "../../../../components/myimg/myimg";
//
import Img1 from "../../../../media/youngsmedia/badsites1.jpg";
import Img2 from "../../../../media/youngsmedia/badsites2.jpg";
import Img3 from "../../../../media/youngsmedia/badsites3.png";
//

const Badsites = () => {
  return (
    <div className="badsites">
      <Nav dataLink={navData.navYoungs} />
      <div className="main">
        <Title titleName={"Axloqsiz saytlarning zarari"} />
        <Myimg img={Img1} />
        <Paragraph
          text={
            "O‘zbekiston Respublikasi Oliy sudini qaroriga ko‘ra, internet jahon axborot tarmog‘ining “najot,info” va “hizb-uzbekiston,info” veb-saytlari hamda “Facebook”, “Youtube” va “Telegram” axborot resurslari va ijtimoiy tarmoqlardagi quyidagi nomlardagi profil, kanal va sahifalari ekstremistik va terroristik deb topilgan."
          }
        />
        <br />
        <div className="ektromismdiv">
          <ul>
            <li>
              <b>1. </b> “Abu Saloh darsliklari”
            </li>
            <li>
              <b>2. </b> “Jannat oshiqlari”
            </li>
            <li>
              <b>3. </b> “Shom ovozi”
            </li>
            <li>
              <b>4. </b> “Tavhid va jihod”
            </li>
            <li>
              <b>5. </b> “Islam Abu Khalil”
            </li>
            <li>
              <b>6. </b> “Polvon Novqatlik”
            </li>
            <li>
              <b>7. </b> “Soxib Maxmudov”
            </li>
            <li>
              <b>8. </b> “Farruxbek Abdullaev”
            </li>
            <li>
              <b>9. </b> “Mamaraximov Abduraxim Mirkomilovich”
            </li>
            <li>
              <b>10. </b> “Muxojir Polvon”
            </li>
            <li>
              <b>11. </b> “Abu Aisha”
            </li>
            <li>
              <b>12. </b> “Turkiston”
            </li>
            <li>
              <b>13. </b> “Xurriyat info”
            </li>
            <li>
              <b>14. </b> “Najot”
            </li>
            <li>
              <b>15. </b> “al-Va’y”
            </li>
            <li>
              <b>16. </b> “Roya”
            </li>
            <li>
              <b>17. </b> “Usulul fiqh”
            </li>
            <li>
              <b>18. </b> “Mustalahul hadis”
            </li>
            <li>
              <b>19. </b> “Darslardan qisqa lavhalar”
            </li>
            <li>
              <b>20. </b> “Fiqh ahkomlari”
            </li>
            <li>
              <b>21. </b> “Tavhid darsi”
            </li>
            <li>
              <b>22. </b> “Qiyomatdan avvalgi fitnalar”
            </li>
            <li>
              <b>23. </b> “Savol va javoblar”
            </li>
            <li>
              <b>24. </b> “Foida Mp3”
            </li>
            <li>
              <b>25. </b> “Foida va qoidalar”
            </li>
            <li>
              <b>26. </b> “Tafsir darslari”
            </li>
            <li>
              <b>27. </b> “Talbisu iblis darslari”
            </li>
            <li>
              <b>28. </b> “Islomni buzuvchi amallar darslari”
            </li>
            <li>
              <b>29. </b> “Nomoz va benomozga taluqli masalalar”
            </li>
            <li>
              <b>30. </b> “Ayollar darslari silsilasi”
            </li>
            <li>
              <b>31. </b> “Aqiyda darslari”
            </li>
            <li>
              <b>32. </b> “Silsilaviy darslar va ma’ruzalar”
            </li>
            <li>
              <b>33. </b> “Muhim darslar”
            </li>
            <li>
              <b>34. </b> “Aqiydatul vositiya”
            </li>
            <li>
              <b>35. </b> “Mustalahul hadis”
            </li>
            <li>
              <b>36. </b> “Alfatx”
            </li>
            <li>
              <b>37. </b> “Talabalar uchun darslar”
            </li>
            <li>
              <b>38. </b> “AL’-FATH TV”
            </li>
            <li>
              <b>39. </b> “DA’VAT UZ”
            </li>
            <li>
              <b>40. </b> “HIDOYAT TV”
            </li>
          </ul>
        </div>
        <Paragraph
          text={
            "Yuqoridagi sayt, profil yoki telegram/yutub kanallardan ehtiyot bo‘ling. Bilmasdan a’zo bo‘lib, ertaga aybsiz aybdor bo‘lib qolmanglar."
          }
        />
        <Paragraph
          text={
            "Taqiqlangan kanal va sahifalar orasida “Abu Saloh darsliklari”, “Tavhid va Jihod”, “Ayollar darslari silsilasi”, “Jannat oshiqlari” kabi 40 ga yaqin sahifalar mavjud. To‘liq ro‘yxat bilan Adliya vazirligining rasmiy veb-sayti hamda Ochiq ma’lumotlar portali orqali tanishish mumkin."
          }
        />
        <div className="ektromismdiv">
          <ul>
            <li>
              <Link
                to={"/https://data.egov.uz/rus/data/6107d0f52a2e256d868e86d6"}
              >
                (https://data.egov.uz/rus/data/6107d0f52a2e256d868e86d6)
              </Link>
            </li>
          </ul>
        </div>
        <br />

        <Paragraph
          text={
            "Ma’lumot uchun, “Ekstremizmga qarshi kurashish to‘g‘risida”gi qonunining 11-moddasiga muvofiq, O‘zbekiston hududiga olib kirilayotgan, tayyorlanayotgan, saqlanayotgan, tarqatilayotgan va namoyish etilayotgan, ommaviy axborot vositalarida yoki telekommunikatsiya tarmoqlarida, shu jumladan, internet jahon axborot tarmog‘ida tarqatilayotgan va namoyish etilayotgan materiallar agar ekstremistik faoliyatni amalga oshirishga oshkora da’vat qiladigan yoxud shunday faoliyatni amalga oshirish zarurligini asoslab beradigan yoki oshkora oqlaydigan, tarqatish uchun mo‘ljallangan bo‘lsa qonun hujjatlarida belgilangan tartibda sud tomonidan ekstremistik materiallar deb topiladi hamda ularni olib kirish, tayyorlash, saqlash, tarqatish va namoyish etish, shuningdek ularni ommaviy axborot vositalarida yoxud telekommunikatsiya tarmoqlarida, shu jumladan, internet jahon axborot tarmog‘ida tarqatish va namoyish etish taqiqlanadi."
          }
        />
        <br />
        <Myimg img={Img2} />
        <br />
        <Paragraph
          text={
            "So‘nggi paytlarda fuqarolarimiz tomonidan pornografik foto va video mahsulotlarni targ‘ib qiluvchi internet resurslaridan foydalanish jarayonida boshqa shu kabi resurslarga avtomatik tarzda o‘tib ketish orqali «O‘zbekiston Respublikasi IIV Kiberjinoyatlarga qarshi kurash bo‘limidan bildirishnoma» sarlavhasi ostida sizib chiquvchi oynada foydalanuvchining taqiqlangan saytlarga kirgani sababli go‘yoki IIV tomonidan u 200 000 so‘m (ayrim hollarda 300 000 so‘m) miqdorida jarimaga tortilgani va «Webmoney» elektron to‘lov tizimi orqali davlat hisobiga to‘lovni amalga oshirilishi lozimligi, aks holda qurilmada saqlangan kontaktlarga foydalanuvchining pornografik foto va video mahsulotlar joylashtirilgan internet resurslaridan foydalangani haqida hodisa bayoni hamda foydalanuvchiga jarimani to‘lashi talabi bilan SMS-xabar yuborilishi haqida ma’lumot paydo bo‘lmoqda. Shu bilan birga, foydalanuvchilarning internet veb brauzeri blokirovka holatiga tushib qolmoqda, deb xabar bermoqda IIV axborot xizmati."
          }
        />
        <br />
        <Myimg img={Img3} />
        <Paragraph
          text={
            "Ichki ishlar vazirligi ushbu holatlar yuzasidan quyidagilarni ma’lum qildi:"
          }
        />
        <div className="ektromismdiv">
          <ul>
            <li><b>•	 </b>O‘zbekiston Respublikasi Ichki ishlar vazirligi tarkibida «Kiberjinoyatlarga qarshi kurash bo‘limi» nomi bilan faoliyat yurituvchi bo‘lim yoki bo‘linma mavjud emas;</li>
            <li><b>•	 </b>«Webmoney» to‘lov tizimida O‘zbekiston Respublikasi IIV tarkibiy va hududiy tuzilmalari elektron hamyonlariga ega emas.</li>
          </ul>
        </div>
        <Paragraph text={"Shunga muvofiq, fuqarolardan internet tarmog‘idan foydalanayotganda bu kabi salbiy holatlarga duch kelmasligi uchun firibgarlarning aldoviga ishonib qolmaslikka chaqirilgan."}/>
      </div>
      <Footer />
    </div>
  );
};

export default Badsites;
