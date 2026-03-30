"use client";
import React, { useEffect, useState } from "react";
import {
  Shield, Eye, Database, Cookie, Share2, Lock,
  ExternalLink, UserCheck, Baby, RefreshCw, Mail, ChevronRight,
} from "lucide-react";

/* ─── Types ─────────────────────────────────────────── */
type Section = {
  id: string;
  icon: React.ElementType;
  title: string;
  content: React.ReactNode;
};

/* ─── Shared sub-components ─────────────────────────── */
const Body = ({ children }: { children: React.ReactNode }) => (
  <p className="text-black  text-md leading-[1.8] mb-3">{children}</p>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h4 className="text-black  font-semibold text-md uppercase tracking-widest mt-5 mb-2">
    {children}
  </h4>
);

const PPList = ({ items }: { items: string[] }) => (
  <ul className="flex flex-col gap-2 my-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2.5 text-black text-[0.9375rem] leading-relaxed">
        <span className="mt-[0.45rem] w-2 h-2 rounded-full bg-black  " />
        {item}
      </li>
    ))}
  </ul>
);

const PPLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-blue-600 underline underline-offset-2 font-medium hover:text-orange-600 transition-colors">
    {children}
  </a>
);

/* ─── Sections data ─────────────────────────────────── */
const sections: Section[] = [
  {
    id: "information-we-collect",
    icon: Database,
    title: "Information We Collect",
    content: (
      <>
        <Body>We may collect personal and non-personal information from you in the following ways:</Body>
        <SubHeading>1. Personal Information</SubHeading>
        <Body>You may voluntarily provide personal information, including but not limited to:</Body>
        <PPList items={[
          "Name",
          "Email address",
          "Phone number",
          "Company name",
          "Any information submitted via contact forms, inquiry forms, or email communication",
        ]} />
        <SubHeading>2. Non-Personal Information</SubHeading>
        <Body>We automatically collect certain non-personal information such as:</Body>
        <PPList items={[
          "IP address",
          "Browser type and version",
          "Device information",
          "Pages visited and time spent on our website",
          "Referring URLs",
        ]} />
        <Body>This information helps us improve our website performance and user experience.</Body>
      </>
    ),
  },
  {
    id: "how-we-use",
    icon: Eye,
    title: "How We Use Your Information",
    content: (
      <>
        <Body>We use the collected information for purposes including:</Body>
        <PPList items={[
          "Responding to inquiries and requests",
          "Providing and managing our services",
          "Improving website functionality and content",
          "Sending updates, marketing, or promotional communications (only if opted in)",
          "Ensuring website security and preventing fraudulent activity",
        ]} />
      </>
    ),
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies and Tracking Technologies",
    content: (
      <>
        <Body>WebTechnoMind may use cookies, web beacons, and similar technologies to:</Body>
        <PPList items={[
          "Enhance user experience",
          "Analyze website traffic and usage patterns",
          "Store user preferences",
        ]} />
        <Body>
          You can choose to disable cookies through your browser settings. Please note that
          disabling cookies may affect website functionality.
        </Body>
      </>
    ),
  },
  {
    id: "sharing",
    icon: Share2,
    title: "Sharing of Information",
    content: (
      <>
        <Body>
          We do not sell, trade, or rent your personal information to third parties. We may
          share information only in the following situations:
        </Body>
        <PPList items={[
          "With trusted service providers who assist in operating our website or services",
          "To comply with legal obligations or protect our legal rights",
          "In the event of a business transfer, merger, or acquisition",
        ]} />
        <Body>All third parties are required to keep your information confidential.</Body>
      </>
    ),
  },
  {
    id: "data-security",
    icon: Lock,
    title: "Data Security",
    content: (
      <Body>
        We implement appropriate technical and organizational security measures to protect your
        personal information against unauthorized access, alteration, disclosure, or destruction.
        However, no method of data transmission over the internet is 100% secure.
      </Body>
    ),
  },
  {
    id: "third-party",
    icon: ExternalLink,
    title: "Third-Party Links",
    content: (
      <Body>
        Our website may contain links to third-party websites. We are not responsible for the
        privacy practices or content of those external websites. We encourage you to review
        their privacy policies before providing any personal information.
      </Body>
    ),
  },
  {
    id: "your-rights",
    icon: UserCheck,
    title: "Your Data Protection Rights",
    content: (
      <>
        <Body>Depending on your location, you may have the right to:</Body>
        <PPList items={[
          "Access your personal data",
          "Request correction or deletion of your data",
          "Withdraw consent for data processing",
          "Object to certain uses of your data",
        ]} />
        <Body>
          To exercise these rights, please contact us at{" "}
          <PPLink href="mailto:info@webtechnomind.com">info@webtechnomind.com</PPLink>.
        </Body>
      </>
    ),
  },
  {
    id: "children",
    icon: Baby,
    title: "Children's Information",
    content: (
      <Body>
        WebTechnoMind does not knowingly collect personal information from children under the
        age of 13. If you believe your child has provided personal information on our website,
        please contact us immediately and we will promptly remove such information.
      </Body>
    ),
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "Changes to This Privacy Policy",
    content: (
      <Body>
        We may update this Privacy Policy from time to time. Any changes will be posted on
        this page with an updated effective date. We encourage you to review this page
        periodically.
      </Body>
    ),
  },
  {
    id: "contact",
    icon: Mail,
    title: "Contact Us",
    content: (
      <>
        <Body>
          If you have any questions or concerns about this Privacy Policy or our data
          practices, please contact us:
        </Body>
        <div className="mt-4 flex flex-col gap-3 bg-gray-50 border border-gray-100 rounded-xl px-5 py-4">
          <a
            href="mailto:info@webtechnomind.com"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-orange-600 transition-colors"
          >
            <Mail className="w-4 h-4" />
            info@webtechnomind.com
          </a>
          <a
            href="https://www.webtechnomind.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-orange-600 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            www.webtechnomind.com
          </a>
        </div>
      </>
    ),
  },
];

