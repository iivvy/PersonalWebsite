import React from "react";
import "./About.css";
import Fade from "../Fade";


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
        <a style={{textDecoration:"none"}} href="https://www.esi-sba.dz/fr/">
          {" "}
          Higher school of computer science
        </a>
        {/* . After graduation, I will be joining{" "}
        <a href="https://www.aboutamazon.com/">Amazon</a> as a{" "}
        <b>Software Development Engineer</b> while undertaking a part-time
        <b> Master's of Science</b> in <b>Software Engineering </b>at{" "}
        <a href="https://www.ox.ac.uk/about">University of Oxford</a>. */}
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
      "Javascript ES6+",
      "Python",
      "React.js",
      "Java",
      "Node.js",
      "HTML & CSS",
      "Flutter"
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
              {/* <img src={"/assets/me2.jpg"} /> */}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default About;
