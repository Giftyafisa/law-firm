import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Buildings from "../../public/buildings.jpg";
import Hero from "../../public/law.jpg";

import Tax from "../../public/tax.jpg";
import Property from "../../public/property.jpg";
import Documents from "../../public/documents.jpg";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="relative bg-[#0A2342]">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src={Buildings}
              alt="Law firm background"
              fill
              className="object-cover absolute"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
                Committed to Excellence in Legal Representation
              </h1>
              <p className="mb-8 text-lg text-gray-200 md:text-xl">
                With over 25 years of experience, our attorneys provide
                exceptional legal counsel and representation across a wide range
                of practice areas.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link href="/schedule-consultation">
                  <Button
                    className="bg-[#D4AF37] text-[#0A2342] hover:bg-[#C4A030]"
                    size="lg"
                  >
                    Schedule a Consultation
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Our Practice Areas
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#0A2342] sm:text-4xl">
                Our Practice Areas
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Comprehensive legal services tailored to your specific needs
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {practiceAreas.map((area) => (
                <div
                  key={area.title}
                  className="group rounded-lg border border-gray-200 p-6 transition-all hover:border-[#D4AF37] hover:shadow-md"
                >
                  <h3 className="mb-3 text-xl font-bold text-[#0A2342]">
                    {area.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{area.description}</p>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="inline-flex items-center text-[#0A2342] transition-colors hover:text-[#D4AF37]"
                  >
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/practice-areas">
                <Button
                  variant="outline"
                  className="border-[#0A2342] text-[#0A2342] hover:bg-[#0A2342] hover:text-white"
                >
                  View All Practice Areas
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Firm */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#0A2342] sm:text-4xl">
                  A Legacy of Legal Excellence Since 1998
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  For over two decades, Steven Hamsworth & Asociados has
                  been providing exceptional legal representation to individuals
                  and businesses throughout the region. Our firm was founded on
                  the principles of integrity, dedication, and personalized
                  service.
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Our team of experienced attorneys combines in-depth legal
                  knowledge with a commitment to achieving the best possible
                  outcomes for our clients. We understand that legal matters can
                  be complex and stressful, which is why we strive to provide
                  clear guidance and support throughout the entire process.
                </p>
                <div className="mt-8">
                  <Link href="/about">
                    <Button className="bg-[#0A2342] hover:bg-[#0A2342]/90">
                      Learn More About Our Firm
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src={Hero}
                  alt="Law firm team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Attorneys */}
        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#0A2342] sm:text-4xl">
                Our Attorneys
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Experienced legal professionals dedicated to your success
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {attorneys.map((attorney) => (
                <div
                  key={attorney.name}
                  className="group overflow-hidden rounded-lg border border-gray-200 transition-all hover:border-[#D4AF37] hover:shadow-md"
                >
                  <div className="relative h-80 w-full">
                    {/* <Image
                      src={attorney.image || "/placeholder.svg"}
                      alt={attorney.name}
                      fill
                      className="object-cover object-top transition-transform group-hover:scale-105"
                    /> */}
                    <User className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0A2342]">
                      {attorney.name}
                    </h3>
                    <p className="mb-4 text-[#D4AF37]">{attorney.title}</p>
                    <p className="mb-4 text-gray-600">{attorney.description}</p>
                    <Link
                      href={`/attorneys/${attorney.slug}`}
                      className="inline-flex items-center text-[#0A2342] transition-colors hover:text-[#D4AF37]"
                    >
                      View Profile <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-[#0A2342] text-[#0A2342] hover:bg-[#0A2342] hover:text-white"
                >
                  Learn More About Our Team
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#0A2342] py-16 text-white lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Client Testimonials
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                What our clients say about our legal services
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="rounded-lg bg-[#0D2E59] p-6">
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 fill-current text-[#D4AF37]"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-.181h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4 italic text-gray-300">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-300">{testimonial.case}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#0A2342] sm:text-4xl">
                Recent Case Results
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our track record of success in representing our clients
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {caseResults.map((result, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 p-6 transition-all hover:border-[#D4AF37] hover:shadow-md"
                >
                  <div className="mb-2 text-2xl font-bold text-[#D4AF37]">
                    {result.amount}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#0A2342]">
                    {result.title}
                  </h3>
                  <p className="text-gray-600">{result.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/practice-areas">
                <Button
                  variant="outline"
                  className="border-[#0A2342] text-[#0A2342] hover:bg-[#0A2342] hover:text-white"
                >
                  Explore Our Practice Areas
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-[#0A2342] p-8 text-white shadow-lg sm:p-12">
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Schedule a Consultation
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    Our attorneys are ready to help you with your legal needs.
                    Contact us today to schedule a confidential consultation.
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center">
                      <Mail className="mr-3 h-5 w-5 text-[#D4AF37]" />
                      <span>info@stevenhamsworth.com</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-3 h-5 w-5 text-[#D4AF37]" />
                      <span>
                        Madrid, Spain
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-3 h-5 w-5 text-[#D4AF37]" />
                      <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-6">
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="first-name"
                          className="mb-1 block text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="first-name"
                          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="last-name"
                          className="mb-1 block text-sm font-medium text-gray-700"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="last-name"
                          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="practice-area"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        Practice Area
                      </label>
                      <select
                        id="practice-area"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-[#D4AF37] focus:outline-none"
                        required
                      >
                        <option value="">Select a Practice Area</option>
                        {practiceAreas.map((area) => (
                          <option key={area.slug} value={area.slug}>
                            {area.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        Brief Description of Your Case
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none"
                        required
                      ></textarea>
                    </div>
                    <div>
                      <Button
                        className="w-full bg-[#0A2342] hover:bg-[#0A2342]/90"
                        type="submit"
                      >
                        Request Consultation
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500">
                      By submitting this form, you agree to our privacy policy
                      and terms of service.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#0A2342] sm:text-4xl">
                Legal Insights
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Stay informed with our latest articles and legal resources
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <div
                  key={post.title}
                  className="group overflow-hidden rounded-lg border border-gray-200 transition-all hover:border-[#D4AF37] hover:shadow-md"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 text-sm text-gray-500">
                      {post.date}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-[#0A2342]">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-gray-600">{post.excerpt}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-[#0A2342] transition-colors hover:text-[#D4AF37]"
                    >
                      Contact Us <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-[#0A2342] text-[#0A2342] hover:bg-[#0A2342] hover:text-white"
                >
                  Contact Us For More Information
                </Button>
              </Link>
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
    description:
      "Comprehensive legal services for businesses of all sizes, including formation, governance, contracts, and compliance.",
    slug: "corporate-law",
  },
  {
    title: "Litigation",
    description:
      "Skilled representation in complex civil litigation matters, with a track record of successful outcomes for our clients.",
    slug: "litigation",
  },
  {
    title: "Real Estate Law",
    description:
      "Expert guidance on real estate transactions, development, leasing, zoning, and property disputes.",
    slug: "real-estate-law",
  },
  {
    title: "Intellectual Property",
    description:
      "Protection and enforcement of patents, trademarks, copyrights, and trade secrets in various industries.",
    slug: "intellectual-property",
  },
  {
    title: "Employment Law",
    description:
      "Counsel for employers and employees on workplace issues, compliance, contracts, and dispute resolution.",
    slug: "employment-law",
  },
  {
    title: "Estate Planning",
    description:
      "Personalized estate planning services, including wills, trusts, probate, and asset protection strategies.",
    slug: "estate-planning",
  },
];

const attorneys = [
  {
    name: "Steven Hemsworth",
    title: "Managing Partner",
    description:
      "Steven Hemsworth leads the firm with distinction, combining deep legal experience with a practical, client-focused approach.",
    image: "/placeholder.svg?height=600&width=400",
    slug: "steven-hemsworth",
  },
  {
    name: "Elizabeth Blackwell",
    title: "Senior Partner",
    description:
      "Elizabeth specializes in complex litigation and has successfully represented clients in high-stakes cases.",
    image: "/placeholder.svg?height=600&width=400",
    slug: "elizabeth-blackwell",
  },
  {
    name: "Michael Reynolds",
    title: "Partner",
    description:
      "Michael's expertise in real estate law has made him a trusted advisor for developers and investors.",
    image: "/placeholder.svg?height=600&width=400",
    slug: "michael-reynolds",
  },
];

const testimonials = [
  {
    quote:
      "Steven Hamsworth & Asociados provided exceptional representation. Their attention to detail and strategic approach were invaluable.",
    name: "Sarah Johnson",
    case: "Corporate Merger",
  },
  {
    quote:
      "The intellectual property team secured our patents efficiently and effectively. Their expertise in our industry was evident throughout the process.",
    name: "David Chen",
    case: "Patent Application",
  },
  {
    quote:
      "During a complex real estate transaction, the firm's guidance was crucial. They anticipated issues before they arose and ensured a smooth closing.",
    name: "Robert Williams",
    case: "Commercial Real Estate Acquisition",
  },
];

const caseResults = [
  {
    amount: "$4.2 Million",
    title: "Commercial Contract Dispute",
    description:
      "Successfully represented a manufacturing company in a breach of contract case, securing a favorable settlement.",
  },
  {
    amount: "$2.8 Million",
    title: "Intellectual Property Infringement",
    description:
      "Obtained a significant judgment for a technology client whose patents were infringed by a competitor.",
  },
  {
    amount: "$3.5 Million",
    title: "Corporate Acquisition",
    description:
      "Negotiated a complex acquisition deal, saving our client millions through strategic tax planning and contract structuring.",
  },
  {
    amount: "$1.9 Million",
    title: "Employment Litigation",
    description:
      "Successfully defended a corporation against wrongful termination claims, significantly reducing potential liability.",
  },
];

const blogPosts = [
  {
    title: "Recent Changes to Corporate Tax Law: What Businesses Need to Know",
    excerpt:
      "An overview of the latest tax legislation and its implications for corporations of various sizes.",
    date: "May 2, 2025",
    image: Tax,
    slug: "corporate-tax-law-changes",
  },
  {
    title: "The Evolving Landscape of Intellectual Property Protection",
    excerpt:
      "How recent court decisions are shaping the future of patent, trademark, and copyright enforcement.",
    date: "April 18, 2025",
    image: Property,
    slug: "intellectual-property-landscape",
  },
  {
    title: "Essential Estate Planning Documents Everyone Should Have",
    excerpt:
      "A comprehensive guide to wills, trusts, powers of attorney, and other critical estate planning instruments.",
    date: "April 5, 2025",
    image: Documents,
    slug: "essential-estate-planning",
  },
];
