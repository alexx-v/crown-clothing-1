import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button';

export const ItemContainer = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;

	&:hover {
		.image {
			opacity: 0.8;
		}

		button {
			display: block;
		}
	}

	@media screen and (max-width: 800px) {
		/* width: 40vw; */
		&:hover {
			.image {
				opacity: unset;
			}

			button {
				opacity: unset;
			}
		}
	}
`;

export const BackgroundImage = styled.div`
	width: 100%;
	height: 95%;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
`;

export const FooterContainer = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const FooterName = styled.span`
	width: 90%;
	margin-bottom: 15px;
`;

export const FooterPrice = styled.span`
	width: 10%;
	text-align: right;
`;

export const AddButton = styled(CustomButton)`
	display: none;
	position: absolute;
	top: 255px;
	width: 80%;
	opacity: 0.7;

	@media screen and (max-width: 800px) {
		display: block;
		padding: 0 10px;
		opacity: 0.9;
		min-width: unset;
	}
`;
