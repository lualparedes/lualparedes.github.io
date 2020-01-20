import React, { useRef } from 'react';

interface IProps {
  children: JSX.Element;
  direction?: 'x' | 'y';
  inProp: boolean;
  timeout: number;
  timingFunction?: 'ease-in' | 'ease-out' | 'ease-in-out';
  variant: 'slide' | 'fade';
}

const Transition = ({
  children,
  className = '',
  direction = 'y',
  inProp,
  timeout = 50,
  timingFunction = 'ease-out',
  variant = 'slide',
}: IProps): JSX.Element => {
  const wrapRef = useRef(null);

  const wrapStyles =
    variant === 'slide'
      ? direction === 'x'
        ? ' transition__wrap--slide-in-x'
        : ' transition__wrap--slide-in-y'
      : ' transition__wrap--fade-in';

  const inlineStyles = {
    height: inProp ? (wrapRef.current ? wrapRef.current.offsetHeight : 0) : 0,
    transition: `all ${timeout}ms ${timingFunction}`,
  };
  const wrapInlineStyles = {
    transition: `all ${timeout}ms ${timingFunction}`,
  };

  return (
    <div
      className={`transition ${className}`}
      role="presentation"
      style={inlineStyles}
    >
      <div
        className={`transition__wrap${wrapStyles}${inProp ? ' in' : ''}`}
        ref={wrapRef}
        role="presentation"
        style={wrapInlineStyles}
      >
        {children}
      </div>
    </div>
  );
};

export { Transition };
