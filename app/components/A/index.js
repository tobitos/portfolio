/**
 * A link to a certain page, an anchor tag
 */

// import { Link } from 'react-router';

import styled from 'styled-components';

// TODO: should use react-router Link when link is internal
const A = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #1ba9c7;

  &:hover {
    color: #111111;
  }
  &:active {
    color: #1ba9c7;
  }
`;

export default A;
