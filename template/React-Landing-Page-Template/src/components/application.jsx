import axios from 'axios';
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

const SERVER_API = 'http://08jiq8xrd6.execute-api.us-east-2.amazonaws.com/api-gw:8080/api/resumes';
function Application() {
    const user = useSelector((state) => state.user);
    const { id } = useParams();
    const [formData, setFormData] = useState({
        jobPostingId: id,
        userId: user.id,
        name: '',
        email: '',
        phone: '',
        summary: '',
        education: '',
        experience: '',
        skills: []
    });


    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === 'skills') {
            setFormData((prevState) => {
                if (checked) {
                    return {
                        ...prevState,
                        skills: [...prevState.skills, value],
                    };
                } else {
                    return {
                        ...prevState,
                        skills: prevState.skills.filter((skills) => skills !== value),
                    };
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSend = {
            ...formData,
            skills: formData.skills.join(', ')  // Join array elements with a comma and a space
        };
        axios.post(SERVER_API, dataToSend)
            .then((response) => {
                setFormData({
                    jobPostingId: id,
                    userId: user.id,
                    name: '',
                    email: '',
                    phone: '',
                    summary: '',
                    education: '',
                    experience: '',
                    skills: []
                });

                alert(response.data.msg);

            })
            .catch((error) => {
                alert(error);
            });
    };

    return (
        <div id="portfolio" className="text-center">
            <h1>Application</h1>
            <div className="container mt-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Phone</label>
                        <input
                            type="text"
                            className="form-control"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Summary</label>
                        <textarea
                            className="form-control"
                            name="summary"
                            value={formData.summary}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Education</label>
                        <textarea
                            className="form-control"
                            name="education"
                            value={formData.education}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Experience</label>
                        <textarea
                            className="form-control"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="form-group" >
                        <label className="form-label">Skills</label>
                        <br />
                        <br />
                        <div>
                            <div className="form-check" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', width: '200px' }}>
                                <label className="form-check-label">
                                    <span className="badge bg-primary">Java</span>
                                </label>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="skills"
                                    value="Java"
                                    checked={formData.skills.includes('Java')}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-check" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', width: '200px' }}>
                                <label className="form-check-label">
                                    <span className="badge bg-success">Spring Boot</span>
                                </label>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="skills"
                                    value="Spring Boot"
                                    checked={formData.skills.includes('Spring Boot')}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-check" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', width: '200px' }}>
                                <label className="form-check-label">
                                    <span className="badge bg-warning">SQL</span>
                                </label>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="skills"
                                    value="SQL"
                                    checked={formData.skills.includes('SQL')}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-check" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', width: '200px' }}>
                                <label className="form-check-label">
                                    <span className="badge bg-warning">AWS</span>
                                </label>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="skills"
                                    value="AWS"
                                    checked={formData.skills.includes('AWS')}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Application;
