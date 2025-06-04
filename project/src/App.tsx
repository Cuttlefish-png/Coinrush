import React from 'react';
import { CheckCircle2, Bitcoin, Coins, Zap, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const handleJoinWaitlist = () => {
    navigate('/waitlist');
  };

  return (
    <div className="font-sora bg-black">
      {/* Hero Section */}
      <div className="min-h-[600px] px-4 py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIiBzdHJva2U9IiM5QjAwRkYiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="flex justify-center mb-12">
            <img src="/image.png" alt="CoinRush Logo" className="h-16 md:h-20 float-animation" />
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 neon-glow">
              Earn Crypto. Race Ahead.
            </h1>
            <p className="text-off-white text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-pulse-slow">
              CoinRush lets teens complete simple tasks and earn real Bitcoin, Ethereum, and Solana—no bank, no credit card, just free crypto.
            </p>

            <div className="max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
              <button
                onClick={handleJoinWaitlist}
                className="w-full bg-neon-purple text-white px-8 py-3 rounded-lg font-semibold hover:shadow-neon transition-all duration-300 hover:scale-105"
              >
                Join Waitlist Now
              </button>
            </div>
            
            <p className="text-off-white text-sm mt-4 animate-pulse">
              Get early access, bonus points, and a chance to win 5 SOL when we launch.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-black py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative text-white">
            How It Works
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-neon-purple mt-4"></span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Sign up for free',
                description: 'Create your account in seconds - no credit card or bank account needed.',
                icon: <CheckCircle2 className="w-12 h-12 text-neon-purple" />,
              },
              {
                title: 'Complete simple tasks',
                description: 'Take surveys, test apps, or play games. New opportunities added daily.',
                icon: <Zap className="w-12 h-12 text-neon-purple" />,
              },
              {
                title: 'Get paid in crypto',
                description: 'Choose BTC, ETH, or SOL - instant payouts with no minimum balance.',
                icon: <Coins className="w-12 h-12 text-neon-purple" />,
              },
            ].map((step, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-black/50 border border-neon-purple shadow-lg hover:shadow-neon transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex justify-center mb-6 float-animation">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                <p className="text-off-white">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Competitive Advantage Section */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative text-white">
              Why Choose CoinRush?
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-neon-purple mt-4"></span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/50 border border-neon-purple p-8 rounded-xl shadow-lg hover:shadow-neon transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Bitcoin className="w-8 h-8 text-neon-purple mr-4" />
                  <h3 className="text-xl font-semibold text-white">Multi-Coin Payouts</h3>
                </div>
                <p className="text-off-white">
                  Unlike competitors who only offer one cryptocurrency, we let you earn and withdraw in BTC, ETH, or SOL - your choice, every time.
                </p>
              </div>

              <div className="bg-black/50 border border-neon-purple p-8 rounded-xl shadow-lg hover:shadow-neon transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-neon-purple mr-4" />
                  <h3 className="text-xl font-semibold text-white">Instant Payouts</h3>
                </div>
                <p className="text-off-white">
                  Get your crypto instantly after completing tasks. No minimum balance required, no waiting periods - just instant rewards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-off-white py-8 px-4 border-t border-neon-purple/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
          <a href="#" className="hover:text-neon-purple transition-colors hover:shadow-neon">
            Terms of Service
          </a>
          <a href="#" className="hover:text-neon-purple transition-colors hover:shadow-neon">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;