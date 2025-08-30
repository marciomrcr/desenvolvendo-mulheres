"use client";

import { Heart, MessageCircle, Sparkles } from "lucide-react";

export const HeroDoces = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23ff6b9d;stop-opacity:1" /><stop offset="50%" style="stop-color:%23ffd93d;stop-opacity:1" /><stop offset="100%" style="stop-color:%23ff8a65;stop-opacity:1" /></linearGradient></defs><rect width="1920" height="1080" fill="url(%23bg)"/><circle cx="200" cy="200" r="50" fill="%23ffffff" opacity="0.1"/><circle cx="1600" cy="300" r="80" fill="%23ffffff" opacity="0.05"/><circle cx="400" cy="700" r="60" fill="%23ffffff" opacity="0.1"/><circle cx="1200" cy="800" r="40" fill="%23ffffff" opacity="0.08"/></svg>')`,
        }}
      />

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/50" />

      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-bounce delay-1000">
          <Sparkles className="w-8 h-8 text-yellow-300 opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-2000">
          <Heart className="w-6 h-6 text-pink-300 opacity-40" />
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce delay-3000">
          <Sparkles className="w-6 h-6 text-orange-300 opacity-50" />
        </div>
        <div className="absolute top-60 right-40 animate-pulse delay-500">
          <Heart className="w-8 h-8 text-yellow-300 opacity-30" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in-down">
          <div className="bg-white/20 backdrop-blur-md rounded-full p-6 shadow-2xl border border-white/30">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              🍰
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 animate-fade-in-up leading-tight">
          <span className="bg-gradient-to-r from-yellow-200 via-pink-200 to-orange-200 bg-clip-text text-transparent drop-shadow-2xl">
            Doces dos
          </span>
          <br />
          <span
            className="text-white drop-shadow-2xl"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
          >
            Sonhos
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl sm:text-2xl lg:text-3xl text-white mb-12 max-w-4xl leading-relaxed animate-fade-in-up animation-delay-200 font-medium"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
        >
          Deliciosos <span className="font-bold text-yellow-100">doces</span>,
          <span className="font-bold text-pink-100"> salgados</span>,
          <span className="font-bold text-orange-100"> bolos </span>e{" "}
          <span className="font-bold text-yellow-100">tortas</span> artesanais
          <br />
          <span className="text-white/95">
            Feitos com muito ❤️ e os melhores ingredientes
          </span>
        </p>

        {/* WhatsApp Button */}
        <div className="animate-fade-in-up animation-delay-400">
          <button className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-6 px-12 rounded-full text-xl shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-green-500/25 active:scale-95 border-4 border-white/20">
            {/* Shine effect */}
            <div className="absolute inset-0 -top-1/2 -left-1/2 w-1/2 h-1/2 bg-white/20 rotate-45 transform transition-transform duration-700 group-hover:translate-x-[300%] group-hover:translate-y-[300%]" />

            <div className="relative flex items-center justify-center space-x-3">
              <MessageCircle className="w-8 h-8 animate-pulse" />
              <span className="tracking-wide">Peça agora mesmo!</span>
            </div>

            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full animate-ping bg-green-400/30 group-hover:animate-none" />
          </button>
        </div>

        {/* Call to action text */}
        <p
          className="text-white text-lg mt-6 animate-fade-in-up animation-delay-600 font-bold"
          style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
        >
          📱 Entrega rápida • 🎂 Feito na hora • ⭐ Qualidade garantida
        </p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />

      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          animation-fill-mode: both;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
};
