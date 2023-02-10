import React from "react"
import { Layout } from '../components';
import { Box } from '@primer/react';
import { T, Button } from '../components';
import styled from 'styled-components';

const History = () => {
    return (
        <Layout>
            <Box p={20}>
                <Box display='flex' justifyContent='center' mb={50}>
                    <T fontSize={30}>
                        Страница 'История' находится в разработке
                    </T>
                </Box>
                <Box>
                    <Button to='/'>
                        На главную
                    </Button>
                </Box>
            </Box>
        </Layout>
    )
};

export default History;