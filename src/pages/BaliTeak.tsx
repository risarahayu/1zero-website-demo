"use client";

import React, { useState, useEffect } from "react";
import '../css/project.css';
import '../css/bali_teak.css';
import '../css/portfolio.css';
import useLazyImgSkeleton from '../components/useLazyImgSkeleton';

export default function BaliTeakPage() {
    useLazyImgSkeleton();
    const [activeTab, setActiveTab] = useState("about");
    const [openAccordion, setOpenAccordion] = useState<string | null>("pageStructure");

    const toggleAccordion = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    useEffect(() => {
        const sitemapImage = document.getElementById("sitemapImage") as HTMLImageElement | null;
        const sitemapLoader = document.getElementById("sitemapLoader");

        if (sitemapImage && sitemapLoader) {
            function hideSitemapLoader() {
                sitemapImage!.classList.add("loaded");
                sitemapLoader!.classList.add("hidden");
            }

            sitemapImage.addEventListener("load", hideSitemapLoader);

            sitemapImage.addEventListener("error", () => {
                sitemapLoader!.innerHTML = `
                    <p class="small text-danger m-0">
                        Failed to load sitemap image.
                    </p>
                `;
            });

            // Handle cached images
            if (sitemapImage.complete && sitemapImage.naturalWidth > 0) {
                hideSitemapLoader();
            }

            return () => {
                sitemapImage.removeEventListener("load", hideSitemapLoader);
            };
        }
    }, []);

    return (
        <>
            {/* Hero */}
            <header className="project-hero">
                <div className="project-hero__inner">
                    <div className="project-hero__banner"></div>
                    <div className="project-hero__panel">
                        <div className="project-hero__intro">
                            <h1 className="project-hero__title">Bali Teak - Redesign Website</h1>
                            <div className="project-hero__highlights">
                                <div className="project-hero__highlight">
                                    <img alt="" src="Portfolios/bali_teak/streamline-color--graph-arrow-increase 1.svg" width="24" />
                                    <p>Increased User Engagement</p>
                                </div>
                                <div className="project-hero__highlight">
                                    <img alt="" src="Portfolios/bali_teak/glyphs--mobile 1.svg" width="24" />
                                    <p>Better Mobile Experience</p>
                                </div>
                                <div className="project-hero__highlight">
                                    <img alt="" src="Portfolios/bali_teak/guidance--shop.svg" width="24" />
                                    <p>Built E-commerce foundation</p>
                                </div>
                            </div>
                        </div>
                        <div className="project-hero__meta">
                            <div className="project-hero__meta-item">
                                <p className="project-hero__meta-label">Role:</p>
                                <p className="project-hero__meta-value">UI/UX Designer &amp; Web Developer[cite: 1]</p>
                            </div>
                            <div className="project-hero__meta-item">
                                <p className="project-hero__meta-label">Tools:</p>
                                <p className="project-hero__meta-value">Figma, WordPress, Elementor[cite: 1]</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <section className="project-section info-block" id="project-scope">
                    <h2 className="capsule font-semibold capsule-border-project project-section__title m-0">Project Scope</h2>
                    <div className="info-block__row mt-4">
                        <div className="info-block__prose">
                            <p>
                                Sometimes customers don&rsquo;t walk away because the product isn&rsquo;t good. They leave because the digital experience is slow, confusing, or uninspiring.[cite: 1]
                            </p>
                            <p>
                                When a website feels heavy or difficult to navigate, even the most beautifully crafted products can lose their appeal. Attention fades. Interest drops. And the purchase never happens.[cite: 1]
                            </p>
                            <p>
                                We redesigned the experience to be faster, cleaner, and more intuitive&mdash;ensuring that nothing stands between great craftsmanship and the customer&rsquo;s decision to buy.[cite: 1]
                            </p>
                        </div>
                        <div className="info-block__summary">
                            <div className="info-block__group">
                                <p className="info-block__label">Duration</p>
                                <p className="info-block__value">2 Months[cite: 1]</p>
                            </div>
                            <div className="info-block__group">
                                <p className="info-block__label">Timeline:</p>
                                <div className="info-block__timeline">
                                    <div className="info-block__phase">
                                        <p className="info-block__phase-label m-0"><strong>Phase 1:</strong></p>
                                        <p className="m-0">Discovery &amp; Audit[cite: 1]</p>
                                    </div>
                                    <div className="info-block__phase">
                                        <p className="info-block__phase-label m-0"><strong>Phase 2:</strong></p>
                                        <p className="m-0">Strategy &amp; UX Planning[cite: 1]</p>
                                    </div>
                                    <div className="info-block__phase">
                                        <p className="info-block__phase-label m-0"><strong>Phase 3:</strong></p>
                                        <p className="m-0">UI Design[cite: 1]</p>
                                    </div>
                                    <div className="info-block__phase">
                                        <p className="info-block__phase-label m-0"><strong>Phase 4:</strong></p>
                                        <p className="m-0">Development (WordPress Implementation)[cite: 1]</p>
                                    </div>
                                    <div className="info-block__phase">
                                        <p className="info-block__phase-label m-0"><strong>Phase 5:</strong></p>
                                        <p className="m-0">Testing &amp; Launch[cite: 1]</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="project-section" id="design-comparison">
                    <div className="rounded-2xl p-6 md:p-12">
                        <h2 className="capsule font-semibold capsule-border-project project-section__title">Design Comparison</h2>
                        <div className="mt-4"></div>
                        <div className="grid grid-cols-12 gap-6">
                            {/* Old Design */}
                            <div className="col-span-12 md:col-span-4">
                                <h3 className="text-base font-semibold mb-2">Old Design</h3>
                                <img loading="lazy" width="463" height="613" alt="Bali Teak Old Design"
                                    className="w-full zoom-image lazy-img h-auto object-contain object-top" src="Portfolios/bali_teak/old_design.png" />
                            </div>
                            {/* New Design */}
                            <div className="col-span-12 md:col-span-8">
                                <h3 className="text-base font-semibold mb-2">New Design</h3>
                                <img loading="lazy" width="720" height="757" alt="Bali Teak New Design"
                                    className="w-full zoom-image lazy-img h-auto object-contain object-top" src="Portfolios/bali_teak/new_design.png" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="project-section" id="context-background">
                    <div className="flex flex-col">
                        <h2 className="capsule font-semibold capsule-border-project project-section__title">Context &amp; Background</h2>
                        <div className="mt-4"></div>
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-4 flex flex-col">
                                <div className="rounded-2xl p-4">
                                    <img loading="lazy" width="193" height="81" alt="Bali Teak Logo" className="w-1/4 lazy-img object-contain"
                                        src="Portfolios/bali_teak/BaliTeakLogo.png" />
                                    <p className="text-base mt-4">
                                        The website represents Bali Teak, a premium furniture brand offering solid teak wood furniture. The primary audience includes homeowners, interior design enthusiasts, and customers in Halifax who are looking for high-quality, ethically sourced furniture with a strong cultural story.[cite: 1]
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-8 flex flex-col gap-4">
                                <div className="grid grid-cols-12 gap-6">
                                    <div className="col-span-12 md:col-span-6">
                                        <img loading="lazy" width="463" height="613" alt="Bali Teak Old Design"
                                            className="w-full h-full mt-4 zoom-image lazy-img object-contain" src="Portfolios/bali_teak/old_design.png" />
                                    </div>
                                    <div className="col-span-12 md:col-span-6 mt-4 md:mt-0">
                                        <div className="flex flex-col">
                                            <p className="text-base font-semibold">The original website was intended to:</p>
                                            <ul className="text-base list-disc pl-5 mt-2">
                                                <li><strong>Introduce</strong> Bali Teak as a furniture brand[cite: 1]</li>
                                                <li><strong>Showcase</strong> its teak furniture collections[cite: 1]</li>
                                                <li>Encourage users to <strong>explore products</strong> and get in touch[cite: 1]</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="project-section bg-white" id="what-changed">
                    <div className="rounded-2xl p-6 md:p-12">
                        <h2 className="capsule font-semibold capsule-border-project project-section__title">What Changed &amp; Why</h2>
                        <div className="mt-4"></div>
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-6">
                                <img loading="lazy" width="648" height="914" alt="What we change image 1"
                                    className="w-full mt-4 zoom-image lazy-img object-contain object-top" src="Portfolios/bali_teak/What_we_change_image_1.svg" />
                            </div>
                            <div className="col-span-12 md:col-span-6">
                                <img loading="lazy" width="636" height="520" alt="What we change image 2"
                                    className="w-full mt-4 zoom-image lazy-img object-contain object-top" src="Portfolios/bali_teak/What_we_change_image_2.svg" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="project-section" id="mobile-responsive">
                    <h2 className="capsule font-semibold capsule-border-project project-section__title">Mobile Responsive</h2>
                    <div className="rounded-2xl mt-4">
                        <img loading="lazy" width="1440" height="880" alt="Bali Teak Responsive"
                            className="w-full zoom-image lazy-img rounded-2xl object-contain object-top" src="Portfolios/bali_teak/BaliTeakResponsive.png" />
                    </div>
                </section>

                <section className="project-section" id="another-pages">
                    <h2 className="capsule font-semibold capsule-border-project project-section__title">Another Pages</h2>
                    <div className="rounded-2xl mt-4">
                        {/* Tabs Navigation */}
                        <ul className="flex flex-wrap gap-2 mb-4" role="tablist">
                            <li role="presentation">
                                <button
                                    className={`px-4 py-2 rounded-full font-medium ds-badge transition-colors ${activeTab === 'about' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                                    onClick={() => setActiveTab('about')}
                                    type="button"
                                    role="tab"
                                >
                                    About
                                </button>
                            </li>
                            <li role="presentation">
                                <button
                                    className={`px-4 py-2 rounded-full font-medium ds-badge transition-colors ${activeTab === 'home-owner' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                                    onClick={() => setActiveTab('home-owner')}
                                    type="button"
                                    role="tab"
                                >
                                    Home Owner
                                </button>
                            </li>
                        </ul>

                        {/* Tab Content */}
                        <div className="mt-4">
                            {/* About Tab */}
                            {activeTab === 'about' && (
                                <div role="tabpanel">
                                    <div className="scroll-frame scroll-frame--tall">
                                        <div className="scroll-frame__body">
                                            <img loading="lazy" className="zoom-image lazy-img" alt="Bali Teak About Page" src="Portfolios/bali_teak/AboutPage.png" />
                                        </div>
                                        <div className="scroll-frame__hint">
                                            <span><i className="bi bi-arrow-down"></i> Scroll to see full page</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Home Owner Tab */}
                            {activeTab === 'home-owner' && (
                                <div role="tabpanel">
                                    <div className="scroll-frame scroll-frame--tall">
                                        <div className="scroll-frame__body">
                                            <img loading="lazy" className="zoom-image lazy-img" alt="Bali Teak Home Owner Page" src="Portfolios/bali_teak/Home Owener Page.png" />
                                        </div>
                                        <div className="scroll-frame__hint">
                                            <span><i className="bi bi-arrow-down"></i> Scroll to see full page</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="project-section" id="ux-audit">
                    <div className="rounded-2xl p-6 md:p-12">
                        <h2 className="capsule font-semibold capsule-border-project project-section__title">Quick UX Audit</h2>
                        <p className="text-base mt-4">Why a Redesign Was Needed?</p>
                        <div className="ux-audit-list mt-6">
                            {/* Visual Design */}
                            <div className="ux-audit-item">
                                <span className="ux-audit-item__area">Visual Design</span>
                                <div className="ux-audit-item__before">
                                    <img loading="lazy" alt="" className="ux-audit-item__icon lazy-img" src="cross-red.svg" />
                                    <p><strong>Outdated visual</strong> style that did not reflect a premium brand.[cite: 1]</p>
                                </div>
                                <div className="ux-audit-item__after">
                                    <img loading="lazy" alt="" className="ux-audit-item__icon lazy-img" src="tick-green.svg" />
                                    <div>
                                        <p><strong>Modern, premium visual language</strong></p>
                                        <p>Clean layout, consistent typography, refined spacing, and a restrained color palette to reflect a high-end brand.[cite: 1]</p>
                                    </div>
                                </div>
                            </div>

                            {/* Information Hierarchy */}
                            <div className="ux-audit-item">
                                <span className="ux-audit-item__area">Information Hierarchy</span>
                                <div className="ux-audit-item__before">
                                    <img loading="lazy" alt="" className="ux-audit-item__icon lazy-img" src="cross-red.svg" />
                                    <p><strong>Products were not clearly</strong> showcased, reducing product visibility.[cite: 1]</p>
                                </div>
                                <div className="ux-audit-item__after">
                                    <img loading="lazy" alt="" className="ux-audit-item__icon lazy-img" src="tick-green.svg" />
                                    <div>
                                        <p><strong>Product-first presentation</strong></p>
                                        <p>Prominently showcase products using high-quality imagery and clear categorization to improve visibility and clarity.[cite: 1]</p>
                                    </div>
                                </div>
                            </div>

                            {/* Product Presentation */}
                            <div className="ux-audit-item">
                                <span className="ux-audit-item__area">Product Presentation</span>
                                <div className="ux-audit-item__before">
                                    <img loading="lazy" alt="" className="ux-audit-item__icon lazy-img" src="cross-red.svg" />
                                    <p><strong>Poor information</strong> hierarchy, making the content difficult to scan.[cite: 1]</p>
                                </div>
                                <div className="ux-audit-item__after">
                                    <img loading="lazy" alt="" className="ux-audit-item__icon lazy-img" src="tick-green.svg" />
                                    <div>
                                        <p><strong>Clear information hierarchy</strong></p>
                                        <p>Structured content with strong headings, concise copy, and intentional spacing for easier scanning.[cite: 1]</p>
                                    </div>
                                </div>
                            </div>

                            {/* Responsiveness */}
                            <div className="ux-audit-item">
                                <span className="ux-audit-item__area">Responsiveness</span>
                                <div className="ux-audit-item__before">
                                    <img loading="lazy" alt="" className="ux-audit-item__icon lazy-img" src="cross-red.svg" />
                                    <p>Layout was <strong>not optimized for mobile devices.</strong>[cite: 1]</p>
                                </div>
                                <div className="ux-audit-item__after">
                                    <img loading="lazy" alt="" className="ux-audit-item__icon lazy-img" src="tick-green.svg" />
                                    <div>
                                        <p><strong>Mobile-first responsive layout</strong></p>
                                        <p>Optimized layouts, spacing, and typography to ensure a seamless experience across all devices.[cite: 1]</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="project-section" id="key-screen">
                    <h2 className="capsule font-semibold capsule-border-project project-section__title">Key Screen &amp; Information Architecture</h2>
                    <p className="mt-4">
                        There is many feature and page that we plan to build, but we need to priortize what feature and page that we need to build first according to the client needs.[cite: 1]
                    </p>
                    <div className="rounded-2xl mt-4 sitemap-image-container relative" id="sitemapContainer">
                        {/* Loading */}
                        <div id="sitemapLoader" className="flex flex-col items-center justify-center gap-2">
                            <div className="animate-spin inline-block w-8 h-8 border-4 border-current border-t-transparent text-gray-400 rounded-full" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <p className="text-sm m-0 text-gray-500">Loading sitemap...</p>
                        </div>
                        {/* Image */}
                        <img loading="lazy" width="32768" height="11912" id="sitemapImage"
                            src="Portfolios/bali_teak/Baliteak.caSitemap.png" alt="Bali Teak Sitemap"
                            className="w-full zoom-image sitemap-image lazy-img" />
                    </div>
                </section>

                <section className="project-section" id="design-system">
                    <div className="rounded-2xl p-6 md:p-12">
                        <h2 className="capsule font-semibold capsule-border-project project-section__title">Simple Design System &amp; Variant Prototyping</h2>
                        <div className="mt-4"></div>
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 md:col-span-6 lg:col-span-4 content-center">
                                <p className="mb-0 font-semibold">Button Component Variants</p>
                                <img loading="lazy" width="627" height="339" alt=""
                                    className="w-full mt-2 rounded-2xl zoom-image lazy-img object-contain" src="Portfolios/bali_teak/Button Componen.png" />
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <p className="mt-4 mb-0 font-semibold">Color Palette</p>
                                <img loading="lazy" width="410" height="274" alt=""
                                    className="w-full mt-2 rounded-2xl zoom-image lazy-img object-contain" src="Portfolios/bali_teak/color.png" />
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                <p className="mt-4 mb-0 font-semibold">Icons</p>
                                <img loading="lazy" width="523" height="315" alt=""
                                    className="w-full mt-2 rounded-2xl zoom-image lazy-img object-contain" src="Portfolios/bali_teak/icon.png" />
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-6">
                                <p className="mt-4 mb-0 font-semibold">Gallery &amp; Slider</p>
                                <img loading="lazy" width="122" height="19" alt=""
                                    className="w-full mt-4 rounded-2xl zoom-image lazy-img object-contain" src="Portfolios/bali_teak/card slider.png" />
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-6">
                                <p className="mt-4 mb-0 font-semibold">Responsive Navigation</p>
                                <img loading="lazy" width="1197" height="622" alt="" className="w-full mt-4 rounded-2xl zoom-image object-contain"
                                    src="Portfolios/bali_teak/Responsive-navigation.png" />
                            </div>
                            <div className="col-span-12 md:col-span-8 lg:col-span-6">
                                <p className="mt-4 mb-0 font-semibold">Typography</p>
                                <div className="grid grid-cols-12 gap-2">
                                    <div className="col-span-12 md:col-span-6 mt-4">
                                        <img alt="" className="w-full rounded-2xl zoom-image object-contain" src="Portfolios/bali_teak/Desktop-typography.png" />
                                    </div>
                                    <div className="col-span-12 md:col-span-6 mt-4">
                                        <img alt="" className="w-full rounded-2xl zoom-image object-contain" src="Portfolios/bali_teak/Mobile-typography.png" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-4 lg:col-span-4">
                                <p className="mt-4 text-base font-bold">Figma Techniques</p>
                                <ul className="check-list mt-2">
                                    <li className="flex items-center gap-2"><img src="tick-green.svg" alt="" className="check-list__icon" />Component Property</li>
                                    <li className="flex items-center gap-2"><img src="tick-green.svg" alt="" className="check-list__icon" />Auto Layout</li>
                                    <li className="flex items-center gap-2"><img src="tick-green.svg" alt="" className="check-list__icon" />Component Variation</li>
                                    <li className="flex items-center gap-2"><img src="tick-green.svg" alt="" className="check-list__icon" />Nested Component</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="project-section" id="seo-technical-optimisation">
                    <div className="rounded-2xl p-6 md:p-12">
                        <h2 className="capsule font-semibold capsule-border-project project-section__title mb-4">SEO &amp; Technical Optimisation</h2>
                        <p className="text-base mb-6">
                            Alongside the visual redesign, I reviewed the website's structure and technical SEO foundation to identify areas for refinement. The review covered heading hierarchy, responsive behaviour, metadata, image formats, sitemap configuration, and crawlability.[cite: 1]
                        </p>

                        {/* Accordion List */}
                        <div className="space-y-3 ds-variables-accordion text-gray-700">
                            {/* 01. Heading Structure */}
                            <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                                <h3>
                                    <button 
                                        className="w-full text-left px-4 py-3 font-medium bg-gray-50 hover:bg-gray-100 transition-colors"
                                        onClick={() => toggleAccordion('pageStructure')}
                                        type="button"
                                    >
                                        Heading &amp; Page Structure
                                    </button>
                                </h3>
                                {openAccordion === 'pageStructure' && (
                                    <div className="p-4 md:p-6 border-t border-gray-200">
                                        <p className="text-base mb-4">
                                            <strong>Finding:</strong> The overall content structure was in place, but heading hierarchy was not fully consistent across pages. Some pages did not have a clearly defined primary heading, including instances where an <code>&lt;h1&gt;</code> was missing.[cite: 1]
                                        </p>
                                        <p className="text-base mb-0">
                                            <strong>Optimisation:</strong> I refined the heading structure to create a clearer relationship between page titles, section headings, and supporting content. This improves content clarity, accessibility, and semantic understanding for search engines.[cite: 1]
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* 02. Meta Tags */}
                            <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white mt-2">
                                <h3>
                                    <button 
                                        className="w-full text-left px-4 py-3 font-medium bg-gray-50 hover:bg-gray-100 transition-colors"
                                        onClick={() => toggleAccordion('metaTags')}
                                        type="button"
                                    >
                                        Meta Tags &amp; On-Page SEO
                                    </button>
                                </h3>
                                {openAccordion === 'metaTags' && (
                                    <div className="p-4 md:p-6 border-t border-gray-200">
                                        <p className="text-base mb-4">
                                            <strong>Finding:</strong> Core metadata was already present, while several optional SEO elements were missing and could be further optimised.[cite: 1]
                                        </p>
                                        <ul className="text-base mb-4 list-disc pl-5">
                                            <li><strong>Title:</strong> Present[cite: 1]</li>
                                            <li><strong>Canonical:</strong> Present[cite: 1]</li>
                                            <li><strong>Viewport:</strong> Configured[cite: 1]</li>
                                            <li><strong>Meta Description:</strong> Opportunity for optimisation[cite: 1]</li>
                                            <li><strong>Robots Meta:</strong> Not detected[cite: 1]</li>
                                            <li><strong>Open Graph:</strong> Opportunity for optimisation[cite: 1]</li>
                                        </ul>
                                        <p className="text-base mb-0">
                                            <strong>Optimisation:</strong> The existing metadata was reviewed and opportunities were identified to improve search-result descriptions, crawler directives, and social sharing previews.[cite: 1]
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* 03. Responsive */}
                            <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white mt-2">
                                <h3>
                                    <button 
                                        className="w-full text-left px-4 py-3 font-medium bg-gray-50 hover:bg-gray-100 transition-colors"
                                        onClick={() => toggleAccordion('mobileExperience')}
                                        type="button"
                                    >
                                        Responsive Experience
                                    </button>
                                </h3>
                                {openAccordion === 'mobileExperience' && (
                                    <div className="p-4 md:p-6 border-t border-gray-200">
                                        <p className="text-base mb-4">
                                            <strong>Finding:</strong> The website was already reasonably responsive across different screen sizes, with some areas requiring further refinement for consistency.[cite: 1]
                                        </p>
                                        <p className="text-base mb-0">
                                            <strong>Optimisation:</strong> I refined spacing, typography, component behaviour, and content positioning across desktop, tablet, and mobile breakpoints to provide a more consistent experience.[cite: 1]
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* 04. XML Sitemap */}
                            <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white mt-2">
                                <h3>
                                    <button 
                                        className="w-full text-left px-4 py-3 font-medium bg-gray-50 hover:bg-gray-100 transition-colors"
                                        onClick={() => toggleAccordion('xmlSitemap')}
                                        type="button"
                                    >
                                        XML Sitemap Review
                                    </button>
                                </h3>
                                {openAccordion === 'xmlSitemap' && (
                                    <div className="p-4 md:p-6 border-t border-gray-200">
                                        <p className="text-base mb-4">
                                            <strong>Finding:</strong> An XML sitemap was already available and correctly exposed the website's relevant content for search engine discovery.[cite: 1]
                                        </p>
                                        <p className="text-base mb-6">
                                            I reviewed the sitemap structure and content types to verify that the configuration was aligned with the website's current pages and content.[cite: 1]
                                        </p>
                                        <div className="seo-screenshot-placeholder rounded-2xl p-6 text-center mb-4 bg-gray-50">
                                            <span className="block text-sm uppercase mb-2">Screenshot</span>
                                            <strong className="block mb-2">XML Sitemap</strong>
                                            <span className="text-sm block">
                                                <img loading="lazy" width="1053" height="641" src="Portfolios/bali_teak/XML Sitemap.png" alt="" className="media-block__image rounded-2xl p-4 zoom-image lazy-img mx-auto" />
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* 05. Crawlability */}
                            <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white mt-2">
                                <h3>
                                    <button 
                                        className="w-full text-left px-4 py-3 font-medium bg-gray-50 hover:bg-gray-100 transition-colors"
                                        onClick={() => toggleAccordion('crawlability')}
                                        type="button"
                                    >
                                        Crawlability &amp; robots.txt
                                    </button>
                                </h3>
                                {openAccordion === 'crawlability' && (
                                    <div className="p-4 md:p-6 border-t border-gray-200">
                                        <p className="text-base mb-4">
                                            <strong>Finding:</strong> Public pages were accessible to search engine crawlers, and no major crawlability restriction was identified.[cite: 1]
                                        </p>
                                        <p className="text-base mb-6">
                                            The <code>robots.txt</code> configuration was reviewed to verify that crawler access was appropriately configured for the website.[cite: 1]
                                        </p>
                                        <div className="seo-screenshot-placeholder rounded-2xl p-6 text-center mb-4 bg-gray-50">
                                            <span className="block text-sm uppercase mb-2">Screenshot</span>
                                            <strong className="block mb-2">robots.txt</strong>
                                            <span className="text-sm block">
                                                <img loading="lazy" width="358" height="178" src="Portfolios/bali_teak/Robots.png" alt="" className="media-block__image rounded-2xl p-4 zoom-image lazy-img mx-auto" />
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* 06. Image Optimisation */}
                            <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white mt-2">
                                <h3>
                                    <button 
                                        className="w-full text-left px-4 py-3 font-medium bg-gray-50 hover:bg-gray-100 transition-colors"
                                        onClick={() => toggleAccordion('imageOptimisation')}
                                        type="button"
                                    >
                                        Image Optimisation
                                    </button>
                                </h3>
                                {openAccordion === 'imageOptimisation' && (
                                    <div className="p-4 md:p-6 border-t border-gray-200">
                                        <p className="text-base mb-4">
                                            <strong>Finding:</strong> The website used a mix of image formats, with not all assets delivered in modern formats such as WebP.[cite: 1]
                                        </p>
                                        <p className="text-base mb-0">
                                            <strong>Optimisation:</strong> Image assets were reviewed for opportunities to reduce file size through more efficient formats, appropriate dimensions, and compression while maintaining visual quality.[cite: 1]
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* 07. Technical Foundation */}
                            <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white mt-2">
                                <h3>
                                    <button 
                                        className="w-full text-left px-4 py-3 font-medium bg-gray-50 hover:bg-gray-100 transition-colors"
                                        onClick={() => toggleAccordion('technicalFoundation')}
                                        type="button"
                                    >
                                        Technical SEO Foundation
                                    </button>
                                </h3>
                                {openAccordion === 'technicalFoundation' && (
                                    <div className="p-4 md:p-6 border-t border-gray-200">
                                        <p className="text-base mb-0">
                                            SEO considerations were incorporated into the redesign and implementation process alongside the visual and responsive improvements. The review helped ensure that page structure, metadata, crawlability, sitemap configuration, and image optimisation were considered as part of the overall website foundation.[cite: 1]
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="project-section" id="implementation-challenges">
                    <h2 className="capsule font-semibold capsule-border-project project-section__title">Implementation Challenges</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {/* Challenge 01 */}
                        <div className="card-grid__card card-grid__card--background p-6 rounded-2xl bg-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="challenge-icon color-baliteak mb-4 w-8 h-8 text-blue-600">
                                <path d="M0 0h20v20H0z" fill="none" />
                                <path fill="currentColor" d="M4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4zM3 6.5A1.5 1.5 0 0 1 4.5 5h11A1.5 1.5 0 0 1 17 6.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 13.5zM4.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm.5 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z" />
                            </svg>
                            <h3 className="card-grid__title color-baliteak font-bold text-lg mb-2">Bridging UI Design with Elementor</h3>
                            <p className="card-grid__text text-gray-700">
                                The main challenge was bridging the gap between the UI design and the limitations of Elementor during implementation. <strong>Some layouts initially struggled with responsiveness</strong>, particularly when relying solely on Elementor's container system. I helped restructure these sections using Flexbox and CSS Grid to achieve more flexible responsive behaviour.[cite: 1]
                            </p>
                        </div>

                        {/* Challenge 02 */}
                        <div className="card-grid__card card-grid__card--background p-6 rounded-2xl bg-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="challenge-icon color-baliteak mb-4 w-8 h-8 text-blue-600">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.235 2.374c-.368.152-.697.482-1.356 1.14c-.659.66-.989.989-1.14 1.356a2 2 0 0 0 0 1.531c.151.368.48.697 1.14 1.356c.658.659.988.989 1.356 1.14a2 2 0 0 0 1.53 0c.368-.151.697-.48 1.356-1.14s.988-.988 1.14-1.356a2 2 0 0 0 0-1.53c-.152-.368-.48-.697-1.14-1.356s-.988-.989-1.356-1.141a2 2 0 0 0-1.53 0M4.87 8.738c-.367.152-.697.481-1.355 1.14c-.66.66-.989.989-1.141 1.356a2 2 0 0 0 0 1.531c.152.368.482.697 1.14 1.356c.66.659.989.988 1.356 1.14a2 2 0 0 0 1.531 0c.368-.152.697-.481 1.356-1.14s.988-.988 1.14-1.356a2 2 0 0 0 0-1.53c-.152-.368-.48-.698-1.14-1.357s-.988-.988-1.356-1.14a2 2 0 0 0-1.53 0m11.372 1.14c-.659.66-.988.989-1.14 1.356a2 2 0 0 0 0 1.531c.152.368.481.697 1.14 1.356s.989.988 1.356 1.14a2 2 0 0 0 1.53 0c.368-.152.698-.481 1.357-1.14s.987-.988 1.14-1.356a2 2 0 0 0 0-1.53c-.153-.368-.481-.698-1.14-1.357c-.66-.659-.989-.988-1.356-1.14a2 2 0 0 0-1.531 0c-.367.152-.697.481-1.356 1.14m-5.008 5.224c-.368.152-.697.482-1.356 1.14c-.659.66-.989.989-1.14 1.357a2 2 0 0 0 0 1.53c.151.368.48.697 1.14 1.356c.658.659.988.989 1.356 1.14a2 2 0 0 0 1.53 0c.368-.151.697-.48 1.356-1.14s.988-.988 1.14-1.356c.203-.49.203-1.04 0-1.53c-.152-.368-.48-.698-1.14-1.356c-.659-.66-.988-.989-1.356-1.141a2 2 0 0 0-1.53 0" />
                            </svg>
                            <h3 className="card-grid__title color-baliteak font-bold text-lg mb-2">Designing Around Available Components</h3>
                            <p className="card-grid__text text-gray-700">
                                I also considered <strong>Elementor's available components</strong> during the design process to ensure that proposed UI patterns, such as sliders and carousels, could be realistically implemented without unnecessary custom development.[cite: 1]
                            </p>
                        </div>

                        {/* Challenge 03 */}
                        <div className="card-grid__card card-grid__card--background p-6 rounded-2xl bg-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="challenge-icon color-baliteak mb-4 w-8 h-8 text-blue-600">
                                <path d="M0 0h32v32H0z" fill="none" />
                                <path fill="currentColor" d="m26 24.586l-5.115-5.115a6 6 0 0 0 .96-4.843c-.497-2.208-2.278-3.99-4.488-4.478a6.015 6.015 0 0 0-7.207 7.207c.487 2.21 2.27 3.992 4.478 4.489a6 6 0 0 0 4.843-.96L24.586 26zm-8.915-4.73a4.014 4.014 0 0 1-4.94-4.944a3.95 3.95 0 0 1 2.77-2.768a4.014 4.014 0 0 1 4.94 4.945a3.95 3.95 0 0 1-2.77 2.768m11.981-3.5l-.065-.17C27.01 10.948 21.423 7 16 7S4.99 10.948 3 16.183l-.067.173a1 1 0 0 1-1.868-.715l.066-.17C3.399 9.501 9.792 5 16 5s12.602 4.502 14.87 10.474l.064.168M16 27C9.792 27 3.4 22.497 1.131 16.526l-.064-.166a1 1 0 0 1 1.866-.72l.066.171C4.99 21.051 10.58 25 16 25z" />
                            </svg>
                            <h3 className="card-grid__title color-baliteak font-bold text-lg mb-2">Establishing a Visual Identity</h3>
                            <p className="card-grid__text text-gray-700">
                                With <strong>a limited visual identity and a short delivery timeline</strong>, I developed several colour directions and presented them to the client before establishing a simple and consistent visual foundation that could be applied across the website.[cite: 1]
                            </p>
                        </div>

                        {/* Challenge 04 */}
                        <div className="card-grid__card card-grid__card--background p-6 rounded-2xl bg-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className="challenge-icon color-baliteak mb-4 w-8 h-8 text-blue-600">
                                <path d="M0 0h2048v2048H0z" fill="none" />
                                <path fill="currentColor" d="M1920 512v1408H768v-256H512v-256H256V0h731l256 256h421v256zm-896-128h165l-165-165zm256 896V512H896V128H384v1152zm256 256V384h-128v1024H640v128zm257-896h-129v1024H896v128h897z" />
                            </svg>
                            <h3 className="card-grid__title color-baliteak font-bold text-lg mb-2">Keeping Documentation Fit for Purpose</h3>
                            <p className="card-grid__text text-gray-700">
                                The limited timeline also required prioritisation in the design documentation. Rather than creating an overly complex design system that would be difficult to maintain within the project scope, I focused on <strong>documenting the essential decisions needed for implementation</strong>. For example, the typography system was kept intentionally simple while still providing enough structure for consistent use across the website.[cite: 1]
                            </p>
                        </div>

                        {/* Challenge 05 */}
                        <div className="card-grid__card card-grid__card--background p-6 rounded-2xl bg-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="challenge-icon color-baliteak mb-4 w-8 h-8 text-blue-600">
                                <path d="M0 0h64v64H0z" fill="none" />
                                <path fill="currentColor" d="M52.303 8.563C53.24 8.563 54 7.74 54 6.729V3.833C54 2.82 53.24 2 52.303 2H11.697C10.759 2 10 2.82 10 3.833v2.896c0 1.011.759 1.833 1.697 1.833h1.053v46.875h-1.053c-.938 0-1.697.82-1.697 1.833v2.895c0 1.013.759 1.835 1.697 1.835h40.605C53.24 62 54 61.178 54 60.165V57.27c0-1.013-.76-1.833-1.697-1.833H51.25V8.563zm-37.72 46.875V8.563h1.724c-.445 0-.807.335-.807.749v2.25c0 .414.358.747.802.75v.001c0 8.289 1.328 16.344 10.932 19.12l.474.15c.415.132.912.288 1.166.417c-.254.127-.745.283-1.158.413l-.453.145c-9.632 2.786-10.96 10.841-10.96 19.13v.001c-.443.003-.802.336-.802.748v2.25c0 .414.361.751.807.751zm21.163-21.233l.494.156c6.806 1.968 9.463 6.445 9.617 16.389H32.816c-.131-4.624-.459-16.433-.459-18.75c0-.785 1.452-1.886 2.12-2.279c2.819-1.665 6.445-4.959 6.445-8.387H23.076c0 3.428 3.626 6.722 6.445 8.387c.666.394 2.12 1.494 2.12 2.279c0 2.378-.327 14.138-.458 18.75h-13.04c.153-9.941 2.813-14.42 9.645-16.397l.469-.147c1.313-.414 2.553-.806 2.553-2.205c0-1.401-1.244-1.794-2.563-2.208l-.488-.155c-6.805-1.968-9.462-6.444-9.615-16.387h27.715c-.154 9.943-2.813 14.422-9.643 16.396l-.457.145c-1.32.414-2.567.807-2.567 2.209c-.002 1.398 1.24 1.79 2.554 2.204m13.67 21.233h-1.722c.444 0 .806-.337.806-.751v-2.25c0-.413-.36-.746-.803-.748v-.001c0-8.29-1.328-16.346-10.932-19.122l-.48-.152c-.412-.13-.905-.286-1.159-.413c.255-.129.753-.285 1.169-.417l.443-.141c9.631-2.784 10.959-10.84 10.959-19.13v-.001c.442-.002.803-.335.803-.75v-2.25c0-.414-.361-.749-.806-.749h1.722z" />
                            </svg>
                            <h3 className="card-grid__title color-baliteak font-bold text-lg mb-2">Prioritising Quality Within the Timeline</h3>
                            <p className="card-grid__text text-gray-700">
                                Not every aspect could be refined to its ideal state within the available timeframe. To protect the quality of the launch, we <strong>prioritised the most essential design, responsive, accessibility, and technical improvements first</strong>. Remaining opportunities and refinements were documented as potential next steps rather than compromising the launch by trying to address everything at once.[cite: 1]
                            </p>
                        </div>

                        {/* Challenge 06 */}
                        <div className="card-grid__card card-grid__card--background p-6 rounded-2xl bg-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="challenge-icon color-baliteak w-8 h-8 text-blue-600 mb-4">
                                <path d="M0 0h48v48H0z" fill="none" />
                                <path fill="currentColor" d="M40.75 6a1.25 1.25 0 1 1 0 2.5h-3.469l5.62 13.263c.066.154.099.32.099.487a7.5 7.5 0 0 1-15 0c0-.167.033-.333.099-.487L33.719 8.5h-8.446l.456 25.5H35a4 4 0 0 1 0 8H13a4 4 0 0 1 0-8h10.228L22.77 8.5h-8.49l5.62 13.263c.066.154.099.32.099.487a7.5 7.5 0 0 1-15 0c0-.167.033-.333.099-.487L10.719 8.5H7.25a1.25 1.25 0 1 1 0-2.5zM13 36.5a1.5 1.5 0 0 0 0 3h22a1.5 1.5 0 0 0 0-3zm-5.343-13a5.002 5.002 0 0 0 9.686 0zm23 0a5.002 5.002 0 0 0 9.686 0zM8.137 21h8.725L12.5 10.704zm23 0h8.725L35.5 10.704z" />
                            </svg>
                            <h3 className="card-grid__title color-baliteak font-bold text-lg mb-2">Balancing Quality, Feasibility &amp; Speed</h3>
                            <p className="card-grid__text text-gray-700">
                                Throughout the project, I balanced <strong>visual quality</strong>, <strong>implementation feasibility</strong>, and <strong>delivery speed</strong>, while also ensuring that the Elementor setup, licensing, and custom code were suitable for ongoing maintenance and future improvements.[cite: 1]
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer px-12 pt-12 pb-6" id="portfolioFooter">
                <div className="container mx-auto flex flex-col md:flex-row justify-between gap-4">
                </div>
            </footer>
        </>
    );
}