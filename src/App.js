import "./scss/main.scss";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/main/home/home";
import { AboutUs } from "./pages/main/aboutUs/aboutUs";
import { Study } from "./pages/main/study/study";
import { Parents } from "./pages/parents/parents";
import { Youngs } from "./pages/youngs/youngs";
import ParentsInfo from "./pages/parents/parentsInfo1/parentsInfo";
import YoungsInfo from "./pages/youngs/youngsInfo1/youngsInfo1";

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/about-us" element={<AboutUs />} />
			<Route exact path="/study" element={<Study />} />
			<Route exact path="/parents" element={<Parents />}>
				<Route exact path="/parents/:categ" element={<ParentsInfo />} />
			</Route>
			<Route exact path="/youngs" element={<Youngs />}>
				<Route exact path="/youngs/:child" element={<YoungsInfo />} />
			</Route>
		</Routes>
	);
}

export default App;
