import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h1 className="text-3xl font-bold tracking-tight text-[#0A2342] sm:text-4xl md:text-5xl">
                Contact Our Firm
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                We welcome the opportunity to discuss your legal needs. Contact
                us today to schedule a consultation with one of our experienced
                attorneys.
              </p>
            </div>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <div className="rounded-lg bg-gray-50 p-8">
                  <h2 className="mb-6 text-2xl font-bold text-[#0A2342]">
                    Our Offices
                  </h2>
                  <div className="space-y-8">
                    {offices.map((office) => (
                      <div key={office.location} className="space-y-4">
                        <h3 className="text-xl font-bold text-[#0A2342]">
                          {office.location}
                        </h3>
                        <div className="flex items-start">
                          <MapPin className="mr-3 h-5 w-5 text-[#D4AF37]" />
                          <span className="text-gray-600">
                            {office.address}
                          </span>
                        </div>
                        <div className="flex items-start">
                          <Phone className="mr-3 h-5 w-5 text-[#D4AF37]" />
                          <span className="text-gray-600">{office.phone}</span>
                        </div>
                        <div className="flex items-start">
                          <Mail className="mr-3 h-5 w-5 text-[#D4AF37]" />
                          <span className="text-gray-600">{office.email}</span>
                        </div>
                        <div className="flex items-start">
                          <Clock className="mr-3 h-5 w-5 text-[#D4AF37]" />
                          <span className="text-gray-600">{office.hours}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 rounded-lg bg-gray-50 p-8">
                  <h2 className="mb-6 text-2xl font-bold text-[#0A2342]">
                    Practice Area Contacts
                  </h2>
                  <div className="space-y-6">
                    {practiceContacts.map((contact) => (
                      <div key={contact.area} className="space-y-2">
                        <h3 className="text-lg font-bold text-[#0A2342]">
                          {contact.area}
                        </h3>
                        <p className="text-gray-600">{contact.name}</p>
                        <p className="text-gray-600">{contact.email}</p>
                        <p className="text-gray-600">{contact.phone}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg h-fit">
                <h2 className="mb-6 text-2xl font-bold text-[#0A2342]">
                  Contact Form
                </h2>
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
                      htmlFor="phone"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
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
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none"
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-start">
                    <input
                      id="privacy-policy"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-[#D4AF37] focus:ring-[#D4AF37]"
                      required
                    />
                    <label
                      htmlFor="privacy-policy"
                      className="ml-2 block text-sm text-gray-600"
                    >
                      I agree to the{" "}
                      <a
                        href="/privacy-policy"
                        className="text-[#0A2342] underline"
                      >
                        privacy policy
                      </a>{" "}
                      and{" "}
                      <a
                        href="/terms-of-service"
                        className="text-[#0A2342] underline"
                      >
                        terms of service
                      </a>
                      .
                    </label>
                  </div>
                  <Button
                    className="w-full bg-[#0A2342] hover:bg-[#0A2342]/90"
                    type="submit"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#0A2342] sm:text-4xl">
                Our Locations
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                With offices in major cities, we are positioned to serve clients
                across the region.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="h-[500px] w-full bg-gray-200">
                <div className="flex h-full items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.9876!3d40.7654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0LCsDQ1JzU1LjQiTiA3M8KwNTknMTUuNCJX!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#0A2342] sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Answers to common questions about working with our firm
              </p>
            </div>
            <div className="mx-auto max-w-3xl divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <div key={index} className="py-6">
                  <h3 className="text-lg font-bold text-[#0A2342]">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Data
const offices = [
  {
    location: "New York (Headquarters)",
    address: "1234 Legal Avenue, Suite 500, New York, NY 10001",
    phone: "(555) 123-4567",
    email: "newyork@harrisonblackwell.com",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM",
  },
  {
    location: "Boston",
    address: "567 Commonwealth Drive, 8th Floor, Boston, MA 02215",
    phone: "(555) 234-5678",
    email: "boston@harrisonblackwell.com",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM",
  },
  {
    location: "Washington D.C.",
    address: "789 Constitution Ave, Suite 300, Washington, D.C. 20001",
    phone: "(555) 345-6789",
    email: "dc@harrisonblackwell.com",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM",
  },
];

const practiceContacts = [
  {
    area: "Corporate Law",
    name: "Jonathan Harrison",
    email: "j.harrison@harrisonblackwell.com",
    phone: "(555) 123-4567 ext. 101",
  },
  {
    area: "Litigation",
    name: "Elizabeth Blackwell",
    email: "e.blackwell@harrisonblackwell.com",
    phone: "(555) 123-4567 ext. 102",
  },
  {
    area: "Real Estate Law",
    name: "Michael Reynolds",
    email: "m.reynolds@harrisonblackwell.com",
    phone: "(555) 123-4567 ext. 103",
  },
  {
    area: "Intellectual Property",
    name: "Sarah Chen",
    email: "s.chen@harrisonblackwell.com",
    phone: "(555) 123-4567 ext. 104",
  },
];

const practiceAreas = [
  "Corporate Law",
  "Litigation",
  "Real Estate Law",
  "Intellectual Property",
  "Employment Law",
  "Estate Planning",
  "Mergers & Acquisitions",
  "Tax Law",
  "International Law",
  "Privacy & Data Security",
  "Government Relations",
  "Banking & Finance",
];

const faqs = [
  {
    question: "How do I schedule a consultation with an attorney?",
    answer:
      "You can schedule a consultation by calling our main office, completing the contact form on our website, or emailing the specific practice area contact. We will respond promptly to arrange a meeting with the appropriate attorney for your matter.",
  },
  {
    question: "What information should I bring to my initial consultation?",
    answer:
      "For your initial consultation, please bring any documents relevant to your legal matter, such as contracts, correspondence, court papers, or other records. This will help our attorneys better understand your situation and provide more specific guidance.",
  },
  {
    question: "How are legal fees structured at your firm?",
    answer:
      "Our fee structures vary depending on the type of legal matter and client needs. We offer hourly billing, flat fees for certain services, contingency arrangements for some litigation matters, and retainer agreements for ongoing representation. We will discuss fee arrangements clearly during your initial consultation.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer:
      "Yes, we offer virtual consultations via video conference or telephone for clients who prefer remote meetings. Our secure platforms ensure confidentiality while providing the convenience of meeting from your home or office.",
  },
  {
    question: "How quickly can I expect a response to my inquiry?",
    answer:
      "We strive to respond to all inquiries within 24 business hours. For urgent matters, please indicate the time-sensitive nature of your request, and we will make every effort to respond more quickly.",
  },
];
