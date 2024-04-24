import React from 'react';
import Links from './Links';

const About = ({ bio, github, linkedin }) => {
  return (
    <div id="about">
      {bio && <p>{bio}</p>} 
      <Links github={github} linkedin={linkedin} />
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    </div>
  );
}

export default About;
