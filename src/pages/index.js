import React from 'react'
import get from 'lodash/get'
import Layout from 'components/Layout'

const HomeIndex = ({ data, location }) => {
  const posts = get(data, 'remark.posts')
  return (
    <Layout location={location}>
      <section>
        <div className="container">
          <h1>The Canonical Debate</h1>
          <p>
            A proposal to fix the current state of online discourse through the
            promotion of fact-based reasoning, and the accumulation of human
            knowledge, brought to you by the Canonical Debate Lab, a community
            project of the Democracy Earth Foundation.
          </p>
          <p>
            We waste so much time repeating old arguments and running in
            opposite directions. The internet looked like it would ease the
            problem by giving us access to vast knowledge and each of us a
            voice. It seems to have made the situation worse by overwhelming us
            with disorganized, contradictory information. Social media amplifies
            bias and creates echo chambers. The Canonical Debate Lab is building
            a resource to gather and organize all information for all sides of
            contentious issues so everyone can make better decisions with less
            effort. This tool reverses many of the natural incentives of social
            networks that have led to information bubbles, clickbait headlines,
            sensationalist journalism, and "fake news." We believe that with
            this tool, we can finally fulfill the promise that was given with
            the rise of the Internet.
          </p>

          <h2>Discover More</h2>
          <p>
            <a href="https://github.com/canonical-debate-lab/paper/blob/master/README.mediawiki">
              White Paper
            </a>
            <br />
            <a href="https://github.com/canonical-debate-lab">GitHub</a>
            <br />
            <a href="https://www.youtube.com/channel/UCz0tKmmYwJcFqrjeyYkXaPA">
              YouTube Channel
            </a>
            <br />
            <a href="https://canonicaldebate.com">Live Demo Site</a>
          </p>

          <h2>Partner Sites</h2>
          <p>
            <a href="https://socratrees.azurewebsites.net/">Socratrees</a>
            <br />
            <a href="https://reasonscore.com/">ReasonScore</a>
            <br />
            <a href="https://gullibot.com/">Gulli Bot</a>
            <br />
            <a href="https://www.whysaurus.com/">Whysaurus</a>
            <br />
            <a href="https://conversence.com/">Conversense</a>
            <br />
            <a href="https://www.societylibrary.org/">The Society Library</a>
            <br />
            <a href="http://gruff.org/">Gruff</a>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default HomeIndex
