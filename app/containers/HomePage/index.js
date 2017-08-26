/*
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

import A from 'components/A';

import Logo from './logolinks.png';

const Img = styled.img`
  width: 150px;
  margin-top: 25px;
  margin-left: 25px;
  margin-right: 25px;
`;

const ImageContainer = styled.div`
  text-align: right;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  margin-left: 25px;
  margin-right: 25px;
  font-weight: 300;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 32px;
  line-height: 40px;
  color: #333333;
  max-width: 50%;
`;

// eslint-disable-next-line react/prefer-stateless-function
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <ImageContainer>
          <Img src={Logo} />
        </ImageContainer>
        <Title>
          <FormattedMessage
            {...messages.header}
            values={{
              linkedIn: (
                <A href="https://www.linkedin.com/in/tobiaspoel/">
                  LinkedIn Profile
                </A>
              ),
            }}
          />
        </Title>
      </div>
    );
  }
}
