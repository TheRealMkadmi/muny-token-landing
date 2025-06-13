"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)

      // Scrollspy
      const sections = document.querySelectorAll("section[id]")
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100
        const sectionHeight = (section as HTMLElement).offsetHeight
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute("id") || "")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-moneyGreen bg-opacity-95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="flex items-center group">
          <div className="mr-2 transition-transform duration-300 group-hover:rotate-12">
            <Image src="/images/muny-face.png" alt="$MUNY" width={36} height={36} />
          </div>
          <span className="display-font text-bananaYellow text-3xl">$MUNY</span>
        </Link>

        <div className="hidden md:flex space-x-6">
          {["buy", "tokenomics", "community"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className={`font-bold transition-all duration-300 ${
                activeSection === item
                  ? "text-bananaYellow scale-110 drop-shadow-md"
                  : "text-white hover:text-bananaYellow"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        <button className="pill-button shine">
          <span className="flex items-center">
            BUY NOW
            <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </nav>
  )
}
