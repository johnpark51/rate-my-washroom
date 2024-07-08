import Star from "../Star/Star";
import "./WashroomReviews.scss";

export default function WashroomReviews({ review, formattedDate }) {
	const { name, content, rating } = review;
	return (
		<section className="washroom-review">
			<div className="washroom-review__left">
				<h3>{name}</h3>
				<div className="washroom-review__rating">
					<p>Rating:</p>
                    <Star rating={rating}/>
				</div>
				<p className="washroom-review__content">{content}</p>
			</div>
            <p className="washroom-review__date">{formattedDate}</p>
		</section>
	);
}
