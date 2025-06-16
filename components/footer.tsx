"use client"

import Image from "next/image"
import { Copy, MessageCircle, Github } from "lucide-react"

export function Footer() {
  const contractAddress = "0x1234567890abcdef1234567890abcdef12345678"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    alert("Contract address copied to clipboard!")
  }

  return (
    <footer className="bg-gradient-to-b from-hypePurple to-[#5a2c61] py-12 md:py-16 border-t-4 border-bananaYellow relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-hypePurple/50 to-transparent"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-bananaYellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-20 -left-20 w-64 h-64 bg-moneyGreen/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Floating elements */}
        <div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-bananaYellow/30 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/3 w-3 h-3 bg-moneyGreen/30 rounded-full animate-bounce"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-gold/40 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content - Mobile Responsive */}
        <div className="flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:justify-between mb-8 md:mb-12">
          {/* Logo section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start group">
              <div className="relative">
                <Image
                  src="/images/muny-face.png"
                  alt="$MUNY Mini Mascot"
                  width={40}
                  height={40}
                  className="md:w-12 md:h-12 mr-3 md:mr-4 transition-transform duration-300 group-hover:rotate-12"
                />
                <div className="absolute -inset-2 bg-bananaYellow/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="display-font text-bananaYellow text-2xl md:text-3xl mb-1">$MUNY</h3>
                <p className="text-white/60 text-xs md:text-sm">The meme that prints bananas</p>
              </div>
            </div>
          </div>

          {/* Contract address - Mobile Responsive */}
          <div className="w-full md:w-auto">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 p-3 md:p-4 hover:border-bananaYellow/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                <div className="text-center md:text-left">
                  <span className="text-white/70 text-xs md:text-sm block mb-1">Contract Address:</span>
                  <span className="text-bananaYellow text-xs md:text-sm font-mono break-all md:truncate md:max-w-[200px] lg:max-w-xs block">
                    {contractAddress}
                  </span>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="flex-shrink-0 p-2 bg-bananaYellow/10 hover:bg-bananaYellow/20 rounded-lg text-bananaYellow hover:text-white transition-all duration-300 group"
                  aria-label="Copy contract address"
                >
                  <Copy
                    size={16}
                    className="md:w-[18px] md:h-[18px] group-hover:scale-110 transition-transform duration-200"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <a
              href="https://t.me/avaxlilmuny"
              className="group relative overflow-hidden bg-gradient-to-r from-bananaYellow to-gold text-black font-bold py-3 md:py-4 px-6 md:px-8 rounded-full border-2 border-black transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold to-bananaYellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                <MessageCircle size={18} className="md:w-5 md:h-5" />
                Join the Pack
              </span>
            </a>
          </div>
        </div>

        {/* Tagline - Enhanced */}
        <div className="text-center mb-8 md:mb-12">
          <div className="relative inline-block">
            <p className="text-white text-lg md:text-xl lg:text-2xl font-bold italic relative z-10 px-4">
              "For the degenz who laugh while printing."
            </p>
            <div className="absolute -inset-4 bg-gradient-to-r from-bananaYellow/10 via-transparent to-bananaYellow/10 blur-xl"></div>
          </div>
        </div>

        {/* Navigation Links - Mobile Responsive */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-12">
          {[
            { name: "How to Buy", href: "#buy" },
            { name: "Tokenomics", href: "#tokenomics" },
            { name: "Community", href: "#community" },
            { name: "Memes Vault", href: "#memes" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/70 hover:text-bananaYellow transition-colors duration-300 font-medium hover:scale-105 transform transition-transform text-sm md:text-base"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Bottom section - Mobile Responsive */}
        <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-white/50 text-xs md:text-sm">© 2025 $MUNY. All rights reserved. Not financial advice.</p>
            <p className="text-white/30 text-xs mt-1">Built with 🍌 by the community, for the community.</p>
          </div>

          {/* Social links - Mobile Responsive */}
          <div className="flex space-x-4">
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="md:w-5 md:h-5">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
                href: "https://x.com/lilmunyavax",
                label: "X (Twitter)",
              },
              {
                icon: <MessageCircle size={18} className="md:w-5 md:h-5" />,
                href: "https://t.me/avaxlilmuny",
                label: "Telegram",
              },
              {
                icon: <Github size={18} className="md:w-5 md:h-5" />,
                href: "#",
                label: "GitHub",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-2 md:p-3 bg-white/5 hover:bg-bananaYellow/20 rounded-full text-white/70 hover:text-bananaYellow transition-all duration-300 hover:scale-110 group"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="group-hover:rotate-12 transition-transform duration-300">{social.icon}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
