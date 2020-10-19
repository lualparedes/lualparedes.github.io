import React from 'react';
import { Link } from 'gatsby';

import FeaturedPosts from '../../components/FeaturedPosts';
import LatestPost from '../../components/LatestPost';
import SubscribeBox from '../../components/SubscribeBox';

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
  const latestPost: IPost = edges[0].node;
  const featuredPosts: IPost[] = edges
    .slice(1, 4)
    .map(({ node }: IEdge) => node);
  const restOfPosts: IPost[] = edges.slice(4).map(({ node }: IEdge) => node);

  return (
    <div className="blog">
      {edges.length > 0 ? (
        <>
          <LatestPost post={latestPost} />
          <FeaturedPosts posts={featuredPosts} />
          <SubscribeBox />
        </>
      ) : (
        // edges.map(({ node }: IEdge) => {
        //   const title = node.frontmatter.title || node.fields.slug;
        //   return (
        //     <article key={node.fields.slug}>
        //       <header>
        //         <h3>
        //           <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
        //             {title}
        //           </Link>
        //         </h3>
        //         <small>{node.frontmatter.date}</small>
        //       </header>
        //       <section>
        //         <p>{node.frontmatter.description || node.excerpt}</p>
        //       </section>
        //     </article>
        //   );
        // })
        <p>The first post will be written soon! Stay tuned!</p>
      )}
    </div>
  );
};

export { Blog };
