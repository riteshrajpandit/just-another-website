/**
 * @file Team Section component
 * @description Team members grid with department filtering
 */

'use client';

import { useState } from 'react';
import { useAnimateOnScroll } from '@/hooks';
import { Button } from '@/components/ui';
import { teamMembers, teamFilters } from '@/data/about';
import type { TeamMember } from '@/types';
import styles from './TeamSection.module.css';

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
    <div className={isLeader ? styles.leaderCard : styles.teamCard} data-dept={member.department}>
      <div className={styles.teamPhoto}>
        <div className={styles.teamPhotoPlaceholder}>
          <div
            className={styles.teamPhotoPlaceholderBg}
            style={{ background: member.gradient }}
          />
          <div className={`${styles.teamPhotoPlaceholderShape} ${styles.teamPhotoPlaceholderShape1}`} />
          {isLeader && <div className={`${styles.teamPhotoPlaceholderShape} ${styles.teamPhotoPlaceholderShape2}`} />}
          <span className={styles.teamPhotoPlaceholderInitials}>{member.initials}</span>
        </div>
      </div>
      <div className={styles.teamInfoStrip}>
        <span className={isLeader ? styles.leaderName : styles.teamName}>{member.name}</span>
        <span className={isLeader ? styles.leaderRole : styles.teamRole}>{member.role}</span>
        {member.bio && <p className={styles.leaderBio}>{member.bio}</p>}
        {!isLeader && <span className={styles.teamDeptTag}>{member.department}</span>}
      </div>
      <div className={styles.teamSocialBar}>
        {member.social.linkedin && (
          <a href={member.social.linkedin} className={styles.teamSocialLink} aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        )}
        {member.social.twitter && (
          <a href={member.social.twitter} className={styles.teamSocialLink} aria-label="Twitter">
            <TwitterIcon />
          </a>
        )}
        {member.social.github && (
          <a href={member.social.github} className={styles.teamSocialLink} aria-label="GitHub">
            <GitHubIcon />
          </a>
        )}
        {member.social.email && (
          <a href={member.social.email} className={styles.teamSocialLink} aria-label="Email">
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
    <section id="team" className={`${styles.team} section-pad`} data-section-name="TEAM">
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
        <div ref={filtersRef} className={`${styles.teamFilters} ${filtersClass}`}>
          {teamFilters.map((filter) => (
            <button
              key={filter.id}
              className={`${styles.teamFilterBtn} ${activeFilter === filter.id ? styles.teamFilterBtnActive : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* C-Suite leaders — large cards */}
        {filteredLeaders.length > 0 && (
          <div className={`${styles.leadersGrid} anim-up in`} id="leaders-grid">
            {filteredLeaders.map((leader) => (
              <TeamCard key={leader.id} member={leader} isLeader />
            ))}
          </div>
        )}

        {/* Full team grid */}
        <div className={`${styles.teamGrid} anim-up in`} id="team-grid" style={{ transitionDelay: '0.1s' }}>
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
            <Button href="/careers" variant="brand">
              View All Openings
            </Button>
            <Button href="/careers#culture" variant="outline">
              Our Culture Deck
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
