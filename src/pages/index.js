import React from 'react'
import get from 'lodash/get'
import Layout from 'components/Layout'

const HomeIndex = ({ data, location }) => {
  const posts = get(data, 'remark.posts')
  return (
    <Layout location={location}>
      <section className="text-center">
        <div className="container">Test</div>
      </section>
    </Layout>
  )
}

export default HomeIndex
