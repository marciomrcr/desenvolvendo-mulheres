import { Heart, MessageCircle, Sparkles } from "lucide-react";

export const HeroDoces2 = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/doces/img1.jpg')`,
        }}
      />

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/40 via-transparent to-orange-900/30" />

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
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 animate-fade-in-up leading-tight">
          <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-orange-300 bg-clip-text text-transparent drop-shadow-lg">
            Doces dos
          </span>
          <br />
          <span className="text-white drop-shadow-2xl">Sonhos</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-12 max-w-4xl leading-relaxed animate-fade-in-up animation-delay-200 font-light">
          Deliciosos{" "}
          <span className="font-semibold text-yellow-300">doces</span>,
          <span className="font-semibold text-pink-300"> salgados</span>,
          <span className="font-semibold text-orange-300"> bolos </span>e{" "}
          <span className="font-semibold text-yellow-300">tortas</span>{" "}
          artesanais
          <br />
          Feitos com muito ❤️ e os melhores ingredientes
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
        <p className="text-white/80 text-lg mt-6 animate-fade-in-up animation-delay-600 font-medium">
          📱 Entrega rápida • 🎂 Feito na hora • ⭐ Qualidade garantida
        </p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />

      <style>{`
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
