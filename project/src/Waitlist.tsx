import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Waitlist() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'waitlist',
          ...formData,
          'notification-email': 'narayanananurag5@gmail.com'
        }).toString()
      });

      if (response.ok) {
        navigate('/thank-you');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sora bg-black min-h-screen flex items-center justify-center p-4">
      <div className="bg-black/50 border border-neon-purple p-8 rounded-xl shadow-lg max-w-md w-full transform hover:scale-[1.02] transition-all duration-300">
        <div className="flex justify-center mb-8">
          <img 
            src="/image.png" 
            alt="CoinRush Logo" 
            className="h-16 md:h-20 float-animation" 
          />
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-8 text-white neon-glow animate-pulse-slow">
          Join CoinRush Waitlist
        </h1>
        
        <form 
          name="waitlist" 
          method="POST" 
          data-netlify="true" 
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit} 
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="waitlist" />
          <input type="hidden" name="notification-email" value="narayanananurag5@gmail.com" />
          <div hidden>
            <input name="bot-field" />
          </div>

          <div className="transform hover:scale-[1.02] transition-transform duration-300">
            <label htmlFor="name" className="block text-neon-purple mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-neon-purple text-white focus:outline-none focus:ring-2 focus:ring-neon-purple transition-all duration-300"
              placeholder="Enter your full name"
            />
          </div>
          
          <div className="transform hover:scale-[1.02] transition-transform duration-300">
            <label htmlFor="email" className="block text-neon-purple mb-2 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-neon-purple text-white focus:outline-none focus:ring-2 focus:ring-neon-purple transition-all duration-300"
              placeholder="Enter your email"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-neon-purple text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300
              ${isSubmitting 
                ? 'opacity-75 cursor-not-allowed' 
                : 'hover:shadow-neon hover:scale-105'
              }`}
          >
            {isSubmitting ? 'Joining...' : 'Join Waitlist Now'}
          </button>
        </form>

        <p className="text-off-white text-sm mt-6 text-center animate-pulse">
          Get early access, bonus points, and a chance to win 5 SOL when we launch.
        </p>
      </div>
    </div>
  );
}

export default Waitlist; 