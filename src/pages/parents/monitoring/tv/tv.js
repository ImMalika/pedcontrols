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
        <Myimg img={Img1}/>
        <Paragraph text={"Siz yo'qligingizda bolalar auditoriyasini bunday dasturlarni tomosha qilishdan himoya qilish mumkinmi? Muammo ko'rinadigan darajada oddiy emas, chunki ota-ona nazorati funktsiyasi hamma joyda turli yo'llar bilan amalga oshiriladi va bu ishlatilgan televizor dasturining markasi, modeli va hatto versiyasiga va taqiqlangan tarkibga ega dasturga bog'liq."} />
        <Paragraph text={"Keling, ushbu muammoning barcha jihatlarini ko'rib chiqishga harakat qilaylik. Biz darhol tan olamiz – siz bizning sharhimizga faqat eng keng tarqalgan xizmatlar va televizion brendlarni kiritdingiz. Ushbu joydagi hamma narsani qamrab olishning iloji yo'q, shuning uchun agar siz blokirovka bilan shug'ullana olmagan bo'lsangiz, iloji boricha batafsilroq tafsilotlarni ko'rsatib, sharhlarda ishlamagan narsalarni yozing."} />
        <Title3 title3={"Smart televizorlarda bola bo'lmagan video namoyishini qanday bloklash mumkin "} />
        <Paragraph text={"'Aqlli' televizorlar odatdagidan farq qiladi, chunki bu erda har qanday dasturni o'zingiz o'rnatishga ruxsat beriladi va ularda bolalar yoshiga mos bo'lmagan filmlar va dasturlar bo'lishi mumkin. Biroq, bu muammoning echimi bor – bunday televizorlarning aksariyati YouTube-dan onlayn kinoteatrlar va oqim xizmatlariga qadar o'rnatilgan har qanday dasturga qulf o'rnatishga imkon beradi. Albatta, bunday cheklovlar har qanday kanallarda va hatto aniq teleko'rsatuvlarda ham qo'llanilishi mumkin. Ammo bu blokirovka hamma joyda bir xil tarzda amalga oshirilmaydi, shuning uchun bizning vazifamiz ota – ona nazorati funktsiyasini faollashtirishning eng mashhur usullari haqida gapirishdir."} />
        <Myimg img={Img2}/>

        <Title3 title3={"O'yin konsollarida ota-ona nazoratini qanday yoqish mumkin"} />
        <Paragraph text={"Nafaqat video o'yinlarni boshqarish uchun ishlatiladigan o'yin pristavkalari bolalarning harakatlarini kuzatib borish uchun o'z boshqaruv tizimidan foydalanadi."} />
        <Myimg img={Img3}/>

        <div className='ektromismdiv'>
          <ul>
            <li><b>•	</b>Xususan, Xbox One konsollarida bunday tizim quyidagilarga imkon beradi:</li>
            <li><b>•	</b>Giyohvandlik paydo bo'lishining oldini olish uchun prefiksdan foydalanish uchun vaqt chegaralarini kiriting;</li>
          </ul>
        </div>
        <Myimg img={Img4}/>

        <div className='ektromismdiv'>
          <ul>
            <li><b>•	</b>Internet-do'konlarda tranzaktsiyalarni blokirovka qilish;</li>
            <Myimg img={Img5}/>

            <li><b>•	</b> voyaga etmaganlar tomonidan istalmagan tarkibni ko'rishni bloklash, shu jumladan veb-saytlarga kirish, 18+toifadagi ilovalar va o'yinlardan foydalanish.</li>
          </ul>
        </div>




      </div>
      <Footer />
    </div>
  )
}

export default Tv