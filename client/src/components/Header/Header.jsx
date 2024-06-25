import "./Header.scss";

function Header() {
	return (
		<div id="container">
			<header className="header">
				<h2 className="header__title">RateMy<span className="header__washroom">Washroom</span></h2>
				<nav className="header__right">
					<button className="button button--login">Login</button>
					<button className="button button--signup">Sign up</button>
				</nav>
			</header>
		</div>
	);
}

export default Header;
