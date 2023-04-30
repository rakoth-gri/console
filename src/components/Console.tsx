import { ChangeEventHandler, useState, useCallback } from "react";
import styled, { css } from "styled-components";
// компоненты
import { Button, Container, ConsoleFieldInput, SpanIcon } from "../global/global";
// контекст
import { getCurrentContext } from "../context/context";
import { ICurrentContext } from "../types";
// consts
import { DEL_ICON, BG_NONE } from "../constants/constants";

const ConsoleTextArea = styled.textarea.attrs(({ ...attrs }) => ({ ...attrs }))`
	width: 100%;
	font-weight: 700;
	${({ theme }) => css`
		color: ${theme.colors.success};
		background-color: ${theme.colors.dark};
		font-family: ${theme.fontFamily.roboto};
		padding: ${theme.padding.xs};
		z-index: ${theme.zIndex.md};
		height: 3rem;
		white-space: nowrap;
		overflow: hidden;
	`};

	&:focus {
		outline: 2px solid #16a34a;
	}
`;

const ConsoleField = styled.section`
	${({ theme }) => css`
		width: 100%;
		color: ${theme.colors.success};
		background-color: ${theme.colors.dark};
		font-family: ${theme.fontFamily.roboto};
		padding: 0px ${theme.padding.xs};
		height: 55vh;
		overflow: auto;
	`};
`;

export const Console = () => {
	const { addRecord, state, clearAllRecords } = getCurrentContext() as ICurrentContext;

	const [textAreaValue, setTextAreaValue] = useState("");

	const isDisabled = () => !textAreaValue;

	const textHandler = useCallback(
		(textAreaValue: string): void => {
			addRecord({ command: textAreaValue, id: Date.now() });
			setTextAreaValue("");
		},
		[state]
	);

	return (
		<Container direction="column" style={BG_NONE}>
			<SpanIcon
				className="material-symbols-outlined"
				fontSize="2rem"
				onClick={() => setTextAreaValue("")}
				style={DEL_ICON}
			>
				backspace
			</SpanIcon>
			<ConsoleTextArea
				placeholder={"Enter CLI command..."}
				name="textarea"
				onChange={(e) => setTextAreaValue(e.target.value)}
				value={textAreaValue}
				onKeyDown={(e) => {
					if (e.code === "Enter") {
						addRecord({ command: textAreaValue, id: Date.now() });
						setTextAreaValue("");
					}
				}}
			/>
			<ConsoleField>
				{state.map(({ command, id }) => (
					<ConsoleFieldInput readOnly value={command} key={id} />
				))}
			</ConsoleField>
			<Container block={true} style={{ background: "#262626", width: "100%" }}>
				<Button color="red" onClick={() => clearAllRecords()}>
					{" "}
					clear all{" "}
				</Button>
				<Button disabled={isDisabled()} onClick={() => textHandler(textAreaValue)}>
					add
				</Button>
			</Container>
		</Container>
	);
};
