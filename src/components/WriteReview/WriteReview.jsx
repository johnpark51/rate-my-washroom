/* STYLES */
import "./WriteReview.scss";

/* COMPONENTS */
import NewStar from "../NewStar/NewStar";

export default function WriteReview({ postReview, writeReview }) {
	if (!writeReview) {
		return null;
	}

	return (
		<form className="write-review__form fade-in" onSubmit={postReview}>
			<h2>Write a Review for your Peers</h2>
			<div className="write-review__section">
				<label className="write-review__labels">Name:</label>
				<input
					placeholder="Write your name here"
					type="text"
					name="name"
					className="write-review__text"></input>
			</div>
			<div className="write-review__section">
				<label className="write-review__labels">Content:</label>
				<input
					placeholder="Write your comment here"
					type="textarea"
					name="content"
					className="write-review__textarea"></input>
			</div>
			<div className="write-review__star">
				<NewStar className="write-review__star" />
			</div>
			<button type="submit" className="button write-review__submit">
				Submit
			</button>
		</form>
	);
}
