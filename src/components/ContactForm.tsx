"use client"

import { useState, FormEvent } from "react"
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4082d298-9907-4c65-92ee-a8dbafbb8936",
          ...formData,
          subject: formData.subject || "New Contact Form Submission",
        }),
      })

      const data = await response.json()

      if (data.success) {
        setFormStatus("success")
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        // Reset form status after 5 seconds
        setTimeout(() => {
          setFormStatus("idle")
        }, 5000)
      } else {
        setFormStatus("error")
        setErrorMessage(data.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setFormStatus("error")
      setErrorMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-[#f0f7ff]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#3b82f6] mb-8">Contact Us</h2>
        <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
          Have questions about INDEL? Fill out the form below and our team will get back to you shortly.
        </p>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-blue-100">
          {formStatus === "success" ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {formStatus === "error" && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                    <p className="text-sm text-red-700">{errorMessage}</p>
                  </div>
                </div>
              )}

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className={`px-6 py-3 bg-[#3b82f6] text-white font-medium rounded-md shadow-sm hover:bg-[#2563eb] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-colors flex items-center gap-2 ${
                    formStatus === "submitting" ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {formStatus === "submitting" ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="p-4 rounded-lg bg-white shadow-sm border border-blue-100">
            <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center bg-blue-100 rounded-full text-[#3b82f6]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mb-1">Email</h3>
            <p className="text-xs text-gray-600">truesecureteam4u@gmail.com</p>
          </div>

          <div className="p-4 rounded-lg bg-white shadow-sm border border-blue-100">
            <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center bg-blue-100 rounded-full text-[#3b82f6]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mb-1">Location</h3>
            <p className="text-xs text-gray-600">Islamabad</p>
          </div>

          <div className="p-4 rounded-lg bg-white shadow-sm border border-blue-100">
            <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center bg-blue-100 rounded-full text-[#3b82f6]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mb-1">Business Hours</h3>
            <p className="text-xs text-gray-600">Monday - Friday: 9AM - 5PM</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
