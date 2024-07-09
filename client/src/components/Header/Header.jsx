import "./Header.scss";

import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="header">
			<Link className="links" to="/">
				<h1 className="header__title">
					RateMy<span className="header__washroom">Washroom</span>
				</h1>
			</Link>
			<nav className="header__right">
				{/* <Link className="links" to="/about"> */}
					<button className="button button--login">Login</button>
				{/* </Link> */}
				{/* <Link className="links" to="/"> */}
					<button className="button button--signup">Sign Up</button>
				{/* </Link> */}
			</nav>
		</header>
	);
}

export default Header;
