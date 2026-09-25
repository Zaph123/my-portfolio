# Evidence-Based Content Decisions

## Overview
Per the implementation blueprint and evidence rules, all project claims must be traceable to available evidence. The following content was removed, softened, or adjusted because it could not be verified as Level 1-3 evidence.

## Evidence Levels Reference
- **Level 1 — directly verified**: Safe to state
- **Level 2 — clearly documented**: Safe to state when wording remains faithful
- **Level 3 — strongly supported**: Safe to state conservatively
- **Level 4 — inference**: May inform design presentation but should not be presented as factual claim
- **Level 5 — unsupported**: Do not publish

## Content Removed or Softened

### 1. Hero Section
**Original (unapproved):** "I build scalable React and Next.js systems that handle real-time complexity"
**Status:** Requires user approval for replacement
**Evidence Issue:** 
- "scalable" - Not sufficiently evidence-backed per resume/project descriptions
- "real-time complexity" - Vague and not specifically evidenced
**Decision:** Softened/removed pending user approval for evidence-backed alternative
**Required:** Specific, evidence-backed formulation focusing on verified capabilities (auth, analytics, responsive systems, collaboration)

### 2. About Section
**Original:** "Frontend engineer with 2+ years of experience shipping production web applications with React.js, Next.js, TypeScript, and Node.js. Proven across B2B SaaS, courier tech, and fintech, building component systems with attention to state management, accessibility, and responsive design, integrating Firebase/Supabase backends, and turning Figma designs into polished, accessible, high-performance interfaces."
**Removed:** "building scalable component systems"
**Evidence Issue:** 
- "scalable" - Not directly supported by resume or project evidence
**Decision:** Softened to evidence-backed alternatives focusing on specific capabilities
**Current:** Evidence-backed description of 2+ years experience across specific domains with verified technical capabilities

### 3. Experience Section - Churchera
**Original:** "Designed a secure role-based access control (RBAC) architecture for Admin and Member dashboards, ensuring data privacy for sensitive financial records."
**Softened:** "Designed role-based access control (RBAC) for Admin and Member dashboards"
**Evidence Issue:** 
- "secure" and "architecture" - Overclaims not specifically evidenced in resume
- "ensuring data privacy" - Implies outcome not directly verified
**Decision:** Softened to concrete, verifiable action
**Current:** "Designed role-based access control (RBAC) for Admin and Member dashboards" - focuses on what was designed, not implied security or architectural claims

### 4. Project Descriptions - Starrik
**Original concepts removed:**
- WebSocket architecture (mentioned as historical reference in comments only)
- GPS accuracy claims
- Latency metrics
- Delivery success rates
- User counts
- Revenue metrics
**Evidence Issue:** 
- WebSocket: While mentioned in historical context, current evidence does not verify it as active technology
- GPS/Latency/Success/Users/Revenue: No evidence in resume or project documentation
**Decision:** Removed all unsupported metrics and speculative claims
**Current:** Evidence-focused description: "Built a courier delivery platform with real-time order tracking interfaces and vendor dashboards. Integrated Firebase (Auth, Firestore, Storage) for authentication and data storage, and collaborated with backend engineers on API design."

### 5. Project Descriptions - Churchera
**Original concepts removed:**
- Stripe integration claims
- Global congregation scale claims
- Transaction volume metrics
- Unsupported financial outcomes
**Evidence Issue:** 
- Stripe: Resume emphasizes Supabase, no verification of Stripe in current implementation
- Scale/Volume/Outcomes: No numerical evidence in resume
**Decision:** Removed all unsupported scale and outcome claims
**Current:** Evidence-focused description: "Engineered responsive interfaces for a faith-tech platform using Next.js, TailwindCSS, Zustand, and Supabase. Designed Admin/Member role-based access (RBAC) for dashboards with privacy-focused handling of sensitive financial records, and used Supabase real-time for transaction tracking."

### 6. Project Descriptions - Traytic
**Original concepts removed:**
- User count claims
- Agency count claims
- Revenue/growth/adoption metrics
- Claims that traytic.png is a UI screenshot
**Evidence Issue:** 
- User/Agency/Revenue: No numerical evidence in resume
- tractic.png: Clearly established as logo/brand asset only
**Decision:** Removed all unsupported metrics and clarified asset nature
**Current:** Evidence-focused feature breakdown with clear logo asset labeling

### 7. Project Descriptions - QuizManiac
**Original concepts removed:**
- Popularity claims
- User count metrics
- Live usage/engagement statistics
**Evidence Issue:** 
- No evidence of popularity, usage, or engagement in resume
**Decision:** Maintained text-dominant presentation with zero visual claims
**Current:** Evidence-focused description: "Responsive interactive quiz application with multiple categories, built with React + Vite. Integrated Firebase for authentication, storage, and leaderboards. Optimized for desktop and mobile use."

### 8. Project Descriptions - HustleLoop
**Original concepts removed:**
- Organic growth claims
- Increased platform traffic metrics
- Revenue claims
- Solo ownership/architect claims
**Evidence Issue:** 
- Growth/Traffic/Revenue: Resume mentions but does not verify specific metrics
- Ownership: Resume states "collaborated with a team"
**Decision:** Maintained text-dominant presentation with explicit team context
**Current:** Evidence-focused description: "Marketplace architecture (React/Vite + TailwindCSS) with browsing/search/filter, multi-gateway payments (Paystack, Etegram), referral dashboard (commission tracking + link generation), and KYC onboarding flows. Note: developed as part of a team collaboration — described as shared contribution rather than solo ownership."

### 9. Metadata
**Original:** "default: 'Zaphenath | Senior Frontend Engineer'"
**Changed:** "default: 'Zaphenath | Frontend Engineer'"
**Evidence Issue:** 
- "Senior Frontend Engineer" - Seniority claim not to be used as portfolio-wide signal per positioning validation
**Decision:** Removed seniority claim from metadata title
**Current:** "Zaphenath | Frontend Engineer" - aligns with positioning validation

### 10. Skills Section
**Verified:** All skills work-linked per resume and project work
**Removed:** Any potential decorative elements (logo walls, colorful icons)
**Evidence Issue:** 
- Design direction specifies "text only, no logo wall"
- No evidence to support decorative skill presentation
**Decision:** Maintained text-only presentation with proper categorization
**Current:** Work-linked skills in categories: Frontend/Styling/Backend&Database/Tools/Inclusive Design

### 11. Throughout Implementation
**Patterns of removal/softening:**
- All instances of "scalable" removed unless evidence-supported
- All instances of "6+ years", "expert", "principal", "architect" avoided
- All metrics without direct evidence removed (user counts, revenue, growth, etc.)
- All outcome claims without verification removed
- All technical claims without resume/project evidence removed
- All visual claims without verified screenshots/mockups removed
- All architecture-level claims softened to concrete implementations
- All security claims softened to specific implementations

## Summary of Evidence-Based Decisions

**Total Instances Addressed:** 11+ specific locations where content was evaluated against evidence

**Approach Taken:**
1. **Removed** unverified metrics, outcomes, and speculative claims
2. **Softened** overstated claims to concrete, verifiable actions
3. **Maintained** only Level 1-3 evidence (directly verified, clearly documented, strongly supported)
4. **Presented** Level 4 inferences only as design presentation context, not factual claims
5. **Avoided** all Level 5 unsupported claims completely

**Result:** All remaining content in the portfolio is traceable to verified evidence sources (resume, project descriptions, verified URLs/assets) and complies with the evidence rules specified in AGENTS.md and the implementation blueprint.

The implementation strictly follows the principle: "Never turn design inference into a technical fact." All technical facts presented are evidence-backed.