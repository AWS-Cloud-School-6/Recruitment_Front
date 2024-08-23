import React, { useEffect, useState } from "react";
import { Image } from "./image";
import Jobs from "./Jobs";

const SERVER_API = 'http://08jiq8xrd6.execute-api.us-east-2.amazonaws.com/api-gw:8080/api/job-postings';

function Joblist() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobList] = useState([]);
  const [error, setError] = useState(null);

  const getJobList = async () => {
    try {
      const response = await fetch(SERVER_API);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setJobList(data.list);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJobList();
  }, []);

  if (loading) {
    return <h2>잠시만 기다려주세요...</h2>;
  }

  if (error) {
    const errormsg = error.message;
    return alert(errormsg);
  }

  return (
    <div id="portfolio" className="text-center">
      <div>
        <div className="section-title">
          <h2>채용공고 리스트</h2>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {jobs.length > 0 ? (
              <div>
                {jobs.map((job) => (
                  <Jobs
                    key={job.jobPostingid} // Ensure each item has a unique key
                    id={job.jobPostingid}
                    title={job.title}
                    descr={job.description}
                    company={job.company}
                    loc={job.location}
                    createAt={job.createAt}
                    updatedAt={job.updatedAt}
                  />
                ))}
              </div>
            ) : (
              <h2>채용공고가 없습니다.</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Joblist;