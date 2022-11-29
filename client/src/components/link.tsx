import { Link as GatsbyLink } from "gatsby"
import React from "react";

import styled from 'styled-components';

const StyledGatsbyLink = styled(GatsbyLink) <{ fontSize?: string, color?: string, disableHover: boolean }>`
    font-family: "Montserrat";
    font-size: ${props => props.fontSize ? props.fontSize : '14px'};
    color: ${props => props.color ? props.color : '#181818'};
    text-decoration: none;
    font-weight: 400;
    ${props => props.disableHover ? '' : `
        :hover {
            color: #000000;
            text-decoration: underline;
        }
    `};
`

type Props = {
    children: string,
    to: string,
    fontSize?: string,
    color?: string,
    disableHover?: boolean
}

export const Link = ({ children, to, fontSize, color, disableHover = false }: Props) => (
    <StyledGatsbyLink to={to} fontSize={fontSize} color={color} disableHover={disableHover}>
        {children}
    </StyledGatsbyLink>
);