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

const Title = styled.p`
  max-width: 982px;
  margin: auto;
  padding: 56px 24px 16px 24px;
  font-weight: 300;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 32px;
  line-height: 40px;
  color: #333333;
`;

const Text = styled.p`
  max-width: 982px;
  margin: auto;
  padding: 8px 20% 0 24px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #999999;
`;

// eslint-disable-next-line react/prefer-stateless-function
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Title>
          <FormattedMessage {...messages.header} />
        </Title>
        <Text>
          <FormattedMessage
            {...messages.intro1}
            values={{
              reactBoilerplate: (
                <A href="https://www.github.com/react-boilerplate/react-boilerplate">
                  react-boilerplate
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
      </div>
    );
  }
}
