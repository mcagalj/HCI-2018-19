import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components";

export default ({
  data: {
    site: {
      siteMetadata: { title, description }
    }
  }
}) => {
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{description}</p>
    </Layout>
  );
};

export const query = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
