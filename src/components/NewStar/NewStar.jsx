/* STYLES */
import "./NewStar.scss";

/* ICONS */
import { FaStar } from "react-icons/fa";

/* FUNCTIONALITY */
import { useState } from "react";

export default function NewStar() {
	const [rating, setRating] = useState(null);
	const [hover, setHover] = useState(null);

	return (
		<>
			<p className="rating-text">Rating {rating}/5 stars: </p>
			{[...Array(5)].map((star, index) => {
				const currentRating = index + 1;
				return (
					<label className="rating-star">
						<input
							type="radio"
							name="rating"
							className="star-input"
							value={currentRating}
							onClick={() => setRating(currentRating)}
						/>
						<FaStar
							className="star"
							size={50}
							color={currentRating <= (hover || rating) ? "#1bc2f8" : "#e4e5e9"}
							onMouseEnter={() => setHover(currentRating)}
							onMouseLeave={() => setHover(null)}
						/>
					</label>
				);
			})}
		</>
	);
}
