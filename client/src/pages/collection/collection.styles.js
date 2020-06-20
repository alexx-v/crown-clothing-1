import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const TitleContainer = styled.h2`
	margin: 0 auto 30px;
	font-size: 28px;
`;

export const ItemsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 20px;

	& > div {
		margin-bottom: 30px;
	}

	@media screen and (max-width: 800px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 10px;
	}
`;
