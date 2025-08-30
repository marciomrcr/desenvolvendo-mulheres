"use client";

import {
  Clock,
  Gift,
  Heart,
  MessageCircle,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

export const ProdutosSecao = () => {
  const products = [
    {
      id: 1,
      name: "Kit Festa Completo",
      subtitle: "Para 20 pessoas",
      originalPrice: 189.9,
      price: 149.9,
      discount: 21,
      image: "/doces/kit.jpg",
      features: [
        "4 Doces Gourmet",
        "2 Bolos Temáticos",
        "30 Salgadinhos",
        "Entrega Grátis",
      ],
      badge: "MAIS VENDIDO",
      badgeColor: "bg-red-500",
      urgency: "Últimas 3 unidades!",
      social: "127 pessoas compraram hoje",
    },
    {
      id: 2,
      name: "Bolo Personalizado",
      subtitle: "Sabor à sua escolha",
      originalPrice: 89.9,
      price: 69.9,
      discount: 22,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Recheio Premium",
        "Decoração Única",
        "Serve 8-10 pessoas",
        "Foto Comestível",
      ],
      badge: "OFERTA RELÂMPAGO",
      badgeColor: "bg-orange-500 animate-pulse",
      urgency: "Oferta acaba em 4h",
      social: "89 pessoas compraram hoje",
    },
    {
      id: 3,
      name: "Cesta de Doces Finos",
      subtitle: "Seleção premium",
      originalPrice: 119.9,
      price: 89.9,
      discount: 25,
      image: "/doces/cesta.jpg",
      features: [
        "12 Doces Artesanais",
        "Embalagem Luxo",
        "Brigadeiros Gourmet",
        "Cartão Personalizado",
      ],
      badge: "PRESENTE IDEAL",
      badgeColor: "bg-purple-500",
      urgency: "Edição limitada",
      social: "64 pessoas compraram hoje",
    },
  ];

  const handleWhatsAppClick = (productName: string) => {
    const message = `Olá! Gostaria de encomendar: ${productName} 🎂✨`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-8xl">🧁</div>
        <div className="absolute top-60 right-20 text-6xl">🍰</div>
        <div className="absolute bottom-40 left-1/4 text-7xl">🍪</div>
        <div className="absolute top-1/3 right-1/3 text-5xl">🎂</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-4">
            <Sparkles className="w-8 h-8 text-yellow-500 mr-2" />
            <span className="text-lg font-bold text-orange-600 bg-orange-100 px-4 py-2 rounded-full">
              OFERTAS ESPECIAIS
            </span>
            <Sparkles className="w-8 h-8 text-yellow-500 ml-2" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-800 mb-4">
            Nossos{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              Sucessos
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ⭐ Mais de{" "}
            <span className="font-bold text-green-600">
              1.200 clientes satisfeitos
            </span>{" "}
            este mês!
            <br />
            🚚 <span className="font-bold">Entrega grátis</span> para pedidos
            acima de R$ 80
          </p>

          {/* Trust indicators */}
          <div className="flex justify-center items-center mt-6 space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-500 mr-1" />
              <span className="font-semibold">4.9/5 (892 avaliações)</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-blue-500 mr-1" />
              <span className="font-semibold">280 pedidos hoje</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              {/* Product Card */}
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:scale-105 hover:-translate-y-2">
                {/* Badge */}
                <div
                  className={`absolute top-4 left-4 z-10 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}
                >
                  {product.badge}
                </div>

                {/* Discount Badge */}
                <div className="absolute top-4 right-4 z-10 bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold shadow-lg">
                  <div className="text-center">
                    <div className="text-xs">-{product.discount}%</div>
                    <div className="text-xs">OFF</div>
                  </div>
                </div>

                {/* Product Image Area */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Floating hearts animation */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="absolute top-4 left-8 w-4 h-4 text-pink-400 animate-bounce delay-100" />
                    <Heart className="absolute bottom-8 right-12 w-3 h-3 text-red-400 animate-bounce delay-300" />
                    <Heart className="absolute top-12 right-6 w-5 h-5 text-pink-300 animate-bounce delay-500" />
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {product.subtitle}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg text-gray-500 line-through">
                          De R${" "}
                          {product.originalPrice.toFixed(2).replace(".", ",")}
                        </div>
                        <div className="text-3xl font-black text-green-600 flex items-center">
                          R$ {product.price.toFixed(2).replace(".", ",")}
                          <span className="text-sm font-normal ml-2 bg-green-100 text-green-800 px-2 py-1 rounded">
                            À vista
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Urgency & Social Proof */}
                  <div className="mb-6 space-y-2">
                    <div className="flex items-center text-red-600 text-sm font-bold">
                      <Clock className="w-4 h-4 mr-2" />
                      {product.urgency}
                    </div>
                    <div className="flex items-center text-blue-600 text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      {product.social}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleWhatsAppClick(product.name)}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-2xl text-lg shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <div className="relative flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 mr-3" />
                      <span>Quero Este!</span>
                    </div>
                  </button>

                  {/* Payment options */}
                  <div className="text-center text-sm text-gray-500 mt-3">
                    💳 PIX, Cartão ou Dinheiro • 📱 Entrega em 24h
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-3xl p-8 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <Gift className="w-16 h-16 mx-auto mb-4 animate-bounce" />
            <h3 className="text-3xl font-bold mb-4">
              🎁 Oferta Especial de Hoje!
            </h3>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Compre qualquer produto e{" "}
              <span className="font-black bg-white/20 px-3 py-1 rounded">
                GANHE 20% OFF
              </span>{" "}
              no próximo pedido!
            </p>
            <div className="flex justify-center items-center space-x-4 text-lg">
              <Clock className="w-6 h-6" />
              <span className="font-bold">Válido apenas hoje!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
