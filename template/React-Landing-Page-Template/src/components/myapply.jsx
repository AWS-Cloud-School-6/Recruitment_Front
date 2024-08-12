import React, { useEffect } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Apply from "./Apply"
const RESUME_API = 'http://34.172.8.241:8080/resumes/1'
const JOB_API = 'http://34.172.8.241:8080/job-postings/'
function Myapply() {

  const [loading, setLoading] = React.useState(true);
  const [apps, setApplist] = React.useState([]);
  const [jobs, setJobList] = React.useState([]);
  const getApplyList = async () => {
    const json = await (
      await fetch(
        RESUME_API,
      )
    ).json();
    setApplist(json.list);
    setLoading(false);

  };
  useEffect(() => {
    getApplyList();
  }, []);

  return (
    <div id="myapps">
      <div className="container">
        <div className="section-title text-center">
          <h2>나의 지원서</h2>
        </div>
        <div className="row">
          {loading ? (
            <h2>잠시만 기달려주세요...</h2>
          ) : (
            <div>
              {apps.map((apps) =>
              (<Apply
                jid={apps.jobPostingId}
                uid={apps.userId}
                name={apps.name}
                email={apps.email}
                phone={apps.phone}
                summary={apps.summary}
                education={apps.education}
                experience={apps.experience}
                skills={apps.skills}
                updatedAt={apps.updatedAt}
              />
              ))}
            </div>)}
        </div>
      </div>
    </div>
  );
};
export default Myapply;
