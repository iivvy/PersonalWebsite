import React from "react";
import "./About.css";
import Fade from "../Fade";
import { setTranslate3d } from "rsuite/esm/List/helper/utils";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activekey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activekey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently a fourth year <b>Computer Science</b> major at
        <a style={{textDecoration:"none",color:"#8892b0"}} href="https://www.esi-sba.dz/fr/">
          {" "}
          Higher school of computer science {" "}  
        </a>
           and an intern at <a href="https://www.Transformatek.dz"></a>
       
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in following the developments of
        science. I also play a lot of video games.
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:ha.ferrar@esi-sba.dz">
          ha.ferrar@esi-sba.dz
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "Javascript",
      "Python",
      "React.js",
      "Java",
      "MySQL",
      "XML",
      "Node.js",
      "HTML & CSS",
      "Flutter",
      "R"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <Fade>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <Fade delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </Fade>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              {/* <img  /> */}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default About;
