# Learner Dashboard Redesign Blueprint

## Design Goals
- Present a focused overview of progress and priorities while reducing visual noise.
- Encourage continuous learning with clear next steps and contextual nudges.
- Adapt gracefully across devices with responsive layouts and accessible contrast.
- Provide modular components that can scale across different learning programs.

## Information Hierarchy & Layout
1. **Header Bar**
   - Left: product logo, quick access to global navigation (dashboard, catalog, events, community).
   - Center: prominent universal search with recent and saved searches.
   - Right: notification bell with badge, inbox shortcut, profile menu, language toggle, help icon.

2. **Welcome & Personal Summary (Hero Strip)**
   - Personal greeting with dynamic message based on recent activity.
   - Snapshot card showing compliance / mandatory training completion with sparkline trend.
   - KPI chips for total courses in progress, overdue, completed this quarter.

3. **Primary Actions Row**
   - Buttons for "Resume Learning", "Browse Catalog", "View Learning Plan".
   - Compact badges indicating pending approvals or new recommendations.

4. **Main Content Grid**
   - **Column A (2/3 width on desktop)**
     - **Continue Learning Carousel**: shows in-progress courses with resume buttons, progress bars, and estimated time remaining.
     - **Learning Plan Timeline**: chronological view of upcoming due dates; toggle between list and calendar.
     - **Skill Growth Tracker**: radar or pill chart highlighting competency levels vs targets.
   - **Column B (1/3 width on desktop)**
     - **Weekly Goal Card**: progress wheel with streak indicator, motivational copy, and adjust-goal action.
     - **Recommendations**: personalized cards, filter by modality (video, live, article).
     - **Community Activity**: highlights discussions or peer achievements related to enrolled courses.

5. **Secondary Sections (Stacked below on tablet/mobile)**
   - **Recent Achievements**: badges with share-to-linkedin/print certificate actions.
   - **Mandatory Compliance**: prioritized list with due dates, severity coloring, and acknowledge buttons.
   - **Upcoming Events**: schedule cards with join links, add-to-calendar, and timezone awareness.
   - **Suggested Learning Paths**: curated playlists with completion time estimates and prerequisites.

6. **Footer**
   - Support links, accessibility statement, privacy, version info.

## Visual & Interaction Guidelines
- **Color Palette**: neutral background (#F8F9FB), primary accent (#2563EB), secondary accent (#10B981), caution accent (#F59E0B), error accent (#EF4444).
- **Typography**: use modern sans-serif (Inter). Headings bold with clear hierarchy, body text 15–16px.
- **Cards**: 12px radius, soft shadow (0 8px 24px rgba(15, 23, 42, 0.08)). Hover elevates shadow and reveals quick actions.
- **Icons**: duotone icons for status, consistent stroke width.
- **Progress Indicators**: adopt pill-shaped progress bars with gradient fill, include numeric % and estimated time.
- **Microinteractions**: smooth 200ms transitions for hover, pressed, and loading states; skeleton loaders for content fetch.

## Accessibility
- Maintain 4.5:1 contrast minimum for text; 3:1 for large headings.
- Provide keyboard navigable components with visible focus outlines.
- Include status text for screen readers on progress changes and notifications.
- Offer dark mode toggle with preserved brand accents.

## Responsive Behavior
- **Desktop (≥1280px)**: two-column layout with 12-column grid (8 + 4). Persistent side nav collapsible.
- **Tablet (768–1279px)**: single column stacking, condensed header, navigation hidden behind hamburger.
- **Mobile (≤767px)**: bottom nav with primary actions, hero compresses to single card, carousels become swipeable.

## Data Visualization Enhancements
- Use mini trend charts beside KPIs to show progress over time.
- Provide drill-down modals for compliance metrics showing course detail and audit logs.
- Show comparative benchmarks (team average, organizational target) where relevant.

## Personalization & Guidance
- Dynamic tips module triggered by inactivity or overdue items.
- AI-powered recommendations with reasons shown ("Because you completed Advanced React").
- "Ask a Coach" quick action linking to mentoring resources.
- Weekly digest summary with ability to set reminder cadence.

## Content Strategy
- Reduce redundant headings; use concise phrasing (e.g., "In Progress" instead of "Courses in Progress").
- Group related stats into clusters with subtle dividers rather than separate cards.
- Highlight certificates and badges with optional share buttons to drive engagement.

## Analytics & Insights
- Track resume clicks, module completion pace, goal adjustments, and recommendation dismissals.
- Provide admin instrumentation hooks for A/B testing new card placements.

## Future Extensions
- Integrate pulse surveys, nudging learners to provide feedback post-completion.
- Gamification hooks (streaks, XP) that can be toggled per organization.
- Unified notification center accessible from header, syncing across mobile app.

---
This blueprint focuses first on the learner dashboard foundation and can be expanded to other LMS surfaces in subsequent iterations.
