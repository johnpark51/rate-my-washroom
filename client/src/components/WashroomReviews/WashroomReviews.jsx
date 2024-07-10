/* STYLES */
import "./WashroomReviews.scss";

/* COMPONENTS */
import Star from "../Star/Star";

export default function WashroomReviews({ review, formattedDate }) {
	const { name, content, rating } = review;
	
	if (!review) {
		return <p>Loading...</p>
	}
	return (
		<section className="washroom-review">
			<div className="washroom-review__left">
				<h3>{name}</h3>
				<div className="washroom-review__rating">
					<p className="washroom-review__rating-header">Rating:</p>
                    <Star rating={rating}/>
				</div>
				<p className="washroom-review__content">{content}</p>
			</div>
            <p className="washroom-review__date">{formattedDate}</p>
		</section>
	);
}
