"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { MessageCircle, Play, TrendingUp, BarChart3, Sparkles } from "lucide-react"

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
        const delay = index * 300
        const duration = 4000 + Math.random() * 3000

        setTimeout(() => {
          element.style.animation = `floatBillUpward ${duration}ms ease-in-out infinite`
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
      {/* Arena Background - Fixed stretching issue */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/arena-background.png"
          alt="Arena Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent"></div>
      </div>

      {/* Enhanced Floating Bills Container - Responsive */}
      <div ref={billsRef} className="absolute inset-0 z-10 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-10%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            <Image
              src="/images/banana-bill.png"
              alt="$MUNY Bill"
              width={60 + Math.random() * 50}
              height={30 + Math.random() * 25}
              className="drop-shadow-2xl"
            />
          </div>
        ))}
      </div>

      {/* Enhanced Floating Monkey Head - Responsive */}
      <div
        ref={monkeyHeadRef}
        className="absolute top-16 right-4 md:right-8 lg:right-16 z-15 opacity-90"
        style={{ transform: "rotate(-15deg)" }}
      >
        <div className="relative">
          <Image
            src="/images/muny-head.png"
            alt="$MUNY Head"
            width={80}
            height={80}
            className="md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] drop-shadow-2xl"
          />
          <div className="absolute -inset-2 md:-inset-4 bg-bananaYellow/20 rounded-full blur-xl animate-pulse"></div>
        </div>
      </div>

      {/* Main Content - Fixed Mobile Margins */}
      <div className="relative z-20 text-center w-full max-w-7xl mx-auto py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        {/* $MUNY Logo - Fixed Mobile Responsiveness */}
        <div
          ref={logoRef}
          className={`mb-8 md:mb-10 transition-all duration-1000 px-2 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative flex justify-center items-center">
            <Image
              src="/images/muny-logo.png"
              alt="$MUNY Logo"
              width={600}
              height={200}
              className="drop-shadow-2xl hover:scale-105 transition-transform duration-500 w-auto h-auto max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
              style={{
                width: "auto",
                height: "auto",
              }}
            />
            <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-r from-bananaYellow/20 via-gold/10 to-bananaYellow/20 blur-2xl animate-pulse"></div>

            {/* Sparkle effects */}
            <div className="hidden md:block absolute top-4 left-4">
              <Sparkles
                className="text-bananaYellow w-4 h-4 md:w-6 md:h-6 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
            <div className="hidden md:block absolute bottom-4 right-4">
              <Sparkles className="text-gold w-3 h-3 md:w-4 md:h-4 animate-pulse" style={{ animationDelay: "1.5s" }} />
            </div>
          </div>
        </div>

        {/* Enhanced Tagline - Mobile Optimized with Better Margins */}
        <div
          className={`mb-8 md:mb-10 transition-all duration-1000 delay-200 px-2 sm:px-4 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-4 drop-shadow-lg leading-tight">
            Not money. Just $MUNY
          </h2>
          <p className="text-white/90 text-base md:text-lg lg:text-2xl max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-medium">
            Born wild. Made for the timeline.
          </p>
        </div>

        {/* Enhanced CTA Buttons - Fixed Mobile Layout */}
        <div
          className={`mb-12 md:mb-16 transition-all duration-1000 delay-400 px-2 sm:px-4 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            <a
              href="https://arena.social/home"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden text-white font-bold py-4 md:py-5 px-6 md:px-10 rounded-full border-2 border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-sm text-sm md:text-base lg:text-lg w-full sm:w-auto"
              style={{ backgroundColor: "#ea530a" }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "#d4470a" }}
              ></div>
              <span className="relative flex items-center justify-center gap-2 md:gap-3">
                <Play size={18} className="md:w-[22px] md:h-[22px]" />
                The Arena
              </span>
            </a>

            <a
              href="https://x.com/lilmunyavax"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-black/60 backdrop-blur-sm text-white font-bold py-4 md:py-5 px-6 md:px-10 rounded-full border-2 border-white/30 transition-all duration-300 hover:scale-105 hover:bg-black/80 hover:border-white/50 text-sm md:text-base lg:text-lg w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2 md:gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="md:w-[22px] md:h-[22px]">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Follow the Chaos
              </span>
            </a>

            <a
              href="https://t.me/avaxlilmuny"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-600/60 backdrop-blur-sm text-white font-bold py-4 md:py-5 px-6 md:px-10 rounded-full border-2 border-blue-400/30 transition-all duration-300 hover:scale-105 hover:bg-blue-600/80 hover:border-blue-400/50 text-sm md:text-base lg:text-lg w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2 md:gap-3">
                <MessageCircle size={18} className="md:w-[22px] md:h-[22px]" />
                Join the Pack
              </span>
            </a>

            <a
              href="https://dexscreener.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-600/60 backdrop-blur-sm text-white font-bold py-4 md:py-5 px-6 md:px-10 rounded-full border-2 border-green-400/30 transition-all duration-300 hover:scale-105 hover:bg-green-600/80 hover:border-green-400/50 text-sm md:text-base lg:text-lg w-full sm:w-auto sm:col-span-2 lg:col-span-1"
            >
              <span className="flex items-center justify-center gap-2 md:gap-3">
                <BarChart3 size={18} className="md:w-[22px] md:h-[22px]" />
                DexScreener
              </span>
            </a>
          </div>
        </div>

        {/* Enhanced Stats Bar - Updated Total Supply to 1B */}
        <div
          className={`transition-all duration-1000 delay-600 px-2 sm:px-4 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 bg-black/50 backdrop-blur-md border border-white/20 rounded-2xl px-4 sm:px-6 md:px-10 py-4 md:py-6 shadow-2xl max-w-full overflow-hidden">
            <div className="text-center flex-shrink-0">
              <div className="text-bananaYellow font-bold text-lg md:text-2xl mb-1">10B</div>
              <div className="text-white/70 text-xs md:text-sm font-medium whitespace-nowrap">Total Supply</div>
            </div>
            <div className="w-full sm:w-px h-px sm:h-8 md:h-12 bg-white/20 flex-shrink-0"></div>
            <div className="text-center flex-shrink-0">
              <div className="text-green-400 font-bold text-lg md:text-2xl flex items-center justify-center gap-1 md:gap-2 mb-1">
                <TrendingUp size={16} className="md:w-[20px] md:h-[20px]" />
                Live
              </div>
              <div className="text-white/70 text-xs md:text-sm font-medium whitespace-nowrap">Trading Now</div>
            </div>
            <div className="w-full sm:w-px h-px sm:h-8 md:h-12 bg-white/20 flex-shrink-0"></div>
            <div className="text-center flex-shrink-0">
              <div className="text-hypePurple font-bold text-lg md:text-2xl mb-1">∞</div>
              <div className="text-white/70 text-xs md:text-sm font-medium whitespace-nowrap">Meme Potential</div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator - Hidden on mobile */}
        <div
          className={`hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-800 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="animate-bounce">
            <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
              <div className="w-1.5 h-4 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-20 bg-gradient-to-t from-white via-white/80 to-transparent z-30"></div>
    </section>
  )
}
