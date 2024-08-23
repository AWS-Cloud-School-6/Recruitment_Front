import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Apply from "./Apply";

const JOB_API = 'http://08jiq8xrd6.execute-api.us-east-2.amazonaws.com/api-gw:8080/api/job-postings';
function Myapply() {
  const user = useSelector((state) => state.user);

  const RESUME_API = `http://08jiq8xrd6.execute-api.us-east-2.amazonaws.com/api-gw:8080/api/resumes/${user.id}`;
  const [loading, setLoading] = useState(true);
  const [apps, setApps] = useState([]);
  const [error, setError] = useState(null);

  const getApplyList = async () => {
    try {
      const response = await fetch(RESUME_API);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setApps(data.list);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getApplyList();
  }, []);

  if (loading) {
    return <h2>잠시만 기다려주세요...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div id="myapps">
      <div className="container">
        <div className="section-title text-center">
          <h2>나의 지원서</h2>
        </div>
        <div className="row">
          {apps && apps.length > 0 ? (
            <div>
              {apps.map((app) => (
                <Apply
                  key={app.id} // Ensure each item has a unique key
                  jid={app.jobPostingId}
                  uid={app.userId}
                  name={app.name}
                  email={app.email}
                  phone={app.phone}
                  summary={app.summary}
                  education={app.education}
                  experience={app.experience}
                  skills={app.skills}
                  updatedAt={app.updatedAt}
                />
              ))}
            </div>
          ) : (
            <div className="text-center">
              <h2>지원한 내역이 없습니다.</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Myapply;