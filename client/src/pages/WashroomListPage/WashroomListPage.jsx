/* STYLES */
import "./WashroomListPage.scss";

/* FUNCTIONALITY + REACT ROUTER */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

/* COMPONENTS */
import LocationWashrooms from "../../components/LocationWashrooms/LocationWashrooms";

export default function WashroomListPage() {
	const [washrooms, setWashrooms] = useState([]);

	const baseURL = import.meta.env.VITE_API_URL;

	const getWashrooms = async () => {
		try {
			const response = await axios.get(`${baseURL}/api/washrooms`);
			setWashrooms(response.data);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		getWashrooms();
	}, []);

	if (!washrooms) {
		return <p>Loading...</p>;
	}
	return (
		<main className="washrooms-page__main">
			<h2 className="washrooms-page__header">Full Washroom List</h2>
			{washrooms.map((washroom) => {
				return (
					<Link
						className="links"
						key={washroom.id}
						to={`/washroom/${washroom.id}`}>
						<LocationWashrooms key={washroom.id} washroom={washroom} />
					</Link>
				);
			})}
		</main>
	);
}
