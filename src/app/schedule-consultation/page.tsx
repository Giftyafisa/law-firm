"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ChevronDown, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ScheduleConsultationPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practiceArea: "",
    date: "",
    time: "",
    description: "",
    preferredMethod: "in-person",
    agreeToTerms: false,
  })
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData({
      ...formData,
      [name]: checked,
    })
  }

  const handleDateSelect = (date: string) => {
    setSelectedDate(date)
    setFormData({
      ...formData,
      date,
    })
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setFormData({
      ...formData,
      time,
    })
  }

  const handleNextStep = () => {
    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send the form data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    window.scrollTo(0, 0)
  }

  // Generate available dates (next 14 days)
  const generateDates = () => {
    const dates = []
    const today = new Date()

    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)

      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        const formattedDate = date.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        })
        dates.push(formattedDate)
      }
    }

    return dates
  }

  // Generate available time slots
  const generateTimeSlots = () => {
    const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]
    return timeSlots
  }

  const availableDates = generateDates()
  const availableTimeSlots = generateTimeSlots()

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#0A2342] text-white">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/placeholder.svg?height=600&width=1920"
              alt="Schedule a consultation"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">Schedule a Consultation</h1>
              <p className="text-lg text-gray-200 md:text-xl">
                Take the first step toward resolving your legal matter. Schedule a consultation with one of our
                experienced attorneys.
              </p>
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {isSubmitted ? (
              <div className="mx-auto max-w-3xl rounded-lg bg-green-50 p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-[#0A2342]">Consultation Scheduled Successfully!</h2>
                <p className="mb-6 text-gray-600">
                  Thank you for scheduling a consultation with Harrison, Blackwell & Associates. We have received your
                  request for a consultation on <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
                </p>
                <p className="mb-8 text-gray-600">
                  A confirmation email has been sent to <strong>{formData.email}</strong>. One of our team members will
                  contact you shortly to confirm your appointment.
                </p>
                <Link href="/">
                  <Button className="bg-[#0A2342] hover:bg-[#0A2342]/90">Return to Homepage</Button>
                </Link>
              </div>
            ) : (
              <div className="mx-auto max-w-4xl">
                <div className="mb-12">
                  <div className="flex flex-wrap justify-center">
                    <div
                      className={`mb-4 flex w-full items-center justify-center sm:w-1/3 ${step >= 1 ? "text-[#0A2342]" : "text-gray-400"}`}
                    >
                      <div
                        className={`mr-2 flex h-8 w-8 items-center justify-center rounded-full ${step >= 1 ? "bg-[#D4AF37]" : "bg-gray-200"}`}
                      >
                        <span className={step >= 1 ? "text-white" : "text-gray-500"}>1</span>
                      </div>
                      <span className="font-medium">Your Information</span>
                    </div>
                    <div
                      className={`mb-4 flex w-full items-center justify-center sm:w-1/3 ${step >= 2 ? "text-[#0A2342]" : "text-gray-400"}`}
                    >
                      <div
                        className={`mr-2 flex h-8 w-8 items-center justify-center rounded-full ${step >= 2 ? "bg-[#D4AF37]" : "bg-gray-200"}`}
                      >
                        <span className={step >= 2 ? "text-white" : "text-gray-500"}>2</span>
                      </div>
                      <span className="font-medium">Select Date & Time</span>
                    </div>
                    <div
                      className={`mb-4 flex w-full items-center justify-center sm:w-1/3 ${step >= 3 ? "text-[#0A2342]" : "text-gray-400"}`}
                    >
                      <div
                        className={`mr-2 flex h-8 w-8 items-center justify-center rounded-full ${step >= 3 ? "bg-[#D4AF37]" : "bg-gray-200"}`}
                      >
                        <span className={step >= 3 ? "text-white" : "text-gray-500"}>3</span>
                      </div>
                      <span className="font-medium">Consultation Details</span>
                    </div>
                  </div>
                  <div className="mt-4 h-2 w-full rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-[#D4AF37] transition-all duration-300"
                      style={{ width: `${(step / 3) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="space-y-6 rounded-lg bg-gray-50 p-8 shadow-md">
                      <h2 className="text-2xl font-bold text-[#0A2342]">Your Information</h2>
                      <p className="text-gray-600">
                        Please provide your contact information so we can reach you regarding your consultation.
                      </p>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-gray-700">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-gray-700">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="practiceArea" className="mb-1 block text-sm font-medium text-gray-700">
                          Practice Area <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="practiceArea"
                            name="practiceArea"
                            value={formData.practiceArea}
                            onChange={handleInputChange}
                            className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-[#D4AF37] focus:outline-none"
                            required
                          >
                            <option value="">Select a Practice Area</option>
                            <option value="Corporate Law">Corporate Law</option>
                            <option value="Litigation">Litigation</option>
                            <option value="Real Estate Law">Real Estate Law</option>
                            <option value="Intellectual Property">Intellectual Property</option>
                            <option value="Employment Law">Employment Law</option>
                            <option value="Estate Planning">Estate Planning</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button
                          type="button"
                          className="bg-[#0A2342] hover:bg-[#0A2342]/90"
                          onClick={handleNextStep}
                          disabled={
                            !formData.firstName ||
                            !formData.lastName ||
                            !formData.email ||
                            !formData.phone ||
                            !formData.practiceArea
                          }
                        >
                          Next Step
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6 rounded-lg bg-gray-50 p-8 shadow-md">
                      <h2 className="text-2xl font-bold text-[#0A2342]">Select Date & Time</h2>
                      <p className="text-gray-600">Please select your preferred consultation date and time.</p>

                      <div>
                        <label className="mb-3 block text-sm font-medium text-gray-700">
                          Available Dates <span className="text-red-500">*</span>
                        </label>
                        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                          {availableDates.map((date) => (
                            <button
                              key={date}
                              type="button"
                              className={`flex items-center justify-center rounded-md border p-3 text-center transition-colors ${
                                selectedDate === date
                                  ? "border-[#D4AF37] bg-[#D4AF37]/10 text-[#0A2342]"
                                  : "border-gray-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5"
                              }`}
                              onClick={() => handleDateSelect(date)}
                            >
                              <Calendar className="mr-2 h-4 w-4" />
                              <span>{date}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="mb-3 block text-sm font-medium text-gray-700">
                          Available Times <span className="text-red-500">*</span>
                        </label>
                        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                          {availableTimeSlots.map((time) => (
                            <button
                              key={time}
                              type="button"
                              className={`flex items-center justify-center rounded-md border p-3 text-center transition-colors ${
                                selectedTime === time
                                  ? "border-[#D4AF37] bg-[#D4AF37]/10 text-[#0A2342]"
                                  : "border-gray-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5"
                              }`}
                              onClick={() => handleTimeSelect(time)}
                              disabled={!selectedDate}
                            >
                              <Clock className="mr-2 h-4 w-4" />
                              <span>{time}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <Button
                          type="button"
                          variant="outline"
                          className="border-[#0A2342] text-[#0A2342] hover:bg-[#0A2342] hover:text-white"
                          onClick={handlePrevStep}
                        >
                          Previous Step
                        </Button>
                        <Button
                          type="button"
                          className="bg-[#0A2342] hover:bg-[#0A2342]/90"
                          onClick={handleNextStep}
                          disabled={!selectedDate || !selectedTime}
                        >
                          Next Step
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6 rounded-lg bg-gray-50 p-8 shadow-md">
                      <h2 className="text-2xl font-bold text-[#0A2342]">Consultation Details</h2>
                      <p className="text-gray-600">
                        Please provide additional details about your legal matter to help us prepare for your
                        consultation.
                      </p>

                      <div>
                        <label htmlFor="description" className="mb-1 block text-sm font-medium text-gray-700">
                          Brief Description of Your Legal Matter <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          rows={5}
                          value={formData.description}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none"
                          placeholder="Please provide a brief description of your legal matter to help us prepare for your consultation."
                          required
                        ></textarea>
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Preferred Consultation Method <span className="text-red-500">*</span>
                        </label>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="in-person"
                              name="preferredMethod"
                              value="in-person"
                              checked={formData.preferredMethod === "in-person"}
                              onChange={handleInputChange}
                              className="h-4 w-4 border-gray-300 text-[#D4AF37] focus:ring-[#D4AF37]"
                            />
                            <label htmlFor="in-person" className="ml-2 block text-gray-700">
                              In-Person Consultation
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="video"
                              name="preferredMethod"
                              value="video"
                              checked={formData.preferredMethod === "video"}
                              onChange={handleInputChange}
                              className="h-4 w-4 border-gray-300 text-[#D4AF37] focus:ring-[#D4AF37]"
                            />
                            <label htmlFor="video" className="ml-2 block text-gray-700">
                              Video Conference
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="phone"
                              name="preferredMethod"
                              value="phone"
                              checked={formData.preferredMethod === "phone"}
                              onChange={handleInputChange}
                              className="h-4 w-4 border-gray-300 text-[#D4AF37] focus:ring-[#D4AF37]"
                            />
                            <label htmlFor="phone" className="ml-2 block text-gray-700">
                              Phone Consultation
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-md bg-[#0A2342]/5 p-4">
                        <h3 className="mb-2 text-lg font-medium text-[#0A2342]">Consultation Summary</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p>
                            <strong>Name:</strong> {formData.firstName} {formData.lastName}
                          </p>
                          <p>
                            <strong>Email:</strong> {formData.email}
                          </p>
                          <p>
                            <strong>Phone:</strong> {formData.phone}
                          </p>
                          <p>
                            <strong>Practice Area:</strong> {formData.practiceArea}
                          </p>
                          <p>
                            <strong>Date:</strong> {formData.date}
                          </p>
                          <p>
                            <strong>Time:</strong> {formData.time}
                          </p>
                          <p>
                            <strong>Consultation Method:</strong>{" "}
                            {formData.preferredMethod === "in-person"
                              ? "In-Person Consultation"
                              : formData.preferredMethod === "video"
                                ? "Video Conference"
                                : "Phone Consultation"}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <input
                          id="agreeToTerms"
                          name="agreeToTerms"
                          type="checkbox"
                          checked={formData.agreeToTerms}
                          onChange={handleCheckboxChange}
                          className="mt-1 h-4 w-4 rounded border-gray-300 text-[#D4AF37] focus:ring-[#D4AF37]"
                          required
                        />
                        <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-600">
                          I agree to the{" "}
                          <a href="/privacy-policy" className="text-[#0A2342] underline">
                            privacy policy
                          </a>{" "}
                          and{" "}
                          <a href="/terms-of-service" className="text-[#0A2342] underline">
                            terms of service
                          </a>
                          . I understand that this form is for scheduling purposes only and does not establish an
                          attorney-client relationship.
                        </label>
                      </div>

                      <div className="flex justify-between">
                        <Button
                          type="button"
                          variant="outline"
                          className="border-[#0A2342] text-[#0A2342] hover:bg-[#0A2342] hover:text-white"
                          onClick={handlePrevStep}
                        >
                          Previous Step
                        </Button>
                        <Button
                          type="submit"
                          className="bg-[#D4AF37] text-[#0A2342] hover:bg-[#C4A030]"
                          disabled={!formData.description || !formData.agreeToTerms}
                        >
                          Schedule Consultation
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#0A2342] sm:text-4xl">
                Why Schedule a Consultation With Us
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Our consultations are designed to provide you with valuable insights and a clear path forward
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2342]/10">
                    <benefit.icon className="h-6 w-6 text-[#0A2342]" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#0A2342]">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#0A2342] sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Common questions about our consultation process
              </p>
            </div>
            <div className="mx-auto max-w-3xl divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <div key={index} className="py-6">
                  <h3 className="text-lg font-bold text-[#0A2342]">{faq.question}</h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

// Data
import { Users, FileText, ClockIcon, Shield, Briefcase, MessageSquare } from "lucide-react"

const benefits = [
  {
    title: "Expert Legal Guidance",
    description: "Receive personalized advice from attorneys with extensive experience in your specific legal matter.",
    icon: Users,
  },
  {
    title: "Case Evaluation",
    description: "Get a preliminary assessment of your case, including potential strategies and outcomes.",
    icon: FileText,
  },
  {
    title: "Efficient Process",
    description:
      "Our streamlined consultation process respects your time while ensuring we gather all necessary information.",
    icon: ClockIcon,
  },
  {
    title: "Confidentiality",
    description: "All consultations are completely confidential, protecting your privacy and legal interests.",
    icon: Shield,
  },
  {
    title: "Clear Next Steps",
    description: "Leave your consultation with a clear understanding of your options and recommended next steps.",
    icon: Briefcase,
  },
  {
    title: "Open Communication",
    description: "We encourage questions and ensure you have all the information needed to make informed decisions.",
    icon: MessageSquare,
  },
]

const faqs = [
  {
    question: "How long does a consultation typically last?",
    answer:
      "Initial consultations typically last 30-60 minutes, depending on the complexity of your legal matter. This provides sufficient time to discuss your situation and receive preliminary guidance.",
  },
  {
    question: "Is there a fee for the initial consultation?",
    answer:
      "For most practice areas, we offer a reduced fee for initial consultations. In some cases, such as personal injury matters, the initial consultation may be complimentary. The consultation fee will be clearly communicated when you schedule your appointment.",
  },
  {
    question: "What should I bring to my consultation?",
    answer:
      "We recommend bringing any documents relevant to your legal matter, such as contracts, correspondence, court papers, or other records. This helps our attorneys better understand your situation and provide more specific guidance.",
  },
  {
    question: "Can I bring someone with me to the consultation?",
    answer:
      "Yes, you may bring a spouse, family member, or trusted friend to your consultation. However, please note that their presence may affect the attorney-client privilege, which we will discuss at the beginning of your consultation.",
  },
  {
    question: "What happens after the consultation?",
    answer:
      "After your consultation, if you decide to proceed with our representation, we will discuss fee arrangements and next steps. If additional time is needed to consider your options, we respect that decision and remain available when you're ready to move forward.",
  },
  {
    question: "Can I schedule a virtual consultation instead of coming to your office?",
    answer:
      "Yes, we offer consultations via video conference or telephone for clients who prefer remote meetings. Our secure platforms ensure confidentiality while providing the convenience of meeting from your home or office.",
  },
]
