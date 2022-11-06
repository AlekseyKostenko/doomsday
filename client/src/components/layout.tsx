import React from "react";
import { Box } from '@primer/react';

import styled from 'styled-components';

import { Link } from './';

type Props = {
    children: React.ReactNode;
}

const MainWrapper = styled(Box)`
    background: linear-gradient(180deg, #DED1C1 0%, #F7F0E8 100%);
    min-height: 100vh;
`;

export const Layout = ({ children }: Props) => (
    <MainWrapper p={20}>
        <Box display="flex" pb={20} justifyContent='center'>
            <Box>
                <Link to='/'>Главная</Link>
            </Box>
            <Box ml={32}>
                <Link to='/'>Узнать больше</Link>
            </Box>
            <Box ml={32}>
                <Link to='/history'>История</Link>
            </Box>
            <Box ml={32}>
                <Link to='/'>Посты</Link>
            </Box>
        </Box>
        {children}
    </MainWrapper>
);