import React from 'react';
import PropTypes from 'prop-types';

export const Project = (props) => {
  return (
    <a href={props.url} target="_blank" className="col-md-4">
      <img className="img-thumbnail img-responsive project" src={props.image}/>
      <div className='hovertext raleway400'><p>{props.hoverTextHeader}<br/><span>{props.hoverText}</span></p></div>
    </a>
  )
};

Project.propTypes = {
  url: PropTypes.string,
  image: PropTypes.string
}
