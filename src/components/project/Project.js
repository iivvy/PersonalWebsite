import React, { Component } from 'react'
import Fade from '../Fade';
import './project.css'
import Links from '../links/Links';
import { FolderOpenRounded} from '@material-ui/icons';

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
        const projects={
            "Ehl":{
                title:"Esi House learning",
                desc:"A web application dedicated to the higher school of computer science , that helps managing the student and teachers life in this school.",
                tech_stack:"React.js, Node.js, MySQL",
                link:"",
                open:""
            },
            "Redone":{
                title:"Redone",
                desc:"An algerian brand commerce website, contributed in the front part of the website only.",
                tech_stack:"HTML5, CSS3, Javascript",
                link:"",
                open:""
            },
            "Wecare":{
              title:"WeCare",
                desc:"A mobile application that helps people find the best psychological therapist and schedule appointments with him  ",
                tech_stack:"Flutter, Firebase ",
                link:"https://github.com/Spidey-y/WeCare-app.git",
                open:""
            },
            "Rip_Net":{
                title:"RipNet",
                desc:"a project that allows the user to configure RIP protocol on GN3 network topology",
                tech_stack:"HTML5, CSS , Django",
                link:"",
                open:"www.google.com"

            },
            "Online_pharm":{
                title:"YourPharm",
                desc:"A simple GUI java swing application that helps pharmacists to manage their medecines stock and clients to order some medicines ",
                tech_stack:"JAVA, MySQL",
                link:"https://github.com/AymeneBoucha/Pharmacie-en-ligne.git",
                open:"www.google.com"
                

            },
            "Personal_website":{
                title:"personal website",
                desc:"is the webiste that you're scrolling in now",
                tech_stack:"React.js",
                link:"https://github.com/iivvy/PersonalWebsite.git",
                open:"www.google.com"

            },
        }
        return(
          <div id='projects'>
            <div className='section-header'>

              <span className='section-title'>/Projects</span>
              </div>
  
            <div  className='project'>
              <div className='project-header'>
                <ul className='projects-grid'>
                {Object.keys(projects).map((key,i)=>(
                  <Fade delay={`${i + 1}00ms`}>
                    <li className='project-card'>
                      <div className='card-header'> 
                      {/* <div className='folder-icon'>
                        <FolderOpenRounded style={{ fontSize: 35 }}></FolderOpenRounded>
                      </div> */}
                        <Links 
                        githubLink= {projects[key]["link"]}
                        openLink= {projects[key]["open"]}>
                        </Links>
                      </div>
                      <div className='title'>{projects[key]['title']}</div>
                      <div className='desc'>{projects[key]['desc']}</div>
                      <div className='teck_stack'>{projects[key]["tech_stack"]}

                      </div>
                    </li>
            </Fade>
))}
</ul>
            </div>
          </div>
          </div>
        )}}
//  <div className="project-container">
// <ul className="projects-grid">
//   {Object.keys(projects).map((key, i) => (
//     <FadeInSection delay={`${i + 1}00ms`}>
//       <li className="projects-card">
//         <div className="card-header">
//           <div className="folder-icon">
//             <FolderOpenRoundedIcon
//               style={{ fontSize: 35 }}
//             ></FolderOpenRoundedIcon>
//           </div>
//           <ExternalLinks
//             githubLink={projects[key]["link"]}
//             openLink={projects[key]["open"]}
//           ></ExternalLinks>
//         </div>
//         <div className="card-title">{key}</div>
//         <div className="card-desc">{projects[key]["desc"]}</div>
//         <div className="card-tech">{projects[key]["techStack"]}</div>
//       </li>
//     </FadeInSection>
//   ))}
// </ul>
// </div>