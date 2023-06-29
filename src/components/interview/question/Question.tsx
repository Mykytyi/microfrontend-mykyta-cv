import React from 'react';

import './Question.css';

type Props = {
  Question: React.ReactElement,
  index: number,
  category: string,
}

const Question: React.FC<Props> = ({ Question, index, category,  }) => {
  const [input, setInput] = React.useState<string>('');
  const [dirty, setDirty] = React.useState<boolean>(true);
  const [textarea, setTextArea] = React.useState<boolean>(false);

  React.useEffect(() => {
    const initialValue = localStorage.getItem(`${category}_${index}`);
    if (initialValue) {
      setInput(initialValue);
    }
  }, []);

  React.useEffect(() => {
    const initialValue = localStorage.getItem(`${category}_${index}`);
    if (initialValue === input && initialValue.length > 10) {
      setDirty(false);
    } else {
      setDirty(true);
    }
  }, [input]);

  const saveData = () => {
    localStorage.setItem(`${category}_${index}`, input);
    if (input.length > 0) {
      setDirty(false);
    }
  }

  return (
    <div className={`QuestionContainer ${dirty ? '' : 'Done'}`}>
      <div className="LiWrapper" onClick={() => setTextArea(!textarea)}>
        {Question}
      </div>
      <div style={{display: `${textarea ? 'block' : 'none'}`}}>
        <textarea
          className={`${dirty ? '' : 'Green'}`}
          data-enable-grammarly="false"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={saveData}>Save</button>
      </div>
    </div>
  );
};

export default Question;
