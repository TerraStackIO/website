import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import terrastackNetwork from '../assets/images/terrastack.png'

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
                  Polyglot Terraform <nbsp />
                  <br />
                  in Typescript, Python, Java or C#
                </h2>
              </header>
              <p>                
                Use an actual programming language to define your Terraform resources. Borrowing from the CDK and leveraging jsii for polyglot libraries,
                this allows you to choose from Typescript, Python, Java or C# with even more choices to come.
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
