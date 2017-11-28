import React from 'react';

export const About = () => {
  return (
    <div class = "about section ralewaySmall" id = "about" > <div class="container text-center">
      <div>
        <h2>ABOUT</h2>
      </div>
      <div class="hr text-center">
        <hr/></div>
      </div>
      <div class="container">
        <div class="row content">
          <div class="col-md-2 col-sm-offset-1 visible-lg" id="face">
            <img class="img-responsive" src="img/me.jpg"/></div>
          <div class="col-lg-8 col-sm-offset-1" id="about-me">
            <p>
              I am a front-end web developer based in Charlottesville, Virginia. My main goal is to build high quality web sites that are clean and functional while maintaining ease of use for both users and content managers. I have experience building websites with Content Management Systems like WordPress as well as from the ground up with Bootstrap, HTML, CSS, and JavaScript. If youre in need of a website, or just want to say hello -
              <a href="#contact">Drop us a line</a>!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};
