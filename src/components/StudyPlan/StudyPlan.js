import React, { useEffect, useState } from "react";
import Activites from "../Activities/Activites";
import UserActivity from "../UserActivity/UserActivity";
import "./StudyPlan.css";

const StudyPlan = () => {
  const [activities, setactivities] = useState([]);
  const [studyTime, setStudyTime] = useState([])

  useEffect(() => {
    fetch("activity.json")
      .then((res) => res.json())
      .then((data) => setactivities(data));
  }, []);




  const addToList = (activity) => {
    let newStudyTime = [...studyTime, activity]
    setStudyTime(newStudyTime)
  };

  return (
    <section className="studySection">
      <div className="studyPlan-container">
        <h1>Select your Study plan {activities.length}</h1>

        <div className="activity-container">
          {activities.map((activity) => (
            <Activites
              key={activity.id}
              activity={activity}
              addToList={addToList}
            />
          ))}
        </div>
      </div>

      <div className="studyClac-container">
        <UserActivity studyTime={studyTime} />
      </div>
    </section>
  );
};

export default StudyPlan;
