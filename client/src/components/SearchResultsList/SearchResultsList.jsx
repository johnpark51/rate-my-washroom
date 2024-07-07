import SearchResult from "../SearchResult/SearchResult";
import "./SearchResultsList.scss";

export default function SearchResultsList({ results }) {
	return (
		<section className="results-list">
			{results.map((result, id) => {
				return <SearchResult result={result} key={id}/>;
			})}
		</section>
	);
}
