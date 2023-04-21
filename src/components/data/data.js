import { Link } from "react-router-dom";
export const navData = {
	navHome: [
		{
			link: "/parents",
			title: "Ota-onalar uchun",
			dropDown: [
				{
					key: "1",
					link: "/parents/ogohlik",
					title: "Ogohlik",
				},
				{
					key: "2",
					link: "/parents/muammolar",
					title: "Muammolar",
				},
				{
					key: "3",
					link: "/parents/yechimlar",
					title: "Yechimlar",
				},
			],
		},
		{
			link: "/youngs",
			title: "O'smirlar uchun",
			dropDown: [
				{
					key: "1",
					link: "/youngs/ta'lim-va-tarbiya",
					title: "Ta'lim va tarbiya",
				},
				{
					key: "2",
					link: "/youngs/yoshlar-ishi",
					title: "Yoshlar ishi",
				},
				{
					key: "3",
					link: "/youngs/yosh-tadbirkor",
					title: "Yosh tadbirkor",
				},
			],
		},
		{
			link: "/study",
			title: "Modulli o'quv dasturlari",
		},
		{
			link: "/about-us",
			title: "Biz haqimizda",
		},
	],
	navParents: [
		{
			link: "/",
			title: "Asosiy",
		},
		{
			link: "ogohlik",
			title: "Ogohlik",
		},
		{
			link: "muammolar",
			title: "Muammolar",
		},
		{
			link: "yechimlar",
			title: "Yechimlar",
		},
	],
	parentsInfo: [
		{
			img: "../../../media/2.1.jpg",
			id: "ogohlik",
			title: "Ogohlik",
			description:
				"ogoh odam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime aut ex, corporis distinctio nihil accusantium ipsam libero eius. Nihil, exercitationem dolorem! Animi velit ad illo quaerat enim harum voluptates mollitia?",
		},
		{
			img: "../../media/3.jpg",
			id: "muammolar",
			title: "Muammolarga qarshi kurashish",
			description:
				"Muammoli odam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime aut ex, corporis distinctio nihil accusantium ipsam libero eius. Nihil, exercitationem dolorem! Animi velit ad illo quaerat enim harum voluptates mollitia?",
		},
		{
			img: "../../media/4.jpg",
			id: "yechimlar",
			title: "Yechimlar ishi",
			description:
				"Yechimli odam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime aut ex, corporis distinctio nihil accusantium ipsam libero eius. Nihil, exercitationem dolorem! Animi velit ad illo quaerat enim harum voluptates mollitia?",
		},
	],
	youngsInfo: [
		{
			"id": "fojeali-odatlar",
			"title": "Fojeali odatlar",
			"alcohol": "Spirtli ichimliklar",
			"alcoholdesc1" : "Alkogol dunyoda aholi salomatligiga eng katta zarar yetkazuvchi psixoaktiv moddalardan biri hisoblanadi. Barcha o‘limlarning taxminan 5% spirtli ichimliklarni iste’mol qilish ta’siridan kelib chiqadi, deb hisoblamoqda Jahon sog‘liqni saqlash tashkiloti.",
			"alcoholdesc2" : "Har 10 soniyada bir kishi dunyoda uning halokatli ta’siri oqibatlaridan vafot etadi, bu yiliga 3 millionga yaqin qurbonni tashkil qiladi. Spirtli ichimliklar yurak-qon tomir va ruhiy kasalliklarga, saratonning ayrim turlariga olib kelishi mumkin. Tashkilot ma’lumotlariga ko‘ra, mastlik yoshlarga ayniqsa qattiq ta’sir qiladi: dunyoda 20−39 yoshli insonlar orasidagi o‘limning 13,5 foizi ichkilikbozlik bilan bog‘liq.",
			"alcoholdesc3": "Inson salomatligiga va millionlab odamlarning hayotiga katta zarar yetkazishiga qaramasdan, dunyoda spirtli ichimliklar marketingi ustidan nazorat boshqa psixoaktiv mahsulotlarni nazorat qilishdan ancha zaifroq, deya qayd etilgan JSSTning transchegaraviy reklama usullari va ishlab chiqaruvchilar tomonidan ishlatiladigan spirtli ichimliklarni onlayn reklamasi haqidagi yangi hisobotida.",
			"alcoholdesc4": "JSST o‘rganishlariga ko‘ra, spirtli ichimliklarga qaram bo‘lgan bemorlar ko‘pincha reklama xabarlarini ko‘rganda yoki u bilan bog‘liq boshqa ma’lumotlarni olganida alkogolga bo‘lgan ishtiyoq kuchayishi haqida tez-tez ma’lum qilishadi.",
			
			"description": "Fojeali odatlar Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, eius."
		},
		{
			"id": "asr-vabosi",
			"title": "Asr vabosi",
			"description": " Asr-vabosi Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, eius."
		},
		{
			"id": "virtual-tahdidlar",
			"title": "Virtual tahdidlar",
			"description": "Virtual-tahdidlar Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, eius."
		},
		{
			"id": "sog'lom-turmush",
			"title": "Sog'lom turmush",
			"description": "Sog'lom turmush Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, eius."
		},
		{
			"id": "foydali-maslahatlar",
			"title": "Foydali maslahatlar",
			"description": "Foydali-maslahatlar Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, eius."
		},
		{
			"id": "tavsiyaviy-manbalar",
			"title": "Tavsiyaviy manbalar",
			"description": "Tavsiyaviy-manbalar Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, eius."
		}
	],
};
