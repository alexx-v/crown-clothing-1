import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	/* margin-bottom: 30px; */

	/* @media screen and (max-width: 800px) {
		align-items: center;
	} */
`;

export const TitleContainer = styled.div`
	margin-bottom: 29.2px;

	button {
		padding: 0;
		font-size: 28px;
		font-family: inherit;
		font-weight: bold;
		background-color: transparent;
		border: none;
		cursor: pointer;

		&:hover {
			color: grey;
		}
	}
`;

export const PreviewContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 20px;
	/* display: flex;
	justify-content: space-between; */

	& > div {
		margin-bottom: 30px;
	}

	@media screen and (max-width: 800px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 10px;
	}
`;
