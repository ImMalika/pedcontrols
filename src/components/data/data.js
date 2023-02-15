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
};
