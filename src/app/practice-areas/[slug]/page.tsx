import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowLeft, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { notFound } from "next/navigation";
import AreasImage from "../../../../public/about.jpg";
import Law9 from "../../../../public/law9.jpg";

export default async function PracticeAreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const practiceArea = practiceAreas.find((area) => area.slug === slug);

  if (!practiceArea) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="relative bg-[#0A2342] text-white">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src={AreasImage}
              alt={practiceArea.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Link
                href="/practice-areas"
                className="mb-6 inline-flex items-center text-gray-300 hover:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Practice Areas
              </Link>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                {practiceArea.title}
              </h1>
              <p className="text-lg text-gray-200 md:text-xl">
                {practiceArea.description}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#0A2342] sm:text-4xl">
                  Overview
                </h2>
                <div className="mt-6 space-y-4 text-gray-600">
                  {practiceArea.overview.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src={Law9}
                  alt={`${practiceArea.title} services`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#0A2342] sm:text-4xl">
                Our Services
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Comprehensive {practiceArea.title.toLowerCase()} services
                tailored to your specific needs
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {practiceArea.services.map((service, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg"
                >
                  <h3 className="mb-3 text-xl font-bold text-[#0A2342]">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#0A2342] sm:text-4xl">
                Why Choose Harrison, Blackwell & Associates
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Our approach to {practiceArea.title.toLowerCase()} sets us apart
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {practiceArea.whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#0A2342]/10">
                    <ChevronRight className="h-6 w-6 text-[#0A2342]" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-[#0A2342]">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#0A2342] sm:text-4xl">
                Our {practiceArea.title} Team
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Meet our experienced attorneys specializing in{" "}
                {practiceArea.title.toLowerCase()}
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {practiceArea.team.map((member) => (
                <div
                  key={member.name}
                  className="group overflow-hidden rounded-lg border border-gray-200 transition-all hover:border-[#D4AF37] hover:shadow-md"
                >
                  <div className="relative h-80 w-full">
                    {/* <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform group-hover:scale-105"
                    /> */}
                    <User className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0A2342]">
                      {member.name}
                    </h3>
                    <p className="mb-4 text-[#D4AF37]">{member.title}</p>
                    <p className="mb-4 text-gray-600">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-[#0A2342] p-8 text-white shadow-lg sm:p-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Schedule a {practiceArea.title} Consultation
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
                  Our experienced {practiceArea.title.toLowerCase()} attorneys
                  are ready to help you navigate your legal challenges.
                </p>
                <div className="mt-8">
                  <Link href="/schedule-consultation">
                    <Button
                      className="bg-[#D4AF37] text-[#0A2342] hover:bg-[#C4A030]"
                      size="lg"
                    >
                      Schedule a Consultation
                    </Button>
                  </Link>
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

const practiceAreas = [
  {
    title: "Corporate Law",
    slug: "corporate-law",
    description:
      "Comprehensive legal services for businesses of all sizes, including formation, governance, contracts, mergers and acquisitions, and compliance.",
    overview: [
      "Our Corporate Law practice provides comprehensive legal services to businesses at every stage of their development, from formation and startup to growth, maturity, and exit strategies.",
      "We work with companies of all sizes, from emerging startups to established multinational corporations, providing tailored legal solutions that address their specific needs and objectives.",
      "Our attorneys have extensive experience in corporate governance, mergers and acquisitions, securities law, corporate finance, and regulatory compliance, allowing us to offer strategic guidance on a wide range of business matters.",
    ],
    services: [
      {
        title: "Business Formation & Structuring",
        description:
          "Guidance on entity selection, formation, and structuring to align with your business goals and minimize legal and tax implications.",
      },
      {
        title: "Corporate Governance",
        description:
          "Advice on board matters, fiduciary duties, shareholder rights, corporate policies, and best practices for effective governance.",
      },
      {
        title: "Mergers & Acquisitions",
        description:
          "Comprehensive representation in mergers, acquisitions, divestitures, joint ventures, and strategic alliances.",
      },
      {
        title: "Securities Law Compliance",
        description:
          "Assistance with public and private offerings, SEC reporting requirements, and securities law compliance.",
      },
      {
        title: "Commercial Contracts",
        description:
          "Drafting, negotiation, and review of various commercial agreements, including supply, distribution, licensing, and service agreements.",
      },
      {
        title: "Corporate Finance",
        description:
          "Legal support for debt and equity financings, venture capital investments, and other capital-raising activities.",
      },
    ],
    whyChooseUs: [
      {
        title: "Business-Focused Approach",
        description:
          "We understand that legal advice must serve your business objectives. Our attorneys combine legal expertise with business acumen to provide practical solutions that support your goals.",
      },
      {
        title: "Industry Knowledge",
        description:
          "Our corporate team has deep experience across various industries, allowing us to provide sector-specific insights and tailored legal strategies.",
      },
      {
        title: "Relationship-Oriented Service",
        description:
          "We build long-term relationships with our clients, serving as trusted advisors who understand your business and can anticipate your legal needs.",
      },
      {
        title: "Integrated Approach",
        description:
          "Our corporate practice works seamlessly with other practice areas, providing comprehensive legal support for all aspects of your business.",
      },
    ],
    team: [
      {
        name: "Jonathan Harrison",
        title: "Managing Partner",
        description:
          "With over 30 years of experience in corporate law, Jonathan leads our corporate practice with distinction.",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        name: "David Chen",
        title: "Partner",
        description:
          "David specializes in mergers and acquisitions, having facilitated transactions valued at over $5 billion throughout his career.",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        name: "Rebecca Johnson",
        title: "Senior Associate",
        description:
          "Rebecca focuses on corporate governance and securities law, advising public and private companies on compliance matters.",
        image: "/placeholder.svg?height=600&width=400",
      },
    ],
  },
  {
    title: "Litigation",
    slug: "litigation",
    description:
      "Skilled representation in complex civil litigation matters, with a track record of successful outcomes for our clients in state and federal courts.",
    overview: [
      "Our Litigation practice provides strategic representation in complex disputes across state and federal courts, as well as in alternative dispute resolution forums.",
      "We represent clients in a wide range of commercial and civil litigation matters, bringing a combination of trial experience, industry knowledge, and strategic thinking to each case.",
      "Our litigators are known for their thorough preparation, persuasive advocacy, and commitment to achieving favorable outcomes while managing costs and risks effectively.",
    ],
    services: [
      {
        title: "Commercial Litigation",
        description:
          "Representation in business disputes, contract conflicts, partnership disagreements, and other commercial matters.",
      },
      {
        title: "Securities Litigation",
        description:
          "Defense against securities class actions, shareholder derivative suits, and regulatory enforcement actions.",
      },
      {
        title: "Employment Litigation",
        description:
          "Representation in employment disputes, including discrimination claims, wrongful termination, and non-compete enforcement.",
      },
      {
        title: "Intellectual Property Litigation",
        description:
          "Protection and enforcement of patents, trademarks, copyrights, and trade secrets through litigation.",
      },
      {
        title: "Real Estate Litigation",
        description:
          "Resolution of property disputes, construction conflicts, landlord-tenant issues, and land use matters.",
      },
      {
        title: "Alternative Dispute Resolution",
        description:
          "Representation in mediation, arbitration, and other alternative dispute resolution proceedings.",
      },
    ],
    whyChooseUs: [
      {
        title: "Trial-Ready Approach",
        description:
          "While we seek efficient resolutions, we prepare every case as if it will go to trial, giving us a strategic advantage in negotiations and in court.",
      },
      {
        title: "Strategic Case Management",
        description:
          "We develop tailored litigation strategies that align with your business objectives, considering both legal and practical implications.",
      },
      {
        title: "Cost-Effective Solutions",
        description:
          "Our litigation team employs efficient case management practices and explores alternative fee arrangements to provide cost-effective representation.",
      },
      {
        title: "Technology Advantage",
        description:
          "We utilize advanced litigation technology for case management, e-discovery, and trial presentation to enhance efficiency and effectiveness.",
      },
    ],
    team: [
      {
        name: "Elizabeth Blackwell",
        title: "Senior Partner",
        description:
          "Elizabeth leads our litigation practice with over 25 years of experience in complex commercial disputes.",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        name: "James Wilson",
        title: "Partner",
        description:
          "James specializes in securities litigation and has successfully defended numerous class action lawsuits.",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        name: "Maria Rodriguez",
        title: "Senior Associate",
        description:
          "Maria focuses on employment litigation and has represented clients in state and federal courts nationwide.",
        image: "/placeholder.svg?height=600&width=400",
      },
    ],
  },
  {
    title: "Real Estate Law",
    slug: "real-estate-law",
    description:
      "Expert guidance on real estate transactions, development, leasing, zoning, land use, and property disputes for developers, investors, and property owners.",
    overview: [
      "Our Real Estate practice provides comprehensive legal services for all aspects of real estate transactions, development, and disputes.",
      "We represent developers, investors, lenders, landlords, tenants, and property owners in matters ranging from routine transactions to complex development projects and litigation.",
      "Our attorneys combine deep knowledge of real estate law with practical business insights to help clients navigate the legal complexities of real estate matters while achieving their business objectives.",
    ],
    services: [
      {
        title: "Real Estate Transactions",
        description:
          "Representation in the acquisition, disposition, and financing of commercial and residential properties.",
      },
      {
        title: "Development & Construction",
        description:
          "Legal guidance for development projects, including land use approvals, construction contracts, and environmental compliance.",
      },
      {
        title: "Leasing",
        description:
          "Drafting and negotiation of commercial and residential leases for landlords and tenants.",
      },
      {
        title: "Land Use & Zoning",
        description:
          "Assistance with zoning approvals, variances, environmental permits, and regulatory compliance.",
      },
      {
        title: "Real Estate Finance",
        description:
          "Representation in mortgage financing, construction loans, mezzanine financing, and other real estate capital transactions.",
      },
      {
        title: "Real Estate Litigation",
        description:
          "Resolution of property disputes, title issues, construction defects, and landlord-tenant conflicts.",
      },
    ],
    whyChooseUs: [
      {
        title: "Industry Experience",
        description:
          "Our real estate attorneys have extensive experience across all property types and transaction structures, providing valuable insights for your specific situation.",
      },
      {
        title: "Local Knowledge",
        description:
          "We have deep familiarity with local real estate markets, regulations, and approval processes, allowing us to navigate regional complexities effectively.",
      },
      {
        title: "Full-Service Approach",
        description:
          "Our real estate practice works seamlessly with our tax, environmental, and litigation teams to address all aspects of your real estate matters.",
      },
      {
        title: "Practical Solutions",
        description:
          "We focus on practical, business-oriented solutions that address legal issues while supporting your investment and development objectives.",
      },
    ],
    team: [
      {
        name: "Michael Reynolds",
        title: "Partner",
        description:
          "Michael leads our real estate practice with over 20 years of experience in complex transactions and development projects.",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        name: "Jennifer Park",
        title: "Partner",
        description:
          "Jennifer specializes in commercial leasing and has represented both landlords and tenants in significant lease transactions.",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        name: "Robert Thompson",
        title: "Senior Associate",
        description:
          "Robert focuses on land use and zoning matters, helping clients navigate complex regulatory approval processes.",
        image: "/placeholder.svg?height=600&width=400",
      },
    ],
  },
  {
    title: "Intellectual Property",
    slug: "intellectual-property",
    description:
      "Protection and enforcement of patents, trademarks, copyrights, and trade secrets, along with IP licensing and litigation services.",
    overview: [
      "Our Intellectual Property practice helps clients protect, manage, and leverage their intellectual property assets in today's innovation-driven economy.",
      "We provide comprehensive IP services, including prosecution, portfolio management, licensing, transactions, and litigation across patents, trademarks, copyrights, and trade secrets.",
      "Our attorneys combine legal expertise with technical knowledge in various fields, allowing us to understand the unique aspects of your intellectual property and develop effective protection strategies.",
    ],
    services: [
      {
        title: "Patent Prosecution",
        description:
          "Preparation and prosecution of patent applications in the U.S. and internationally across various technical fields.",
      },
      {
        title: "Trademark Registration",
        description:
          "Trademark clearance, registration, maintenance, and portfolio management domestically and globally.",
      },
      {
        title: "Copyright Protection",
        description:
          "Registration and enforcement of copyrights for various creative works and digital content.",
      },
      {
        title: "IP Licensing & Transactions",
        description:
          "Drafting and negotiation of licensing agreements, technology transfers, and IP aspects of corporate transactions.",
      },
      {
        title: "Trade Secret Protection",
        description:
          "Development of trade secret protection programs and enforcement of trade secret rights.",
      },
      {
        title: "IP Litigation",
        description:
          "Representation in patent, trademark, copyright, and trade secret disputes in courts and before administrative bodies.",
      },
    ],
    whyChooseUs: [
      {
        title: "Technical Expertise",
        description:
          "Our IP attorneys include professionals with advanced degrees and industry experience in engineering, computer science, life sciences, and other technical fields.",
      },
      {
        title: "Strategic Approach",
        description:
          "We develop IP strategies that align with your business objectives, focusing on protecting assets that provide competitive advantage.",
      },
      {
        title: "Global Perspective",
        description:
          "Through our network of foreign associates, we help clients protect and enforce their IP rights worldwide.",
      },
      {
        title: "Business Integration",
        description:
          "We integrate IP considerations into your overall business strategy, helping you maximize the value of your intellectual assets.",
      },
    ],
    team: [
      {
        name: "Sarah Chen",
        title: "Partner",
        description:
          "Sarah leads our IP practice with expertise in patent prosecution and litigation, particularly in the technology sector.",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        name: "Thomas Wright",
        title: "Partner",
        description:
          "Thomas specializes in trademark law and has managed global trademark portfolios for numerous Fortune 500 companies.",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        name: "Lisa Johnson",
        title: "Senior Associate",
        description:
          "Lisa focuses on IP transactions and licensing, with particular expertise in the life sciences industry.",
        image: "/placeholder.svg?height=600&width=400",
      },
    ],
  },
  {
    title: "Employment Law",
    slug: "employment-law",
    description:
      "Counsel for employers and employees on workplace issues, compliance, contracts, policies, discrimination claims, and dispute resolution.",
    overview: [
      "Our Employment Law practice provides comprehensive guidance to employers on all aspects of the employment relationship, from hiring to termination and beyond.",
      "We help businesses navigate the complex landscape of employment laws and regulations while developing practical policies and procedures that support operational needs.",
      "Our attorneys represent employers in litigation and administrative proceedings, while also providing proactive counseling to prevent disputes and minimize legal risks.",
    ],
    services: [
      {
        title: "Employment Policies & Handbooks",
        description:
          "Development of employee handbooks, workplace policies, and compliance programs tailored to your business.",
      },
      {
        title: "Employment Agreements",
        description:
          "Drafting and negotiation of employment contracts, non-compete agreements, and severance arrangements.",
      },
      {
        title: "Workplace Investigations",
        description:
          "Conducting and advising on internal investigations of workplace misconduct, discrimination, and harassment claims.",
      },
      {
        title: "Compliance Counseling",
        description:
          "Guidance on compliance with federal, state, and local employment laws, including wage and hour, leave, and anti-discrimination laws.",
      },
      {
        title: "Employment Litigation",
        description:
          "Defense against discrimination, harassment, wrongful termination, wage and hour, and other employment claims.",
      },
      {
        title: "Labor Relations",
        description:
          "Representation in union organizing campaigns, collective bargaining, and labor disputes.",
      },
    ],
    whyChooseUs: [
      {
        title: "Practical Guidance",
        description:
          "We provide practical, business-oriented advice that balances legal compliance with operational realities and business objectives.",
      },
      {
        title: "Preventive Approach",
        description:
          "Our focus on preventive counseling helps clients avoid costly disputes through effective policies, training, and early intervention.",
      },
      {
        title: "Industry Knowledge",
        description:
          "We understand the unique employment challenges in various industries, allowing us to provide sector-specific guidance and solutions.",
      },
      {
        title: "Responsive Service",
        description:
          "We recognize that employment issues often require immediate attention and provide responsive service to address urgent workplace matters.",
      },
    ],
    team: [
      {
        name: "Katherine Martinez",
        title: "Partner",
        description:
          "Katherine leads our employment practice with over 15 years of experience representing employers in various industries.",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        name: "Daniel Brown",
        title: "Partner",
        description:
          "Daniel specializes in employment litigation and has successfully defended numerous discrimination and wage claims.",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        name: "Amanda Wilson",
        title: "Senior Associate",
        description:
          "Amanda focuses on employment counseling and compliance, helping employers develop effective workplace policies.",
        image: "/placeholder.svg?height=600&width=400",
      },
    ],
  },
  {
    title: "Estate Planning",
    slug: "estate-planning",
    description:
      "Personalized estate planning services, including wills, trusts, probate, tax planning, and asset protection strategies for individuals and families.",
    overview: [
      "Our Estate Planning practice provides comprehensive services to help individuals and families preserve and transfer wealth while minimizing tax implications.",
      "We develop customized estate plans that address each client's unique circumstances, family dynamics, and financial objectives.",
      "Our attorneys guide clients through all aspects of estate planning, administration, and related tax matters, providing peace of mind and ensuring their wishes are carried out effectively.",
    ],
    services: [
      {
        title: "Wills & Trusts",
        description:
          "Drafting of wills, revocable living trusts, and specialized trusts to meet specific estate planning objectives.",
      },
      {
        title: "Estate & Gift Tax Planning",
        description:
          "Strategic planning to minimize estate, gift, and generation-skipping transfer taxes while achieving wealth transfer goals.",
      },
      {
        title: "Business Succession Planning",
        description:
          "Development of plans for the orderly transition of family businesses to the next generation or other successors.",
      },
      {
        title: "Probate & Trust Administration",
        description:
          "Guidance through the probate process and administration of trusts following a death.",
      },
      {
        title: "Asset Protection",
        description:
          "Implementation of strategies to protect assets from potential creditors and legal claims.",
      },
      {
        title: "Charitable Planning",
        description:
          "Creation of charitable trusts, foundations, and other vehicles to achieve philanthropic objectives while maximizing tax benefits.",
      },
    ],
    whyChooseUs: [
      {
        title: "Personalized Approach",
        description:
          "We take the time to understand your unique circumstances, values, and goals to develop an estate plan that truly reflects your wishes.",
      },
      {
        title: "Integrated Planning",
        description:
          "Our estate planning team works closely with our tax, business, and real estate practices to address all aspects of your wealth management needs.",
      },
      {
        title: "Technical Expertise",
        description:
          "Our attorneys have advanced training in estate and tax law, allowing us to develop sophisticated strategies for complex estates.",
      },
      {
        title: "Long-Term Relationship",
        description:
          "We build lasting relationships with our clients, providing ongoing guidance as their circumstances and the legal landscape evolve.",
      },
    ],
    team: [
      {
        name: "Richard Thompson",
        title: "Partner",
        description:
          "Richard leads our estate planning practice with over 25 years of experience in complex estate and tax matters.",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        name: "Susan Miller",
        title: "Partner",
        description:
          "Susan specializes in business succession planning and has helped numerous family businesses transition to the next generation.",
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        name: "David Clark",
        title: "Senior Associate",
        description:
          "David focuses on trust administration and probate matters, guiding families through the estate administration process.",
        image: "/placeholder.svg?height=600&width=400",
      },
    ],
  },
];
