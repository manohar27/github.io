import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutMe extends React.Component {
  render() {
    const { data } = this.props
    const title = data.site.siteMetadata.title
    const { social } = data.site.siteMetadata

    return (
      <Layout location={this.props.location} title={title}>
        <SEO title={title} />
        <h1>About Me</h1>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={data.site.author}
          style={{
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <p>Hey! Thanks for checking out my website</p>
        <p>
          I'm a Front End Developer @ Tesco, and I'm from Bengaluru. I love
          learning new things, music & traveling.
        </p>
        <ul>
          <li>
            <a href={social.goodReads}> Books I like</a>
          </li>
          <li>
            <a href={social.spotify}>Music I listen to</a>
          </li>
          <li>
            <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>
          </li>
          <li>
            <a href={`https://instagram.com/${social.instagram}`}>Instagram</a>
          </li>
          <li>
            <a href={social.linkedIn}>LinkedIn</a>
          </li>
        </ul>
      </Layout>
    )
  }
}

export default AboutMe

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        social {
          goodReads
          twitter
          spotify
          instagram
          linkedIn
        }
      }
    }
  }
`
