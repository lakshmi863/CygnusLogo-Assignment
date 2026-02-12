import React, { useState } from 'react';

const Filters = ({ filters, setFilters, jobs }) => {
  // 1. State to track which sections are expanded (Open by default)
  const [expanded, setExpanded] = useState({
    workMode: true,
    experience: true,
    location: true,
    department: true
  });

  // Function to toggle sections
  const toggleSection = (section) => {
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const getCount = (key, value) => jobs.filter(j => j[key] === value).length;

  const handleCheckboxChange = (category, value) => {
    const current = filters[category];
    const updated = current.includes(value) 
      ? current.filter(item => item !== value) 
      : [...current, value];
    setFilters({ ...filters, [category]: updated });
  };

  return (
    <div className="filter-sidebar">
      <h3>All Filters</h3>
      <hr />

      {/* --- Work Mode Section --- */}
      <div className="filter-section">
        <h4 onClick={() => toggleSection('workMode')} className="accordion-title">
          Work mode <span>{expanded.workMode ? '⌃' : '⌵'}</span>
        </h4>
        {expanded.workMode && (
          <div className="filter-items-container">
            {["Work from office", "Hybrid", "Remote"].map(mode => (
              <label key={mode} className="filter-item">
                <input 
                  type="checkbox" 
                  checked={filters.workMode.includes(mode)}
                  onChange={() => handleCheckboxChange('workMode', mode)}
                />
                {mode} <span className="count">({getCount('workMode', mode)})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* --- Experience Section --- */}
      <div className="filter-section">
        <h4 onClick={() => toggleSection('experience')} className="accordion-title">
          Experience <span>{expanded.experience ? '⌃' : '⌵'}</span>
        </h4>
        {expanded.experience && (
          <div className="filter-items-container">
            <input 
              type="range" min="0" max="10" 
              value={filters.exp} 
              onChange={(e) => setFilters({...filters, exp: e.target.value})}
            />
            <div className="range-labels">
              <span>0 Yrs</span>
              <span className="current-val">{filters.exp === "10" ? "Any" : `${filters.exp} Yrs`}</span>
            </div>
          </div>
        )}
      </div>

      {/* --- Location Section --- */}
      <div className="filter-section">
        <h4 onClick={() => toggleSection('location')} className="accordion-title">
          Location <span>{expanded.location ? '⌃' : '⌵'}</span>
        </h4>
        {expanded.location && (
          <div className="filter-items-container">
            {["Hyderabad", "Bengaluru", "Pune", "Rangareddy"].map(city => (
              <label key={city} className="filter-item">
                <input 
                  type="checkbox"
                  checked={filters.city.includes(city)}
                  onChange={() => handleCheckboxChange('city', city)}
                />
                {city} <span className="count">({getCount('city', city)})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* --- Department Section --- */}
      <div className="filter-section">
        <h4 onClick={() => toggleSection('department')} className="accordion-title">
          Department <span>{expanded.department ? '⌃' : '⌵'}</span>
        </h4>
        {expanded.department && (
          <div className="filter-items-container">
            {["Engineering - Software", "Data Science & Analytics", "Design", "Consulting", "Human Resources", "IT & Information Services"].map(dept => (
              <label key={dept} className="filter-item">
                <input 
                  type="checkbox"
                  checked={filters.department.includes(dept)}
                  onChange={() => handleCheckboxChange('department', dept)}
                />
                {dept} <span className="count">({getCount('department', dept)})</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;