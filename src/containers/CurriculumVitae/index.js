import React from 'react';
import { Page, Row, Column } from 'hedron';

import A from '../../components/A';

const workExperience = [
  {
    company: 'EyeEm',
    link: 'https://www.eyeem.com',
    duration: 'Jan 2013 - current'
  },
  {
    company: 'Virtuagym',
    link: 'https://virtuagym.com',
    duration: 'Jan 2012 - Sept 2012'
  },
  {
    company: 'Fraunhofer MEVIS',
    link: 'https://www.mevis.fraunhofer.de/',
    duration: '2010 - 2011'
  },
  {
    company: 'Center for Technology (TZI)',
    link: 'http://www.tzi.de/',
    duration: '2010 - 2011'
  }
];

const education = [
  {
    university: 'University of Amsterdam, the Netherlands',
    program: 'Human Centred Multimedia',
    link:
      'http://gss.uva.nl/content/masters/information-studies-human-centered-multimedia/human-centered-multimedia.html',
    duration: '2011 - 2012'
  },
  {
    university: 'University of Bremen, Germany',
    program: 'Digital Media',
    link: 'http://digitalmedia-bremen.de/',
    duration: '2007 - 2011'
  },
  {
    university: 'State University of New York at Buffalo, NY, USA',
    program: 'Media Study',
    link: 'https://mediastudy.buffalo.edu/',
    duration: '2007 - 2011'
  }
];

// eslint-disable-next-line react/prefer-stateless-function
export default class CurriculumVitae extends React.PureComponent {
  render() {
    return (
      <Page>
        <Row>
          <Column fluid sm={12} lg={3}>
            Work Experience
          </Column>
          <Column fluid sm={12} lg={9}>
            {workExperience.map(job =>
              <Row key={job.company}>
                <Column fluid sm={6}>
                  <A href={job.link}>
                    {job.company}
                  </A>
                </Column>
                <Column fluid sm={6}>
                  {job.duration}
                </Column>
              </Row>
            )}
          </Column>
        </Row>
        <Row>
          <Column fluid sm={12} lg={3}>
            Education
          </Column>
          <Column fluid sm={12} lg={9}>
            {education.map(studyProgram =>
              <Row key={studyProgram.program}>
                <Column fluid sm={6}>
                  <A href={studyProgram.link}>
                    {studyProgram.program} ({studyProgram.university})
                  </A>
                </Column>
                <Column fluid sm={6}>
                  {studyProgram.duration}
                </Column>
              </Row>
            )}
          </Column>
        </Row>
      </Page>
    );
  }
}
