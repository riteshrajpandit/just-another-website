/**
 * @file Job Listings Section
 * @description Filterable job grid with department and search
 */

'use client';

import { useState, useMemo } from 'react';
import { jobListings, jobDepartments } from '@/data/careers';
import type { JobDepartment } from '@/types';
import styles from './JobListingsSection.module.css';

const deptIcons: Record<string, string> = {
  Engineering: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  Product: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  Operations: 'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z M12 6v6l4 2',
  'Go-to-Market': 'M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',
};

export function JobListingsSection() {
  const [activeFilter, setActiveFilter] = useState<'All' | JobDepartment>('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return jobListings.filter((job) => {
      const matchesDept = activeFilter === 'All' || job.department === activeFilter;
      const matchesSearch = search === '' ||
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.department.toLowerCase().includes(search.toLowerCase());
      return matchesDept && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <section id="openings" className={`section-pad ${styles.section}`} data-section-name="OPENINGS">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="t-label">Open Positions</span>
          </div>
          <h2 className="t-h2">
            {filtered.length} {activeFilter === 'All' ? 'Open' : activeFilter} Role{filtered.length !== 1 ? 's' : ''}
          </h2>
        </div>

        {/* Filters */}
        <div className={styles.filters} role="group" aria-label="Filter by department">
          {jobDepartments.map((dept) => (
            <button
              key={dept}
              className={`${styles.filterBtn} ${activeFilter === dept ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(dept as typeof activeFilter)}
              aria-pressed={activeFilter === dept}
            >
              {dept}
            </button>
          ))}
          <div className={styles.searchWrap}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" />
            </svg>
            <input
              type="search"
              placeholder="Search roles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search job listings"
            />
          </div>
        </div>

        {/* Job Grid */}
        {filtered.length > 0 ? (
          <ul className={styles.grid} role="list">
            {filtered.map((job) => (
              <li key={job.id} className={styles.card}>
                {job.isNew && <span className={styles.newBadge}>New</span>}
                <div className={styles.cardTop}>
                  <div className={styles.deptIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d={deptIcons[job.department] ?? deptIcons.Engineering} />
                    </svg>
                  </div>
                  <div>
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                    <p className={styles.jobDept}>{job.department}</p>
                  </div>
                </div>
                <div className={styles.jobMeta}>
                  <span className={styles.metaTag}>{job.location}</span>
                  <span className={styles.metaTag}>{job.type}</span>
                </div>
                <p className={styles.jobDesc}>{job.description}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.applicants}>{job.applicants} applicants</span>
                  <button className={styles.applyBtn} aria-label={`Apply for ${job.title}`}>
                    Apply
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.noResults}>No roles match your search. Try a different filter.</p>
        )}
      </div>
    </section>
  );
}
