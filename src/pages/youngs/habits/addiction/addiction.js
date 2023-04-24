import React from 'react'
import "./addiction.scss"
import { Nav } from "../../../../components/navbar/nav";
import navData from "../../../../components/data/data.json";
import Footer from "../../../../components/footer/footer";
import Paragraph from '../../../../components/paragraph/paragraph';
import Title from '../../../../components/title/title';
import Link from '../../../../components/links/links';
import Myimg from "../../../../components/myimg/myimg";
import Img from "../../../../media/youngsmedia/addictionimg1.jpg"
import Img2 from "../../../../media/youngsmedia/addictionimg2.jpg"

const Addiction = () => {
    return (
        <div className='addiction'>
            <Nav dataLink={navData.navHome} />
            <div className='addWrapper'>
            <Title titleName={"Giyohvandlik"} />
            <Paragraph text={" Giyohvandlik, narkomaniya, bangilik — narkotik moddalarga oʻrganib qolish, ruju qilish, aniqrogʻi tabiiy yoki sintetik zaharli moddalar (ayrim dori moddalari)ni vaqtincha yoki surunkasiga isteʼmol qilish natijasida kelib chiqadigan kasallik holati. G. organizm somatik va ruhiy holatining chuqur oʻzgarishiga sabab boʻladi va giyohvandni tanazzulga olib boradi. G.da oʻzini toʻxtatib boʻlmaydigan darajada giyohvand moddalarni isteʼmol qilish mayli paydo boʻladi, giyohvand moddaning miqdoriga nisbatan ehtiyoj, ruhiy va jismoniy bogʻliqlik ortib boradi. G. asta-sekin boshlanib, surunkali davom etadi. Giyohvand moddalar dastlab xushnudlik, dimogʻchogʻlik (qarang Eyforiya), xotirjamlik hissini uygʻotib, kayf qildiradi, keyin bora-bora bu kasallikka aylanadi. G. 2 zaylda avj olishi mumkin. Birinchi holda vrach buyurgan va bemorning ruhi hamda kayfiyatini oshirish xususiyatiga ega boʻlgan dorilarni uzoq vaqt va notoʻgʻri qabul qilish; ogʻriq, uyqusizlik va boshqa dardlardan qutilish maqsadida dori miqdori (dozasi)ni oshirib borish; darddan tuzalib doriga unchalik ehtiyoj boʻlmasa ham, uni qabul qilaverish natijasida dorining narkotik taʼsiri va miqdori orta borib, pirovardida giyohvand moddaga moyillik kuchayib, u humor qiladigan boʻlib qoladi. Ikkinchi hol ongli ravishda kayf qilish maqsadida giyohvand moddalarga oʻrganishdir."} /> <br/>
            <Myimg img={Img2}/>
            <Paragraph text={" Giyohvandlikka, odatda, irodasi kuchsiz, oʻzini tiya olmaydigan, oʻtkir sezgilarni oʻzida sinab koʻrishga qiziquvchan, ruhan zaif va oʻta xudbin kishilar beriluvchan boʻladi. Yoshlar tarbiyasidagi nuqson va kamchiliklar, giyohvand moddalarni isteʼmol qilib yuruvchi katta yoshdagilarga taklid va havas, oiladagi noxush sharoit (ota-onaning ichkilikboz yoki giyohvand boʻlishi) hamda giyohvand moddalarning oson topilishi yoki qoʻl ostida boʻlishi ham G.ka sabab boʻlishi mumkin. G.ka mubtalo boʻlganlarda xastalik borgan sari kuchaya borib, odatda, kutilmagan yomon oqibatlarga olib keladi. G. eyforiyasida, yaʼni kayfi chogʻlikda 2 bosqich kuzatiladi: qisqa muddatli —1-5 daqiqa davom etadigan oʻtkir hissiyotli bosqich (haqiqiy eyforiya) va uzoq (1—3 soat) choʻziladigan boʻshashish, tinchlanish davri. Bu bosqichlarning qisqa yoki uzoq boʻlishi qanday giyohvand modda qabul qilinganiga va miqdoriga bogʻliq. G.ning hamma turi ham oʻz rivojida giyohvand moddalarga oʻrganib qolish yoʻli bilan G. sindromining shakllanishiga olib keladi. Bu sindromning rivojlanishida ham 3 bosqich farqlanadi: 1) giyohvand moddaga nisbatan organizm reaktivligining oʻzgarishi va ruhiy bogʻlanishning paydo boʻlishi; 2) xumor (abstinent) sindromi koʻrinishida jismoniy bogʻlanishning yuzaga kelishi; 3) organizm barcha sistemalarining zaiflashishi (tolerantlikning pasayishi, yaʼni giyohvand moddalarning avvalgi miqdorini koʻtara olmaslik, xumorning surunkali davom etishi va ayrim hollarda polinarkomaniya ning vujudga kelishi). G.ka mubtalo boʻlgan kishi giyohvand moddalarni qayta-qayta va koʻproq miqdorda isteʼmol kila boshlaydi. Keyinchalik esa giyohvand moddalarsiz turolmaydigan boʻlib qoladi. Bunday ahvoldan qutilish va oʻzini bir oz yengil his qilish uchun yana giyohvand moddaga ruju qiladi va oxir-oqibat giyohvand moddalarga hirs qoʻyish kelib chiqadi. Organizmning dastlabki himoya reflekslari (koʻngil aynishi, qusish) yoʻqoladi. Bu davrda organizmda giyohvand moddalarga nisbatan moyillik shu darajada kuchayib ketadiki, goʻyo bu moddalar avvalgi taʼsir kuchini yoʻqotgandek boʻlib qoladi, endi avvalgidek eyforiya (kayf) holatini his qilish, xumorni tarqatish uchun oʻsha moddadan koʻproq miqdorda qabul qilgisi keladi. Oldiniga giyohvand modda birmuncha yoqimsiz taʼsir koʻrsatgan boʻlsa, keyinchalik goʻyoki uning holatini 'normallashtirganga' oʻxshaydi, bemor oʻzini birmuncha yaxshi his qiladi, ish qobiliyati, ruhi goʻyo tetiklashadi, pirovardida u haqiqiy giyohvand boʻlib qoladi. Giyohvandlarda avval ruhiy oʻzgarishlar (tajanglik, kayfiyat buzuqligi, xotira pasayishi) paydo boʻlgan boʻlsa, keyinchalik jismoniy oʻzgarishlar —jismoniy bogʻlanib qolish sindromi (terlash, yurak urishi, ogʻiz qurishi, ozib ketish, qoʻl-oyoqning titrashi va boshqalar) roʻy beradi. Agar giyohvand oʻz vaqtida narkotik moddani qabul qilmasa, organizmda kuchli ruhiy va jismoniy oʻzgarishlar, yaʼni giyohvandlikka xos ogʻir holat — xumorlik (qarang Abstinensiya) sindromi paydo boʻladi. G. opiomaniya (afyun qabul qilish), morfinizm, geroinizm koʻrinishida boʻladi. G.ning nashavandlik, kokainizm, nikotinizm (tamakiga ruju qilish), teizm (achchiq choy ichish) va boshqa turlari ham uchraydi. Ikki yoki undan ortiq xil giyohvand moddani surunkali qabul qilish —pol i narkomaniya deyiladi. G.ning hamma turida ham organizm zaharlanadi va u juda ogʻir kechadi."}/>
            <br />
            <Myimg img={Img}/>

            <Paragraph text={"Yer yuzining turli mintaqalarida G.ning ayrim turlari kuzatiladi. G.ning geroinizm turi keyingi vaqtda juda keng va fojiali tarzda tarkalib bormoqda. G. avj olishining oldini olish uchun ayrim mamlakatlarda tegishli tadbirlar amalga oshirilgan. Xususan OʻzRda G.ka qarshi kurash qoʻmitasi tashkil qilinib, davlat dasturi ishlab chiqilgan. Respublikada narkologiya markazi tashkil qilingan va bu markazda narkologiya boʻyicha olim va mutaxassislar tomonidan malakali kadrlar tayyorlanib, ular mamlakat mintaqalarida G.ka karshi keskin kurash olib boradi. G.ka mubtalo boʻlgan bemorlar asosan shifoxona (statsionar) sharoitida 2—4 oygacha davolanib, 4—5 yilgacha ambulatoriya kuzatuvi va hisobida boʻladilar. Oʻzbekistonda giyohvand vositalarni ishlab chiqarish va sotish bilan shugʻullangan kishilar jinoiy javobgarlikka tortiladi"}/>
            <br />
            <Link link={"https://uz.wikipedia.org/wiki/Giyohvandlik "}/>
        </div>
            <Footer />

        </div>
    )
}

export default Addiction