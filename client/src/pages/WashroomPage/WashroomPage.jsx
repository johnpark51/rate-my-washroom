import "./WashroomPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Star from "../../components/Star/Star";
import NewStar from "../../components/NewStar/NewStar";

export default function WashroomPage() {
	const [washroomDetails, setWashroomDetails] = useState(null);
	const [reviews, setReviews] = useState(null);
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
	const { cleanliness, address, public_access, wheelchair_accessible, gender_neutral, family_friendly, averageRating } = washroomDetails;
    console.log(washroomDetails)

	return (
		<>
			<button onClick={() => navigate(-1)}>go back</button>
			<h1>{address}</h1>
			{wheelchair_accessible ? (
				<p className="demo-green">Impaired individuals can use</p>
			) : (
				<p className="demo-red">Impaired individuals cannot use</p>
			)}
			{public_access ? (
				<p className="demo-green">Publicly Accessible</p>
			) : (
				<p className="demo-red">Publicly Accessible</p>
			)}
			{gender_neutral ? (
				<p className="demo-green">Gender Neutral</p>
			) : (
				<p className="demo-red">Gender Neutral</p>
			)}
			{family_friendly ? (
				<p className="demo-green">Family Friendly - diaper changing spot</p>
			) : (
				<p className="demo-red">Family Friendly - diaper changing spot</p>
			)}
            <h3>This washroom has an average rating of <Star rating={reviews.averageRating}/></h3>
            
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
