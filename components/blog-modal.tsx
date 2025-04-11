"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X, Calendar, User, Tag } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content?: string
  image: string
  date: string
  author?: string
  categories?: string[]
}

interface BlogModalProps {
  post: BlogPost | null
  isOpen: boolean
  onClose: () => void
}

export default function BlogModal({ post, isOpen, onClose }: BlogModalProps) {
  const [mounted, setMounted] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  // Close on escape key
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey)
    }
    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [isOpen, onClose])

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  if (!isOpen || !post) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl max-h-[90vh] bg-gray-900 rounded-lg shadow-xl overflow-hidden"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-1 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          {/* Header */}
          <div className="p-6 pb-2">
            <h2 className="text-2xl font-bold mb-1">
              <span className="text-white">POST </span>
              <span className="text-amber-400">DETAILS</span>
            </h2>
          </div>

          {/* Meta info */}
          <div className="px-6 py-2 flex flex-wrap items-center gap-4 text-sm text-gray-400">
            {post.author && (
              <div className="flex items-center gap-1">
                <User className="w-4 h-4 text-amber-400" />
                <span>{post.author}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>{post.date}</span>
            </div>
            {post.categories && post.categories.length > 0 && (
              <div className="flex items-center gap-1 flex-wrap">
                <Tag className="w-4 h-4 text-amber-400" />
                {post.categories.map((category, index) => (
                  <span key={index} className="bg-gray-800 px-2 py-0.5 rounded-sm text-xs">
                    {category}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Title */}
          <div className="px-6 py-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white">{post.title}</h1>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          {/* Content */}
          <div className="p-6 text-gray-300">
            <p className="mb-6">{post.content || post.excerpt}</p>

            {/* Sample content for demonstration */}
            <p className="mb-4">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-6 italic">
              If you're been waiting for an invitation, this calligraphy is it. Commissioned by Facebook hand-lettered
              design for a poster. Quote is Notebook Building & UX Design Digest—and mine.
            </blockquote>

            <p className="mb-4">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>

            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
