import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const seoData: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  "/": {
    title: "1zero | Architects of Impact",
    description:
      "We build agentic infrastructure that allows mission-led teams to do 10x more with their existing resources. Stop fighting your systems and replace messy middleware with digital foundations that connect, scale, and act.",
  },

  "/about": {
    title: "About 1zero | Technology for Mission-Led Teams",
    description:
      "Learn about 1zero and how we help mission-led teams modernize, connect, and scale their technology foundations.",
  },

  "/services": {
    title: "Services | AI-First Technology Solutions | 1zero",
    description:
      "Explore 1zero's technology services, from AI-first platforms and digital foundations to development teams and fractional CTO leadership.",
  },

  "/portfolio": {
    title: "Projects & Case Studies | 1zero",
    description:
      "Explore projects and case studies showing how 1zero helps mission-led organizations modernize technology and create scalable digital foundations.",
  },

  "/contact": {
    title: "Contact 1zero | Let's Build What's Next",
    description:
      "Get in touch with 1zero to discuss your technology challenges, digital foundations, and opportunities to scale your impact.",
  },

  "/book": {
    title: "Book a Consultation | 1zero",
    description:
      "Book a conversation with 1zero to explore your technology needs, challenges, and opportunities for growth.",
  },
};

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    const currentPage = seoData[location.pathname] ?? seoData["/"];
    const canonicalPath = location.pathname === "/"
      ? "/"
      : location.pathname.replace(/\/+$/, "");
    const canonicalUrl = `https://1zero.biz${canonicalPath}`;

    // Title
    document.title = currentPage.title;

    // Meta description
    let description = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.content = currentPage.description;

    // OG Title
    let ogTitle = document.querySelector(
      'meta[property="og:title"]'
    ) as HTMLMetaElement | null;

    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }

    ogTitle.content = currentPage.title;

    // OG Description
    let ogDescription = document.querySelector(
      'meta[property="og:description"]'
    ) as HTMLMetaElement | null;

    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }

    ogDescription.content = currentPage.description;

    // OG URL
    let ogUrl = document.querySelector(
      'meta[property="og:url"]'
    ) as HTMLMetaElement | null;

    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }

    ogUrl.content = canonicalUrl;

    // Canonical URL
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;
  }, [location.pathname]);

  return null;
}