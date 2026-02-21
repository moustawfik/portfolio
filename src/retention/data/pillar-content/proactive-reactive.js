export default {
  lede: "Most CS teams operate in a permanent state of reaction. Something breaks, someone escalates, a renewal date sneaks up, and the team scrambles. They call this customer success. It is not. It is customer triage. Proactive motion design means building systems that detect risk and trigger intervention before the fire starts — not after the building is already on fire.",
  sections: [
    {
      heading: "The Reactive Trap",
      body: [
        "Reactive CS feels productive. Your team is busy. The Slack channels are active. Escalation meetings fill the calendar. Everyone is working hard. And retention is still declining.",
        "The trap is that reactive work is visible and urgent, while proactive work is invisible and strategic. When a CSM saves an account that was about to churn, they get credit. When a system quietly prevents that account from ever reaching churn risk, nobody notices. This creates a perverse incentive: reactive heroics get celebrated while systemic prevention gets ignored.",
        "The cost of reactive CS is measurable. For every account that enters a save motion, the average cost is 3-5x what it would have cost to intervene proactively. That cost includes CSM time diverted from healthy accounts, leadership attention pulled into escalation calls, commercial concessions offered to retain the customer, and the accounts that were neglected while the team was firefighting."
      ],
      callout: {
        type: 'insight',
        text: "If your team spends more than 40% of their time on accounts already at risk, your operating model is reactive by default — regardless of what your playbooks say."
      },
    },
    {
      heading: "Signal Detection: The Foundation of Proactive CS",
      body: [
        "Proactive motion starts with signal detection. Your system needs to identify risk before your CSM does. This means instrumenting the right signals and building thresholds that trigger action automatically.",
        "Signals fall into three categories: leading indicators, lagging indicators, and event triggers. Most CS teams only track lagging indicators — NPS scores, renewal rates, CSAT. By the time these move, the damage is done."
      ],
      bullets: [
        "Leading Indicators — Usage velocity changes, champion engagement frequency, feature adoption depth, executive sponsor meeting cadence. These move weeks or months before retention outcomes change.",
        "Lagging Indicators — NPS, CSAT, renewal rate, churn rate. Useful for measuring the health of your overall operation, but too slow for individual account intervention.",
        "Event Triggers — Champion departure, org restructure, competitor mention in support tickets, payment failure, executive sponsor change. These are discrete events that demand immediate attention regardless of what other signals say."
      ],
    },
    {
      heading: "Designing Trigger-Based Workflows",
      body: [
        "A proactive workflow has four components: the trigger condition, the response action, the owner assignment, and the outcome measurement. Every workflow should be documented at this level of specificity. If you cannot define all four components, the workflow is not ready to operationalize.",
        "The trigger condition is the signal or combination of signals that activates the workflow. Do not build triggers on single signals — that creates noise. Combine signals to increase specificity. A usage drop alone might be seasonal. A usage drop combined with a support ticket increase and a missed QBR is a pattern."
      ],
      table: {
        headers: ["Trigger", "Response", "Owner", "Measurement"],
        rows: [
          ["Usage drops 30%+ over 14 days AND support tickets increase", "Risk assessment call within 48 hours", "CSM + CS Ops escalation", "Did the account stabilize within 30 days?"],
          ["Champion departs organization", "Exec sponsor outreach within 24 hours", "CS Leader + Account CSM", "New champion identified within 2 weeks?"],
          ["No login for 21+ days (active account)", "Automated re-engagement sequence + CSM alert", "Automated + CSM backup", "Re-engagement within 7 days of trigger?"],
          ["Expansion signal: usage exceeds 80% of contracted capacity", "Expansion discovery conversation", "CSM + Account Manager", "Expansion conversation scheduled within 10 days?"],
          ["QBR declined or postponed twice consecutively", "Executive-to-executive outreach", "CS Leader", "QBR rescheduled within 3 weeks?"],
        ]
      },
    },
    {
      heading: "The Proactive-Reactive Ratio",
      body: [
        "You cannot eliminate reactive work entirely. Customers will always have issues that require response. The goal is to shift the ratio. In a mature CS organization, the target is roughly 70% proactive work (planned outreach, strategic touchpoints, expansion motions) to 30% reactive work (inbound issues, escalations, unplanned saves).",
        "Most teams operate at the inverse: 70% reactive, 30% proactive. Flipping this ratio requires investment in three areas: signal infrastructure (detecting problems early), workflow automation (routing the right action to the right person), and capacity management (ensuring CSMs have time for planned work instead of being consumed by firefighting)."
      ],
      callout: {
        type: 'example',
        text: "Example: A 150-account CS team tracked their proactive-reactive ratio over a quarter and found it was 25/75 — one in four touchpoints was planned. After implementing signal-based triggers and automating low-touch account management, the ratio shifted to 60/40 within two quarters. Net retention improved from 91% to 97% over the same period."
      },
    },
    {
      heading: "Building the Motion: Week-by-Week",
      body: [
        "Shifting from reactive to proactive does not happen in a single sprint. It is a gradual rewiring of how your team operates, what they measure, and what they prioritize."
      ],
      table: {
        headers: ["Week", "Action", "Owner"],
        rows: [
          ["1-2", "Audit current signal coverage. What data do you collect? What is missing?", "CS Ops"],
          ["3-4", "Define top 5 trigger-based workflows with full trigger/response/owner/measure", "CS Ops + CS Leader"],
          ["5-6", "Instrument triggers in your CS platform or build monitoring automation", "CS Ops + Engineering"],
          ["7-8", "Run workflows in shadow mode — triggers fire but only notify, no automated action", "CS Ops"],
          ["9-10", "Review shadow mode results. Tune thresholds. Remove false positives.", "CS Ops + CSMs"],
          ["11-12", "Activate workflows. Route actions to CSMs. Begin measuring outcomes.", "CS Leader"],
        ]
      },
      callout: {
        type: 'warning',
        text: "Do not skip shadow mode. Deploying untested triggers directly to your CSMs will flood them with false positives, erode trust in the system, and make the next automation initiative harder to adopt."
      },
    },
  ],
};
