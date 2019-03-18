import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from '../components/Button'
const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <div className="container">
      <div className="row">
        <div className="col-6">first column</div>
        <div className="col-6">
          <h3>second column</h3>
          <Button>Second Button</Button>
        </div>
      </div>
    </div>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
