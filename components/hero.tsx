import Image from "next/image"

export function Hero() {
  return (
    <section id="hero" className="min-h-screen relative flex items-center overflow-hidden bg-green-gradient">
      <div className="banana-bill-bg absolute inset-0 opacity-20"></div>

      {/* Floating blobs */}
      <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-bananaYellow opacity-20 rounded-full blur-3xl float"></div>
      <div
        className="absolute bottom-1/4 right-1/6 w-72 h-72 bg-hypePurple opacity-20 rounded-full blur-3xl float"
        style={{ animationDelay: "-2s" }}
      ></div>

      <div className="container mx-auto px-4 py-20 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <h1 className="display-font text-bananaYellow text-5xl md:text-7xl leading-tight mb-6">
                NOT MONEY, <br />
                JUST{" "}
                <span className="relative inline-block">
                  $MUNY
                  <span className="absolute -top-6 -right-6 transform rotate-12">
                    <Image src="/images/banana-icon.png" alt="Banana" width={32} height={32} className="pulse" />
                  </span>
                </span>
              </h1>
              <p className="text-white text-xl md:text-2xl mb-8 max-w-md">
                The meme that prints bananas. Join the ape revolution now!
              </p>
              <div className="flex space-x-4">
                <button className="pill-button shine text-xl">
                  <span className="flex items-center">
                    BUY NOW
                    <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <a
                  href="#tokenomics"
                  className="py-3 px-6 text-white font-bold hover:text-bananaYellow transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <div className="absolute w-64 h-64 bg-bananaYellow opacity-30 rounded-full blur-3xl pulse"></div>
            <div className="bounce relative z-10">
              <div className="relative">
                <Image
                  src="/images/muny-mascot.png"
                  alt="$MUNY Monkey Mascot"
                  width={400}
                  height={400}
                  className="drop-shadow-xl"
                />
                <div className="absolute -top-5 -right-5 bg-bananaYellow text-black font-bold text-sm px-3 py-1 rounded-full border-2 border-black transform rotate-12 shadow-md">
                  APE IN!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L48 105C96 90 192 60 288 50C384 40 480 50 576 55C672 60 768 60 864 65C960 70 1056 80 1152 75C1248 70 1344 50 1392 40L1440 30V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
