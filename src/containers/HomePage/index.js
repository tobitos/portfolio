import React from 'react';
import styled from 'styled-components';

import A from '../../components/A';
import Text from '../../components/Text';
import MaxWidthBox from '../../components/MaxWidthBox';

import CurriculumVitae from '../../containers/CurriculumVitae';
import Projects from '../../containers/Projects';

const Title = styled.p`
  margin: 0;
  padding-top: 72px;
  padding-bottom: 48px;
  font-weight: 300;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 32px;
  line-height: 40px;
  color: #333333;
`;

const Separator = styled.hr`
  margin: 72px 0 0 0;
  border: none;
  height: 1px;
  background: #efefef;
`;

function HomePage() {
  return (
    <MaxWidthBox>
      <Title>Hi my name is Tobi,</Title>
      <Text>
        I'm a Senior Frontend Developer based in Berlin and currently the
        Frontend Team Lead at EyeEm. This website is my tech playground to try
        out new things. You can have a look at the{' '}
        <A href="https://www.github.com/tobitos/portfolio">source on Github</A>.
      </Text>
      <Text>
        I'm currently playing around with Living Styleguide approaches. If this
        seems interesting to you, have a look at the{' '}
        <A href="/styleguide">styleguide of this page</A>.
      </Text>
      <Separator />
      <Title>Projects</Title>
      <Projects />
      <Separator />
      <Title>CV</Title>
      <CurriculumVitae />
      <Separator />
    </MaxWidthBox>
  );
}

export default HomePage;
