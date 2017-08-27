/*
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import MaxWidthBox from 'components/MaxWidthBox';

import messages from './messages';

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

const Text = styled.p`
  margin: 0;
  padding: 8px 20% 0 0;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #999999;
`;

const Separator = styled.hr`
  margin: 72px 0 0 0;
  border: none;
  height: 1px;
  background: #efefef;
`;

// eslint-disable-next-line react/prefer-stateless-function
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <MaxWidthBox>
        <Title>
          <FormattedMessage {...messages.header} />
        </Title>
        <Text>
          <FormattedMessage
            {...messages.intro1}
            values={{
              github: (
                <A href="https://www.github.com/tobitos/portfolio">
                  <FormattedMessage {...messages.github} />
                </A>
              ),
            }}
          />
        </Text>
        <Text>
          <FormattedMessage
            {...messages.intro2}
            values={{
              styleguide: (
                <A href="/styleguide">
                  <FormattedMessage {...messages.styleguide} />
                </A>
              ),
            }}
          />
        </Text>
        <Separator />
        <Title>
          <FormattedMessage {...messages.projects} />
        </Title>
        <Separator />
        <Title>
          <FormattedMessage {...messages.cv} />
        </Title>
      </MaxWidthBox>
    );
  }
}
