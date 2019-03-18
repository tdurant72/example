import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const images = ({ data }) => {
    const images = data.allFile.edges;
    return (
        <Layout>
            <h1>Images:</h1>
            {images.map(({ node }) => {
                return <h3>{node.relativePath}</h3>
            })}
        </Layout>
    )
}

export const query = graphql`
{
    allFile{
    edges{
      node {
        relativePath
      }
    }
  }
}
`
export default images

