import React from 'react'
import c from "./psychology.scss"
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
import Img1 from "../../../media/parentsmedia/psychology1.jpg";
import Img2 from "../../../media/parentsmedia/psychology2.jpg";
import Img3 from "../../../media/parentsmedia/psychology3.jpg";
import Img4 from "../../../media/parentsmedia/psychology4.jpg";
import Img5 from "../../../media/parentsmedia/psychology5.jpg";
import Img6 from "../../../media/parentsmedia/psychology6.jpg";
import Img7 from "../../../media/parentsmedia/psychology7.jpg";
import Img8 from "../../../media/parentsmedia/psychology8.jpg";
import Img9 from "../../../media/parentsmedia/psychology9.jpg";
import Img10 from "../../../media/parentsmedia/psychology10.jpg";
import Img11 from "../../../media/parentsmedia/psychology11.jpg";
import Img12 from "../../../media/parentsmedia/psychology12.jpg";
// 

const Psychology = () => {
  return (
    <div className={c.psychology}>
      <Nav dataLink={navData.navParents} />
      <div className='main'>
        <Title titleName={"Ota-onalar uchun Psixolog maslahati"} />
        <Myimg img={Img1}/>
        <Title3 title3={"1-savol: Bolam agressiv fikrlaydi!"} />
        <Paragraph text={"Assalomu alaykum! Bolam ikki yoshda. U jizzaki, agressiv. Begonalarni uradigan, tishlaydigan odatlari ham bor. Bu salbiy odatlariga qarshi choralar ko‘rdim, ammo naf bermadi. Bu hol bolamning fe’li yoki temperamenti bilan bog‘liqmi? Yoki homiladorlikda tonus, gipoksiya bilan tug‘ilgani uchunmi? Yoki giperaktiv bola bo‘lgani ta’sirimi?"} /><br />
        <Title3 title3={"1.1. Psixolog: "} />
        <Paragraph text={"Va alaykum assalom. Tushunishimcha, bolada yod yetishmovchiligi bor. Bola agressiv bo‘lsa, unga qarshi kurashish kerak emas, aksincha unga mehrni ko‘proq berish kerak. Chunki boladagi temperamentning uning xatti-harakatiga hozircha aloqasi yo‘q. Aksincha sizning ruhiy kechinmalaringiz sabab bo‘lishi mumkin. O‘zingizning ichki kechinmalaringiz qanday? Kimlarga nisbatan agressiv xayollarni o‘ylaysiz, kimlarning xatti-harakatlarini yoqtirmaysiz? Mana shunday xayollar va xatti-harakatlarga barham bering. Shunda bolaning holati ham o‘zgara boshlaydi. Bolani vaqtida uxlating, tarkibi tabiiy bo‘lmagan, kimyoviy zararli oziq-ovqatlarni kamaytiring. Toza havoda tez-tez sayr ettirib, e’tiboringizni ko‘proq bolaga qaratishingiz kerak."} /><br />
        <Myimg img={Img2}/>

        <Title3 title3={"2-savol: "} />
        <Paragraph text={" - Assalomu alaykum! Farzandim 1 yosh-u 8 oylik. Uydagilarim juda erkalatib yuborishadi. Ovsinimning ham 6, 4, 1 yoshlardagi 3 nafar farzandi bor. Erkalatib yuborishganidan ota-onasini ham 'senlab' yomon so‘zlar bilan so‘kishadi. Yomon ishlar qilishadi, odobsiz bo‘lib qolishgan. Shundan qo‘rqib farzandimga qattiqroq turishga harakat qilaman. Urmayman, ammo 'podvalga qamab qo‘yaman', desamgina tinchlanadi. Ba’zida qo‘rqoq bo‘lib qolishidan qo‘rqaman. Ammo hech qanday yo‘l topolmayabman. Hozirdan qo‘llarimga urishni o‘rgangan, menga baqiradi. Sababi buvilari oyingizni uramiz deb gapirishadi. Nima qilay?"} />
        <Title3 title3={"2.2. Psixolog:  "} />
        <Paragraph text={"– Va alaykum assalom! Biz nima gumonda bo‘lsak, Alloh shuni beradi. Shuning uchun gumoningizni ijobiylashtiring. Ona xotirjam bo‘lsa, bola ham sokin bo‘ladi. Bolangiz juda kichik. Unga mehr berib birga shug‘ullaning. Masalan: hozirda bolaning yoshiga mos rivojlantiruvchi o‘yinchoqlar bor, shulardan olib, birga o‘ynang. 'Mumkin emas' iborasini ishlatishingiz bolada ma’lum chegara bo‘lishi kerakligini his etishda yordam beradi. Qamab qo‘ymasangiz qo‘rqoq bo‘lmaydi. Ammo qo‘rqitib, keyin qamasangiz, qo‘rqoq bo‘lib qoladi. Agar qo‘rqitib, keyin amalda qo‘llamasangiz, gaplaringizga jiddiy qaramay qo‘yadi. Shuning uchun bunday gaplar aytmaganingiz ma’qul."} /><br />
        <Myimg img={Img3}/>

        <Title3 title3={"3-savol: "} />
        <Paragraph text={"Bolamning  uxlashi qiyin, nima qilsam boʻladi? Assalomu alaykum! Farzandlarim biri 4 yosh, biri 1 yosh. Ikkisi ham kechasi uxlashi juda qiyin. Uyqusini tartibga tushiraman deb,  baʼzan baqirib, baʼzida urib, baʼzida qoʻrqitaman. Oʻzlariga qoʻyib bersam, tungi soat 12-1 gacha  uxlamay yurishaveradi. Kech uxlasam, erim oldidagi vazifamni bajara olmayman, tahajjudga ham tura olmayapman. Shirinlik kam yesa ham, charchatadigan oʻyinlar oʻynashsa ham, energiyalari tugamayapti. Mana shu holatlarda nima qilsam boʻladi?"} />
        <Title3 title3={"3.3. Psixolog: "} />
        <Paragraph text={"Va alaykum assalom. Baqirish, urish, qoʻrqitish notoʻgʻri. Chunki ular hali bola! Birisi endigina bir yoshga toʻlgan boʻlsa, birisi toʻrt yosh boʻlsa. Ularning bolaligini qabul qiling va asta-sekin tartibga solishga harakat qiling.  Masalan:"} />
        <div className='ektromismdiv'>
          <ul>
            <li>-uyqu oldidan  televizor koʻrsatmang, telefonda turli oʻyinlar oʻynashiga yoʻl qoʻymang;</li>
            <li>-shirinliklarni koʻp bermang; </li>
            <li>-uyqu oldidan  suhbatlashishni odat qiling; </li>
            <li>-qoʻl bilan bajariladigan ishlar ham bolani diqqatini jamlashga yordam beradi.</li>
          </ul>
        </div>
      <br/>
      <Myimg img={Img4}/>

      <Title3 title3={"4-savol: "}/>
      <Paragraph text={"5 yoshli qizim juda qoʻrqoq, sababi nima boʻlishi mumkin?Assalomu alaykum! 3 va 5 yoshli qizlarim bor. Hozir yana homiladorman. Katta qizim juda qoʻrqoq. Kunduzi ham meni koʻrmay qolsa, qattiq baqirib yigʻlab, meni axtaradi. Oʻzi juda aqlli. Oʻqishni, hisob-kitobni va kichik  suralarni biladi. Koʻchada olib yurganimda undan sal uzoqlashib ketib qolsam,  vahimaga tushib qattiq yigʻlab yuboradi. Sababini soʻrasam, sizni ketib qolibdi deb oʻyladim, deydi. Yorugʻ boʻlsa ham yolgʻiz oʻzi xonaga kirib chiqolmaydi. Kunduzi bir oʻzim qarayman. Hamma ishda boʻladi. Qizim qanday qilib qoʻrquvni yenga olishi mumkin? Unga qanday yordam bersam boʻladi? Qizimdagi bu holat  keyinchalik yomon oqibatlarga olib kelmaydimi? Yordamingiz uchun oldindan rahmat."}/>
      <Title3 title3={"4.4. Psixolog:  "}/>
      <Paragraph text={"Va alaykum assalom. Bola sababsiz qoʻrqoq boʻlib qolmaydi. Ana shu sababni topish kerak. Iloji boʻlsa, psixoterapevtga olib boring. Keyinchalik salbiy oqibatlari boʻlishi mumkin."}/><br/>
      <Myimg img={Img5}/>

      <Title3 title3={"5-savol: "}/>
      <Paragraph text={"Qizim baqirib yigʻlashga odatlanib qoldi. Assalomu alaykum! Mening savolim farzandim toʻgʻrisida. Qizim ikki yarim yosh, yaqinda singilli boʻldi, xarakteri yaxshi, lekin koʻpincha ozgina dakki bersam, baqirib yigʻlashni odat qilib olgan. U koʻpincha  bolalar bilan kirishib oʻynamaydi, biror davraga kirsa, hech kim bilan koʻrishmaydi, lekin yaxshi gapiradi. Bunday holatda qanday yoʻl tutsam boʻladi?"}/><br/>
      <Title3 title3={"5.5. Psixolog:   "}/>
      <Paragraph text={"Va alaykum assalom! Farzandingiz hali juda kichkina ekan. Bolalar bilan kirishib oʻynamasligi bu genetik tomondan boʻlishi ham  mumkin yoki Alloh taolo bergan xulq boʻlib, bosiq va uyatchan boʻlishi mumkin. Eng asosiysi, urishib-talashib,  janjal qilmas ekan! Demak, xavotirga oʻrin yoʻq. Ayniqsa, singilli  boʻlganidan keyin barchaning eʼtibori chaqaloqqa qaratilgach, undagi ayrim oʻzgarishlarni toʻgʻri qabul qilishingiz lozim. Unga eʼtibor qariyb ellik foizga kamaygach, yangi mehmonga adaptatsiya qilishi uchun ham unga vaqt kerak boʻladi. Xulqidagi oʻzgarishlariga sabr qiling. Siz unga mehr berishda davom etsangiz kifoya, vahimaga aslo oʻrin qolmaydi."}/><br/>
      <Myimg img={Img6}/>

      <Title3 title3={"6-savol: "}/>
      <Paragraph text={"Assalomu alaykum! Yoshim 29 da, 4 nafar farzandim bor. Ularning orasi 2 yosh, 3 yosh. Katta farzandim 7 yosh. Juda ham yigʻloqi, arzimagan gaplarga ham, urishsak ham, biror gapiga rad javobini aytsak ham yigʻlaydi. Nega bunday ekanligini oʻylab yuragim eziladi. Balki hamma ayb mendadir. Oʻzim ham sal gapga yigʻlab yuboraman. 5 yosh oʻgʻlim, 2 yosh qizim, 5 oylik chaqalogʻim bor. Oʻzimga tushunmayman, hech narsa yoqmaydi. Xoʻjaynim bilan koʻp urishamiz. 2 yosh qizim qoʻlini soʻradi, 5 yosh oʻgʻlim tirnogʻini yeydi, gapga umuman kirmaydi."}/><br/>
      <Title3 title3={"6.6. Psixolog:   "}/>
      <Paragraph text={"Va alaykum assalom! Oʻzingiz ham gap nimada ekanini tushunib turibsiz. Faqat ishimiz aybdor qidirish emas, yechim topishdir. O‘zingiz fahmlaganingizdek, bolalar onaning his-tuygʻularini his etib turishadi. Ularning ruhiy holati onaga bogʻliq. Qoʻl soʻrish, tirnoq tishlash stressdan boʻladi. Yaʼni, hayotidagi keskin oʻzgarishlar, eʼtibor yetishmovchiligi, uydagi muhit kabi. 3 yoshi qiyin oʻtgan bolalar 7 yoshida yigʻloqi boʻlib qolishadi. Siz oʻzingiz psixolog bilan shugʻullanib, xotirjam boʻlib olishga harakat qiling, ana shunda bolalar ham xotirjam boʻladi."}/><br/>
      <Myimg img={Img7}/>

      <Title3 title3={"7-savol:  Bolalarda narsalarni ogʻziga solish odati.  "}/>
      <Paragraph text={" - Assalomu alaykum! Farzandim 4 yosh, oʻgʻil bola. Uyda biroz qaysarroq, shu bois bogʻcha opasidan bogʻchada oʻzini qanday tutishi haqida soʻragan edim, farzandimning bogʻchada erkin yurishini, bilimlarni yaxshi oʻzlashtirib, sabr bilan soʻzlab berishini, bolalar bilan quvnoq oʻynab, qaysarlik qilmasligini, faqat bir narsalarni, kiyimlarining chetlarini ogʻziga solib oladigan odati borligini aytdi. Maslahatingiz kerak. Maslahatingiz uchun oldindan rahmat!"}/><br/>
      <Title3 title3={"7.7. Psixolog:  "}/>
      <Paragraph text={" Va alaykum assalom! Boladagi turli yangi odatlarning paydo boʻlishi bola stressda ekanligini bildiradi. Masalan, yolgʻiz erka bola boʻlgan, keyin singlisi tugʻilib, eʼtibor keskin kamaygan boʻlishi, bogʻcha yoki maktab oʻzgarishi kabi hayotidagi keskin burilishlar sabab boʻlishi mumkin. Urishib berish uning bu holatini kuchaytiradi. Shu sababli unga mehr berishni koʻpaytiring."}/><br/>
      <Myimg img={Img8}/>

      <Title3 title3={"8-savol: Bolamni kaltaklayverib, urgandagina gapga ko‘nadigan qilib qo‘ydim!  "}/>
      <Paragraph text={" - Assalomu alaykum. O‘g‘lim 4 yoshda. Kundan kunga tarbiyasi buzilib ketyapti. Avvallari uni urardim, juda ham to‘polonchi, qo‘pol qilib aytganda, juda  tarbiyasiz bola edi. Hozir ham shunday. Lekin endi farzand tarbiyasi haqidagi ma’ruzalarni eshitib, internet kanallarida o‘qib bildimki, bolani urib bo‘lmas ekan. Keyin uni urmaydigan bo‘ldim, hatto qattiq gapirishni ham to‘xtatdim. Lekin o‘g‘lim kundan kunga faqat yomon tarafga o‘zgaryapti. O‘zidan kattalarga narsa otadi, uradi, har xil yomon gaplar gapirib hammani oldida behurmat qiladi. Eng qizig‘i, biz oilada juda ham bir-birimizga mehribonmiz, hech qachon urishmaymiz, kattalarni hurmatini joyiga qo‘yamiz. Bog‘cha opasini tarbiyasi noto‘g‘rimikin deb hatto bog‘chaga ham olib bormaydigan bo‘ldik. Endi uyda o‘zim tarbiyalamoqchiman. Afsuski, farzandim endi menga ko‘nmayapti, yaxshi gapimni umuman qabul qilmayapti, faqat baqirsam yo ursamgina aytganimni qiladi. Yaxshi gapirsam qulog‘iga gap kirmaydi.  Hatto hech kimdan qo‘rqmaydi. Kaltaklayverib uni faqat urganda gapga ko‘nadigan qilib qo‘ygandirman balki... Lekin o‘zi: “Oyi, urishmang, baqirmang, sekin gapiring”, deydi, lekin sekin gapirsam, aytganimni qilmaydi. O‘zi yomon bola emas, Qur’on yodlataman, yodlaydi, zikrlarni aytadi, yurgan yo‘lida salavotlarni takrorlaydi. Otasi bilan birga namoz o‘qiydi. Lekin yarmiga kelganda sajdaga bosh qo‘ysa, ustiga sakraydi, o‘yinqaroqlik qiladi. Kundan kunga tarbiyasini tuzatishga qiynalib ketyapman. Uning tarbiyasida nimalarga e’tibor berishim kerak?"}/><br/>
      <Title3 title3={"8.8. Psixolog: "}/>
      <Paragraph text={"Bolani urishish yoki kaltaklashning eng zarar tomoni shundaki, uning miyasida “ur yoki qochib qol” muhofaza mexanizmi shakllanadi. Bola yoki qo‘rqoq bo‘lib hammadan qochib yuradi, yoki kezi kelsa, kelmasa barchani kaltaklayveradi, qo‘pollik qilaveradi. Bolalarda aql, tafakkur umuman miya to‘liq shakllanib ulgurmagani sababidan urishish, kaltaklash faqat dushmaniga qaratilishi kerak, degan narsani tushunmaydi. Chunki uning eng yaqin insonlari ota-onasi ham dushmani emas, eng yaqin insoni, ammo bolani kaltaklaydi, ota-ona mehrini shu yo‘sinda ifodalaydi, degan holat miyasida o‘rnashib qoladi. Demak, bola uchun ham mehr shu tarzda ifodalanishi normal holat. U o‘zining ba’zi emotsiyalarini shu kaltaklashlar orqasiga yashiradi. Uning miyasi jismini shunday boshqaradi. Shu sababli bolani zinhor urib bo‘lmaydi. Unga faqat mehr berish, ko‘pdan-ko‘p quchoqlash, voqea-hodisalarni tushuntirish, savollariga erinmay javob berish, u bilan o‘yin o‘ynash orqali tarbiyalanadi. Ota-ona ibrat bo‘lishi kerak. Ota-ona nimani qilsa, yashiribmi yoki oshkorami bola ham umri davomida shu narsalarni qaytaraveradi. Bolaga tinch-osuda hayot kerak. Onaning yoki boshqa oila a’zosining baqirgan ovozlari bolaning psixikasini buzadi. Bola tarbiyalash juda katta mas’uliyat. Birinchi o‘rinda oila a’zolari o‘zlarini tarbiyalagan bo‘lishlari kerak. So‘ng bola tarbiyalanadi. "}/>
      <Paragraph text={"Afsuski aksariyat hollarda yosh er-xotin bolalarini psixologisiyani o‘rganmay, ularni o‘zlaricha tarbiya qilishmoqchi bo‘ladilar. Avvalo, ular psixologiyasini bilishi, inson  va shaxs sifatida qanday shakllanish yo‘llarini  o‘rganishi kerak. Mana shu narsalarni o‘rganib olsa, bolalari bilan turli xil muammolar kelib chiqmaydi.  Bolalari tug‘ilgach, u bilan munosabat qilishda, muomalada, tarbiyada siz kabi turli qiyinchilikka duch kelishmaydi. Buning sababi yuqorida ta’kidlaganimizdek, bolaning psixologiyasini bilmasligimiz-da! Siz ham shu narsaga ahamiyat berishingiz lozim. Shu bilan birga,  bolangizni bolalar psixologi yoki psixoterapevt shifokori qabuliga olib borsangiz ham ma’qul ish bo‘lardi. "}/><br/>
      <Myimg img={Img9}/>

      <Title3 title3={"9-savol: Bolamni ko‘p urardim!"}/>
      <Paragraph text={"Bolamni ko‘p urardim 16 yoshimda unashtirilib, 17 yoshga to‘lganimda to‘yim bo‘ldi. 18 yoshga kirganimda farzandli bo‘ldim. Birinchi farzandim o‘g‘il, hozir 6 yosh. Men farzandimni ko‘p urganman, urishimga sabab, bu meni hali onalikka ruhan tayyor bo‘lmaganim, bilimsizligim, yoshligim, deb bilaman. Hozir psixologlarni eshitib, o‘zimni ustimda ishlashga harakat qilyapman. O‘zimni tarbiya qilyapman, o‘zimni jilovlab jahlga berilmaslikni o‘rganyapman. Savolim, o‘g‘limni ko‘p bora sababsiz urganimlarim uchun o‘zimni o‘zim kechira olmayapman. Vijdonim azob chekmoqda. Xatolarimni tuzatishga harakat qilyapman. Mehribon, farzandlarini tushunadigan ona bo‘lsam, farzandim bilan munosabatim o‘zgaradimi yoki bolalarni xotirasida yomon ona sifatida qolamanmi? Maslahatingizni ayamang."}/>
      <Title3 title3={"99.9. Psixolog: "}/>
      <Paragraph text={"Bola taxminan uch yarim yoshdan so‘ng hayotida bo‘layotgan voqea-hodisalarni eslab qolishni boshlaydi. Ungacha voqealar esida qolmaydi. Shu sabab siz qattiq kuyunib ketmay, aksincha endi bundan keyin o‘z his-tuyg‘ularingizni jilovlab, bolaga baqirmaslik, uni kaltaklamaslikka qattiq rioya qilishingiz lozim bo‘ladi. Bola bilan ko‘proq har turli o‘yinlarni o‘ynashingiz, rasm chizishingiz, sayr qilishingiz kerak. Vijdon azobidan, albatta, xalos bo‘lishingiz zarur, chunki bola buni his qiladi va sizni hurmat qilmay qo‘yadi, yolg‘onchi bo‘ladi. Siz bilan birga bo‘lgan onlari hursandchilik va beg‘uborlik onlari bo‘lishini ta’minlashingiz kerak. Buning uchun uning aytganini bajarish va u talab qilgan narsalarni muhayyo qilish shart emas. Shunchaki, mehr berib har kuni kamida uni olti marta bag‘ringizga bosib, yuqoridagi amallarni birgalikda qilishingiz yetarlidir."}/><br/>
      <Myimg img={Img10}/>

      <Title3 title3={"10-savol: Bolaning tili chiqishi "}/>
      <Paragraph text={"Mening 1 yosh-u 8 oylik o‘g‘lim bor. Hali gapirmaydi. Biz chet elda yashaymiz. Unga o‘zbekcha gapiramiz, ko‘p so‘zlarni tushunadi. Men: “Unga chet tilida gapirishimiz kerak, bog‘chaga, maktabga borganda tilni bilmay qiynaladi. Shuning uchun hozirdan chet tilida gapirib o‘rgatishimiz zarur”, desam, turmush o‘rtog‘im: “Yo‘q, oldin tili chiqib, o‘zbekchani yaxshi gapirishni o‘rgansin, keyin chet tilida gapiramiz, bo‘lmasa, bola qiynaladi, tili ham chiqishi qiyin bo‘ladi”, deyaptilar. Siz qanday maslahat bera olasiz? Bolaga hozirgi yoshida qaysi tilda gapirganimiz afzal? Tili tez chiqishi va chet tilini o‘rganishda qiynalmasligi uchun qanday yo‘l tutaylik? Javobingiz uchun rahmat!"}/>
      <Title3 title3={"10.10. Psixolog: "}/>
      <Paragraph text={"Bolaga bir necha xil tilda gapirilsa, u ham shuncha tilni mukammal o‘rganishi mumkin. Ammo bir gap gapirilganda u jumlaning boshidan oxirigacha bitta tilda gapirish kerak. So‘ng boshqa tilda xuddi shu gapni tushuntirish lozim. Shunda bolaning miyasida chalkashlik bo‘lmaydi. Aksincha, unga gapirayotganda ba’zi so‘zlarni bir tilda va davomini ikkinchi xil tilda gapirilsa, bolaning tili chiqishi biroz orqaga surilishiga yoki tili chuchuk bo‘lishiga sabab bo‘lib qolishi mumkin."}/><br/>
      <Myimg img={Img11}/>

      <Title3 title3={"11-savol: Bolalar tarbiyasi borasida  "}/>
      <Paragraph text={"- Assalomu alaykum. Farzandim 7 oylik bo‘ldi. Farzandimni to‘g‘ri tarbiyalab, kelajakda o‘z o‘rnini topa oladigan, soliha farzand bo‘lishi uchun qanday ishlar olib borishim kerak? Chaqaloqlar, umuman bolalar tarbiyasi borasida qanday adabiyotlarni tavsiya qilasiz?"}/><br/>
      <Title3 title3={"11.11. Psixolog:  "}/>
      <Paragraph text={"- – Va alaykum assalom. Juda to‘g‘ri savol. Bolani chaqaloqligidan tarbiyalashni boshlash kerak. Chunki bola katta bo‘lib ota-onaning aytganini qilmaydi, balki ota-onaning ongidagi ishni qiladi. “Qush uyasida ko‘rganini qiladi” deganlaridek, onalar ibodatlarini yo‘lga qo‘yib olgan bo‘lishlari, qilayotgan ishlarida hech kim ko‘rmasa-da e’tiborli bo‘lishlari, shar’iy ilmni chuqur o‘rganib, unga amal qilishlari lozim. Ona musiqani ko‘p eshitsa, tabiiy bola musiqaga mehr qo‘yadi. Gʻiybatga berilsa, bola bilmagan holatda g‘iybatlarga aralashib qoladi. Ona jizzaki bo‘lsa, o‘zidan kattalarga gap qaytarsa, qo‘pol muomala qilsa, tabiiyki bola ko‘rmasa ham, tushunmasa ham ana shunday ishlarni qiladigan bo‘ladi. Shuning uchun bolani tarbiyalayotgan ona avval tarbiyani o‘zidan boshlashi kerak. Ona Qur’oni karim va hadisni mutolaa qilar ekan, baland ovozda o‘qishi, bola bilan (gapirmaydigan kichik bola bo‘lsa ham) chiroyli ohangda gaplashib turishi, diniy rivoyatlarni gapirib berishi kerak. Nima to‘g‘ri, nima noto‘g‘riligini tushuntirishi kerak. Bundan onada shu ishni qilish odati paydo bo‘ladi. Bola hali kichkina, hech nimani tushunmaydi desa, bola katta bo‘lganida ham onaning farzandi bilan gaplashish odati bo‘lmagani uchun buni uddalay olmaydi va bolaga har doim u kichkina, hech nimani tushunmaydi degan tushunchada qolib ketishi ehtimoli bor. "}/><br/>
      <Myimg img={Img12}/>

      <Title3 title3={"12-savol: Tarbiya"}/>
      <Paragraph text={"- Assalomu alaykum! Allohga shukur, 3 nafar farzandim bor. Lekin ularga to‘g‘ri tarbiya berolmayapman, deb qo‘rqaman. Katta o‘g‘lim 11 yoshda, juda dangasa, uy ishlarida yordamlashmaydi, ish buyursam 'bu qizlarning ishi', deb qilmaydi. Kichik o‘g‘lim 10 yoshda, u ham ko‘chadan beri kelmaydi, dars qilmaydi, aniq bir maqsadi yo‘q. Iltimos, maslahat bering. Alloh sizlardan rozi bo‘lsin."}/>
      
      <Title3 title3={"12.12. Psixolog: "}/>
      <Paragraph text={"– Va alaykum assalom! Farzand onaning qornida paydo bo‘lganidan boshlab ota-onasi bilan munosabatlari boshlanadi. Eng birinchi miya hosil bo‘ladi. Demak, onaning xatti-harakati o‘sha vaqtdan boshlab ongiga singib boradi. So‘ng bola tug‘ilgach, ota-onaning har bir xatti-harakati, tarbiyaviy gap-so‘zlari emas, aynan xatti-harakati, amallari uning ongiga, tasavvuriga muhrlana boradi. Bola 7 yoshigacha ota-onadan tarbiyani ularning amallaridan o‘z ongiga butunlay ko‘chirib oladi. Va ana shu ko‘chirma bo‘yicha yashay boshlaydi. Psixologiyada bu narsa 'ssenariy' yoki 'xulq-atvor modeli' ('model povedeniya') deyiladi. Hozirda siz ularni o‘zgartirishingiz uchun o‘zingiz dars qiladigan, mehnat qiladigan va bu ishlarni qilayotgan vaqtingizda ularni ham qiziqtira bilishni o‘rganishingiz kerak. Aynan qiziqtirishingiz kerak. Jalb qilish emas. Chunki bola qiziqsagina shu ish bilan shug‘ullanadi. Qiziqarli joyini topolmasa, bajarmaydi."}/><br/><br/>
      

      






      </div>
      <Footer />
    </div>
  )
}

export default Psychology