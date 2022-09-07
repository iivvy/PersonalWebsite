import React, { Component } from 'react'

export default class Project extends Component {
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
      render(){
        const project={
            "Ehl":{
                desc:"A web application dedicated to the higher school of computer science , that helps managing the student and teachers life in this school",
                tech_stack:"React.js, Node.js, MySQL",
                link:""
            },
            "Redone":{
                desc:"An algerian brand commerce website, created the front part of the website only",
                tech_stack:"HTML5, CSS, Javascript",
                link:"",
            },
            "Wecare":{
                desc:"A mobile application that helps people find the best psychological therapist and make appointments with him  ",
                tech_stack:"Flutter, Firebase ",
                link:"https://github.com/Spidey-y/WeCare-app.git",
            },
            "Rip_Net":{
                desc:"a project that allows the user to configure RIP protocols on GN3 network topology",
                tech_stack:"HTML5, CSS , Django",
                link:"",

            },
            "Online_pharm":{
                desc:"A simple GUI java application that helps pharmacists to manage their medecines stock and clients to order some medicines ",
                tech_stack:"JAVA, MySQL",
                link:"https://github.com/AymeneBoucha/Pharmacie-en-ligne.git",
                

            },
            "Personal_website":{
                desc:"its the webiste that you're scrolling in now",
                tech_stack:"React.js",
                link:"https://github.com/iivvy/PersonalWebsite.git",

            },
           
        }
        return(
          <div>
            
          </div>
        )

        
      }
}
