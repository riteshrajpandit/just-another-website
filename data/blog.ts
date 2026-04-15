/**
 * @file Blog data
 * @description Full blog post data with article content, metadata, and relations
 */

import type { BlogPost } from '@/types';

export const blogCategories = [
  'All',
  'Security',
  'Engineering',
  'Cloud Infrastructure',
  'Data Engineering',
  'Compliance',
] as const;

export const blogPosts: readonly BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'zero-trust-enterprise-infrastructure',
    title: 'Why Zero-Trust Is No Longer Optional for Enterprise Infrastructure',
    excerpt:
      'The perimeter-based security model is dead. We break down why adopting zero-trust architecture is now a baseline requirement — and how to do it without a 12-month implementation.',
    category: 'Security',
    tags: ['Zero-Trust', 'IAM', 'SecureVault', 'Compliance'],
    readTime: '8 min read',
    date: 'Apr 9, 2026',
    author: 'Kavya Menon',
    authorInitials: 'KM',
    authorRole: 'Head of Security Architecture',
    authorBio:
      'Kavya leads NEXACORE\'s security practice across 120+ enterprise clients. Former CISO at Meridian Financial, certified CISSP and CISM.',
    featured: true,
    likes: 248,
    views: '4.2k',
    relatedIds: ['blog-5', 'blog-3', 'blog-6'],
    content: [
      { type: 'paragraph', text: 'For the better part of two decades, enterprise security was built on a single assumption: the inside of your network was safe and the outside was not. Firewalls, VPNs, and perimeter controls formed the entire moat around your kingdom. That model is now irretrievably broken.' },
      { type: 'paragraph', text: 'The shift happened gradually, then all at once. Remote work dissolved the concept of "inside the network". Cloud infrastructure moved workloads outside any perimeter you could defend. SaaS proliferation scattered your data across dozens of third-party systems. And attackers — increasingly sophisticated, increasingly patient — learned that the easiest way past a perimeter is through a legitimate credential.' },
      { type: 'heading', level: 2, text: 'What Zero-Trust Actually Means' },
      { type: 'paragraph', text: 'Zero-trust is not a product. It is an architectural philosophy built on one principle: never trust, always verify. Every request — whether it originates from inside the corporate network or outside it — is treated as potentially hostile until proven otherwise.' },
      { type: 'paragraph', text: 'In practice, zero-trust means three things: strong identity verification for every user and device, least-privilege access so no entity has more permissions than it needs, and continuous validation so access is revoked the moment behaviour becomes anomalous.' },
      { type: 'quote', text: 'The question is not whether you will be breached — it is whether the breach will be contained in 8 minutes or 8 months. Zero-trust is what makes that difference.' },
      { type: 'heading', level: 2, text: 'The Common Objection: It Takes Too Long' },
      { type: 'paragraph', text: 'The most common pushback we hear from enterprise CISOs is that zero-trust is a multi-year programme. That is true of a full transformation — but it is not true of the first meaningful step. And the first meaningful step is all that stands between you and the most common breach vectors.' },
      { type: 'callout', text: 'NEXACORE SecureVault can establish MFA enforcement, conditional access policies, and privileged access management across your environment in under 30 days — without rearchitecting your entire identity stack.' },
      { type: 'heading', level: 2, text: 'Where to Start: A Prioritised Approach' },
      { type: 'list', items: [
        'Identity first: enforce MFA for all privileged accounts immediately. No exceptions.',
        'Inventory your access: map who has access to what. You cannot protect what you cannot see.',
        'Segment your most critical workloads: isolate crown-jewel systems before expanding.',
        'Instrument everything: zero-trust without observability is blind. Log every access event.',
        'Automate remediation: when anomalous behaviour occurs, the response must be faster than human.',
      ]},
      { type: 'heading', level: 2, text: 'The Regulatory Reality' },
      { type: 'paragraph', text: 'Beyond the security case, regulators are increasingly mandating zero-trust controls. NIST SP 800-207, the US Executive Order on Improving the Nation\'s Cybersecurity, and the UK NCSC\'s zero-trust network architecture guidance all point in the same direction. If you operate in financial services, healthcare, or critical infrastructure, zero-trust is no longer optional — it is a compliance requirement.' },
      { type: 'paragraph', text: 'The cost of not acting is measured not just in breach risk, but in audit findings, regulatory fines, and the compounding cost of retrofitting security into systems that were never designed with it in mind. Start small, start now, and build the programme incrementally. The alternative is a choice you will regret.' },
    ],
  },
  {
    id: 'blog-2',
    slug: 'hidden-cost-manual-data-reconciliation',
    title: 'The Hidden Cost of Manual Data Reconciliation',
    excerpt:
      'Most finance teams underestimate how much manual reconciliation costs — not just in time, but in error rates, compliance risk, and engineer morale. Here is the real number.',
    category: 'Data Engineering',
    tags: ['Data Quality', 'Automation', 'CoreSync', 'Finance'],
    readTime: '6 min read',
    date: 'Apr 3, 2026',
    author: 'Alex Rivera',
    authorInitials: 'AR',
    authorRole: 'Principal Data Engineer',
    authorBio:
      'Alex has designed data infrastructure for 60+ enterprise clients across financial services and healthcare. Specialises in real-time pipelines and data quality engineering.',
    featured: true,
    likes: 187,
    views: '3.1k',
    relatedIds: ['blog-3', 'blog-4', 'blog-1'],
    content: [
      { type: 'paragraph', text: 'Ask a CFO how long their monthly close takes and they will tell you 5 to 7 days. Ask the data team how much of that is manual reconciliation and they will go quiet. The honest answer — in most enterprises — is most of it.' },
      { type: 'paragraph', text: 'Manual reconciliation is the process of comparing data across systems to ensure consistency: matching transaction records between your ERP and banking system, aligning inventory counts across warehouse management and accounting, or verifying that your CRM pipeline matches what landed in revenue. In theory, it should not exist. In practice, it is the most common data operation in the enterprise.' },
      { type: 'heading', level: 2, text: 'The True Cost Is Not the Hours' },
      { type: 'paragraph', text: 'Most organisations quantify reconciliation cost in analyst hours. That is the visible cost. The hidden cost is orders of magnitude larger, and it comes from four sources.' },
      { type: 'list', items: [
        'Error propagation: manual processes have human error rates of 1-5%. In financial data, a single missed decimal point can trigger audit findings worth multiples of the analyst\'s annual salary.',
        'Delayed decisions: when your monthly close takes 7 days, your leadership is making strategic decisions on 30-day-old data. In fast-moving markets, that lag is lethal.',
        'Compliance exposure: regulators increasingly require evidence of data lineage and reconciliation controls. "We check it manually" is not a control — it is a finding waiting to happen.',
        'Engineering morale: no data engineer joins a company to run Excel macros. Manual reconciliation is how you lose your best people.',
      ]},
      { type: 'callout', text: 'Meridian Financial reduced their monthly close from 14 days to 4 hours after implementing CoreSync\'s automated reconciliation engine. The ROI was realised within the first quarter.' },
      { type: 'heading', level: 2, text: 'What Automated Reconciliation Actually Looks Like' },
      { type: 'paragraph', text: 'Automated reconciliation is not just faster manual reconciliation. It is a fundamentally different architecture. Instead of comparing snapshots, you compare event streams in real time. Instead of flagging exceptions after the fact, you prevent them from propagating. Instead of a spreadsheet that someone runs monthly, you have a live system that runs continuously.' },
      { type: 'heading', level: 2, text: 'Getting Started' },
      { type: 'paragraph', text: 'The hardest part of eliminating manual reconciliation is not technical — it is political. Someone owns those spreadsheets and has built their workflow around them. The key is to start with the reconciliation that causes the most pain (typically the one closest to the financial close) and demonstrate a working automated alternative before asking anyone to give up their existing process.' },
      { type: 'paragraph', text: 'Once you have proved the model on one reconciliation, the others follow quickly. The data team gains credibility, the finance team gains speed, and the business gets the real-time financial visibility that better decisions require.' },
    ],
  },
  {
    id: 'blog-3',
    slug: 'nexaflow-ai-decision-nodes',
    title: 'AI Decision Nodes: How NexaFlow Handles Uncertainty',
    excerpt:
      'Building reliable automation on top of probabilistic AI outputs is hard. We share the architecture decisions behind NexaFlow\'s AI nodes — and how we guarantee audit trail integrity.',
    category: 'Engineering',
    tags: ['NexaFlow', 'AI', 'Automation', 'Architecture'],
    readTime: '11 min read',
    date: 'Mar 28, 2026',
    author: 'Priya Nair',
    authorInitials: 'PN',
    authorRole: 'Staff Platform Engineer',
    authorBio:
      'Priya leads platform engineering at NEXACORE and is the primary architect of NexaFlow\'s execution engine. Speaker at KubeCon EU 2025 and SREcon APAC 2026.',
    featured: false,
    likes: 312,
    views: '5.8k',
    relatedIds: ['blog-2', 'blog-6', 'blog-4'],
    content: [
      { type: 'paragraph', text: 'When we started building AI decision nodes into NexaFlow, we faced a problem that most workflow automation vendors have quietly avoided: AI models are probabilistic, but enterprise processes are deterministic. Your accounts payable workflow cannot "probably" approve an invoice. It must either approve it or not — and it must be able to explain exactly why.' },
      { type: 'heading', level: 2, text: 'The Core Tension' },
      { type: 'paragraph', text: 'Traditional workflow automation operates on explicit logic: IF condition THEN action. You write the rule, the engine executes it, the audit log records it. Every outcome is traceable and reproducible. Introduce an LLM into that pipeline and you introduce something fundamentally different: a function that produces different outputs for the same input, cannot explain its reasoning in deterministic terms, and whose behaviour changes when the model is updated.' },
      { type: 'quote', text: 'We spent six months trying to make LLMs behave deterministically. Then we stopped trying to change the AI and started building the infrastructure around it instead.' },
      { type: 'heading', level: 2, text: 'Our Architecture: Confidence Thresholds and Human-in-the-Loop' },
      { type: 'paragraph', text: 'Every NexaFlow AI decision node operates with a configurable confidence threshold. When the model\'s confidence in its output exceeds the threshold, the workflow proceeds. When it falls below, the node routes to a human review step rather than making a decision autonomously.' },
      { type: 'callout', text: 'This is not a workaround — it is the correct architecture. The goal is not to replace human judgment with AI. It is to apply human judgment where it is needed and automate where it is not.' },
      { type: 'heading', level: 2, text: 'Audit Trail Integrity' },
      { type: 'paragraph', text: 'For every AI decision, NexaFlow records: the input that was sent to the model, the model version and temperature settings, the raw output and confidence score, the decision that was made (or that it was escalated), and the timestamp and requesting user. This record is immutable and cryptographically signed.' },
      { type: 'list', items: [
        'Every AI decision is versioned against the model that made it',
        'Replays are possible: you can rerun any decision through any model version',
        'Divergence reports show when a model update would have changed historical decisions',
        'Regulators get a complete, human-readable audit trail with no gaps',
      ]},
      { type: 'heading', level: 2, text: 'What This Means for Your Workflows' },
      { type: 'paragraph', text: 'In practice, this means you can deploy AI decision nodes into genuinely high-stakes workflows — invoice approval, customer tier classification, security alert triage — without sacrificing the auditability that enterprise compliance requires. The AI handles the volume. The audit trail handles the accountability. Humans handle the edge cases the AI is not confident about.' },
      { type: 'paragraph', text: 'We think this is the right model for enterprise AI automation — not because it is easy to build (it is not), but because it is the only architecture that actually works in regulated industries.' },
    ],
  },
  {
    id: 'blog-4',
    slug: 'multi-cloud-migration-lessons',
    title: 'Multi-Cloud Without the Mess: Lessons from 50 Migrations',
    excerpt:
      'After 50 enterprise multi-cloud migrations, we have identified the 5 failure modes that derail 80% of projects. Here is how to avoid all of them.',
    category: 'Cloud Infrastructure',
    tags: ['CloudOrchestra', 'Multi-Cloud', 'AWS', 'Azure', 'GCP'],
    readTime: '9 min read',
    date: 'Mar 20, 2026',
    author: 'Marcus Webb',
    authorInitials: 'MW',
    authorRole: 'Senior SRE & Cloud Architect',
    authorBio:
      'Marcus has led cloud migrations for enterprises across financial services, logistics, and public sector. AWS Certified Solutions Architect Professional and GCP Professional Cloud Architect.',
    featured: false,
    likes: 203,
    views: '4.7k',
    relatedIds: ['blog-1', 'blog-2', 'blog-5'],
    content: [
      { type: 'paragraph', text: 'Multi-cloud has gone from aspirational to table stakes for enterprise infrastructure. Most organisations have ended up there by default — AWS for one division, Azure for another, a GCP contract from a strategic partnership. The challenge is not getting to multi-cloud. It is operating it without your costs tripling, your team burning out, and your compliance posture collapsing.' },
      { type: 'heading', level: 2, text: 'Failure Mode 1: No Abstraction Layer' },
      { type: 'paragraph', text: 'The first migration we did, we let each cloud team use their native tools: CloudFormation for AWS, Bicep for Azure, Deployment Manager for GCP. Six months later, the same workload had three completely different infrastructure definitions with no way to compare, audit, or enforce consistency across them. The fix is a single abstraction layer — Terraform or Pulumi — before you write a single cloud-native resource definition.' },
      { type: 'heading', level: 2, text: 'Failure Mode 2: Cloud-Specific IAM' },
      { type: 'paragraph', text: 'Every cloud has its own IAM model. AWS IAM, Azure AD, GCP IAM — they are not compatible, not interoperable, and not consistently auditable from a single pane of glass. Enterprises that try to manage them independently end up with permission gaps, inconsistent least-privilege enforcement, and audit nightmares. The solution is a unified identity plane that sits above all three clouds.' },
      { type: 'callout', text: 'CloudOrchestra\'s policy-as-code engine enforces the same IAM policies across all three major clouds from a single policy definition. One audit, three clouds.' },
      { type: 'heading', level: 2, text: 'Failure Mode 3: No Cost Attribution' },
      { type: 'paragraph', text: 'Without tagging standards enforced from day one, cost attribution becomes impossible. You will know you are spending £2.3M a month across your clouds. You will not know which team, which application, or which environment is responsible for any given portion of it. Tag everything from the start. Enforce tagging in CI/CD pipelines. Reject untagged resources automatically.' },
      { type: 'heading', level: 2, text: 'Failure Mode 4: Treating Networking as an Afterthought' },
      { type: 'paragraph', text: 'Cross-cloud networking is expensive, latency-sensitive, and easy to get wrong. Teams that design applications without thinking about data egress costs typically discover — painfully, on their first cloud bill — that moving data between clouds costs more than the compute that processes it.' },
      { type: 'heading', level: 2, text: 'Failure Mode 5: No Drift Detection' },
      { type: 'paragraph', text: 'Infrastructure defined in Terraform diverges from what is actually running within weeks of the first manual change in a production console. Drift detection is not optional — it is the only mechanism that ensures what you think is running is actually running. Automate drift detection. Alert on every deviation. Treat manual console changes as incidents.' },
      { type: 'list', items: [
        'Use a single IaC abstraction from the start (Terraform or Pulumi)',
        'Enforce tagging in CI/CD — no untagged resources in production',
        'Build a unified identity plane before you touch IAM on any cloud',
        'Model your networking costs before finalising your architecture',
        'Run drift detection every 15 minutes, not every day',
      ]},
    ],
  },
  {
    id: 'blog-5',
    slug: 'soc2-type2-90-day-checklist',
    title: 'SOC 2 Type II in 90 Days: A Practical Checklist',
    excerpt:
      'We have helped 40+ clients achieve SOC 2 Type II certification. This is the exact checklist we use — including the mistakes that cause most first-attempt failures.',
    category: 'Compliance',
    tags: ['SOC 2', 'Compliance', 'SecureVault', 'Audit'],
    readTime: '12 min read',
    date: 'Mar 12, 2026',
    author: 'Kavya Menon',
    authorInitials: 'KM',
    authorRole: 'Head of Security Architecture',
    authorBio:
      'Kavya leads NEXACORE\'s security practice across 120+ enterprise clients. Former CISO at Meridian Financial, certified CISSP and CISM.',
    featured: false,
    likes: 441,
    views: '8.1k',
    relatedIds: ['blog-1', 'blog-4', 'blog-2'],
    content: [
      { type: 'paragraph', text: 'SOC 2 Type II is the most common enterprise security certification requirement, the most commonly misunderstood, and — if approached correctly — one of the most achievable in a compressed timeline. After guiding 40+ clients through the process, here is the checklist we actually use.' },
      { type: 'callout', text: 'Important: 90 days assumes your organisation has basic security hygiene in place. If you do not have MFA, access reviews, or incident response documentation, add 30-60 days to these estimates.' },
      { type: 'heading', level: 2, text: 'Weeks 1–2: Scoping and Gap Assessment' },
      { type: 'list', items: [
        'Define the scope boundary: which systems, services, and data are in scope?',
        'Identify your Trust Service Criteria: Security is mandatory; Availability, Confidentiality, Privacy, and Processing Integrity are optional',
        'Run a gap assessment against each criterion and document every gap',
        'Assign owners to each gap and agree on remediation timelines',
        'Select your auditor now — good auditors book out 8-12 weeks in advance',
      ]},
      { type: 'heading', level: 2, text: 'Weeks 3–6: Evidence Collection and Remediation' },
      { type: 'paragraph', text: 'This is where most programmes stall. Evidence collection is tedious, ownership is unclear, and the documentation required is more detailed than most teams expect. We recommend a dedicated "SOC 2 programme manager" role — not a CISO, but someone whose only job for 90 days is collecting and organising evidence.' },
      { type: 'list', items: [
        'Access control matrix: document who has access to every in-scope system',
        'Onboarding/offboarding procedures: documented and tested, not assumed',
        'Change management: evidence that every production change had approval and review',
        'Vendor management: SOC 2 or equivalent for all in-scope vendors',
        'Incident response plan: documented, tabletop-tested, with a paper trail',
        'Backup and recovery: tested restoration, not just automated backups',
      ]},
      { type: 'heading', level: 2, text: 'Weeks 7–10: Observation Period' },
      { type: 'paragraph', text: 'Type II requires a minimum 6-month observation period. If you are targeting a 90-day readiness programme, your observation period needs to have started before you engaged your auditor. For most organisations, this means starting your controls implementation as soon as you decide to pursue SOC 2, even before you have selected an auditor.' },
      { type: 'heading', level: 2, text: 'The Three Most Common First-Attempt Failures' },
      { type: 'list', items: [
        'Undocumented controls: the control exists but there is no evidence it was operating during the observation period.',
        'Scope creep: systems were brought into scope during the audit that were not in the original scope, creating evidence gaps.',
        'Vendor gaps: a key vendor does not have SOC 2, creating a chain-of-custody gap that auditors cannot overlook.',
      ]},
      { type: 'paragraph', text: 'SOC 2 Type II is achievable in 90 days with the right programme management, the right tooling, and — most importantly — the right auditor relationship. It is not about having a perfect security programme. It is about demonstrating that your controls are consistent, documented, and operating as designed.' },
    ],
  },
  {
    id: 'blog-6',
    slug: 'observability-vs-monitoring',
    title: 'Observability vs Monitoring: Why the Distinction Matters',
    excerpt:
      'Monitoring tells you when something broke. Observability tells you why. If your SRE team can only answer the first question, here is what you are missing.',
    category: 'Engineering',
    tags: ['PulseMetrics', 'Observability', 'SRE', 'DevOps'],
    readTime: '7 min read',
    date: 'Mar 5, 2026',
    author: 'Priya Nair',
    authorInitials: 'PN',
    authorRole: 'Staff Platform Engineer',
    authorBio:
      'Priya leads platform engineering at NEXACORE and is the primary architect of NexaFlow\'s execution engine. Speaker at KubeCon EU 2025 and SREcon APAC 2026.',
    featured: false,
    likes: 178,
    views: '3.4k',
    relatedIds: ['blog-3', 'blog-4', 'blog-1'],
    content: [
      { type: 'paragraph', text: 'In 2018, monitoring meant Nagios checks and Grafana dashboards. Your CPU alert fired, your on-call engineer logged in, and they poked around until they found the problem. That worked when your systems were simple, your team was small, and your deploys happened weekly.' },
      { type: 'paragraph', text: 'It does not work in 2026. Distributed systems fail in ways no pre-written check can anticipate. Containerised microservices create failure modes that span dozens of services across multiple clusters. A CPU alert tells you something is wrong. It tells you nothing about which of the 200 services causing that CPU spike is the root cause, or why.' },
      { type: 'heading', level: 2, text: 'The Three Pillars' },
      { type: 'paragraph', text: 'Observability, as a discipline, is built on three signals: metrics, traces, and logs. Monitoring typically covers only metrics. The absence of traces — distributed request tracing that follows a user request across every service boundary — is the single biggest gap in most enterprise monitoring stacks.' },
      { type: 'list', items: [
        'Metrics: aggregate numerical data over time (CPU, memory, request rate, error rate)',
        'Traces: the path of a single request through your distributed system, end-to-end',
        'Logs: structured event records with context about what happened and when',
      ]},
      { type: 'quote', text: 'Monitoring is about the known unknowns. Observability is about the unknown unknowns. You can only monitor what you anticipated failing. You can observe anything.' },
      { type: 'heading', level: 2, text: 'Why Most Teams Resist the Transition' },
      { type: 'paragraph', text: 'Implementing proper observability requires instrumentation — adding trace context propagation to every service, correlating logs with trace IDs, and building dashboards that correlate all three signals. That is a significant engineering investment, and its value is only visible when something goes wrong in a non-obvious way.' },
      { type: 'callout', text: 'PulseMetrics ships with auto-instrumentation for the 15 most common application frameworks. For most teams, the instrumentation overhead is under a day of engineering effort.' },
      { type: 'heading', level: 2, text: 'The MTTD and MTTR Argument' },
      { type: 'paragraph', text: 'The business case for observability is straightforward: it reduces Mean Time to Detect (MTTD) and Mean Time to Resolve (MTTR). Clients who moved from monitoring to full observability with PulseMetrics have seen median MTTD drop from 23 minutes to under 4 minutes, and MTTR drop by 74%. At the enterprise scale, that translates directly to uptime SLA achievement and reduced revenue impact from incidents.' },
      { type: 'paragraph', text: 'If your SRE team is still running purely on metrics and dashboards, you are not observing your system — you are guessing about it. Guessing is expensive.' },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(ids: readonly string[]): BlogPost[] {
  return blogPosts.filter((p) => ids.includes(p.id));
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
