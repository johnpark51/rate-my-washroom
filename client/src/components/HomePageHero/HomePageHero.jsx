import "./HomePageHero.scss";

import LocationSearch from "../LocationSearch/LocationSearch";

function HomePageHero({ locations }) {
	return (
		<div id="container">
			<section className="hero">
				<div className="hero__overlay">
					<h1 className="hero__header">
						Find the right <span className="hero__washroom">washroom</span> for
						you
					</h1>
					<input
						placeholder="Search your area or scroll below"
						className="hero__input"></input>
					<div className="locations">
						{locations.map((location) => {
							return <LocationSearch key={location.id} location={location} />;
						})}
					</div>
					{/* <h4 className="hero__search-link">
						Or search for a washroom that meets your criteria
					</h4> */}
				</div>
			</section>
		</div>
	);
}

export default HomePageHero;
