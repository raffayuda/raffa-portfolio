"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Sun, Moon, MapPin, Mail, Phone, Facebook, Twitter, Youtube, Dribbble, Send, Instagram, Linkedin, Github } from "lucide-react"
import { useTheme } from "next-themes"
import NavMenu from "@/components/nav-menu"
import PageTransition from "@/components/page-transition"
import { SiEnvato, SiGithub, SiInstagram, SiLinkedin, SiTiktok } from "react-icons/si"

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isMobile, setIsMobile] = useState(false)

  // Hydration fix
  useEffect(() => {
    setMounted(true)
  }, [])

  // Check if mobile/tablet view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Message sent successfully!")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  // Avoid hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <PageTransition>
      <div
        className={`min-h-screen bg-white dark:bg-black gradient-bg noise-texture text-black dark:text-white ${isMobile ? "pb-16" : ""}`}
      >
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="fixed top-6 right-6 p-2 rounded-full bg-gray-200 dark:bg-gray-800 z-10"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>

        {/* Navigation Menu */}
        <NavMenu />

        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="relative mb-16">
            <h1 className="text-8xl font-bold text-gray-200 dark:text-gray-800 opacity-20 absolute -top-10 left-0">
              CONTACT
            </h1>
            <div className="relative z-10 flex items-center gap-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                GET IN <span className="text-amber-400">TOUCH</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">DON&apos;T BE SHY !</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or
                opportunities to be part of your visions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-400 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">ADDRESS POINT</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      66 Street Ml. Hamzah, Bogor, Indonesia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-400 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">MAIL ME</h4>
                    <p className="text-gray-600 dark:text-gray-400">raffayudapratama@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-400 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">CALL ME</h4>
                    <p className="text-gray-600 dark:text-gray-400">+6288 8962 3663</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="#"
                  className="bg-gray-800 dark:bg-gray-700 p-3 rounded-full hover:bg-amber-400 transition-colors duration-300"
                >
                  <SiLinkedin className="h-5 w-5 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 dark:bg-gray-700 p-3 rounded-full hover:bg-amber-400 transition-colors duration-300"
                >
                  <SiInstagram className="h-5 w-5 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 dark:bg-gray-700 p-3 rounded-full hover:bg-amber-400 transition-colors duration-300"
                >
                  <SiGithub className="h-5 w-5 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 dark:bg-gray-700 p-3 rounded-full hover:bg-amber-400 transition-colors duration-300"
                >
                  <SiTiktok className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="YOUR NAME"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-100 dark:bg-gray-800 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="YOUR EMAIL"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-100 dark:bg-gray-800 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="YOUR SUBJECT"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-gray-100 dark:bg-gray-800 rounded-lg px-6 py-4 w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <textarea
                  name="message"
                  placeholder="YOUR MESSAGE"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-gray-100 dark:bg-gray-800 rounded-lg px-6 py-4 w-full resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
                ></textarea>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-amber-400 transition-all duration-300 group"
                >
                  <span>SEND MESSAGE</span>
                  <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
