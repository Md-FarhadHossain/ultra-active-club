import React, { useState } from "react";
import avatar from "../../assets/avatar.jpg";
import './UserActivity.css'

const UserActivity = ({studyTime}) => {

 const [breaktime, setBreakTime] = useState(0)

  let totalTime = 0

  for(const activity of studyTime){
    totalTime = totalTime + activity.time
  }

  const addBreakTime = (addTime) => {
  
    setBreakTime(addTime)
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



      {/* Add break */}
   
      <div className="addBreak">
        <div onClick={() => addBreakTime(10)}></div>
        <div onClick={() => addBreakTime(20)}></div>
        <div onClick={() => addBreakTime(30)}></div>
        <div onClick={() => addBreakTime(40)}></div>
        <div onClick={() => addBreakTime(50)}></div>
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
