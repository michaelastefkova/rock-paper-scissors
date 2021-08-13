import styled from 'styled-components';

const Wrapper = styled.section`
	width: auto;
	height: auto;
	#contains-result {
		padding: 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	#contains-result div {
		display: flex;
		flex-direction: column;
	}
	#contains-result #contains-result-player,
	#contains-result #contains-result-machine {
		width: auto;
		height: auto;
		padding: 1rem 0;
	}
	#contains-result .contains-result-buttons {
		width: 15rem;
		height: 15rem;
		position: relative;
		z-index: 9;
		transition: all 2s linear;
	}
	#contains-result h3 {
		position: relative;
		z-index: 9;
		margin-bottom: 1.4rem;
		font-size: 1.8rem;
		color: #fff;
		text-align: center;
		text-transform: uppercase;
	}
	#contains-result .display-result {
		opacity: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 4rem;
		position: relative;
		z-index: 8;
		transition: all 0.8s ease-in-out;
	}
	#contains-result .active {
		z-index: 9;
		opacity: 1;
	}
	#contains-result .display-result h1 {
		margin-bottom: 1.4rem;
		font-size: 4.5rem;
		color: #fff;
		text-transform: uppercase;
	}
	#contains-result .display-result button {
		padding: 1.2rem 4rem;
		background: linear-gradient(
			to bottom,
			rgb(252, 252, 252),
			rgb(245, 245, 245)
		);
		border-radius: 0.6rem;
		font-size: 1.2rem;
		font-weight: 600;
		letter-spacing: 0.2rem;
		color: #dc2e4e;
		text-transform: uppercase;
	}
	.win {
		border-radius: 50%;
		box-shadow: 0px 0px 0px 50px #2b3b5a, 0px 0px 0px 100px #263554,
			0px 0px 0px 150px #21304f;
		width: auto;
		height: auto;
		z-index: 7 !important;
	}
	@media (max-width: 620px) {
		width: 100%;
		height: 100%;
		#contains-result {
			position: relative;
			height: 100%;
			justify-content: center;
			align-items: normal;
		}
		#contains-result #contains-result-player {
			margin-right: 4rem;
		}
		#contains-result .display-result {
			position: absolute;
			top: 65%;
			left: auto;
		}
		#contains-result .display-result h1 {
			font-size: 2.5rem;
		}
		.win {
			box-shadow: 0px 0px 0px 15px #2b3b5a, 0px 0px 0px 30px #263554,
				0px 0px 0px 45px #21304f;
		}
	}
	@media (max-height: 630px) {
		.win {
			box-shadow: 0px 0px 0px 15px #2b3b5a, 0px 0px 0px 30px #263554,
				0px 0px 0px 45px #21304f;
		}
	}
	@media (max-width: 375px) {
		#contains-result .contains-result-buttons {
			width: 12rem;
			height: 12rem;
		}
		#contains-result h3 {
			font-size: 1.5rem;
		}
	}
`;

export { Wrapper };
