import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import React from 'react'

import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Icon from 'components/Icon'

class About extends React.Component {
  render() {
    const { location, data } = this.props

    return (
      <Layout location={location}>
        <Meta title="about" site={get(data, 'site.meta')} />
        <div>
          <section className="text-center">
            <div className="container">Test</div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default About
