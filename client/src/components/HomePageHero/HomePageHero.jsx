import "./HomePageHero.scss";

import { useState } from "react";

import MapComponent from "../MapComponent/MapComponent";
import SearchBar from "../SearchBar/SearchBar";
import SearchResultsList from "../SearchResultsList/SearchResultsList";

function HomePageHero({ washrooms }) {
	const [results, setResults] = useState([]);

	return (
		<div id="container">
			<section className="hero">
				<div className="hero__overlay">
					<div className="hero__search">
						<h2 className="hero__header">Find the right washroom for you</h2>
						<SearchBar setResults={setResults} />
						<SearchResultsList results={results} />
					</div>
					<MapComponent washrooms={washrooms} zoom={12.5} />
				</div>
			</section>
		</div>
	);
}

export default HomePageHero;
