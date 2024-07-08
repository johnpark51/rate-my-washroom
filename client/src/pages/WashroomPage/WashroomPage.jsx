import "./WashroomPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Star from "../../components/Star/Star";
import NewStar from "../../components/NewStar/NewStar";
import WashroomAbout from "../../components/WashroomAbout/WashroomAbout";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function WashroomPage() {
	const [washroomDetails, setWashroomDetails] = useState(null);
	const [reviews, setReviews] = useState(null);
	const [writeReview, setWriteReview] = useState(false)
	const { washroomId } = useParams();
	const navigate = useNavigate();

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

	const postReview = async (e) => {
		try {
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
			axios.post(`${baseURL}/api/reviews`, newReview);
		} catch (error) {}
	};
	useEffect(() => {
		getWashroomDetails();
		getWashroomReviews();
	}, []);

	if (!washroomDetails || !reviews) {
		return <p>Loading...</p>;
	}

	return (
		<main className="washroom-page__main">
			<button className="washroom-page__back" onClick={() => navigate(-1)}><IoIosArrowRoundBack />Go Back</button>
			<WashroomAbout washroomDetails={washroomDetails} reviews={reviews} setWriteReview={setWriteReview}/>
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
				const date = new Date(review.timestamp);
				const options = {
					year: "numeric",
					month: "short",
					day: "numeric",
				};
				const formattedDate = date.toLocaleDateString("en-US", options);
				return (
					<section className="washroom-reviews">
						<h3>{review.name}</h3>
						<p>{formattedDate}</p>
						<Star rating={review.rating} />
						<p>{review.content}</p>
					</section>
				);
			})}
		</main>
	);
}
