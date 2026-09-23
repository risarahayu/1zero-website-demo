import React from 'react';
import '../css/project.css';
import '../css/plastic_recovery.css';
import '../css/portfolio.css';
import useLazyImgSkeleton from '../components/useLazyImgSkeleton';

export default function PlasticRecoveryPage() {
    useLazyImgSkeleton();

    return (
        <div className="plastic-recovery-container">

            <div id="breadcrumb"></div>

            <header className="project-hero">
                <div className="project-hero__inner">
                    <div className="project-hero__banner">
                    </div>
                    <div className="project-hero__panel">
                        <div className="project-hero__intro">
                            <h1 className="project-hero__title">
                                Plastic Recycle - Impact Dashboard
                            </h1>
                            <div className="project-hero__highlights">
                                <div className="project-hero__highlight">
                                    <img src="Portfolios/plastic_recovery/clarity--shield-check-line.svg" width="24" alt="" />
                                    <p>Improved donors engagement with real-time clean-up data.</p>
                                </div>
                                <div className="project-hero__highlight">
                                    <img src="Portfolios/plastic_recovery/ant-design--field-time-outlined.svg" width="24" alt="" />
                                    <p>Enhanced transparency of environmental clean-up efforts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="project-hero__meta">
                            <div className="project-hero__meta-item">
                                <p className="project-hero__meta-label">Role: </p>
                                <p className="project-hero__meta-value">UI/UX Designer & Web Developer</p>
                            </div>
                            <div className="project-hero__meta-item">
                                <p className="project-hero__meta-label">Tools: </p>
                                <p className="project-hero__meta-value">Figma, React JS, Tailwind CSS, Next JS, Typescript JS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="main">
                <section id="selected-ui" className="project-section">
                    <h2 className="capsule font-semibold capsule-border-project project-section__title m-0">Selected UI</h2>
                    <div className="media-marquee mt-4">
                        <div className="media-marquee__track">
                            <img src="Portfolios/plastic_recovery/mockup/Mockup_Splash Screen.jpg" alt="Plastic Recycle mobile app splash screen"
                                width="623" height="432" loading="lazy" className="media-marquee__image lazy-img preview-image" />
                            <img src="Portfolios/plastic_recovery/mockup/Mockup _ DCA Login.jpg" alt="Plastic Recycle mobile app login screen"
                                width="216" height="432" loading="lazy" className="media-marquee__image lazy-img preview-image" />
                            <img src="Portfolios/plastic_recovery/mockup/Mockup _DCA Clean up History.jpg"
                                alt="Plastic Recycle mobile app clean-up list screen" width="216" height="432" loading="lazy"
                                className="media-marquee__image lazy-img preview-image" />
                            <img src="Portfolios/plastic_recovery/mockup/Mockup_DCA Summary Clean up.jpg"
                                alt="Plastic Recycle mobile app clean-up submission screen" width="648" height="432" loading="lazy"
                                className="media-marquee__image lazy-img preview-image" />
                            {/* duplicated so the marquee loop reads as seamless */}
                            <img src="Portfolios/plastic_recovery/mockup/Mockup_Splash Screen.jpg" alt="" width="623" height="432"
                                loading="lazy" className="media-marquee__image lazy-img preview-image" aria-hidden="true" />
                            <img src="Portfolios/plastic_recovery/mockup/Mockup _ DCA Login.jpg" alt="" width="216" height="432" loading="lazy"
                                className="media-marquee__image lazy-img preview-image" aria-hidden="true" />
                            <img src="Portfolios/plastic_recovery/mockup/Mockup _DCA Clean up History.jpg" alt="" width="216" height="432"
                                loading="lazy" className="media-marquee__image lazy-img preview-image" aria-hidden="true" />
                            <img src="Portfolios/plastic_recovery/mockup/Mockup_DCA Summary Clean up.jpg" alt="" width="648" height="432"
                                loading="lazy" className="media-marquee__image lazy-img preview-image" aria-hidden="true" />

                            <video src="Portfolios/plastic_recovery/videos/plastic_recovery-Animation-Explore.mp4" width="626" height="432" autoPlay muted
                                loop playsInline preload="metadata" className="media-marquee__image lazy-img preview-image"
                                aria-hidden="true"></video>
                        </div>
                    </div>
                </section>

                <section id="project-scope" className="project-section info-block">
                    <h2 className="capsule font-semibold capsule-border-project project-section__title m-0">Project Scope</h2>
                    <div className="info-block__row mt-4">
                        <div className="info-block__prose">
                            <p>Plastic Recycle is a mission-driven organization operating at the intersection of
                                environmental impact and global commerce. As the organization scaled, its digital platform
                                struggled to keep up with growing operational and communication needs.</p>
                            <p>
                                The existing setup was built incrementally over time, resulting in fragmented user journeys,
                                limited flexibility, and increasing maintenance overhead. While the mission remained strong, the
                                digital experience no longer reflected the scale, clarity, and credibility of the organization.
                            </p>
                        </div>
                        <div className="info-block__summary">
                            <div className="info-block__group">
                                <p className="info-block__label">Duration</p>
                                <p className="info-block__value">6 Months</p>
                            </div>
                            <div className="info-block__group">
                                <p className="info-block__label">Timeline: </p>
                                <div className="info-block__timeline">
                                    <div className="info-block__phase">
                                        <p className="info-block__phase-label m-0"><strong>Phase 1:</strong></p>
                                        <p className="m-0">Planning & Discovery</p>
                                    </div>
                                    <div className="info-block__phase">
                                        <p className="info-block__phase-label m-0"><strong>Phase 2:</strong></p>
                                        <p className="m-0">Requirement Analysis</p>
                                    </div>
                                    <div className="info-block__phase">
                                        <p className="info-block__phase-label m-0"><strong>Phase 3:</strong></p>
                                        <p className="m-0">UI Design</p>
                                    </div>
                                    <div className="info-block__phase">
                                        <p className="info-block__phase-label m-0"><strong>Phase 4:</strong></p>
                                        <p className="m-0">Development & Testing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="processDiscovery" className="project-section process-discovery">
                    <h2 className="capsule font-semibold capsule-border-project project-section__title">Stakeholder & Process
                        Discovery</h2>
                    <div className="process-discovery__row mt-4">
                        <div className="process-discovery__column gap-4">
                            <div className="process-discovery__column-header rounded-2xl">
                                <img loading="lazy" width="57" height="73" src="Portfolios/plastic_recovery/cleanup-team.png" alt=""
                                    className="process-discovery__column-icon lazy-img" />
                                <div className="process-discovery__column-heading">
                                    <h3 className="process-discovery__column-title text-18">Cleanup Team</h3>
                                    <p className="text-16">Responsibility : Collect and record daily waste collection data in the
                                        field.</p>
                                </div>
                            </div>
                            <div className="process-discovery__column-body rounded-2xl">
                                <p className="text-16">
                                    Cleanup teams <span className="text-primary-soft font-semibold">conduct waste collection
                                        activities across assigned locations</span>, including
                                    collecting waste in the field, transporting it to the facility, sorting and categorizing the
                                    collected materials, and weighing each category of waste.<br /><br />
                                    This process allows the team to <span className="text-primary-soft font-semibold">separate mixed
                                        waste</span> and produce clean, measurable <span className="text-primary-soft font-semibold">data based on the type and weight</span>
                                    of the materials collected.<br /><br />
                                    All activity data, including the cleanup location, collection activities, waste categories,
                                    and final weights, is <span className="text-primary-soft font-semibold">manually recorded in
                                        paper logbooks</span> during or after the cleanup process.<br /><br />
                                    The completed logbooks are then submitted to the Team Captain for reporting and further
                                    processing.
                                </p>
                            </div>
                        </div>

                        <div className="process-discovery__column gap-4">
                            <div className="process-discovery__connector">
                                <span className="process-discovery__connector-label text-16">Paper logbook Manual Recap</span>
                                <img loading="lazy" width="130" height="130" src="Portfolios/plastic_recovery/arrow.png" alt=""
                                    className="process-discovery__connector-arrow lazy-img" />
                            </div>
                            <div className="process-discovery__column-header">
                                <img loading="lazy" width="97" height="97" src="Portfolios/plastic_recovery/plastic_recovery_logo.svg" alt=""
                                    className="process-discovery__column-icon lazy-img" />
                                <div className="process-discovery__column-heading">
                                    <h3 className="process-discovery__column-title text-18">Plastic Recycle Admin</h3>
                                    <p className="text-16">Responsibility : Get data from Cleanup Team, monitor, validate, and
                                        report operational performance data.</p>
                                </div>
                            </div>
                            <div className="process-discovery__column-body rounded-2xl">
                                <p className="text-16">
                                    After <span className="text-primary-soft font-semibold">receiving the paper logbooks and reports
                                        from the field teams</span>, Plastic Recycle Admin manually reviews, compiles, and recaps the data from multiple cleanup activities and locations.<br /><br />
                                    The information is then organized and processed for operational monitoring, reporting, and
                                    impact tracking, with the entire workflow still relying on <span
                                        className="text-primary-soft font-semibold">manual, paper-based documentation</span>
                                    rather than a centralized digital system. <br /><br />
                                    Then the admin will <span className="text-primary-soft font-semibold">send the report manually and
                                        personally</span>
                                </p>
                            </div>
                        </div>

                        <div className="process-discovery__column gap-4">
                            <div className="process-discovery__connector">
                                <span className="process-discovery__connector-label text-16">Manual Report (need 2 weeks)</span>
                                <img loading="lazy" width="130" height="130" src="Portfolios/plastic_recovery/arrow.png" alt=""
                                    className="process-discovery__connector-arrow lazy-img" />
                            </div>
                            <div className="process-discovery__column-header">
                                <img loading="lazy" width="85" height="73" src="Portfolios/plastic_recovery/investors.png" alt=""
                                    className="process-discovery__column-icon lazy-img" />
                                <div className="process-discovery__column-heading">
                                    <h3 className="process-discovery__column-title text-18">Donors</h3>
                                    <p className="text-16">Responsibility : Track environmental impact and operational transparency.</p>
                                </div>
                            </div>
                            <div className="process-discovery__column-body rounded-2xl">
                                <p className="text-16">
                                    Donors rely on impact and operational reports provided by Plastic Recycle, typically in PDF
                                    format, to <span className="text-primary-soft font-semibold">review environmental performance and
                                        assess the organization's measurable impact.</span><br /><br />
                                    They use these reports to understand the results of cleanup operations, track progress over
                                    time, and evaluate whether the organization's reported impact is supported by transparent
                                    and reliable data.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="problems" className="project-section">
                    <h2 className="capsule font-semibold capsule-border-project project-section__title">Problem</h2>
                    <div className="card-grid card-grid--cols-3 mt-4">
                        <div className="card-grid__card card-grid__card--bordered">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                className="challenge-icon color-project mb-2">
                                <path d="M0 0h20v20H0z" fill="none" />
                                <path fill="currentColor"
                                    d="M4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4zM3 6.5A1.5 1.5 0 0 1 4.5 5h11A1.5 1.5 0 0 1 17 6.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 13.5zM4.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zm.5 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z" />
                            </svg>
                            <h3 className="card-grid__title">Non-Standardized Field Data Collection</h3>
                            <p className="card-grid__text">Cleanup teams need a <b>standardized and efficient</b> way
                                to record and submit cleanup data because paper-based logbooks make data collection
                                inconsistent, difficult to manage, and prone to delays when multiple teams conduct cleanup
                                activities simultaneously across different locations.</p>
                        </div>

                        <div className="card-grid__card card-grid__card--bordered">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"
                                className="challenge-icon color-project mb-2">
                                <path d="M0 0h2048v2048H0z" fill="none" />
                                <path fill="currentColor"
                                    d="M1920 512v1408H768v-256H512v-256H256V0h731l256 256h421v256zm-896-128h165l-165-165zm256 896V512H896V128H384v1152zm256 256V384h-128v1024H640v128zm257-896h-129v1024H896v128h897z" />
                            </svg>
                            <h3 className="card-grid__title">Manual Data Consolidation</h3>
                            <p className="card-grid__text">Plastic Recycle admins need a more <b>efficient and centralized way
                                    to collect</b>, review, and consolidate cleanup data because manually processing paper
                                logbooks from multiple teams and locations is time-consuming, difficult to standardize, and can
                                result in delayed or scattered information.</p>
                        </div>

                        <div className="card-grid__card card-grid__card--bordered">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                className="challenge-icon color-project mb-2">
                                <path d="M0 0h32v32H0z" fill="none" />
                                <path fill="currentColor"
                                    d="m26 24.586l-5.115-5.115a6 6 0 0 0 .96-4.843c-.497-2.208-2.278-3.99-4.488-4.478a6.015 6.015 0 0 0-7.207 7.207c.487 2.21 2.27 3.992 4.478 4.489a6 6 0 0 0 4.843-.96L24.586 26zm-8.915-4.73a4.014 4.014 0 0 1-4.94-4.944a3.95 3.95 0 0 1 2.77-2.768a4.014 4.014 0 0 1 4.94 4.945a3.95 3.95 0 0 1-2.77 2.768m11.981-3.5l-.065-.17C27.01 10.948 21.423 7 16 7S4.99 10.948 3 16.183l-.067.173a1 1 0 0 1-1.868-.715l.066-.17C3.399 9.501 9.792 5 16 5s12.602 4.502 14.87 10.474l.064.168M16 27C9.792 27 3.4 22.497 1.131 16.526l-.064-.166a1 1 0 0 1 1.866-.72l.066.171C4.99 21.051 10.58 25 16 25z" />
                            </svg>
                            <h3 className="card-grid__title">Limited Real-Time Transparency</h3>
                            <p className="card-grid__text">Donors need more <b>transparent and accessible visibility
                                    into Plastic Recycle's environmental impact</b> and operational performance because relying on static
                                PDF reports limits their ability to track measurable impact, understand ongoing activities, and
                                access up-to-date information about how impact is being created.</p>
                        </div>
                    </div>
                </section>

                <section id="solutions" className="project-section solution">
                    <h2 className="capsule font-semibold capsule-border-project project-section__title">Solution</h2>
                    <div className="solution__row mt-4">
                        <div className="solution__column">
                            <p className="solution__column-title text-16">How might we help cleanup teams collect and submit
                                standardized field data more efficiently across multiple cleanup locations?</p>
                            <img loading="lazy" width="20" height="20" src="Portfolios/plastic_recovery/arrow-down.png" alt=""
                                className="solution__arrow lazy-img" />
                            <div className="solution__content">
                                <img loading="lazy" width="55" height="55" src="Portfolios/plastic_recovery/digital.png" alt=""
                                    className="solution__icon lazy-img" />
                                <p className="solution__column-text text-16 font-bold">A <span className="solution__highlight">Digital
                                        Collection</span> Application (DCA) for field data entry</p>
                            </div>
                        </div>

                        <div className="solution__column">
                            <p className="solution__column-title text-16">How might we enable Plastic Recycle Admins to automatically
                                centralize and synchronize cleanup data from multiple teams and locations?</p>
                            <img loading="lazy" width="20" height="20" src="Portfolios/plastic_recovery/arrow-down.png" alt=""
                                className="solution__arrow lazy-img" />
                            <div className="solution__content">
                                <img loading="lazy" width="55" height="55" src="Portfolios/plastic_recovery/database.png" alt=""
                                    className="solution__icon lazy-img" />
                                <p className="solution__column-text text-16 font-bold">A centralized <span
                                        className="solution__highlight">database</span> for automated synchronization</p>
                            </div>
                        </div>

                        <div className="solution__column">
                            <p className="solution__column-title text-16">How might we provide Plastic Recycle stakeholders with real-time
                                visibility into cleanup operations and environmental impact data?</p>
                            <img loading="lazy" width="20" height="20" src="Portfolios/plastic_recovery/arrow-down.png" alt=""
                                className="solution__arrow lazy-img" />
                            <div className="solution__content">
                                <img loading="lazy" width="55" height="55" src="Portfolios/plastic_recovery/dashboard.png" alt=""
                                    className="solution__icon lazy-img" />
                                <p className="solution__column-text text-16 font-bold">A real-time operational <span
                                        className="solution__highlight">dashboard</span> for monitoring and analytics</p>
                            </div>
                        </div>

                        <div className="solution__column">
                            <p className="solution__column-title text-16">How might we give donors secure and transparent access
                                to real-time environmental impact and operational data while ensuring access is limited to their
                                own relevant data?</p>
                            <img loading="lazy" width="20" height="20" src="Portfolios/plastic_recovery/arrow-down.png" alt=""
                                className="solution__arrow lazy-img" />
                            <div className="solution__content">
                                <img loading="lazy" width="55" height="55" src="Portfolios/plastic_recovery/access.png" alt=""
                                    className="solution__icon lazy-img" />
                                <p className="solution__column-text text-16 font-bold"><span className="solution__highlight">Role-based
                                        access control</span> for Team, Admin, and Donors</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="userFlow" className="project-section">
                    <h2 className="capsule font-semibold capsule-border-project project-section__title">
                        User Flow & Interface Exploration
                    </h2>
                    <div className="text-base text-center text-gray-500 block md:hidden mt-4">
                        <p className="text-left">👋 Hi, there! this is a bit challenge to see the wireframe. Please click the
                            picture and zoom in to see it.</p>
                    </div>

                    <div className="w-full flex flex-col gap-4 mt-4 project-surface-dark" id="userFlowAccordion">

                        {/* START CLEANUP FLOW */}
                        {/* Tambahkan atribut "open" di sini agar tab pertama terbuka secara default */}
                        <details className="group border-0 rounded-2xl overflow-hidden bg-white shadow-sm" open>
                            <summary className="w-full flex justify-between items-center p-4 font-semibold text-left bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                Start Cleanup Flow
                                {/* Ikon Panah yang berputar ke atas saat accordion terbuka (group-open) */}
                                <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="project-surface-dark p-4 border-t border-gray-100">
                                <p className="text-16 w-full">
                                    Stakeholder : <br />
                                    <b className="text-base font-bold">Cleanup Team</b>
                                </p>
                                <p className="text-base w-full mt-2">
                                    <b>Start Cleanup Flow:</b><br />
                                    Login → View Cleanup List → Create New Cleanup →
                                    Double Check Location → Take Pre-Cleanup Photo →
                                    Start Cleanup
                                </p>
                                <img loading="lazy" width="1366" height="521" src="Portfolios/plastic_recovery/start-cleanup.png"
                                    alt="Start Cleanup Flow" className="media-block__image zoom-image lazy-img mt-4 rounded-lg" />
                            </div>
                        </details>

                        {/* DURING CLEANUP FLOW */}
                        <details className="group border-0 rounded-2xl overflow-hidden bg-white shadow-sm project-surface-dark">
                            <summary className="w-full flex justify-between items-center p-4 font-semibold text-left bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                During Cleanup Flow
                                <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="project-surface-muted p-4 border-t border-gray-100">
                                <p className="text-16 w-full">
                                    Stakeholder : <br />
                                    <b className="text-base font-bold">Cleanup Team</b>
                                </p>
                                <p className="text-base w-full mt-2">
                                    <b>During Cleanup Flow:</b><br />
                                    Cleanup Ongoing → Capture Progress Photos → Submit Progress Photos
                                </p>
                                <img loading="lazy" width="1227" height="802" src="Portfolios/plastic_recovery/during-cleanup.png"
                                    alt="During Cleanup Flow" className="media-block__image zoom-image lazy-img mt-4 rounded-lg" />
                            </div>
                        </details>

                        {/* FINISHING CLEANUP FLOW */}
                        <details className="group border-0 rounded-2xl overflow-hidden bg-white shadow-sm">
                            <summary className="w-full flex justify-between items-center p-4 font-semibold text-left bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                Finishing Cleanup Flow
                                <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="project-surface-muted p-4 border-t border-gray-100">
                                <p className="text-16 w-full">
                                    Stakeholder : <br />
                                    <b className="text-base font-bold">Cleanup Team</b>
                                </p>
                                <p className="text-base w-full mt-2">
                                    <b>Finishing Cleanup Flow:</b><br />
                                    Capture Post-Cleanup Photo → Enter Daily Cleanup Data → Review →
                                    Submit Finish Cleanup
                                </p>
                                <img loading="lazy" width="1317" height="634" src="Portfolios/plastic_recovery/after-cleanup.png"
                                    alt="After Cleanup Flow" className="media-block__image zoom-image lazy-img mt-4 rounded-lg" />
                            </div>
                        </details>

                        {/* WASTE SORTING FLOW */}
                        <details className="group border-0 rounded-2xl overflow-hidden bg-white shadow-sm">
                            <summary className="w-full flex justify-between items-center p-4 font-semibold text-left bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                Waste Sorting Flow
                                <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="project-surface-muted p-4 border-t border-gray-100">
                                <p className="text-16 w-full">
                                    Stakeholder : <br />
                                    <b className="text-base font-bold">
                                        Cleanup Team / Warehouse Team
                                    </b>
                                </p>
                                <p className="text-base w-full mt-2">
                                    <b>Waste Sorting Flow:</b><br />
                                    Get QR Code → Scan Barcode at Facility → Add New Cleanup →
                                    Input Total Weight → Upload Weight Photo → Sorter Review Cleanup → Input Sorting Data →
                                    View Sorting Summary
                                </p>
                                <img loading="lazy" width="1370" height="510" src="Portfolios/plastic_recovery/waste-sorting.png"
                                    alt="Waste Sorting Flow" className="media-block__image zoom-image lazy-img mt-4 rounded-lg" />
                            </div>
                        </details>

                        {/* DASHBOARD / REPORT FLOW */}
                        <details className="group border-0 rounded-2xl overflow-hidden bg-white shadow-sm">
                            <summary className="w-full flex justify-between items-center p-4 font-semibold text-left bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                Dashboard / Report Flow
                                <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="project-surface-muted p-4 border-t border-gray-100">
                                <p className="text-16 w-full">
                                    Stakeholder : <br />
                                    <b className="text-base font-bold">
                                        Donors / Plastic Recycle Management
                                    </b>
                                </p>
                                <p className="text-base w-full mt-2">
                                    <b>Dashboard / Report Flow:</b><br />
                                    <span className="text-gray-500">
                                        Note: This is dummy data.
                                    </span><br />
                                    Login → View Latest Impact Summary → View Cleanup Data Table →
                                    View Cleanup Map → View Impact Spotlight
                                </p>
                                <img loading="lazy" width="1317" height="900" src="Portfolios/plastic_recovery/Dashboard-lo fi.png"
                                    alt="Dashboard / Report Flow" className="media-block__image zoom-image lazy-img mt-4 rounded-lg" />
                            </div>
                        </details>
                    </div>
                </section>

                <section id="workflow" className="project-section">
                    <h2 className="capsule font-semibold capsule-border-project project-section__title">
                        Workflow Transformation
                    </h2>
                    <div className="overflow-x-auto rounded-2xl mt-4">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th scope="col" className="p-4 border-b border-gray-200 font-semibold text-gray-700">Area</th>
                                    <th scope="col" className="p-4 border-b border-gray-200 font-semibold text-gray-700">Issue</th>
                                    <th scope="col" className="p-4 border-b border-gray-200 font-semibold text-gray-700">New Direction</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" className="p-4 border-b border-gray-100 font-medium align-top">Field Data Collection</th>
                                    <td className="p-4 border-b border-gray-100 align-top">
                                        <div className="compare-row cross-container">
                                            <img loading="lazy" width="20" height="20" src="/cross-red.svg" alt=""
                                                className="cross mt-1 lazy-img" />
                                            <p className="m-0">Dozens team manually recorded daily collection result on paper</p>
                                        </div>
                                    </td>
                                    <td className="p-4 border-b border-gray-100 align-top">
                                        <div className="compare-row check-container">
                                            <img loading="lazy" width="20" height="20" src="/tick-green.svg" alt=""
                                                className="check lazy-img" />
                                            <p className="m-0">Each team member inputs data directly into the Digital Collection
                                                Application(DCA)</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="p-4 border-b border-gray -100 font-medium align-top">Data Consolidation</th>
                                    <td className="p-4 border-b border-gray-100 align-top">
                                        <div className="compare-row cross-container">
                                            <img loading="lazy" width="20" height="20" src="/cross-red.svg" alt=""
                                                className="cross mt-1 lazy-img" />
                                            <p className="m-0">Manual recording of each bag leads to inconsitent data and no
                                                tranparency in verification</p>
                                        </div>
                                    </td>
                                    <td className="p-4 border-b border-gray-100 align-top">
                                        <div className="compare-row check-container">
                                            <img loading="lazy" width="20" height="20" src="/tick-green.svg" alt=""
                                                className="check lazy-img" />
                                            <p className="m-0">Data is automatically synced to a centralized system. One bag, one
                                                photo, ensuring transparent weigth verification and proper process documentation
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="p-4 border-b border-gray-100 font-medium align-top">Impact Transparency</th>
                                    <td className="p-4 border-b border-gray-100 align-top">
                                        <div className="compare-row cross-container">
                                            <img loading="lazy" width="20" height="20" src="/cross-red.svg" alt=""
                                                className="cross mt-1 lazy-img" />
                                            <p className="m-0">Time-confuming reporting process after field operations</p>
                                        </div>
                                    </td>
                                    <td className="p-4 border-b border-gray-100 align-top">
                                        <div className="compare-row check-container">
                                            <img loading="lazy" width="20" height="20" src="/tick-green.svg" alt=""
                                                className="check lazy-img" />
                                            <p className="m-0">Reporting time is significantly reduced</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="p-4 font-medium align-top"></th>
                                    <td className="p-4 align-top">
                                        <div className="compare-row cross-container">
                                            <img loading="lazy" width="20" height="20" src="/cross-red.svg" alt=""
                                                className="cross mt-1 lazy-img" />
                                            <p className="m-0">No real-time visibility of total team progress</p>
                                        </div>
                                    </td>
                                    <td className="p-4 align-top">
                                        <div className="compare-row check-container">
                                            <img loading="lazy" width="20" height="20" src="/tick-green.svg" alt=""
                                                className="check lazy-img" />
                                            <p className="m-0">Real-time visibility of team performance</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section id="wireframing" className="project-section">
                    <h2 className="capsule font-semibold capsule-border-project project-section__title">
                        Visual System & UI Design
                    </h2>
                    <div className="w-full flex flex-col mt-4" id="wireframingAccordion">
                        {/* DESIGN SYSTEM */}
                        <details className="group border-0 rounded-2xl overflow-hidden bg-white mb-4 project-surface-dark">
                            <summary className="w-full flex justify-between items-center p-4 font-semibold text-left bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                <span className="m-0">Color System</span>
                                <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div id="ColorSystem">
                                <div className="project-surface-muted p-4 border-t border-gray-100">
                                    <div className="wireframing__row">
                                        <div className="wireframing__column">
                                            <h3 className="text-20 text-black">Color</h3>
                                            <p className="text-16">Figma Variable Color Collection</p>
                                            <img loading="lazy" width="497" height="338"
                                                src="Portfolios/plastic_recovery/wireframing-color.png" alt="Plastic Recycle Color"
                                                className="media-block__image zoom-image lazy-img" />
                                        </div>
                                        <div className="wireframing__column">
                                            <h3 className="text-20">Tailwind CSS</h3>
                                            <pre className="text-20"><b>:root {'{'}</b>
                {'\n'}  --secondary: #1700b7;
                {'\n'}  --primary: #0057b7;
                {'\n'}  --white-neutral: #ffffff;
                {'\n'}  --orange-accent: #eb7600;
                {'\n'}  --green-accent: #5fef1c;
                {'\n'}  --text: #171717;
                {'\n'}  --disable: #cac8c8;
                {'\n'}<b>{'}'}</b>
                {'\n'}
                {'\n'}<b>@theme {'{'}</b>
                {'\n'}  --color-secondary: var(--secondary);
                {'\n'}  --color-primary: var(--primary);
                {'\n'}  --color-white-neutral: var(--white-neutral);
                {'\n'}  --color-orange-accent: var(--orange-accent);
                {'\n'}  --color-green-accent: var(--green-accent);
                {'\n'}  --color-text: var(--text);
                {'\n'}  --color-disable: var(--disable);
                {'\n'}<b>{'}'}</b></pre>
                                        </div>
                                        <div className="wireframing__column">
                                            <h3 className="text-20">Logo</h3>
                                            <img loading="lazy" width="193" height="81" src="Portfolios/plastic_recovery/plastic_recovery_logo.svg"
                                                alt="Plastic Recycle Logo" className="wireframing__logo lazy-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </details>

                        {/* TYPOGRAPHY */}
                        <details className="group border-0 rounded-2xl overflow-hidden bg-white mb-4 project-surface-dark">
                            <summary className="w-full flex justify-between items-center p-4 font-semibold text-left bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                <span className="m-0">Typography</span>
                                <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div id="typography">
                                <div className="project-surface-muted p-4 border-t border-gray-100">
                                    <div className="wireframing__column">
                                        <h3 className="text-20">Figma Text Style</h3>
                                        <img loading="lazy" width="228" height="208" src="Portfolios/plastic_recovery/wireframing-text.png"
                                            alt="Plastic Recycle Typography"
                                            className="media-block__image media-block__image--capped zoom-image lazy-img" />
                                    </div>
                                    <div className="wireframing__column mt-12">
                                        <h3 className="text-20">Responsive Dashboard Typography</h3>
                                        <p className="text-16">Tailwind Variable</p>
                                        <div className="wireframing__type-list">
                                            <div className="wireframing__type-item">
                                                <p className="text-96 font-bold">
                                                    Display 96px / Black<br />
                                                    <span className="text-16 font-normal">
                                                        Hero Text | Responsive: small screen text-4xl, medium to big screen md:text-8xl
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="wireframing__type-item">
                                                <p className="text-4xl font-bold">
                                                    Heading 1 / Bold<br />
                                                    <span className="text-16">
                                                        H1 tag | Responsive: small screen text-2xl, medium to big screen md:text-5xl
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="wireframing__type-item">
                                                <p className="text-3xl font-bold">
                                                    Heading 2 / Bold<br />
                                                    <span className="text-16">
                                                        H2 tag | Responsive: small screen text-xl, medium to big screen md:text-3xl
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="wireframing__type-item">
                                                <p className="text-2xl font-bold">
                                                    Heading 3 / Bold<br />
                                                    <span className="text-16">
                                                        H3 tag | Responsive: small screen text-lg, medium to big screen md:text-2xl
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="wireframing__type-item">
                                                <p className="text-18">
                                                    Body<br />
                                                    <span className="text-14">
                                                        Paragraph | Responsive: small to big screen text-lg
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="wireframing__type-item">
                                                <p className="text-16 font-bold">
                                                    Label Regular<br />
                                                    <span className="text-14 font-normal">
                                                        Button Text | Responsive: small to big screen text-base
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="wireframing__type-item">
                                                <p className="text-14">
                                                    Small Text<br />
                                                    <span className="text-14">
                                                        Note / Additional text | Responsive: small to big screen text-sm
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </details>

                        {/* ICON */}
                        <details className="group border-0 rounded-2xl overflow-hidden bg-white mb-4 project-surface-dark">
                            <summary className="w-full flex justify-between items-center p-4 font-semibold text-left bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                <span className="m-0">Icon</span>
                                <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div id="icons">
                                <div className="project-surface-muted p-4 border-t border-gray-100">
                                    <img loading="lazy" width="1211" height="432" src="Portfolios/plastic_recovery/wireframing-icon-1.png"
                                        alt="Plastic Recycle Icon 1"
                                        className="media-block__image media-block__image--capped zoom-image lazy-img" />
                                </div>
                            </div>
                        </details>

                        {/* COMPONENT */}
                        <details className="group border-0 rounded-2xl overflow-hidden bg-white mb-4 project-surface-dark">
                            <summary className="w-full flex justify-between items-center p-4 font-semibold text-left bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                <span className="m-0">Component</span>
                                <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div id="components">
                                <div className="project-surface-muted p-4 border-t border-gray-100">
                                    <div className="flex flex-wrap gap-4 justify-center">
                                        <div className="flex gap-4 items-center flex-wrap">
                                            <div>
                                                <p className="text-16 font-bold">Figma Techniques</p>
                                                <ul className="check-list">
                                                    <li><img loading="lazy" width="20" height="20" src="/tick-green.svg"
                                                            alt="" className="check-list__icon" />Component Property</li>
                                                    <li><img loading="lazy" width="20" height="20" src="/tick-green.svg"
                                                            alt="" className="check-list__icon" />Auto Layout</li>
                                                    <li><img loading="lazy" width="20" height="20" src="/tick-green.svg"
                                                            alt="" className="check-list__icon" />Component Variation</li>
                                                    <li><img loading="lazy" width="20" height="20" src="/tick-green.svg"
                                                            alt="" className="check-list__icon" />Nested Component</li>
                                                </ul>
                                            </div>
                                            <img loading="lazy" width="194" height="165"
                                                src="Portfolios/plastic_recovery/wireframing-icon-3.png" alt="Plastic Recycle Icon 3"
                                                className="media-block__image media-block__image--capped zoom-image" />
                                        </div>
                                        <img loading="lazy" width="389" height="266" src="Portfolios/plastic_recovery/wireframing-icon-2.png"
                                            alt="Plastic Recycle Icon 2"
                                            className="media-block__image media-block__image--capped mt-6 zoom-image" />
                                    </div>
                                    <img loading="lazy" width="809" height="524" src="Portfolios/plastic_recovery/wireframing-component-1.png"
                                        alt="Plastic Recycle Component 1"
                                        className="media-block__image media-block__image--capped mt-6 mx-auto zoom-image" />
                                    <img loading="lazy" width="951" height="709" src="Portfolios/plastic_recovery/wireframing-component-2.png"
                                        alt="Plastic Recycle Component 2"
                                        className="media-block__image media-block__image--capped mt-6 mx-auto zoom-image" />
                                </div>
                            </div>
                        </details>

                        {/* RESPONSIVE */}
                        <details className="group border-0 rounded-2xl overflow-hidden bg-white mb-4 project-surface-dark">
                            <summary className="w-full flex justify-between items-center p-4 font-semibold text-left bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                <span className="m-0">Responsive Dashboard UI</span>
                                <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div id="responsive">
                                <div className="project-surface-muted p-4 border-t border-gray-100">
                                    <img loading="lazy" width="1255" height="1010" src="Portfolios/plastic_recovery/wireframing-responsive.png"
                                        alt="Plastic Recycle Responsive Design"
                                        className="media-block__image media-block__image--capped zoom-image" />
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                <section id="iteration" className="project-section">
                    <h2 className="capsule font-semibold capsule-border-project project-section__title">
                        Iteration
                    </h2>
                    <div className="w-full flex flex-col mt-4" id="iterasiAccordion">
                        {/* FIRST VERSION */}
                        <details className="group border-0 rounded-2xl overflow-hidden bg-white mb-4 project-surface-dark">
                            <summary className="w-full flex justify-between items-center p-4 font-semibold text-left bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                <span className="m-0">First Version</span>
                                <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div id="firstVersion">
                                <div className="project-surface-muted p-4 border-t border-gray-100">
                                    <p className="text-20 font-bold">A Simple Dashboard Concept</p>
                                    <p className="text-16">
                                        The first iteration focused on creating a simple, single-screen dashboard to present the
                                        key cleanup information at a glance. However, this approach was considered too limited,
                                        as Plastic Recycle had a substantial amount of information and impact data to communicate to
                                        users. The single-screen layout could not provide enough space to present the
                                        information clearly and effectively.
                                    </p>
                                    <img loading="lazy" width="958" height="683" src="Portfolios/plastic_recovery/iterasi-1.jpg"
                                        alt="First Version Iteration"
                                        className="media-block__image media-block__image--capped zoom-image lazy-img" />
                                </div>
                            </div>
                        </details>

                        {/* SECOND VERSION */}
                        <details className="group border-0 rounded-2xl overflow-hidden bg-white mb-4 project-surface-dark">
                            <summary className="w-full flex justify-between items-center p-4 font-semibold text-left bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                <span className="m-0">Second Version</span>
                                <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div id="secondVersion">
                                <div className="project-surface-muted p-4 border-t border-gray-100">
                                    <p className="text-20 font-bold">Expanding the Dashboard Experience</p>
                                    <p className="text-16">
                                        In the second iteration, the dashboard was redesigned into a long-form, vertically
                                        structured layout to accommodate more information. This allowed users to explore a wider
                                        range of cleanup data and impact metrics within a single dashboard.
                                        <br /><br />
                                        Along with the structural change, the UI was refined and several information sections
                                        were reorganized to improve hierarchy, readability, and how the data was presented to
                                        users.
                                    </p>
                                    <img loading="lazy" width="1303" height="927" src="Portfolios/plastic_recovery/iterasi-2.png"
                                        alt="Second Version Iteration"
                                        className="media-block__image media-block__image--capped zoom-image lazy-img" />
                                </div>
                            </div>
                        </details>

                        {/* FINAL VERSION */}
                        <details className="group border-0 rounded-2xl overflow-hidden bg-white mb-4 project-surface-dark">
                            <summary className="w-full flex justify-between items-center p-4 font-semibold text-left bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                <span className="m-0">Final Version</span>
                                <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div id="finalVersion">
                                <div className="project-surface-muted p-4 border-t border-gray-100">
                                    <p className="text-20 font-bold">Refining the Dashboard Experience</p>
                                    <p className="text-16">
                                        The third iteration focused on refining the overall dashboard experience based on the
                                        previous version. The information hierarchy, layout, and data presentation were further
                                        improved to make the dashboard clearer, more structured, and easier to navigate.
                                        <br /><br />
                                        The final design balanced the amount of information Plastic Recycle needed to communicate with
                                        the user's need to quickly understand cleanup activities, environmental impact, and key
                                        results.
                                    </p>
                                    <img loading="lazy" width="1317" height="900" src="Portfolios/plastic_recovery/iterasi-3.png"
                                        alt="Final Version Iteration"
                                        className="media-block__image media-block__image--capped zoom-image lazy-img" />
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                <section id="learnings" className="project-section">
                    <h2 className="capsule font-semibold capsule-border-project project-section__title">Key Learnings</h2>
                    <div className="card-grid card-grid--cols-3 mt-4">
                        <div className="card-grid__card card-grid__card--background">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="challenge-icon color-project mb-2">
                                <rect x="3" y="3" width="7" height="7" rx="1" />
                                <rect x="14" y="3" width="7" height="7" rx="1" />
                                <rect x="3" y="14" width="7" height="7" rx="1" />
                                <rect x="14" y="14" width="7" height="7" rx="1" />
                            </svg>
                            <h3 className="card-grid__title text-primary-plastic_recovery">Designing for Complex Systems</h3>
                            <p className="card-grid__text">Working with a large organization like Plastic Recycle meant working
                                with a large amount of existing data, processes, and interconnected systems. One of the biggest
                                challenges was <span className="font-bold ">ensuring that new features could support their existing
                                    workflows from end to end </span>, rather than solving only a single part of the process.
                                <br /><br />
                                This taught me to think beyond individual screens and consider how each feature fits into the
                                broader system and user journey.
                            </p>
                        </div>

                        <div className="card-grid__card card-grid__card--background">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="challenge-icon color-project mb-2">
                                <rect width="8" height="4" x="8" y="2" rx="1" />
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                <path d="m9 14 2 2 4-4" />
                            </svg>
                            <h3 className="card-grid__title text-primary-plastic_recovery">Validating Before Building</h3>
                            <p className="card-grid__text">Requirements and feature requests could change frequently
                                throughout the project. As a UI/UX Designer, I learned the importance of <span className="font-bold">
                                    validating assumptions before moving</span> into design and development.
                                <br /><br />
                                Whenever a new feature was proposed, I would encourage the CTO and team to validate the actual
                                need and expected outcome with Plastic Recycle stakeholders/users first. This helped reduce the risk of
                                building features based on assumptions and ensured that design decisions were grounded in real
                                user and business needs.
                            </p>
                        </div>

                        <div className="card-grid__card card-grid__card--background">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
                                className="challenge-icon color-project mb-2">
                                <path d="M0 0h48v48H0z" fill="none" />
                                <path fill="currentColor"
                                    d="M40.75 6a1.25 1.25 0 1 1 0 2.5h-3.469l5.62 13.263c.066.154.099.32.099.487a7.5 7.5 0 0 1-15 0c0-.167.033-.333.099-.487L33.719 8.5h-8.446l.456 25.5H35a4 4 0 0 1 0 8H13a4 4 0 0 1 0-8h10.228L22.77 8.5h-8.49l5.62 13.263c.066.154.099.32.099.487a7.5 7.5 0 0 1-15 0c0-.167.033-.333.099-.487L10.719 8.5H7.25a1.25 1.25 0 1 1 0-2.5zM13 36.5a1.5 1.5 0 0 0 0 3h22a1.5 1.5 0 0 0 0-3zm-5.343-13a5.002 5.002 0 0 0 9.686 0zm23 0a5.002 5.002 0 0 0 9.686 0zM8.137 21h8.725L12.5 10.704zm23 0h8.725L35.5 10.704z" />
                            </svg>
                            <h3 className="card-grid__title text-primary-plastic_recovery">Balancing User Needs & Business Complexity</h3>
                            <p className="card-grid__text">The project taught me that designing for a large
                                organization is not simply about creating a visually clear interface. The <span
                                    className="font-bold">solution also needs to
                                    accommodate business processes</span> , existing systems, data requirements, and operational
                                constraints.
                                <br /><br />
                                As a result, I became more aware of designing solutions that are not only usable for the end
                                user, but also feasible and scalable within the organization's existing ecosystem.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer px-12 pt-12" id="portfolioFooter">
                <div className="container mx-auto flex flex-col md:flex-row justify-between gap-4">
                </div>
            </footer>
        </div>
    );
}