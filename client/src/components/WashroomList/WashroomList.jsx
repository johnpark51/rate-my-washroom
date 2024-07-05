import "./WashroomList.scss";

import LocationSearch from "../LocationSearch/LocationSearch";

export default function WashroomList({ washrooms }) {
	return (
		<section className="washroom-list__container">
			<h2 className="washroom-list__header">Potential filtration system</h2>
			<div className="washroom-list">
				{washrooms.map((washroom) => {
					return <LocationSearch key={location.id} washroom={washroom} />;
				})}
			</div>
		</section>
	);
}
