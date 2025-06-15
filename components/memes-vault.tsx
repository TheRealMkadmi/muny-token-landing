"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Heart, Flame, TrendingUp } from "lucide-react"

type Meme = {
  id: number
  image: string
  title: string
  likes: number
  liked: boolean
  trending: boolean
  hot: boolean
}

export function MemesVault() {
  const [memes, setMemes] = useState<Meme[]>([
    {
      id: 1,
      image: "/images/memes/meme-1.png",
      title: "When $MUNY hits different",
      likes: 420,
      liked: false,
      trending: true,
      hot: false,
    },
    {
      id: 2,
      image: "/images/memes/meme-2.png",
      title: "Ape mode: ACTIVATED",
      likes: 1337,
      liked: false,
      trending: false,
      hot: true,
    },
    {
      id: 3,
      image: "/images/memes/meme-3.png",
      title: "Diamond hands only",
      likes: 888,
      liked: false,
      trending: true,
      hot: false,
    },
    {
      id: 4,
      image: "/images/memes/meme-4.png",
      title: "To the moon and beyond",
      likes: 555,
      liked: false,
      trending: false,
      hot: true,
    },
    {
      id: 5,
      image: "/images/memes/meme-5.png",
      title: "HODL gang rise up",
      likes: 777,
      liked: false,
      trending: false,
      hot: false,
    },
    {
      id: 6,
      image: "/images/memes/meme-6.png",
      title: "Banana money printer go brrr",
      likes: 999,
      liked: false,
      trending: true,
      hot: true,
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

  const toggleLike = (id: number) => {
    setMemes(
      memes.map((meme) => {
        if (meme.id === id) {
          return {
            ...meme,
            likes: meme.liked ? meme.likes - 1 : meme.likes + 1,
            liked: !meme.liked,
          }
        }
        return meme
      }),
    )
  }

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

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-bananaYellow to-gold text-black px-4 py-2 rounded-full font-bold mb-4">
            <Flame size={20} />
            MEMES VAULT
          </div>
          <h2 className="display-font text-4xl md:text-5xl text-hypePurple mb-4">Fresh from the Timeline</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            The hottest $MUNY memes that broke the internet. Hover to see titles, tap hearts to show love.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="space-y-6">
          {/* First Row - Moving Left */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-scroll-left-seamless">
              {duplicatedMemes.map((meme, index) => (
                <div
                  key={`left-${index}`}
                  className="group relative flex-shrink-0 w-48 h-48 rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
                >
                  {/* Image */}
                  <Image
                    src={meme.image || "/placeholder.svg"}
                    alt={meme.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex gap-1">
                    {meme.trending && (
                      <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <TrendingUp size={10} />
                      </div>
                    )}
                    {meme.hot && (
                      <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Flame size={10} />
                      </div>
                    )}
                  </div>

                  {/* Like Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleLike(meme.id)
                    }}
                    className={`absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-full backdrop-blur-sm transition-all duration-300 ${
                      meme.liked ? "bg-red-500/90 text-white scale-110" : "bg-black/50 text-white hover:bg-red-500/90"
                    }`}
                  >
                    <Heart size={14} fill={meme.liked ? "currentColor" : "none"} />
                    <span className="text-xs font-bold">{meme.likes}</span>
                  </button>

                  {/* Title Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-white font-bold text-sm leading-tight">{meme.title}</h3>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-bananaYellow/50 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Moving Right */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-scroll-right-seamless">
              {duplicatedMemes.reverse().map((meme, index) => (
                <div
                  key={`right-${index}`}
                  className="group relative flex-shrink-0 w-48 h-48 rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
                >
                  {/* Image */}
                  <Image
                    src={meme.image || "/placeholder.svg"}
                    alt={meme.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex gap-1">
                    {meme.trending && (
                      <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <TrendingUp size={10} />
                      </div>
                    )}
                    {meme.hot && (
                      <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Flame size={10} />
                      </div>
                    )}
                  </div>

                  {/* Like Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleLike(meme.id)
                    }}
                    className={`absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-full backdrop-blur-sm transition-all duration-300 ${
                      meme.liked ? "bg-red-500/90 text-white scale-110" : "bg-black/50 text-white hover:bg-red-500/90"
                    }`}
                  >
                    <Heart size={14} fill={meme.liked ? "currentColor" : "none"} />
                    <span className="text-xs font-bold">{meme.likes}</span>
                  </button>

                  {/* Title Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-white font-bold text-sm leading-tight">{meme.title}</h3>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-bananaYellow/50 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to see your meme in the vault?</p>
          <button className="bg-gradient-to-r from-hypePurple to-purple-700 hover:from-purple-700 hover:to-hypePurple text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Submit Your Meme
          </button>
        </div>
      </div>
    </section>
  )
}
