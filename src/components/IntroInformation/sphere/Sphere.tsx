import React, { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';

import './Sphere.css';

const labels = [
  'Node.js', 'Jenkins', 'YAGNI', 'React',
  'ES5/ES6', 'Atlassian', 'KISS', 'JavaScript', 'OOP',
  'Animations', 'MongoDB', 'DRY', 'Git', 'Kubernetes',
  'SQL', 'REST API', 'Webpack', 'Typescript', 'Docker'];

const Sphere = React.memo(() => {

  const windowWidth = useRef(window.innerWidth);

  const handleSphereRadius = (size: number): number => {
    if (size > 1800) {
      return 450;
    }
    if (size > 1450) {
      return 350;
    }
    if (size > 1000) {
      return 300;
    }
    if (size > 700) {
      return 250;
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
