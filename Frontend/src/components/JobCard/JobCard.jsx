import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="card-header">
        <span className={`type-badge ${job.type === 'Internship' ? 'intern' : 'ft'}`}>
          {job.type}
        </span>
        <span className="exp-badge">{job.experience}</span>
      </div>
      
      <h3>{job.title}</h3>
      <p className="company-name">{job.company}</p>
      
    <p className="location-text">
  <span className="pin">📍</span> {job.city || job.location}
</p>
      <div className="skills-container">
        {job.skills.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
      
      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

export default JobCard;
