import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <ul className="icons">
          <li>
            <OutboundLink
              href="https://twitter.com/terrastackio"
              className="icon alt fa-twitter"
            >
              <span className="label">Twitter</span>
            </OutboundLink>
          </li>
          <li>
            <OutboundLink
              href="https://github.com/TerraStackIO/terrastack"
              className="icon alt fa-github"
            >
              <span className="label">GitHub</span>
            </OutboundLink>
          </li>
          <li>
            <OutboundLink
              href="mailto:get@terrastack.io"
              className="icon alt fa-envelope"
            >
              <span className="label">Email</span>
            </OutboundLink>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; <OutboundLink
              href="https://skorfmann.com"
            >Sebastian Korfmann</OutboundLink></li>
          <li>
            Design:{' '}
            <OutboundLink href="http://html5up.net">HTML5 UP</OutboundLink>
          </li>
        </ul>
      </section>
    )
  }
}

export default Footer
