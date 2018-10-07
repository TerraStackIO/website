import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="icon major fa-cloud" />
          <h1>TerraStack</h1>
          <h3> Open Source Orchestration for Terraform Workflows</h3>
          <ul className="actions">
            <li>
              <a
                href="https://github.com/TerraStackIO/terrastack"
                className="button"
              >
                Explore on Github
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Header
