import React from 'react';
import { useNavigate } from 'react-router-dom';

function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="font-sora bg-black min-h-screen flex items-center justify-center p-4">
      <div className="bg-black/50 border border-neon-purple p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6 text-white neon-glow">🎉 You're on the waitlist!</h1>
        <p className="text-white mb-8">
          We'll email you early access and crypto rewards soon.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-neon-purple text-white px-8 py-3 rounded-lg font-semibold hover:shadow-neon transition-all duration-300"
        >
          Back to Homepage
        </button>
      </div>
    </div>
  );
}

export default ThankYou; 