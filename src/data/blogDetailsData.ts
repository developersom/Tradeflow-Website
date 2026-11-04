import featuredImg from '../assets/1575653a765f4ad9d05b12e8c41237aaee045bca.png';
import logisticsImg from '../assets/896b2dfe3bffb5c728bcb2def5487a6797470e32.png';
import qualityImg from '../assets/af581e24c45590eaa1d96a91c3e087f73f38f35b.png';
import taxComplianceImg from '../assets/6b5ddea4bec7561119a11735432ce769e7beffbf.png';

export interface ArticleSection {
  title: string;
  subtitle: string;
  paragraphs: string[];
  callout?: string;
}

export interface BlogDetail {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  keyInsight: string;
  sections: ArticleSection[];
}

export const BLOG_DETAILS: Record<string, BlogDetail> = {
  'eliminate-transit-shortages-weighbridge-mismatches': {
    slug: 'eliminate-transit-shortages-weighbridge-mismatches',
    category: 'Mandi Operations',
    title: 'How Commodity Traders Eliminate Transit Shortages and Weighbridge Mismatches',
    subtitle: 'Connecting Dharamkanta weight receipts directly to original sauda contracts to stop margin leakage.',
    author: 'By Rajesh V. Agarwal',
    authorRole: 'Head of Commodity Operations',
    date: 'October 18, 2026',
    readTime: '6 min read',
    image: featuredImg,
    keyInsight:
      '“A 0.4% transit weight variance across 5,000 MT of grain represents over ₹4.8 Lakhs in floating dispute capital if not instantly reconciled against the contracted tolerance band.”',
    sections: [
      {
        title: 'The Daily Reality of Weight Discrepancies in Physical Trade',
        subtitle: 'Why paper bilty slips and telephone notes cause perpetual reconciliation lag',
        paragraphs: [
          'In physical agricultural trade across Mandis in Madhya Pradesh, Rajasthan, Maharashtra, and Punjab, commodities pass through at least two separate Dharamkanta scales: the loading weighbridge at the warehouse and the unloading scale at the buyer’s milling or processing facility.',
          'Under standard Mandi practices, dry agricultural goods experience nominal transit moisture evaporation and handling dust loss (commonly capped between 0.25% to 0.50% based on negotiated terms). Yet, without a real-time digital link between the original Sauda note and the Lorry Receipt (LR), buyers often withhold the final 10% payment tranche until physical bilty slips are couriered and audited.',
          'This lag turns working capital into inactive ledger entries and creates unnecessary tension between brokers, sellers, and procurement directors.',
        ],
      },
      {
        title: 'Connecting Contract Terms to Weighbridge Slips',
        subtitle: 'Automating tolerance deductions before raising the final credit note',
        paragraphs: [
          'When the trade journey is tracked continuously from Contract creation, each dispatch lot automatically inherits the allowable moisture and shrinkage tolerance. As soon as the weighbridge receipt is entered at the unloading gate, TradeFlow360 immediately validates the tare and net weight against the contracted quantity.',
          'If the shortage falls strictly within the agreed contractual norm, the receivable ledger instantly updates the net payable without triggering a manual dispute ticket. If the discrepancy exceeds tolerance, a debit/credit note is auto-drafted for counterparties with the exact weighbridge slip attached.',
        ],
        callout:
          'Key Rule: Never settle trade brokerage or party balance on loading weight alone without recording the gate Dharamkanta slip on the live contract ledger.',
      },
      {
        title: 'The Result: 24-Hour Settlement Turnaround',
        subtitle: 'Moving from multi-week disputed ledgers to day-of-delivery payment release',
        paragraphs: [
          'By providing both buyer and seller visibility into the connected trade record, post-delivery disputes are resolved on the day of unloading rather than weeks later during monthly book closing.',
          'Accounts teams no longer need to cross-check scattered WhatsApp photos with bank statements; the payment tranche due date is pegged directly to the verified net delivered tonnage.',
        ],
      },
    ],
  },

  'managing-multi-lot-dispatches-staggered-rtgs-tranches': {
    slug: 'managing-multi-lot-dispatches-staggered-rtgs-tranches',
    category: 'Logistics & Dispatch',
    title: 'Managing Multi-Lot Dispatches and Staggered RTGS Tranches in Wholesale Trade',
    subtitle: 'Structuring single large sauda commitments into split truck deliveries without losing margin control.',
    author: 'By Harish K. Patel',
    authorRole: 'Supply Chain & Mandi Logistics Lead',
    date: 'October 18, 2026',
    readTime: '6 min read',
    image: logisticsImg,
    keyInsight:
      '“A 2,000 MT procurement contract typically spans 40 to 60 individual truck dispatches over three weeks. Losing track of a single lorry receipt breaks your entire payment reconciliation chain.”',
    sections: [
      {
        title: 'The Complexity of Staggered Commodity Deliveries',
        subtitle: 'Why multi-truck sauda contracts are prone to cash flow mismatch',
        paragraphs: [
          'Wholesale commodity trade rarely moves in a single dispatch. A food processing enterprise contracting 5,000 MT of wheat or oilseeds schedules dispatches across multiple truckloads per day depending on mill intake capacity and railway siding availability.',
          'Each truck carries its own Lorry Receipt (LR), separate gate pass, driver contact, and preliminary Dharamkanta tare slip. If brokers track these shipments in separate WhatsApp chats or Excel sheets, tracking which tranche corresponds to which bank RTGS reference becomes an operational bottleneck.',
          'Delayed bilty verification means transporters demand detention charges, while millers freeze ledger settlements awaiting all truck receipts.',
        ],
      },
      {
        title: 'Automated Lot Tracking Linked to Master Sauda',
        subtitle: 'Real-time allocation of partial deliveries against the original purchase agreement',
        paragraphs: [
          'TradeFlow360 allows traders to break large contracts into linked dispatch batches. Each truck departure logs the truck registration number, driver contact, net loading weight, and estimated arrival time.',
          'As soon as a truck crosses the destination Mandi gate, the destination receipt automatically updates the remaining contract quota. Finance teams can generate proportionate proforma GST invoices and match incoming RTGS payments to specific dispatched lots immediately.',
        ],
        callout:
          'Operational Mandate: Every partial dispatch must carry a unique sub-lot digital identifier linked to the parent sauda to prevent duplicate bilty billing.',
      },
      {
        title: 'Streamlined Cash Flow and Zero Unbilled Freight',
        subtitle: 'Unlocking working capital through transparent multi-party milestones',
        paragraphs: [
          'With real-time delivery status visible to mill accounts and commission agents alike, payment milestones trigger automatically without waiting for manual ledger reconciliation at the month end.',
          'The result is higher counterparty trust, zero disputed freight advances, and immediate clarity on open contracted balances.',
        ],
      },
    ],
  },

  'digital-quality-sampling-moisture-refraction-disputes': {
    slug: 'digital-quality-sampling-moisture-refraction-disputes',
    category: 'Quality Testing',
    title: 'Digital Quality Sampling: Resolving Moisture and Refraction Disputes Instantly',
    subtitle: 'Moving from subjective handheld inspections to mutually signed digital lab certificates.',
    author: 'By Dr. Sunita Deshmukh',
    authorRole: 'Head of Quality Assurance & Agri-Testing',
    date: 'October 18, 2026',
    readTime: '6 min read',
    image: qualityImg,
    keyInsight:
      '“Moisture variations of even 1.5% above contracted FAQ standards frequently lead to arbitrary price cuts at the mill gate unless backed by a digitally recorded initial sample parameter.”',
    sections: [
      {
        title: 'Subjective Grading vs. Commercial Reality',
        subtitle: 'How unilateral quality deductions erode broker and seller commissions',
        paragraphs: [
          'Fair Average Quality (FAQ) parameters for pulses, grains, and oilseeds dictate allowable percentages for moisture, foreign matter, damaged kernels, and refraction. Historically, quality sampling at Mandi loading points relied on visual inspection or handheld moisture meters.',
          'When commodities arrive after 48 hours in transit, unloading lab inspectors at processing mills often report higher moisture or pest damage, unilaterally imposing steep price cuts or rejecting entire truckloads.',
          'Without indisputable digital records of the loading sample certificate, sellers have little leverage to dispute post-delivery deductions.',
        ],
      },
      {
        title: 'Standardizing Digital Quality Certificates at Loading',
        subtitle: 'Binding quality parameters directly to the trade contract docket',
        paragraphs: [
          'TradeFlow360 digitizes quality assessment at the moment of loading. Quality parameters—including moisture %, foreign matter %, oil content, and dockage—are recorded and countersigned by the loader or surveyor.',
          'These verified test certificates attach directly to the digital trade contract and travel with the consignment. When the buyer performs destination checks, pre-agreed formula-based deduction grids automatically calculate any legitimate variance.',
        ],
        callout:
          'Quality Rule: Pre-agree on an automated tiered deduction grid within the digital sauda contract so quality cuts never require manual post-delivery arguments.',
      },
      {
        title: 'Transparent Reconciliations and Protected Margins',
        subtitle: 'Eliminating arbitary rejection and protecting trading relationships',
        paragraphs: [
          'By standardizing quality parameters into transparent contract clauses, disputes that once took weeks of hostile phone calls are settled mathematically in seconds.',
          'Both millers and commission agents retain full historical audits of supplier quality grades, creating a higher standard of commercial accountability across India’s agricultural supply chains.',
        ],
      },
    ],
  },

  'audit-brokerage-compliance-post-delivery': {
    slug: 'audit-brokerage-compliance-post-delivery',
    category: 'Tax & Compliance',
    title: 'Why Commodity Trade Doesn’t End at Delivery: Audit and Brokerage Compliance',
    subtitle: 'Navigating post-delivery GST credit notes, Mandi cess documentation, and commission reconciliations.',
    author: 'By CA Ankit Shenoy',
    authorRole: 'Senior Trade Tax & Compliance Consultant',
    date: 'October 18, 2026',
    readTime: '6 min read',
    image: taxComplianceImg,
    keyInsight:
      '“Unlinked debit and credit notes issued for weight differences and Mandi cess variances are the single biggest cause of GST reconciliation notices for commodity trading enterprises.”',
    sections: [
      {
        title: 'The Hidden Administrative Burden After Physical Delivery',
        subtitle: 'Why trade closure requires strict statutory and commercial alignment',
        paragraphs: [
          'Many trading operations assume a trade is completed once the commodity reaches the mill and the lorry driver hands over the gate slip. In reality, the post-trade compliance workflow is where profitability is either secured or lost.',
          'Between state-specific Mandi market committee cess receipts, Form 9C reconciliations, e-Way bill expiry checks, and brokerage invoice matching, accounting desks face a mountain of disconnected paperwork.',
          'When debit notes for shortages are issued months late without referencing the original e-Invoice IRN, tax credits get blocked under GSTR-2B scrutiny.',
        ],
      },
      {
        title: 'Automated Post-Trade Compliance & Credit Note Linkage',
        subtitle: 'Keeping statutory ledgers synchronized with physical trading sauda notes',
        paragraphs: [
          'TradeFlow360 bridges the gap between physical trade execution and formal accounting. When destination deductions or Mandi tax assessments occur, the platform auto-drafts compliant GST debit and credit notes pre-linked to the original trade contract and invoice.',
          'Brokerage notes and Arhat commission splits are calculated automatically based on final delivered net weights, preventing overpayment of brokerage on undelivered quantities.',
        ],
        callout:
          'Compliance Directive: Always anchor GST Credit and Debit notes directly to the original e-Invoice IRN to ensure uninterrupted ITC availability across both counterparties.',
      },
      {
        title: 'Audit-Ready Ledgers with Zero Reconciliation Headaches',
        subtitle: 'Instant statutory dossiers for tax audits and mandi board reviews',
        paragraphs: [
          'With every contract, weighbridge slip, payment voucher, and tax document unified in one immutable dossier, trading houses remain completely audit-ready 365 days a year.',
          'Brokers receive timely commission payouts, buyers preserve clean tax credit balances, and sellers close their books with zero lingering financial liabilities.',
        ],
      },
    ],
  },
};

