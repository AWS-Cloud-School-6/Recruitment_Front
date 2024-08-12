import { Image } from "./image";
import React, { useEffect } from "react";
import Jobs from "./Jobs"
const SERVER_API = 'http://34.172.8.241:8080/job-postings'

function Joblist() {
  const [loading, setLoading] = React.useState(true);
  const [jobs, setJobList] = React.useState([]);
  const getJobList = async () => {
    const json = await (
      await fetch(
        SERVER_API,
      )
    ).json();
    setJobList(json.list);
    setLoading(false);
  };
  useEffect(() => {
    getJobList();
  }, []);
  console.log(jobs);
  console.log(jobs.title);
  const date = new Date(jobs.createAt);
  return (
    <div id="portfolio" className="text-center">
      <div>
        <div className="section-title">
          <h2>채용공고 리스트</h2>
        </div>
        <div>
        </div>
        <div className="row">
          <div className="portfolio-items ">
            {loading ? (
              <h2>잠시만 기달려주세요...</h2>
            ) : (
              <div>
                {jobs.map((jobs) =>
                (<Jobs
                  key={jobs.jobPostingid}
                  id={jobs.jobPostingid}
                  title={jobs.title}
                  descr={jobs.description}
                  company={jobs.company}
                  loc={jobs.location}
                  createAt={jobs.createAt}
                  updatedAt={jobs.updatedAt}
                />
                ))}
              </div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Joblist;