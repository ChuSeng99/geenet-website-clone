import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MobileLayout from "./components/MobileLayout";
import Home from "./views/Home";
import Mobile from "./views/mobile/Mobile";
import IDDAndVAS from "./views/mobile/IDDAndVAS";
import MobileFAQ from "./views/mobile/MobileFAQ";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
		<Router>
			<div className="font-roboto">
				<NavBar />
				<main className="min-h-screen">
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						{/* Mobile Section */}
						<Route
							path="/mobile"
							element={<MobileLayout />}
						>
							<Route
								index
								element={<Mobile />}
							/>
							<Route
								path="idd-vas"
								element={<IDDAndVAS />}
							/>
							<Route
								path="faq"
								element={<MobileFAQ />}
							/>
						</Route>
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App