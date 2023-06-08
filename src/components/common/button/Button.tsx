import React from 'react';

import './Button.css';

interface Props {
  text: string,
  additionalClassName?: string,
  onClick: (props: any) => any,
  type?: "button" | "submit" | "reset" | undefined,
}

const Button: React.FC<Props> = ({
  text,
  additionalClassName,
  onClick,
  type
}) => {
  return (
    <button
      type={type ? type : undefined}
      className={`Button ${additionalClassName}`}
      onClick={onClick}
    >{text}</button>
  );
};

export default Button;
