import React from "react";
import JobList from "./JobList";
import "../styles/Experience.css";
import "../Fade.js"

class Experience extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="experience">
        <Fade>
          <div className="section-header ">
            <span className="section-title">/ experience</span>
          </div>
          <JobList></JobList>
        </Fade>
      </div>
    );
  }
}

export default Experience;