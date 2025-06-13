"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Heart, MessageSquare, Repeat2, Bookmark, TrendingUp, Flame } from "lucide-react"

type Meme = {
  id: number
  image: string
  title: string
  likes: number
  comments: number
  reposts: number
  saved: number
  liked: boolean
  saved: boolean
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
      comments: 69,
      reposts: 42,
      saved: 13,
      liked: false,
      saved: false,
      trending: true,
      hot: false,
    },
    {
      id: 2,
      image: "/images/memes/meme-2.png",
      title: "Ape mode: ACTIVATED",
      likes: 1337,
      comments: 89,
      reposts: 201,
      saved: 56,
      liked: false,
      saved: false,
      trending: false,
      hot: true,
    },
    {
      id: 3,
      image: "/images/memes/meme-3.png",
      title: "Diamond hands only",
      likes: 888,
      comments: 123,
      reposts: 76,
      saved: 32,
      liked: false,
      saved: false,
      trending: true,
      hot: false,
    },
    {
      id: 4,
      image: "/images/memes/meme-4.png",
      title: "To the moon and beyond",
      likes: 555,
      comments: 44,
      reposts: 22,
      saved: 11,
      liked: false,
      saved: false,
      trending: false,
      hot: true,
    },
    {
      id: 5,
      image: "/images/memes/meme-5.png",
      title: "HODL gang rise up",
      likes: 777,
      comments: 55,
      reposts: 33,
      saved: 22,
      liked: false,
      saved: false,
      trending: false,
      hot: false,
    },
    {
      id: 6,
      image: "/images/memes/meme-6.png",
      title: "Banana money printer go brrr",
      likes: 999,
      comments: 111,
      reposts: 88,
      saved: 44,
      liked: false,
      saved: false,
      trending: true,
      hot: true,
    },
  ])

  const [filter, setFilter] = useState<"all" | "trending" | "hot">("all")
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")

            // Animate meme cards with stagger
            if (gridRef.current) {
              const cards = gridRef.current.children
              Array.from(cards).forEach((card, index) => {
                setTimeout(() => {
                  card.classList.add("animate-in")
                }, index * 100)
              })
            }
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

  const toggleSave = (id: number) => {
    setMemes(
      memes.map((meme) => {
        if (meme.id === id) {
          return {
            ...meme,
            saved: meme.saved ? meme.saved - 1 : meme.saved + 1,
            saved: !meme.saved,
          }
        }
        return meme
      }),
    )
  }

  const filteredMemes = memes.filter((meme) => {
    if (filter === "trending") return meme.trending
    if (filter === "hot") return meme.hot
    return true
  })

  return (
    <section
      ref={sectionRef}
      id="memes"
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden section-fade"
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
            The hottest $MUNY memes that broke the internet. Double tap to show love, save your favorites.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-1 shadow-lg border border-gray-200">
            {["all", "trending", "hot"].map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption as typeof filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === filterOption
                    ? "bg-gradient-to-r from-bananaYellow to-gold text-black shadow-md"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {filterOption === "all" && "All Memes"}
                {filterOption === "trending" && (
                  <span className="flex items-center gap-1">
                    <TrendingUp size={16} />
                    Trending
                  </span>
                )}
                {filterOption === "hot" && (
                  <span className="flex items-center gap-1">
                    <Flame size={16} />
                    Hot
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Memes Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMemes.map((meme) => (
            <div
              key={meme.id}
              className="meme-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 opacity-0"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden group">
                <Image
                  src={meme.image || "/placeholder.svg"}
                  alt={meme.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {meme.trending && (
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <TrendingUp size={12} />
                      Trending
                    </div>
                  )}
                  {meme.hot && (
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Flame size={12} />
                      Hot
                    </div>
                  )}
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-lg mb-3 text-gray-800">{meme.title}</h3>

                {/* Actions */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => toggleLike(meme.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
                      meme.liked
                        ? "text-red-500 bg-red-50 scale-110"
                        : "text-gray-600 hover:text-red-500 hover:bg-red-50"
                    }`}
                  >
                    <Heart size={18} fill={meme.liked ? "currentColor" : "none"} />
                    <span className="font-medium">{meme.likes}</span>
                  </button>

                  <button className="flex items-center gap-2 px-3 py-2 rounded-full text-gray-600 hover:text-blue-500 hover:bg-blue-50 transition-all duration-300">
                    <MessageSquare size={18} />
                    <span className="font-medium">{meme.comments}</span>
                  </button>

                  <button className="flex items-center gap-2 px-3 py-2 rounded-full text-gray-600 hover:text-green-500 hover:bg-green-50 transition-all duration-300">
                    <Repeat2 size={18} />
                    <span className="font-medium">{meme.reposts}</span>
                  </button>

                  <button
                    onClick={() => toggleSave(meme.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
                      meme.saved
                        ? "text-blue-500 bg-blue-50 scale-110"
                        : "text-gray-600 hover:text-blue-500 hover:bg-blue-50"
                    }`}
                  >
                    <Bookmark size={18} fill={meme.saved ? "currentColor" : "none"} />
                    <span className="font-medium">{meme.saved}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-hypePurple to-purple-700 hover:from-purple-700 hover:to-hypePurple text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Load More Legendary Memes
          </button>
        </div>
      </div>
    </section>
  )
}
