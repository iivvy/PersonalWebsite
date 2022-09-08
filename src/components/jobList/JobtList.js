import { EmojiObjects } from '@material-ui/icons';
import React from 'react'
import Typist from 'react-typist';
import "react-typist/dist/Typist.css";

const JobtList = () => {
  const experience ={
    "cnas":{
        date:"JUN 2022 - JUL 2022",
        title:"DataBase Administration intern",
        desc:[""],

      
     },
     "transformatek":{
       date:"SEP 2022 - PRESENT",
       title:"Mobile application developpemnt intern",
       desc:[""],
     }
   
   }

  return (
    <div id ="joblist">
      <div>
        {Object.key(experience).map((key,i)=>(
          <div>
          {/* <span className='job-title'>{experience[key]["title"]}</span>
          <span className='job-date'>{experience[key]["date"]}</span> */}
          </div>

        ))
        }
      </div>
      
    </div>
  )
}

export default JobtList