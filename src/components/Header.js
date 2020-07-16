import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="icon major fa-cloud" />
          <h1>TerraStack is now Terraform CDK</h1>
          <h3> Polyglot Terraform in Typescript, Python, Java or C#</h3>
          <ul className="actions">
            <li>
              <OutboundLink
                href="https://github.com/hashicorp/terraform-cdk"
                className="button"
              >
                Explore on Github
              </OutboundLink>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Header
