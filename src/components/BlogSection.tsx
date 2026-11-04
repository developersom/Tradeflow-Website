import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { CtaSection } from './CtaSection';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

// High-resolution authentic assets provided in assets folder
import featuredImg from '../assets/1575653a765f4ad9d05b12e8c41237aaee045bca.png';
import logisticsImg from '../assets/896b2dfe3bffb5c728bcb2def5487a6797470e32.png';
import qualityImg from '../assets/af581e24c45590eaa1d96a91c3e087f73f38f35b.png';
import taxComplianceImg from '../assets/6b5ddea4bec7561119a11735432ce769e7beffbf.png';

export interface BlogPost {
  id: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  image: string;
  isFeatured?: boolean;
}

// 4 Main Blog Posts matching the 4 detail pages
const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'eliminate-transit-shortages-weighbridge-mismatches',
    category: 'Mandi Operations',
    date: 'October 18, 2026',
    readTime: '6 min read',
    title: 'How Commodity Traders Eliminate Transit Shortages and Weighbridge Mismatches',
    description: 'Connecting Dharamkanta weight receipts directly to original sauda contracts to stop margin leakage.',
    image: featuredImg,
    isFeatured: true,
  },
  {
    id: 'post-2',
    slug: 'managing-multi-lot-dispatches-staggered-rtgs-tranches',
    category: 'Logistics & Dispatch',
    date: 'October 18, 2026',
    readTime: '6 min read',
    title: 'Managing Multi-Lot Dispatches and Staggered RTGS Tranches in Wholesale Trade',
    description: 'Structuring single large sauda commitments into split truck deliveries without losing margin control.',
    image: logisticsImg,
  },
  {
    id: 'post-3',
    slug: 'digital-quality-sampling-moisture-refraction-disputes',
    category: 'Quality Testing',
    date: 'October 18, 2026',
    readTime: '6 min read',
    title: 'Digital Quality Sampling: Resolving Moisture and Refraction Disputes Instantly',
    description: 'Moving from subjective handheld inspections to mutually signed digital lab certificates.',
    image: qualityImg,
  },
  {
    id: 'post-4',
    slug: 'audit-brokerage-compliance-post-delivery',
    category: 'Tax & Compliance',
    date: 'October 18, 2026',
    readTime: '6 min read',
    title: 'Why Commodity Trade Doesn’t End at Delivery: Audit and Brokerage Compliance',
    description: 'Navigating post-delivery GST credit notes, Mandi cess documentation, and commission reconciliations.',
    image: taxComplianceImg,
  },
];

