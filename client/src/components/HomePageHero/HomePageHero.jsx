import "./HomePageHero.scss";
// import { washroom } from "../../assets/images/washroom.jpg"

function HomePageHero() {
	return (
		<div id="container">
			<section className="hero">
				<div className="hero__overlay">
					<h1 className="hero__header">Find the right <span className="hero__washroom">washroom</span> for you</h1>
					<input placeholder="Search your area or scroll below" className="hero__input"></input>
                    <div className="hero__location-section">
                        <p>hello world</p>
                    </div>
				</div>
			</section>
		</div>
	);
}

export default HomePageHero;
