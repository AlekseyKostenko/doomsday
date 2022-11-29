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
  flex-wrap: wrap;

  .imageWrapper {
    display: flex;
    max-width: 600px;

    img {
      margin-left: -15.7%;
    }
  }

  @media (max-width: 1080px) {
    justify-content: center;
    border: none;
    padding-bottom: 40px;

    .mainTextWrapper {
      margin-top: 40px;
      margin-left: 0;
    }

    .imageWrapper {
      max-width: none;
      width: 100%;
      justify-content: center;

      img {
        max-width: 100%;
      }
    }

    .historyButtonWrapper {
      padding-top: 40px;
    }
  }

  @media (max-width: 650px) {
    .hundredSeconds {
      font-size: 38px;
    }

    .midnight{
      font-size: 39px;
      letter-spacing: 0.049em;
    }
  }
`;

const DonateButtonWrapper = styled(Box)`
  @media (max-width: 1080px) {
    padding-top: 0;
  }
`

const DonateHref = styled.a`
  text-decoration: none;
`

export default function Home() {

  return (
    <Layout title='Часы судного дня онлайн' metaDescription='Осталось 100 секунд до полуночи'>
      <StyledWrapper display="flex" maxWidth={1040} margin="auto" alignItems='center' mt='20px'>
        <Box className='imageWrapper'>
          <img src={ClockImage} />
        </Box>
        <Box className='mainTextWrapper'>
          <StyledT className='hundredSeconds' fontSize={48} letterSpacing='0.05em'>100 СЕКУНД</StyledT>
          <T className='midnight' fontSize={50} letterSpacing='0.037em'>до полуночи</T>
          <Box className='historyButtonWrapper' pt={20}>
            <Button to="/history">
              Смотреть историю
            </Button>
          </Box>
        </Box>
      </StyledWrapper>
      <DonateButtonWrapper pt={65}>
        <DonateHref href='https://pay.cloudtips.ru/p/a2e302da' target='_blank'>
          <Button>
            Донат
          </Button>
        </DonateHref>
      </DonateButtonWrapper>
    </Layout>
  )
};