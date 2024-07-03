import { useState } from "react";
import "./Marker.scss";
import { AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";

export default function Marker({ position }) {
	const [open, setOpen] = useState(false);
	return (
		<>
			<AdvancedMarker position={position} onClick={() => setOpen(true)}>
				<Pin />
			</AdvancedMarker>
			{open && (
				<InfoWindow position={position} onCloseClick={() => setOpen(false)}>
					<p>I'm in here</p>
				</InfoWindow>
			)}
		</>
	);
}
