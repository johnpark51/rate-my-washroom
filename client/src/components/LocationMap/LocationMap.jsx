import { useState } from "react";
import "./LocationMap.scss";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Marker from "../Marker/Marker";

export default function LocationMap({ washrooms, zoom, locationDetails }) {
	const markerData = washrooms.map((washroom) => {
		let latFloat = parseFloat(washroom.lat)
		let lngFloat = parseFloat(washroom.lng)
		return {
			address: washroom.address,
			lat: latFloat,
			lng: lngFloat,
		};
	});

	// let locationLatFloat = parseFloat(locationDetails.lat)
	// let locationLngFloat = parseFloat(locationDetails.lng)

	// const locationPosition = {
	// 	lat: locationLatFloat,
	// 	lng: locationLngFloat,
	// };

	// const torontoPosition = { lat: 43.6532, lng: -79.3832 };

	if (!washrooms) {
		return <p>Loading...</p>;
	}

	// console.log(locationPosition)

	return (
		<APIProvider apiKey={"AIzaSyBFDj6opA7KGa4RfLButOzAcaqbCqJ1JmA"}>
			<div className="map-div">
				<Map defaultZoom={zoom} defaultCenter={markerData[0]} mapId={"8e6688f3b9182873"}>
					{markerData.map((position) => {
						return <Marker position={position} />;
					})}
				</Map>
			</div>
		</APIProvider>
	);
}
