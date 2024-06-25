import "./Header.scss";

function Header() {
	return (
		<div id="container">
			<header className="header">
				<h2 className="header__title">Rate My Washroom</h2>
				<nav className="header__right">
					<button className="header__button header__button--signup">Sign up</button>
					<button className="header__button header__button--login">Login</button>
				</nav>
			</header>
		</div>
	);
}

export default Header;
