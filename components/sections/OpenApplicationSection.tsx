/**
 * @file Open Application Section + Careers CTA
 * @description CV drop zone and next steps, followed by CTA band
 */

'use client';

import { useRef, useState } from 'react';
import { Button } from '@/components/ui';
import styles from './OpenApplicationSection.module.css';

const nextSteps = [
  { num: '01', title: 'Confirmation Sent', desc: 'We acknowledge your submission within 24 hours via email.' },
  { num: '02', title: 'Monthly Talent Review', desc: 'Your profile is reviewed by our team every first Monday of the month.' },
  { num: '03', title: 'Direct Reach-Out', desc: "When a relevant role opens, you'll hear from us directly — no job board middleman." },
] as const;

export function OpenApplicationSection() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File | null) => {
    if (file) setFileName(file.name);
  };

  return (
    <>
      <section id="open-application" className={`section-pad ${styles.section}`} data-section-name="APPLY">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">
              <div className="section-eyebrow-line" />
              <span className="t-label">Open Application</span>
            </div>
            <h2 className="t-h2">No Matching Role?<br />Drop Your CV Anyway.</h2>
          </div>

          <div className={styles.grid}>
            {/* Drop Zone */}
            <div>
              <div
                className={`${styles.dropZone} ${isDragging ? styles.dragging : ''}`}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setIsDragging(false);
                  handleFile(e.dataTransfer.files[0] ?? null);
                }}
                onClick={() => fileRef.current?.click()}
                role="button"
                tabIndex={0}
                aria-label="Drop CV file or click to browse"
                onKeyDown={(e) => e.key === 'Enter' && fileRef.current?.click()}
              >
                <input
                  ref={fileRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className={styles.fileInput}
                  onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
                  aria-label="Upload CV"
                />
                {fileName ? (
                  <div className={styles.filePreview}>
                    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.fileIcon}>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6" />
                    </svg>
                    <p className={styles.fileName}>{fileName}</p>
                    <p className={styles.fileHint}>Click to change file</p>
                  </div>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.uploadIcon}>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M17 8l-5-5-5 5 M12 3v12" />
                    </svg>
                    <p className={styles.dropLabel}>Drag & drop your CV here</p>
                    <p className={styles.dropHint}>or click to browse · PDF, DOC, DOCX</p>
                  </>
                )}
              </div>
              <Button
                href="#"
                variant="primary"
                className={styles.submitBtn}
                aria-label="Submit open application"
              >
                Submit Open Application
              </Button>
            </div>

            {/* Next Steps */}
            <div>
              <h3 className={styles.stepsHeading}>What Happens Next</h3>
              <ul className={styles.steps}>
                {nextSteps.map((s) => (
                  <li key={s.num} className={styles.step}>
                    <span className={styles.stepNum}>{s.num}</span>
                    <div>
                      <p className={styles.stepTitle}>{s.title}</p>
                      <p className={styles.stepDesc}>{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className={styles.ctaBand}>
        <div className={styles.ctaInner}>
          <span className="t-label" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Ready to build what matters?
          </span>
          <h2 className={`t-h2 ${styles.ctaHeadline}`}>
            Your Next Role<br />Starts Here
          </h2>
          <p className={styles.ctaSub}>
            287 engineers, operators, and strategists chose NEXACORE. Now it&apos;s your turn.
          </p>
          <div className={styles.ctaButtons}>
            <Button href="#openings" variant="white">See All Openings</Button>
            <Button href="#open-application" variant="white-outline">Drop Your CV</Button>
          </div>
        </div>
      </section>
    </>
  );
}
