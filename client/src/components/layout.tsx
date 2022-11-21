import React from "react";
import { Box } from '@primer/react';

import styled from 'styled-components';
import Rectangle from '../images/Rectangle.svg';

import { Link } from './';

type Props = {
    children: React.ReactNode;
}

const MainWrapper = styled(Box) <{ filter: string }>`
    background-image: ${props => `url(${props.filter})`};
    min-height: 100vh;
`;

const StyledBox = styled(Box)`
    background: linear-gradient(180deg, #DED1C1 0%, #F7F0E8 100%);
`;

export const Layout = ({ children }: Props) => (
    <StyledBox>
        <MainWrapper filter={Rectangle}>
            <Box display="flex" p={20} justifyContent='center'>
                <Box>
                    <Link to='/'>Главная</Link>
                </Box>
                <Box ml={32}>
                    <Link to='/more'>Узнать больше</Link>
                </Box>
                <Box ml={32}>
                    <Link to='/history'>История</Link>
                </Box>
                <Box ml={32}>
                    <Link to='/post'>Посты</Link>
                </Box>
            </Box>
            {children}
        </MainWrapper>
    </StyledBox>
);