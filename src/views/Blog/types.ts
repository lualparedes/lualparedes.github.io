export interface IPost {
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    date: string;
    description: string;
    title: string;
  };
}

export interface IEdge {
  node: IPost[];
  [key: string]: any;
}

export interface IMarkdownRemark {
  edges: IEdge[];
  [key: string]: any;
}
