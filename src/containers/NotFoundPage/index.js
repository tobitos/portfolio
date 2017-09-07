/**
 * NotFoundPage
 *
 * This is the page shown when the user visits a url that doesn't have a route
 *
 */
import React from 'react';
import styled from 'styled-components';

import A from '../../components/A';

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

function NotFound() {
  return (
    <div>
      <Title>
        This page doesn't exist, maybe there was a typo in the address.
      </Title>
      <BackHome href="/">Back home</BackHome>
    </div>
  );
}

export default NotFound;
