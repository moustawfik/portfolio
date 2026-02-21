export default {
  lede: "Most renewal forecasts are sophisticated guesses wearing the costume of data-driven decisions. The gap between what your CRM says and what actually happens at renewal is where millions in ARR go to die quietly. This framework replaces gut-feel forecasting with multi-signal prediction models that finance can actually trust.",
  sections: [
    {
      heading: "Why CRM-Based Forecasting Fails",
      body: [
        "Your CRM knows the contract end date. It might know the ARR value and the assigned CSM. But it doesn't know that the champion who signed the deal left three months ago. It doesn't know that product usage dropped 40% after the last release broke their core workflow. It doesn't know that three support tickets this quarter were tagged as escalations, or that the VP of Operations stopped attending QBRs.",
        "CRM-based forecasting fails because it treats renewals as contract events instead of relationship outcomes. The renewal date is the deadline, not the story. By the time a CSM manually updates a renewal probability in the CRM, the signal that should have triggered action happened weeks or months earlier.",
        "Typical CRM-based forecast accuracy sits around 60-65% for most B2B SaaS organizations. That means one in three renewal predictions is wrong. At scale, that's not a forecasting model — it's a coin flip with extra steps."
      ],
      callout: {
        type: 'insight',
        text: "If your forecast accuracy improves when you ask your CSMs to 'just gut-check it,' your model is measuring the wrong inputs."
      },
    },
    {
      heading: "The Six-Signal Model",
      body: [
        "Accurate renewal forecasting requires signals from six distinct dimensions. No single signal is sufficient. A customer can have high product usage and still churn because their executive sponsor changed strategy. A customer can have terrible support metrics and still renew because they're contractually locked in.",
        "The power is in the composite — weighing these signals against each other and against the specific customer segment. Here are the six dimensions you should be tracking."
      ],
      bullets: [
        "Usage Velocity — Not just whether they use the product, but the trajectory. Is usage accelerating, flat, or declining? Week-over-week and month-over-month trends matter more than absolute numbers.",
        "Champion Engagement — Is your primary point of contact still active? Are they responsive? Have they changed roles or left the organization? Champion departure is the single highest-correlation leading indicator of churn.",
        "Support Sentiment — Total ticket volume is a vanity metric. What matters is the trend, the severity distribution, and the resolution satisfaction. A customer submitting zero tickets isn't necessarily healthy — they might have stopped trying.",
        "Feature Adoption — Are they using the capabilities that map to their original business case? Customers who adopt features beyond their initial use case have significantly higher retention rates. Customers stuck on day-one functionality are at risk.",
        "Executive Sponsor Activity — Is there an active executive sponsor? When did they last engage? Do they attend QBRs? Executive disengagement often precedes the decision to evaluate competitors — and it happens quarters before the renewal conversation.",
        "Contract Signals — Utilization rate against contracted capacity, payment history, previous expansion or contraction patterns, multi-year vs. annual terms. These are the structural signals that frame the commercial conversation."
      ],
    },
    {
      heading: "Building the Composite Score",
      body: [
        "Each signal dimension gets a weighted score. The weights are not universal — they vary by customer segment, contract size, and lifecycle stage. An enterprise account with a three-year contract weights executive engagement more heavily than a SMB account on a monthly plan.",
        "The initial weights should be informed by historical analysis. Look at your last 50 churned accounts and your last 50 renewed accounts. Which signals differentiated them? That is your starting calibration."
      ],
      table: {
        headers: ["Signal", "Weight (Mid-Market)", "Weight (Enterprise)", "Data Source"],
        rows: [
          ["Usage Velocity", "25%", "15%", "Product Analytics"],
          ["Champion Engagement", "20%", "25%", "CRM + Communication"],
          ["Support Sentiment", "15%", "10%", "Support Platform"],
          ["Feature Adoption", "15%", "15%", "Product Analytics"],
          ["Exec Sponsor Activity", "10%", "25%", "CRM + Meeting Data"],
          ["Contract Signals", "15%", "10%", "Billing + CRM"],
        ]
      },
      callout: {
        type: 'example',
        text: "Example: A mid-market SaaS company re-weighted their model after discovering that champion departure predicted 73% of their churn — far more than usage decline (41%). That single calibration improved forecast accuracy from 62% to 81% within two quarters."
      },
    },
    {
      heading: "The Forecast Pipeline: From Signal to Prediction",
      body: [
        "The waterfall model above shows how a renewal cohort flows from total pipeline to final outcome. At each stage, signals push accounts into confidence tiers. The goal isn't perfect prediction — it's directional accuracy that improves over time.",
        "Committed accounts have strong signals across all six dimensions. At Risk - Swing accounts show declining signals but retain a viable path back — with the right strategy and execution, they can be won back into the committed tier. These are the accounts most operators get wrong, and they carry the highest strategic leverage. Predicted Churn accounts are those where intervention has failed or no viable path exists — they are written off from the forecast.",
        "Your forecast is the sum of what you can confidently defend. Committed plus whatever share of At Risk - Swing your team can realistically convert. Predicted Churn is excluded entirely. The gap between your committed base and your swing ceiling is where the real operational conversation lives."
      ],
    },
    {
      heading: "Measuring and Improving Forecast Accuracy",
      body: [
        "A forecast model is only useful if you track its accuracy and refine it. After each cycle, compare predictions to outcomes at every confidence tier.",
        "Track three accuracy metrics consistently. First, overall forecast accuracy: did total predicted retained revenue match actual retained revenue? Second, tier accuracy: what percentage of accounts in each confidence tier ended up where you predicted? Third, signal accuracy: which of the six dimensions was most predictive for that cohort?"
      ],
      bullets: [
        "Run a quarterly retrospective comparing forecast to actuals",
        "Recalibrate signal weights based on which dimensions were most predictive",
        "Track false positives (omitted accounts that renewed) and false negatives (committed accounts that churned) separately — they have different operational implications",
        "Set a target: organizations with mature forecasting models typically achieve 80-85% accuracy. If you are below 70%, your signal coverage or weighting needs work"
      ],
      callout: {
        type: 'warning',
        text: "Don't optimize for forecast accuracy at the expense of intervention speed. A model that perfectly predicts churn but gives you no time to act is just an expensive obituary."
      },
    },
  ],
};
