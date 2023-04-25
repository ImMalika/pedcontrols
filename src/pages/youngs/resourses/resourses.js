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
			<Nav dataLink={navData.navHome} />
			<div className="main">
				<Title titleName={"Tavsiyaviy manbalar"} />
				<div className="resourses__elements">
					<div className="resourses__elements_rowOdd">
						<img src={img1} alt={img1} />
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href={pdf1} download={pdf1}>
								<button>Yuklash</button>
							</a>
						</div>
					</div>
					<div className="resourses__elements_rowEven">
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href={pdf2} download={pdf2}>
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
							<a href={pdf3} download={pdf3}>
								<button>Yuklash</button>
							</a>
						</div>
					</div>
					<div className="resourses__elements_rowEven">
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href={pdf4} download={pdf4}>
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
							<a href={pdf5} download={pdf5}>
								<button>Yuklash</button>
							</a>
						</div>
					</div>
					<div className="resourses__elements_rowEven">
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href={pdf6} download={pdf6}>
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
							<a href={pdf7} download={pdf7}>
								<button>Yuklash</button>
							</a>
						</div>
					</div>
					<div className="resourses__elements_rowEven">
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href={pdf8} download={pdf8}>
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
							<a href={pdf9} download={pdf9}>
								<button>Yuklash</button>
							</a>
						</div>
					</div>
					<div className="resourses__elements_rowEven">
						<div>
							<h2>bla bla</h2>
							<p>Lorem ipsum dolor sit amet.</p>
							<a href={pdf10} download={pdf1}>
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
