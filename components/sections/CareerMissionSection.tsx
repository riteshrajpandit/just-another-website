/**
 * @file Career Mission Section
 * @description Mission statement + 2025–2027 goals grid
 */

'use client';

import { Button } from '@/components/ui';
import { missionData, careerGoals } from '@/data/careers';
import { useAnimateOnScroll } from '@/hooks/useInView';
import styles from './CareerMissionSection.module.css';

export function CareerMissionSection() {
  const { ref: leftRef, className: leftClass } = useAnimateOnScroll();
  const { ref: rightRef, className: rightClass } = useAnimateOnScroll({ rootMargin: '0px 0px -50px 0px' });

  return (
    <section id="mission" className={styles.section} data-section-name="MISSION">
      <div className="container--full">
        <div className={styles.grid}>
          <div ref={leftRef} className={`${styles.left} ${leftClass}`}>
            <span className={styles.year} aria-hidden="true">{missionData.year}</span>
            <div className="section-eyebrow">
              <div className="section-eyebrow-line" />
              <span className="t-label">{missionData.eyebrow}</span>
            </div>
            <p
              className={styles.statement}
              dangerouslySetInnerHTML={{ __html: missionData.statement }}
            />
            <p className={styles.body}>{missionData.body}</p>
            <div className={styles.ctas}>
              <Button href={missionData.primaryCta.href} variant="primary">
                {missionData.primaryCta.label}
              </Button>
              <Button href={missionData.secondaryCta.href} variant="outline">
                {missionData.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div ref={rightRef} className={`${styles.right} ${rightClass}`}>
            <h3 className={styles.goalsHeading}>Goals for 2025–2027</h3>
            <ul className={styles.goalTrack}>
              {careerGoals.map((g) => (
                <li key={g.id} className={styles.goalItem}>
                  <span className={styles.goalNum}>{g.number}</span>
                  <div>
                    <p className={styles.goalTitle}>{g.title}</p>
                    <p className={styles.goalText}>{g.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
