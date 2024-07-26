/* STYLES */
import "./LocationList.scss";

/* FUNCTIONALITY */
import { useState } from "react";

/* REACT ROUTER */
import { Link } from "react-router-dom";

/* COMPONENTS */
import LocationCard from "../LocationCard/LocationCard";

/* ICONS */
import { MdOutlineExpandMore, MdExpandLess } from "react-icons/md";

export default function LocationList({ locations }) {
	const [unlimitedLocations, setUnlimitedLocations] = useState(false);
	const limitedLocations = locations.slice(0, 9);

	if (!locations) {
		return <p>Loading...</p>;
	}

	const renderLocations = unlimitedLocations ? locations : limitedLocations;

	return (
		<>
			<div className="location-list">
				{renderLocations.map((location) => (
					<Link
						className="links"
						key={location.id}
						to={`/location/${location.id}`}>
						<LocationCard key={location.id} location={location} />
					</Link>
				))}
			</div>
			<button
				onClick={() => {
					setUnlimitedLocations(!unlimitedLocations);
				}}
				className="button location-list__button">
				{unlimitedLocations ? "Show less" : "Show more"}
				{unlimitedLocations ? <MdExpandLess /> : <MdOutlineExpandMore />}
			</button>
		</>
	);
}