interface BlogSectionProps {
  onSelectPost?: (slug: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost }) => {
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_BLOG_POSTS);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return;
    const client = supabase;

    const fetchPosts = async () => {
      try {
        const { data, error } = await client
          .from('blogs')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.warn('Supabase fetch error, fallback to initial posts:', error.message);
          return;
        }

        if (data && data.length > 0) {
          const mapped: BlogPost[] = data.map((item, idx) => ({
            id: item.id || `supa-${idx}`,
            slug: item.slug || 'eliminate-transit-shortages-weighbridge-mismatches',
            category: item.category || 'Mandi Operations',
            date: item.published_date || 'October 18, 2026',
            readTime: item.read_time || '6 min read',
            title: item.title,
            description: item.description,
            image: item.image_url || featuredImg,
            isFeatured: item.is_featured,
          }));
          setPosts(mapped);
        }
      } catch (err) {
        console.warn('Could not query Supabase:', err);
      }
    };

    fetchPosts();
  }, []);

  const featuredPost = posts.find((p) => p.isFeatured) || posts[0];
  const gridPosts = posts.filter((p) => p.id !== featuredPost?.id);

  const handlePostClick = (slug: string) => {
    if (onSelectPost) {
      onSelectPost(slug);
    } else {
      window.location.hash = `blog/${slug}`;
    }
  };
  return (
    <div className="w-full bg-[#F6F8FA]">
      {/* Blog Hero & Content Section */}
      <section className="relative w-full pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="max-w-[1248px] mx-auto px-6 md:px-12 lg:px-0">
          {/* Header Block (Frame 37, Frame 36) */}
          <div className="flex flex-col items-start gap-4 mb-14 md:mb-16">
            {/* Tag / Label */}
            <div className="font-inter font-medium text-[12px] leading-[16px] tracking-[0.8px] text-[#0057AC] uppercase">
              TRADEFLOW360 KNOWLEDGE BASE
            </div>

            {/* Display Headline */}
            <h1 className="font-inter font-bold text-[44px] md:text-[62px] lg:text-[72px] leading-[1.12] tracking-[-1.5px] text-[#000000] max-w-[1010px]">
              Trade Insights & Mandi Operations.
            </h1>

            {/* Subheading */}
            <p className="font-inter font-normal text-[16px] md:text-[18px] leading-[28px] text-[#5F7180] max-w-[712px]">
              Practical analyses on commodity contracts, weighbridge reconciliation, staggered RTGS settlement, and post-trade compliance in Indian trade.
            </p>
          </div>

          {/* Featured Article Card (Frame 1707483367) */}
          {featuredPost && (
            <div className="w-full bg-[#001B3A] rounded-[20px] overflow-hidden shadow-[0px_0px_4px_rgba(0,0,0,0.12)] grid grid-cols-1 lg:grid-cols-12 mb-14 md:mb-16 items-stretch">
              {/* Left Content Column (Frame 1707483365) */}
              <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between gap-8">
                <div className="space-y-6">
                  {/* Meta Row (Frame 1707483364) */}
                  <div className="flex items-center gap-3 font-inter text-[12px] leading-[16px]">
                    <span className="font-medium tracking-[0.8px] text-[#1DCA76] uppercase">
                      FEATURED ARTICLE
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#5F7180]" />
                    <span className="text-[#8A9AA6]">{featuredPost.readTime}</span>
                    <span className="w-1 h-1 rounded-full bg-[#5F7180]" />
                    <span className="text-[#8A9AA6]">{featuredPost.date}</span>
                  </div>

                  {/* Article Headline */}
                  <h2
                    onClick={() => handlePostClick(featuredPost.slug)}
                    className="font-inter font-bold text-[28px] md:text-[36px] lg:text-[40px] leading-[1.2] tracking-[-0.7px] text-white hover:text-[#1DCA76] transition-colors cursor-pointer"
                  >
                    {featuredPost.title}
                  </h2>

                  {/* Article Excerpt */}
                  <p className="font-inter font-normal text-[15px] md:text-[16px] leading-[24px] text-white/85 max-w-[573px]">
                    {featuredPost.description}
                  </p>
                </div>

                {/* Read Full Article Button (Frame 32) */}
                <div>
                  <button
                    onClick={() => handlePostClick(featuredPost.slug)}
                    className="inline-flex items-center justify-center gap-2 px-6 h-[52px] rounded-[8px] bg-[#1DCA76] hover:bg-[#16B769] text-[#172B3A] font-inter font-semibold text-[16px] leading-[24px] transition-all shadow-md active:scale-[0.98] cursor-pointer"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight size={18} strokeWidth={2.2} className="text-[#172B3A]" />
                  </button>
                </div>
              </div>

              {/* Right Image Column (Frame 1707483366) */}
              <div
                onClick={() => handlePostClick(featuredPost.slug)}
                className="lg:col-span-5 min-h-[300px] lg:min-h-full relative overflow-hidden bg-[#002247] cursor-pointer group"
              >
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          )}

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {gridPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => handlePostClick(post.slug)}
                className="bg-white border border-[#DCE3E8] rounded-[16px] overflow-hidden shadow-[0px_0px_4px_rgba(0,0,0,0.08)] flex flex-col transition-all hover:shadow-md hover:-translate-y-1 duration-200 cursor-pointer group"
              >
                {/* Image Container with Badge */}
                <div className="relative h-[240px] w-full overflow-hidden bg-[#E2E8F0]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent pointer-events-none" />

                  {/* Category Pill Tag (Frame 1707483375) */}
                  <div className="absolute top-4 left-4 bg-[#001B3A] rounded-[4px] px-3 py-1.5 flex items-center gap-1.5 shadow-[0px_0px_4px_rgba(0,0,0,0.04)]">
                    <Tag size={12} className="text-[#1DCA76]" strokeWidth={2.5} />
                    <span className="font-inter font-medium text-[12px] leading-[16px] tracking-[0.8px] text-white">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                  <div className="space-y-3">
                    {/* Date & Read Time Row */}
                    <div className="flex items-center justify-between font-inter text-[14px]">
                      <div className="flex items-center gap-1.5 text-[#5F7180]">
                        <Calendar size={15} className="text-[#0057AC]" strokeWidth={2} />
                        <span>{post.date}</span>
                      </div>
                      <span className="text-[12px] text-[#8A9AA6]">
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-inter font-semibold text-[18px] leading-[23px] text-[#001B3A] group-hover:text-[#0057AC] transition-colors line-clamp-3">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="font-inter font-normal text-[14px] leading-[21px] text-[#5F7180] line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Move Trade Forward? CTA Section */}
      <CtaSection />
    </div>
  );
};

