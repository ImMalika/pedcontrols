import "./scss/main.scss";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/main/home/home";
import { AboutUs } from "./pages/main/aboutUs/aboutUs";
import { Study } from "./pages/main/study/study";
import { Parents } from "./pages/parents/parents";
import { Youngs } from "./pages/youngs/youngs";
import Contact from "./pages/main/contact/contact";
import ParentsInfo from "./pages/parents/parentsInfo1/parentsInfo";
import YoungsInfo from "./pages/youngs/youngsInfo1/youngsInfo1";
import Habits from "./pages/youngs/habits/habits"
import Addiction from "./pages/youngs/habits/addiction/addiction";
import Smoking from "./pages/youngs/habits/smoking/smoking";
import Alcohol from "./pages/youngs/habits/alcohol/alcohol";
import Violence from "./pages/youngs/plague/violence/violence";
import Ekstromism from "./pages/youngs/plague/ekstromism/ekstromism";
import Terrorism from "./pages/youngs/plague/terrorism/terrorism";
import Internet from "./pages/youngs/threats/internet/internet";
import Badsites from "./pages/youngs/threats/badsites/badsites";
import Advices from "./pages/youngs/advices/advices";
import Gaming from "./pages/youngs/threats/gaming/gaming";
import Gabling from "./pages/youngs/threats/gabling/gabling";
import ParentsInternet from "./pages/parents/monitoring/parentsInternet/parentsInternet";

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/about-us" element={<AboutUs />} />
			<Route exact path="/study" element={<Study />} />
			<Route exact path="/contact" element={<Contact />} />
			<Route exact path="/parents" element={<Parents />}>
				<Route exact path="/parents/:categ" element={<ParentsInfo />}>
					<Route
						exact
						path="/parents/:categ/:incateg"
						element={<ParentsInfo />}
					></Route>
				</Route>
			</Route>
			<Route exact path="/youngs" element={<Youngs />}>
				<Route exact path="/youngs/:child" element={<YoungsInfo />}>
				</Route>
			</Route>
			
			<Route path="/bad-habits" element={<Habits />}/>
			<Route path="/bad-habits/addiction" element={<Addiction />}/>
			<Route path="/bad-habits/smoking" element={<Smoking />}/>
			<Route path="/bad-habits/alcohol" element={<Alcohol />}/>
			<Route path="/century-plague/violence" element={<Violence/>}/>
			<Route path="/century-plague/ekstremism" element={<Ekstromism />}/>
			<Route path="/century-plague/terrorism" element={<Terrorism />}/>
			<Route path="/threats/internet-addiction" element={<Internet />}/>
			<Route path="/threats/bad-sites" element={<Badsites />}/> 
			<Route path="/threats/gaming" element={<Gaming />}/>
			<Route path="/threats/gabling" element={<Gabling />}/>
			<Route path="/younges/advices" element={<Advices/>}/>
			<Route path="/parents/internet-control" element={<ParentsInternet/>}/>
			
			

		</Routes>
	);
}

export default App;
