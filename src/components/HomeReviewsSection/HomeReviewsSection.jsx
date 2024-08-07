/* STYLES */
import "./HomeReviewsSection.scss";

/* COMPONENTS */
import HomeReviews from "../HomeReviews/HomeReviews";

export default function HomeReviewsSection({ reviews }) {
	return (
		<section className="reviews-section">
			<div className="reviews-section__left">
				<h2 className="reviews-section__header">Write a Review</h2>
				<p className="reviews-section__description">
					With direct inspiration from RateMyProf, we want to provide a platform
					where you can share your honest review of a restroom you've used to
					enhance the experience for others, or steer users away from a restroom
					to benefit the community.
				</p>
			</div>
			<div className="reviews-section__right">
				{reviews.map((review, index) => {
					return <HomeReviews key={index} review={review} />;
				})}
			</div>
		</section>
	);
}
