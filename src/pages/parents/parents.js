import React from "react";
import "./parents.scss";
import Footer from "../../components/footer/footer";
import mainImg from "../../media/1.jpg";
import { Nav } from "../../components/navbar/nav";
import navParents from "../../components/data/data.json";
import { Outlet } from "react-router-dom";
const Parents = () => {
	return (
		<div>
			<Nav dataLink={navParents.navParents} />
			<Outlet />
			<h1 className="aboutTitle">Ota-onalar uchun maslahatlar</h1>
			<div className="aboutUs__wrapper">
				<div className="aboutUs__wrapper-img">
					<img src={mainImg} alt="media" />
				</div>
				<div className="aboutUs__wrapper-info">
					<p>
						Mazkur elektron platforma Oilada o'smir yoshidagi bolalarning
						hushyorlik va ogohlik fazilatlarini rivojlanishida vertual axborot
						makoni ijobiy hamda salbiy ta’sirlarga ega bo‘lib, inson qalbi va
						ongiga tez ta’sir qila olish xususiyati tufayli ezgu va yovuz
						kuchlarning kurash maydoniga aylagani, axborot xavfsizligini
						ta’minlash masalasi o‘smirlarning ogohlik va hushyorlik
						fazilatlarini rivojlantirish nuqtai nazaridan axborotlarni mustaqil
						qabul qilish ko‘nikmalarini ijobiy shakllantirish maqsadida ishlab
						chiqildi.
					</p>
				</div>
				<p>
					Globallashayotgan dunyoda axborot-kommunikatsiya texnologiyalari
					o‘smirlar kundalik hayotining ajralmas qismiga aylanib ulgurdi. Ya’ni,
					dunyo aholisining jahon axborot tarmog‘i – Internetdan
					foydalanuvchilarining 71 foizini 15 yoshdan 24 yoshgacha bo‘lgan
					ijtimoiy-demografik guruh vakillari tashkil etgan holda ushbu
					yoshlarning 90,1 foizi turli ijtimoiy tarmoqlarning faol
					foydalanuvchilari hisoblanadi.
				</p>
				<p>
					Har kuni global tarmoq va virtual makonda bir necha milliondan ziyod
					yangi axborot resurslari paydo bo‘ladi, uning hajmi har daqiqa o‘sib
					bormoqda. Axborot ko‘lami, uning zamonaviy xususiyatlari va ta’sir
					doirasi kengayishi oqibatida aholi, jumladan, o‘smir yoshidagi
					bolalarda hushyorlik va ogohlik fazilatlarini rivojlantirish masalasi
					jamiyat (oila)ning, shuningdek, ijtimoiy pedagogika fanining dolzarb
					masalalaridan biriga aylandi.
				</p>
				<p>
					Ushbu platforma ota-onalar va o'smir yoshidagi bolalar foydalanishi
					uchun mo'ljallangan bo'lib, unda ota-onalar uchun maslahatlar, vertual
					pedagogik nazorat hamda foydali ma’lumotlar, shuningdek, o'smir
					yoshidagi bolalarda xavfsiz axborotlarni saralash, ongli tushunish,
					axborot iste’molidan to'g'ri foydalanishga oid ma’lumotlar o'rin
					olgan.
				</p>
			</div>
			<Footer />
		</div>
	);
};

export { Parents };
