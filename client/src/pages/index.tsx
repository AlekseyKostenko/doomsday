import React from "react"
import { Layout } from '../components';
import { Box } from '@primer/react';

import styled from 'styled-components';
import { T, Button } from '../components';

import ClockImage from '../images/ClockImage.svg';

const StyledT = styled(T)`
  background: linear-gradient(180deg, #811414 35.94%, #781313 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledWrapper = styled(Box)`
  border-bottom: 15px solid;
  padding-bottom: 70px;
`;

const StyledImage = styled.img`
  margin-left: -95px;
`;

const DonateHref = styled.a`
  text-decoration: none;
`

export default function Home() {

  return (
    <Layout title='Часы судного дня онлайн' metaDescription='Осталось 100 секунд до полуночи'>
      <StyledWrapper display="flex" maxWidth={1040} margin="auto" alignItems='center' mt='20px'>
        <StyledImage src={ClockImage} />
        <Box ml='60px'>
          <StyledT fontSize={48} letterSpacing='0.05em'>100 СЕКУНД</StyledT>
          <T fontSize={50} letterSpacing='0.037em'>до полуночи</T>
          <Box pt={20}>
            <Button to="/history">
              Смотреть историю
            </Button>
          </Box>
        </Box>
      </StyledWrapper>
      <Box pt={65}>
        <DonateHref href='https://pay.cloudtips.ru/p/a2e302da' target='_blank'>
          <Button>
            Донат
          </Button>
        </DonateHref>
      </Box>
    </Layout>
  )
};