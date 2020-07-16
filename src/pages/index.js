import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import terrastackNetwork from '../assets/images/terrastack.png'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'TerraStack is now Terraform CDK'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>
                  The idea of Terrastack lives on in the Terraform CDK
                </h2>
              </header>
              <p>
                Please check it out on Github <a href="https://github.com/hashicorp/terraform-cdk">https://github.com/hashicorp/terraform-cdk</a>
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={terrastackNetwork} alt="" />
              </span>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Homepage
