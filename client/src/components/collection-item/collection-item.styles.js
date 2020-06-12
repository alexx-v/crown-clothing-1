import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button';

export const ItemContainer = styled.div`
	position: relative;
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
`;

export const BackgroundImage = styled.div`
	width: 100%;
	height: 95%;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;

	${ItemContainer}:hover & {
		opacity: 0.8;
	}
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

	${ItemContainer}:hover & {
		display: flex;
		opacity: 0.85;
	}
`;
