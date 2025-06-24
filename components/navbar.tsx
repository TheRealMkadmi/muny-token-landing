"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  const navItems = [
    { name: "Buy", href: "#buy" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Community", href: "#community" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-moneyGreen/95 backdrop-blur-md shadow-lg py-2 border-b border-bananaYellow/20"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="mr-2 md:mr-3 transition-transform duration-300 group-hover:rotate-12 relative">
            <Image src="/images/muny-face.png" alt="$MUNY" width={36} height={36} className="md:w-[42px] md:h-[42px]" />
            <div className="absolute -inset-1 bg-bananaYellow/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="display-font text-bananaYellow text-2xl md:text-3xl group-hover:scale-105 transition-transform duration-300">
            $MUNY
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-bold transition-all duration-300 relative group text-sm lg:text-base ${
                activeSection === item.href.slice(1)
                  ? "text-bananaYellow scale-110"
                  : "text-white hover:text-bananaYellow hover:scale-105"
              }`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bananaYellow transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button - Fixed */}
        <div className="hidden md:block">
          <a
            href="https://arena.trade/tokenshttps://arena.trade/token/0x08c91faf66185dae515ee8d372f837ba315475ac"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-button shine inline-block"
          >
            <span className="flex items-center text-sm lg:text-base">
              BUY NOW
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-bananaYellow transition-colors duration-300 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-moneyGreen/95 backdrop-blur-md border-b border-bananaYellow/20 shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-bananaYellow font-bold transition-colors duration-300 py-2 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://app.arenaswap.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-button text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                BUY NOW
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
