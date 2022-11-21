import { Link as GatsbyLink } from "gatsby"
import React from "react";
import { Box } from '@primer/react';

import styled from 'styled-components';

const StyledGatsbyLink = styled(GatsbyLink)`
    font-family: "Montserrat";
    font-size: 20px;
    color: #FFFFFF;
    text-decoration: none;
    font-weight: 400;
    background-color: #811414;
    min-width: 300px;
    text-align: center;
    padding: 16px 0;
    border-radius: 30px;
    :hover {
        background-color: #5a0707;
    }
`;

const StyledButton = styled(Box)`
    font-family: "Montserrat";
    font-size: 20px;
    color: #FFFFFF;
    text-decoration: none;
    font-weight: 400;
    background-color: #811414;
    min-width: 300px;
    text-align: center;
    padding: 16px 0;
    border-radius: 30px;
    cursor: pointer;
    :hover {
        background-color: #5a0707;
    }
`;

type Props = {
    children: string,
    to?: string,
    onClick?: () => void;
    className?: string;
}

export const Button = ({ children, to, onClick, className }: Props) => (
    <Box className={className} display='flex' justifyContent='center'>
        {to ?
            <StyledGatsbyLink to={to}>
                {children}
            </StyledGatsbyLink> :
            <StyledButton onClick={onClick}>
                {children}
            </StyledButton>
        }
    </Box>
);