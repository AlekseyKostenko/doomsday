import React from "react";
import { Box } from '@primer/react';
import { slide as Menu } from 'react-burger-menu'
import { Helmet } from 'react-helmet'

import styled from 'styled-components';
import Rectangle from '../images/Rectangle.svg';

import { Link } from './';

import { isTabletWidth } from '../constants/mediaWidth';
import { useMediaQuery } from 'react-responsive';

type Props = {
    children: React.ReactNode;
    title: string;
    metaDescription: string;
    canonical: string;
}

const MainWrapper = styled(Box) <{ filter: string }>`
    
    min-height: calc(100vh - 30px);
    padding-bottom: 30px;

    @media (${isTabletWidth}) {
        padding-top: 30px;
        min-height: calc(100vh - 60px);
    }
`;

const StyledBox = styled(Box)`
    background: #fff;
`;

const BurgerButton = styled(Box)`
    .bm-burger-button {
        position: relative;
        width: 30px;
        height: 25px;
        left: 20px;
        top: -10px;
    }

    .bm-burger-bars {
        background: #373a47;
    }

    .bm-burger-bars-hover {
        background: #a90000;
    }

    .bm-cross-button {
        height: 24px;
        width: 24px;
    }

    .bm-cross {
        background: #bdc3c7;
    }

    .bm-menu-wrap {
        position: fixed;
        height: 100%;
        top: 0;
    }

    .bm-menu {
        background: #373a47;
        padding: 2.5em 1.5em 0;
        font-size: 1.15em;
    }

    .bm-morph-shape {
        fill: #373a47;
    }

    .bm-item-list {
        color: #b8b7ad;
        padding: 0.8em;
        height: calc(100% - 30px) !important;
    }

    .bm-item {
        display: inline-block;
    }

    .bm-overlay {
        background: rgba(0, 0, 0, 0.3);
        top: 0;
    }
`;

export const Layout = ({ title, metaDescription, canonical, children }: Props) => {

    const isTabletOrMobile = useMediaQuery({ query: `(${isTabletWidth})` });

    return (
        <StyledBox>
            <Helmet>
                <title>{title}</title>
                {metaDescription && <meta name="description" content={metaDescription} />}
                <link rel="canonical" href={canonical}/>

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
                {isTabletOrMobile ?
                    <BurgerButton className='BurgerButton'>
                        <Menu>
                            <Box mb={10}>
                                <Link fontSize='18px' color='#ffffff' disableHover to='/'>Главная</Link>
                            </Box>
                            <Box mb={10}>
                                <Link fontSize='18px' color='#ffffff' disableHover to='/more'>Узнать больше</Link>
                            </Box>
                            <Box mb={10}>
                                <Link fontSize='18px' color='#ffffff' disableHover to='/history'>История</Link>
                            </Box>
                            <Box mb={10}>
                                <Link fontSize='18px' color='#ffffff' disableHover to='/post'>Посты</Link>
                            </Box>
                        </Menu>
                    </BurgerButton> :
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
                }
                {children}
            </MainWrapper>
        </StyledBox>
    );
}