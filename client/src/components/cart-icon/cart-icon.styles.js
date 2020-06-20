import styled from 'styled-components';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
	position: relative;
	top: -2px;
	display: flex;
	align-items: center;
	justify-content: center;
	/* width: 45px;
	height: 45px; */
	cursor: pointer;
`;

export const CartIconStyles = styled(ShoppingIcon)`
	width: 24px;
	height: 24px;
`;

export const ItemCount = styled.span`
	position: absolute;
	font-size: 10px;
	font-weight: bold;
	bottom: 2px;
`;
