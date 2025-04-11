"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sun, Moon, Download } from "lucide-react";
import { useTheme } from "next-themes";
import NavMenu from "@/components/nav-menu";
import PageTransition from "@/components/page-transition";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  // Hydration fix
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check if mobile/tablet view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <PageTransition>
      <div
        className={`min-h-screen bg-white dark:bg-black gradient-bg noise-texture ${
          isMobile ? "pb-16" : ""
        }`}
      >
        <div className="flex flex-col justify-between md:flex-row min-h-screen">
          {/* Left Section with Yellow Accent */}
          {/* <div className="w-full md:w-2/5 bg-amber-400 dark:bg-amber-400 relative">
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
          </div> */}

          {/* Right Section with Content */}
          <div className="w-full md:w-[100%] bg-white dark:bg-black text-black dark:text-white p-8 md:p-16 flex flex-col justify-center relative">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-200 dark:bg-gray-800 z-10"
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Navigation Menu */}
            <NavMenu />

            {/* Main Content */}
            <div className="w-full">
              <div className="relative mb-16">
                <h1 className="text-7xl md:text-9xl font-bold text-gray-200 dark:text-gray-800 opacity-20 absolute md:-top-10 md:left-20">
                  RESUME
                </h1>
                <div className="relative z-10 flex items-center gap-4">
                  <h2 className="text-5xl md:text-8xl font-bold absolute top-10 md:top-0 md:left-6">
                    ABOUT <span className="text-amber-400">ME</span>
                  </h2>
                </div>
              </div>

              <div className="mb-12 mt-28 flex flex-col gap-12 xl:flex-row w-full justify-around">
                <div className="xl:w-[60%] w-full">
                  <h3 className="md:text-4xl text-xl font-bold mb-8">PERSONAL INFOS</h3>

                  <div className="grid grid-cols-1 md:text-xl sm:grid-cols-2 gap-y-6 gap-x-12 mb-12">
                    <div className="flex gap-2">
                      <span className="text-gray-500 dark:text-gray-400">
                        Name:
                      </span>
                      <span className="font-medium">Raffa Yuda Pratama</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-500 dark:text-gray-400">
                        Gender:
                      </span>
                      <span className="font-medium">Male</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-500 dark:text-gray-400">
                        Age:
                      </span>
                      <span className="font-medium">19 Years</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-500 dark:text-gray-400">
                        Nationality:
                      </span>
                      <span className="font-medium">Indonesian</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-500 dark:text-gray-400">
                      Profession:
                      </span>
                      <span className="font-medium text-green-500">
                        Student
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-500 dark:text-gray-400">
                        Address:
                      </span>
                      <span className="font-medium">Bogor</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-500 dark:text-gray-400">
                        Phone:
                      </span>
                      <span className="font-medium">+6288 8962 3663</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-500 dark:text-gray-400">
                        Email:
                      </span>
                      <span className="font-medium">raffayudapratama20@gmail.com</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-500 dark:text-gray-400">
                        Linkedin:
                      </span>
                      <Link href={'linkedin.com/in/raffa-yuda-pratama-468228250'} className="font-medium">raffa-yuda-pratama</Link>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-500 dark:text-gray-400">
                        Languages:
                      </span>
                      <span className="font-medium">Indonesia, Sundanese</span>
                    </div>
                  </div>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-amber-400 text-black dark:text-white rounded-full hover:bg-amber-400 hover:text-white transition-all duration-300 group"
                  >
                    <span>DOWNLOAD CV</span>
                    <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center group-hover:bg-white group-hover:text-amber-400 transition-all duration-300">
                      <Download className="w-5 h-5" />
                    </div>
                  </Link>
                </div>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-16 xl:w-[50%]">
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <div className="text-5xl font-bold text-amber-400 mb-2">
                    3<sup>+</sup>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    YEARS OF EXPERIENCE
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <div className="text-5xl font-bold text-amber-400 mb-2">
                    5<sup>+</sup>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    COMPLETED PROJECTS
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <div className="text-5xl font-bold text-amber-400 mb-2">
                    8<sup>+</sup>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    CERTIFICATES
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <div className="text-5xl font-bold text-amber-400 mb-2">
                    10<sup>+</sup>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    SKILLS & FRAMEWORK
                  </div>
                </div>
              </div>
              </div>

            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="container mx-auto px-4 py-16">
          <SkillsSection />
          <ExperienceSection />
        </div>
      </div>
    </PageTransition>
  );
}
