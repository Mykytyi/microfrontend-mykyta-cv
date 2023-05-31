import React, { useEffect } from 'react';
import TagCloud from 'TagCloud';

import './Sphere.css';

const labels = [
  'Node.js', 'Jenkins', 'HTML5', 'React',
  'ES5/ES6', 'Atlassian', 'Babel', 'JS', 'CSS3',
  'Animations', 'MongoDB', 'CI/CD', 'Git',
  'SQL', 'REST API', 'Webpack', 'Typescript'];

const Sphere = React.memo(() => {

  useEffect(() => {
    const element = document.getElementById('TextCloud');
    if (!element?.innerHTML) {
      const container = '.tagcloud';
      const options = {
        radius: 350,
        maxSpeed: 'normal',
        keep: true,
        containerClass: 'CustomContainerStyle',
        itemClass: 'CustomItemStyle',
      };
      // @ts-ignore
      TagCloud(container, labels, options);
    }
  }, []);

  return (
    <div className="Sphere">
      <span className="tagcloud" id="TextCloud"></span>
    </div>
  );
});

export default Sphere;
