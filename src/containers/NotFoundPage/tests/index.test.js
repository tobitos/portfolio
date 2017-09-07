import React from 'react';
import { shallow } from 'enzyme';

import NotFoundPage from '../index';

describe('<NotFoundPage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<NotFoundPage />);
    expect(
      renderedComponent.contains(
        "This page doesn't exist, maybe there was a typo in the address."
      )
    ).toEqual(true);
  });
});
