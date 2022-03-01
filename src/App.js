import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Teacherdashboard from "./components/Teacherdashboard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import Studentdashboard from "./components/Studentdashboard";

AOS.init({
	duration: 1000,
	easing: "ease-in-out",
	once: true,
	mirror: false
});
function App() {
	return (
		<>
			<BrowserRouter>
				
				<Routes>
					<Route path="/" element={<Teacherdashboard />} />
					
					<Route path="/student" element={<Studentdashboard />} />
					{/* <Route path="/about-us" element={<About />} />
					<Route path="/our-work" element={<Ourwork />} />
					<Route path="/our-events" element={<Ourevents />} />
					<Route path="/our-team" element={<OurTeam />} /> */}					
				</Routes>
				
			</BrowserRouter>
		</>
	);
}

export default App;
