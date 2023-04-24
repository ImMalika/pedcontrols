import React from "react";
import "./aboutUs.scss";
import { Link } from "react-router-dom";
// import NavMain from "../../../components/navMain/navMain";
import Footer from "../../../components/footer/footer";
import mainImg from "../../../media/myimg1.jpg";
import { Nav } from "../../../components/navbar/nav";
import navHome from "../../../components/data/data.json"
import Paragraph from "../../../components/paragraph/paragraph";
import Title from "../../../components/title/title";
const AboutUs = () => {
	return (
		<div>
			<Nav dataLink={navHome.navHome} />
			<div className="main">
			<Title titleName={"Loyiha haqida"}/>
				<Paragraph text={"Mazkur elektron platforma Oilada o‘smir yoshidagi bolalarning hushyorlik va ogohlik fazilatlarini rivojlanishida virtual axborot makoni ijobiy hamda salbiy ta’sirlarga ega bo‘lib, inson qalbi va ongiga tez ta’sir qila olish xususiyati tufayli ezgu va yovuz kuchlarning kurash maydoniga aylagani, axborot xavfsizligini ta’minlash masalasi o‘smirlarning ogohlik va hushyorlik fazilatlarini rivojlantirish nuqtai nazaridan axborotlarni mustaqil qabul qilish ko‘nikmalarini ijobiy shakllantirish maqsadida ishlab chiqildi."} /><br/>
				<Paragraph text={"Globallashayotgan dunyoda axborot-kommunikatsiya texnologiyalari o‘smirlar kundalik hayotining ajralmas qismiga aylanib ulgurdi. Ya’ni, dunyo aholisining jahon axborot tarmog‘i – Internetdan foydalanuvchilarining 71 foizini 15 yoshdan 24 yoshgacha bo‘lgan ijtimoiy-demografik guruh vakillari tashkil etgan holda ushbu yoshlarning 90,1 foizi turli ijtimoiy tarmoqlarning faol foydalanuvchilari hisoblanadi. "} /><br />
				<Paragraph text={"Har kuni global tarmoq va virtual makonda bir necha milliondan ziyod yangi axborot resurslari paydo bo‘ladi, uning hajmi har daqiqa o‘sib bormoqda. Axborot ko‘lami, uning zamonaviy xususiyatlari va ta’sir doirasi kengayishi oqibatida aholi, jumladan, o‘smir yoshidagi bolalarda hushyorlik va ogohlik fazilatlarini rivojlantirish masalasi jamiyat (oila)ning, shuningdek, ijtimoiy pedagogika fanining dolzarb masalalaridan biriga aylandi. "} /><br />
				<Paragraph text={"Ushbu platforma ota-onalar va o‘smir yoshidagi bolalar foydalanishi uchun mo‘ljallangan bo‘lib, unda ota-onalar uchun maslahatlar, vertual pedagogik nazorat hamda foydali ma’lumotlar, shuningdek, o‘smir yoshidagi bolalarda xavfsiz axborotlarni saralash, ongli tushunish, axborot iste’molidan to‘g‘ri foydalanishga oid ma’lumotlar o‘rin olgan."} /><br />
			</div>
			<Link to="/">Home</Link>
			<Footer />
		</div>
	);
};

export { AboutUs };
