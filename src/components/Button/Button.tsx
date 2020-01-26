import React from 'react';

interface IProps {
  children: string;
  className?: string;
  endIcon?: JSX.Element;
  onClick?: () => void;
}

const Button = ({
  children,
  className,
  endIcon,
  onClick,
}: IProps): JSX.Element => {
  const cssClasses = `button${!!endIcon ? ' button--end-icon' : ''}${
    !!className ? ` ${className}` : ''
  }`;
  return (
    <button className={cssClasses} onClick={onClick}>
      <span className="button__label">{children}</span>
      <span className="button__end-icon">{endIcon}</span>
    </button>
  );
};

export { Button };
