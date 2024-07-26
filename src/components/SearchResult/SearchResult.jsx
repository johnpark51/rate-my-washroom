/* STYLES */
import "./SearchResult.scss";

/* REACT ROUTER */
import { Link } from "react-router-dom";

export default function SearchResult({ result }) {

	return (
		<Link className="links" to={`/washroom/${result.id}`}>
			<section className="search-result">
				<div>
					<p className="search-result__address">{result.address}</p>
					<p className="search-result__location">{result.location}</p>
				</div>
				<p className="search-result__name">{result.name}</p>
			</section>
		</Link>
	);
}
