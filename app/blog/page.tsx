"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import NavMenu from "@/components/nav-menu"
import PageTransition from "@/components/page-transition"
import BlogModal from "@/components/blog-modal"

// Extended blog post data with more fields
const blogPosts = [
  {
    id: 1,
    title: "How to Own Your Audience by Creating an Email List",
    excerpt: "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b",
    content:
      "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bubble and squeak he legged it Charles don't get shirty with me super, Jeffrey bobby spiffing wind up barney blower nice one a load of old tosh bleeder. Mush I don't want no agro what a load of rubbish bugger all mate cheeky, old todger is fantastic gormless up the duff a, cup of tea nearly dropped a clanger chancer young delinquent crikey.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 12, 2025",
    author: "SamRyan",
    categories: ["wordpress", "business", "economy", "design"],
  },
  {
    id: 2,
    title: "Top 10 Toolkits for Deep Learning in 2022",
    excerpt: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e",
    content:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 25, 2025",
    author: "SamRyan",
    categories: ["wordpress", "business", "economy", "design"],
  },
  {
    id: 3,
    title: "Everything You Need to Know About Web Accessibility",
    excerpt: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma",
    content:
      "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 18, 2025",
    author: "SamRyan",
    categories: ["wordpress", "business", "economy", "design"],
  },
  {
    id: 4,
    title: "The Future of Web Development: Trends to Watch",
    excerpt:
      "Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Etiam dignissim diam quis enim lobortis.",
    content:
      "Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Volutpat est velit egestas dui id ornare arcu odio ut. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Amet justo donec enim diam vulputate ut pharetra sit. Enim ut tellus elementum sagittis vitae et leo duis ut. Elementum eu facilisis sed odio morbi quis commodo odio aenean.",
    image: "/placeholder.svg?height=400&width=600",
    date: "January 5, 2025",
    author: "SamRyan",
    categories: ["wordpress", "business", "economy", "design"],
  },
  {
    id: 5,
    title: "How to Optimize Your Website for Better Performance",
    excerpt:
      "Vitae congue eu consequat ac felis donec et odio. Tellus orci ac auctor augue mauris augue neque gravida.",
    content:
      "Vitae congue eu consequat ac felis donec et odio. Tellus orci ac auctor augue mauris augue neque gravida. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Massa tincidunt dui ut ornare lectus sit amet est placerat. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor.",
    image: "/placeholder.svg?height=400&width=600",
    date: "December 20, 2024",
    author: "SamRyan",
    categories: ["wordpress", "business", "economy", "design"],
  },
  {
    id: 6,
    title: "The Importance of User Experience in Modern Web Design",
    excerpt: "Nibh praesent tristique magna sit amet purus gravida quis blandit. Lectus nulla at volutpat diam ut.",
    content:
      "Nibh praesent tristique magna sit amet purus gravida quis blandit. Lectus nulla at volutpat diam ut venenatis tellus in metus. Diam maecenas sed enim ut sem viverra aliquet eget. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Velit euismod in pellentesque massa placerat duis ultricies lacus. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Amet risus nullam eget felis eget nunc lobortis mattis. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Habitant morbi tristique senectus et netus et malesuada fames ac. Amet risus nullam eget felis eget nunc lobortis mattis aliquam.",
    image: "/placeholder.svg?height=400&width=600",
    date: "November 15, 2024",
    author: "SamRyan",
    categories: ["wordpress", "business", "economy", "design"],
  },
]

export default function BlogPage() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isMobile, setIsMobile] = useState(false)
  const [selectedPost, setSelectedPost] = useState<(typeof blogPosts)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  const openPostModal = (post: (typeof blogPosts)[0]) => {
    setSelectedPost(post)
    setIsModalOpen(true)
  }

  const closePostModal = () => {
    setIsModalOpen(false)
  }

  // Avoid hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <PageTransition>
      <div
        className={`min-h-screen bg-white dark:bg-black gradient-bg noise-texture text-black dark:text-white ${
          isMobile ? "pb-16" : ""
        }`}
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
              POSTS
            </h1>
            <div className="relative z-10 flex items-center gap-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                MY <span className="text-amber-400">BLOG</span>
              </h2>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-400"></div>
                </div>
                <div className="p-6">
                  <button onClick={() => openPostModal(post)} className="block mb-3 text-left w-full">
                    <h3 className="text-xl font-bold hover:text-amber-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                  </button>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-500">{post.date}</span>
                    <button
                      onClick={() => openPostModal(post)}
                      className="text-amber-400 hover:text-amber-500 font-medium transition-colors duration-300"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Post Modal */}
        <BlogModal post={selectedPost} isOpen={isModalOpen} onClose={closePostModal} />
      </div>
    </PageTransition>
  )
}
