"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, User, Briefcase, Mail, MessageSquare } from "lucide-react"
import { usePathname } from "next/navigation"

export default function NavMenu() {
  const pathname = usePathname()
  const [activeLink, setActiveLink] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Set active link based on current path
  useEffect(() => {
    const path = pathname.split("/")[1] || "home"
    setActiveLink(path)
  }, [pathname])

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

  const handleHover = (link: string) => {
    if (!isMobile) {
      setActiveLink(link)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      const path = pathname.split("/")[1] || "home"
      setActiveLink(path)
    }
  }

  // Desktop navigation (right side)
  const DesktopNav = () => (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-8 z-10">
      <Link
        href="/"
        className={`p-4 rounded-full transition-all duration-300 relative group ${activeLink === "home" ? "bg-amber-400 text-white" : "bg-gray-200 dark:bg-gray-800"}`}
        onMouseEnter={() => handleHover("home")}
        onMouseLeave={handleMouseLeave}
      >
        <Home className="h-5 w-5" />
        <span
          className={`absolute right-full mr-2 whitespace-nowrap bg-amber-400 text-white px-4 py-2 rounded-full transition-all duration-300 ${activeLink === "home" ? "opacity-100 -translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}`}
        >
          HOME
        </span>
      </Link>

      <Link
        href="/about"
        className={`p-4 rounded-full transition-all hover:dark:bg-amber-400 duration-300 relative group ${activeLink === "about" ? "bg-amber-400 text-white" : "bg-gray-200 dark:bg-gray-800"}`}
        onMouseEnter={() => handleHover("about")}
        onMouseLeave={handleMouseLeave}
      >
        <User className="h-5 w-5" />
        <span
          className={`absolute right-full mr-2 hover:dark:bg-amber-400 whitespace-nowrap bg-amber-400 text-white px-4 py-2 rounded-full transition-all duration-300 ${activeLink === "about" ? "opacity-100 -translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}`}
        >
          ABOUT
        </span>
      </Link>

      <Link
        href="/portfolio"
        className={`p-4 rounded-full transition-all duration-300 relative group ${activeLink === "portfolio" ? "bg-amber-400 text-white" : "bg-gray-200 dark:bg-gray-800"}`}
        onMouseEnter={() => handleHover("portfolio")}
        onMouseLeave={handleMouseLeave}
      >
        <Briefcase className="h-5 w-5" />
        <span
          className={`absolute right-full mr-2 whitespace-nowrap bg-amber-400 text-white px-4 py-2 rounded-full transition-all duration-300 ${activeLink === "portfolio" ? "opacity-100 -translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}`}
        >
          PORTFOLIO
        </span>
      </Link>

      <Link
        href="/contact"
        className={`p-4 rounded-full transition-all duration-300 relative group ${activeLink === "contact" ? "bg-amber-400 text-white" : "bg-gray-200 dark:bg-gray-800"}`}
        onMouseEnter={() => handleHover("contact")}
        onMouseLeave={handleMouseLeave}
      >
        <Mail className="h-5 w-5" />
        <span
          className={`absolute right-full mr-2 whitespace-nowrap bg-amber-400 text-white px-4 py-2 rounded-full transition-all duration-300 ${activeLink === "contact" ? "opacity-100 -translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}`}
        >
          CONTACT
        </span>
      </Link>

      <Link
        href="/blog"
        className={`p-4 rounded-full transition-all duration-300 relative group ${activeLink === "blog" ? "bg-amber-400 text-white" : "bg-gray-200 dark:bg-gray-800"}`}
        onMouseEnter={() => handleHover("blog")}
        onMouseLeave={handleMouseLeave}
      >
        <MessageSquare className="h-5 w-5" />
        <span
          className={`absolute right-full mr-2 whitespace-nowrap bg-amber-400 text-white px-4 py-2 rounded-full transition-all duration-300 ${activeLink === "blog" ? "opacity-100 -translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}`}
        >
          BLOG
        </span>
      </Link>
    </div>
  )

  // Mobile navigation (bottom)
  const MobileNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 flex justify-around items-center py-3 z-50">
      <Link
        href="/"
        className={`p-3 flex flex-col items-center ${activeLink === "home" ? "text-amber-400" : "text-gray-400"}`}
      >
        <div className={`rounded-full p-2 ${activeLink === "home" ? "bg-amber-400" : ""}`}>
          <Home className={`h-5 w-5 ${activeLink === "home" ? "text-white" : ""}`} />
        </div>
      </Link>

      <Link
        href="/about"
        className={`p-3 flex flex-col items-center ${activeLink === "about" ? "text-amber-400" : "text-gray-400"}`}
      >
        <div className={`rounded-full p-2 ${activeLink === "about" ? "bg-amber-400" : ""}`}>
          <User className={`h-5 w-5 ${activeLink === "about" ? "text-white" : ""}`} />
        </div>
      </Link>

      <Link
        href="/portfolio"
        className={`p-3 flex flex-col items-center ${activeLink === "portfolio" ? "text-amber-400" : "text-gray-400"}`}
      >
        <div className={`rounded-full p-2 ${activeLink === "portfolio" ? "bg-amber-400" : ""}`}>
          <Briefcase className={`h-5 w-5 ${activeLink === "portfolio" ? "text-white" : ""}`} />
        </div>
      </Link>

      <Link
        href="/contact"
        className={`p-3 flex flex-col items-center ${activeLink === "contact" ? "text-amber-400" : "text-gray-400"}`}
      >
        <div className={`rounded-full p-2 ${activeLink === "contact" ? "bg-amber-400" : ""}`}>
          <Mail className={`h-5 w-5 ${activeLink === "contact" ? "text-white" : ""}`} />
        </div>
      </Link>

      <Link
        href="/blog"
        className={`p-3 flex flex-col items-center ${activeLink === "blog" ? "text-amber-400" : "text-gray-400"}`}
      >
        <div className={`rounded-full p-2 ${activeLink === "blog" ? "bg-amber-400" : ""}`}>
          <MessageSquare className={`h-5 w-5 ${activeLink === "blog" ? "text-white" : ""}`} />
        </div>
      </Link>
    </div>
  )

  return <>{isMobile ? <MobileNav /> : <DesktopNav />}</>
}
