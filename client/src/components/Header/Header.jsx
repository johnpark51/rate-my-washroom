import "./Header.scss";

function Header() {
	return (
		<header className="header">
			<h2 className="header__title">Rate My Washroom</h2>
			<nav className="header__right">
				<button className="header__button">Sign up</button>
				<button className="header__button">Login</button>
			</nav>
		</header>
	);
}

export default Header;
