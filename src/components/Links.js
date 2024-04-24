import React from 'react';

const Links = ({ github, linkedin }) => {
  return (
    <div className="links-section">
      <h3>Links</h3>
      <a href="{github}">GitHub</a>
      <a href="{linkedin}">LinkedIn</a>
    </div>
  );
};

export default Links;
