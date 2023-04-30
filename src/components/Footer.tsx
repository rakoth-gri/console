import styled from "styled-components";
// custom components
import { Container} from "../global/global";

const Li = styled.li`
    ${({theme}) => `margin-right: ${theme.padding.sm}`};
    font-size: inherit
`;

export const Footer = () => {
  return (
    <footer>
        <Container direction="column">
        <strong> This is our Footer </strong>
        <strong> All rights ... Footer </strong>
        </Container>
    </footer>
    
  );
};
