import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

// eslint-disable-next-line react/prefer-stateless-function
export default class CurriculumVitae extends React.PureComponent {
  render() {
    return (
      <div>
        <div>
          <div>
            <FormattedMessage {...messages.workExperience} />
          </div>
          <div>...</div>
        </div>
        <div>
          <div>
            <FormattedMessage {...messages.education} />
          </div>
          <div>...</div>
        </div>
      </div>
    );
  }
}
