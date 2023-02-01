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
				<h2>Ro‘yxatdan o‘tish juda oson!</h2>
				<p>
					Platforma imkoniyatlaridan foydalanish uchun saytdan ro‘yxatdan o‘tish
					lozim. Bu esa ko‘p vaqt olmaydi. Ro‘yxatdan o‘tish tugmasi orqali
					formani to‘ldiring va bir necha daqiqada platforma foydalanuvchilari
					qatoridan joy oling!
				</p>
			</div>
			<div className="advantages__card">
				<img
					src="https://maktab.uz/img/6a11724df9be893998cf4b6051b7c8cd.png"
					alt=""
				/>
				<h2>Siz kutgan yo‘nalishlar!</h2>
				<p>
					Bizning videodarslar Siz o‘rganishni istagan yo‘nalishlarni qamrab
					oladi. O‘quv dasturidan tashqari, zamonaviy bilimlarga ham urg‘u
					berdik. Bu hali hammasi emas. Maktab.uz yana yangidan-yangi
					videodarslar bilan boyitib boriladi.
				</p>
			</div>
			<div className="advantages__card">
				<img
					src="https://maktab.uz/img/eeb279ebec5825e5a6638470698f3c0c.png"
					alt=""
				/>
				<h2>Qiziqarli va foydali kontent!</h2>
				<p>
					Maktab.uz saytiga xalqaro hamkorlar taqdim etgan interfaol
					videodarslar bilan birga mahalliy mutaxassislar va tashkilotlar bilan
					hamkorlikda ishlab chiqilgan sermazmun videoroliklar ham jamlanmoqda.
					Asosiysi, ushbu foydali kontent hech biringizni qiziqtirmay qo‘ymaydi.
				</p>
			</div>
		</div>
	);
};

export default Advantages;
