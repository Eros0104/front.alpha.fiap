import React from 'react';
import type { NextPage } from 'next';
import menuItems from 'src/sections/menuItems';
import { Typography, Box, Container, Cover, Button } from 'src/components';
import { scrollTo } from 'src/functions';

const Home: NextPage = () => (
  <div>
    <Cover
      src="./images/jabaete-background.png"
      hoverSrc="background.png"
      height="500px"
    >
      <Container>
        <Box paddingTop="100px">
          <Typography
            fontWeight={900}
            element="h1"
            color="lightFont"
            fontSize="xxl"
          >
            CHALLENGE EDP:
          </Typography>
          <Typography
            element="h1"
            fontWeight={700}
            color="lightFont"
            fontSize="xl"
          >
            JABAETÉ
          </Typography>
          <Typography
            element="h1"
            fontWeight={700}
            color="lightFont"
            fontSize="lg"
            upperCase
          >
            Uma solução ecológica e econômica
          </Typography>
          <Box mt={3}>
            <Button
              onClick={() => scrollTo('our-solution')}
              size="large"
              variant="outlined"
              color="primary"
            >
              Saiba mais
            </Button>
          </Box>
        </Box>
      </Container>
    </Cover>
    <Container>
      {menuItems.map(({ Component, id, text }) => (
        <Component key={id} title={text} id={id} />
      ))}
    </Container>
  </div>
);

export default Home;
