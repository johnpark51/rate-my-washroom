import { Link } from "react-router-dom";
import "./SearchResult.scss";

export default function SearchResult({ result }) {
	console.log(result);
	return (
		<Link className="links" to={`/washroom/${result.id}`}>
			<div className="search-result">
				<div>
					<p className="search-result__address">{result.address}</p>
					<p className="search-result__location">{result.location}</p>
				</div>
				<p className="search-result__name">{result.name}</p>
			</div>
		</Link>
	);
}
