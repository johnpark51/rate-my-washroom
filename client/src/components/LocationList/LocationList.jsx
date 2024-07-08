import { useState } from "react";
import LocationCard from "../LocationCard/LocationCard";
import "./LocationList.scss";
import { Link } from "react-router-dom";
import { MdOutlineExpandMore, MdExpandLess } from "react-icons/md";

function LocationList({ locations }) {
	const [unlimitedLocations, setUnlimitedLocations] = useState(false);
	const limitedLocations = locations.slice(0, 9);

	if (!locations || !limitedLocations) {
		return <p>Loading...</p>
	}

	if (unlimitedLocations) {
		return (
			<div className="location-list__container" id="locations">
				<div className="location-list">
					{locations.map((location) => {
						return (
							<>
								<Link className="links" key={location.id} to={`/location/${location.id}`}>
									<LocationCard key={location.id} location={location} />
								</Link>
							</>
						);
					})}
				</div>
				<button
					onClick={() => {
						setUnlimitedLocations(false);
					}}
					className="location-list__button">
					Show less
						<MdExpandLess />
				</button>
			</div>
		);
	}

	return (
		<div className="location-list__container" id="locations">
			<div className="location-list">
				{limitedLocations.map((location) => {
					return (
						<>
							<Link className="links" key={location.id} to={`/location/${location.id}`}>
								<LocationCard key={location.id} location={location} />
							</Link>
						</>
					);
				})}
			</div>
			<button
				onClick={() => {
					setUnlimitedLocations(true);
				}}
				className="location-list__button">
				Show more
					<MdOutlineExpandMore />
			</button>
		</div>
	);
}
export default LocationList;
