import "./HomeReviews.scss";

export default function HomeReviews({ review }) {
	const { name, content, rating } = review;
	return (
		<>
			<h3>{name}</h3>
			<h3>{content}</h3>
			<h3>{rating}</h3>
		</>
	);
}
