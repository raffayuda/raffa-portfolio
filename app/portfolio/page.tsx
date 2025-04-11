"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import NavMenu from "@/components/nav-menu"
import PageTransition from "@/components/page-transition"

const categories = ["ALL", "LOGO", "VIDEO", "GRAPHIC DESIGN", "MOCKUP"]

const portfolioItems = [
  {
    id: 1,
    title: "Paper Craft Design",
    category: "GRAPHIC DESIGN",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Lucky Cat Figurine",
    category: "MOCKUP",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Hardware Components",
    category: "MOCKUP",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Fortune Cookies",
    category: "GRAPHIC DESIGN",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Paper Crane",
    category: "LOGO",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Flower Arrangement",
    category: "GRAPHIC DESIGN",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState("ALL")
  const { theme, setTheme } = useTheme()
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

  const filteredItems =
    activeCategory === "ALL" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

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
              WORKS
            </h1>
            <div className="relative z-10 flex items-center gap-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                MY <span className="text-amber-400">PORTFOLIO</span>
              </h2>
            </div>
          </div>

          {/* Portfolio Filter */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 transition-all duration-300 ${
                  activeCategory === category
                    ? "text-amber-400 font-bold"
                    : "text-gray-500 dark:text-gray-400 hover:text-amber-400 dark:hover:text-amber-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-amber-400">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
