import React from "react";
import { Text } from '@primer/react';

import { TextTags } from '../types';

type Props = {
    children: string
    fontWeight: string;
    as: TextTags;
}

export const T = ({ children, fontWeight = 'normal', as = TextTags.p }: Props) => (
    <Text as={as} fontWeight={fontWeight}>
        {children}
    </Text>
);