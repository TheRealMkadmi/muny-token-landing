"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white relative overflow-hidden section-fade">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
          <div className="md:w-1/3 relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-bananaYellow rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-moneyGreen rounded-full opacity-20 blur-2xl"></div>

            <div className="relative z-10 transform rotate-6 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/muny-thief.png"
                alt="Lil Muny Thief"
                width={300}
                height={300}
                className="drop-shadow-xl"
              />
            </div>
          </div>

          <div className="md:w-2/3">
            <h2 className="display-font text-4xl md:text-5xl text-moneyGreen mb-6">
              About <span className="text-bananaYellow">$MUNY</span>
            </h2>

            <p className="text-xl md:text-2xl leading-relaxed mb-6 font-medium">
              Lil Muny wasn't born rich — he stole the bag.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Now he memes harder, plays smarter, and flips chaos into gold.
            </p>

            <p className="text-xl md:text-2xl leading-relaxed font-bold text-hypePurple">
              He's not a mascot. He's a movement.
            </p>

            <div className="mt-8 flex gap-4">
              <div className="h-2 w-16 bg-bananaYellow rounded-full"></div>
              <div className="h-2 w-8 bg-moneyGreen rounded-full"></div>
              <div className="h-2 w-4 bg-hypePurple rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
