/* STYLES */
import "./HomePageHero.scss";

/* FUNCTIONALITY */
import { useState } from "react";

/* COMPONENTS */
import MapComponent from "../MapComponent/MapComponent";
import SearchBar from "../SearchBar/SearchBar";
import SearchResultsList from "../SearchResultsList/SearchResultsList";

export default function HomePageHero({ washrooms }) {
	const [results, setResults] = useState([]);

	return (
		<section
			className="hero hero--home"
			style={{
				backgroundImage:
					'url("http://localhost:8080/images/washroom-hero.jpg")',
			}}>
			<div className="hero__overlay">
				<div className="hero__search">
					<h2 className="hero__header">Find the right washroom for you</h2>
					<SearchBar setResults={setResults} />
					<SearchResultsList results={results} />
				</div>
				<MapComponent washrooms={washrooms} zoom={12.5} />
			</div>
		</section>
	);
}
