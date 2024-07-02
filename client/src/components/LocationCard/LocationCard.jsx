import "./LocationCard.scss";

function LocationCard({ location }) {
	const { name, image, city } = location;
	return (
		<div className="location-card">
			<div className="location-card__img-container">
				<img className="location-card__img" src={image} />
			</div>
			<div className="location-card__name-container">
				<h2 className="location-card__name">{name}</h2>
                <h4 className="location-card__city">{city}</h4>
			</div>
		</div>
	);
}
export default LocationCard;
