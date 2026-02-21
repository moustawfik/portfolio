export default {
  lede: "Your CS tech stack isn't a list of tools. It's the nervous system of your retention operation. When the wiring is wrong, your team makes decisions on stale data, duplicated effort, and gut instinct. When it's right, signals flow from the customer to the right person at the right time — and action happens before risk becomes reality.",
  sections: [
    {
      heading: "The Four-Layer Architecture",
      body: [
        "Every functional CS systems architecture can be broken down into four layers. Most organizations bolt tools together without thinking about which layer they're solving for, and that's where the rot starts.",
        "The layers aren't optional. Skip one and you create a gap that your team fills with manual work, tribal knowledge, or worse — nothing at all. The goal isn't to buy a tool for every layer. It's to ensure every layer has coverage, whether that comes from a platform, a custom integration, or a well-designed spreadsheet. I've seen teams run world-class operations on Sheets and Zapier. I've seen others burn through six-figure platform contracts with nothing to show for it. The architecture matters more than the brand name."
      ],
      bullets: [
        "Data Layer — Where customer signals originate. Product usage, support interactions, billing events, communication patterns, CRM records. This layer is about collection and normalization.",
        "Intelligence Layer — Where raw data becomes actionable insight. Health scoring, risk detection, opportunity identification, trend analysis. This is the engine that turns noise into signal.",
        "Action Layer — Where insight becomes intervention. Workflows, playbooks, task routing, automated outreach, escalation paths. This is where your team actually does work.",
        "Reporting Layer — Where outcomes get measured. Retention rates, forecast accuracy, engagement trends, team performance. This layer closes the loop and proves what works."
      ],
      callout: {
        type: 'insight',
        text: "If your team is spending more than 20% of their time on data gathering and manual reporting, you have a systems architecture problem — not a people problem."
      },
    },
    {
      heading: "Data Flow: The Connective Tissue",
      body: [
        "The architecture map above isn't a picture of your tools. It's a picture of how data flows between them. Every arrow represents a decision: what data moves, in what direction, how often, and what triggers the movement.",
        "Most CS orgs fail at the integration layer. They buy strong tools but connect them weakly — CSV exports, manual syncs, or no connection at all. Five tabs and a prayer. The result is a team that operates on yesterday's information while making decisions about tomorrow's renewals.",
        "When designing data flow, start from the action you want to enable and work backward. If you want a CSM to know within 24 hours that a champion left the account, trace the path: LinkedIn change event or email bounce detection feeds into your intelligence layer, triggers a risk flag, creates a task in the action layer, and routes it to the account owner. Every link in that chain must be automated and reliable."
      ],
    },
    {
      heading: "Integration Principles",
      body: [
        "Tool selection is the easy part. Integration design is where retention architecture lives or dies."
      ],
      bullets: [
        "Bidirectional over unidirectional — If data flows one way, you are creating a dead end. Your CRM should feed your CS platform, and your CS platform should write back to your CRM. One-way integrations create data silos.",
        "Real-time over batch — Batch syncs are fine for reporting. They are not fine for risk detection. If your health score updates once a day, your team is always 24 hours behind reality.",
        "Single source of truth per data type — Every piece of customer data should have exactly one authoritative source. When two systems disagree on contract value or renewal date, chaos follows.",
        "Fail-safe design — Every integration will break. The question is whether your team knows when it breaks. Build monitoring and alerting into your integration layer, not just your product."
      ],
      callout: {
        type: 'warning',
        text: "The most dangerous integration is the one that looks like it is working. Stale data flowing confidently through your system is worse than no data at all — because your team trusts it."
      },
    },
    {
      heading: "The Hub-and-Spoke Model",
      body: [
        "In practice, most mature CS architectures converge on a hub-and-spoke model. A central CS platform or data warehouse acts as the hub, with specialized tools connected as spokes. This isn't about buying one monolithic platform. It's about designating a single system as the orchestration layer.",
        "The hub handles: data normalization, health scoring, workflow orchestration, and unified reporting. The spokes handle what they do best — CRM manages pipeline, support platforms manage tickets, product analytics tracks usage, communication tools manage outreach.",
        "The mistake most teams make is trying to turn their CRM into the hub. CRMs are designed for sales pipeline management, not customer lifecycle orchestration. They lack the signal processing, health scoring, and workflow complexity that CS operations require. Use your CRM as a spoke — a critical one — but not as the brain. This is one of the hills I'll die on."
      ],
      callout: {
        type: 'example',
        text: "Example: A mid-market SaaS company running six tools with no hub spent 15 hours per week per CSM on data gathering and manual updates. After implementing a hub-and-spoke architecture, that dropped to under 3 hours — freeing 60% more capacity for actual customer engagement."
      },
    },
    {
      heading: "Building vs. Buying",
      body: [
        "Every CS leader eventually faces this decision. Build or buy. The answer is almost always a mix, but the proportions depend on your maturity and scale.",
        "Buy when: the problem is well-understood, multiple vendors solve it competently, and your team's time is better spent on customer outcomes than tool development. Most organizations should buy their CRM, support platform, and communication tools.",
        "Build when: your workflow is genuinely unique, existing tools force compromises that hurt your operation, or the integration between bought tools has a critical gap. Custom health scoring models, specialized risk detection rules, and bespoke reporting dashboards are common build candidates.",
        "The trap to avoid: building because you think your process is unique when it's actually just undocumented. Map your workflows thoroughly before deciding that no existing tool can support them."
      ],
    },
    {
      heading: "Implementation Sequencing",
      body: [
        "You can't build the full architecture in one quarter. Nor should you try. The sequencing matters because each layer depends on the one below it."
      ],
      table: {
        headers: ["Phase", "Focus", "Duration", "Outcome"],
        rows: [
          ["1", "Data Layer — audit sources, normalize key fields, establish single source of truth", "4-6 weeks", "Clean, reliable data foundation"],
          ["2", "Intelligence Layer — build initial health score, define risk thresholds", "4-8 weeks", "Automated risk and opportunity detection"],
          ["3", "Action Layer — design playbooks, build workflow automation, route tasks", "6-8 weeks", "Proactive intervention capability"],
          ["4", "Reporting Layer — define KPIs, build dashboards, establish review cadence", "2-4 weeks", "Measurable outcomes and feedback loop"],
        ]
      },
      callout: {
        type: 'insight',
        text: "Resist the urge to start with reporting. Dashboards built on unreliable data just make bad decisions look more official."
      },
    },
    {
      heading: "Data Hygiene: The Discipline That Makes Everything Work",
      body: [
        "I need to say this clearly because it gets glossed over: none of the architecture above matters if your data is dirty. Not some of it. None of it. A health score built on incomplete usage data is a random number generator with a nice UI. A playbook triggered by a stale CRM field is sending your team on a fool's errand. You cannot build intelligence on top of noise and expect signal to come out the other side.",
        "Data hygiene is not a project. It's a discipline. You don't clean your data once and move on. You build an operating rhythm that keeps it clean, assigns ownership to every critical field, and measures quality the same way you measure retention — continuously, with consequences when it degrades.",
        "Start by identifying the fields that actually matter. Not every field in your CRM needs to be pristine. But renewal date, contract value, primary contact, executive sponsor, product tier, and health score inputs? Those are load-bearing. If any of those are wrong, your entire downstream operation is compromised. Map each critical field to an owner — not a team, a person. If nobody owns a field, nobody maintains it. That's not cynicism. That's every CRM I've ever audited."
      ],
      callout: {
        type: 'warning',
        text: "If you ask your team to name the single source of truth for renewal dates and you get two different answers, you have a data hygiene crisis. Not a data hygiene problem — a crisis. Two sources of truth means zero sources of truth."
      },
    },
    {
      heading: "Building a Hygiene Cadence",
      body: [
        "Data quality degrades by default. Contacts leave companies, contracts get amended mid-term, new products get added to accounts, and nobody updates the record. Entropy is the natural state of CRM data. The only thing that fights entropy is a cadence.",
        "Weekly: CS Ops runs an automated scan for critical field gaps — missing renewal dates, blank executive sponsors, accounts with no activity logged in 30+ days. These aren't reports that sit in a dashboard. They're task queues that route directly to the responsible CSM with a deadline. If the field isn't populated by end of week, it escalates.",
        "Monthly: CS Ops validates a sample of health score inputs against reality. Pull 20 accounts. Compare what the system says to what the CSM says. If they diverge on more than 3 or 4, your data layer has drift. Find out where the drift started — is it a broken integration, a process gap, or a CSM who stopped logging? Each root cause has a different fix.",
        "Quarterly: Run a full data quality audit. Measure completeness rates for every critical field. Compare current-quarter data to last quarter's baseline. Are you improving or degrading? Report data quality metrics to the same leadership audience that sees retention metrics. When data quality becomes visible at the executive level, it gets resourced. When it's buried in an ops backlog, it stays broken."
      ],
      table: {
        headers: ["Cadence", "Action", "Owner", "Escalation"],
        rows: [
          ["Weekly", "Automated scan for critical field gaps; task queue to responsible CSM", "CS Ops", "Unfilled fields escalate to CS Manager after 5 business days"],
          ["Monthly", "Sample 20 accounts; compare system data to CSM ground truth", "CS Ops", "Drift above 15% triggers integration and process audit"],
          ["Quarterly", "Full data quality audit; completeness rates for all critical fields", "CS Ops + CS Leader", "Results reported alongside retention metrics to leadership"],
        ],
      },
      callout: {
        type: 'example',
        text: "A team I worked with discovered that 34% of their accounts had incorrect renewal dates in the CRM — some off by months. Their health scores were technically accurate, but they were triggering renewal playbooks at the wrong time. After implementing a monthly validation cadence, renewal date accuracy hit 97% within two quarters and on-time renewal execution improved from 61% to 89%."
      },
    },
  ],
};
