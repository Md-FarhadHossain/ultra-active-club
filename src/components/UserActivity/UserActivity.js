import React, { useEffect, useState } from "react";
import avatar from "../../assets/avatar.jpg";
import { addToDB, getStoredTime } from "../../utilites/timeDB";
import './UserActivity.css'

const UserActivity = ({studyTime, activities}) => {
  // console.log(activities)
  const [breaktime, setBreakTime] = useState(10)



  let totalTime = 0

  for(const activity of studyTime){
    totalTime = totalTime + activity.time
  }


useEffect(() => {
    const a = localStorage.getItem('break')

    if(a){
      setBreakTime(a)
    }
    console.log(a)
    
} ,[])
 

  // useEffect(() => {
  //  const a = localStorage.getItem('break-time')

   

  // if(a){
  //   setBreakTime(a)
  // }
  // } , [])


  // useEffect(() => {

  //   console.log(activities)

  //   const storedTime = getStoredTime()

  //   console.log(storedTime) 

  //   for(const id in storedTime){         

  //     const addedTime = activities.find(activity => {
  //       return activity.id === id
  //     })
  //     console.log(addedTime)
      
  //   }  
  // }, [activities])


  let locaTime;

  const addBreakTime = (addTime) => {
  
    setBreakTime(addTime)
    addToDB(addTime)

    console.log(addTime)
   const a = localStorage.setItem('break', addTime)
    const b = localStorage.getItem('break')
    console.log(b)
    if(b){
      setBreakTime(b)
    }
    

  }

  return (
    <div className="userDetails">
        {/* User info */}
      <div className="user-info">
        <div className="user-image">
          <img src={avatar} alt="avatar" />
        </div>

        <div>
            <h2><strong>Farhad Hossain</strong></h2>
            <p>Satkhira, Khulna, Bangladesh</p>
        </div>

        
      </div>

      <div>

      <div className="userSchool">
          <div className="userSchoolInfo"><h1>01</h1><p>Roll</p></div>
          <div className="userSchoolInfo"><h1>10</h1><p>Class</p></div>
          <div className="userSchoolInfo"><h1>1881</h1><p>S. ID</p></div>
        </div>
      </div>




      {/* Add break */}
   
      <div className="addBreak">
        <div onClick={() => addBreakTime(10)}>10</div>
        <div onClick={() => addBreakTime(20)}>20</div>
        <div onClick={() => addBreakTime(30)}>30</div>
        <div onClick={() => addBreakTime(40)}>40</div>
        <div onClick={() => addBreakTime(50)}>50</div>
      </div>


      {/* Study Details */}
      <div className="studyDetails">
        <div>Study time: <span id="study_time">{totalTime} minute</span></div>
        <div>Break time: <span id="break_time">{breaktime} minute</span></div>
      </div>


      {/* Activity complete button */}
      <button>Activity Completed</button>
    </div>
  );
};

export default UserActivity;
