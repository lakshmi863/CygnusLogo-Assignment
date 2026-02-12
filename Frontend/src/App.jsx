import React, { useState, useEffect } from 'react';
import { jobs } from './components/data/jobs';
import Navbar from './components/Navbar/Navbar';
import Filters from './components/Filter/Filters';
import JobList from './components/JobList/JobList';
import Pagination from './components/Pagination/Pagination';
import Footer from './components/Footer/Footer';
import './App.css';

// Create simple internal components for the new sections
const CompaniesView = () => (
  <div className="extra-view">
    <h2>Top Companies Hiring</h2>
    <div className="company-grid">
      {["Microsoft", "Google", "Amazon", "Acme Corp", "Tech Solutions"].map(c => (
        <div key={c} className="company-promo-card">
          <img src={`https://logo.clearbit.com/${c.toLowerCase().replace(' ', '')}.com`} alt={c} onError={(e)=>e.target.src='https://via.placeholder.com/50'} />
          <h4>{c}</h4>
          <p>Fortune 500 • Software</p>
          <button className="view-jobs-btn">View 20+ Jobs</button>
        </div>
      ))}
    </div>
  </div>
);

const ServicesView = () => (
  <div className="extra-view">
    <h2>Cygnus Career Services</h2>
    <div className="services-list">
      <div className="service-card">
        <h3>Resume Writing</h3>
        <p>Get a professional resume designed by experts.</p>
        <span>Starting at ₹999</span>
      </div>
      <div className="service-card highlight">
        <h3>Priority Applicant</h3>
        <p>Boost your profile 3x faster to top employers.</p>
        <span>Starting at ₹1,499</span>
      </div>
    </div>
  </div>
);

function App() {
  const [view, setView] = useState("Jobs"); // State to handle Navbar selection
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ workMode: [], city: [], department: [], exp: 10 });
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  // Filter and Pagination logic remains the same
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesWorkMode = filters.workMode.length === 0 || filters.workMode.includes(job.workMode);
    const matchesCity = filters.city.length === 0 || filters.city.includes(job.city);
    const matchesDept = filters.department.length === 0 || filters.department.includes(job.department);
    return matchesSearch && matchesWorkMode && matchesCity && matchesDept && (job.exp <= filters.exp);
  });

  const currentJobs = filteredJobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

  return (
    <div className="app-wrapper">
      {/* Updated Navbar with view state */}
      <Navbar view={view} setView={setView} searchTerm={searchTerm} onSearchChange={setSearchTerm} /> 
      
      <div className="app-layout">
        {/* Only show Filters Sidebar if the view is "Jobs" */}
        {view === "Jobs" && (
          <aside className="sidebar">
            <Filters filters={filters} setFilters={setFilters} jobs={jobs} />
          </aside>
        )}
        
        <main className="main-content">
          {/* CONTENT SWITCHING LOGIC */}
          {view === "Jobs" ? (
            <>
              <div className="results-summary">
                <p>Showing <b>{filteredJobs.length}</b> matches</p>
              </div>
              <JobList jobs={currentJobs} />
              <Pagination totalJobs={filteredJobs.length} jobsPerPage={jobsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </>
          ) : view === "Companies" ? (
            <CompaniesView />
          ) : (
            <ServicesView />
          )}

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;