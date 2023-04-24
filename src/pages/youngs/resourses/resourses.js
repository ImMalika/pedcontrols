import React from "react";
import "./resourses.scss";
import Title from "../../../components/title/title";
import { Nav } from "../../../components/navbar/nav";
import navData from "../../../components/data/data.json";
import Footer from "../../../components/footer/footer";
import Paragraph from "../../../components/paragraph/paragraph";
import Title2 from "../../../components/title2/title2";
import Link from "../../../components/links/links";
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
const Resourses = () => {
	return (
		<div className="resourses">
			<Nav dataLink={navData.navHome} />
			<div className="main">
				<Title titleName={"Tavsiyaviy manbalar"} />
				<div className="resourses__elements">
					<div className="resourses__elements_rowOdd">
						<img src={img1} alt={img1} />
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href="" download={""}>
								<button>Yuklash</button>
							</a>
						</div>
					</div>
					<div className="resourses__elements_rowEven">
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href="" download={""}>
								<button>Yuklash</button>
							</a>
						</div>
						<img src={img2} alt={img2} />
					</div>
					<div className="resourses__elements_rowOdd">
						<img src={img3} alt={img3} />
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href="" download={""}>
								<button>Yuklash</button>
							</a>
						</div>
					</div>
					<div className="resourses__elements_rowEven">
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href="" download={""}>
								<button>Yuklash</button>
							</a>
						</div>
						<img src={img4} alt={img4} />
					</div>
					<div className="resourses__elements_rowOdd">
						<img src={img5} alt={img5} />
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href="" download={""}>
								<button>Yuklash</button>
							</a>
						</div>
					</div>
					<div className="resourses__elements_rowEven">
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href="" download={""}>
								<button>Yuklash</button>
							</a>
						</div>
						<img src={img6} alt={img6} />
					</div>
					<div className="resourses__elements_rowOdd">
						<img src={img7} alt={img7} />
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href="" download={""}>
								<button>Yuklash</button>
							</a>
						</div>
					</div>
					<div className="resourses__elements_rowEven">
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href="" download={""}>
								<button>Yuklash</button>
							</a>
						</div>
						<img src={img8} alt={img8} />
					</div>
					<div className="resourses__elements_rowOdd">
						<img src={img9} alt={img9} />
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href="" download={""}>
								<button>Yuklash</button>
							</a>
						</div>
					</div>
					<div className="resourses__elements_rowEven">
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href="" download={""}>
								<button>Yuklash</button>
							</a>
						</div>
						<img src={img10} alt={img10} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default Resourses;