/* ─── Active section hook ───────────────────────────── */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

/* ─── Page ───────────────────────────────────────────── */
const Page = () => {
  const ids = sections.map((s) => s.id);
  const active = useActiveSection(ids);

  return (
    <div className="bg-[#FAFBFC] min-h-screen pt-4">

      {/* ── Hero ───────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-white border-b border-gray-100">
        <div
          className="absolute top-0 right-0 w-[600px] h-[300px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #1D74CF, #D04425)" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-100 bg-blue-50 mb-6">
            <Shield className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[0.7rem] font-bold text-blue-600 uppercase tracking-widest">
              Privacy Policy
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.05] tracking-tight mb-4">
            Your Privacy,{" "}
            <span
              className="italic bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #1D74CF 0%, #b33b41 60%, #D04425 100%)" }}
            >
              Our Commitment.
            </span>
          </h1>

          <p className="text-black text-lg max-w-xl leading-relaxed mb-8">
            At WebTechnoMind, we are committed to protecting your privacy and ensuring the
            security of your personal information. This policy explains how we collect, use,
            and safeguard your data.
          </p>

          {/* Meta strip */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Effective: January 2025
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Applies to: webtechnomind.com
            </span>
            <a
              href="mailto:info@webtechnomind.com"
              className="flex items-center gap-1.5 text-blue-500 hover:text-blue-700 transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5" />
              info@webtechnomind.com
            </a>
          </div>
        </div>
      </div>

      {/* ── Body ───────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex gap-10 items-start">

          {/* Sticky Sidebar */}
          <aside className="hidden lg:flex flex-col gap-0.5 w-52 flex-shrink-0 sticky top-24">
            <p className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest mb-2 px-2">
              On this page
            </p>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`flex items-center gap-2 text-[0.8rem] font-medium px-3 py-2 rounded-lg border transition-all duration-200 truncate ${
                  active === s.id
                    ? "text-blue-600 bg-blue-50 border-blue-100 font-semibold"
                    : "text-black border-transparent hover:text-blue-500 hover:bg-blue-50/50"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200 ${
                    active === s.id ? "bg-gradient-to-br from-[#1D74CF] to-[#D04425]" : "bg-gray-200"
                  }`}
                />
                {s.title}
              </a>
            ))}
          </aside>

          {/* Content cards */}
          <div className="flex-1 flex flex-col gap-4 min-w-0">
            {sections.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-gray-200 hover:shadow-sm transition-all duration-300 scroll-mt-24"
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-blue-50 to-orange-50 border border-blue-100/60">
                    <s.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="text-[1.25rem] font-bold text-gray-500 tracking-widest flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-black font-bold text-2xl leading-tight truncate">
                      {s.title}
                    </h3>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-200 flex-shrink-0" />
                </div>

                {/* Gradient divider */}
                <div className="h-px mb-5 bg-gradient-to-r from-gray-300 via-blue-100 to-transparent" />

                {/* Section content */}
                <div>{s.content}</div>
              </div>
            ))}

            {/* Footer note */}
            <div className="rounded-xl border border-dashed border-gray-200 bg-white px-6 py-4 flex items-start gap-3">
              <Shield className="w-4 h-4 text-blue-300 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-400 leading-relaxed">
                This Privacy Policy is governed by applicable data protection laws.
                WebTechnoMind reserves the right to update this document. Continued use of
                our website following any changes constitutes your acceptance of the revised
                policy.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;