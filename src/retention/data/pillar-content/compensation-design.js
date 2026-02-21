export default {
  lede: "Compensation design is the most powerful lever in CS operations that nobody treats as an operations problem. How you pay your CS team determines what they optimize for, which customers get attention, and ultimately whether your retention architecture produces results or just produces activity.",
  sections: [
    {
      heading: "Why Most CS Comp Plans Create Misaligned Incentives",
      body: [
        "The default CS comp plan is a base salary plus a variable component tied to some combination of retention, expansion, and customer satisfaction. It sounds reasonable on paper. In practice, it creates a set of perverse incentives that undermine the outcomes you actually want.",
        "When you tie variable compensation to retention rate but measure it at the individual CSM level, you incentivize CSMs to fight for easy accounts during book-of-business assignments and to spend disproportionate time saving at-risk accounts that may not be worth saving. A CSM who spends 40 hours rescuing a $20K account that was never a good fit is losing time they could spend deepening adoption in a $200K account. The comp plan told them to save everything. So they did.",
        "When you add expansion revenue to the mix, you create a second problem. CSMs start behaving like account executives — pushing for upsells before the customer has fully adopted what they already own. The customer experience degrades because the person who's supposed to be their advocate is now trying to sell to them. Some customers tolerate it. The sophisticated ones recognize the shift and start limiting access to decision-makers."
      ],
      callout: {
        type: "insight",
        text: "Ask your CSMs privately what they optimize for when they allocate their time each week. If the answer doesn't match your stated CS strategy, your comp plan is the likely culprit."
      },
    },
    {
      heading: "Retention-Weighted vs. Activity-Weighted Compensation",
      body: [
        "There are two fundamental approaches to CS variable compensation. Activity-weighted plans pay for doing things — completing QBRs, hitting adoption milestones, logging activities, executing playbooks. Retention-weighted plans pay for outcomes — gross retention rate, net retention rate, expansion pipeline influenced.",
        "Activity-weighted plans are safer and easier to administer. They reward the behaviors you believe lead to retention, and they give CSMs clear control over their variable comp. The downside is that activity doesn't equal outcome. A CSM can complete every QBR, log every activity, and run every playbook, and the customer can still churn because the underlying product fit was wrong or the market shifted. You end up paying full variable comp for a team that's busy but not effective.",
        "Retention-weighted plans are harder to administer but align incentives more directly with business outcomes. The risk is that CSMs feel penalized for outcomes beyond their control — a customer acquired through a bad-fit sales process, a product failure that drives churn, a budget cut at the customer that has nothing to do with value delivery. The solution isn't to choose one approach exclusively. It's to blend them with the right ratio."
      ],
      table: {
        headers: ["Approach", "Pros", "Cons", "Best For"],
        rows: [
          ["Activity-weighted", "Clear CSM control, easy to measure, rewards process adherence", "Activity does not guarantee outcomes, can reward busywork", "Early-stage CS orgs building foundational processes"],
          ["Retention-weighted", "Directly aligns with business outcomes, rewards effectiveness over activity", "Penalizes for factors outside CSM control, harder to administer", "Mature CS orgs with strong processes and clean segmentation"],
          ["Blended (recommended)", "Balances process adherence with outcome accountability", "More complex to design and communicate", "Most CS organizations at scale"],
        ],
      },
    },
    {
      heading: "Structuring Variable Comp by Role",
      body: [
        "CSMs, CS Ops, and CS leadership have different levers of influence, and their compensation should reflect that. A CSM directly influences individual account outcomes through their engagement quality. CS Ops influences aggregate outcomes through the systems and processes they build. Leadership influences strategic outcomes through resource allocation, segmentation design, and organizational decisions.",
        "For CSMs, variable compensation should be 15-25% of total comp, split between retention outcomes and leading indicator achievement. A typical split is 60% on gross retention of their book, 25% on leading indicators like QBR completion, health score improvement, and adoption milestone achievement, and 15% on expansion pipeline sourced or influenced. This blend rewards the outcome while also rewarding the behaviors that drive it.",
        "For CS Ops, variable compensation should be tied to system-level metrics — data quality improvements, process adoption rates, health score predictive accuracy, and operational efficiency gains. Don't tie CS Ops comp to retention rate directly. They influence retention through the systems they build, but they don't control individual account outcomes. Measuring them on retention creates accountability without agency — demoralizing and unfair. CS leadership should be compensated on portfolio-level retention and expansion, plus strategic milestones like org design improvements, tech stack maturity, and operational scalability metrics."
      ],
      callout: {
        type: "example",
        text: "One org restructured CSM comp from 100% retention-weighted to a 60/25/15 blend. CSM satisfaction scores increased because they felt rewarded for effort, not just luck. Retention rate actually improved because CSMs invested more time in proactive adoption work — the 25% leading indicator component — instead of spending all their energy on reactive save motions."
      },
    },
    {
      heading: "The Relationship Between Comp Design and Customer Outcomes",
      body: [
        "Comp design isn't just an HR exercise. It's a customer experience decision. What you incentivize determines how your team spends their time, and how your team spends their time determines what the customer experiences. Incentivize QBR completion? Your customers get consistent quarterly engagement. Incentivize expansion revenue? Your customers get pitched. Incentivize adoption milestones? Your customers get proactive enablement.",
        "The chain is direct: comp structure shapes CSM behavior, CSM behavior shapes customer experience, customer experience shapes retention. When you design a comp plan, you're designing a customer experience whether you intend to or not. This is why comp design should involve CS leadership, CS Ops, and finance working together. Finance ensures the plan is economically sound. CS leadership ensures it drives the right strategy. CS Ops ensures the metrics are measurable and the data is reliable.",
        "Test your comp plan by running a scenario analysis. Take your top five churn reasons from the last four quarters. For each one, ask: does our current comp plan incentivize the CSM behavior that would have prevented or mitigated this churn? If the answer is no for more than one or two scenarios, your comp plan is misaligned with your retention challenge."
      ],
      callout: {
        type: "warning",
        text: "If your comp plan incentivizes retention rate but your primary churn driver is bad-fit customers acquired by sales, you're punishing CSMs for a sales problem. Comp plans must account for the full system, not just the CS function in isolation."
      },
    },
    {
      heading: "Anti-Patterns in CS Compensation",
      body: [
        "These are the compensation mistakes that undermine retention architecture most frequently. Recognizing them is the first step to fixing them.",
        "The cliff incentive is the most damaging. This is when the full retention bonus depends on hitting a specific threshold — say, 90% gross retention. A CSM at 89.5% gets nothing, while a CSM at 90.1% gets the full payout. This creates perverse end-of-quarter behavior: desperate save attempts on accounts that should churn, extended free periods to push renewals past the measurement window, and gaming of what counts as churn versus downgrade. Use graduated payout scales instead of binary cliffs.",
        "The second anti-pattern is equal weighting across unequal accounts. A CSM who retains a $500K account and loses a $30K account shouldn't be evaluated the same as one who retains the $30K and loses the $500K. Weight retention metrics by ARR, not by logo count, unless your business model specifically requires logo retention as the primary metric. The third anti-pattern is annual measurement cycles. If you measure and pay retention annually, you create 11 months of low urgency followed by one month of panic. Measure quarterly. Pay quarterly. Maintain urgency throughout the year."
      ],
      bullets: [
        "Cliff incentives: Binary payout thresholds that create end-of-period gaming instead of consistent behavior",
        "Equal logo weighting: Treating a $30K renewal the same as a $500K renewal in CSM scorecards",
        "Annual-only measurement: Long cycles that reduce urgency and delay feedback loops",
        "Shared metrics without shared control: Measuring CSMs on outcomes influenced by sales, product, or support without adjustment",
        "Retroactive plan changes: Modifying comp plans mid-period, which destroys trust and makes CSMs hedge instead of commit",
        "Complexity overload: Plans with more than four or five components that CSMs can't mentally model when making daily prioritization decisions",
      ],
    },
  ],
};
