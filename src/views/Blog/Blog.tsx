import React from 'react';
import { Link } from 'gatsby';

import { IEdge, IMarkdownRemark, IPost } from './types';

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

const Blog = ({ data }: IProps): JSX.Element => {
  // const edges: IPost[] = [];
  const edges: IEdge[] = data.allMarkdownRemark.edges;

  return (
    <div className="blog">
      {edges.length > 0 ? (
        edges.map(({ node }: IEdge) => {
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
    </div>
  );
};

export { Blog };
