export default {
  lede: "A health score should tell you which accounts need attention before the customer tells you. Most health scores fail at this basic job. They're either so noisy that teams ignore them, or so simplistic that they miss real risk. Building one that actually predicts outcomes requires methodological rigor, not just data aggregation.",
  sections: [
    {
      heading: "Why Most Health Scores Fail",
      body: [
        "The typical health score is built by a CS leader and an ops person in a room, listing signals they believe matter: login frequency, support tickets, NPS response, feature adoption. They assign weights based on intuition, build a composite score, and color-code it green, yellow, red. Then they launch it and wonder why nobody trusts it six months later.",
        "The problem isn't the signals. It's the methodology. Intuition-weighted scores reflect what you think drives retention, not what actually does. Login frequency feels important, but in many products, power users log in less because they've built automations. Support ticket volume feels like a risk indicator, but customers who file tickets are engaged — it's the silent accounts that churn.",
        "The second failure mode is vanity scoring. If 80% of your accounts are green, your score isn't differentiating. It's a dashboard decoration. The purpose of a health score is to rank-order your accounts by risk so you can allocate attention. If it doesn't change how your team spends their time, it's not working."
      ],
      callout: {
        type: "warning",
        text: "If more than 70% of your accounts are scored as healthy, your thresholds are wrong. A well-calibrated health score should show a distribution that roughly mirrors your actual retention outcomes."
      },
    },
    {
      heading: "Signal Weighting Methodology",
      body: [
        "Stop weighting signals by intuition. Weight them by correlation to outcomes. Pull your renewal and churn data from the last 12-24 months. For every signal you track, calculate its correlation with the outcome — did the account renew or not? High correlation gets high weight. Low or no correlation gets removed, no matter how intuitively important it feels. Let the data argue with your assumptions.",
        "Some signals are leading and some are lagging. A leading signal changes before the outcome — declining usage trends, executive sponsor departure, decreasing engagement breadth. A lagging signal changes after the outcome is already likely decided — a bad NPS score filed 30 days before renewal, a support escalation in the final quarter. You want your health score dominated by leading signals. Lagging signals tell you what already happened.",
        "Recalibrate weights quarterly. The relationship between signals and outcomes changes as your product evolves, your customer base shifts, and market conditions move. A weight that was accurate last year may be misleading today. Treat your health score as a model that requires ongoing validation, not a one-time build."
      ],
      table: {
        headers: ["Signal Type", "Example", "Typical Correlation", "Leading / Lagging"],
        rows: [
          ["Usage depth", "Features used as % of purchased", "High", "Leading"],
          ["Engagement breadth", "Number of active users vs. licensed", "High", "Leading"],
          ["Executive access", "Exec sponsor responsive to outreach", "Medium-High", "Leading"],
          ["Support sentiment", "Tone and frequency of escalations", "Medium", "Mixed"],
          ["NPS / CSAT", "Survey response scores", "Low-Medium", "Lagging"],
          ["Login frequency", "Daily/weekly active logins", "Varies widely", "Lagging"],
        ],
      },
    },
    {
      heading: "Composite Scoring vs. Single-Dimension Scoring",
      body: [
        "A single composite number — account health is 72 out of 100 — is easy to consume but hard to act on. A CSM looking at a 72 doesn't know whether the problem is low usage, missing executive alignment, or a support issue. They have to dig in to figure out what to do, which means the score creates work instead of directing it.",
        "A better approach is multi-dimensional scoring with a composite summary. Show the overall score, but break it into three to five dimensions that each correspond to a specific action. Usage health tells the CSM to run an adoption play. Relationship health tells them to re-engage stakeholders. Support health tells them to coordinate with the support team on open issues. Each dimension maps to a playbook. The score doesn't just flag the problem — it points to the solution.",
        "Keep the dimensions to five or fewer. Every dimension you add reduces the clarity of the model. If you can't explain your health score framework to a new CSM in under five minutes, it's too complex. Complexity doesn't make a model more accurate — it makes it harder to operationalize."
      ],
      bullets: [
        "Usage Health: Are they using what they bought? Depth and breadth of feature adoption against benchmarks",
        "Relationship Health: Do you have access to the right people? Executive engagement, multi-threaded contacts",
        "Support Health: Is the support experience creating risk? Open ticket age, escalation frequency, sentiment",
        "Outcome Health: Are they seeing value? Self-reported or measured ROI against stated goals",
        "Commercial Health: Are the commercial terms stable? Contract changes, payment history, pricing sensitivity signals",
      ],
    },
    {
      heading: "Validating Your Health Score Against Outcomes",
      body: [
        "A health score is a model, and models must be validated. Every quarter, run a retrospective. Look at every account that churned or downgraded. What was their health score 90 days before renewal? 180 days before? If churned accounts were showing green, your model is broken.",
        "Calculate the predictive accuracy at each threshold. If green accounts renew at 95%, yellow at 80%, and red at 60%, your score is differentiating meaningfully. If green renews at 90% and red renews at 82%, your score isn't telling you much that matters. It's a traffic light that's always green.",
        "The gold standard is a lift analysis. Compare the renewal rate of accounts where your team intervened based on health score alerts versus accounts with similar profiles where no intervention occurred. If intervention on flagged accounts measurably improves outcomes, your health score is driving real value. If it doesn't, you're generating alerts that don't lead to effective action — which is a playbook problem, not just a scoring problem."
      ],
      callout: {
        type: "example",
        text: "An org discovered that their health score accurately predicted churn for accounts under $50K ARR but was nearly random for enterprise accounts. The reason: enterprise accounts had longer, more complex decision cycles that usage-based signals did not capture. They built a separate scoring model for enterprise with heavier weight on executive engagement and multi-year contract structure."
      },
    },
    {
      heading: "Common Anti-Patterns in Health Scoring",
      body: [
        "These are the mistakes I see repeatedly. If you recognize your organization in this list, you're not alone — but you need to fix it.",
        "The first anti-pattern is set-and-forget. You build a health score, launch it, and never recalibrate. Within six months, the weights are stale and the team has lost trust in the data. Health scores require ongoing maintenance like any analytical model.",
        "The second is over-indexing on usage data. Usage is important but it's not the whole picture. An account can have high usage and still churn because the economic buyer doesn't see ROI, or because a competitor is offering a better price. Usage-only scores miss commercial and relationship risk entirely. The third is ignoring data quality. If your usage data has gaps, your CRM contacts are outdated, and your support data is inconsistent, your health score inherits all of that noise. Garbage in, garbage out. Fix the foundation before you build on top of it."
      ],
      bullets: [
        "Set-and-forget: Building once and never recalibrating weights against actual outcomes",
        "Usage tunnel vision: Over-weighting product usage while ignoring relationship and commercial signals",
        "Vanity thresholds: Setting green/yellow/red cutoffs so most accounts look healthy",
        "Data quality neglect: Building models on top of inconsistent, incomplete, or stale data",
        "Complexity theater: Adding more signals to seem rigorous instead of validating whether existing signals predict anything",
        "Alert fatigue: Generating so many health alerts that the team ignores them all",
      ],
    },
  ],
};
