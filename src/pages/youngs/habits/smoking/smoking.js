import React from 'react'
import "./smoking.scss";
import { Nav } from "../../../../components/navbar/nav";
import navData from "../../../../components/data/data.json";
import Footer from "../../../../components/footer/footer";
import Paragraph from '../../../../components/paragraph/paragraph';
import Title from '../../../../components/title/title';
import Link from '../../../../components/links/links';
import Myimg from "../../../../components/myimg/myimg";
import Img from "../../../../media/youngsmedia/smoking.jpg"
import Img2 from "../../../../media/youngsmedia/smoking2.jpg"

const Smoking = () => {
    return (
        <div className='smoking'>
            <Nav dataLink={navData.navYoungs} />
            <div className='smokingWrap'>
            <Title titleName={"Chekish"}/>
            <Myimg img={Img2}/>
            <Paragraph text={"Chekish – inson salomatligiga jiddiy putur yetkazadigan zararli odatlardan biridir. Chekish — ayrim tutovchi oʻsimlik mahsulotlari (tamaki, afʼyun va boshqalar) tutunidan nafas olish. Tamaki chekish keng tarqalgan zararli odatlardan boʻlib, chekuvchi va uning atrofidagi odamlar sogʻligʻiga yomon taʼsir etadi; yuraktomir, meʼda, oʻpka kasalliklari rivojlanishiga olib keladi. Tamaki chekkan odam unga oʻrganib, chekmasdan turolmaydigan boʻlib qoladi. Tamaki tarkibidagi nikotin odam organizmiga kuchli taʼsir etib, u markaziy va periferik nerv sistemasiga vaqtincha qoʻzgʻatuvchi taʼsir koʻrsatadi, arterial qon bosimini oshiradi, mayda tomirlarni toraytiradi; nafasni tezlashtiradi va h.k. Nikotin bilan birga tamaki tutunidagi yonish mahsulotlari ham organizmni zaharlaydi. Tamaki tutunida kanserogen moddalar boʻladi. Tamaki tutunidan tish emali shikastlanadi, kariyes, stomatit, gingivit kabi kasalliklar vujudga keladi, u bronxlar shilliq pardasiga taʼsir etib, surunkali bronxit va oʻpka emfizemasiga, keyinchalik tuzatib boʻlmaydigan xavfli oʻsmalar rivojlanishiga olib keladi."}/><br/>
            <Paragraph text={"Surunkasiga uzoq vaqt chekish kishining tez qarishiga sabab boʻladi. Toʻqimalarning kislorod bilan yomon taʼminlanishi, mayda tomirlarning torayishi chekuvchilarning tashqi koʻrinishini oʻzgartirib yuboradi (koʻz oki va teri sargʻimtir tusga kiradi, soʻlgʻinlik paydo boʻladi). Nafas yoʻllari shilliq pardasidagi oʻzgarish tovushga taʼsir etadi (tovush boʻgʻiqlashadi, odam xirillab nafas oladi). Nikotin yoshlarga va keksalarga ancha salbiy taʼsir koʻrsatadi, chunki ularning nerv sistemasi nikotin taʼsiriga oʻta sezuvchan boʻladi. Chekish homiladorlik davrida ayniqsa, zararlidir, bunda nikotin ona qoniga oʻtib, homilani zaharlaydi."}/>
            <Paragraph text={"Chekish irsiyatni ham zaharlab, nimjon, nuqsonli farzandlar tugʻilishiga olib kelishi mumkin."}/><br/>
            <Myimg img={Img}/>

            <Paragraph text={"Chekish oʻta zararli boʻlgani uchun keyingi paytlarda qator mamlakatlarda, jumladan, Oʻzbekistonda ham Chekishga qarshi qaratilgan bir qancha tadbirlar amalga oshirilmoqda, tamaki mahsulotlarini reklama kilish va uni bolalarga sotish, jamoat joylarida va transportda chekish taqiqlanadi va h.k. Koʻpchilik chekuvchilarning chekishni tashlagandan soʻng kishi xastalanib qolishi mumkin degan gapi asossiz, chunki zahardan oʻzini tiygan kishi hech qachon zarar koʻrmagan."}/><br/>
            <Paragraph text={"Kishi har qancha kashanda boʻlsa ham Chekishdan qutulish mumkin. Buning uchun unda mustahkam iroda va chekishni tashlashga qatʼiy qaror boʻlishi kerak. Ch.ni tashlagan kishida qandaydir noxushlik, jizzakilik, uyqu buzilishi, baʼzan bosh ogʻrigʻi kabi holatlar kuzatiladi. Lekin bular keyinchalik barham topadi. Chekishni tashlamoqchi boʻlganda vrachnarkologga uchrashish va tegishli maslahatlar olish lozim."}/>
            <Link link={"https://uz.wikipedia.org/wiki/Chekish "}/>

            </div>
            <Footer />

        </div>
    )
}

export default Smoking