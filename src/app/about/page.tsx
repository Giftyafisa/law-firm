import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Law2 from "../../../public/law2.jpg";
import Law3 from "../../../public/law3.jpg";
import Law4 from "../../../public/law4.jpg";
import Law6 from "../../../public/law6.jpg";
import { User } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="relative bg-[#0A2342] text-white">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src={Law3}
              alt="Law firm office"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                About Our Firm
              </h1>
              <p className="text-lg text-gray-200 md:text-xl">
                A legacy of legal excellence and client-focused representation
                since 1998.
              </p>
            </div>
          </div>
        </section>

        {/* Firm History */}
        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#0A2342] sm:text-4xl">
                  Our History
                </h2>
                <div className="mt-6 space-y-4 text-gray-600">
                  <p>
                    Harrison, Blackwell & Associates was founded in 1998 by
                    Jonathan Harrison and Elizabeth Blackwell, two attorneys who
                    shared a vision of creating a law firm that combined legal
                    excellence with personalized client service.
                  </p>
                  <p>
                    Beginning with just five attorneys in a small office in
                    downtown New York, our firm has grown to include over 50
                    legal professionals across three offices. Throughout our
                    expansion, we have maintained our founding principles of
                    integrity, dedication, and results-oriented representation.
                  </p>
                  <p>
                    Over the past 25 years, we have established ourselves as a
                    leading law firm in the region, known for our expertise
                    across multiple practice areas and our commitment to
                    achieving favorable outcomes for our clients.
                  </p>
                  <p>
                    Today, Harrison, Blackwell & Associates serves a diverse
                    clientele ranging from individuals and small businesses to
                    Fortune 500 companies and international corporations. Our
                    growth and success are testaments to our unwavering
                    dedication to legal excellence and client satisfaction.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] overflow-hidden rounded-lg">
                <Image
                  src={Law2}
                  alt="Law firm history"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Values */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#0A2342] sm:text-4xl">
                Our Mission & Values
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                The principles that guide our practice and define our approach
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-lg bg-white p-6 shadow-md"
                >
                  <h3 className="mb-3 text-xl font-bold text-[#0A2342]">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#0A2342] sm:text-4xl">
                Our Leadership
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Meet the experienced attorneys who lead our firm
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {leadership.map((leader) => (
                <div key={leader.name} className="grid gap-6 md:grid-cols-3">
                  <div className="relative h-60 w-full overflow-hidden rounded-lg md:h-full">
                    {/* <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      fill
                      className="object-cover object-top"
                    /> */}
                    <User className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold text-[#0A2342]">
                      {leader.name}
                    </h3>
                    <p className="mb-4 text-[#D4AF37]">{leader.title}</p>
                    <p className="mb-4 text-gray-600">{leader.bio}</p>
                    <div className="text-sm text-gray-600">
                      <div>
                        <strong>Education:</strong> {leader.education}
                      </div>
                      <div>
                        <strong>Bar Admissions:</strong> {leader.barAdmissions}
                      </div>
                      {leader.awards && (
                        <div>
                          <strong>Awards:</strong> {leader.awards}
                        </div>
                      )}
                    </div>
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
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="relative h-[500px] overflow-hidden rounded-lg">
                <Image
                  src={Law4}
                  alt="Community involvement"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#0A2342] sm:text-4xl">
                  Community Involvement
                </h2>
                <div className="mt-6 space-y-4 text-gray-600">
                  <p>
                    At Harrison, Blackwell & Associates, we believe in giving
                    back to the communities we serve. Our commitment to
                    community involvement is an integral part of our {"firm's"}
                    culture and values.
                  </p>
                  <p>
                    Our attorneys and staff actively participate in various pro
                    bono initiatives, providing legal services to those who
                    cannot afford representation. We dedicate thousands of hours
                    annually to helping individuals and nonprofit organizations
                    navigate complex legal matters.
                  </p>
                  <p>
                    Beyond pro bono work, our firm supports numerous charitable
                    organizations through sponsorships, donations, and volunteer
                    efforts. We are particularly involved in educational
                    initiatives, environmental conservation, and programs that
                    promote access to justice.
                  </p>
                  <p>
                    We also encourage our team members to pursue their own
                    community service interests, offering flexible schedules and
                    resources to support their involvement in causes they are
                    passionate about.
                  </p>
                </div>
                <div className="mt-8">
                  <h3 className="mb-4 text-xl font-bold text-[#0A2342]">
                    Our Community Partners
                  </h3>
                  <ul className="list-inside list-disc space-y-2 text-gray-600">
                    <li>Legal Aid Society</li>
                    <li>City Bar Justice Center</li>
                    <li>Volunteer Lawyers for the Arts</li>
                    <li>{"Children's"} Rights Alliance</li>
                    <li>Environmental Defense Fund</li>
                    <li>Local Education Foundation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#0A2342] sm:text-4xl">
                  Careers at Our Firm
                </h2>
                <div className="mt-6 space-y-4 text-gray-600">
                  <p>
                    Harrison, Blackwell & Associates is always seeking talented
                    legal professionals who share our commitment to excellence
                    and client service. We offer a collaborative work
                    environment where attorneys can grow their practice and
                    develop their skills.
                  </p>
                  <p>
                    Our firm provides competitive compensation, comprehensive
                    benefits, and opportunities for professional development. We
                    value diversity and inclusion, and we are committed to
                    creating a workplace where all team members can thrive.
                  </p>
                  <p>
                    Whether you are an experienced attorney looking for a new
                    challenge or a recent law school graduate beginning your
                    career, we invite you to explore opportunities with our
                    firm.
                  </p>
                </div>
                <div className="mt-8">
                  <h3 className="mb-4 text-xl font-bold text-[#0A2342]">
                    Current Openings
                  </h3>
                  <ul className="space-y-4">
                    {openings.map((opening) => (
                      <li
                        key={opening.title}
                        className="rounded-lg border border-gray-200 p-4"
                      >
                        <h4 className="text-lg font-bold text-[#0A2342]">
                          {opening.title}
                        </h4>
                        <p className="mb-2 text-sm text-gray-500">
                          {opening.location} | {opening.type}
                        </p>
                        <p className="mb-4 text-gray-600">
                          {opening.description}
                        </p>
                        <Link href={`/careers/${opening.id}`}>
                          <Button
                            variant="outline"
                            className="border-[#0A2342] text-[#0A2342] hover:bg-[#0A2342] hover:text-white"
                          >
                            View Details
                          </Button>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button className="bg-[#0A2342] hover:bg-[#0A2342]/90">
                      Contact Us About Opportunities
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[600px] overflow-hidden rounded-lg">
                <Image
                  src={Law6}
                  alt="Law firm office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-[#0A2342] p-8 text-white shadow-lg sm:p-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Contact Our Firm
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
                  We welcome the opportunity to discuss your legal needs and how
                  our firm can assist you. Contact us today to schedule a
                  consultation with one of our experienced attorneys.
                </p>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button
                      className="bg-[#D4AF37] text-[#0A2342] hover:bg-[#C4A030]"
                      size="lg"
                    >
                      Contact Us
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

const values = [
  {
    title: "Excellence",
    description:
      "We are committed to providing the highest quality legal services, maintaining rigorous standards in our work, and continuously improving our skills and knowledge.",
  },
  {
    title: "Integrity",
    description:
      "We adhere to the highest ethical standards, maintaining honesty and transparency in all client interactions and professional relationships.",
  },
  {
    title: "Client Focus",
    description:
      "We prioritize understanding our clients' needs and objectives, tailoring our approach to achieve their specific goals while providing responsive and attentive service.",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of teamwork, leveraging the diverse expertise of our attorneys to develop comprehensive solutions to complex legal challenges.",
  },
  {
    title: "Innovation",
    description:
      "We embrace creative thinking and innovative approaches to legal problems, staying ahead of evolving legal trends and technologies.",
  },
  {
    title: "Community",
    description:
      "We are dedicated to giving back to the communities we serve through pro bono work, charitable contributions, and active civic engagement.",
  },
];

const leadership = [
  {
    name: "Jonathan Harrison",
    title: "Founding Partner & Managing Partner",
    bio: "Jonathan Harrison has over 30 years of experience in corporate law and complex commercial litigation. As the firm's managing partner, he oversees the strategic direction of the firm while maintaining an active practice focused on high-stakes business disputes and corporate governance matters.",
    education: "J.D., Harvard Law School; B.A., Yale University",
    barAdmissions: "New York, Connecticut, U.S. Supreme Court",
    awards:
      "Named to Best Lawyers in America for 15 consecutive years; Chambers USA Leading Individual",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    name: "Elizabeth Blackwell",
    title: "Founding Partner & Head of Litigation",
    bio: "Elizabeth Blackwell leads the firm's litigation practice, specializing in complex commercial disputes, securities litigation, and class action defense. Her strategic approach and courtroom expertise have resulted in numerous favorable outcomes for the firm's clients in state and federal courts.",
    education: "J.D., Columbia Law School; B.A., Princeton University",
    barAdmissions:
      "New York, New Jersey, U.S. Court of Appeals for the Second Circuit",
    awards:
      "Recognized by Legal 500 as a Leading Lawyer; New York Super Lawyers Top 50 Women Attorneys",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    name: "Michael Reynolds",
    title: "Partner & Head of Real Estate Practice",
    bio: "Michael Reynolds brings over 25 years of experience to his role as head of the firm's real estate practice. He advises clients on complex real estate transactions, development projects, financing, and land use matters, representing developers, investors, and financial institutions.",
    education:
      "J.D., New York University School of Law; B.S., Cornell University",
    barAdmissions: "New York, Massachusetts",
    image: "/placeholder.svg?height=600&width=400",
  },
  {
    name: "Sarah Chen",
    title: "Partner & Head of Intellectual Property",
    bio: "Sarah Chen leads the firm's intellectual property practice, focusing on patent prosecution, trademark protection, and IP litigation. With a background in computer science, she brings technical expertise to her representation of clients in the technology and life sciences sectors.",
    education: "J.D., Stanford Law School; B.S. in Computer Science, MIT",
    barAdmissions: "New York, California, U.S. Patent and Trademark Office",
    image: "/placeholder.svg?height=600&width=400",
  },
];

const openings = [
  {
    id: "corporate-associate",
    title: "Corporate Associate",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Seeking a mid-level associate (3-5 years of experience) to join our corporate practice group. Experience in M&A, securities, and corporate governance required.",
  },
  {
    id: "litigation-associate",
    title: "Litigation Associate",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Looking for a junior associate (1-3 years of experience) to join our commercial litigation team. Strong research and writing skills essential.",
  },
  {
    id: "legal-assistant",
    title: "Legal Assistant",
    location: "Boston, MA",
    type: "Full-time",
    description:
      "Seeking an experienced legal assistant to support our real estate practice group. Prior law firm experience preferred.",
  },
];
