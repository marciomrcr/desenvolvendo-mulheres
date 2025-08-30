import {
  Award,
  CheckCircle,
  ChefHat,
  Clock,
  Gift,
  Heart,
  Shield,
  Star,
  Truck,
  Users,
} from "lucide-react";

export const PorqueNosEscolher = () => {
  const features = [
    {
      icon: <ChefHat className="w-8 h-8 text-orange-500" />,
      title: "Receitas Artesanais",
      description:
        "Cada produto é feito à mão seguindo receitas de família há mais de 20 anos",
      highlight: "+20 anos de experiência",
      stats: "100% artesanal",
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Ingredientes Premium",
      description:
        "Usamos apenas ingredientes selecionados e de primeira qualidade",
      highlight: "Qualidade garantida",
      stats: "Ingredientes naturais",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Entrega Rápida",
      description: "Preparamos e entregamos seus doces em até 24 horas",
      highlight: "Entrega em 24h",
      stats: "98% no prazo",
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Feito com Amor",
      description:
        "Cada doce é preparado com carinho especial para sua ocasião",
      highlight: "Atenção personalizada",
      stats: "Cada pedido é único",
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: "Reconhecimento",
      description: "Eleitos 'Melhor Doceria da Região' por 3 anos consecutivos",
      highlight: "Prêmio 2022, 2023, 2024",
      stats: "3x vencedores",
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      title: "Clientes Satisfeitos",
      description: "Mais de 5.000 famílias já provaram nossos doces",
      highlight: "+5.000 famílias atendidas",
      stats: "98% de satisfação",
    },
  ];

  const guarantees = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: "100% Satisfação Garantida",
    },
    {
      icon: <Truck className="w-6 h-6 text-blue-500" />,
      text: "Frete Grátis acima de R$ 80",
    },
    {
      icon: <Gift className="w-6 h-6 text-purple-500" />,
      text: "Embalagem Gratuita para Presente",
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      text: "Avaliação 4.9⭐ no Google",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse delay-2000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-green-500/20 to-yellow-500/20 rounded-full blur-xl animate-pulse delay-3000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mb-6">
            <Award className="w-6 h-6 text-white mx-2" />
            <span className="text-white font-bold px-4 py-2">
              EXCELÊNCIA EM DOCES
            </span>
            <Award className="w-6 h-6 text-white mx-2" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Por Que Somos a
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-orange-400 bg-clip-text text-transparent block sm:inline sm:ml-4">
              Escolha Certa?
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Mais de{" "}
            <span className="font-bold text-yellow-400">duas décadas</span>{" "}
            criando momentos doces especiais.
            <br />
            Conheça os diferenciais que nos tornaram referência na região.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 transform hover:-translate-y-2">
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    {feature.icon}
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-lg">
                    {feature.description}
                  </p>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex justify-between items-center">
                      <span className="text-yellow-400 font-bold text-sm bg-yellow-400/10 px-3 py-2 rounded-full">
                        {feature.highlight}
                      </span>
                      <span className="text-green-400 font-semibold text-sm">
                        {feature.stats}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees Section */}
        <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              🛡️ Nossas Garantias para Você
            </h3>
            <p className="text-gray-300 text-lg">
              Sua satisfação é nossa prioridade número 1
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                {guarantee.icon}
                <span className="text-white font-semibold">
                  {guarantee.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "5,247", label: "Clientes Felizes", suffix: "+" },
            { number: "98", label: "Taxa de Satisfação", suffix: "%" },
            { number: "24", label: "Horas para Entrega", suffix: "h" },
            { number: "20", label: "Anos de Experiência", suffix: "+" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl lg:text-5xl font-black text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
                <span className="text-2xl">{stat.suffix}</span>
              </div>
              <div className="text-gray-300 font-semibold text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
