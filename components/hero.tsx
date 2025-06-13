"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Twitter, MessageCircle, Play, TrendingUp } from "lucide-react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const billsRef = useRef<HTMLDivElement>(null)
  const monkeyHeadRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    // Animate floating bills
    const animateBills = () => {
      if (!billsRef.current) return

      const bills = billsRef.current.children
      Array.from(bills).forEach((bill, index) => {
        const element = bill as HTMLElement
        const delay = index * 200
        const duration = 3000 + Math.random() * 2000

        setTimeout(() => {
          element.style.animation = `floatBill ${duration}ms ease-in-out infinite`
          element.style.animationDelay = `${Math.random() * 2000}ms`
        }, delay)
      })
    }

    // Animate monkey head floating
    const animateMonkeyHead = () => {
      if (!monkeyHeadRef.current) return
      monkeyHeadRef.current.style.animation = "floatMonkey 4s ease-in-out infinite"
    }

    // Parallax effect for logo
    const handleScroll = () => {
      if (!logoRef.current) return
      const scrollY = window.scrollY
      const parallaxSpeed = 0.3
      logoRef.current.style.transform = `translateY(${scrollY * parallaxSpeed}px)`
    }

    animateBills()
    animateMonkeyHead()
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section ref={heroRef} id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Arena Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/arena-background.png" alt="Arena Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
      </div>

      {/* Floating Bills Container */}
      <div ref={billsRef} className="absolute inset-0 z-10 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            <Image
              src="/images/banana-bill-pattern.png"
              alt="Banana Bill"
              width={50 + Math.random() * 30}
              height={35 + Math.random() * 20}
              className="drop-shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Floating Monkey Head */}
      <div
        ref={monkeyHeadRef}
        className="absolute top-20 right-10 md:right-20 z-15 opacity-90"
        style={{ transform: "rotate(-15deg)" }}
      >
        <Image src="/images/muny-head.png" alt="$MUNY Head" width={120} height={120} className="drop-shadow-xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto py-20">
        {/* Animated Logo */}
        <div
          ref={logoRef}
          className={`mb-8 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative inline-block">
            <Image
              src="/images/muny-logo.png"
              alt="$MUNY Logo"
              width={600}
              height={200}
              className="drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-bananaYellow/20 via-transparent to-bananaYellow/20 blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Tagline */}
        <div
          className={`mb-8 transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-3 drop-shadow-lg">
            Born wild. Made for the timeline.
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Welcome to the arena where memes become legends and apes become kings.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="https://app.arenaswap.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-gradient-to-r from-bananaYellow to-gold text-black font-bold py-4 px-8 rounded-full border-2 border-black transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold to-bananaYellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2">
              <Play size={20} />
              Enter Arena
            </span>
          </a>

          <a
            href="https://twitter.com/munytoken"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black/80 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-full border-2 border-white/20 transition-all duration-300 hover:scale-105 hover:bg-black hover:border-white/40"
          >
            <span className="flex items-center gap-2">
              <Twitter size={20} />
              Follow the Chaos
            </span>
          </a>

          <a
            href="https://t.me/munytoken"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-blue-600/80 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-full border-2 border-blue-400/20 transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:border-blue-400/40"
          >
            <span className="flex items-center gap-2">
              <MessageCircle size={20} />
              Join the Pack
            </span>
          </a>
        </div>

        {/* Stats Bar */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-4">
            <div className="text-center">
              <div className="text-bananaYellow font-bold text-xl">100B</div>
              <div className="text-white/70 text-sm">Total Supply</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-green-400 font-bold text-xl flex items-center gap-1">
                <TrendingUp size={16} />
                Live
              </div>
              <div className="text-white/70 text-sm">Trading Now</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-hypePurple font-bold text-xl">∞</div>
              <div className="text-white/70 text-sm">Meme Potential</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-800 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade - Positioned lower */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white via-white/60 to-transparent z-30"></div>
    </section>
  )
}
