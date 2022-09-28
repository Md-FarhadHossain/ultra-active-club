import React from "react";
import avatar from "../../assets/avatar.jpg";
import './UserActivity.css'

const UserActivity = () => {
  return (
    <div>
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
        <div><span className="breakTime">10</span>s</div>
        <div><span className="breakTime">20</span>s</div>
        <div><span className="breakTime">30</span>s</div>
        <div><span className="breakTime">40</span>s</div>
        <div><span className="breakTime">50</span>s</div>
      </div>


      {/* Study Details */}
      <div className="studyDetails">
        <div>Study time: <span id="study_time">30 minute</span></div>
        <div>Break time: <span id="break_time">15 minute</span></div>
      </div>


      {/* Activity complete button */}
      <button>Activity Completed</button>
    </div>
  );
};

export default UserActivity;
