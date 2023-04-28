import React from "react";
import c from "./parentsItControl.scss";
import { Nav } from "../../../../components/navbar/nav";
import navData from "../../../../components/data/data.json";
import Footer from "../../../../components/footer/footer";
import Paragraph from "../../../../components/paragraph/paragraph";
import Title from "../../../../components/title/title";
import Title2 from "../../../../components/title2/title2";
import Link from "../../../../components/links/links";
import Title3 from "../../../../components/title3/title3";
import Myimg from "../../../../components/myimg/myimg";
// Images //
import Img1 from "../../../../media/parentsmedia/parentsinternet1.jpg";
import Img2 from "../../../../media/parentsmedia/parentsinternet2.jpg";
import Img3 from "../../../../media/parentsmedia/parentsinternet3.jpg";
import Img4 from "../../../../media/parentsmedia/parentsinternet4.png";
//

const ParentsItControl = () => {
  return (
    <div className={c.parentsItControl}>
      <Nav dataLink={navData.navParents} />
      <div className="main">
        <Title titleName={"Ijtimoiy-tarmoq nazorati"} />
        <h3>
          FARZANDINGIZ INTERNETDAGI XAVFLI KONTENTGA QIZIQAYOTGANINI BILSANGIZ<br/>
          NIMA QILISH KERAK
        </h3>
        <Myimg img={Img1} />
        <Paragraph
          text={
            "Farzandingiz hali o'smirlik yoshiga etmagan bo'lsa, Internet-resurslardan foydalanishni cheklash ba'zan ota-onaning ta’qiqlashidir, ammo agar sizning farzandingiz allaqachon 12 yoshda (va ba'zan 11) bo'lsa, unda oddiy cheklov etarli bo'lmasligi mumkin. Bunday holda, o'smirning noto'g'ri tarkibni qanchalik yaxshi bilishini aniqlang. Ehtimol, bola uning oldida qanday manba ochilganiga shubha qilmagan yoki ba'zi ichki tashvishlar va qiyinchiliklar uni unga olib kelgan yoki u allaqachon bunday manbalarga qiziqqan. Muammoga sho'ng'ish darajasi va, natijada, ota-onalarning keyingi harakatlari bu tushunchaga bog'liq."
          }
        />
        <Paragraph
          text={
            "Kuzatish va bola bilan ochiq, samimiy suhbat buni aniqlashtirishga yordam beradi. Keling, qanday aniq qadamlar qo'yish mumkinligini ko'rib chiqaylik:"
          }
        />
        <div className="ektromismdiv">
          <ul>
            <li>
              <b>1. Vahima qilmang, xotirjam bo'ling. </b>Qo'rquv va vahima
              yomon maslahatchilar ekanligini unutmang. Bolaga ovozingizni
              ko'tarish, tahdidlar, Internetni to'liq taqiqlash u bilan hissiy
              aloqani buzishi mumkin. Vaziyatga munosabat o'ylab, xotirjam
              bo'lsa, vaziyatga yechim topish mumkin.
            </li>
            <li>
              <b>2. Farzandingizga ishonchni saqlang. </b>O'smiringiz bilan
              suhbatlashish imkoniyatlarini qidiring, tafsilotlarga yopishib
              qolmang, bilgan va kuzatgan narsalarni muhokama qilishda qoling.
              Oddiy muloqot ham gapirish, ham eshitish imkoniyatidir. Bola bilan
              suhbatda sizning vazifangiz bolaga kuzatuvchanligingizni, bunday
              tarkibning ta'siri haqida ko'p narsalarni bilganingizni
              tushuntirishdir. Sizni juda xavotirga solgan vaziyatga oydinlik
              kiritish huquqiga egasiz va siz ma'lum his-tuyg'ularni boshdan
              kechirasiz va ular haqida gapirishingiz mumkin.
            </li>
            <li>
              <b>
                3. Bunday internet-resurslarga kirish xavfli ekanligini
                tushuntiring.{" "}
              </b>
              Siz o'smirdan xatti-harakatini o'zgartirishni so'rashingiz mumkin,
              shu bilan birga siz o'smirning xatti-harakatlarini to'liq nazorat
              qila olmasligingizni tan olishingiz kerak va shuning uchun u o'zi
              xulosa chiqarishini va to'g'ri qaror qabul qilishini kutishingiz
              kerak. Eng muhimi, bola bilan aloqani yo'qotmaslikdir. Uning
              xatti-harakatlarini tanqid qilish, shaxsga murojaat qilmang. Unga
              xafa bo'lish va eshikni yopib qo'yish uchun sabab berish mumkin
              emas.
            </li>
            <li>
              <b>
                4. Farzandingiz bilan axborotga tanqidiy munosabat nima
                ekanligini muhokama qiling.
              </b>
              Unga manipulyatsiya nima ekanligini, odamlar bir-biriga ta'sir
              qilish uchun qanday hiyla-nayranglardan foydalanishlarini va bunda
              qanday maqsadlarni ko'zlashlarini ayting. Kutilmagan aldov qurboni
              bo'lganingizda hayot tajribangizni o'rtoqlashing. Bunday vaziyatda
              reklama ta'sir qilish usullarini eslab qolish kifoya: masalan,
              reklamada rang, tasvir va shiordan foydalanish do'kon
              peshtaxtalarida reklamadan mahsulotni ko'rganingizda birinchi
              esingizda bo'ladigan narsadir. sotib oling.
            </li>
            <li>
              <b>
                5. Tanqid qilmang, tahdid qilmang va axloqiy suhbatlar bilan
                shug'ullanmang.{" "}
              </b>
              Siz etkazmoqchi bo'lgan ma'lumot qisqa, aniq va tushunarli
              bo'lishi kerak. Agar biror narsaga va'da bergan bo'lsangiz, uni
              oxirigacha bajaring.
            </li>
            <li>
              <b>
                6. Bolaning xatti-harakatini o'zgartirgandan keyin unga to'liq
                ishonchni tiklang.{" "}
              </b>
              Bu masalani muhokama qilishni to'xtating. Nazorat uchun oqilona
              chegaralarni belgilashga rozi bo'ling.
            </li>
            <li>
              <b>7. Bolaning xulq-atvoriga ta'siringizni aniqlang. </b>Sizning
              shaxsiy xususiyatlaringiz yoki oiladagi o'zaro munosabatlarning
              xususiyatlari bolaning bunday xatti-harakatiga hissa qo'shishi
              mumkin. Sizning o'zgarishlaringizsiz bolaning
              xatti-harakatlaridagi o'zgarishlarga erishish oson bo'lmasligini
              tan olish uchun jasorat toping.{" "}
            </li>
            <li>
              <b>8. Tahlil qiling. </b>Agar tahlilingiz vaziyat chuqur ildiz
              otganligini va psixolog yoki psixoterapevt aralashuvini talab
              qilsa, mutaxassislardan yordam so'rashni kechiktirmang{" "}
            </li>
            <Myimg img={Img3} />
            <li>
              <b></b>
            </li>
          </ul>
        </div>
        <Title3 title3={"BOLA BILAN SUHBAT REJASI"} />

        <Paragraph
          text={
            "Quyida bola bilan suhbatning taxminiy rejasi keltirilgan, ammo siz o'g'lingizni yoki qizingizni faqat siz bilishingizga e'tiboringizni qaratishingiz kerak va siz unga mos keladigan so'z va iboralarni tanlashingiz mumkin. u bilan muloqot qilish uchun mos, asos sifatida taklif qilingan rejadan foydalanish . Shuni ham hisobga olish kerakki, suhbat shoshqaloqliksiz, qo'shimcha chalg'ituvchi vaziyatlarsiz, masalan, o'yinga qo'shilishni talab qiladigan xonaga yugurib kirgan kichikroq bola, ishlaydigan televizor yoki doimiy qo'ng'iroq telefoni. Suhbat ishtirokchilarining hech biri boshqa masalaga shoshilmasligi kerak, parallel ravishda boshqa biror narsa qilish kerak."
          }
        />
        <Paragraph
          text={
            "Bolaga oldindan va to'g'ridan-to'g'ri gaplashmoqchi ekanligingizni ayting va bu qachon sodir bo'lishini ko'rsating. Masalan, “Bugun kechki ovqatdan keyin men siz bilan gaplashmoqchiman. Bizning suhbatimiz men uchun muhim, biz hech kim bizga xalaqit bermasligiga ishonch hosil qilishimiz kerak .”"
          }
        />
        <Title3 title3={"Suhbatning borishi"} />
        <div className="ektromismdiv">
          <ul>
            <li><b>1. Vaziyatni oydinlashtirish. </b>O'smiringizga uning noto'g'ri Internet-kontentga qiziqishi (ishtirok etishi) haqida nimani o'rganganingizni (sezganingizni), oxirgi paytlarda uning xatti-harakatlarida qanday o'zgarishlarni kuzatganingizni ayting. Sizning so'zlaringiz faqat faktlarni va samimiy his-tuyg'ularingizni o'z ichiga olishi kerak. Keyin u bilan suhbatingiz nima uchun muhimligini unga aytib bering.</li>
            <li>Masalan: "Azizbek, men sizni noqonuniy xatti-harakatlarga bag'ishlangan guruhdagi ijtimoiy tarmoq a'zosi ekanligingizni bildim. So'nggi paytlarda siz asabiylashayotganingizni, so'zlarimga kuchli hissiyot bilan munosabatda bo'lganingizni payqadim. Men bundan xavotirdaman. Men dadaman (ona) va sizning ahvolingiz men uchun juda muhim, men xavfsiz bo'lishingizni va bu jiddiy masalalarni men bilan muhokama qilish mumkinligini bilishingizni xohlayman. Men sizni qoralamoqchi emasman va jazolamoqchi emasman, lekin nima bo'layotganini tushunib, keyin nima qilish kerakligini siz bilan o'ylab ko'rmoqchiman. Men sizdan xavotirdaman va buni siz bilan muhokama qilish biz uchun muhim deb o'ylayman.”</li>
            <li><b>2. O'smirning nuqtai nazarini tinglash.  </b>O'smiringizga o'z nuqtai nazarini bildirish imkoniyatini bering. Suhbatingizda ehtiyotkor va sabrli bo'ling. Agar jim bo'lsa, pauza qiling. Ikki yoki uch daqiqadan so'ng, siz kutayotganingizni eslatishingiz mumkin: "Siz jim turibsiz, lekin men bu masala bo'yicha fikringizni eshitmoqchiman." Agar o'smir sizni uning tarafida ekanligingizni his qilsa, ochiq gapira oladi.</li>
            <li><b>3. Vaziyat haqida o'smirning his-tuyg'ularini va fikrlarini aytish.  </b>O'smirning so'zlariga aniqlik kiriting: "Agar men sizni to'g'ri tushunsam, unda siz ..." deb o'ylaysiz. O'smirning his-tuyg'ulari va tajribalariga e'tibor bering, ular nima bilan bog'liqligini aniqlang. Agar qo'rqsangiz, buning eng yomoni nima? Agar g'azablansa - nimaga, kimga? Agar u o'z his-tuyg'ulari haqida gapirmasa, u bilan gaplashganda ko'rgan va eshitgan narsalaringiz haqida gapirib, ularni ifodalashga yordam bering. Baholovchi bayonotlardan, qoralashdan saqlaning.</li>
            <li><b>4. O'smirning sizning so'zingizga qanday munosabatda bo'lishidan qat'iy nazar, xotirjam va oqilona bo'ling.  </b>Agar bola qichqirsa, g'azablansa, sizni, boshqa birovni ayblasa, ehtimol bu suhbatni odatiy javob berish yoki mavzuga e'tibor bermaslik usuliga o'tkazishga urinishdir. Uning his-tuyg'ularini sinab ko'ring va o'spirin boshdan kechirayotgan tuyg'uni nomlang: "Siz hozir g'azablangansiz (xafa bo'ldingiz, qo'rqib ketdingiz)" - va o'smirni ochiq suhbatga undash. Agar o'smir jim bo'lsa, unga ayting: “Bu sizni bezovta qilayotganini tushunaman. Biroq vaziyatga oydinlik kiritish zarur”. Siz buni turli shakllarda bir necha marta takrorlashingiz mumkin, yana ayting, siz uni ayblamoqchi emassiz yoki biror narsa uchun jazolamaysiz, lekin yordam berish uchun yaxshiroq tushunishni xohlaysiz.</li>
            <li><b>5. Faktlarni aniqlashtirish.</b>O'smirning guruhda qancha vaqt bo'lganini, u bu haqida qanday bilganini, qanday qilib unga qo'shilganini bilib oling. U guruh a'zosi sifatida nima qiladi. Oddiy kun davomida bolaning hissiy holati o'rtacha qanday. Guruhda muloqot qilishda u o'zgaradimi va u qanday o'zgaradi. O'smirning haqiqiy hayotida nima sodir bo'ladi. “Guruhga qanday qo‘shilganingiz haqida gapirib bering” kabi ochiq savollarni berish va bola gaplashayotganda aniqlovchi savollarni berish yaxshiroqdir .</li>
            <li><b>6. Eshitilganlarni umumlashtirish.</b>O'smir nima bo'layotganini aytib berdi, mumkin bo'lgan sabablarni tushuntirdi. Hamma narsaga ishonmagan bo'lsangiz ham, hozir haqiqatni izlashdan foyda yo'q. O‘smir qo‘lidan kelganicha ochildi. Asosiysi, agar siz uning mavjudligini tushunsangiz, o'smirni muammoni hal qilishga undash. O'smiringizdan eshitganlaringizni umumlashtiring.</li>
            <li>Masalan: “Men sizdan hozir hayotingizda eng qiyin bo'lgan voqealar sodir bo'layotganini eshitdim. Bu do'st bilan janjal va hech kim tushunmaydigan tuyg'u. Va endi men sizning qiyinchiliklaringiz haqida bilganimda, keyin nima bo'lishidan tashvishlanaman. Siz ota-onalar sifatida hozir nima qilishimiz mumkinligini bilasizmi? ”</li>
            <Myimg img={Img4}/>
            <li><b>7. O'smirning takliflarini tinglang. </b>U bilan har qanday tashvishlarni muhokama qiling. Ayting-chi, bunday vaziyatda qo'rquv va xavotirning ko'p bo'lishi mutlaqo normaldir.</li>
            <li><b>8. Keyingi harakatlarni muhokama qilish. </b>O'smiringizga bundan keyin nima qilishingiz haqida oddiy tilda ayting.</li>
            <li>Misol uchun, "Men ushbu saytga yana tashrif buyurganingiz haqida avtomatik ravishda xabar beradigan kompyuter dasturini o'rnataman, lekin men bu ma'lumot haqida faqat bilib olaman, masalan, ijtimoiy tarmoqdagi do'stlar bilan muloqot men uchun mavjud bo'lmaydi."</li>
            <li>Yoki: "Men siz bilan qaysi ma'lumotlarga qiziqishingiz va qaysi saytlarga tashrif buyurishingiz haqida gaplashaman."</li>
            <li>Yoki: "Agar siz bilan munosabatlarimiz o'zgarmasa, men muammolarimizni yaxshiroq tushunadigan mutaxassislardan yordam so'rayman".</li>
            <li><b>9. Ishonchli munosabatlarni mustahkamlash, suhbatni yakunlash. </b>O'smir bilan suhbatni ijobiy munosabat bilan yakunlash va o'tkazilgan suhbat ota-ona uchun katta ahamiyatga ega ekanligini tasdiqlash muhimdir. O'smir uchun ota-onaning yordamini his qilish juda muhimdir. Masalan: “Men sizga ishonaman. To'g'ri qaror qabul qilishingizga ishonaman. Suhbatlashganimizdan xursandman. Meni tinglaganingizdan xursandman”.</li>

          </ul>
        </div>
        <Paragraph text={""} />
      </div>
      <Footer />
    </div>
  );
};

export default ParentsItControl;
