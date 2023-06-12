import React, { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';

import './Sphere.css';

const labels = [
  'Node.js', 'Jenkins', 'HTML5', 'React',
  'ES5/ES6', 'Atlassian', 'Babel', 'JS', 'CSS3',
  'Animations', 'MongoDB', 'CI/CD', 'Git',
  'SQL', 'REST API', 'Webpack', 'Typescript'];

const Sphere = React.memo(() => {

  const windowWidth = useRef(window.innerWidth);

  const handleSphereRadius = (size: number): number => {
    if (size > 1800) {
      return 400;
    }
    if (size > 1450) {
      return 300;
    }
    if (size > 1000) {
      return 250;
    }
    if (size > 500) {
      return 200;
    }
    return 200;
  };

  useEffect(() => {
    const element = document.getElementById('TextCloud');
    if (!element?.innerHTML) {
      const container = '.tagcloud';
      const options = {
        radius: handleSphereRadius(windowWidth.current), // handleSphereRadius(windowSize as unknown as number),
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
