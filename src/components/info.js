import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const info = () => {
    return (
        <div>
            <StaticQuery query={graphql`
                {
                    info:site {
                      siteMetadata {
                        title
                        description
                        author
                        contactInfo
                      }
                    }
                  }
            `} render={data => {
                    const siteData = data.info.siteMetadata;
                    const { title, contactInfo, author, description } = siteData;
                    return (<div>
                        <h2>title: {title}</h2>
                        <h3>author: {author}</h3>
                        <h3>email: {contactInfo}</h3>
                        <p>{description}</p>

                    </div>)
                }} />
        </div>
    )
}

export default info
