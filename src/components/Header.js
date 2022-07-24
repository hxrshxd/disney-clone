import styled from 'styled-components';

const Header = (props) => {
	return (
		<Nav>
			<Logo>
				<img src='./images/logo.svg' alt='Disney+' />
			</Logo>
			<NavMenu>
				<a href='/home'>
					<img src='/images/home-icon.svg' alt='home' />
					<span>HOME</span>
				</a>
				<a href='/search'>
					<img src='/images/search-icon.svg' alt='search' />
					<span>SEARCH</span>
				</a>
				<a href='/watchlist'>
					<img src='/images/watchlist-icon.svg' alt='watchlist' />
					<span>WATCHLIST</span>
				</a>
				<a href='/originals'>
					<img src='/images/original-icon.svg' alt='originals' />
					<span>ORIGINALS</span>
				</a>
				<a href='/movie'>
					<img src='/images/movie-icon.svg' alt='movie' />
					<span>MOVIE</span>
				</a>
				<a href='/series'>
					<img src='/images/series-icon.svg' alt='series' />
					<span>SERIES</span>
				</a>
			</NavMenu>
			<Login>Login</Login>
		</Nav>
	)
}

const Nav = styled.nav`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	background-color: #090b13;
	letter-spacing: 16px;
	height: 70px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 36px;
	z-index: 3;
`;

const Logo = styled.a`
	width: 80px;
	margin-top: 4px;
	max-height: 70px;
	display: inline-block;
	padding: 0;


	img {
		display: block;
		width: 100%;
	}
`;

const NavMenu = styled.div`
	display: flex;
	margin: 0;
	margin-right: auto;
	margin-left: 25px;
	align-items: center;
	justify-content: flex-end;
	padding: 0;
	flex-flow: row nowrap;
	position: relative;

	a {
		display: flex;
		align-items: center;
		padding: 0 12px;

		img {
			height: 20px;
			min-width: 20px;
			width: 20px;
		}

		span {
			font-size: 13px;
			padding: 2px 0 0 4px;
			position: relative;
			white-space: nowrap;
			letter-spacing: 1.48px;
			line-height: 1.27;
			color: rgb(249, 249, 249);

			&:before {
				background-color: rgb(249, 249, 249);
				content: "";
				bottom: -6px;
				left: 0;
				right: 0;
				position: absolute;
				border-radius: 0 0 4px 4px;
				transform-origin: left center;
				transform: scaleX(0);
				height: 2px;
				width: auto;
				transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
				visibility: hidden;
				opacity: 0;
			}
		}

		&:hover {
			span:before {
				transform: scaleX(1);
				visibility: visible;
				opacity: 1;
			}
		}
	}

	@media (max-width: 786px) {
		display: none;
	}
`;

const Login = styled.a`
	background-color: rgba(0,0,0,0.6);
	padding: 8px 16px;
	letter-spacing: 1.48px;
	text-transform: uppercase;
	border: 1px solid #f9f9f9;
	border-radius: 6px;
	transition: all 0.2s ease 0s;

	&:hover {
		background-color: #f9f9f9;
		color: #000;
	}
`;
export default Header