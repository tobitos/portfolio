/**
 *
 * App.react.js
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.PureComponent {
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}
