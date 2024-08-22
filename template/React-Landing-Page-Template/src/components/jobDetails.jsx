import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const SERVER_API = 'http://aiwa-alb-1-1052179513.us-east-2.elb.amazonaws.com:8080/api/job-postings'

function JobDetails() {
    const [job, setJob] = useState(null);
    const { id } = useParams();

    const getJobList = async () => {
        try {
            const response = await fetch(SERVER_API);
            const json = await response.json();
            const selectedJobPosting = json.list.find(
                (job) => job.jobPostingid === parseInt(id)
            );
            setJob(selectedJobPosting);
        } catch (error) {
            console.error('Failed to fetch job postings', error);
        }
    };

    useEffect(() => {
        getJobList();
    }, [id]); // Dependency array includes id to refetch if id changes

    if (!job) {
        return <div>Loading...</div>;
    }

    return (
        <div id="portfolio" className="text-center">
            <h1>{job.title}</h1>
            <p>{job.description}</p>
            <p>Company: {job.company}</p>
            <p>Location:{job.location}</p>
            <Link to={`/joblist/${id}/apply`}>
                <button>Apply</button>
            </Link>
            <Link to="/joblist">
                <button>Back</button>
            </Link>
        </div>
    );
}

export default JobDetails;