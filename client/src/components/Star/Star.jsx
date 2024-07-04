import "./Star.scss";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

export default function Star({ rating }) {
	return (
		<>
			{[...Array(5)].map((star, index) => {
				const currentRating = index + 1;
				return (
					<>
						<label>
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
					</>
				);
			})}
		</>
	);
}
