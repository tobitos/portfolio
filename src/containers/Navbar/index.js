import React from 'react';
import styled from 'styled-components';

import A from '../../components/A';
import Icon from '../../components/Icon';

import profileSrc from './profile.jpg';

const Container = styled.div`
  background: linear-gradient(to bottom, #fefefe 0%, #fafafa 100%);
  width: 100%;
`;

const Content = styled.div`
  padding: 16px 24px 16px 16px;
  max-width: 982px;
  margin: auto;
`;

const Image = styled.img`
  float: left;
  margin-right: 16px;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  opacity: .9;
  &:hover {
    opacity: 1;
  }
`;

const Text = styled.div`height: 55px;`;

const Name = styled.h1`
  margin: 0;
  font-weight: 300;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 24px;
  line-height: 32px;
  color: #333333;
`;

const JobTitle = styled.h2`
  margin: 0;
  font-weight: 300;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #999999;
`;

const Icons = styled.div`
  float: right;
  text-align: right;
`;

function Navbar() {
  return (
    <Container>
      <Content>
        <A href="/">
          <Image src={profileSrc} />
        </A>
        <Icons>
          <A href="https://www.linkedin.com/in/tobiaspoel/">
            <Icon type="Linkedin" />
          </A>
          <A href="https://www.github.com/tobitos">
            <Icon type="Github" />
          </A>
          <A href="https://www.twitter.com/tobipoel">
            <Icon type="Twitter" />
          </A>
          <A href="https://www.eyeem.com/tobitos">
            <Icon type="Eyeem" />
          </A>
          <A href="mailto:tobipoel@gmail.com">
            <Icon type="Email" />
          </A>
        </Icons>
        <Text>
          <Name>Tobias Poel</Name>
          <JobTitle>Senior Frontend Developer</JobTitle>
        </Text>
      </Content>
    </Container>
  );
}

export default Navbar;
