/* @flow */
import React from 'react';

import Eyeem from './icons/Eyeem';
import Twitter from './icons/Twitter';
import Email from './icons/Email';
import Github from './icons/Github';
import Linkedin from './icons/Linkedin';

const icons = {
  Eyeem,
  Twitter,
  Email,
  Github,
  Linkedin,
};

function Icon(props: {
  className: string,
  id: string,
  type: string,
  size: number,
  iconProps: Object,
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
