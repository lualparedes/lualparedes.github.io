import React from 'react';

interface IProps {
  className?: string;
  alt: string;
  svg: string;
}

const SvgIcon = ({ alt, className, svg }: IProps): JSX.Element => {
  return <img alt={alt} className={className} src={svg} />;
};

export { SvgIcon };
