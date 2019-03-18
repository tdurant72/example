import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import { Button } from '../components/Button'
import Section from '../components/section/section'
import Info from '../components/info'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { FaMap } from "react-icons/fa";
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Info />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>

      <Image />
    </div>
    <FaMap />
    <Button>Styled Component</Button>

    <Link to="/page-2/">Go to page 2</Link>
    <Section />
  </Layout>
)


export default IndexPage
