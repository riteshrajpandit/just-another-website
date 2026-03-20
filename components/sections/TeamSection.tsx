/**
 * @file Team Section component
 * @description Team members grid with department filtering
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAnimateOnScroll } from '@/hooks';
import { teamMembers, teamFilters } from '@/data/about';
import type { TeamMember } from '@/types';

// Social icons
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

interface TeamCardProps {
  member: TeamMember;
  isLeader?: boolean;
}

function TeamCard({ member, isLeader = false }: TeamCardProps) {
  return (
    <div className={isLeader ? 'leader-card' : 'team-card'} data-dept={member.department}>
      <div className="team-photo">
        <div className="team-photo-placeholder">
          <div
            className="team-photo-placeholder-bg"
            style={{ background: member.gradient }}
          />
          <div className="team-photo-placeholder-shape team-photo-placeholder-shape--1" />
          {isLeader && <div className="team-photo-placeholder-shape team-photo-placeholder-shape--2" />}
          <span className="team-photo-placeholder-initials">{member.initials}</span>
        </div>
      </div>
      <div className="team-info-strip">
        <span className={isLeader ? 'leader-name' : 'team-name'}>{member.name}</span>
        <span className={isLeader ? 'leader-role' : 'team-role'}>{member.role}</span>
        {member.bio && <p className="leader-bio">{member.bio}</p>}
        {!isLeader && <span className="team-dept-tag">{member.department}</span>}
      </div>
      <div className="team-social-bar">
        {member.social.linkedin && (
          <a href={member.social.linkedin} className="team-social-link" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        )}
        {member.social.twitter && (
          <a href={member.social.twitter} className="team-social-link" aria-label="Twitter">
            <TwitterIcon />
          </a>
        )}
        {member.social.github && (
          <a href={member.social.github} className="team-social-link" aria-label="GitHub">
            <GitHubIcon />
          </a>
        )}
        {member.social.email && (
          <a href={member.social.email} className="team-social-link" aria-label="Email">
            <EmailIcon />
          </a>
        )}
      </div>
    </div>
  );
}

export function TeamSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { ref: headerRef, className: headerClass } = useAnimateOnScroll();
  const { ref: filtersRef, className: filtersClass } = useAnimateOnScroll();

  const leaders = teamMembers.filter((member) => member.department === 'leadership');
  const regularMembers = teamMembers.filter((member) => member.department !== 'leadership');

  const filteredMembers =
    activeFilter === 'all'
      ? regularMembers
      : regularMembers.filter((member) => member.department === activeFilter);

  const filteredLeaders =
    activeFilter === 'all' || activeFilter === 'leadership' ? leaders : [];

  return (
    <section id="team" className="section-pad" data-section-name="TEAM">
      <div className="container">
        <div ref={headerRef} className={`section-header ${headerClass}`}>
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="t-label">The People</span>
          </div>
          <h2 className="t-h2">
            287 People.
            <br />
            <span style={{ color: 'var(--brand-primary)' }}>One Direction.</span>
          </h2>
          <p className="t-body" style={{ maxWidth: '520px', marginTop: '1rem' }}>
            Our team spans four continents and more than forty nationalities. What unites us is a
            shared intolerance for infrastructure that does not work the way it should.
          </p>
        </div>

        {/* Department filter */}
        <div ref={filtersRef} className={`team-filters ${filtersClass}`}>
          {teamFilters.map((filter) => (
            <button
              key={filter.id}
              className={`team-filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* C-Suite leaders — large cards */}
        {filteredLeaders.length > 0 && (
          <div className="leaders-grid anim-up in" id="leaders-grid">
            {filteredLeaders.map((leader) => (
              <TeamCard key={leader.id} member={leader} isLeader />
            ))}
          </div>
        )}

        {/* Full team grid */}
        <div className="team-grid anim-up in" id="team-grid" style={{ transitionDelay: '0.1s' }}>
          {filteredMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* Join us prompt */}
        <div
          className="anim-up in"
          style={{
            marginTop: '1px',
            border: '1px solid var(--border)',
            background: 'var(--bg-surface)',
            padding: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
            transitionDelay: '0.2s',
          }}
        >
          <div>
            <div className="t-label" style={{ marginBottom: '0.5rem' }}>
              Open Positions
            </div>
            <div className="t-h4" style={{ marginBottom: '0.35rem' }}>
              We Are Actively Hiring
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              18 open roles across engineering, product, and operations. Competitive compensation,
              full remote options, and a team that takes the work seriously.
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              flexShrink: 0,
              flexWrap: 'wrap',
            }}
          >
            <Link href="#" className="btn btn-brand">
              View All Openings
            </Link>
            <Link href="#" className="btn btn-outline">
              Our Culture Deck
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
