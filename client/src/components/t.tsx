import React from "react";
import { Text } from '@primer/react';

import { TextTags } from '../types';
import styled from 'styled-components';

type Props = {
    children: string
    fontWeight?: string;
    as?: TextTags;
    className?: string;
    fontSize?: number;
    letterSpacing?: string;
}

const StyledText = styled(Text) <{ letterSpacing: string }>`
    font-family: 'Days-One';
    margin: 0;
    letter-spacing: ${props => props.letterSpacing};
`;

export const T = ({ children, fontWeight = 'normal', as = TextTags.p, className, fontSize = 16, letterSpacing = 'normal' }: Props) => (
    <StyledText as={as} fontWeight={fontWeight} className={className} fontSize={fontSize} letterSpacing={letterSpacing}>
        {children}
    </StyledText>
);