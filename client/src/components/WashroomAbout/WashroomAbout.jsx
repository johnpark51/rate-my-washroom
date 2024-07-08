import Star from "../Star/Star";
import "./WashroomAbout.scss";
import { MdOutlineCleanHands } from "react-icons/md";
import { FaSquareCheck } from "react-icons/fa6";

export default function WashroomAbout({ washroomDetails, reviews }) {
	const {
		cleanliness,
		address,
		location,
		public_access,
		wheelchair_accessible,
		gender_neutral,
		family_friendly,
		hours,
		type,
	} = washroomDetails;

	return (
		<section className="washroom-about">
			<div className="washroom-about__top">
				<div className="washroom-about__top-left">
					<h2 className="washroom-about__address">{address}</h2>
					<h3 className="washroom-about__location">{location}</h3>
					<div className="washroom-about__rating-section">
						<p className="washroom-about__rating-text">Average Rating: </p>
						<Star
							className="washroom-about__rating-star"
							rating={reviews.averageRating}
						/>
					</div>
					<p className="washroom-about__reviews-length">
						{reviews.reviews.length} Reviews
					</p>
				</div>
				<div className="washroom-about__top-right">
					<button className="washroom-about__button">Write a Review</button>
				</div>
			</div>
			<div className="washroom-about__bottom">
				<div className="washroom-about__bottom-left">
					<div className="washroom-about__criteria">
						<p className="washroom-about__subheading">Cleanliness:</p>
						{/* <MdOutlineCleanHands /> */}
						<Star rating={cleanliness} />
					</div>
					<div className="washroom-about__criteria">
						<p className="washroom-about__subheading">Public Access: </p>
						{public_access ? (
							<FaSquareCheck className="icon-green" />
						) : (
							<FaSquareCheck className="icon-red" />
						)}
					</div>
					<div className="washroom-about__criteria">
						<p className="washroom-about__subheading">Wheelchair Accessible: </p>
						{wheelchair_accessible ? (
							<FaSquareCheck className="icon-green" />
						) : (
							<FaSquareCheck className="icon-red" />
						)}
					</div>
				</div>
				<div className="washroom-about__bottom-right">
					<div className="washroom-about__criteria">
						<p className="washroom-about__subheading">Gender Neutral: </p>
						{gender_neutral ? (
							<FaSquareCheck className="icon-green" />
						) : (
							<FaSquareCheck className="icon-red" />
						)}
					</div>
					<div className="washroom-about__criteria">
						<p className="washroom-about__subheading">Family Friendly: </p>
						{family_friendly ? (
							<FaSquareCheck className="icon-green" />
						) : (
							<FaSquareCheck className="icon-red" />
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
