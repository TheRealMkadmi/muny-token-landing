"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Shield, Lock, Coins, CheckCircle, Vault, Banknote } from "lucide-react"

export function Tokenomics() {
  const [isVaultOpen, setIsVaultOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsActive(true)
        // Auto-open vault after a delay
        setTimeout(() => {
          setIsVaultOpen(true)
        }, 1500)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  const vaultFeatures = [
    {
      id: "supply",
      title: "Total Supply",
      value: "1 Billion",
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
        {/* Floating money bills */}
        {Array.from({ length: 8 }).map((_, i) => (
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
            <Banknote size={24} className="text-bananaYellow" />
          </motion.div>
        ))}
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
            <span className="text-black font-bold text-sm">BANANA BANK VAULT</span>
          </div>
          <h2 className="display-font text-bananaYellow text-4xl md:text-5xl text-center mb-4">TOKENOMICS</h2>
          <p className="text-white text-opacity-80 max-w-2xl mx-auto">
            Welcome to the most secure banana vault in the crypto jungle. Your $MUNY is locked, loaded, and legendary.
          </p>
        </motion.div>

        {/* Main Vault Container */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Vault Door */}
            <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl border-8 border-gray-600 shadow-2xl overflow-hidden">
              {/* Vault Door Handle and Lock */}
              <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-20">
                <motion.div
                  className="relative"
                  animate={isVaultOpen ? { rotate: 90 } : { rotate: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-bananaYellow rounded-full border-4 border-gray-700 flex items-center justify-center shadow-lg">
                    <Vault size={24} className="text-black" />
                  </div>
                  {/* Handle */}
                  <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-8 h-2 bg-gradient-to-r from-gold to-bananaYellow rounded-full"></div>
                </motion.div>
              </div>

              {/* Vault Interior - Hidden until opened */}
              <motion.div
                className="relative min-h-[500px] p-8"
                initial={{ opacity: 0 }}
                animate={isVaultOpen ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {/* $MUNY Logo and Ticker */}
                <div className="text-center mb-12">
                  <motion.div
                    className="inline-flex items-center gap-4 bg-black/30 backdrop-blur-sm rounded-2xl px-8 py-6 border border-bananaYellow/30"
                    initial={{ scale: 0 }}
                    animate={isVaultOpen ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    <div className="relative">
                      <Image src="/images/muny-face.png" alt="$MUNY" width={64} height={64} className="rounded-full" />
                      <motion.div
                        className="absolute -inset-2 border-2 border-bananaYellow rounded-full"
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
                      <div className="text-bananaYellow font-bold text-3xl">$MUNY</div>
                      <div className="text-white/70 text-sm">Official Token</div>
                    </div>
                  </motion.div>
                </div>

                {/* Vault Compartments */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {vaultFeatures.map((feature, index) => {
                    const IconComponent = feature.icon
                    return (
                      <motion.div
                        key={feature.id}
                        className="relative bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300"
                        initial={{ y: 50, opacity: 0 }}
                        animate={isVaultOpen ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        {/* Compartment Lock */}
                        <div className="absolute -top-3 -right-3">
                          <motion.div
                            className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center border-2 border-white"
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
                            <CheckCircle size={16} className="text-white" />
                          </motion.div>
                        </div>

                        {/* Icon */}
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                          style={{ backgroundColor: feature.color }}
                        >
                          <IconComponent size={32} className="text-white" />
                        </div>

                        {/* Content */}
                        <div className="text-center">
                          <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                          <div className="text-2xl font-bold mb-2" style={{ color: feature.color }}>
                            {feature.value}
                          </div>
                          <p className="text-white/60 text-sm">{feature.description}</p>
                        </div>

                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Vault Security Badge */}
                <motion.div
                  className="mt-12 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVaultOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 2 }}
                >
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600/20 to-green-400/20 border border-green-400/30 rounded-full px-6 py-3">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <Shield size={24} className="text-green-400" />
                    </motion.div>
                    <span className="text-green-400 font-bold">VAULT SECURED & VERIFIED</span>
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
                      <CheckCircle size={20} className="text-green-400" />
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
                  <div className="text-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <Vault size={80} className="text-bananaYellow mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-white text-2xl font-bold mb-2">BANANA VAULT</h3>
                    <p className="text-white/60">Opening vault...</p>
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
