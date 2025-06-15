"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Flame } from "lucide-react"

type Meme = {
  id: number
  image: string
  title: string
}

export function MemesVault() {
  const [memes] = useState<Meme[]>([
    {
      id: 1,
      image: "/images/memes/meme-1.png",
      title: "When $MUNY hits different",
    },
    {
      id: 2,
      image: "/images/memes/meme-2.png",
      title: "Ape mode: ACTIVATED",
    },
    {
      id: 3,
      image: "/images/memes/meme-3.png",
      title: "Diamond hands only",
    },
    {
      id: 4,
      image: "/images/memes/meme-4.png",
      title: "To the moon and beyond",
    },
    {
      id: 5,
      image: "/images/memes/meme-5.png",
      title: "HODL gang rise up",
    },
    {
      id: 6,
      image: "/images/memes/meme-6.png",
      title: "Banana money printer go brrr",
    },
  ])

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

  // Duplicate memes multiple times for seamless infinite scroll
  const duplicatedMemes = [...memes, ...memes, ...memes, ...memes]

  return (
    <section
      ref={sectionRef}
      id="memes"
      className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden section-fade"
    >
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-bananaYellow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-hypePurple/10 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="text-center mb-12 px-4">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-bananaYellow to-gold text-black px-4 py-2 rounded-full font-bold mb-4">
          <Flame size={20} />
          MEMES VAULT
        </div>
        <h2 className="display-font text-4xl md:text-5xl text-hypePurple mb-4">Fresh from the Timeline</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          The hottest $MUNY memes that broke the internet. Pure visual chaos, no distractions.
        </p>
      </div>

      {/* Full Width Carousel Container */}
      <div className="w-full space-y-0">
        {/* First Row - Moving Left */}
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-scroll-left-seamless-fullwidth">
            {duplicatedMemes.map((meme, index) => (
              <div
                key={`left-${index}`}
                className="group relative flex-shrink-0 w-48 h-48 overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                {/* Image */}
                <Image
                  src={meme.image || "/placeholder.svg"}
                  alt={meme.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 ring-0 group-hover:ring-2 group-hover:ring-bananaYellow/50 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Moving Right */}
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-scroll-right-seamless-fullwidth">
            {duplicatedMemes.reverse().map((meme, index) => (
              <div
                key={`right-${index}`}
                className="group relative flex-shrink-0 w-48 h-48 overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                {/* Image */}
                <Image
                  src={meme.image || "/placeholder.svg"}
                  alt={meme.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 ring-0 group-hover:ring-2 group-hover:ring-bananaYellow/50 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12 px-4">
        <p className="text-gray-600 mb-4">Want to see your meme in the vault?</p>
        <button className="bg-gradient-to-r from-hypePurple to-purple-700 hover:from-purple-700 hover:to-hypePurple text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
          Submit Your Meme
        </button>
      </div>
    </section>
  )
}
