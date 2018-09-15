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
              <h1>About Canonocal Debate Lab (CDL)</h1>
              <p>
                The Canonical Debate Lab is a community of people that have come
                together to define a single canonical place to focus and
                organize all the information relevant to claims so that the
                collective knowledge of the world can accumulate. Wikipedia is
                the de-facto canonical location for reference information. It is
                time to define a similar platform for disputed facts and other
                topics of debate.
              </p>
              <h2>
                <a
                  id="user-content-members"
                  class="anchor"
                  href="https://github.com/canonical-debate-lab/press-kit#members"
                  aria-hidden="true"
                />
                Members
              </h2>
              <h3>
                <a
                  id="user-content-timothy-high"
                  class="anchor"
                  href="https://github.com/canonical-debate-lab/press-kit#timothy-high"
                  aria-hidden="true"
                />
                Timothy High
              </h3>
              <p>
                <a
                  href="https://avatars1.githubusercontent.com/u/72254?s=400&amp;u=85627866a22aa7bf97c4ec027c32f21051ef1f5d&amp;v=4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://avatars1.githubusercontent.com/u/72254?s=400&amp;u=85627866a22aa7bf97c4ec027c32f21051ef1f5d&amp;v=4"
                    alt="timothy"
                  />
                </a>
              </p>
              <blockquote>
                <p>
                  I realized there was something very wrong with the way we
                  debate and make decisions online and in real life. We just
                  don't seem to be able to share and accumulate knowledge the
                  way we should. I was also very frustrated with how easy it is
                  for trolls to disrupt and take over conversations. I dubbed my
                  first attempts at solving this problem&nbsp;
                  <a href="https://gruff.org/" rel="nofollow">
                    Project Gruff
                  </a>
                  , based on the story of the Three Billy Goats Gruff, and came
                  up with the goal of "Trolling the trolls" - beating them at
                  their own game. Or, at the very least, providing tools for
                  people to drop a truth bomb on them and walk away.
                </p>
              </blockquote>
              <p>
                Tim High is a software developer with over 20 years of
                experience, and has been a senior engineer, team lead and CTO of
                several successful startups. He is currently Director of the API
                team at&nbsp;
                <a href="https://quidd.co/" rel="nofollow">
                  Quidd
                </a>
                . He has been developing decision-making and debate tools since
                2008.
              </p>
              <ul>
                <li>
                  <a href="https://medium.com/@bigokro" rel="nofollow">
                    Medium
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/bigokro" rel="nofollow">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="http://timhigh.wordpress.com/" rel="nofollow">
                    Original Blog
                  </a>
                </li>
              </ul>
              <h3>
                <a
                  id="user-content-stephen-wicklund"
                  class="anchor"
                  href="https://github.com/canonical-debate-lab/press-kit#stephen-wicklund"
                  aria-hidden="true"
                />
                Stephen Wicklund
              </h3>
              <p>
                <a
                  href="https://avatars3.githubusercontent.com/u/5303978?s=460&amp;v=4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://avatars3.githubusercontent.com/u/5303978?s=460&amp;v=4"
                    alt="stephen"
                  />
                </a>
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
                  <a href="https://debatemap.live/" rel="nofollow">
                    Debate Map
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Venryx">Github profile</a>
                </li>
              </ul>
              <h3>
                <a
                  id="user-content-bentley-davis"
                  class="anchor"
                  href="https://github.com/canonical-debate-lab/press-kit#bentley-davis"
                  aria-hidden="true"
                />
                Bentley Davis
              </h3>
              <p>
                <a
                  href="https://avatars0.githubusercontent.com/u/1606382?s=460&amp;v=4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/1606382?s=460&amp;v=4"
                    alt="bentley"
                  />
                </a>
              </p>
              <blockquote>
                <p>
                  I grew tired of the divisive bickering and misinformation so I
                  created&nbsp;
                  <a href="https://reasonscore.com/" rel="nofollow">
                    Reason Score
                  </a>
                  , a crowd sourced super fact checking web app. I hope the
                  underlying concept will be useful in helping people understand
                  canonical debates.
                </p>
              </blockquote>
              <p>
                Bentley Davis is a co-founder of the&nbsp;
                <a href="https://protruthpledge.org/" rel="nofollow">
                  Pro-Truth Pledge
                </a>
                &nbsp;which encourage politicians &ndash; and everyone else
                &ndash; to commit to truth-oriented behaviors and promote facts
                and civility. He is also a software developer with over 30 years
                of experience including 15 years of management and has been a
                CTO of a startup with a successful exit. He has been working on
                effective debate tools since 2012.
              </p>
              <ul>
                <li>
                  <a href="https://bentleydavis.com/" rel="nofollow">
                    BentleyDavis.com
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/bntlyd" rel="nofollow">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://protruthpledge.org/" rel="nofollow">
                    Pro-Truth Pledge
                  </a>
                </li>
                <li>
                  <a href="https://reasonscore.com/" rel="nofollow">
                    Reason Score
                  </a>
                </li>
              </ul>
              <h3>
                <a
                  id="user-content-oz-fraier"
                  class="anchor"
                  href="https://github.com/canonical-debate-lab/press-kit#oz-fraier"
                  aria-hidden="true"
                />
                Oz Fraier
              </h3>
              <p>
                <a
                  href="https://camo.githubusercontent.com/3d6d7d0f8c1cb813877ba08c0a157a28ce5585be/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d3149594142577378314e35366f4f376c59796b75714a6b726a6e6b614976707337"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://camo.githubusercontent.com/3d6d7d0f8c1cb813877ba08c0a157a28ce5585be/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d3149594142577378314e35366f4f376c59796b75714a6b726a6e6b614976707337"
                    alt="oz"
                    data-canonical-src="https://drive.google.com/uc?export=view&amp;id=1IYABWsx1N56oO7lYykuqJkrjnkaIvps7"
                  />
                </a>
              </p>
              <blockquote>
                <p>
                  Living in Israel, a country that is characterized by many
                  ongoing political and social problems that are difficult to
                  solve, also known as&nbsp;
                  <a
                    href="https://en.wikipedia.org/wiki/Wicked_problem"
                    rel="nofollow"
                  >
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
                  <a href="https://www.wikidapp.herokuapp.com/" rel="nofollow">
                    WikiD
                  </a>
                </li>
                <li>
                  <a href="https://github.com/OzFri">Github profile</a>
                </li>
              </ul>
              <h2>
                <a
                  id="user-content-advisors"
                  class="anchor"
                  href="https://github.com/canonical-debate-lab/press-kit#advisors"
                  aria-hidden="true"
                />
                Advisors
              </h2>
              <h3>
                <a
                  id="user-content-dr-gleb-tsipursky"
                  class="anchor"
                  href="https://github.com/canonical-debate-lab/press-kit#dr-gleb-tsipursky"
                  aria-hidden="true"
                />
                Dr. Gleb Tsipursky
              </h3>
              <p>
                <a
                  href="https://camo.githubusercontent.com/f4e23f9f674a1139b8e49fe54e1738d7102f695f/687474703a2f2f676c6562747369707572736b792e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f30322f476c65622d547369707572736b792d37343078313032342e6a7067"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://camo.githubusercontent.com/f4e23f9f674a1139b8e49fe54e1738d7102f695f/687474703a2f2f676c6562747369707572736b792e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f30322f476c65622d547369707572736b792d37343078313032342e6a7067"
                    alt="Dr. Gleb Tsipursky"
                    width="400px"
                    data-canonical-src="http://glebtsipursky.com/wp-content/uploads/2018/02/Gleb-Tsipursky-740x1024.jpg"
                  />
                </a>
              </p>
              <p>
                Dr. Gleb Tsipursky is the President of&nbsp;
                <a href="https://intentionalinsights.org/" rel="nofollow">
                  Intentional Insights
                </a>
                , and co-founder of the&nbsp;
                <a href="https://www.protruthpledge.org/" rel="nofollow">
                  Pro-Truth Pledge
                </a>
                . A behavioral science expert with over 15 years in academia,
                including as a professor at Ohio State University, Gleb is a
                speaker and consultant on decision-making and social and
                emotional intelligence. He authored the #1 Amazon
                bestseller&nbsp;
                <a
                  href="https://www.amazon.com/Truth-Seekers-Handbook-Science-Based-Guide-ebook/dp/B078429WCF"
                  rel="nofollow"
                >
                  The Truth-Seeker&rsquo;s Handbook
                </a>
                : A Science-Based Guide and frequently appears in venues like
                Time, Scientific American, Newsweek, Fast Company, Inc.
                Magazine, NPR, CBS News, Psychology Today, The Conversation, and
                CNBC
              </p>
              <ul>
                <li>
                  <a href="http://glebtsipursky.com/about/" rel="nofollow">
                    GlebTsipursky.com
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default About
