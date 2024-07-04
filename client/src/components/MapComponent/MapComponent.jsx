import { useState } from "react";
import "./MapComponent.scss";
import {
	APIProvider,
	Map
} from "@vis.gl/react-google-maps";
import Marker from "../Marker/Marker";

export default function MapComponent({washrooms}) {
	const markerData = washrooms.map(washroom => {
		return {
			address: washroom.address,
			lat: washroom.lat,
			lng: washroom.lng
		}
	})

	const torontoPosition = { lat: 43.6532, lng: -79.3832 };

	return (
		<APIProvider apiKey={"AIzaSyBFDj6opA7KGa4RfLButOzAcaqbCqJ1JmA"}>
			<div className="map-div">
				<Map zoom={12} center={torontoPosition} mapId={"8e6688f3b9182873"}>
				{markerData.map((position) => {
					return <Marker position={position}/>
				})}
				</Map>
			</div>
		</APIProvider>
	);
}
