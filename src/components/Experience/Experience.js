import React from "react";
import JobtList from "../jobList/JobtList";
import './experience.css'
import Fade from "../Fade";
import './experience.css'
import "../../App.css";
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
           <div className="section-header ">
            <span className="section-title">/ experience</span>
          </div>
        <Fade>
       
          <JobtList></JobtList>
        </Fade>
      </div>
    );
  }
}

export default Experience;