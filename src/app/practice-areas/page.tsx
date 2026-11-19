import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AreasImage from "../../../public/about.jpg";
import Law8 from "../../../public/law8.jpg";

export default function PracticeAreasPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="relative bg-[#0A2342] text-white">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src={AreasImage}
              alt="Practice areas"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Practice Areas
              </h1>
              <p className="text-lg text-gray-200 md:text-xl">
                Comprehensive legal services tailored to your specific needs
                across a wide range of practice areas.
              </p>
            </div>
          </div>
        </section>

        {/* Practice Areas Overview */}
        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#0A2342] sm:text-4xl">
                Our Legal Expertise
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Steven Hamsworth & Asociados offers exceptional legal
                representation across a diverse range of practice areas. Our
                attorneys combine deep legal knowledge with industry-specific
                expertise to deliver tailored solutions for our clients.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {practiceAreas.map((area) => (
                <div
                  key={area.title}
                  className="group rounded-lg border border-gray-200 p-6 transition-all hover:border-[#D4AF37] hover:shadow-md"
                >
                  <div className="mb-4 h-12 w-12 rounded-full bg-[#0A2342]/10 p-2">
                    <div className="flex h-full w-full items-center justify-center">
                      <area.icon className="h-6 w-6 text-[#0A2342]" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#0A2342] group-hover:text-[#D4AF37]">
                    {area.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{area.description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-[#0A2342] transition-colors group-hover:text-[#D4AF37]"
                  >
                    Contact Us <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#0A2342] sm:text-4xl">
                Industries We Serve
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Our attorneys have extensive experience across a wide range of
                industries, allowing us to provide legal counsel that addresses
                the unique challenges and opportunities in your specific sector.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {industries.map((industry) => (
                <div
                  key={industry.name}
                  className="rounded-lg bg-white p-6 shadow-md"
                >
                  <h3 className="mb-3 text-lg font-bold text-[#0A2342]">
                    {industry.name}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {industry.sectors.map((sector, index) => (
                      <li key={index} className="flex items-center">
                        <ChevronRight className="mr-2 h-4 w-4 text-[#D4AF37]" />
                        {sector}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="relative h-[500px] overflow-hidden rounded-lg">
                <Image
                  src={Law8}
                  alt="Our approach"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#0A2342] sm:text-4xl">
                  Our Approach
                </h2>
                <div className="mt-6 space-y-4 text-gray-600">
                  <p>
                    At Steven Hamsworth & Asociados, we understand that each
                    client and legal matter is unique. Our approach is centered
                    on developing a deep understanding of your specific
                    situation, objectives, and concerns.
                  </p>
                  <p>
                    We begin by listening carefully to your needs and conducting
                    a thorough assessment of your legal matter. This allows us
                    to develop a comprehensive strategy tailored to your
                    specific goals and circumstances.
                  </p>
                  <p>
                    Our attorneys work collaboratively, drawing on the diverse
                    expertise across our firm to provide holistic solutions to
                    complex legal challenges. We maintain open communication
                    throughout the process, ensuring you are informed and
                    involved in key decisions.
                  </p>
                  <p>
                    While we strive to resolve matters efficiently and
                    cost-effectively, we are always prepared to vigorously
                    advocate for your interests when necessary. Our track record
                    of success in negotiations and litigation demonstrates our
                    commitment to achieving favorable outcomes for our clients.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <h3 className="text-lg font-bold text-[#0A2342]">
                      Client-Centered Focus
                    </h3>
                    <p className="text-gray-600">
                      We prioritize your needs and objectives, tailoring our
                      approach to achieve your specific goals.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <h3 className="text-lg font-bold text-[#0A2342]">
                      Strategic Thinking
                    </h3>
                    <p className="text-gray-600">
                      We develop comprehensive strategies that address both
                      immediate concerns and long-term implications.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <h3 className="text-lg font-bold text-[#0A2342]">
                      Practical Solutions
                    </h3>
                    <p className="text-gray-600">
                      We focus on delivering practical, business-oriented
                      solutions that address legal issues while supporting your
                      broader objectives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Representative Matters */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#0A2342] sm:text-4xl">
                Representative Matters
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                A selection of our recent work across various practice areas
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {representativeMatters.map((matter, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 text-sm font-medium text-[#D4AF37]">
                    {matter.practiceArea}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#0A2342]">
                    {matter.title}
                  </h3>
                  <p className="text-gray-600">{matter.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-[#0A2342] p-8 text-white shadow-lg sm:p-12">
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Discuss Your Legal Needs
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    Our attorneys are ready to help you navigate your legal
                    challenges. Contact us today to schedule a consultation and
                    learn how we can assist with your specific matter.
                  </p>
                  <div className="mt-8">
                    <Link href="/contact">
                      <button className="rounded-md bg-[#D4AF37] px-6 py-3 text-base font-medium text-[#0A2342] shadow-sm hover:bg-[#C4A030] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#0A2342]">
                        Contact Us
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong className="text-white">
                      Personalized Consultation:
                    </strong>{" "}
                    We offer personalized consultations to discuss your specific
                    legal needs and how our firm can assist you.
                  </p>
                  <p>
                    <strong className="text-white">Experienced Team:</strong>{" "}
                    Our attorneys bring decades of combined experience across
                    various practice areas and industries.
                  </p>
                  <p>
                    <strong className="text-white">
                      Client-Focused Approach:
                    </strong>{" "}
                    We prioritize understanding your objectives and developing
                    strategies tailored to your specific goals.
                  </p>
                  <p>
                    <strong className="text-white">Proven Results:</strong> Our
                    track record demonstrates our commitment to achieving
                    favorable outcomes for our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Data
import {
  Building2,
  Scale,
  Home,
  Lightbulb,
  Users,
  Scroll,
  Briefcase,
  FileText,
  Globe,
  ShieldCheck,
  Landmark,
  Banknote,
} from "lucide-react";

const practiceAreas = [
  {
    title: "Corporate Law",
    description:
      "Comprehensive legal services for businesses of all sizes, including formation, governance, contracts, mergers and acquisitions, and compliance.",
    slug: "corporate-law",
    icon: Building2,
  },
  {
    title: "Litigation",
    description:
      "Skilled representation in complex civil litigation matters, with a track record of successful outcomes for our clients in state and federal courts.",
    slug: "litigation",
    icon: Scale,
  },
  {
    title: "Real Estate Law",
    description:
      "Expert guidance on real estate transactions, development, leasing, zoning, land use, and property disputes for developers, investors, and property owners.",
    slug: "real-estate-law",
    icon: Home,
  },
  {
    title: "Intellectual Property",
    description:
      "Protection and enforcement of patents, trademarks, copyrights, and trade secrets, along with IP licensing and litigation services.",
    slug: "intellectual-property",
    icon: Lightbulb,
  },
  {
    title: "Employment Law",
    description:
      "Counsel for employers and employees on workplace issues, compliance, contracts, policies, discrimination claims, and dispute resolution.",
    slug: "employment-law",
    icon: Users,
  },
  {
    title: "Estate Planning",
    description:
      "Personalized estate planning services, including wills, trusts, probate, tax planning, and asset protection strategies for individuals and families.",
    slug: "estate-planning",
    icon: Scroll,
  },
  {
    title: "Mergers & Acquisitions",
    description:
      "Strategic guidance on mergers, acquisitions, divestitures, joint ventures, and other corporate transactions for businesses of all sizes.",
    slug: "mergers-acquisitions",
    icon: Briefcase,
  },
  {
    title: "Tax Law",
    description:
      "Comprehensive tax planning, compliance, and controversy services for individuals, businesses, and nonprofit organizations.",
    slug: "tax-law",
    icon: FileText,
  },
  {
    title: "International Law",
    description:
      "Legal counsel on cross-border transactions, international trade, foreign investment, and global compliance matters.",
    slug: "international-law",
    icon: Globe,
  },
  {
    title: "Privacy & Data Security",
    description:
      "Guidance on privacy regulations, data protection, cybersecurity compliance, and breach response for businesses across industries.",
    slug: "privacy-data-security",
    icon: ShieldCheck,
  },
  {
    title: "Government Relations",
    description:
      "Strategic advocacy and compliance counsel for interactions with government agencies, regulatory matters, and public policy issues.",
    slug: "government-relations",
    icon: Landmark,
  },
  {
    title: "Banking & Finance",
    description:
      "Legal services for financial institutions and borrowers on lending transactions, regulatory compliance, and financial restructuring.",
    slug: "banking-finance",
    icon: Banknote,
  },
];

const industries = [
  {
    name: "Financial Services",
    sectors: [
      "Banking",
      "Investment Management",
      "Insurance",
      "FinTech",
      "Private Equity",
    ],
  },
  {
    name: "Technology",
    sectors: [
      "Software",
      "Hardware",
      "Telecommunications",
      "Cybersecurity",
      "Cloud Services",
    ],
  },
  {
    name: "Healthcare",
    sectors: [
      "Hospitals",
      "Pharmaceuticals",
      "Medical Devices",
      "Biotechnology",
      "Healthcare IT",
    ],
  },
  {
    name: "Real Estate",
    sectors: [
      "Commercial",
      "Residential",
      "Development",
      "REITs",
      "Hospitality",
    ],
  },
  {
    name: "Manufacturing",
    sectors: [
      "Automotive",
      "Consumer Goods",
      "Industrial Equipment",
      "Electronics",
      "Aerospace",
    ],
  },
  {
    name: "Energy",
    sectors: [
      "Oil & Gas",
      "Renewable Energy",
      "Utilities",
      "Mining",
      "Clean Technology",
    ],
  },
  {
    name: "Media & Entertainment",
    sectors: [
      "Digital Media",
      "Film & Television",
      "Publishing",
      "Music",
      "Gaming",
    ],
  },
  {
    name: "Retail & Consumer",
    sectors: [
      "E-commerce",
      "Luxury Goods",
      "Food & Beverage",
      "Apparel",
      "Consumer Electronics",
    ],
  },
];

const representativeMatters = [
  {
    practiceArea: "Corporate Law",
    title: "Cross-Border Acquisition",
    description:
      "Represented a Fortune 500 technology company in its $1.2 billion acquisition of a European software developer, including complex regulatory approvals across multiple jurisdictions.",
  },
  {
    practiceArea: "Litigation",
    title: "Securities Class Action Defense",
    description:
      "Successfully defended a publicly traded financial services company against a securities class action, resulting in a favorable settlement significantly below initial demands.",
  },
  {
    practiceArea: "Real Estate Law",
    title: "Mixed-Use Development Project",
    description:
      "Advised a real estate developer on all aspects of a $500 million mixed-use development project, including financing, land use approvals, construction contracts, and leasing.",
  },
  {
    practiceArea: "Intellectual Property",
    title: "Patent Portfolio Strategy",
    description:
      "Developed and implemented a comprehensive patent strategy for a biotechnology company, securing protection for key innovations and strengthening market position.",
  },
  {
    practiceArea: "Employment Law",
    title: "Executive Compensation",
    description:
      "Structured executive compensation packages for C-suite executives of a multinational corporation, addressing complex tax, securities, and governance considerations.",
  },
  {
    practiceArea: "Mergers & Acquisitions",
    title: "Healthcare Industry Consolidation",
    description:
      "Represented a private equity firm in the acquisition and consolidation of multiple healthcare providers, navigating complex regulatory requirements and integration challenges.",
  },
];
