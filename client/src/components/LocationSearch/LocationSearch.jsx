import "./LocationSearch.scss";

function LocationSearch({ location }) {
	const { name, city } = location;
	if (!location) {
		return <h1>Loading...</h1>;
	}
	return (
		<section className="location">
			<h3 className="location__name">{name}</h3>
			<p className="location__city">{city}</p>
		</section>
	);
}

export default LocationSearch;
