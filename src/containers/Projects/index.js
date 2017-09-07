import React from 'react';
import { Page, Row, Column } from 'hedron';
import styled from 'styled-components';

import A from '../../components/A';
import snapcatSrc from './snapcat.png';

const FullWidthImg = styled.img`width: 100%;`;

const projects = [
  {
    title: 'EyeEm',
    shortDesc: 'Photography community and Marketplace for photo licenses',
    imageSrc: snapcatSrc
  },
  {
    title: 'Snapcat',
    shortDesc: 'Snapcat is an app that lets your cat take selfies!',
    imageSrc: snapcatSrc
  },
  {
    title: 'Photohaus',
    shortDesc: 'Photo Booth with direct sharing',
    imageSrc: snapcatSrc
  }
];

function Projects() {
  return (
    <Page>
      <Row>
        {projects.map(project =>
          <Column sm={4} fluid key={project.title}>
            <FullWidthImg src={project.imageSrc} />
            <A href={project.link}>
              {project.title}
            </A>
          </Column>
        )}
      </Row>
    </Page>
  );
}

export default Projects;
