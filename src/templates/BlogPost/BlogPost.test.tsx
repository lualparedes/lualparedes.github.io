import React from 'react';
import ReactDOM from 'react-dom';
import * as gatsby from 'gatsby';

import BlogPost from './BlogPost';

(gatsby as any).graphql = jest.fn();

const props = {
  data: {
    markdownRemark: {},
    site: {
      siteMetadata: {
        title: '😊',
      },
    },
  },
  pageContext: {},
};

describe('BlogPost template', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BlogPost {...props} />, div);
  });
});
