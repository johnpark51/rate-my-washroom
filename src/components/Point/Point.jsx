/* FUNCTIONALITY */
import { useState } from "react";

/* GOOGLE MAPS PACKAGE */
import { AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";

/* REACT ROUTER */
import { Link } from "react-router-dom";

export default function Point({ position }) {
	const [open, setOpen] = useState(false);
	const { address, id } = position;

	return (
		<>
			<AdvancedMarker position={position} onClick={() => setOpen(true)}>
				<span className="poop-emoji">&#128169;</span>
			</AdvancedMarker>
			{open && (
				<InfoWindow position={position} onCloseClick={() => setOpen(false)}>
					<Link to={`/washroom/${id}`}>
						<p>Washroom @ {address}</p>
					</Link>
				</InfoWindow>
			)}
		</>
	);
}
