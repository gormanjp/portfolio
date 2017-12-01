import React from 'react';
import { Project } from './Project';

const projects = [
  {
    image: 'inspyr.png',
    url: 'http://www.inspyrstudios.com/',
    hoverTextHeader: 'Inspyr Studios',
    hoverText: 'React | Redux | LESS'
  },
  {
    image: 'emclock.jpg',
    url: 'http://www.emclock.com/',
    hoverTextHeader: 'Technology Startup',
    hoverText: 'HTML | CSS |  Bootstrap | PHP'
  },
];

export const Portfolio = () => {
  return (
    <div className="section raleway100 projects" id="projects">
  		<div className="container text-center">
  			<div>
  				<h2>PROJECTS</h2>
  			</div>
  		<div className="hr text-center"><hr/></div>
  		</div>
  		<div className="container portfolio">
  			<div className="row">
          {projects.map((p, i) => {
            const { image, url, hoverTextHeader, hoverText } = p;
            return(
              <Project
                key={i}
                image={image}
                url = {url}
                hoverTextHeader = {hoverTextHeader}
                hoverText = {hoverText}
              />
            )
          })}
  			</div>
  		</div>
  	</div>
  )
};
