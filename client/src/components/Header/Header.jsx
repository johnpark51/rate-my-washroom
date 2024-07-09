/* STYLES */
import "./Header.scss";

/* REACT ROUTER */
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="header">
			<Link className="links" to="/">
				<h1 className="header__title">
					RateMy<span className="logo-blue">Washroom</span>
				</h1>
			</Link>
			<nav className="header__right">
				<Link className="links" to="/about">
					<button className="button button--white header__button">About</button>
				</Link>
				<Link className="links" to="/">
					<button className="button button--blue header__button">Home</button>
				</Link>
			</nav>
		</header>
	);
}
