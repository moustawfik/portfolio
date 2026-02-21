export default {
  lede: "The quarterly business review is the highest-leverage touchpoint in the customer relationship. It's also the most frequently wasted. Most QBRs are status updates disguised as strategic conversations. When you redesign the QBR as a retention and expansion instrument, it becomes the single best predictor of renewal outcomes.",
  sections: [
    {
      heading: "The QBR Anti-Patterns",
      body: [
        "You know the meeting. The CSM opens a slide deck with a usage summary, walks through support ticket stats, mentions a few product updates, and asks if there are any questions. The customer politely sits through it, checks their phone, and leaves without having said anything meaningful. Both sides treat it as an obligation. Nobody's behavior changes afterward.",
        "This isn't a business review. It's a report-out that could have been an email. The anti-pattern is treating the QBR as a CSM presentation instead of a strategic dialogue. The CSM talks for 40 minutes and listens for 5. The data shown is backward-looking and operational — things the customer already knows or doesn't care about. There's no connection between the data presented and the customer's stated business objectives.",
        "The second anti-pattern is inconsistency. QBRs happen when the CSM remembers to schedule them, skip a quarter when things get busy, and get cancelled when the customer is too busy. If your QBR cadence is optional, it sends a clear message: this meeting isn't important. And if it's not important, it won't influence the renewal decision."
      ],
      bullets: [
        "CSM presents for 80% of the meeting while the customer passively listens",
        "Data shown is backward-looking usage stats the customer already has access to",
        "No connection between metrics presented and the customer's business outcomes",
        "QBRs scheduled inconsistently, skipped when either party is busy",
        "Same format used regardless of stakeholder level — the exec gets the same deck as the project manager",
        "No follow-up actions documented or tracked after the meeting",
      ],
    },
    {
      heading: "Executive Engagement Cadence Architecture",
      body: [
        "A QBR is one touchpoint in a broader engagement cadence. You need to design the full cadence, not just the quarterly meeting. The cadence should include regular operational check-ins at the practitioner level, quarterly business reviews at the manager or director level, and semi-annual or annual strategic reviews at the executive level. Each tier has a different audience, different content, and a different objective.",
        "Operational check-ins happen monthly or biweekly. Short, tactical, focused on adoption, open issues, and immediate next steps. The QBR happens quarterly with middle management — connecting product usage to business outcomes and surfacing risks or opportunities. The strategic review happens once or twice a year with the economic buyer or executive sponsor. That one is a value conversation: here's what you invested, here's what you got, here's what the next phase looks like.",
        "The critical mistake is running executive-level content in a manager-level meeting, or vice versa. Executives don't care about feature adoption percentages. They care about whether the investment is producing returns. Managers don't care about three-year strategic roadmaps. They care about whether their team can get their work done. Match the content to the audience."
      ],
      table: {
        headers: ["Cadence", "Audience", "Frequency", "Objective", "Duration"],
        rows: [
          ["Operational Check-in", "End users, project leads", "Biweekly or monthly", "Adoption, issue resolution, tactical next steps", "30 min"],
          ["Business Review (QBR)", "Directors, managers", "Quarterly", "Value realization, risk/opportunity identification", "45-60 min"],
          ["Strategic Review", "VP+, economic buyer", "Semi-annual or annual", "ROI validation, strategic alignment, expansion", "60 min"],
        ],
      },
    },
    {
      heading: "What Data to Surface and When",
      body: [
        "The data in a QBR should answer one question: is this customer getting what they paid for? Everything else is decoration. Start with the customer's stated objectives from onboarding or the last strategic conversation. Show progress against those objectives using metrics that matter to them, not metrics that are easy for you to pull.",
        "Structure data in three time horizons. Backward-looking data shows what happened — adoption trends, value delivered, issues resolved. This should take no more than 20% of the meeting. Present-state data shows where things stand now — current health indicators, open risks, in-flight initiatives. This is the foundation for discussion. Forward-looking data is where the real value lives — upcoming risks you see forming, opportunities for deeper adoption, changes in their industry or organization that could affect the partnership.",
        "The most powerful data point in any QBR is one that surprises the customer. If you can surface an insight about their business that they didn't already know — a usage pattern that reveals an efficiency gap, a benchmark comparison that shows they're underperforming peers, a trend that predicts a problem six months out — you've demonstrated that the partnership produces value beyond the product itself. That's the moment the QBR stops being a meeting and starts being a moat."
      ],
      callout: {
        type: "insight",
        text: "Flip the ratio. In most QBRs the CSM talks for 80% and listens for 20%. In a well-designed QBR, the customer talks for at least 50% of the time. Your job is to ask the right questions and guide the conversation, not to present a deck."
      },
    },
    {
      heading: "How QBR Quality Correlates with Renewal Outcomes",
      body: [
        "Track QBR execution as a leading indicator. Specifically, measure three things: QBR completion rate, stakeholder seniority in attendance, and action item follow-through. These three metrics are more predictive of renewal outcomes than most health score signals.",
        "Accounts that complete all four quarterly QBRs renew at meaningfully higher rates than accounts that skip one or more. This is partly selection bias — engaged customers are more likely to show up. But it's also causal. The QBR is where misalignment gets surfaced and corrected. Without it, small issues compound into renewal risk. An account that skips two consecutive QBRs should be flagged as at-risk regardless of what your health score says.",
        "Stakeholder seniority matters because the renewal decision is made by the economic buyer, not by the end users. If your QBRs only involve practitioners and project managers, you're maintaining the operational relationship but not the commercial one. The person who signs the renewal has no direct experience of the value you provide. When budget pressure hits, you're an easy line item to cut because no one in the room remembers why the investment was made."
      ],
      callout: {
        type: "example",
        text: "One org tracked QBR attendance patterns and found that accounts where the executive sponsor attended at least two of four annual QBRs renewed at 96%. Accounts where the exec never attended renewed at 74%. They made executive attendance a primary risk signal and restructured their QBR content to give executives a reason to show up."
      },
    },
    {
      heading: "Designing the QBR for Different Stakeholder Levels",
      body: [
        "You need at least two QBR templates: one for operational stakeholders and one for executive stakeholders. Trying to serve both audiences in the same meeting produces a session that satisfies neither. The operational audience checks out during strategic discussion. The executive checks out during usage walkthroughs.",
        "The operational QBR focuses on adoption, efficiency, and roadmap. Show them what their teams are using, where there are gaps, and what's coming in the product that affects their workflows. Ask them what's working and what isn't. Identify training needs, integration opportunities, and process improvements. The output is a tactical action plan for the next quarter.",
        "The executive QBR focuses on investment returns and strategic alignment. Open with the business objectives they articulated when they bought the product. Show progress against those objectives in their language — revenue impact, cost savings, risk reduction, productivity gains. Then pivot to what the next phase of the partnership looks like. This is where expansion conversations begin naturally. You're not selling — you're showing them the logical next step based on the value they've already realized."
      ],
      bullets: [
        "Operational QBR: Adoption metrics, team usage patterns, feature roadmap relevance, training gaps, tactical action items",
        "Executive QBR: ROI against stated objectives, peer benchmarks, strategic alignment, partnership roadmap, expansion opportunities",
        "Never combine audiences — the content that engages one group disengages the other",
        "Send a pre-read 48 hours before the executive QBR with a one-page summary so the exec arrives prepared",
        "Close every QBR with documented next steps, owners, and deadlines — then follow up within 24 hours",
      ],
    },
  ],
};
