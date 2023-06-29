import React from 'react';
import Question from './question/Question';
import {
  newbie,
  html,
  css,
  preproccessors,
  javaScript,
  promises,
  fetch,
  typeScript,
  web,
  backend,
  general,
} from '../../questions';
import './Interview.css';

const Interview = () => {
  React.useEffect(() => {
    const canvas = document.getElementById('canvasAnim');
    canvas?.remove();
  }, []);

  return (
      <div className="InterviewContainer">
        <h1 id="interview-questions">Interview Questions</h1>
        <p><img src="https://media.giphy.com/media/7K3p2z8Hh9QOI/giphy.gif" alt="question"/></p>
        <h2 id="newbie">Newbie</h2>
        <ul>
          {newbie.map((item, index) => (<Question Question={item} index={index} category="newbie"/>))}
        </ul>
        <h2 id="html">HTML</h2>
        <ul>
          {html.map((item, index) => (<Question Question={item} index={index} category="html"/>))}
        </ul>
        <h2 id="css">CSS</h2>
        <ul>
          {css.map((item, index) => (<Question Question={item} index={index} category="html"/>))}
        </ul>
        <h2 id="preproccessors">Preproccessors</h2>
        <ul>
          {preproccessors.map((item, index) => (<Question Question={item} index={index} category="html"/>))}
        </ul>
        <h2 id="javascript">JavaScript</h2>
        <ul>
          {javaScript.map((item, index) => (<Question Question={item} index={index} category="html"/>))}
        </ul>
        <h2 id="promises">Promises</h2>
        <ul>
          {promises.map((item, index) => (<Question Question={item} index={index} category="html"/>))}
        </ul>
        <h2 id="fetch">Fetch</h2>
        <ul>
          {fetch.map((item, index) => (<Question Question={item} index={index} category="html"/>))}
        </ul>
        <h2 id="typescript">TypeScript</h2>
        <ul>
          {typeScript.map((item, index) => (<Question Question={item} index={index} category="html"/>))}
        </ul>
        <h2 id="web">Web</h2>
        <ul>
          {web.map((item, index) => (<Question Question={item} index={index} category="html"/>))}
        </ul>
        <h2 id="backend">Backend</h2>
        <ul>
          {backend.map((item, index) => (<Question Question={item} index={index} category="html"/>))}
        </ul>
        <h2 id="general">General</h2>
        <ul>
          {general.map((item, index) => (<Question Question={item} index={index} category="html"/>))}
        </ul>
      </div>
  );
};

export default Interview;
