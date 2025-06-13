import Image from "next/image"
import { CreditCard, Wallet, ArrowRightLeft } from "lucide-react"

export function HowToBuy() {
  const steps = [
    {
      title: "Get Wallet",
      description: "Download MetaMask or any ERC-20 compatible wallet",
      icon: <Wallet size={48} className="text-hypePurple" />,
    },
    {
      title: "Fund Wallet",
      description: "Buy ETH from your preferred exchange",
      icon: <CreditCard size={48} className="text-hypePurple" />,
    },
    {
      title: "Swap for $MUNY",
      description: "Use Uniswap to swap ETH for $MUNY",
      icon: <ArrowRightLeft size={48} className="text-hypePurple" />,
    },
  ]

  return (
    <section id="buy" className="py-20 bg-white section-fade relative">
      {/* Background elements */}
      <div
        className="absolute top-20 left-10 w-32 h-32 bg-moneyGreen opacity-10 blob"
        style={{ animationDelay: "-3s" }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-bananaYellow opacity-10 blob"
        style={{ animationDelay: "-1.5s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block bg-moneyGreen px-4 py-1 rounded-full mb-4">
            <span className="text-white font-bold text-sm">SIMPLE STEPS</span>
          </div>
          <h2 className="display-font text-moneyGreen text-4xl md:text-5xl text-center">HOW TO BUY</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-green-gradient rounded-xl p-6 border-2 border-black card-hover wiggle relative overflow-hidden group"
            >
              {/* Corner decoration */}
              <div className="absolute top-0 right-0">
                <div className="w-16 h-16 bg-yellow-gradient rotate-45 transform translate-x-8 -translate-y-8 border-b-2 border-r-2 border-black">
                  <div className="absolute bottom-2 right-2 rotate-[-45deg]">
                    <Image src="/images/banana-icon.png" alt="Banana" width={24} height={24} />
                  </div>
                </div>
              </div>

              {/* Step number */}
              <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-bananaYellow border-2 border-black flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <div className="flex flex-col items-center text-center pt-8">
                <div className="mb-4 bg-white p-4 rounded-full border-2 border-black shadow-md transform transition-transform duration-300 group-hover:scale-110">
                  {step.icon}
                </div>
                <h3 className="font-bold text-2xl mb-2 text-white drop-shadow-sm">{step.title}</h3>
                <p className="text-white text-opacity-90">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
