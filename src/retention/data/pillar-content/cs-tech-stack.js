export default {
  lede: "Your CS tech stack is not a collection of tools. It is the infrastructure that determines whether your retention architecture can operate at scale. Most organizations buy tools to solve symptoms, then spend years stitching them together. The ones that get this right start with principles, design the architecture, and then select tools to fill defined roles.",
  sections: [
    {
      heading: "Principles for Stack Design",
      body: [
        "Three principles should govern every technology decision in your CS stack. First, integration-first design. Every tool you add must connect to your core data infrastructure cleanly. If it creates a data silo, it creates a blind spot. Standalone tools that do not feed data back into your central system are worse than no tool at all because they create the illusion of visibility while actually fragmenting it.",
        "Second, data integrity as a non-negotiable. Your stack is only as good as the data flowing through it. If your CRM has stale contacts, your health score platform has incomplete usage data, and your engagement tools are tracking vanity metrics, no amount of tooling sophistication will produce good outcomes. Before you evaluate any new tool, audit whether your existing data infrastructure can support it.",
        "Third, automation capability. Every tool should reduce manual work, not add it. If a new platform requires CSMs to manually log activities, update fields, or generate reports that were previously automated, you are moving backward. The test is simple: does this tool free up CSM time for customer-facing work, or does it consume more of it?"
      ],
      callout: {
        type: "warning",
        text: "The number one stack mistake is buying a platform to solve a process problem. If your team does not have a defined renewal process, a renewal management tool will not create one. It will automate chaos. Fix the process first, then automate it."
      },
    },
    {
      heading: "The Four-Layer Stack Model",
      body: [
        "A well-architected CS stack has four layers, each serving a distinct function. The Data Layer is the foundation — this is where customer data lives and is unified. Your CRM, product analytics, support system, and billing platform feed data into a single source of truth. Without a clean data layer, every layer above it inherits noise and inconsistency.",
        "The Intelligence Layer sits above data. This is where health scores are calculated, risk signals are identified, and patterns are detected across the book of business. This layer transforms raw data into actionable signals. It answers the question: what should we pay attention to?",
        "The Action Layer is where those signals become work. Playbooks trigger, tasks are assigned, emails are sent, alerts fire. This is the execution layer — it translates intelligence into CSM activity. The Reporting Layer sits across all three, providing visibility into what is happening, what is working, and where the gaps are. Reports should flow naturally from the data and intelligence layers, not require manual assembly."
      ],
      table: {
        headers: ["Layer", "Function", "Key Capabilities", "Failure Mode"],
        rows: [
          ["Data", "Unified customer record", "CRM, product telemetry, support data, billing", "Data silos, stale records, no single source of truth"],
          ["Intelligence", "Signal detection and scoring", "Health scores, risk alerts, trend analysis", "Intuition-weighted models, no outcome validation"],
          ["Action", "Execution and automation", "Playbooks, task management, outreach automation", "Manual processes, alert fatigue, no workflow enforcement"],
          ["Reporting", "Visibility and accountability", "Dashboards, retention forecasting, cohort analysis", "Vanity metrics, manual report assembly, lagging indicators only"],
        ],
      },
    },
    {
      heading: "Evaluation Criteria for Tooling Decisions",
      body: [
        "When you evaluate a new tool, score it against five criteria. Integration depth: how well does it connect with your existing stack? Not just whether an integration exists, but whether the integration is bidirectional, real-time, and maintains data fidelity. A one-way sync that updates daily is not the same as a real-time bidirectional connection.",
        "Data model alignment: does the tool's data model match how your organization thinks about customers? If the tool is account-based but you operate at the business-unit level, you will spend months customizing it. Time to value: how long before the tool is fully operational and delivering measurable results? Anything over 90 days for a non-platform purchase is a red flag.",
        "Total cost of ownership goes beyond license fees. Include implementation cost, ongoing administration time, training, and the cost of maintaining integrations as both your stack and the vendor's product evolve. Finally, evaluate vendor trajectory — is this company investing in the CS space long-term, or is CS one of many use cases they are trying to serve? A tool built specifically for CS operations will evolve faster in the direction you need than a general-purpose platform with a CS module."
      ],
      bullets: [
        "Integration depth: Bidirectional, real-time data flow with your core systems",
        "Data model alignment: Matches your segmentation, hierarchy, and operational model",
        "Time to value: Fully operational within 90 days for point solutions, 6 months for platforms",
        "Total cost of ownership: License + implementation + administration + integration maintenance + training",
        "Vendor trajectory: Dedicated CS focus vs. general-purpose platform with a CS add-on",
      ],
    },
    {
      heading: "Common Stack Mistakes and How to Avoid Them",
      body: [
        "The most common mistake is premature platform adoption. You buy a comprehensive CS platform before you have the processes, data infrastructure, or team maturity to use it. The platform sits at 30% utilization for two years while you pay full price. Start with your CRM and a lightweight engagement layer. Add sophistication as your processes mature and your data quality improves.",
        "The second mistake is tool sprawl. Every team member has a preferred tool, and over time you accumulate overlapping solutions that nobody fully uses. Three different tools track customer engagement, two manage tasks, and none of them agree on the data. Consolidate aggressively. Every tool in your stack should have a clear, unique role that no other tool fills.",
        "The third mistake is under-investing in the data layer. Teams spend heavily on intelligence and action platforms but leave their CRM neglected, their product analytics unconnected, and their support data siloed. The result is sophisticated tools running on bad data. You get beautifully designed dashboards showing wrong numbers. Invest disproportionately in data quality and integration — it is less exciting than a new platform but it is what makes everything else work."
      ],
      callout: {
        type: "example",
        text: "An org spent six months implementing a CS platform, then discovered their CRM data was so inconsistent that health scores were meaningless. They paused the platform rollout, spent three months cleaning their CRM and building proper data pipelines, then resumed. The delay cost a quarter, but the platform delivered value immediately after relaunch instead of producing unreliable outputs for another year."
      },
    },
    {
      heading: "Building Your Evaluation Framework",
      body: [
        "Before you evaluate any tool, document what you need in a structured framework. Start with your current-state assessment: what do you have today, what is working, what is not, and where are the gaps? Map your existing tools to the four-layer model. Identify which layers are strong and which are weak.",
        "Next, define your requirements by layer. Be specific. Do not write that you need better health scoring. Write that you need a health scoring engine that ingests product usage data via API, supports multi-dimensional scoring, validates against renewal outcomes quarterly, and triggers playbooks in your existing workflow tool. The more specific your requirements, the faster your evaluation moves and the better your decision will be.",
        "Score every candidate tool against the same criteria with the same rubric. Involve CS Ops, a senior CSM, and your data or systems team in the evaluation. CS Ops understands the operational requirements. The CSM provides the end-user perspective. The data team evaluates integration feasibility and data model fit. If any of these three stakeholders has a serious objection, do not proceed — a tool that fails on any one of these dimensions will underperform."
      ],
      bullets: [
        "Document current state: existing tools mapped to the four-layer model with honest gap assessment",
        "Define requirements per layer: specific capabilities, integration needs, data model constraints",
        "Build a scoring rubric: consistent evaluation criteria applied to every candidate",
        "Involve three perspectives: CS Ops (operational), CSM (end-user), data/systems team (technical feasibility)",
        "Run a proof of concept on your actual data before committing — vendor demos use clean data that does not reflect your reality",
        "Negotiate implementation support and success criteria into the contract before signing",
      ],
    },
  ],
};
