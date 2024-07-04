import { useState } from "react";
import "./Marker.scss";
import { AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";

export default function Marker({ position }) {
	const [open, setOpen] = useState(false);
	const { address } = position;
	return (
		<>
			<AdvancedMarker position={position} onClick={() => setOpen(true)}>
				<Pin />
			</AdvancedMarker>
			{open && (
				<InfoWindow position={position} onCloseClick={() => setOpen(false)}>
					<p>Washroom @ {address}</p>
				</InfoWindow>
			)}
		</>
	);
}
