import React from 'react';

export const Footer = () => {
  return (
    <div className="footer ralewaySmall">
  		<div className="container">
  			<div className="row">
  				<div className="col-xs-4">
            <a className="social" href="https://www.linkedin.com/in/jamie-gorman-72562210b/">
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/gormanjp" className="social">
              <i class="fa fa-github-square" aria-hidden="true"></i>
            </a>
  					<a className="email" href="mailto:jpgorman8@gmail.com">jpgorman8@gmail.com</a>
  				</div>
  				<div className="col-xs-4 col-xs-offset-4 text-right">
  					<p>&copy;JG | 2017</p>
  				</div>
  			</div>
  		</div>
	  </div>
  )
};
