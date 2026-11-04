-- ==============================================================================
-- TraderFlow360 - Supabase Database Schema & Sample Data
-- Run this script in your Supabase Dashboard: SQL Editor -> New Query -> Run
-- ==============================================================================

-- 1. Create Blogs Table
CREATE TABLE IF NOT EXISTS public.blogs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    read_time TEXT DEFAULT '6 min read',
    published_date TEXT DEFAULT 'October 18, 2026',
    description TEXT NOT NULL,
    content TEXT,
    image_url TEXT,
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS) for Blogs
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- Allow Public (read-only) Access for Blog Posts
DROP POLICY IF EXISTS "Public can view published blogs" ON public.blogs;
CREATE POLICY "Public can view published blogs"
    ON public.blogs
    FOR SELECT
    USING (true);

-- 2. Insert 5 Sample Dummy Blog Posts
INSERT INTO public.blogs (slug, title, category, read_time, published_date, description, content, image_url, is_featured)
VALUES
(
    'eliminate-transit-shortages-weighbridge-mismatches',
    'How Commodity Traders Eliminate Transit Shortages and Weighbridge Mismatches',
    'Mandi Operations',
    '6 min read',
    'October 18, 2026',
    'Weighbridge variance is among the top causes of uncollected receivables and dispute delays in wholesale grain trade. Here is how modern trading desks connect loading slips to final party ledgers.',
    'Detailed analysis on single-scale vs dual Dharamkanta weight variances, transit shrinkage allowances, and automated debit note linkages directly inside TraderFlow360.',
    '/blog/featured.png',
    true
),
(
    'managing-multi-lot-dispatches-staggered-rtgs-tranches',
    'Managing Multi-Lot Dispatches and Staggered RTGS Tranches in Wholesale Trade',
    'Logistics & Dispatch',
    '6 min read',
    'October 18, 2026',
    'Structuring single large sauda commitments into split truck deliveries without losing margin control.',
    'How to handle staggered lorry receipts (LR), multiple delivery challans across Mandi gates, and staggered RTGS payment reconciliations.',
    '/blog/logistics-dispatch.png',
    false
),
(
    'digital-quality-sampling-moisture-refraction-disputes',
    'Digital Quality Sampling: Resolving Moisture and Refraction Disputes Instantly',
    'Quality Testing',
    '6 min read',
    'October 18, 2026',
    'Moving from subjective handheld inspections to mutually signed digital lab certificates.',
    'Step-by-step framework for resolving moisture percentage variance, foreign matter refraction deductions, and digital sign-off between Mandi buyers and commission agents.',
    '/blog/quality-testing.png',
    false
),
(
    'audit-brokerage-compliance-post-delivery',
    'Why Commodity Trade Doesn’t End at Delivery: Audit and Brokerage Compliance',
    'Tax & Compliance',
    '6 min read',
    'October 18, 2026',
    'Navigating post-delivery GST credit notes, Mandi cess documentation, and commission reconciliations.',
    'Legal and operational considerations for Indian commodity trade: Form R, Mandi fee receipts, e-way bills, and automated GST debit/credit note linkages.',
    '/blog/tax-compliance.png',
    false
),
(
    'hedging-spot-mandi-contracts-counterparty-risk',
    'Hedging Spot Mandi Contracts: Managing Counterparty Defaults in Volatile Pulses Markets',
    'Risk Management',
    '5 min read',
    'October 24, 2026',
    'Protecting margins against sudden price swings between contract booking and physical lorry delivery.',
    'Strategies used by leading Arhatiyas and millers in Raichur and Indore to enforce sauda commitments and manage counterparty aging books.',
    '/blog/featured.png',
    false
)
ON CONFLICT (slug) DO UPDATE 
SET 
    title = EXCLUDED.title,
    category = EXCLUDED.category,
    description = EXCLUDED.description,
    is_featured = EXCLUDED.is_featured;


-- 3. Create Contact Form Submissions Table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    company_name TEXT NOT NULL,
    phone TEXT,
    trading_line TEXT,
    message TEXT,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for Contact Submissions
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone (public/anon) to insert a new demo / contact request
DROP POLICY IF EXISTS "Public can submit contact requests" ON public.contact_submissions;
CREATE POLICY "Public can submit contact requests"
    ON public.contact_submissions
    FOR INSERT
    WITH CHECK (true);

