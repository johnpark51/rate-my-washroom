import Star from "../Star/Star";
import "./HomeReviews.scss";

export default function HomeReviews({ review }) {
	const { name, content, rating, location, address, timestamp } = review;
	return (
		<section className="home-reviews">
			<h3 className="home-reviews__name">{name}</h3>
			<p className="home-reviews__address">{address}</p>
			<p className="home-reviews__address home-reviews__location">{location}</p>
			<Star rating={rating} className="home-reviews__rating"/>
			<p className="home-reviews__content">{content}</p>
		</section>
	);
}
