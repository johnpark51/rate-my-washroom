import "./WashroomHero.scss";
import { FaLocationDot } from "react-icons/fa6";

export default function WashroomHero({ washroomDetails }) {
	const { name, image } = washroomDetails;
	return (
		<section
			className="washroom-hero"
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7), rgb(0, 0, 0)), url(${image})`,
			}}>
			<FaLocationDot className="washroom-hero__location-icon" />
			<h2 className="washroom-hero__header">{name}</h2>
		</section>
	);
}
