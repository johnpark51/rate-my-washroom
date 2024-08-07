/* STYLES */
import "./WashroomAbout.scss";

/* COMPONENTS */
import Star from "../Star/Star";

/* ICONS */
import { FaSquareCheck } from "react-icons/fa6";
import { RiPencilFill } from "react-icons/ri";

export default function WashroomAbout({
	washroomDetails,
	reviews,
	setWriteReview,
}) {
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
		lat,
		lng,
		sample,
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
					<button
						className="button washroom-about__button"
						onClick={() => {
							setWriteReview(true);
						}}>
						Write a Review
						<RiPencilFill />
					</button>
					{sample ? (
						<p className="sample-green">Sample Washroom</p>
					) : (
						<p className="sample-red">Sample Washroom</p>
					)}
					{/* <h4 className="washroom-about__type">{type}</h4> */}
				</div>
			</div>
			<div className="washroom-about__bottom">
				<div className="washroom-about__bottom-left">
					<div className="washroom-about__criteria">
						<p className="washroom-about__subheading">Cleanliness:</p>
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
						<p className="washroom-about__subheading">
							Wheelchair Accessible:{" "}
						</p>
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
					<div className="washroom-about__criteria">
						<p className="washroom-about__subheading">Hours:</p>
						<p>{hours}</p>
					</div>
				</div>
				<div className="washroom-about__coordinates">
					<div className="washroom-about__criteria washroom-about__criteria--coordinates">
						<p className="washroom-about__subheading washroom-about__subheading--coordinates">
							Latitude
						</p>
						<p>{lat}</p>
					</div>
					<div className="washroom-about__criteria washroom-about__criteria--coordinates">
						<p className="washroom-about__subheading washroom-about__subheading--coordinates">
							Longitude
						</p>
						<p>{lng}</p>
					</div>
					<div className="washroom-about__criteria washroom-about__criteria--coordinates">
						<p className="washroom-about__subheading washroom-about__subheading--coordinates">Type</p>
						{/* {sample ? (
							<p className="sample-green">Sample Washroom</p>
						) : (
							<p className="sample-red">Sample Washroom</p>
						)} */}
						<h4 className="washroom-about__type">{type}</h4>
					</div>
				</div>
			</div>
		</section>
	);
}
