import React from 'react'
import c from "./parentsAdvices.scss"
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
import Img from "../../../media/parentsmedia/advices1.jpg";
import Img2 from "../../../media/parentsmedia/advices2.jpg";
import Img3 from "../../../media/parentsmedia/advices3.jpg";
import Img4 from "../../../media/parentsmedia/advices4.jpg";
import Img5 from "../../../media/parentsmedia/advices5.jpg";
import Img6 from "../../../media/parentsmedia/advices6.jpg";
import Img7 from "../../../media/parentsmedia/advices7.jpg";
import Img8 from "../../../media/parentsmedia/advices8.jpg";
import Img9 from "../../../media/parentsmedia/advices9.jpg";
// 


const ParentsAdvices = () => {
  return (
    <div className={c.parentsAdvices}>
    <Nav dataLink={navData.navParents} />
    <div className='main'>
    <Title titleName={"Foydali maslahatlar"}/>
    <Myimg img={Img}/>
    <Title3 title3={"1-savol: Do‘ppisi yarimta erkak bo‘lishi mumkinmi?"}/>
    <Paragraph text={"- Assalomu alaykum! Alloh xizmatlaringizdan rozi bo‘lsin. Oila boshlig‘ini risoladagidek qanday tarbiyalasa bo‘ladi, uning ayoli sifatida? Turmushga chiqqanimga 2 yil bo‘lyaptiki, deyarli barcha xarajatlarimni qaynota-qaynonam qoplaydilar. Ko‘p hollarda o‘zimni tiyib yashayman, ularga og‘irligim tushmasin deb. Qaynonam ba’zida minnat bilan gapiradilar... Yaqinda boshqalarni rizqini yeb ichib o‘tiribsizlar, harom hisoblanadi - dedilar. Judayam siqilib ketaman shunaqa paytlarda. Erim ham oz bo‘lsa-da topadi, topganini o‘ziga sarflaydi ko‘pincha. Juda yengil yashaydi: uydagi ovqat yoqmasa ko‘chadan ovqatlanib keladi, sigaretasiga va boshqa man bilmaydigan xarajatlariga sarflaydi, telefonida juda ko‘p bo‘sh vaqtini you.tube va boshqa tarmoqlardan bekorchi, befoyda videolarga sarflaydi. Ro‘zg‘ordagi kamchiliklar bilan ishi ham yo‘q. Maqtab ko‘rdim, eplaysiz hammasini , o‘zingiz yaxshisiz deb, kerak narsalarni tez-tez eslatib ko‘rdim, tushuntirdim, erkak kishi shug‘ullanishi kerak ekanligini, singdirishga harakat qildim (issiq suv to‘lovida muammo, kir yoyadigan kerakligi, chang yutgich kerakligi, koridorga katta oyna qo‘yish kerakligi, kelin yotoqxonasiga hamma istagan vaqtida oyna uchun kirib chiqmasligi uchun va hk). Lekin oldinga siljish yo‘q... Qaynotam ham xuddi shunday, hech narsa parvosiga kelmaydi, butun umr qaynonam hal qilgan juda ko‘p narsalarni, lekin mani oilamda unaqa bo‘lishini xohlamayman. Xo‘p qilaman, harakat qilaman deydilarda, gaplari umuman bajarayotgan amallariga to‘g‘ri kelmaydi. Ochiq oydin ko‘z oldimda yolg‘on gapiradilar qaynota-qaynonamga. Shuning uchun ham manga gapiradigan gaplari ham, tushuntirganlari ham yolg‘onligini sezaman. Fikrlari juda tarqoq, rejalar qilib, shularga yetish uchun harakatlar qilmaydi, xayoliga kelganidek yashaydi. Erimning bunaqa mas’uliyatsizligidan alohida chiqib yashashdan ham umidimni uzganman. Man sizga ma’qul kelmagan bo‘lsam, ko‘nglingizdagidek ayolga uylaning roziman, muammo chiqarmayman deb ham ko‘rdim, balki shunda serg‘ayrat bolib qolar, boshqani xohlasa erishish uchun deb o‘ylab, chunki mandan ko‘p qoniqmaydi, osh-ovqatlarimdan ham, to‘shakda ham, ro‘zg‘orda ham (Yaxshi-yaxshi yeb ichishni xohlaydi, xarajat olib kelmaydi, ko‘zini o‘ynatib yurishimni xohlaydi, xarajatlarimni qoplamaydi). Muomalasi, gapirayotgan gaplaridan adekvat, barcha narsani anglagan, tushunib yetgan, yaxshi odamdek tutadi o‘zini. Lekin amallaridan umuman boshqa odamni ko‘raman. Qo‘rqib ketaman bu odam bilan butun umr qanday bir oila bo‘lib yashashni o‘ylasam. Aqlim yetmayapti, to‘g‘ri yo‘l ko‘rsating, iltimos."}/><br/>
    <Title3 title3={"1.1. Psixolog: "}/>
    <Paragraph text={"– Va alaykum assalom! Nazarimda savolingiz avvalida aytganingizdek siz ko‘prok turmush o‘rtog‘ingizni tarbiyalashga urg‘u beryapsiz.Bu ish erkakning ayoliga tegishli emas, shundoq ham sizga uylanganigacha onasi tarbiyalagan. Demoqchimanki, siz bu vazifani bajarishga urinmang. Bunda na sizga, na eringizga manfaat bor. Payg‘ambarimiz sollallohu alayhi vasallam aytadilar: “Albatta amallar niyatga bog‘liqdir”, ushbu hadis kishining botinidagi fikrlari zohirida ham aks etishiga dalildir.Sizning fikrlaringiz eringizni tarbiyalash, ehtiyojlar uchun ro‘zg‘or qilish kabilarga qaratilgan, niyatingiz ham shunga yo‘naltirilmoqda. Bilingki, erkak va ayol bejizga juft qilib oila bo‘lishga buyurilmadi, har ikkisining ham bir-biridan oladigan ehtiyojlari, manfaatlari mavjud. Erkak oilaparvar bo‘lishi uchun, rahbarlik qilishi  uchun shunga muvofiq ehtirom darkor, er kishi shu ehtiromdan rohatlangach, oilada bosh ekanligini his etadi, mas’uliyatini anglay boshlaydi.O‘zingizga ham savol berib ko‘ring? Men erim istaganidek er bo‘lishi uchun qaysi jihatlarim bilan javob qaytara olaman?  Shariatda ham har bir inson o‘ziga munosibiga juft qilib yaratiladi - degan fikr mavjud.  Turmush o‘rtog‘ingizni sizga nisbatan ham e’tirozlari bor ekan, isloh doimo o‘zimizdan bo‘lsa, istalgan natijaga erishiladi, eringizni kamchiliklarini tuzatishga shoshmay turing, avvalo sizga nisbatan aytgan e’tirozlari ustida ishlab ko‘ring, har qanday muammo o‘z yechimi bilan keladi, shu sabab oila,erkak va ayol psixologiyasi, erga ehtirom ko‘rsatish borasida ilm olsangiz, Inshaalloh munosabatlaringizni mustahkamlab, siz niyat qilgandek oilaviy hayotga erishasiz."}/><br/>
    <Myimg img={Img2}/>

    <Title3 title3={"2-savol: Atirgul bor yerda, tikonga ne bor?"}/>
    <Paragraph text={" -  Assalomu alaykum! Meni turmushimga 11 yil bo‘lyapti. Lekin erimni fe’liga tushuna olmayapman. Meni yaxshi ko‘radi. Lekin ba’zida ayollar bilan ham ko‘rishib turadi. Erkak kishi yozilib turishi kerak, menga boring deb o‘zing jo‘nat deydi. Gunoh ishni aytmayman deyman. Arzimas narsaga achchig‘i chiqsa, qo‘l ko‘taradi. Hatto, bolalarga ham. 3ta farzandimiz bor. Yana homiladorman. Diqqat bo‘lib qolyapman. Qachongacha kaltak yeyman deb. Bir necha bor ketib qoldim baribir yarashib ketdik. Va’dalar berdi urmayman deb. Og‘zimdan chiqishiga aytganimni qil deydi. Yoki ko‘nglidagidek ish qilmasam asabiylashib ketib do‘pposlaydi. Psixologlardan maslahat oldim. Onggizda shunday o‘ylar bor deyishdi. To‘g‘risi ikkilanib qoldim. Allohni aytgani bo‘ladi-yu baribir deb. Lekin urishlar to‘xtamadi. 2 hafta uzog‘i bir oyda kaltak yeyishdan zerikdim. Mehribon, menga sovg'alar ham berib turadi. O'zimni ovutaman, yaxshi bo'lib qoldi deb. Lekin yana urish qaytalanyapti. Urib keyin afsuslanadi o'zi ham. Lekin aybni menga to'nkaydi. Uydagi ishlarni ham mana buni bunaqa qilmabsan, - deydi. Tinch yashashimiz uzoq bo'lmayapti. Uyimga ketib qaytib kelmayman dedim. Yalingani uchun yana ko'nglim bo'shlik qilib kelganman. Ota-onam ham oshiqcha indashmaydi kuyoviga. Otasiga aytaverib o'zim gap eshitganman. Yana ketsang borib hammangni so'yib kelaman, menga bo'lmasa boshqasiga ham bo'lmaysan - deb qo'rqitdi. U gaplaridan qo'rqmadim, ichimda bilganini qilsin dedim. Qanday maslahat berasiz? Men bu vaziyatlarda nima qilishim mumkin? Psixologiya orqali yechimi bormi buni?"}/>
    <Title3 title3={"2.2. Psixolog:  "}/>
    <Paragraph text={"– Va alaykum assalom! .Psixologiya orqali yechimi bormi degan gapni ancha-muncha odamlar aytadilar. Ko‘pgina odamlar psixologni advokat bilan yanglishtiradilar. Aslida psixologiya inson psixikasini o‘rganadigan ilm. Sizning turmush o‘rtog‘ingizning psixikasi adekvat holatida emas. Psixoterapevt qabuliga er-xotin birgalikda borganingiz ma’qul. Siz va sizning farzandlaringizga ham psixolog mutaxassisining yordami kerak. Chunki bu janjallarni ko‘rgan bolalarning ham psixikasi shikastlangan. Sizning holatingiz esa yanada mushkulroq.  Psixikangizda chalkashlik bor. Shuncha kaltaklanib yana shu odamni kechirib, siz uchun bebaho bo‘lgan katta boyligingiz Alloh sizga bergan buyuk ne’mat bo‘lgan o‘zingizning joningizni va ikkinchi boyligingiz va ulug‘ ne’matlardan yana biri farzandlaringizni qadrlamasligingizdan, ma’lumki, siz hamma narsani qurbon shaxs dunyoqarashi orqali o‘lchayapsiz. Shuning uchun ham sizga psixoterapevt mutaxassisining va undan keyin esa uzoq vaqt davomida psixologning yordami kerak bo‘ladi. Psixolog deganda men “ongingizda shunday o‘ylar bor” deydigan psevdopsixolog (soxta psixolog)ni emas, psixikani yaxshi o‘rgangan chinakam mutaxassis psixologni nazarda tutyapman. Shunday psixologlar ham mamlakatimizda juda ko‘p. Turmush o‘rtog‘ingiz sizga va farzandlaringizga shikast yetkazishidan o‘zingizni ehtiyot qilishingiz kerak. Sizni va bolalaringizni kaltaklashi yoki begona ayollarga borib kelishi va sizdan o‘sha ayollarga o‘zingizning xohishingiz bilan yuborishingizni talab qilishini normal holat deb bo‘lmaydi. Shunday ekan, demak, biron jiddiy qarorni qabul qilishingiz kerak. Chunki bu sizning hayotingiz. Ona ekansiz, bolalaringizga albatta siz mas’ulsiz. Ularning sog‘ligi haqida psixik sog‘ligi haqida eng birinchi o‘rinda siz o‘ylashingiz kerak. Albatta, buning uchun onglik, idroklik, shijoatlik ayol bo‘lish talab qilinadi. Psixoterapevt qabuliga borganingiz yaxshi."}/><br/>
    <Myimg img={Img3}/>

    <Title3 title3={"3-savol: Ishonchning sinishi va shubha! "}/>
    <Paragraph text={" - Assalomu alaykum! Turmush o‘rtog‘im mendan juda ham ko‘p shubha qilaveradi. Har narsadan shubhaga boraverib, 'nimadir berkitasan, yolg‘oning bor' deydi. Eng dilimni og‘ritadigani, qasam ichtiradi. Rostgo‘yligimni isbotlash uchun 'agar yolg‘onchi bo‘lsam, Alloh mendan yuz o‘girsin', deb qasam ichdim. Avval bir-ikki yolg‘on gapirganman, lekin tavba qilib, hech qachon  yolg‘on gapirmaslikka ahd qilganman. O‘shandan buyon biror marta yolg‘on gapirmadim, berkitmadim. Maslahat bering, bunday holatda qanday yo‘l tutay? Turmush o‘rtog‘im endi bir umr meni shunday qiynab o‘tadimi?"}/>
    <Title3 title3={"3.3. Psixolog:  "}/>
    <Paragraph text={"– Va alaykum assalom! Turmush o‘rtog‘ingizning ishonchiga kirishga harakat qiling. Erkak kishi ishonchini yo‘qotsa, shunday gumonga boradigan bo‘lib qoladi. Endilikda siz faqat to‘g‘riso‘z ekanligingizni isbotlang. Turmush o‘rtog‘ingizga “xohlaganingizni so‘rang, men faqat rostini aytaman”, deb ta’kidlab turing. Avvalida sizga ishonch hosil qilmasligi tabiiy hol. Bunga biroz sabr qilib turishingizga to‘g‘ri keladi. Bu davrda asosiysi oilangizdagi voqea-hodisalarni tashqariga chiqarmaslikdir. Oila qurishingizning ilk damlarini eslang. Turmush o‘rtog‘ingiz nimalardan ko‘ngli ko‘tarilar edi? Balki biron kiyimingizni kiyganingizda ko‘zi quvnagandir, ehtimol qaysidir taomingizni yaxshi ko‘rib yegandir? Ana shu kabi his-tuyg‘ularni qayta kechirib o‘tishi uchun o‘sha harakatlaringizni takrorlab turishingiz kerak. "}/><br/>
    <Myimg img={Img4}/>

    <Title3 title3={"4-savol:   Mehrsiz oila."}/>
    <Paragraph text={"- Assalomu alaykum! Turmush qurganimga salkam bir yarim yil bo‘ldi. Alhamdulillah, 5 oylik qizalog‘im bor. Oilamda muammolar mavjud. Turmush o‘rtog‘im ko‘p xiyonat qildilar. Homiladorlik paytlarim ko‘p siqildim. O‘rtamizda sevgi, mehr-muhabbat degan narsalar umuman yo‘q. Hozirgi paytda begona ayollar bilan gaplashadilarmi, yo‘qmi ishim bo‘lmay qo‘ydi. Lekin men bilan umuman qiziqmasliklari, qilgan xiyonatlari, chiroyli yashashga intilmasliklaridan juda siqilib ketaman. Ongimda faqat ajrashib ketish fikri aylanadi. Chunki ularni o‘zgartirishga, mehribon bo‘lishga ko‘p urindim. Qo‘polliklar qilib ko‘nglimni qoldirdilar. Moliyaviy ehtiyojlarim bilan ham ishlari yo‘q. Maslahat bering, qanday yo‘l tutay?"}/>
    <Title3 title3={"4.4. Psixolog: "}/>
    <Paragraph text={"– Va alaykum assalom! Ajrashishdan oson ish yo‘q. Siz o‘zingizga bo‘lgan mehringiz orqali birovni sizga mehribon bo‘lishiga o‘rgatib olishingiz mumkin. Agar o‘zingizning qadringizga yetmasangiz, o‘zingizga o‘zingiz mehr bera olmasangiz, o‘zingizni parvarishlamasangiz atrofingizda hech kim buni o‘z zimmasiga olmaydi. Qachon inson o‘zini parvarishlagan, o‘zini qadrini bilgan, o‘ziga mehr ko‘rsata oladigan bo‘ladi? Qachonki qalbiga og‘riq beradigan ishlardan o‘zini ehtiyot qilsa, qachonki balanslangan ozuqaviy taomlarni iste’mol qilsa, uyqusiga e’tibor qilsa, bilimlarini oshirsa, ko‘p kitob o‘qib tursa, sevgan mashg‘ulotlari bilan shug‘ullansa va hokazo. Oilasida inson har qanday muammolarga duch keladi. Hech kimning hayoti silliq, bir maromda bo‘lmaydi. Har bir muammo insonni bir pog‘onaga o‘stiradi, tajribali qiladi. Hamda bu sinovlarga qilingan sabrlar evaziga qanchadan qancha savoblar olinadi."}/><br/>
    <Myimg img={Img5}/>

    <Title3 title3={"5-savol: Ko‘zlar o‘qday qarashi shartmi?"}/>
    <Paragraph text={" - Assalomu alaykum! Men yaqinda turmush qurdim, lekin qiynalyapman. Otamning uylarida hayotim juda ham yaxshi edi, chin islomiy oila edik, juda ham baxtli edim. Ammo bu yerga kelganimdan keyin qiynalyapman. To‘yimizdan 2 haftadan so‘ng bildimki, qaynotamning ikkinchi ayoli bor ekan, shu sabab qaynotam va qaynonam o‘rtasida tez-tez tushunmovchiliklar bo‘ladi, oqibatda ularning haftalab kechadigan janjallaridan, jahllaridan qiynalyapman. Men akademiyada o‘qiyman, homiladorman, shu sabab ko‘p xizmat qilmayotganim uchun va ovqat tayyorlamayotganim uchun jahllari chiqadi. O‘qish yo‘q payti va homilador bo‘lmagan paytim xizmatimdan mamnun edilar. Xo‘jayinim bilan munosabatim yaxshiligini yoqtirmaydilar, birga o‘tirsak, unga ham jahllari chiqib baqiradilar. Bularning barchasi haqida qaynsinglim, qaynukalarim va qaynotamga qanday yetkazishlarini bilmayman, lekin ularning barchasi menga xuddi dushmanga qaraganday qaraydi, behurmat qilib, ovozini ko‘tarishgacha boradi. Xo‘jayinimga o‘z oila a’zolarini yomonlamaslik uchun indamayman, ota-onamga siqilmasin deb indamayman, hammasini ichimga yutib qiynalyapman. Iltimos, menga maslahat bering. Tinch oiladan tushganim uchun bularni boshdan kechirish qiyin bo‘lmoqda. "}/>
    <Title3 title3={" 5.5. Psixolog: "}/>
    <Paragraph text={"– Va alaykum assalom! Siz turmush o‘rtog‘ingizga bo‘layotgan vaziyatni to‘g‘ri tushuntirishingiz kerak. Ya’ni nafrat aralashtirmay, hech kimni ayblamay faqat o‘z his-tuyg‘ularingizni ifodalashingiz kerak. Ichingizga yutishingiz farzandingiz dunyoga kelganidan keyin uning injiqliklarida, betinimligida bilinishi mumkin. Qaynongizdagi bu holat psixologik o‘zgarishlariga binoan sodir bo‘lyapti. Bu vaziyatni o‘zingizga qattiq olmang. Ayol kishida, ayniqsa yoshi kattaroq bo‘lganida erkak kishidan har taraflama qoniqish hissi mukammal bo‘lmas ekan, shu kabi vaziyatlarni keltirib chiqara boshlaydi. O‘g‘li bilan kelini o‘rtasiga tushaversa, o‘g‘lini rashk qilishgacha borsa, bu ruhiy o‘zgarish bor degani. Chunki ruhiy sog‘lom bo‘lgan, o‘zini va oila a’zolarini hurmat qilgan inson bu kabi ishlarni qilmaydi. Shuning uchun qaynonangizning qiliqlarini qalbingizga yaqin olmaslikka harakat qiling. "}/><br/>
    <Myimg img={Img6}/>

    <Title3 title3={"6-savol: Yolg‘on gapirish ISLOMda ham qoralangan! "}/>
    <Paragraph text={" - Assalomu alaykum! Alloh sizlardan rozi bo‘lsin. Meni bir narsa qiynaydi, turmush o‘rtog‘im haddan ortiq ko‘p yolg‘on gapiradi. Men yolg‘on gapirgan odamni hurmat qilgim, gaplashib o‘tirgim kelmaydi, fikrini ham qadrlamayman. Oddiy gapga ham bitta yolg‘on qo‘shib yuboradilar. Yoki bu kasallikmi bilmayman, hech qutilib bo‘lmayapti. 'Sizni yomon ko‘rib ketaman yolg‘on gapirsangiz, ko‘rgim kelmaydi', ham dedim. Namozlarimda Allohdan to‘g‘riso‘z bo‘lishini so‘rayman, baribir foyda yo‘q. Keyin gapirgim, qaragim kelmaydi. Shu odatim erni behurmat qilish, manmanlikka kirib qolmasmikin? Javob uchun oldindan rahmat!"}/>
    <Title3 title3={"6.6. Psixolog: "}/>
    <Paragraph text={"- Va alaykum assalom! Duolaringizda bardavom bo‘lavering. O‘zingizni bo‘sh qo‘ying. Qattiq siqilib ketmang. Hamma narsaning o‘z vaqti soati bor. Siz o‘zingizning zimmangizda bo‘lgan vazifalaringiz, xizmatlaringizni chiroyli ado etavering. Turmush o‘rtog‘ingiz sizdek ayoli borligidan xursand bo‘lib, qadringizga yetib, balki sizdan ibrat ola boshlar."}/><br/>
    <Myimg img={Img7}/>

    <Title3 title3={"7-savol: Urish bo‘lgan uydan fayz ketar!"}/>
    <Paragraph text={" - Assalomu alaykum! Menga maslahatingiz kerak. Umr yo‘ldoshim bilan turmush qurganimizga 21 yil bo‘lgan. Lekin hali ham ko‘p urishamiz. Uch farzandimiz bor. Oldinlari sabr qilib, umid qilib yashar edim. Endi esa urushganimizda 'ajrashamiz' degan gap ham aytiladi. Maslahat bering! "}/>
    <Title3 title3={"7.7. Psixolog: "}/>
    <Paragraph text={"– Va alaykum assalom! Albatta psixolog qabuliga borishingiz kerak. Ko‘p oilalarda er-xotin 40 yosh atrofida bo‘lganida bir ko‘tarilish sodir bo‘ladi. Hozirda ajralish haqida gap-so‘z borayotgan ekan, bu voqea sodir bo‘lmay oldini olganingiz ma’qul. Ajralishdan oson ish yo‘q. Lekin inson qo‘lidan kelib tursa-yu, oilasini saqlab qolish uchun harakat qilmasa, bu juda ayanchli va ko‘pgina fojiaviy holatlarga yetaklovchi omil bo‘lib qoladi. Shu sababli psixolog bilan suhbatlashib olsangiz, sizning qayerda va qanday xatolar qilganingiz yoki turmush o‘rtog‘ingizning kamchiliklari bor bo‘lsa, ularni qanday bartaraf etish mumkinligi haqida bilib, o‘rganib olishga imkon hosil bo‘ladi."}/>
    <br/>
    <Myimg img={Img8}/>

    <Title3 title3={"8-savol: Turmush o‘rtog‘im menga qo‘pol munosabatda bo‘ladilar! "}/>
    <Paragraph text={" - Assalomu alaykum! Yoshim 23 da. Men turmush o‘rtog‘imni juda yaxshi ko‘raman. Lekin ular menga qo‘pollik bilan munosabatda bo‘ladilar. Kun bo‘yi uyda farzandim bilan qolaman. Ishdan kelganida choy tayyorlashimga besabrlik qilib, qo‘pollik qiladilar. Ota-onamni ko‘rgani borishdan avval har doim ko‘ngilxiralik bo‘ladi. Sababi, uyga boramiz desak, qaynonamning jahli chiqaveradi. Sababini tushunmayman. Shu sabab, turmush o‘rtog‘imdan boshqa qarindoshlarnikiga borishni so‘rab ham o‘tirmayman. Chunki baribir ruxsat bermaydilar. O‘zlari bilan birga biror joyga olib bormaydilar. O‘zlari qayerga borsalar qarindosh, do‘stlari bilan ketadilar. Qo‘polliklariga sabr qilaman, ammo oxirida nohaqliklarini aytishga majbur bo‘lib urishib ketamiz. Bu qo‘polliklardan juda charchadim. Ba’zan noshukrlik, nolish orqali katta gunoh qilayotganimdan qo‘rqaman. Turmush o‘rtog‘imni norozi qilmay desam ham bo‘lmayapti. Menga maslahat bering. Qanday yo‘l tutsam turmush o‘rtog‘imning ko‘ngli yumshaydi? "}/>
    <Title3 title3={"8.8. Psixolog:  "}/>
    <Paragraph text={"– Va alaykum assalom! Erkak kishi bilan ayol kishi o‘zini qiynagan masalalarini ichiga yutavermay, ochiq gaplashib olishni o‘rganib olishi kerak. Buning uchun erkak kishining qorni to‘q, dam olib bo‘lgandan keyin xotirjam holatida o‘tirganida ayol kishi o‘zining ruhiy kechinmalarini, nimalarni his etayotganini aytishi kerak. Faqat gapirayotganida hech qanday tanbehsiz, da’vosiz, haqoratlarsiz gapirish kerak. Faktlarga asoslangan holda, ko‘z yosh to‘kmay so‘zlashi zarur. Shunda erkak kishi ham tushunadi. Amalda shu ishlarni qo‘llab ko‘ring."}/>
    <br/>
    <Myimg img={Img9}/>
    <Title3 title3={"9-savol: Qaynopamning bolasi farzandimni ko‘p haqorat qiladi, men bunday vaziyatda nima qilay?"}/>
    <Paragraph text={" - Assalomu alaykum! Bir necha yildan beri qaynopam va uning farzandlari bilan bir uyda istiqomat qilamiz. Afsuski, bolalar o‘rtasida ko‘p tortishuvlar bo‘lib turadi. Qaynopamning 8 yoshli o‘g‘li mening o‘g‘limni xafa qilgani qilgan. O‘g‘limni bundan ko‘p ko‘ngli og‘riydi, ko‘p xafa bo‘lib yig‘laydi. Chunki u juda ham hissiyotga beriluvchan. Qaynopamning o‘g‘liga ko‘p marotaba tushuntirdim, qattiq gapirib ham ko‘rdim. Oxirgi vaqtlarda esa bu uyda umuman yashagim kelmay qoldi. Qaynopamning farzandi baqirib, xunuk so‘zlar bilan bolamni haqorat qiladi. Men bunday vaziyatlarda nima qilishni bilmayapman?"}/>
    <Title3 title3={"9.9. Psixolog: "}/>
    <Paragraph text={" Va alaykum assalom! Qaynopangizning o‘g‘lini urishib bo‘lmaydi. Negaki uning shaxsiy muammosi siz o‘ylaganingizdan ancha chuqurroqdir. Bola birovni qayta-qayta xafa qilaveradimi, demak, uni kattalardan kimdir qattiq xafa qilgan. Ehtimol, hali ham xafa qilayotgandir. Bu otasi, onasi, buvi, buvasi yoki amaki-yu, ammalaridan birontasi bo‘lishi ham mumkin. Shunda bola ichidagi xafalik hissini, u uchun nohaqlik bo‘lib tuyulgan bu holatlarni o‘zidan ko‘ra ojizroq odamga agressiya tarzida to‘kib soladi. O‘g‘lingizda u boladan xafa bo‘lish hissi bor ekan, bu ish takrorlanaveradi. Shuning uchun o‘g‘lingizga: 'Sen kuchlisan, uni kechirib yubor, uning o‘zining psixologiyasida muammolari bor. Mehr izlagani uchun shunday qiladi, aslida seni xafa qilish niyati yo‘q', deb tushuntiring. U bolaga ham mehr ko‘rsating. Biron shirinlik pishirib, o‘g‘lingiz bilan o‘sha bolani ikkalasini o‘tqazib choy ichiring. Savollar berib suhbatlarini boshlab bering. Shunda ular haqiqiy aka-uka bo‘lib ketishadi. Aybdorlarni qidirib bir-biriga adovatini kuchaytirmang. Haqiqiy chin do‘st, mehribon aka-uka bo‘lish qayoqda-yu, dushman bo‘lib, butun umr bir-birini ko‘rishga ko‘zi bo‘lmay o‘zini tamom qilgani qayoqda! Bunday holatlarda kattalardan kimdir donishmandlik qilib bolalarni to‘g‘ri yo‘lga boshlashi kerak."}/><br/><br/>


    </div>
    <Footer />

    </div>
  )
}

export default ParentsAdvices