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
          <section>
            <div className="container">
              <h1>About Canonical Debate Lab (CDL)</h1>
              <p>
                The Canonical Debate Lab is a community of people that have come
                together to define a single canonical place to focus and
                organize all the information relevant to claims so that the
                collective knowledge of the world can accumulate. Wikipedia is
                the de-facto canonical location for reference information. It is
                time to define a similar platform for disputed facts and other
                topics of debate.
              </p>
              <h2>Members</h2>
              <h3>Timothy High</h3>
              <p>
                <img
                  width="400"
                  src="https://avatars1.githubusercontent.com/u/72254?s=400&amp;u=85627866a22aa7bf97c4ec027c32f21051ef1f5d&amp;v=4"
                  alt="timothy"
                />
              </p>
              <blockquote>
                <p>
                  I realized there was something very wrong with the way we
                  debate and make decisions online and in real life. We just
                  don't seem to be able to share and accumulate knowledge the
                  way we should. I was also very frustrated with how easy it is
                  for trolls to disrupt and take over conversations. I dubbed my
                  first attempts at solving this problem&nbsp;
                  <a href="https://gruff.org/">Project Gruff</a>, based on the
                  story of the Three Billy Goats Gruff, and came up with the
                  goal of "Trolling the trolls" - beating them at their own
                  game. Or, at the very least, providing tools for people to
                  drop a truth bomb on them and walk away.
                </p>
              </blockquote>
              <p>
                Tim High is a software developer with over 20 years of
                experience, and has been a senior engineer, team lead and CTO of
                several successful startups. He is currently Director of the API
                team at&nbsp;
                <a href="https://quidd.co/">Quidd</a>. He has been developing
                decision-making and debate tools since 2008.
              </p>
              <ul>
                <li>
                  <a href="https://medium.com/@bigokro">Medium</a>
                </li>
                <li>
                  <a href="https://twitter.com/bigokro">Twitter</a>
                </li>
                <li>
                  <a href="http://timhigh.wordpress.com/">Original Blog</a>
                </li>
              </ul>
              <h3>Stephen Wicklund</h3>
              <p>
                <img
                  width="400"
                  src="https://avatars3.githubusercontent.com/u/5303978?s=460&amp;v=4"
                  alt="stephen"
                />
              </p>
              <blockquote>
                <p>
                  My interest in debates started around 2013. The main thing
                  prompting it was frustration with how difficult it seemed to
                  be for people to efficiently explain and debate their views,
                  once the conversation had expanded beyond a few basic points.
                  I spent a lot of time reading online then, and had read dozens
                  of threads where people seemed to endlessly debate things
                  while making hardly any progress. Even when good points and
                  rebuttals were brought up, there were 20 other things in the
                  air at each point, making the pieces of good reasoning lose
                  their impact.
                </p>
                <p>
                  Because of how important some of these topics were, it
                  concerned me to see the difficulty people had at negotiating
                  understanding. I decided I would try my best to help create a
                  solution to the problem, using software to collect and
                  organize the information that was then spread out among the
                  forum threads, wiki pages, and individuals, into a
                  community-edited tree-based structure that's easier to
                  traverse and explore. My first iteration of this software,
                  Debate Map, can be found below.
                </p>
              </blockquote>
              <ul>
                <li>
                  <a href="https://debatemap.live/">Debate Map</a>
                </li>
                <li>
                  <a href="https://github.com/Venryx">Github profile</a>
                </li>
              </ul>
              <h3>Oz Fraier</h3>
              <p>
                <img
                  width="400"
                  src="https://camo.githubusercontent.com/3d6d7d0f8c1cb813877ba08c0a157a28ce5585be/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d3149594142577378314e35366f4f376c59796b75714a6b726a6e6b614976707337"
                  alt="oz"
                />
              </p>
              <blockquote>
                <p>
                  Living in Israel, a country that is characterized by many
                  ongoing political and social problems that are difficult to
                  solve, also known as&nbsp;
                  <a href="https://en.wikipedia.org/wiki/Wicked_problem">
                    Wicked Problems
                  </a>
                  . On the other hand, almost everyone here has strong opinions
                  about the cause of the problem and the needed solution. I
                  believe that the opinions and insights of each and every
                  person count, Every person have their own unique point of view
                  which reveal the truth that others don't see. Its like each
                  one has a puzzle piece, and together we may solve the big
                  picture. I also believe that the potential for insight and
                  ability to act that are dispersed among the population is
                  enormous, and is crucial for tackling the complex problems
                  this generation is facing.
                </p>
              </blockquote>
              <p>
                Oz Fraier has been thinking and collaborating with others on a
                technological solution for large groups discussions since
                roughly 2006, In the last couple of years he's working on WikiD,
                a webapp prototype that realizes these thoughts and ideas, work
                is still in progress.
              </p>
              <ul>
                <li>
                  <a href="https://www.wikidapp.herokuapp.com/">WikiD</a>
                </li>
                <li>
                  <a href="https://github.com/OzFri">Github profile</a>
                </li>
              </ul>
              <h2>Collaborators</h2>
              <h3>Bentley Davis</h3>
              <p>
                <img
                  width="400"
                  src="https://avatars0.githubusercontent.com/u/1606382?s=460&amp;v=4"
                  alt="bentley"
                />
              </p>
              <blockquote>
                <p>
                  I grew tired of the divisive bickering and misinformation so I
                  created&nbsp;
                  <a href="https://reasonscore.com/">Reason Score</a>, a crowd
                  sourced super fact checking web app. I hope the underlying
                  concept will be useful in helping people understand canonical
                  debates.
                </p>
              </blockquote>
              <p>
                Bentley Davis is a co-founder of the&nbsp;
                <a href="https://protruthpledge.org/">Pro-Truth Pledge</a>
                &nbsp;which encourage politicians &ndash; and everyone else
                &ndash; to commit to truth-oriented behaviors and promote facts
                and civility. He is also a software developer with over 30 years
                of experience including 15 years of management and has been a
                CTO of a startup with a successful exit. He has been working on
                effective debate tools since 2012.
              </p>
              <ul>
                <li>
                  <a href="https://bentleydavis.com/">BentleyDavis.com</a>
                </li>
                <li>
                  <a href="https://twitter.com/bntlyd">Twitter</a>
                </li>
                <li>
                  <a href="https://protruthpledge.org/">Pro-Truth Pledge</a>
                </li>
                <li>
                  <a href="https://reasonscore.com/">Reason Score</a>
                </li>
                <li>
                  <a href="https://gullibot.com/">Gulli Bot</a>
                </li>
              </ul>
              <h3>Jamie Joyce</h3>
              <p>
                <img width="400" src="/about/JamieJoyce.jpg" alt="jamie" />
              </p>
              <blockquote>
                <p />
              </blockquote>
              <p>
                Jamie Joyce is Executive Director of the Society Library, and a
                founding member of the Canonical Debate Lab
              </p>
              <ul>
                <li>
                  <a href="http://societylibrary.com/">Society Library</a>
                </li>
                <li>
                  <a href="http://jamiejoyce.com/">Personal Page</a>
                </li>
                <li>
                  <a href="http://internetgovernment.org/">
                    Internet Government
                  </a>
                </li>
                <li>
                  <a href="http://greatamericandebate.org/">
                    Great American Debate
                  </a>
                </li>
              </ul>
              <hr class="border-primary" />
              <a href="https://github.com/canonical-debate-lab/website/blob/master/src/pages/about.js">
                Edit this page on GitHub
              </a>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default About
