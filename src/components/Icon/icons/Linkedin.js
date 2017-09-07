/* eslint-disable max-len */
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Linkedin extends React.PureComponent {
  static defaultProps = {
    size: 24,
  };

  props: {
    size: number,
    className: string,
    id: string,
  };

  render() {
    return (
      <svg
        id={this.props.id}
        className={this.props.className}
        height={this.props.size}
        width={this.props.size}
        viewBox="0 -6 26 26"
      >
        <path
          fillRule="nonzero"
          clipRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="1.414"
          d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z"
        />
      </svg>
    );
  }
}
