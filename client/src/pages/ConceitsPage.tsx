import Header from "@/components/Header";

export default function ConceitsPage() {
  const concepts = [
    {
      id: 1,
      title: "Racismo Estrutural",
      description: "Discriminação sistemática enraizada nas instituições",
      content: "O racismo estrutural refere-se à forma como a discriminação racial está integrada nas estruturas, instituições e práticas da sociedade. Não é apenas um problema individual, mas um sistema que perpetua desigualdades através de leis, políticas e práticas culturais que favorecem pessoas brancas.",
      color: "border-[#228B22]",
      bgColor: "bg-green-50",
    },
    {
      id: 2,
      title: "Negritude",
      description: "Identidade, cultura e consciência do povo negro",
      content: "Negritude é um conceito que celebra a identidade, história e cultura do povo negro. Vai além da cor da pele, englobando a consciência de ser negro, a valorização da herança africana e a resistência contra a opressão. É um movimento de afirmação e empoderamento.",
      color: "border-[#DC143C]",
      bgColor: "bg-red-50",
    },
    {
      id: 3,
      title: "Ancestralidade",
      description: "Conexão com a história e legado dos antepassados",
      content: "A ancestralidade representa a conexão profunda com os antepassados africanos e afro-brasileiros. É reconhecer e honrar aqueles que vieram antes, suas lutas, resistências e contribuições. A ancestralidade é fundamental na espiritualidade e identidade das religiões e culturas afro-brasileiras.",
      color: "border-[#4169E1]",
      bgColor: "bg-blue-50",
    },
    {
      id: 4,
      title: "Diáspora Africana",
      description: "Dispersão dos povos africanos pelo mundo",
      content: "A diáspora africana refere-se ao deslocamento forçado de milhões de africanos através do tráfico negreiro transatlântico. Milhões foram levados para as Américas, incluindo Brasil, criando comunidades africanas espalhadas pelo mundo. Este processo traumático moldou a história e cultura de várias nações.",
      color: "border-[#FF6347]",
      bgColor: "bg-orange-50",
    },
    {
      id: 5,
      title: "Quilombo",
      description: "Comunidades de resistência e liberdade",
      content: "Quilombos eram comunidades formadas por escravizados fugidos e seus descendentes. Representam espaços de resistência, liberdade e reconstrução da vida africana nas Américas. O Quilombo dos Palmares, liderado por Zumbi, é o exemplo mais famoso de resistência contra a escravidão.",
      color: "border-[#FFD700]",
      bgColor: "bg-yellow-50",
    },
    {
      id: 6,
      title: "Empoderamento Negro",
      description: "Processo de fortalecimento e autonomia",
      content: "Empoderamento negro é o processo de fortalecer a consciência, autonomia e poder de decisão da população negra. Envolve educação, acesso a oportunidades, representatividade em espaços de poder e a valorização da cultura e história negra. É um movimento de transformação social.",
      color: "border-[#228B22]",
      bgColor: "bg-green-50",
    },
    {
      id: 7,
      title: "Interseccionalidade",
      description: "Análise de múltiplas formas de opressão",
      content: "Interseccionalidade é um conceito que analisa como diferentes formas de opressão (raça, gênero, classe, sexualidade) se intersectam e se reforçam mutuamente. Reconhece que pessoas negras, especialmente mulheres negras, enfrentam discriminações múltiplas e complexas.",
      color: "border-[#DC143C]",
      bgColor: "bg-red-50",
    },
    {
      id: 8,
      title: "Afrocentrismo",
      description: "Perspectiva centrada na experiência africana",
      content: "Afrocentrismo é uma perspectiva que coloca a experiência, história e cultura africana no centro da análise, em vez de vê-las através de uma lente eurocêntrica. Busca recuperar narrativas africanas e afro-brasileiras que foram marginalizadas ou distorcidas pela historiografia ocidental.",
      color: "border-[#4169E1]",
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FFD700]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#228B22] to-[#1a6b1a] py-16 px-4 text-center text-white border-b-4 border-[#DC143C]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Conceitos Fundamentais</h1>
          <p className="text-xl text-gray-100">
            Entenda os principais conceitos que fundamentam a Consciência Negra e a luta pela igualdade racial
          </p>
        </div>
      </section>

      {/* Concepts Grid */}
      <section className="py-16 px-4 flex-1">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {concepts.map((concept) => (
              <div
                key={concept.id}
                className={`rounded-lg border-4 p-8 ${concept.color} ${concept.bgColor} hover:shadow-lg transition`}
              >
                <h3 className={`text-2xl font-bold mb-3 ${
                  concept.color === "border-[#228B22]"
                    ? "text-[#228B22]"
                    : concept.color === "border-[#DC143C]"
                    ? "text-[#DC143C]"
                    : concept.color === "border-[#4169E1]"
                    ? "text-[#4169E1]"
                    : concept.color === "border-[#FF6347]"
                    ? "text-[#FF6347]"
                    : concept.color === "border-[#FFD700]"
                    ? "text-[#FFD700]"
                    : "text-[#228B22]"
                }`}>
                  {concept.title}
                </h3>
                <p className="text-[#0a0a0a] mb-4 font-medium">
                  {concept.description}
                </p>
                <p className="text-[#333333] leading-relaxed">
                  {concept.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#228B22] border-t-4 border-[#DC143C] py-8 px-4 text-center text-white">
        <p>&copy; 2024 Consciência Negra. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
