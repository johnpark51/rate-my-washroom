import "./LocationSearch.scss";

function LocationSearch({ washroom }) {
	const { address } = washroom;
	if (!washroom) {
		return <h1>Loading...</h1>;
	}
	return (
		<section className="location">
			<h3 className="location__name">{address}</h3>
			<p className="location__city"></p>
		</section>
	);
}

export default LocationSearch;
