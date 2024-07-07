import { Link } from "react-router-dom";
import "./SearchResult.scss";

export default function SearchResult({ result }) {
	return (
		<Link className="links" to={`/washroom/${result.id}`}>
			<div className="search-result">{result.address}</div>
		</Link>
	);
}
