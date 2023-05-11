import React from "react";
import "./infoUs.scss";
import { Link } from "react-router-dom";
import infoUsBG from "../../media/infoUsBG.svg";
import exclamation from "../../media/exclamation.png";
import Img1 from "../../media/homeimg1.png";
import Img2 from "../../media/homeimg2.png";

// const Info1Data = [
// 	{
// 		img: "../../media/homeimg1.png",
// 		description:
// 			"	O‘smir yoshidagi bolalarning hushyorlik va ogohlik fazilatlarini shakllantirishdagi mavjud muammolarini o‘rganish bo‘yicha so‘rovnoma",
// 		btnTitle: "Boshlash",
// 	},
// 	{
// 		img: "../../media/homeimg2.png",
// 		description:
// 			"Ota-onalar uchun farzandining xulq-atvori va psixik xolati, tengdoshlari bilan o‘zaro munosabat xususiyatlari, me’yordan chetlashishlarning ehtimolli sabablari bo‘yicha so‘rovnoma",
// 		btnTitle: "Boshlash",
// 	},
// ];



const InfoUs = () => {
	return (
		<div className="info1 wrapper">
			<img className="info1__img img1" src={infoUsBG} alt="" />
			<div className="info1__pedTitlesDiv">
				<h2>Pedcontrols.uz nima?</h2>
				<div className="info1__pedTitlesDiv-Texts">
					<img
						src={exclamation}
						alt=""
						className="info1__pedTitlesDiv-Texts-Logo"
					/>
					<p>
						<b>Pedcontrols.uz</b> - xalqaro standartlarga javob beruvchi ilg‘or raqamli ta’lim texnologiyasi bo‘lib, o‘smir yoshidagi bolalar va ota-onalar uchun sifatli uzluksiz masofaviy ta’lim taqdim etilishini ta’minlaydi. Platformada tashqi axborotlardan himoya qilish uchun o‘smir yoshlarda ularning hushyorlik va ogohlik fazilatlarini rivojlantirish hamda nazorat qilib borish, kiber makonda sodir etilgan hujumlar qurboniga aylanishiga qarshi immunitetni oshirishga doir dolzarb mavzular bilan tanishish singari keng imkoniyatlar taqdim etiladi. 
					</p>
				</div>
			</div>
			{/* <h2>Biz haqimizda</h2> */}
			
				<>
				<div className="info1__div">
					<img className="info1__div-img" src={Img1} alt="image" />
					<div className="info1__div-texts">
						<p className="info1__div-texts-text">O‘smir yoshidagi bolalarning hushyorlik va ogohlik fazilatlarini shakllantirishdagi mavjud muammolarini o‘rganish bo‘yicha so‘rovnoma</p>
						<Link to="" className="info1__div-texts-btn">
							Boshlash
						</Link>
					</div>
				</div>
				
				<div className="info1__div">
					<img className="info1__div-img" src={Img2} alt="image" />
					<div className="info1__div-texts">
						<p className="info1__div-texts-text">Ota-onalar uchun farzandining xulq-atvori va psixik xolati, tengdoshlari bilan o‘zaro munosabat xususiyatlari, me’yordan chetlashishlarning ehtimolli sabablari bo‘yicha so‘rovnoma</p>
						<Link to="" className="info1__div-texts-btn">
							Boshlash
						</Link>
					</div>
				</div>
				</>
		</div>
	);
};

export default InfoUs;
