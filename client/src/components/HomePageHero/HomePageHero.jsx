import "./HomePageHero.scss";

import MapComponent from "../MapComponent/MapComponent";

function HomePageHero({ washrooms }) {
	return (
		<div id="container">
			<section className="hero">
				<div className="hero__overlay">
					<h2 className="hero__header">Find the right washroom for you</h2>
					<input
						placeholder="Search your area or browse below"
						className="hero__input"></input>
					<MapComponent washrooms={washrooms} zoom={12.5} />
				</div>
			</section>
		</div>
	);
}

export default HomePageHero;
