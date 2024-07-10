/* ICONS */
import { FaStar } from "react-icons/fa";

export default function Star({ rating }) {
	if (!rating) {
		return <h3>This washroom has no ratings</h3>;
	}

	return (
		<>
			{[...Array(5)].map((star, index) => {
				const currentRating = index + 1;
				return (
					<label key={index}>
						<input
							className="star-input"
							type="radio"
							name="rating"
							value={currentRating}
						/>
						<FaStar
							className="star"
							size={50}
							color={currentRating <= rating ? "ffc107" : "#e4e5e9"}
						/>
					</label>
				);
			})}
		</>
	);
}
