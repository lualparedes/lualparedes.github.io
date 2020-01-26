import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Blog from '../views/Blog';
import { IMarkdownRemark, IPost } from '../views/Blog';

interface IProps {
  data: {
    allMarkdownRemark: IMarkdownRemark;
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const BlogIndex = ({ data }: IProps) => {
  return (
    <Layout title="Blog">
      <Blog data={data} />
    </Layout>
  );
};

export default BlogIndex;

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
