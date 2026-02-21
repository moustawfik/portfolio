export default {
  lede: "The most expensive inefficiency in post-sale organizations is not bad tooling or missing data. It is ambiguity about who owns what. When support, CS, and account management overlap without clear boundaries, customers get inconsistent experiences and revenue falls through the cracks.",
  sections: [
    {
      heading: "Where Support Ends and Revenue Begins",
      body: [
        "Support is transactional. A customer has a problem, they raise it, someone solves it. The interaction is bounded — it has a start, a resolution, and a close. Support success is measured in speed, accuracy, and satisfaction within that bounded interaction.",
        "Revenue work is relational and longitudinal. It spans the entire customer lifecycle and is measured by outcomes that compound over months: adoption depth, executive alignment, expansion revenue, renewal rate. These are fundamentally different jobs that require different skills, incentives, and operating rhythms.",
        "The failure mode is treating them as the same job. When a CSM spends 60% of their time on what is effectively Tier 2 support — fielding how-to questions, troubleshooting bugs, chasing down product issues — they are not doing revenue work. They are doing support work with a more expensive title. You are paying senior salaries for junior work, and the actual revenue work is not getting done."
      ],
      callout: {
        type: "insight",
        text: "Track where your CSMs actually spend their time for two weeks. In most orgs, 40-60% of CSM activity is reactive support work that should be handled by a different function entirely."
      },
    },
    {
      heading: "Role Architecture Across the Customer Lifecycle",
      body: [
        "A clean role architecture assigns every customer interaction type to a specific owner. There should be no ambiguity about who handles what. When two roles both think they own something, neither does it well. When neither thinks they own it, it does not get done at all.",
        "The lifecycle breaks into discrete phases, and each phase has a primary owner. Implementation and onboarding may be owned by a dedicated team or by CSMs, but not by both simultaneously. Ongoing technical support is owned by the support org. Adoption and value realization is the CSM's core job. Renewal negotiation may sit with CSMs or a dedicated renewal desk depending on deal complexity. Expansion is either CSM-driven or handed to account executives — but that handoff must be explicit.",
        "The key principle is single-threaded ownership at every stage. The customer should never have to figure out who to contact. Internally, every metric should map to exactly one role. If two roles are measured on the same number without clear delineation of contribution, you will get finger-pointing when it goes poorly and credit-grabbing when it goes well."
      ],
      table: {
        headers: ["Lifecycle Phase", "Primary Owner", "Secondary / Support", "Key Metric"],
        rows: [
          ["Implementation", "Onboarding / PS Team", "CSM (shadow)", "Time to first value"],
          ["Ongoing Support", "Support Team", "CSM (escalation path)", "CSAT, resolution time"],
          ["Adoption & Value", "CSM", "CS Ops (data)", "Feature adoption, usage depth"],
          ["Renewal Execution", "CSM or Renewal Desk", "CS Ops (forecasting)", "Gross retention rate"],
          ["Expansion", "CSM or AE", "Sales Ops (pipeline)", "Net retention rate"],
        ],
      },
    },
    {
      heading: "How Misalignment Destroys Retention",
      body: [
        "Role ambiguity does not just create internal confusion. It creates customer-facing damage that directly impacts retention. Here is how it plays out.",
        "When handoffs are unclear, customers experience gaps. They finish onboarding and nobody picks up the relationship for three weeks. Or they raise a strategic concern to support and get a ticket number instead of a conversation. Each gap erodes trust incrementally. By the time the renewal conversation happens, the customer has accumulated enough friction to seriously evaluate alternatives.",
        "Internally, misalignment creates a culture of diffused accountability. When a customer churns, the post-mortem devolves into blame distribution. Support says the CSM should have caught the risk. The CSM says product never fixed the bug. Product says they were never told. Nobody owns the outcome because everybody partially owned the inputs. This is a structural failure, not a people failure. Fix the structure."
      ],
      bullets: [
        "Gap between onboarding completion and CSM engagement is the single most common handoff failure",
        "Support teams handling strategic complaints as tickets instead of routing to the CSM relationship owner",
        "CSMs doing demo work that should be handled by sales engineering on expansion opportunities",
        "Renewal conversations that start without a clear owner, especially in accounts with both a CSM and an AE",
        "Product feedback that lives in support tickets and never reaches the product team in a structured format",
      ],
    },
    {
      heading: "Incentive Structures That Reinforce the Right Behaviors",
      body: [
        "Role clarity on paper means nothing if incentives pull people in a different direction. Your compensation and performance structures must reinforce the boundaries you have defined. If you tell CSMs their job is adoption and retention but bonus them on expansion revenue, they will chase expansion at the expense of adoption. People respond to incentives, not org charts.",
        "Support should be incentivized on resolution quality and efficiency. CSMs should be incentivized on retention, adoption milestones, and leading indicators of account health. If you have a dedicated renewal team, they should be incentivized on gross retention and on-time renewal execution. Expansion incentives belong with whoever owns that motion — CSM or AE — but never split ambiguously between both.",
        "Review your incentive structure against your role architecture quarterly. As the business evolves, these two things drift apart. A comp plan designed for a 200-customer book does not work for a 500-customer book. An incentive designed when CSMs owned renewals does not work after you stand up a renewal desk."
      ],
      callout: {
        type: "warning",
        text: "If your CSMs are compensated on expansion revenue but you also have AEs working the same accounts, you have created a structural conflict. One of them will disengage from the expansion motion. Usually it is the CSM, because the AE has a stronger sales muscle."
      },
    },
    {
      heading: "Handoff Design: The Moments That Make or Break Experience",
      body: [
        "Every handoff in the customer lifecycle is a moment of risk. Information gets lost, context disappears, and the customer has to re-explain their situation to a new person. You cannot eliminate handoffs, but you can design them so well that the customer barely notices.",
        "A well-designed handoff has four components. First, a trigger — a defined event or milestone that initiates the transition, not a vague sense that it is time. Second, a data package — the structured information that transfers between roles, covering account context, open issues, key stakeholders, and next actions. Third, an introduction — the outgoing owner introduces the incoming owner to the customer with context, not just a calendar invite. Fourth, a verification step — someone confirms the handoff landed and the customer did not fall into a gap.",
        "Document your handoffs as processes, not as tribal knowledge. Map every transition point in your customer lifecycle. For each one, define the trigger, the data package, the introduction mechanism, and the verification step. Then audit them quarterly by sampling recent handoffs and checking whether the process was followed and whether the customer experienced any gap."
      ],
      callout: {
        type: "example",
        text: "One org reduced post-onboarding churn by 18% with a single change: they added a mandatory 48-hour overlap period where the onboarding lead and CSM were both active on the account. The outgoing owner did not close their involvement until the CSM confirmed they had made first contact and reviewed the account context."
      },
    },
  ],
};
