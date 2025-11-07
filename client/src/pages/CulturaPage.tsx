import Header from "@/components/Header";

interface CultureItem {
  id: string;
  title: string;
  description: string;
  content: string;
}

const cultureData: CultureItem[] = [
  {
    id: "cultura-1",
    title: "Samba",
    description: "Ritmo e dança que definem a identidade cultural brasileira",
    content: "O samba é uma das expressões culturais mais importantes do Brasil, nascido nas comunidades negras do Rio de Janeiro. Combina ritmos africanos com influências portuguesas, criando um estilo único. O samba é patrimônio cultural imaterial da humanidade e representa a resistência, alegria e identidade do povo negro.",
  },
  {
    id: "cultura-2",
    title: "Capoeira",
    description: "Luta disfarçada de dança, arte de resistência",
    content: "A capoeira é uma arte marcial desenvolvida por escravizados africanos no Brasil. Disfarçada de dança, era uma forma de resistência e preservação da cultura africana. Combina movimentos de luta, dança, música e filosofia. Reconhecida como patrimônio cultural imaterial da humanidade em 2008.",
  },
  {
    id: "cultura-3",
    title: "Candomblé",
    description: "Religião de matriz africana com profunda espiritualidade",
    content: "O Candomblé é uma religião de matriz africana que preserva tradições yorubás, bantos e outras culturas africanas. Nasceu da resistência espiritual de escravizados que sincretizaram suas divindades com santos católicos. É uma expressão importante da identidade cultural afro-brasileira e da liberdade religiosa.",
  },
  {
    id: "cultura-4",
    title: "Música Afro-brasileira",
    description: "Diversos gêneros que celebram a herança africana",
    content: "Além do samba, existem muitos gêneros musicais afro-brasileiros: o forró, o reggae, o hip-hop, o funk carioca e muitos outros. Cada um reflete diferentes aspectos da experiência negra no Brasil. A música é um veículo poderoso de expressão, protesto e celebração da identidade negra.",
  },
  {
    id: "cultura-5",
    title: "Literatura Negra",
    description: "Vozes que contam histórias de resistência e identidade",
    content: "Autores como Cruz e Sousa, Machado de Assis, Carolina Maria de Jesus, Conceição Evaristo e muitos outros contribuem para a literatura brasileira com perspectivas únicas. A literatura negra aborda temas de identidade, racismo, resistência e celebração da cultura afro-brasileira.",
  },
  {
    id: "cultura-6",
    title: "Artes Visuais",
    description: "Expressão artística que reflete a experiência negra",
    content: "Artistas negros brasileiros como Portinari, Rosana Paulino e muitos outros usam as artes visuais para expressar a experiência negra. Suas obras abordam temas de identidade, história, racismo e resistência. A arte visual é um espaço importante de representação e empoderamento.",
  },
  {
    id: "cultura-7",
    title: "Culinária Afro-brasileira",
    description: "Sabores que contam histórias de resistência e criatividade",
    content: "A culinária afro-brasileira é resultado da criatividade de escravizados que transformavam ingredientes simples em pratos deliciosos. Feijoada, acarajé, vatapá, moqueca e muitos outros pratos refletem a herança africana. A comida é um ato de resistência e celebração cultural.",
  },
  {
    id: "cultura-8",
    title: "Moda e Estética",
    description: "Expressão de identidade e resistência através da moda",
    content: "A moda afro-brasileira celebra a beleza negra e a identidade cultural. Penteados como tranças, dreads e turbantes são expressões de resistência e autoafirmação. Designers negros criam roupas que refletem a estética e valores da comunidade negra, desafiando padrões eurocêntricos.",
  },
];

export default function CulturaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] py-16 px-4 text-center text-white border-b-4 border-[#FFD700]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4 text-[#FFD700]">Cultura Afro-brasileira</h1>
          <p className="text-xl text-gray-200">
            Expressões artísticas, tradições e manifestações que definem a identidade cultural do povo negro
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 px-4 flex-1">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {cultureData.map((item, index) => (
              <div
                key={item.id}
                className={`rounded-lg border-2 p-8 hover:border-[#FFD700] transition group ${
                  index % 4 === 0
                    ? "bg-[#1a1a1a] border-[#228B22]"
                    : index % 4 === 1
                    ? "bg-[#1a1a1a] border-[#DC143C]"
                    : index % 4 === 2
                    ? "bg-[#1a1a1a] border-[#4169E1]"
                    : "bg-[#1a1a1a] border-[#FF6347]"
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FFD700] transition">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4 font-medium">
                  {item.description}
                </p>
                <p className="text-gray-200 leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t-4 border-[#228B22] py-8 px-4 text-center text-gray-500">
        <p>&copy; 2024 Consciência Negra. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
