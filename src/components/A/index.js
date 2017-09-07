/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';
// import { Link } from 'react-router';

// TODO: should use react-router Link when link is internal
const A = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #059997;

  &:hover {
    color: #1ba9c7;
  }
  &:active {
    color: #059997;
  }
`;

export default A;
