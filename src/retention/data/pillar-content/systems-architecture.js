export default {
  lede: "Your CS tech stack is not a list of tools. It is the nervous system of your retention operation. When the wiring is wrong, your team makes decisions on stale data, duplicated effort, and gut instinct. When it is right, signals flow from the customer to the right person at the right time — and action happens before risk becomes reality.",
  sections: [
    {
      heading: "The Four-Layer Architecture",
      body: [
        "Every functional CS systems architecture can be broken down into four layers. Most organizations bolt tools together without thinking about which layer they are solving for, and that is where the rot starts.",
        "The layers are not optional. Skip one and you create a gap that your team fills with manual work, tribal knowledge, or worse — nothing at all. The goal is not to buy a tool for every layer. It is to ensure every layer has coverage, whether that comes from a platform, a custom integration, or a well-designed spreadsheet."
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
        "The architecture map above is not a picture of your tools. It is a picture of how data flows between them. Every arrow represents a decision: what data moves, in what direction, how often, and what triggers the movement.",
        "Most CS orgs fail at the integration layer. They buy strong tools but connect them weakly — CSV exports, manual syncs, or no connection at all. The result is a team that operates on yesterday's information while making decisions about tomorrow's renewals.",
        "When designing data flow, start from the action you want to enable and work backward. If you want a CSM to know within 24 hours that a champion left the account, trace the path: LinkedIn change event or email bounce detection feeds into your intelligence layer, triggers a risk flag, creates a task in the action layer, and routes it to the account owner. Every link in that chain must be automated and reliable."
      ],
    },
    {
      heading: "Integration Principles",
      body: [
        "Tool selection is the easy part. Integration design is where retention architecture lives or dies. These principles should govern every integration decision you make."
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
        "In practice, most mature CS architectures converge on a hub-and-spoke model. A central CS platform or data warehouse acts as the hub, with specialized tools connected as spokes. This is not about buying one monolithic platform. It is about designating a single system as the orchestration layer.",
        "The hub handles: data normalization, health scoring, workflow orchestration, and unified reporting. The spokes handle what they do best — CRM manages pipeline, support platforms manage tickets, product analytics tracks usage, communication tools manage outreach.",
        "The mistake most teams make is trying to turn their CRM into the hub. CRMs are designed for sales pipeline management, not customer lifecycle orchestration. They lack the signal processing, health scoring, and workflow complexity that CS operations require. Use your CRM as a spoke — a critical one — but not as the brain."
      ],
      callout: {
        type: 'example',
        text: "Example: A mid-market SaaS company running six tools with no hub spent 15 hours per week per CSM on data gathering and manual updates. After implementing a hub-and-spoke architecture, that dropped to under 3 hours — freeing 60% more capacity for actual customer engagement."
      },
    },
    {
      heading: "Building vs. Buying",
      body: [
        "Every CS leader eventually faces this decision. Build custom tooling or buy off the shelf. The answer is almost always a mix, but the proportions depend on your maturity and scale.",
        "Buy when: the problem is well-understood, multiple vendors solve it competently, and your team's time is better spent on customer outcomes than tool development. Most organizations should buy their CRM, support platform, and communication tools.",
        "Build when: your workflow is genuinely unique, existing tools force compromises that hurt your operation, or the integration between bought tools has a critical gap. Custom health scoring models, specialized risk detection rules, and bespoke reporting dashboards are common build candidates.",
        "The trap to avoid: building because you think your process is unique when it is actually just undocumented. Map your workflows thoroughly before deciding that no existing tool can support them."
      ],
    },
    {
      heading: "Implementation Sequencing",
      body: [
        "You cannot build the full architecture in one quarter. Nor should you try. The sequencing matters because each layer depends on the one below it."
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
  ],
};
