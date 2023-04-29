import React from "react";
import {Link }from "react-router-dom";
import "./resourses.scss";
import Title from "../../../components/title/title";
import { Nav } from "../../../components/navbar/nav";
import navData from "../../../components/data/data.json";
import Footer from "../../../components/footer/footer";
import Paragraph from "../../../components/paragraph/paragraph";
import Title2 from "../../../components/title2/title2";
// import Link from "../../../components/links/links";
import Title3 from "../../../components/title3/title3";
import img1 from "../../../media/Kitoblar/bolalik/bolalik.jpg";
import img2 from "../../../media/Kitoblar/chol va dengiz/chol_va_dengiz.jpg";
import img3 from "../../../media/Kitoblar/dunyoning ishlari/dunyoning ishlari.jpg";
import img4 from "../../../media/Kitoblar/kichkina shahzoda/kichkina shahzoda.jpg";
import img5 from "../../../media/Kitoblar/o'gay ona/o'gay ona.jpg";
import img6 from "../../../media/Kitoblar/oq kema/oq kema.jpg";
import img7 from "../../../media/Kitoblar/ot kishnagan oqshom/ot kishnagan oqshom.jpg";
import img8 from "../../../media/Kitoblar/qobusnoma/qobusnoma.jpg";
import img9 from "../../../media/Kitoblar/shum bola/shum bola.jpg";
import img10 from "../../../media/Kitoblar/yulduzli tunlar/yulduzli tunlar.jpg";
import pdf1 from "../../../media/Kitoblar/bolalik/OybekBolalik.pdf";
import pdf2 from "../../../media/Kitoblar/chol va dengiz/ernest_xeminguey_chol_va_dengiz.pdf";
import pdf3 from "../../../media/Kitoblar/dunyoning ishlari/DunyoningIshlari.pdf";
import pdf4 from "../../../media/Kitoblar/kichkina shahzoda/Кичкина Шахзода.pdf";
import pdf5 from "../../../media/Kitoblar/o'gay ona/Ahmad Lutfiy Qozonchi. O'gay ona (roman).pdf";
import pdf6 from "../../../media/Kitoblar/oq kema/Oq kema. Chingiz Aytmatov.pdf";
import pdf7 from "../../../media/Kitoblar/ot kishnagan oqshom/T._Murod_Ot_kishnagan_oqshom.pdf";
import pdf8 from "../../../media/Kitoblar/qobusnoma/kaykovus_qobusnoma.pdf";
import pdf9 from "../../../media/Kitoblar/shum bola/shum bola G'ofur G'ulom.pdf";
import pdf10 from "../../../media/Kitoblar/yulduzli tunlar/yulduzli_tunlar.pdf";
const Resourses = () => {
	return (
		<div className="resourses">
			<Nav dataLink={navData.navYoungs} />
			<div className="main">
				<Title titleName={"Tavsiyaviy manbalar"} />

				<div className="ektromismdiv">
					<ul>
						<li><b>1. </b><Link to={"https://uzbekcoders.uz/"}> &nbsp;https://uzbekcoders.uz/ </Link></li>
						<li><b>2. </b><Link to={"https://www.abt.uz/test"}> &nbsp;https://www.abt.uz/test </Link></li>
						<li><b>3. </b><Link to={"https://ziyonet.uz/"}> &nbsp;https://ziyonet.uz/</Link></li>
						<li><b>4.  Khan Academy </b>platformasi <Link to={"https://uz.khanacademy.org/"}><u>'https://uz.khanacademy.org/'</u></Link>  platformasi boshqa MOOClardan farqli ravishda ta’limga interfaollik va o‘yin texnologiyalarini olib kirgan va o‘z davrida birinchilardan bo‘lgan mashhur loyiha. Bugungi kunga kelib platforma 36 dan ortiq tilda (o‘zbek tili ham mavjud) 10 mingdan ortiq kichik video darslar yaratgan. Platformada 100 mingdan ziyod interfaol misol va topshiriqlar joy olgan. Khan Academy darslari 190 dan ortiq mamlakatda o‘tiladi va hozirgi kunda 74 milliondan ortiq o‘quvchi platformadan foydalanadi. Asosiy jihati shundaki, platformadan maktab fanlari dasturlari va ko‘plab darslar, shuningdek, farzandlari bilan shug‘ullanishi uchun ota-onalarga mo‘ljallangan metodik qo‘llanmalar joy olgan. </li>
						<li><b>Kurslar: </b>matematika, informatika va dasturlash, fizika, astronomiya, kimyo, moliya, iqtisodiyot, biologiya, tibbiyot va boshqa fanlar. </li>
						<li><b>Interfeys tili:</b> bir necha tilda o‘zbek tili ham mavjud</li>
						<li><b>Kurs tili:</b> ingliz va boshqa tillarda. Subtitr mavjud.</li><br />
						<li><b>5. 	Лекториум</b> <Link to={"https://www.lektorium.tv/"}>'https://www.lektorium.tv/'</Link> notijoriy loyiha bo‘lib, o‘quv materillarini ommaviy onlayn ochiq kurslar formatida yaratadi. Shuningdek, suratga olingan videodarslarni joylashtiradi. Platforma maktab o‘quvchilari, ota-onalar, abituriyentlar, mutaxassislar uchun har xil o‘quv dastur va darslarini taqdim etadi. </li><li><b>Kurslar: </b>kompyuter bilimlari, muhandis dasturlash, ingliz tili, antropologiya, arxitektura, astronomiya, astrofizika, bioinformatika.</li>
						<li><b>Interfeys tili:</b> rus tili.</li>
						<li><b>Kurs tili:</b> rus va boshqa tillarda. Subtitr mavjud.</li><br />
						<li><b>6. EdX </b><Link to={"https://www.edx.org/"}>'https://www.edx.org/'</Link> Garvard va Massachusets texnologiya institutlari tomonidan 2012-yilda tashkil etilgan bo‘lib, dunyo bo‘yicha barcha ta’lim oluvchilar uchun yuqori sifatli kurslarni taklif etadi. Platformada Massachusets texnologiya instituti tomonidan o‘quvchilar uchun mexanika bo‘yicha kurs ochilgan. Kursning maqsadi — o‘quvchilarga fizikaning murakkab mavzularini tushunishga yordam berish va mustaqil yechim topishga o‘rgatish. Kurs, shuningdek, o‘rta maktab o‘quvchilariga imtihonlarga tayyorgarlik ko‘rishda yaqindan yordam beradi. Laboratoriya uchun virtual laboratoriyalarning joylashtirilganligi ham kursning jozibasini yanada orttiradi. Kurslar bepul, faqat sertifikat uchun pul to‘lanadi.</li>
						<li><b>Kurslar: </b>arxitektura, san’at va madaniyat, biologiya va hayot fanlari, biznes va menejment, kimyo, kommunikatsiya, kompyuter bilimlari, ma’lumotlar bazasi va statistika, dizayn, iqtisod va moliya, ta’lim, elektronika, tarix, til, huquq, adabiyot, matematika, gumanitar fanlar, musiqa, tibbiyot, falsafa va boshqalar. </li>
						<li><b>Interfeys tili:</b>ingliz tili </li>
						<li><b>Kurs tili:</b> ingliz va boshqa tillarda. Subtitr mavjud.</li><br />
						<li><b>7. Udemy </b>
						<Link to={"https://www.udemy.com/ "}>'https://www.udemy.com/'</Link>
						moliya va buxgalteriya, axborot texnologiyalari va dasturiy ta’minot, dizayn, marketing, biznes, ishlab chiqarish, sog‘lom hayot, musiqa, suratga olish va boshqalar.</li>
						<li><b>Kurslar: </b>arxitektura, san’at va madaniyat, biologiya va hayot fanlari, biznes va menejment, kimyo, kommunikatsiya, kompyuter bilimlari, ma’lumotlar bazasi va statistika, dizayn, iqtisod va moliya, ta’lim, elektronika, tarix, til, huquq, adabiyot, matematika, gumanitar fanlar, musiqa, tibbiyot, falsafa va boshqalar. </li>
						<li><b>Interfeys tili:</b>ingliz, rus tili va boshqa tillar.</li>
						<li><b>Kurs tili:</b> ingliz, rus va boshqa tillarda. Subtitr mavjud.</li><br />
					</ul>
				</div>
				<div className="resourses__elements">
					<div className="book">
						<img src={img1} alt={img1} />
						
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href={pdf1} download={pdf1}>
								<button>Yuklash</button>
							</a>
					</div>
					<div className="book">
					<img src={img2} alt={img2} />
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href={pdf2} download={pdf2}>
								<button>Yuklash</button>
							</a>
						</div>
					</div>
					<div className="book">
						<img src={img3} alt={img3} />
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href={pdf3} download={pdf3}>
								<button>Yuklash</button>
							</a>
						</div>
					</div>
					<div className="book">
					<img src={img4} alt={img4} />
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href={pdf4} download={pdf4}>
								<button>Yuklash</button>
							</a>
						</div>
					</div>
					<div className="book">
						<img src={img5} alt={img5} />
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href={pdf5} download={pdf5}>
								<button>Yuklash</button>
							</a>
						</div>
					</div>
					<div className="book">
					<img src={img6} alt={img6} />
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href={pdf6} download={pdf6}>
								<button>Yuklash</button>
							</a>
						</div>
					</div>
					<div className="book">
						<img src={img7} alt={img7} />
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href={pdf7} download={pdf7}>
								<button>Yuklash</button>
							</a>
						</div>
					</div>
					<div className="book">
					<img src={img8} alt={img8} />
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href={pdf8} download={pdf8}>
								<button>Yuklash</button>
							</a>
						</div>
					</div>
					<div className="book">
						<img src={img9} alt={img9} />
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href={pdf9} download={pdf9}>
								<button>Yuklash</button>
							</a>
						</div>
					</div>
					<div className="book">
					<img src={img10} alt={img10} />
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href={pdf10} download={pdf10}>
								<button>Yuklash</button>
							</a>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default Resourses;
