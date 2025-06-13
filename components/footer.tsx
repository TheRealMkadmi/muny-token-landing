"use client"

import Image from "next/image"
import { Copy, Twitter, MessageCircle, Github } from "lucide-react"

export function Footer() {
  const contractAddress = "0x1234567890abcdef1234567890abcdef12345678"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    alert("Contract address copied to clipboard!")
  }

  return (
    <footer className="bg-hypePurple py-10 border-t-2 border-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-purple-gradient to-transparent opacity-50"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-bananaYellow opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-moneyGreen opacity-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <Image src="/images/muny-face.png" alt="$MUNY Mini Mascot" width={40} height={40} className="mr-3" />
              <h3 className="display-font text-bananaYellow text-2xl">$MUNY</h3>
            </div>
          </div>

          <div className="mb-6 md:mb-0">
            <div className="flex items-center bg-black bg-opacity-20 backdrop-blur-sm rounded-lg p-2">
              <span className="text-white text-sm mr-2">Contract:</span>
              <span className="text-bananaYellow text-sm truncate max-w-[150px] md:max-w-xs">{contractAddress}</span>
              <button
                onClick={copyToClipboard}
                className="ml-2 text-white hover:text-bananaYellow transition-colors duration-300"
                aria-label="Copy contract address"
              >
                <Copy size={16} />
              </button>
            </div>
          </div>

          <div>
            <a
              href="https://t.me/munytoken"
              className="pill-button inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center">
                <MessageCircle size={18} className="mr-2" />
                Join Telegram Chat
              </span>
            </a>
          </div>
        </div>

        {/* Platform logos */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <div className="bg-white p-3 rounded-lg">
            <Image src="/images/avax-logo.png" alt="Avalanche" width={120} height={40} className="h-8 w-auto" />
          </div>
          <div className="bg-white p-3 rounded-lg">
            <Image src="/images/arena-logo.png" alt="Arena" width={120} height={40} className="h-8 w-auto" />
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mb-8">
          <p className="text-white text-lg font-medium italic">"For the degenz who laugh while printing."</p>
        </div>

        <div className="pt-6 border-t border-white border-opacity-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-opacity-70 text-sm mb-4 md:mb-0">
            © 2025 $MUNY. All rights reserved. Not financial advice.
          </p>

          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-bananaYellow transition-colors duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white hover:text-bananaYellow transition-colors duration-300">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="text-white hover:text-bananaYellow transition-colors duration-300">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
