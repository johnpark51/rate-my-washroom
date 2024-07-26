/* STYLES */
import "./App.scss";

/* REACT ROUTER */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* COMPONENTS */
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

/* PAGES */
import HomePage from "./pages/HomePage/HomePage";
import LocationPage from "./pages/LocationPage/LocationPage";
import WashroomPage from "./pages/WashroomPage/WashroomPage";
import WashroomListPage from "./pages/WashroomListPage/WashroomListPage";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/location/:locationId" element={<LocationPage />}></Route>
				<Route path="/washroom/:washroomId" element={<WashroomPage />}></Route>
				<Route path="/washrooms" element={<WashroomListPage />}></Route>
				<Route path="/reviews" element={<ReviewsPage />}></Route>
				<Route path="/about" element={<AboutPage />}></Route>
				<Route path="*" element={<NotFoundPage />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}
