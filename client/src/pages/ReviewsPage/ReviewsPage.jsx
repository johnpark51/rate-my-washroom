import "./ReviewsPage.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WashroomReviews from "../../components/WashroomReviews/WashroomReviews"
import axios from "axios";

export default function ReviewsPage() {
	const [reviews, setReviews] = useState([]);

	const baseURL = import.meta.env.VITE_API_URL;

	const getReviews = async () => {
		try {
			const response = await axios.get(`${baseURL}/api/reviews`);
			setReviews(response.data);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		getReviews();
	}, []);

	if (!reviews) {
		return <p>Loading...</p>;
	}
	return (
		<main className="reviews-page__main">
			<h2 className="reviews-page__header">Full Review List</h2>
			{reviews.map((review) => {
				return (
					<Link
						className="links"
						key={review.id}
						to={`/reviews`}>
						<WashroomReviews key={review.id} review={review} />
					</Link>
				);
			})}
		</main>
	);
}