"use client"

import { useState, useEffect } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Handle mouse movement
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      if (!isVisible) {
        setIsVisible(true)
      }
    }

    // Handle hover state
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.getAttribute("role") === "button" ||
        target.tagName.toLowerCase() === "input" ||
        target.tagName.toLowerCase() === "textarea" ||
        target.tagName.toLowerCase() === "select" ||
        target.getAttribute("tabindex") === "0"

      setIsHovering(isClickable)
    }

    // Handle cursor leaving the window
    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    // Add event listeners
    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseover", handleMouseOver)
    window.addEventListener("mouseout", handleMouseLeave)

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("mouseout", handleMouseLeave)
    }
  }, [isVisible])

  // Don't render on mobile devices
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) {
      const styleTag = document.createElement("style")
      styleTag.innerHTML = `
        html, body { cursor: auto !important; }
        a, button, [role="button"], input, textarea, select, [tabindex="0"] { cursor: pointer !important; }
      `
      document.head.appendChild(styleTag)
      return () => {
        document.head.removeChild(styleTag)
      }
    }
  }, [])

  if (typeof window === "undefined") return null

  return (
    <div
      className={`custom-cursor ${isHovering ? "hovering" : ""} ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  )
}
