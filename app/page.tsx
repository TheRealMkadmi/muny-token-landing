"use client"

import { useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { HowToBuy } from "@/components/how-to-buy"
import { Tokenomics } from "@/components/tokenomics"
import { MemesVault } from "@/components/memes-vault"
import { Community } from "@/components/community"
import { Footer } from "@/components/footer"

export default function Home() {
  const sectionsRef = useRef<HTMLDivElement[]>([])
  const blobsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    // Enhanced Intersection Observer for fade-in sections with threshold
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" },
    )

    document.querySelectorAll(".section-fade").forEach((section) => {
      observer.observe(section)
    })

    // Enhanced parallax effect for blobs with smoother animation
    const handleScroll = () => {
      const scrollY = window.scrollY

      // Get all parallax elements
      const parallaxElements = document.querySelectorAll(".parallax")
      parallaxElements.forEach((element, index) => {
        // Vary the speed based on the element's position
        const speed = 0.2 + (index % 3) * 0.1
        const yPos = -(scrollY * speed)

        // Apply transform with requestAnimationFrame for smoother animation
        requestAnimationFrame(() => {
          ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
        })
      })

      // Add parallax to blob elements
      document.querySelectorAll(".blob").forEach((blob, index) => {
        const speed = 0.05 + (index % 3) * 0.03
        const yPos = -(scrollY * speed)

        requestAnimationFrame(() => {
          ;(blob as HTMLElement).style.transform = `translateY(${yPos}px) ${(blob as HTMLElement).style.transform}`
        })
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <HowToBuy />
      <Tokenomics />
      <MemesVault />
      <Community />
      <Footer />
    </main>
  )
}
