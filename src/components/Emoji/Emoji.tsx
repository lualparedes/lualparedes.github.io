import React from 'react';

interface IProps {
  emoji: string;
}

export default ({ emoji }: IProps) => (
  <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">
    {emoji}
  </span>
);
