/* @flow */
import React from 'react';

import Eyeem from './icons/Eyeem.js';
import Twitter from './icons/Twitter.js';
import Email from './icons/Email.js';

const icons = {
  Eyeem,
  Twitter,
  Email,
};

function Icon(props: {
  className: string,
  id: string,
  type: string,
  size: number,
  iconProps: Object
}) {
  const Component = icons[props.type] || Eyeem;

  return (
    <Component
      className={props.className}
      id={props.id}
      size={props.size}
      iconProps={props.iconProps}
    />
  );
}

export default Icon;
