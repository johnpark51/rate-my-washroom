import { useState } from "react";
import "./Marker.scss";
import { AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";

export default function Marker({ position }) {
	const [open, setOpen] = useState(false);
	const { address } = position;
	return (
		<>
			<AdvancedMarker position={position} onClick={() => setOpen(true)}>
				<span className="poop-emoji">&#128169;</span>
			</AdvancedMarker>
			{open && (
				<InfoWindow position={position} onCloseClick={() => setOpen(false)}>
					<p>Washroom @ {address}</p>
				</InfoWindow>
			)}
		</>
	);
}
