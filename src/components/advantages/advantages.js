import React from "react";
import "./advantages.scss";

const Advantages = () => {
	return (
		<div className="advantages">
			<h2>Afzalliklar</h2>
			<div className="advantages__card">
				<img
					src="https://maktab.uz/img/092424ebe03cc1c764d15dcae28c0f1b.png"
					alt=""
				/>
				<h2>Modulli o‘quv dasturlari!</h2>
				<p>
				Platformada o‘smir yoshidagi bolalarning bo‘sh vaqtlarni mazmunli tashkil etish maqsadida modulli o‘quv dasturlari doir hushyorlik va ogohlik fazilatlarini shakllantirish ta’limiy texnologiyalarlar yaratilgan bo‘lib, mustaqil ta’lim shaklida yo‘lga qo‘yilganligi ham yoshlarimiz uchun yangi imkoniyatlar eshigini ochadi. 
				</p>
			</div>
			<div className="advantages__card">
				<img
					src="https://maktab.uz/img/6a11724df9be893998cf4b6051b7c8cd.png"
					alt=""
				/>
				<h2>Ogohlik va hushyorlik!</h2>
				<p>
				Bizning platformamiz hushyorlik va ogohlik fazilatlarini shakllantirish doir axborotlarni qamrab oladi. “Internetga qaramlik”, “Onlayn qimor”, onlayn savdo maydonidagi firibgarlik jinoyatlari va tahdidlardan himoyalanishni ta’minlash masalasiga doir ma’lumotlar keltirilgan.
				</p>
			</div>
			<div className="advantages__card">
				<img
					src="https://maktab.uz/img/eeb279ebec5825e5a6638470698f3c0c.png"
					alt=""
				/>
				<h2>Foydali kontentlar!</h2>
				<p>
				pedcontrols.uz platformasiga xorijiy hamkorlar taqdim etgan interfaol videodarslar bilan birga mahalliy mutaxassislar va tashkilotlar bilan hamkorlikda ishlab chiqilgan sermazmun videoroliklar ham jamlanmoqda. Asosiysi, ushbu foydali kontent hech biringizni qiziqtirmay qo‘ymaydi.
				</p>
			</div>
		</div>
	);
};

export default Advantages;
