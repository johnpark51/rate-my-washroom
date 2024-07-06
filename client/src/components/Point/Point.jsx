import { useEffect, useRef, useState } from "react";
import "./Point.scss";
import {
	AdvancedMarker,
	Pin,
	InfoWindow,
	useMap,
} from "@vis.gl/react-google-maps";
import { MarkerClusterer, Marker } from "@react-google-maps/api";
import { Link } from "react-router-dom";

export default function Point({ position }) {
	const [open, setOpen] = useState(false);
	const { address, id } = position;

	return (
		<>
			<AdvancedMarker position={position} onClick={() => setOpen(true)}>
				<span className="poop-emoji">&#128169;</span>
				{/* <span className="poop-emoji">&#128701;</span> */}
			</AdvancedMarker>
			{open && (
				<InfoWindow position={position} onCloseClick={() => setOpen(false)}>
					<Link to={`/washroom/${id}`}><p>Washroom @ {address}</p></Link>
				</InfoWindow>
			)}
		</>
	);
}
