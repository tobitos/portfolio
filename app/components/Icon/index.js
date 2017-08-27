/* @flow */
import React from 'react';

import Eyeem from './icons/Eyeem';
import Twitter from './icons/Twitter';
import Email from './icons/Email';

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
