import "./NewStar.scss";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

export default function NewStar() {
	const [rating, setRating] = useState(null);
	const [hover, setHover] = useState(null);
	return (
		<>
			{[...Array(5)].map((star, index) => {
				const currentRating = index + 1;
				return (
					<label>
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
							color={currentRating <= (hover || rating) ? "ffc107" : "#e4e5e9"}
							onMouseEnter={() => setHover(currentRating)}
							onMouseLeave={() => setHover(null)}
						/>
					</label>
				);
			})}
			<p>Your rating is {rating}</p>
		</>
	);
};
