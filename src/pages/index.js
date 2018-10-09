import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import terrastackNetwork from '../assets/images/terrastack_network.png'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'TerraStack'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>
                  Supercharge Terraform with <nbsp />
                  <br />
                  the Javascript Ecosystem
                </h2>
              </header>
              <p>
                Leveraging NPM for dependency management and Node.js as platform
                to orchestrate Terraform stacks.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={terrastackNetwork} alt="" />
              </span>
            </div>
          </div>
        </section>
        <section id="one" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <span className="image fit">
                <img src={terrastackNetwork} alt="" />
              </span>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>
                  Supercharge Terraform with <nbsp />
                  <br />
                  the Javascript Ecosystem
                </h2>
              </header>
              <p>
                Leveraging NPM for dependency management and Node.js as platform
                to orchestrate Terraform stacks.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Homepage
