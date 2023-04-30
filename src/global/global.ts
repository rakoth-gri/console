import styled, { createGlobalStyle, css } from "styled-components";
import ML from "../fonts/Montserrat-Light.ttf";
import MR from "../fonts/Montserrat-Regular.ttf";
import MB from "../fonts/Montserrat-Bold.ttf";
import RL from "../fonts/Roboto-Light.ttf";
import RR from "../fonts/Roboto-Regular.ttf";
import RB from "../fonts/Roboto-Bold.ttf";

const GlobalStyle = createGlobalStyle`

    /* fonts **********************/
    @font-face {
        font-family: "Roboto";
        src: url(${RL}) format('truetype');
        font-style: normal;
        font-weight: 300;
    }
    @font-face {
        font-family: "Roboto";
        src: url(${RR}) format('truetype');
        font-style: normal;
        font-weight: 300;
    }
    @font-face {
        font-family: "Roboto";
        src: url(${RB}) format('truetype');
        font-style: normal;
        font-weight: 300;
    }

    @font-face {
        font-family: "Montserrat";
        src: url(${ML}) format('truetype');
        font-style: normal;
        font-weight: 300;
    }
    @font-face {
        font-family: "Montserrat";
        src: url(${MR}) format('truetype');
        font-style: normal;
        font-weight: 300;
    }
    @font-face {
        font-family: "Montserrat";
        src: url(${MB}) format('truetype');
        font-style: normal;
        font-weight: 300;
    }


    h1,h2,h3,h4,h5,h6 {
        text-align: center;
    }


    *, *::before, *::after {
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;
    }

    a {
        text-decoration: none;
        color: inherit;
        font-size: inherit;
        display: inline-block;
        cursor: pointer;
    }

    input, select, button, textarea {
        border: none;
        background-color: transparent;
        color: inherit;
        font-size: inherit;
        font-family: inherit;
        resize: none;
        letter-spacing: 0.5px;
    }

    input::placeholder, select::placeholder {
        color: inherit;
        font-size: inherit;
        opacity: .8
    }

    ul {
        list-style-type: none;
        list-style-position: inside;
    }

    .material-symbols-outline {}

`;

export default GlobalStyle;

interface ITitle {
	color?: string;
}

// Заголовок
export const Title = styled.h1<ITitle>`
	font-family: "Montserrat";
	color: ${({ color }) => color && "green"};
	font-size: ${({ theme }) => theme.fontSize.lg};
	margin: ${({ theme }) => theme.padding.sm};
	text-transform: capitalize;
	font-variant: small-caps;
`;

// header footer ....
export const Container = styled.div<{
	direction?: string;
	fontSize?: string;
	block?: boolean;
}>`
	${({ theme, direction, fontSize, block }) => css`
		padding: ${theme.padding.sm};
		font-family: ${theme.fontFamily.roboto};
		font-size: ${fontSize || theme.fontSize.md};
		display: ${block ? "block" : "flex"};
		align-items: center;
		flex-direction: ${direction || "row"};
		justify-content: space-between;
		background-color: ${theme.colors.element};
		text-align: right;
		min-height: 5vh;
		position: relative;
	`};
`;

// универсальный список
export const Ul = styled.ul<{ direction?: string }>`
	display: flex;
	flex-direction: ${({ direction }) => direction || "row"};
	align-items: center;
	justify-content: ${({ direction }) => (direction ? "space-between" : "center")};
	padding: ${({ theme }) => theme.padding.sm};
`;

// компонент иконок
export const SpanIcon = styled.span<{ color?: string; fontSize?: string }>`
	${({ color, theme, fontSize }) => css`
		color: ${color || theme.colors.danger};
		font-size: ${fontSize || theme.colors.danger};
		cursor: pointer;
	`}

	&:hover {
		${({ theme }) => `color: ${theme.colors.light}`};
	}
`;

export const Main = styled.main`
	padding: ${({ theme }) => theme.padding.sm};
	height: 80vh;
	font-family: ${({ theme }) => theme.fontFamily.roboto};
`;

// UI-components
export const Button = styled.button.attrs(({ disabled }) => ({
	disabled,
}))<{ disabled?: boolean; align?: string; color?: string }>`
	border-radius: ${({ theme }) => theme.borderRadius.md};
	padding: ${({ theme }) => theme.padding.xs};
	margin-left: auto;
	background-color: ${({ theme, color }) => color || theme.colors.success};
	width: auto;
	opacity: ${({ disabled }) => disabled && "0.3"};
	margin-right: ${({ theme }) => theme.padding.sm};
	cursor: pointer;
	text-transform: capitalize;
	font-variant: small-caps;

	&:hover {
		${({ theme }) => `color: ${theme.colors.light}`};
	}
`;

export const ConsoleFieldInput = styled.input.attrs(({ ...attrs }) => ({ ...attrs }))`
	display: block;
	width: 100%;
	background: transparent;
	height: 2.5rem;
	padding: ${({ theme }) => `${theme.padding.xs} 0px`};
	outline: none;
`;
