"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import PageTransition from "@/components/page-transition"
import NavMenu from "@/components/nav-menu"
import LoginButton from "@/components/LoginButton"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isMobile, setIsMobile] = useState(false)

  // Hydration fix - only render theme-dependent UI after mounting
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

  // Avoid hydration mismatch by rendering only after mounting
  if (!mounted) {
    return null
  }

  // Mobile/Tablet Layout
  if (isMobile) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-white dark:bg-black noise-texture pb-16" >
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="absolute top-6 right-6 p-2 rounded-full bg-gray-200 dark:bg-gray-700 z-10"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Amber Dot */}
          <div className="absolute top-6 left-6 w-3 h-3 bg-amber-400 rounded-full"></div>

          <div className="flex flex-col items-center justify-center pt-16 px-6 text-center">
            {/* Profile Image */}
            <div className="w-48 h-48 rounded-full border-4 border-gray-800 dark:border-gray-800 overflow-hidden mb-10">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Profile"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Name and Title */}
            <h1 className="text-4xl font-bold text-amber-400 mb-2">I&apos;M Raffa Yuda.</h1>
            <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">WEB DESIGNER</h2>
            
            {/* Bio */}
            <p className="text-base text-gray-700 dark:text-gray-300 mb-10 max-w-md">
              I&apos;m a Tunisian based web designer & front-end developer focused on crafting clean & user-friendly
              experiences. I am passionate about building excellent software that improves the lives of those around me.
            </p>

            {/* CTA Button */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-amber-400 text-black dark:text-white rounded-full hover:bg-amber-400 hover:text-white transition-all duration-300 group"
            >
              <span className="font-medium">MORE ABOUT ME</span>
              <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center group-hover:bg-white group-hover:text-amber-400 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </Link>
          </div>

          {/* Navigation Menu */}
          <NavMenu />
        </div>
      </PageTransition>
    )
  }

  // Desktop Layout
  return (
    <PageTransition>
      <div className="flex flex-col md:flex-row h-screen gradient-bg noise-texture">
        {/* Left Section with Yellow Accent */}
        <div className="w-full md:w-2/5 bg-amber-400 dark:bg-amber-400 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-3/4 h-full bg-white dark:bg-black rounded-tl-[100px] rounded-bl-[100px]">
              <div className="relative h-full w-full flex items-center justify-center">
                <div className="w-[90%] h-[90%] overflow-hidden rounded-3xl">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    alt="Profile"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section with Content */}
        <div className="w-full md:w-3/5 bg-white dark:bg-black text-black dark:text-white p-8 md:p-16 flex flex-col justify-center relative">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="absolute top-6 right-6 p-2 rounded-full bg-gray-200 dark:bg-gray-800 z-10"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Navigation Menu */}
          <NavMenu />

          {/* Main Content */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-1 bg-amber-400"></div>
              <h1 className="text-4xl md:text-5xl font-bold text-amber-400">I&apos;M Raffa Yuda Pratama.</h1>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">WEB DEVELOPER</h2>

            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
            I&apos;am a tech enthusiast & front-end developer based in Indonesian focused on creating clean & user-friendly experiences. I am passionate about building amazing software that improves the lives of people around me.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-amber-400 text-black dark:text-white rounded-full hover:bg-amber-400 hover:text-white transition-all duration-300 group"
            >
              <span>MORE ABOUT ME</span>
              
              <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center group-hover:bg-white group-hover:text-amber-400 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </Link>
          </div>
          <LoginButton/>
        </div>
      </div>
    </PageTransition>
  )
}
