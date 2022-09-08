import React, { Component } from 'react'
import Typist from 'react-typist';
import Fade from '../Fade';
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import './intro.css'

 class Intro extends Component {
    constructor (){
        super();
        this.state={
            expanded:true,
            activatekey:"1",
            visible:true
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey){
        this.setState({
            activatekey:eventKey
        });
    }
  render() {
    return (
      <div id="intro">
        <Typist  avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"hadjer"}</span>
            {" here."}
          </span>
        </Typist>
        <Fade>
            <div className='intro1'>
              Still looking for something to put here.
              </div>
            <div className='intro2'> <p>I'm software engineer based in Algeria.
             I have a great interest in Front-end developement, cybersecurity and human-computer intercations,
              and everything in computer science.</p></div>
            <a href='mailto:ha.ferrar@esi-sba.dz' className="intro-contact">
            <EmailRoundedIcon style={{color:"#64ffda",height:"30PX",width:"30PX"}}></EmailRoundedIcon>
            {" " + "Say Hi!"}
            </a>
 
        </Fade>
      </div>
    )
  }
}
export default Intro
