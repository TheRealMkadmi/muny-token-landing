"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Shield, Lock, Coins, CheckCircle, Vault, Banknote } from "lucide-react"

export function Tokenomics() {
  const [isVaultOpen, setIsVaultOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    // Check if we're on mobile after component mounts
    setIsMobile(window.innerWidth <= 768)

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener("resize", handleResize)

    if (isInView) {
      const timer = setTimeout(() => {
        setIsActive(true)
        // Auto-open vault after a delay
        setTimeout(() => {
          setIsVaultOpen(true)
        }, 1500)
      }, 500)
      return () => {
        clearTimeout(timer)
        window.removeEventListener("resize", handleResize)
      }
    }

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isInView])

  const vaultFeatures = [
    {
      id: "supply",
      title: "Total Supply",
      value: "10 Billion",
      icon: Coins,
      description: "Fixed supply, no inflation",
      color: "#F6C500",
    },
    {
      id: "mintable",
      title: "Non Mintable",
      value: "✅ Secured",
      icon: Shield,
      description: "No new tokens can be created",
      color: "#00A86A",
    },
    {
      id: "ownership",
      title: "Ownership Renounced",
      value: "✅ Verified",
      icon: Lock,
      description: "Contract ownership permanently removed",
      color: "#763B7D",
    },
  ]

  // Use state-based mobile detection for floating bills count
  const floatingBillsCount = isMobile ? 4 : 8

  return (
    <section
      id="tokenomics"
      ref={ref}
      className="py-16 md:py-20 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 rounded-full bg-bananaYellow opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 md:w-72 h-40 md:h-72 rounded-full bg-moneyGreen opacity-10 blur-3xl"></div>
        {/* Floating money bills - Using state-based count */}
        {Array.from({ length: floatingBillsCount }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          >
            <Banknote size={isMobile ? 16 : 24} className="text-bananaYellow" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header - Mobile Responsive */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-bananaYellow px-4 py-1 rounded-full mb-4">
            <span className="text-black font-bold text-sm">BANANA BANK VAULT</span>
          </div>
          <h2 className="display-font text-bananaYellow text-3xl md:text-4xl lg:text-5xl text-center mb-4">
            TOKENOMICS
          </h2>
          <p className="text-white text-opacity-80 max-w-2xl mx-auto text-sm md:text-base px-4">
            Welcome to the most secure banana vault in the crypto jungle. Your $MUNY is locked, loaded, and legendary.
          </p>
        </motion.div>

        {/* Main Vault Container - Mobile Responsive */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Vault Door */}
            <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl md:rounded-3xl border-4 md:border-8 border-gray-600 shadow-2xl overflow-hidden">
              {/* Vault Door Handle and Lock - Mobile Responsive */}
              <div className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-20">
                <motion.div
                  className="relative"
                  animate={isVaultOpen ? { rotate: 90 } : { rotate: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gold to-bananaYellow rounded-full border-2 md:border-4 border-gray-700 flex items-center justify-center shadow-lg">
                    <Vault size={16} className="md:w-6 md:h-6 text-black" />
                  </div>
                  {/* Handle */}
                  <div className="absolute -right-6 md:-right-8 top-1/2 transform -translate-y-1/2 w-6 md:w-8 h-1.5 md:h-2 bg-gradient-to-r from-gold to-bananaYellow rounded-full"></div>
                </motion.div>
              </div>

              {/* Vault Interior - Hidden until opened */}
              <motion.div
                className="relative min-h-[400px] md:min-h-[500px] p-4 md:p-8"
                initial={{ opacity: 0 }}
                animate={isVaultOpen ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {/* $MUNY Logo and Ticker - Mobile Responsive */}
                <div className="text-center mb-8 md:mb-12">
                  <motion.div
                    className="inline-flex items-center gap-3 md:gap-4 bg-black/30 backdrop-blur-sm rounded-xl md:rounded-2xl px-4 md:px-8 py-4 md:py-6 border border-bananaYellow/30"
                    initial={{ scale: 0 }}
                    animate={isVaultOpen ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    <div className="relative">
                      <Image
                        src="/images/muny-face.png"
                        alt="$MUNY"
                        width={48}
                        height={48}
                        className="md:w-16 md:h-16 rounded-full"
                      />
                      <motion.div
                        className="absolute -inset-1 md:-inset-2 border-2 border-bananaYellow rounded-full"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      />
                    </div>
                    <div className="text-left">
                      <div className="text-bananaYellow font-bold text-2xl md:text-3xl">$MUNY</div>
                      <div className="text-white/70 text-xs md:text-sm">Official Token</div>
                    </div>
                  </motion.div>
                </div>

                {/* Vault Compartments - Mobile Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {vaultFeatures.map((feature, index) => {
                    const IconComponent = feature.icon
                    return (
                      <motion.div
                        key={feature.id}
                        className="relative bg-black/40 backdrop-blur-sm rounded-lg md:rounded-xl border border-white/10 p-4 md:p-6 hover:border-white/20 transition-all duration-300"
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVaultOpen ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        {/* Compartment Lock */}
                        <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3">
                          <motion.div
                            className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center border-2 border-white"
                            animate={{
                              rotate: [0, 360],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                              delay: index * 0.5,
                            }}
                          >
                            <CheckCircle size={12} className="md:w-4 md:h-4 text-white" />
                          </motion.div>
                        </div>

                        {/* Icon */}
                        <div
                          className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto"
                          style={{ backgroundColor: feature.color }}
                        >
                          <IconComponent size={24} className="md:w-8 md:h-8 text-white" />
                        </div>

                        {/* Content */}
                        <div className="text-center">
                          <h3 className="text-white font-bold text-base md:text-lg mb-2">{feature.title}</h3>
                          <div className="text-lg md:text-2xl font-bold mb-2" style={{ color: feature.color }}>
                            {feature.value}
                          </div>
                          <p className="text-white/60 text-xs md:text-sm">{feature.description}</p>
                        </div>

                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Vault Security Badge - Mobile Responsive */}
                <motion.div
                  className="mt-8 md:mt-12 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVaultOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 2 }}
                >
                  <div className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-green-600/20 to-green-400/20 border border-green-400/30 rounded-full px-4 md:px-6 py-2 md:py-3">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <Shield size={20} className="md:w-6 md:h-6 text-green-400" />
                    </motion.div>
                    <span className="text-green-400 font-bold text-sm md:text-base">VAULT SECURED & VERIFIED</span>
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <CheckCircle size={16} className="md:w-5 md:h-5 text-green-400" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Vault Door Closed State */}
              {!isVaultOpen && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isVaultOpen ? 0 : 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center px-4">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <Vault size={60} className="md:w-20 md:h-20 text-bananaYellow mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-2">BANANA VAULT</h3>
                    <p className="text-white/60 text-sm md:text-base">Opening vault...</p>
                    <div className="flex justify-center mt-4">
                      <motion.div
                        className="flex space-x-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-bananaYellow rounded-full"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
