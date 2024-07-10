/* STYLES */
import "./LocationMap.scss";

/* GOOGLE PACKAGE */
import { APIProvider, Map } from "@vis.gl/react-google-maps";

/* COMPONENTS */
import Point from "../Point/Point";

export default function LocationMap({ washrooms, zoom }) {
	const markerData = washrooms.map((washroom) => {
		let latFloat = parseFloat(washroom.lat)
		let lngFloat = parseFloat(washroom.lng)
		return {
			id: washroom.id,
			address: washroom.address,
			lat: latFloat,
			lng: lngFloat,
		};
	});

	if (!washrooms) {
		return <p>Loading...</p>;
	}

	return (
		<APIProvider apiKey={"AIzaSyBFDj6opA7KGa4RfLButOzAcaqbCqJ1JmA"}>
			<div className="location-map-div">
				<Map defaultZoom={zoom} defaultCenter={markerData[0]} mapId={"8e6688f3b9182873"}>
					{markerData.map((position) => {
						return <Point position={position} key={position.id}/>;
					})}
				</Map>
			</div>
		</APIProvider>
	);
}
