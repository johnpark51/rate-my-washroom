import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./LocationPage.scss";
import axios from "axios";
import LocationWashrooms from "../../components/LocationWashrooms/LocationWashrooms";
import LocationMap from "../../components/LocationMap/LocationMap";
import LocationHero from "../../components/LocationHero/LocationHero";
import { FaLocationArrow } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function LocationPage() {
	const [locationDetails, setLocationDetails] = useState(null);
	const [washrooms, setWashrooms] = useState(null);
	const [selectedFilter, setSelectedFilter] = useState("");
	const { locationId } = useParams();
	const navigate = useNavigate();

	const baseURL = import.meta.env.VITE_API_URL;

	const getLocationDetails = async () => {
		try {
			const response = await axios.get(
				`${baseURL}/api/locations/${locationId}`
			);
			setLocationDetails(response.data);
		} catch (error) {
			console.error(error);
		}
	};
	const getLocationWashrooms = async () => {
		try {
			const response = await axios.get(
				`${baseURL}/api/locations/${locationId}/washrooms`
			);
			setWashrooms(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getLocationDetails();
		getLocationWashrooms();
	}, []);

	if (!locationDetails || !washrooms) {
		return <p>Loading...</p>;
	}
	const { name, city, description, image, lat, lng } = locationDetails;

	const handleFilterChange = (event) => {
		setSelectedFilter(event.target.value);
	};

	const filteredWashrooms = washrooms.filter((washroom) => {
		if (selectedFilter === "All") {
			return washroom;
		} else if (selectedFilter === "Open to public") {
			return washroom.public_access;
		} else if (selectedFilter === "Wheelchair Accessible") {
			return washroom.wheelchair_accessible;
		} else if (selectedFilter === "Gender Neutral") {
			return washroom.gender_neutral;
		} else if (selectedFilter === "Family Friendly") {
			return washroom.family_friendly;
		}
		return true;
	});

	return (
		<main className="location-page">
			<button className="location-page__back" onClick={() => navigate(-1)}>
				<IoIosArrowRoundBack />
				Go Back
			</button>
			<LocationHero locationDetails={locationDetails} />
			<section className="location-page__main">
				<div className="location-page__left">
					<div className="location-page__left-top">
						<h3 className="location-page__browse">
							Browse {washrooms.length} washrooms in this area
						</h3>
						<div className="location-page__filter">
							<label className="location-page__label">Choose a filter:</label>
							<select
								className="location-page__select"
								value={selectedFilter}
								onChange={handleFilterChange}>
								<option value="All">All</option>
								<option value="Open to public">Open to public</option>
								<option value="Wheelchair Accessible">
									Wheelchair Accessible
								</option>
								<option value="Gender Neutral">Gender Neutral</option>
								<option value="Family Friendly">Family Friendly</option>
							</select>
						</div>
					</div>
					{filteredWashrooms.length === 0 ? (
						<h3 className="location-page__no-washrooms">
							No washrooms match the selected filter.
						</h3>
					) : (
						filteredWashrooms.map((washroom) => (
							<Link
								className="links"
								key={washroom.id}
								to={`/washroom/${washroom.id}`}>
								<LocationWashrooms key={washroom.id} washroom={washroom} />
							</Link>
						))
					)}
				</div>
				<div className="location-page__right">
					<LocationMap
						locationDetails={locationDetails}
						washrooms={washrooms}
						zoom={16}
					/>
					<div className="location-page__about">
						<h3 className="location-page__about-header">
							<FaLocationArrow className="location-page__about-icon" />
							About {name}:
						</h3>
						<p className="location-page__about-description">{description}</p>
					</div>
				</div>
			</section>
		</main>
	);
}
