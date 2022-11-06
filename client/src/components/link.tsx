import { Link as GatsbyLink } from "gatsby"
import React from "react";

import styled from 'styled-components';

const StyledGatsbyLink = styled(GatsbyLink)`
    font-family: "Montserrat";
    font-size: 14px;
    color: #181818;
    text-decoration: none;
    font-weight: 400;
    :hover {
        color: #000000;
        text-decoration: underline;
    }
`

type Props = {
    children: string,
    to: string,
}

export const Link = ({ children, to }: Props) => (
    <StyledGatsbyLink to={to}>
        {children}
    </StyledGatsbyLink>
);