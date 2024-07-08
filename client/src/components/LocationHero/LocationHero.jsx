import "./LocationHero.scss";
import { FaLocationDot } from "react-icons/fa6";

export default function LocationHero({ locationDetails }) {
	const { name, city, image } = locationDetails;
	return (
		<section
			className="location-hero"
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7), rgb(0, 0, 0)), url(${image})`,
			}}>
			<h2 className="location-hero__header">{name}</h2>
			<div className="location-hero__right">
                <FaLocationDot className="location-hero__location-icon"/>
				<h4 className="location-hero__city">{city}</h4>
			</div>
		</section>
	);
}
