import React, { useContext } from 'react';

import { Context } from '../../context';

import { IPost } from '../../views/Blog/types';

interface IProps {
  post: IPost;
}

const LatestPost = ({ post }: IProps): JSX.Element => {
  const [theme] = useContext(Context);
  return (
    <div className={`latest-post theme--${theme}`}>
      <div className="latest-post__subtitle">Latest Post</div>
      <div className="latest-post__title">The title of the latest post</div>
    </div>
  );
};

export { LatestPost };
