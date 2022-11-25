import React from "react";
import { Box } from '@primer/react';
import {Helmet} from "react-helmet"; 

import styled from 'styled-components';
import Rectangle from '../images/Rectangle.svg';

import { Link } from './';

type Props = {
    children: React.ReactNode;
    title: string;
    metaDescription: string;
}

const MainWrapper = styled(Box) <{ filter: string }>`
    background-image: ${props => `url(${props.filter})`};
    min-height: 100vh;
`;

const StyledBox = styled(Box)`
    background: linear-gradient(180deg, #DED1C1 0%, #F7F0E8 100%);
`;

export const Layout = ({title, metaDescription, children }: Props) => (
    <StyledBox>
        <Helmet>
           <title>{title}</title>          
           {metaDescription && <meta name="description" content={metaDescription} />}      

            {/* <!-- Google Tag Manager --> */}
            <script>
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5W6QBWS');`}
            </script>
            {/* <!-- End Google Tag Manager --> */}
 
           {/* Google tag (gtag.js) */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z7459R1H8E"></script>
            <script>
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
    
                gtag('config', 'G-Z7459R1H8E');
                `}            
            </script>
         </Helmet>
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