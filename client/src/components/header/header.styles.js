import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;

	@media screen and (max-width: 800px) {
		padding: 0px;
		margin-bottom: 20px;
		height: 60px;
	}
`;

export const LogoContainer = styled(Link)`
	padding: 10px 0;
	width: 70px;
	height: 100%;

	@media screen and (max-width: 800px) {
		padding: 0px;
		padding-top: 5px;
		width: 50px;
	}
`;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media screen and (max-width: 800px) {
		width: 80%;
		font-size: 16px;
	}
`;

export const OptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;

	@media screen and (max-width: 800px) {
		padding: 10px 10px;
	}
`;
