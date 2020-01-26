import React from 'react';
import ReactDOM from 'react-dom';

import { Blog } from './Blog';

const node: IPost = {
  excerpt: 'string',
  fields: {
    slug: 'string',
  },
  frontmatter: {
    date: 'string',
    description: 'string',
    title: 'string',
  },
};
const edge: IEdge = { node };
const allMarkdownRemark: IMarkdownRemark = { edges: [edge] };
const data = {
  allMarkdownRemark,
  site: {
    siteMetadata: {
      title: 'string',
    },
  },
};
const props = { data };

describe('Blog component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Blog {...props} />, div);
  });
});
