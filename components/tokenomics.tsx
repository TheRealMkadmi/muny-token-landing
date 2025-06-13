"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Coins, Users, Megaphone, Wrench, MousePointer, Sparkles } from "lucide-react"

export function Tokenomics() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isActive, setIsActive] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const tokenomicsData = [
    {
      id: "community",
      name: "Community",
      percentage: 40,
      color: "#F6C500",
      icon: Users,
      description: "Community rewards, airdrops, and incentives",
      tokens: "40,000,000,000",
    },
    {
      id: "liquidity",
      name: "Liquidity",
      percentage: 30,
      color: "#00A86A",
      icon: Coins,
      description: "DEX liquidity and market stability",
      tokens: "30,000,000,000",
    },
    {
      id: "marketing",
      name: "Marketing",
      percentage: 20,
      color: "#763B7D",
      icon: Megaphone,
      description: "Promotions and partnerships",
      tokens: "20,000,000,000",
    },
    {
      id: "team",
      name: "Team",
      percentage: 10,
      color: "#F4C38C",
      icon: Wrench,
      description: "Development and operations",
      tokens: "10,000,000,000",
    },
  ]

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsActive(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <section
      id="tokenomics"
      ref={ref}
      className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-bananaYellow opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-moneyGreen opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-bananaYellow px-4 py-1 rounded-full mb-4">
            <span className="text-black font-bold text-sm">TOKEN DISTRIBUTION</span>
          </div>
          <h2 className="display-font text-bananaYellow text-4xl md:text-5xl text-center mb-4">TOKENOMICS</h2>
          <p className="text-white text-opacity-80 max-w-2xl mx-auto">
            100 billion $MUNY tokens distributed to build the strongest ape community
          </p>
        </motion.div>

        {/* Vending Machine */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative bg-gradient-to-b from-[#2a2a3e] to-[#1a1a2e] rounded-2xl border-4 border-[#444] p-8 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Machine Header */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-bananaYellow border-2 border-black flex items-center justify-center mr-3">
                  <span className="display-font text-xl text-black">$M</span>
                </div>
                <h3 className="display-font text-bananaYellow text-2xl">TOKEN DISPENSER</h3>
              </div>
              <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                <span className="text-bananaYellow font-mono text-sm">TOTAL: 100B</span>
              </div>
            </div>

            {/* Token Slots */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {tokenomicsData.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <motion.div
                    key={category.id}
                    className={`relative bg-[#0a0a15] rounded-xl border-2 p-4 cursor-pointer transition-all duration-300 ${
                      selectedCategory === category.id ? "border-2 shadow-lg" : "border-[#333] hover:border-[#555]"
                    }`}
                    style={{
                      borderColor: selectedCategory === category.id ? category.color : undefined,
                      boxShadow: selectedCategory === category.id ? `0 0 20px ${category.color}40` : undefined,
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Percentage Display */}
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold mb-1" style={{ color: category.color }}>
                        {category.percentage}%
                      </div>
                      <div className="text-white text-opacity-60 text-xs">{category.tokens} tokens</div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-[#222] rounded-full h-2 mb-4 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: category.color }}
                        initial={{ width: 0 }}
                        animate={isActive ? { width: `${category.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 + 1 }}
                      />
                    </div>

                    {/* Icon and Name */}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
                        style={{ backgroundColor: category.color }}
                      >
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <h4 className="text-white font-bold text-sm text-center">{category.name}</h4>
                    </div>

                    {/* Selection indicator */}
                    {selectedCategory === category.id && (
                      <motion.div
                        className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: category.color }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <span className="text-white text-xs">✓</span>
                      </motion.div>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Details Panel */}
            {selectedCategory && (
              <motion.div
                className="bg-[#0a0a15] rounded-xl border-2 border-[#333] p-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {(() => {
                  const category = tokenomicsData.find((c) => c.id === selectedCategory)
                  if (!category) return null
                  const IconComponent = category.icon
                  return (
                    <div className="flex items-start">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                        style={{ backgroundColor: category.color }}
                      >
                        <IconComponent size={32} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2">{category.name}</h4>
                        <p className="text-white text-opacity-70 mb-3">{category.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="bg-black bg-opacity-30 px-3 py-1 rounded-full">
                            <span className="text-white text-opacity-60">Allocation: </span>
                            <span style={{ color: category.color }} className="font-bold">
                              {category.percentage}%
                            </span>
                          </div>
                          <div className="bg-black bg-opacity-30 px-3 py-1 rounded-full">
                            <span className="text-white text-opacity-60">Tokens: </span>
                            <span style={{ color: category.color }} className="font-bold">
                              {category.tokens}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </motion.div>
            )}

            {/* Enhanced Machine Footer */}
            <div className="flex justify-center mt-8">
              <motion.div
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-bananaYellow to-moneyGreen rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

                {/* Main button */}
                <div className="relative bg-gradient-to-r from-[#1a1a2e] to-[#2a2a3e] border-2 border-bananaYellow rounded-full px-6 py-3 flex items-center space-x-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  {/* Monkey avatar */}
                  <div className="relative">
                    <Image src="/images/muny-face.png" alt="$MUNY" width={32} height={32} className="rounded-full" />
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3 bg-moneyGreen rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {/* Text content */}
                  <div className="flex items-center space-x-2">
                    <motion.div
                      animate={{
                        x: [0, 3, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <MousePointer size={16} className="text-bananaYellow" />
                    </motion.div>
                    <span className="text-white font-medium">Click any category to learn more</span>
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <Sparkles size={16} className="text-bananaYellow" />
                    </motion.div>
                  </div>

                  {/* Hover effect particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-full">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-bananaYellow rounded-full opacity-0 group-hover:opacity-100"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: "50%",
                        }}
                        animate={{
                          y: [-10, -20, -10],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Pulsing ring effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-bananaYellow rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
