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
                Terrastack enables you to keep using Terraform as engine, while defining your resources in actual programming languages such as Typescript, Python, Java or C# 
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
