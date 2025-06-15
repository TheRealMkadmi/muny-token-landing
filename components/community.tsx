import Image from "next/image"
import { MessageCircle, Sword } from "lucide-react"

export function Community() {
  const socials = [
    {
      name: "Follow the Chaos",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: "#",
      color: "bg-yellow-gradient",
      shadowClass: "shadow-glow-yellow",
    },
    {
      name: "Telegram",
      icon: <MessageCircle size={24} className="md:w-8 md:h-8" />,
      url: "https://t.me/lilmunyavax",
      color: "bg-green-gradient",
      shadowClass: "shadow-glow-green",
    },
    {
      name: "Enter the Arena",
      icon: <Sword size={24} className="md:w-8 md:h-8" />,
      url: "#",
      color: "bg-orange-gradient",
      shadowClass: "shadow-glow-orange",
    },
  ]

  return (
    <section id="community" className="py-16 md:py-20 bg-purple-gradient section-fade relative overflow-hidden">
      {/* Background elements */}
      <div className="banana-bill-bg absolute inset-0 opacity-10"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-bananaYellow opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-moneyGreen opacity-20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <div className="inline-block bg-bananaYellow px-4 py-1 rounded-full mb-4">
            <span className="text-black font-bold text-sm">JOIN US</span>
          </div>
          <h2 className="display-font text-bananaYellow text-3xl md:text-4xl lg:text-5xl text-center">
            JOIN THE COMMUNITY
          </h2>
          <p className="text-white text-center mt-4 max-w-lg text-sm md:text-base px-4">
            Connect with fellow apes and stay updated on the latest $MUNY news and events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {socials.map((social, index) => (
            <a key={index} href={social.url} className="group" target="_blank" rel="noopener noreferrer">
              <div
                className={`${social.color} rounded-2xl aspect-square flex flex-col items-center justify-center p-6 md:p-8 border-2 border-black card-hover relative overflow-hidden ${social.shadowClass}`}
              >
                <div className="text-black mb-3 md:mb-4 transition-all duration-500 group-hover:scale-0 group-hover:opacity-0 group-hover:rotate-180">
                  {social.icon}
                </div>
                <h3 className="font-bold text-lg md:text-xl text-black transition-all duration-500 group-hover:scale-0 group-hover:opacity-0">
                  {social.name}
                </h3>

                {/* Monkey face on hover with enhanced animation */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-0 rotate-[-180deg] transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0">
                  <Image
                    src="/images/muny-face.png"
                    alt="$MUNY Monkey Face"
                    width={80}
                    height={80}
                    className="md:w-[100px] md:h-[100px] pulse"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Stats counter - Mobile Responsive */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {[
            { label: "Community Members", value: "25K+" },
            { label: "Holders", value: "12K+" },
            { label: "Daily Active Users", value: "5K+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center border-2 border-white border-opacity-20"
            >
              <div className="text-2xl md:text-3xl font-bold text-bananaYellow mb-2">{stat.value}</div>
              <div className="text-white text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
