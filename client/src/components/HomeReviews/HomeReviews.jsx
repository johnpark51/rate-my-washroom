import Star from "../Star/Star";
import "./HomeReviews.scss";

export default function HomeReviews({ review }) {
	const { name, content, rating } = review;
	return (
		<>
			<h3>{name}</h3>
			<p>{content}</p>
			<Star rating={rating}/>
		</>
	);
}
