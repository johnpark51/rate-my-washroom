/* STYLES */
import "./Footer.scss";

/* REACT ROUTER */
import { Link } from "react-router-dom";

/* ICONS */
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="footer">
			<Link className="links" to="/">
				<h2 className="footer__header">
					RateMy<span className="logo-blue">Washroom</span>
				</h2>
			</Link>
			<nav className="footer__nav">
				<ul className="footer__ul">
					<Link to="/" className="links">
						<li className="footer__li">Home</li>
					</Link>
					<Link className="links" to="/washrooms">
						<li className="footer__li">Washrooms</li>
					</Link>
					<Link className="links" to="/reviews">
						<li className="footer__li">Reviews</li>
					</Link>
					<Link className="links" to="/about">
						<li className="footer__li">About</li>
					</Link>
				</ul>
			</nav>
			<div className="footer__icons">
				<h3>Follow Me</h3>
				<Link to="https://www.instagram.com/tkddnp/">
					<CiInstagram className="footer__icon" />
				</Link>
				<Link to="https://www.linkedin.com/in/john-parkk/">
					<CiLinkedin className="footer__icon" />
				</Link>
				<Link to="https://github.com/johnpark51?tab=repositories&ocid=AIDcmmli8vlwie_SEM__k_CjwKCAjw3NyxBhBmEiwAyofDYRBONd-u0dQiwFx9PCjeadYD6tOuAhzc9kfaTQbv8TiUDO9Onv9SWxoC-RgQAvD_BwE_k_">
					<FaGithub className="footer__icon" />
				</Link>
			</div>
		</footer>
	);
}
