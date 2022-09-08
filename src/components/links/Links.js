import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Links.css'
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";


export default class Links extends Component {
  constructor(){
    super()
    this.state = {
      expanded: true,
      activekey: "1"
    }
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey){
    this.setState({
      activekey:eventKey,
    })
  }

  render() {
    return (
      <span className="external-links">
        <a className="github-icon" href={this.props.githubLink}>
          <GitHubIcon
            style={{
              fontSize: 20,
              color: "var(--lightest-slate)"
            }}
          ></GitHubIcon>
        </a>
        {this.props.openLink && (
          <a className="open-icon" href={this.props.openLink}>
            <OpenInBrowserIcon
              style={{
                fontSize: 25,
                color: "var(--lightest-slate)"
              }}
            ></OpenInBrowserIcon>
          </a>
        )}
     </span>
    )
  }
}
