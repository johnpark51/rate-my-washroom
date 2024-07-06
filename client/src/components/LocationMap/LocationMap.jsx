import { useState } from "react";
import "./LocationMap.scss";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Point from "../Point/Point";

export default function LocationMap({ washrooms, zoom, locationDetails }) {
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

	console.log(washrooms)

	return (
		<APIProvider apiKey={"AIzaSyBFDj6opA7KGa4RfLButOzAcaqbCqJ1JmA"}>
			<div className="map-div">
				<Map defaultZoom={zoom} defaultCenter={markerData[0]} mapId={"8e6688f3b9182873"}>
					{markerData.map((position) => {
						return <Point position={position} />;
					})}
				</Map>
			</div>
		</APIProvider>
	);
}
