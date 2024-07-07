import "./About.scss";

function About() {
	return (
		<section className="about">
			<h2 className="about__header">Our Story</h2>
			<div className="about__sections">
				<div className="about__text mobile">
					<h2 className="about__headers text-right">Discover Our Purpose</h2>
					<p className="about__description text-right">
						While working as an Uber Eats driver, I faced challenges finding
						public washrooms that were both accessible and convenient. Rate My
						Washrooms is a website designed to help anyone alleviate the stress
						of finding suitable restroom facilities anywhere. Our goal is to
						meet your needs and improve your daily experience in unfamiliar
						areas.
					</p>
				</div>
				<img
					className="about__img"
					src="http://localhost:8080/images/stock1.jpg"
				/>
				<div className="about__text tablet">
					<h2 className="about__headers text-right">Discover Our Purpose</h2>
					<p className="about__description text-right">
						While working as an Uber Eats driver, I faced challenges finding
						public washrooms that were both accessible and convenient. Rate My
						Washrooms is a website designed to help anyone alleviate the stress
						of finding suitable restroom facilities anywhere. Our goal is to
						meet your needs and improve your daily experience in unfamiliar
						areas.
					</p>
				</div>
			</div>
		</section>
	);
}
export default About;
