import React from 'react';

import './InputField.css';

interface Props {
  name: string,
  value: string,
  onChange: (props: any) => any;
  placeholder?: string,
  error?: string,
  additionalClassName?: string;
  textArea?: boolean;
  required?: boolean;
}

const InputField: React.FC<Props> = ({
  name,
  value,
  onChange,
  placeholder,
  error,
  additionalClassName,
  textArea,
  required,
}) => {
  if (textArea) {
    return (
      <div className={`InputFieldContainer ${additionalClassName} ${error ? 'error' : ''}`}>
        <textarea
          id={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          data-enable-grammarly="false"
        />
        <label htmlFor={name} />
      </div>
    );
  }
  return (
    <div className={`InputFieldContainer ${additionalClassName} ${error ? 'error' : ''}`}>
      <input
        id={name}
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
      />
      <label htmlFor={name} />
    </div>
  );
};

export default InputField;
