import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';

interface IProps {
  data: {
    allMarkdownRemark: any;
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const BlogIndex = ({ data }: IProps) => {
  // const posts = data.allMarkdownRemark.edges;
  const posts: any[] = [];

  return (
    <Layout title="Blog">
      {posts.length > 0 ? (
        posts.map(({ node }: any) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <article key={node.fields.slug}>
              <header>
                <h3>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p>{node.frontmatter.description || node.excerpt}</p>
              </section>
            </article>
          );
        })
      ) : (
        <p>The first post will be written soon! Stay tuned!</p>
      )}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `;
