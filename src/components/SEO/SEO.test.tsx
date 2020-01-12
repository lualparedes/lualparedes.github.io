import React from "react";
import ReactDOM from "react-dom";
import * as gatsby from "gatsby";

import SEO from "./SEO";

(gatsby as any).graphql = jest.fn();
(gatsby as any).useStaticQuery = jest.fn(() => ({
    site: {
      siteMetadata: {
        author: '',
        description: '',
        title: 'title',
      },
    },
  })
);

describe("SEO component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SEO title="😊" />, div);
  });
});
