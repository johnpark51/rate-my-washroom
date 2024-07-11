/* STYLES */
import "./MapComponent.scss";

/* GOOGLE MAPS PACKAGE */
import {
	APIProvider,
	Map
} from "@vis.gl/react-google-maps";

/* COMPONENTS */
import Point from "../Point/Point";

export default function MapComponent({washrooms, zoom}) {
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

	const torontoPosition = { lat: 43.6532, lng: -79.3832 };

	if (!washrooms) {
		return <p>Loading...</p>
	}

	return (
		<APIProvider apiKey={"AIzaSyBFDj6opA7KGa4RfLButOzAcaqbCqJ1JmA"} language="en">
			<div className="map-div slide-up-enter">
				<Map defaultZoom={zoom} defaultCenter={torontoPosition} mapId={"8e6688f3b9182873"}>
				{markerData.map((position) => {
					return <Point key={position.id} position={position}/>
				})}
				</Map>
			</div>
		</APIProvider>
	);
}
