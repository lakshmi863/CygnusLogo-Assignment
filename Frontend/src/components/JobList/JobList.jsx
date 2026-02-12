import React from 'react';
import JobCard from '../JobCard/JobCard';

const JobList = ({ jobs }) => {
  if (jobs.length === 0) {
    return (
      <div className="no-results">
        <p>No jobs found matching your filters. Try a different search term!</p>
      </div>
    );
  }

  return (
    <div className="job-grid">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;