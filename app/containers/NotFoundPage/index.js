/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import A from 'components/A';

import messages from './messages';

const Title = styled.h1`
  max-width: 982px;
  margin: auto;
  padding: 56px 24px 16px 24px;
  font-weight: 300;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 32px;
  line-height: 40px;
  color: #333333;
`;

const BackHome = styled(A)`
  display: block;
  max-width: 982px;
  margin: auto;
  padding: 8px 24px 16px 24px;
  font-weight: 300;
  font-family: Helvetica, Arial, sans-serif;
`;

// eslint-disable-next-line react/prefer-stateless-function
export default class NotFound extends React.PureComponent {
  render() {
    return (
      <div>
        <Title>
          <FormattedMessage {...messages.header} />
        </Title>
        <BackHome href="/">
          <FormattedMessage {...messages.link} />
        </BackHome>
      </div>
    );
  }
}
