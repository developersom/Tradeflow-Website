import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { BLOG_DETAILS, type BlogDetail } from '../data/blogDetailsData';
import { CtaSection } from './CtaSection';

interface BlogDetailSectionProps {
  slug: string;
  onBackToBlogs: () => void;
}

export const BlogDetailSection: React.FC<BlogDetailSectionProps> = ({
  slug,
  onBackToBlogs,
}) => {
  // Find article by slug, or fallback to first article
  const article: BlogDetail =
    BLOG_DETAILS[slug] ||
    BLOG_DETAILS['eliminate-transit-shortages-weighbridge-mismatches'];

  return (
    <div className="w-full bg-[#F6F8FA]">
      {/* Main Article Container (Frame 1707483386) */}
      <article className="max-w-[872px] mx-auto px-6 md:px-8 lg:px-0 pt-10 md:pt-16 pb-20 md:pb-28">
        {/* Navigation Breadcrumb / Back Button */}
        <div className="mb-8">
          <button
            onClick={onBackToBlogs}
            className="inline-flex items-center gap-2 font-inter text-[14px] font-medium text-[#5F7180] hover:text-[#0057AC] transition-colors cursor-pointer group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to All Articles</span>
          </button>
        </div>

        {/* Article Header (Frame 1707483379) */}
        <header className="flex flex-col items-start gap-8 w-full">
          {/* Top Titles Block (Frame 37, Frame 36) */}
          <div className="flex flex-col items-start gap-4 w-full">
            {/* Category Tag */}
            <div className="font-inter font-medium text-[12px] leading-[16px] tracking-[0.8px] text-[#0057AC] uppercase">
              {article.category}
            </div>

            {/* Display Headline (H1) */}
            <h1 className="font-inter font-bold text-[36px] sm:text-[44px] md:text-[52px] leading-[1.15] tracking-[-1px] text-[#000000]">
              {article.title}
            </h1>

            {/* Subtitle / Deck (TF/Body L) */}
            <p className="font-inter font-normal text-[16px] md:text-[18px] leading-[28px] text-[#5F7180] max-w-[712px]">
              {article.subtitle}
            </p>
          </div>

          {/* Author & Meta Row (Frame 1707483364) */}
          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 font-inter text-[14px] leading-[21px] text-[#5F7180] w-full pt-2">
            <span className="font-medium text-[#172B3A]">{article.author}</span>
            <span className="w-1 h-1 rounded-full bg-[#DCE3E8] shrink-0" />
            <span>{article.authorRole}</span>
            <span className="w-1 h-1 rounded-full bg-[#DCE3E8] shrink-0" />
            <span>{article.date}</span>
            <span className="w-1 h-1 rounded-full bg-[#DCE3E8] shrink-0" />
            <span>{article.readTime}</span>
          </div>

          {/* Divider Line (Line 123) */}
          <div className="w-full h-px bg-[#DCE3E8]" />

          {/* Featured Hero Image (Frame 1707483378) */}
          <div className="w-full h-[280px] sm:h-[380px] md:h-[478px] rounded-[20px] overflow-hidden shadow-[0px_0px_4px_rgba(0,0,0,0.12)] bg-[#E2E8F0]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </header>

        {/* Article Body Content */}
        <div className="mt-12 flex flex-col items-start gap-12 w-full">
          {/* Key Operational Insight Callout (Frame 1707483381) */}
          <div className="w-full bg-white border-l-4 border-[#1DCA76] p-8 md:p-10 rounded-r-[8px] shadow-[0px_2px_8px_rgba(0,0,0,0.04)]">
            <div className="font-inter font-medium text-[12px] leading-[16px] tracking-[0.8px] text-[#0057AC] uppercase mb-3">
              KEY OPERATIONAL INSIGHT
            </div>
            <blockquote className="font-inter font-semibold text-[20px] md:text-[24px] leading-[1.3] text-[#000000]">
              {article.keyInsight}
            </blockquote>
          </div>

          {/* Content Sections */}
          {article.sections.map((section, idx) => (
            <section
              key={idx}
              className="flex flex-col items-start gap-4 w-full"
            >
              {/* Section Header */}
              <div className="space-y-1.5 mb-2">
                <h2 className="font-inter font-semibold text-[24px] md:text-[28px] leading-[36px] text-[#000000]">
                  {section.title}
                </h2>
                <h3 className="font-inter font-semibold text-[15px] md:text-[16px] leading-[24px] text-[#0057AC]">
                  {section.subtitle}
                </h3>
              </div>

              {/* Section Paragraphs */}
              <div className="space-y-4 font-inter font-normal text-[16px] md:text-[18px] leading-[28px] text-[#5F7180]">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {/* Optional Callout / Key Rule Box (Frame 1707483387) */}
              {section.callout && (
                <div className="w-full mt-4 bg-[#001B3A] rounded-[8px] p-4 sm:p-5 flex items-start gap-3 text-[#DCE3E8]">
                  <span className="w-2 h-2 rounded-full bg-[#1DCA76] shrink-0 mt-2" />
                  <p className="font-inter font-normal text-[14px] leading-[21px]">
                    {section.callout}
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Bottom Back Button */}
        <div className="mt-16 pt-8 border-t border-[#DCE3E8] flex items-center justify-between">
          <button
            onClick={onBackToBlogs}
            className="inline-flex items-center gap-2 font-inter text-[15px] font-semibold text-[#001B3A] hover:text-[#0057AC] transition-colors cursor-pointer group"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to Knowledge Base</span>
          </button>
        </div>
      </article>

      {/* Ready to Move Trade Forward? CTA Section (Frame 1707483348) */}
      <CtaSection />
    </div>
  );
};
