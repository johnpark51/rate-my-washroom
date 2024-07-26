/* STYLES */
import "./AboutPage.scss";

export default function AboutPage() {
	return (
		<main className="about-page">
			<h2 className="about-page__header">Our Story</h2>
			<p className="about-page__first-para">
				Rate My Washroom is a specialized platform catering to individuals
				struggling to locate suitable washrooms, especially in unfamiliar areas.
				Targeting a diverse user base, including delivery drivers and tourists,
				the website prioritizes a various set of criteria that users can filter
				through, including public accessibliity, handicap accessibility, gender
				neutrality, and cleanliness levels. This website also provides
				coordinates, allowing for a more smooth experience for users to navigate
				to the washroom. Additionally, the platform allows users to contribute
				reviews, sharing insights on their experiences to guide others in making
				informed choices, thus fostering a community-driven approach to washroom
				exploration.
			</p>
			<p className="about-page__second-para">
				Whether users require urgent access or seek long-term solutions for
				their personal comfort, the platform stands poised to enhance their
				experience by simplifying the search for suitable washrooms and
				empowering them with essential information for informed decision-making.
			</p>
		</main>
	);
}
