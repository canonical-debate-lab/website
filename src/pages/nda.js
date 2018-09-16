import get from 'lodash/get'
import React from 'react'
import Layout from 'components/Layout'
import Meta from 'components/Meta'

class Nda extends React.Component {
  render() {
    const { location, data } = this.props

    return (
      <Layout location={location}>
        <Meta title="about" site={get(data, 'site.meta')} />

        <div
          dangerouslySetInnerHTML={{
            __html: `
            <style>
            ol {
              list-style-type: none;
              counter-reset: item;
              margin: 0;
              padding: 0;
            }
            
            ol > li {
              display: table;
              counter-increment: item;
              margin: 0.6em 0;
            }
            
            ol > li:before {
              content: counters(item, ".") ". ";
              display: table-cell;
              padding-right: 0.6em;    
            }
                      
            li ol > li:before {
              content: counters(item, ".") " ";
            }            </style>
          `,
          }}
        />
        <div>
          <section>
            <div className="container">
              <p>
                <span>
                  Canonical Debate Lab, for itself and its subsidiaries and
                  affiliates (“company”), and the other party identified below
                  (“You”) wish to enter into this agreement to discuss and
                  exchange information and to assure that the confidentiality of
                  exchanged information is maintained and that rights to ideas
                  or suggestions are properly allocated.
                </span>
              </p>
              <p>
                <span>The parties agree as follows:</span>
              </p>
              <ol>
                <li>
                  <span>
                    Purpose. You agree to take part in a study under this
                    agreement for the purpose of assisting Canonical Debate Lab
                    in researching and analyzing the usability of its current
                    and proposed products and services (the “Purpose”).
                  </span>
                </li>
                <li>
                  <span>
                    In the course of Your participation in the study, You may be
                    requested to provide comments, feedback, ideas, reports,
                    suggestions, data or other information to Canonical Debate
                    Lab (collectively “Feedback”). You agree that Your voice
                    and/or image may be recorded and such recording will also be
                    considered “Feedback”. You agree to permit Canonical Debate
                    Lab to use any Feedback provided by You without limitation
                    to develop and enhance Canonical Debate Lab’s current or
                    future products and services. Notwithstanding the foregoing,
                    You agree that You will not disclose to Canonical Debate Lab
                    any third-party information that You are otherwise obligated
                    to maintain as confidential.
                  </span>
                </li>
                <li>
                  <span>
                    For any Feedback provided by You that You communicate to
                    Canonical Debate Lab as being confidential in writing and
                    any information provided to You by Canonical Debate Lab
                    during the study period shall be considered confidential
                    (the “Confidential Information”), and the following terms
                    shall apply:
                  </span>
                  <ol>
                    <li>
                      <span>
                        each party may use such Confidential Information only
                        for the Purpose
                      </span>
                    </li>
                    <li>
                      <span>
                        the receiving party will use a reasonable degree of care
                        to protect Confidential Information and to prevent any
                        unauthorized use or disclosure of Confidential
                        Information
                      </span>
                    </li>
                    <li>
                      <span>
                        You may not share Confidential Information with any
                        third party in any manner. Canonical Debate Lab will not
                        disclose Your personal information without Your consent.
                        Except as otherwise provided by this agreement, any
                        personally identifiable data collected by Canonical
                        Debate Lab during the study shall be kept private.
                      </span>
                    </li>
                  </ol>
                </li>
                <li>
                  <span>
                    Confidential Information does not include information that:
                    (i) was known to the receiving party without restriction
                    before receipt from the disclosing party; (ii) is publicly
                    available through no fault of the receiving party; (iii) is
                    rightfully received by the receiving party from a third
                    party without a duty of confidentiality; or (iv) is
                    independently developed by the receiving party. A party may
                    disclose Confidential Information when compelled to do so by
                    law if it provides reasonable prior notice to the other
                    party.
                  </span>
                </li>
                <li>
                  <span>
                    This agreement imposes no obligation on Canonical Debate Lab
                    to use Your Feedback. Neither party acquires any
                    intellectual property rights under this agreement except the
                    express and implied, limited rights acquired by Canonical
                    Debate Lab to use the Feedback for the Purpose.
                  </span>
                </li>
                <li>
                  <span>
                    This agreement does not create any agency or partnership
                    relationship between the parties. This agreement is not
                    assignable or transferable by You. This agreement is the
                    parties’ entire agreement on this topic, superseding any
                    prior or contemporaneous agreements. Any amendments must be
                    in writing.
                  </span>
                </li>
              </ol>
              <p>
                <span>
                  Failure to enforce any of provisions of this agreement will
                  not constitute a waiver.
                </span>
              </p>
              <p>
                <span>
                  This agreement is effective as of the date accepted by
                  Canonical Debate Lab.
                </span>
              </p>
              <p>
                <span>
                  Party/Name (full company or individual name):
                  ________________________________
                </span>
              </p>
              <p>
                <span>Signature: ______________________________</span>
              </p>
              <p>
                <span>Address: _______________________________</span>
              </p>
              <p>
                <span>Date: __________________________________</span>
              </p>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Nda
