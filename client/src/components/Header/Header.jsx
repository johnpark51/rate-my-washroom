import "./Header.scss";

import { Link } from "react-router-dom"

function Header() {
	return (
		<div id="container">
			<header className="header">
				<Link className="links" to="/"><h1 className="header__title">RateMy<span className="header__washroom">Washroom</span></h1></Link>
				<nav className="header__right">
					<button className="button button--login">Login</button>
					<button className="button button--signup">Sign up</button>
				</nav>
			</header>
		</div>
	);
}

export default Header;
