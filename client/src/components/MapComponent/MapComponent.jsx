import { useState } from "react";
import "./MapComponent.scss";
import {
	APIProvider,
	Map
} from "@vis.gl/react-google-maps";
import Marker from "../Marker/Marker";

export default function MapComponent() {

	const position = { lat: 53.54, lng: 10 };
	const positions = [
		{ lat: 53.54, lng: 10 },
		{ lat: 53.55, lng: 10.11 },
		{ lat: 53.56, lng: 10.22 },
	];

	return (
		<APIProvider apiKey={"AIzaSyBFDj6opA7KGa4RfLButOzAcaqbCqJ1JmA"}>
			<div className="map-div">
				<Map zoom={9} center={position} mapId={"8e6688f3b9182873"}>
				{positions.map((position) => {
					return <Marker position={position}/>
				})}
				</Map>
			</div>
		</APIProvider>
	);
}
