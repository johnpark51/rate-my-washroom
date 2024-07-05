import "./WashroomPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Star from "../../components/Star/Star";
import NewStar from "../../components/NewStar/NewStar";

export default function WashroomPage() {
	const [washroomDetails, setWashroomDetails] = useState(null);
	const [reviews, setReviews] = useState(null);
	const { washroomId } = useParams();

	const baseURL = import.meta.env.VITE_API_URL;

	const getWashroomDetails = async () => {
		try {
			const response = await axios.get(
				`${baseURL}/api/washrooms/${washroomId}`
			);
			setWashroomDetails(response.data);
		} catch (error) {
			console.error(error);
		}
	};
	const getWashroomReviews = async () => {
		try {
			const response = await axios.get(
				`${baseURL}/api/washrooms/${washroomId}/reviews`
			);
			setReviews(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	// {
	//     "id": 0,
	//     "name": "emploleon124",
	//     "content": "hello world",
	//     "washroom_id": 1,
	//     "timestamp": "2024-01-02 12:45:00",
	//     "rating": 2
	//   }

	const postReview = async (e) => {
		try {
			// e.preventDefault();
			const date = new Date();
			const year = date.getFullYear();
			const month = String(date.getMonth() + 1).padStart(2, "0"); // January is 0
			const day = String(date.getDate()).padStart(2, "0");
			const hours = String(date.getHours()).padStart(2, "0");
			const minutes = String(date.getMinutes()).padStart(2, "0");
			const seconds = String(date.getSeconds()).padStart(2, "0");

			const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

			const newReview = {
				id: 0,
				name: e.target.name.value,
				content: e.target.content.value,
				washroom_id: washroomDetails.id,
				timestamp: formattedDate,
				rating: e.target.rating.value,
			};
            axios.post(`${baseURL}/api/reviews`, newReview)
            console.log(newReview)
		} catch (error) {}
	};
	useEffect(() => {
		getWashroomDetails();
		getWashroomReviews();
	}, []);

	if (!washroomDetails || !reviews) {
		return <p>Loading...</p>;
	}
	const { address, public_access } = washroomDetails;
	// console.log(washroomDetails.id);

	return (
		<>
			<h1>{address}</h1>
			{public_access && <p>Impaired individuals can use</p>}
			<form onSubmit={postReview}>
				<label>
					name
					<input type="text" name="name"></input>
				</label>
				<label>
					content
					<input type="textarea" name="content"></input>
				</label>
				<NewStar />
				<button type="submit">Submit</button>
			</form>

			{reviews.reviews.map((review) => {
				return (
					<>
						<h3>{review.name}</h3>
						<p>{review.content}</p>
						<Star rating={review.rating} />
					</>
				);
			})}
		</>
	);
}
