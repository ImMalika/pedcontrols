import React from 'react'
import "./terrorism.scss";
import { Nav } from "../../../../components/navbar/nav";
import navData from "../../../../components/data/data.json";
import Footer from "../../../../components/footer/footer";
import Paragraph from '../../../../components/paragraph/paragraph';
import Title from '../../../../components/title/title';
import Title2 from '../../../../components/title2/title2';
import Link from '../../../../components/links/links';
// 
import Img from "../../../../media/youngsmedia/terrorismimg1.jpg"



const Terrorism = () => {
    return (
        <div className="terrorism">
            <Nav dataLink={navData.navHome} />
            <div className='main'>
                <Title titleName={"Terrorizm  "}/>
                <Paragraph text={"Terrorizm — siyosiy, diniy, mafkuraviy va boshqa maqsadlarga erishish uchun shaxsning hayoti, sog'lig'iga xavf tug'diruvchi, mol-mulk va boshqa moddiy ob'ektlarning yo'q qilinishi (shikastlantirilishi) xavfini keltirib chiqaruvchi hamda davlatni, xalqaro tashkilotni, jismoniy yoki yuridik shaxsni biron-bir harakatlar sodir etishga yoki sodir etishdan tiyilishga majbur qilishga, xalqaro munosabatlarni murakkablashtirishga, davlatning suverenitetini, hududiy yaxlitligini buzishga, xavfsizligiga putur yetkazishga, qurolli mojarolar chiqarishni ko'zlab ig'vogarliklar qilishga, aholini qo'rqitishga, ijtimoiy-siyosiy vaziyatni beqarorlashtirishga qaratilgan, O'zbekiston Respublikasining Jinoyat kodeksida javobgarlik nazarda tutilgan zo'rlik, zo'rlik ishlatish bilan qo'rqitish yoki boshqa jinoiy qilmishlar.*"}/>
                <Paragraph text={"“Terrorizmga qarshi kurash to‘g‘risida”gi O‘zbekiston Respublikasining O‘RQ- 167-II-son qonuni "}/>
                <Link link={"https://lex.uz/docs/-29526"}/>
                <div className='mainimg'><img src={Img} alt="" /></div><br />
                <Paragraph text={"Hozirgi davrdagi jaholat urug'ini sochayotgan soxta ekstremistik g'oyalarga ma'rifiy jihatdan kurashda islom dinimiz tarixiy taraqqiyotida ham shaklan boshqacharoq ko'rinishda bo'lsa-da, lekin mazmunan aynan shunday ekstremistik g'oyalar oldin ham bo'lganiga guvoh bo'lamiz. Dinimiz tarixiga nazar solar ekanmiz, yana shunga amin bo'lamizki, sog'lom idrok, sog'lom haqiqat va g'oyalar soxta g'oyalar ustidan hamisha g'alaba qozonib kelgan. Islom dinimiz rivojiga buyuk hissa qo'shgan bobokalonimiz Abu Mansur Moturidiyning ilmiy merosida soxta g'oyalarga qarshi ish olib borgan kurashini ko'rish mumkin. U kishining «Kitob at-tavhid» asarida soxta ta'limotlarga ergashishni oldini olishda ishonchli dalillardan keltirib, bu yo'ldagi barcha xatoliklar sababini aniq ko'rsatib berganiga guvoh bo'lamiz: «Taassub, bu ko'r-ko'rona taqlid bo'lib, u juda keng tarqalgan illatdir, ya'ni bunda juda ko'pchilik biron-bir ma'naviy yoki diniy yo'lboshchiga, uning fikrlari mazmu n-mohiyatini tushunmagan holda qo'shilishga yengib bo'lmas moyillik bildiradi. Mana shu sabab natijasi o'larok, har bir firqa va har bir yo'nalish shu paytga qadar o'z tarafdorlariga ega bo'lib kelmoqda. Bu muxlislar qachondir qabul qilingan soxta ta'limotga sadoqatda qat'iylik namoyish etmoqdalar va yana o'zlarini haqiqatning yagona egalari hisoblamoqdalar», — degan fikrlari bugungi diniy-ekstremistik guruhlarga aytilgandek seziladi. Moturidiy bobomiz o'sha davrdagi islom ichidagi soxta oqim va firqalarning haqiqiy mohiyatini ochib bergan. Bunday oqimlar o'sha davrda ham ko'p bo'lgan. Shunga qaramasdan ezgulik bilan yovuzlik jamiyatda hamisha yonma-yon kurashib, bu kurashda ezgulik g'alaba qilib kelgan."}/><br/>
                <Paragraph text={"Shu ma'noda bugungi jaholat yo'liga kirgan, dinni niqob qilib olgan halqaro terrorizmga qarshi kurashdagi ma'rifiy yo'llaridan biri o'zbek xalqining milliy va islom diniy qadriyatlari, ularga tayanib, yosh avlodni Vatanga muhabbat, ajdodlarga sadoqat, zo'ravonlikka nafrat ruhida tarbiyalovchi, ularni ezgulik va bunyodkorlikka da'vat etuvchi bitmas-tuganmas kuch-qudrat manbai sifatida qaralishi lozim. Ular nafaqat mafkuraviy bo'shliqning yuzaga kelishiga, balki ming yillardan beri halol mehnati va olamshumul kashfiyotlari bilan jahon taraqqiyotiga salmoqli hissa qo'shib kelayotgan o'zbek xalqining harakterli xususiyati (mentaliteti) ga tamomila zid bo'lgan terrorchilik g'oyalarining kirib kelishi va yoshlar ongini zaharlashga qarshi qaratilgan mustahkam qalqon bo'lib hizmat qilishi mumkin. "}/><br/>
                <Paragraph text={"Bugungi kunda islom dinining qanchalik insonparvar, mehr-shafqatga chaqiradigan, taraqqiyparvar va ma'rifatparvar dinligini yoshlarimiz anglab yetgandagina turli islom niqobidagi ekstremistik jaholat yo'liga kirgan g'oyaviy kuchlarga nafrat bilan qaraydi, shuningdek, biz imom-xatiblar ham vatandoshlarimizga va yoshlarimizga asl islomning mohiyati va mazmunini asl holatda anglata olgandagina to'la maqsadimizga erishamiz."}/><br/><br/>
                <Link link={"Muslim.uz (http://old.muslim.uz/index.php/jaholatga-qarshi-marifat/maqola/item/34322)"}/>
            </div>
            <Footer />

        </div>
    )
}

export default Terrorism