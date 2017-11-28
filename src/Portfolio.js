import React from 'react';
import { Project } from './Project';

const projects = [
  {
    image: 'path',
    url: 'path',
    hoverTextHeader: 'string',
    hoverText: 'string'
  }
]

export const Portfolio = () => {
  return (
    <div class="section raleway100" id="projects">
  		<div class="container text-center">
  			<div>
  				<h2>PROJECTS</h2>
  			</div>
  		<div class="hr text-center"><hr/></div>
  		</div>
  		<div class="container portfolio">
  			<div class="row">
          <Project
            //map projects array 
          />
  				{/* <a href="http://emclock.com/" target="_blank"class="col-md-4">
  					<img class="img-thumbnail img-responsive project" src="img/emclock.jpg"/>
  					<div class='hovertext raleway400'><p>Technology Startup<br/><span>HTML | CSS |  Bootstrap | PHP</span></p></div>
  				</a>
  				<a href="http://roughcutdraft.com/" target="_blank" class="col-md-4">
  					<img class="img-thumbnail img-responsive project" src="img/TWE.gif"/>
  					<div class='hovertext raleway400'><p>Great Music<br/><span>Wordpress | Analytics | SEO</span></p></div>
  				</a>
  				<a href="http://roughcutdesign.com/" target="_blank" class="col-md-4">
  					<img class="img-thumbnail img-responsive project" src="img/RCD.jpg"/>
  					<div class='hovertext raleway400'><p>Developer Portfolio<br/><span>Logo Design | CMS | HTML | CSS</span></p></div>
  				</a> */}
  			</div>
  		</div>
  	</div>
  )
};
