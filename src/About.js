import React from 'react';

export const About = () => {
  return (
    <div className = "about section ralewaySmall" id = "about" >
      <div className="aboutInner">
        <div className="text-center">
          <div>
            <h2>JAMIE GORMAN</h2>
          </div>
          <div className="hr hr--yellow text-center">
            <hr style={{ marginBottom: 0 }}/></div>
          <div className="">
            <div className="row content">
              <div className="col-md-3 visible-lg" id="face">
                <img className="img-responsive about__photo" src="jamie.png"/></div>
              <div className="col-lg-9 contentInner" id="about-me">
                <p>
                  I am a software developer based in Charlottesville, Virginia.  My goal is to learn new technologies while building apps that both provide value and delight users.  I have full stack experience building production software using tools and frameworks such as React, Meteor, Redux, MongoDB, SQL, node.js, CSS, LESS, and more.  If you'd like to chat, please
                  <a href="mailto:jpgorman8@gmail.com"> <strong>email me!</strong></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
