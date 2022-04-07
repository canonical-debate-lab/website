import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import React from 'react'

import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Icon from 'components/Icon'

class CIDesign extends React.Component {
  render() {
    const { location, data } = this.props

    return (
      <Layout location={location}>
        <Meta title="about" site={get(data, 'site.meta')} />
        <section>
          <div className="container">
            <h1>Collective Intelligence Design Challenges</h1>
            <p>
              (This paper was originally written as constructive criticism for{' '}
              <a href="https://mapsmap.devpost.com/">the MapsMap challenge</a>
              .)
            </p>
            <p>
              We, the members of the Canonical Debate Lab (CDL), are a group of
              researchers, developers, and system thinkers who have
              independently been working on collective intelligence systems for
              several years.
            </p>

            <blockquote class="blockquote">
              … ‘collective intelligence’ can be understood as the enhanced
              capacity that is created when people work together, often with the
              help of technology, to mobilise a wider range of information,
              ideas and insights. Collective intelligence (CI) emerges when
              these contributions are combined to become more than the sum of
              their parts for purposes ranging from learning and innovation to
              decision-making. –
              <a href="https://www.nesta.org.uk/report/future-minds-and-machines/3-what-collective-intelligence/">
                Nesta
              </a>
              .
            </blockquote>

            <p>
              Many projects, most recently{' '}
              <a href="https://mapsmap.devpost.com/">the MapsMap challenge</a>,
              aim at large-scale open collaboration through crowdsourcing,
              whether what is being collaborated on are decisions, sensemaking,
              or (as in the MapsMap case) definitions of problems and solutions.
              Those efforts overlap with our vision of collective
              intelligence. Our goal is to aggregate contributions of diverse
              stakeholders into a unified information space, which can be
              accessed through multiple views. Views are tailored to a specific
              use case—e.g. adding problems to a map—and can present differing
              perspectives and levels of detail.
            </p>

            <p>
              We greatly appreciate the energy poured in this space. This area
              of work deserves more attention, more contributions, but above all
              a better coordination of efforts. We are calling out those efforts
              to connect with one another, and with us. We are experts on the
              topic and have built CI systems ourselves. By this writing, we are
              not (yet) proposing solutions (though you can find references to
              past and ongoing projects below); but we want to draw attention to
              challenges that lie ahead, some of which are often overlooked.
            </p>
            <h2>Cognitive Capacity</h2>
            <p>
              Time and knowledge of people is limited. To contribute to a CI
              system, we can't expect users to be aware of, or be motivated to
              read and learn, all relevant existing information. Therefore,
              information needs to be conveyed differently to people depending
              on expertise and background. However, this comes at the risk of
              fragmenting information into sub-communities. While the same
              information can be conveyed differently to different users, it
              still needs to be connected so that users that do have the
              necessary expertise or motivation can easily find and contribute
              information at the level of detail they are comfortable with.
            </p>

            <p>
              So far, this assumes there is no disagreement on information
              contained within the system. However, the amount of relevant
              information to consider, and the challenge of interpreting it,
              increases the more diverse the set of perspectives ("multiple
              truths") included in a system. Moreso, since perspectives that are
              different from one’s own carry with them unfamiliar concepts,
              cognitive biases, and competing terminology.
            </p>

            <p>
              Introducing hierarchies of more abstract to specific
              representations of the same information may reduce the amount of
              information that is presented to users at any given time, but such
              hierarchies can be complex to reason about and often still need to
              be traversed to be fully understood. In general, any mechanism
              that tries to reduce cognitive load by presenting less
              information, such as information hierarchies, takes time for users
              to learn. Furthermore, it introduces additional sources of
              disagreement, and thus, competing perspectives to be represented.
            </p>
            <h2>Map Diversity and Alignment</h2>
            <p>
              The MapsMap challenge lists the ability to define “target
              outcomes, milestones, and dependencies” as requirements for the
              stated purposes of coordinating on local problems and
              incentivizing desirable trajectories through problem spaces. We
              expect these are but a subset of anticipated and desirable
              requirements and purposes, operating on the shared information
              space consisting of all contributions. However, no single view
              (e.g. map) of an information space can serve all purposes. Each
              purpose dictates specific requirements on how the view is
              structured, which may not be compatible with other ways of
              organizing and displaying information. Accordingly, multiple
              focused views of a shared information space are needed.
            </p>

            <p>
              There are other reasons for supporting multiple views of the same
              information. Reducing cognitive load by introducing hierarchical
              views was already mentioned in the previous section on “Cognitive
              Capacity”. Furthermore, it is also unlikely that a single view can
              ever accommodate all perspectives and remain intelligible. Thus,
              there is a need to accommodate specialized views tailored to an
              individual or subcommunity’s unique perspective, filtering the
              information they care about. This gives a sense of ownership which
              otherwise is missing in a fully shared information space.
            </p>

            <p>
              Such a diversity of views, while necessary, can lead to
              fragmentation of the information space into multiple uncoordinated
              local views. Most tools we are aware of either focus on personal
              maps, or hope for the community to self-organize around a common
              map. Self-organization is relatively straightforward early on in
              the project, but when a system gains adoption, new people join the
              conversation, contributions multiply, sometimes altering the
              meaning of existing information, then maintaining a coherent
              information space becomes increasingly difficult.
            </p>

            <p>
              If information is not shared between views, fragmentation could
              lead to, for example, failing to identify dependencies, synergies,
              or common goals between projects. Local views should convey how
              much related information exists in other views, so users are
              invited to explore broader perspectives. But, another risk is the
              illusion of synergy through spurious connections: for example, if
              interdependent projects refer to common goals, goals need to be
              interpreted similarly. To ensure this, global alignment on key
              information represented across different local views is needed;
              i.e. a process whereby everyone agrees on the intended meaning of
              said information (e.g. common definitions).
            </p>

            <p>
              Mechanisms that support local, within-group alignment, and assume
              shared goals and processes (e.g., Git) are not designed to foster
              a coherent global understanding across projects, teams, or
              subcommunities.
            </p>
            <h2>Context and Provenance</h2>
            <p>
              All information contributed to a CI system is inherently
              contextual, dependent on time, place, and the mindset of the
              individual expressing it. For contributions to be understood as
              originally intended by others, it is important to have access to
              the provenance of the information, so that semantic ambiguities
              and exact meaning of terms can be resolved using the original
              context.
            </p>

            <p>
              However, even when provenance is available, context is never made
              fully explicit when information is introduced; and neither can it
              be. Therefore, even in the best-case scenario, conflicts will
              arise not only due to disagreement on explicitly stated
              information, but also due to differences in implicit assumptions
              that are made about context which may not be shared.
            </p>

            <p>
              This is a major challenge for CI tools, which aim to aggregate
              knowledge by meaningfully linking information (e.g. problems) to
              each other. Since any linked information carries with it unstated
              implicit context, interpreting a single piece of information, or
              even the reason why it was linked, requires not only interpreting
              the information currently in focus, but also all information
              linked to it, and linked to that in turn, ad infinitum. If this
              makes it difficult for a single individual to interpret
              information in a CI system, this is even more so when trying to
              find agreement on how to interpret it in large communities
              (exacerbating what was stated in the “Cognitive Capacity” and “Map
              Diversity and Alignment” sections).
            </p>

            <p>
              In essence, when large communities are involved, adding
              structure to information may have the paradoxical effect of
              further obfuscating it, unless mechanisms are introduced to
              negotiate ambiguity stemming from conflicting interpretations
              (informed by context or not).
            </p>
            <h2>Quality and Trust</h2>
            <p>
              High-quality information is needed for a CI system to act, or to
              be trusted, as the basis for decision-making, e.g. to distribute
              funding. Achieving high-quality information is an ongoing process;
              one should not expect that the given state of information in a CI
              system is final and requires no more additions or amendments. One
              particular ongoing challenge is maintaining a suitable
              signal-to-noise ratio. In addition, to guarantee that any mistakes
              or problems with contained information can be identified, CI
              systems should both be flexible enough for users to express any
              concerns they may have, and allow anyone to contribute freely to
              counteract potential biases.
            </p>
            <p> </p>
            <p>
              However, open contributions are at odds with quality control. For
              example, free contributions open up the system to manipulation
              attempts by bad-faith actors, and loud voices can bias and
              demotivate other users. To counteract this, mechanisms for ranking
              and rating of content, such as (community) moderation or
              reputation systems, need to be put in place. But, at the risk of
              losing users' trust in governance of the CI system, these
              mechanisms need to be transparent, not overly restrictive, and
              distribution of power needs to be—and be perceived as—fair.
              Striking the right balance between information quality, ease of
              contributions, and moderation is a major challenge for CI systems
              and necessarily involves making tradeoffs.
            </p>
            <h2>Conclusion</h2>
            <p>
              For many of these problems, we have already worked on and
              experimented with systems, both in academia and industry,
              embodying partial solutions. As such, we can provide extensive
              insight into the challenges that will confront anyone invested in
              this problem space.
            </p>

            <p>
              Given the scale of the problem, in particular the diversity of use
              cases implicit in the original goal, we believe that a proper
              solution is more likely to take the form of an ecosystem of
              interconnected tools rather than a single product designed by a
              single team. To ensure that such an ecosystem works as a coherent
              whole, there is a need to identify common core requirements, in
              the form of a shared core data model and protocols, potentially
              using a shared infrastructure. If we can convince other designers
              of collective intelligence tools of the merit of this approach,
              which we are working on in the CDL, we would love you to join us
              to collaborate on a shared vision of collective intelligence.
            </p>

            <p>
              Signed by <a href="https://canonicaldebatelab.com">CDL</a>
               members and allies:
            </p>

            <ul>
              <li>
                Felix Dietze, MSc CS, Sr. Full-Stack Developer :{' '}
                <a href="https://github.com/woost/wust">Wust</a>,{' '}
                <a href="https://github.com/woost/wust2">Wust2</a>,{' '}
                <a href="https://github.com/fdietze/wust3">Wust3</a>
                <ul>
                  <li>
                    <a href="https://felx.me/2021/08/29/improving-the-hacker-news-ranking-algorithm.html">
                      Improving Hacker News ranking algorithm
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/fdietze/notes/raw/master/felix_dietze_master_thesis_2015.pdf">
                      Quality Assurance in a Structured Collaborative Discussion
                      System
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                Joshua Frankel and Eugene Byrne :{' '}
                <a href="https://www.whysaurus.com/">Whysaurus</a>
              </li>
              <li>
                Carl Gieringer : <a href="http://howdju.com/">Howdju</a>
              </li>
              <li>
                Timothy High :{' '}
                <a href="https://canonicaldebatelab.com/">
                  Canonical Debate Lab
                </a>
                <ul>
                  <li>
                    <a href="https://github.com/canonical-debate-lab/paper/blob/master/README.mediawiki">
                      CDL Whitepaper
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                Steven Jeuris, PhD HCI, Software Architect :{' '}
                <a href="https://socratrees.azurewebsites.net/">Socratrees</a>
                <ul>
                  <li>
                    <a href="https://arxiv.org/abs/1812.04478">
                      Socratrees: Exploring the Design of Argument Technology
                      for Layman Users
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                Jamie Joyce:{' '}
                <a href="http://societylibrary.org">Society Library</a>
              </li>
              <li>
                Johannes Nakayama
                <ul>
                  <li>
                    <a href="https://felx.me/2021/08/29/improving-the-hacker-news-ranking-algorithm.html">
                      Improving Hacker News ranking algorithm
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                Dr Mathilde Noual, Theoretical Computer Scientist :{' '}
                <a href="https://www.incaseofpeace.org/">In Case of Peace </a>
              </li>
              <li>
                Marc-Antoine Parent, MSc Systems Science :{' '}
                <a href="https://hyperknowledge.org">HyperKnowledge</a>,{' '}
                <a href="https://idealoom.org">IdeaLoom</a>
                <ul>
                  <li>
                    <a href="https://catalyst-fp7.idea.kmi.open.ac.uk/catalyst-data/uploads/2016/01/Final_Report_CATALYST.compressed-2.pdf">
                      Harnessing The Power Of Collective Intelligence:
                      Communities &amp; Technologies
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                Jack Park :{' '}
                <a href="https://sensecraft.conversence.com">SenseCraft</a>
                 by <a href="http://www.topicquests.org">TopicQuests</a>
                <ul>
                  <li>
                    <a href="https://www.slideshare.net/jackpark/opensherlock-hybrid-computing-intelligence-augmentation">
                      OpenSherlock - Hybrid Computing - Intelligence
                      Augmentation
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    )
  }
}

export default CIDesign
