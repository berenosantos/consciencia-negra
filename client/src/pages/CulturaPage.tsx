import Header from "@/components/Header";
import ContentCard from "@/components/ContentCard";

interface CultureItem {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  link: string;
}

const cultureData: CultureItem[] = [
  {
    id: "cultura-1",
    title: "Samba",
    description: "Ritmo e dança que representa a identidade cultural brasileira",
    content: "O samba é um dos símbolos mais importantes da cultura afro-brasileira. Nasceu nas comunidades negras do Rio de Janeiro, especialmente na região da Lapa e do Estácio. É uma expressão de resistência, alegria e identidade que combina ritmo, dança e poesia. O samba evoluiu de ritmos africanos e se tornou patrimônio imaterial da humanidade.",
    author: "Instituto do Patrimônio Histórico e Artístico Nacional",
    link: "https://www.iphan.gov.br/",
  },
  {
    id: "cultura-2",
    title: "Capoeira",
    description: "Arte marcial que combina luta, dança e música",
    content: "A capoeira é uma prática afro-brasileira que nasceu entre escravizados africanos no Brasil. Combina elementos de luta, dança, música e filosofia. Era praticada como forma de resistência e autodefesa durante a escravidão. Hoje é reconhecida como patrimônio cultural imaterial da humanidade e praticada em todo o mundo.",
    author: "UNESCO",
    link: "https://www.unesco.org/",
  },
  {
    id: "cultura-3",
    title: "Candomblé",
    description: "Religião de matriz africana que preserva tradições ancestrais",
    content: "O Candomblé é uma religião de matriz africana que preserva tradições espirituais e culturais dos povos iorubás, bantos e outros grupos africanos. Nasceu no Brasil como forma de resistência cultural durante a escravidão. Mantém viva a conexão com os orixás e ancestrais, oferecendo um espaço de identidade e comunidade para o povo negro.",
    author: "Museu Afro Brasil",
    link: "https://www.museuafrobrasil.org.br/",
  },
  {
    id: "cultura-4",
    title: "Música Afro-Brasileira",
    description: "Gêneros musicais que refletem a história e resistência negra",
    content: "A música afro-brasileira engloba diversos gêneros como samba, forró, bossa nova, rap e funk. Cada estilo carrega a história, resistência e criatividade do povo negro. Artistas como Tom Jobim, Gilberto Gil e mais recentemente rappers e funkeiros continuam a tradição de usar a música como ferramenta de expressão e transformação social.",
    author: "Biblioteca Nacional",
    link: "https://www.bn.gov.br/",
  },
  {
    id: "cultura-5",
    title: "Literatura Negra",
    description: "Narrativas que centram a experiência e voz do povo negro",
    content: "A literatura negra brasileira é uma expressão poderosa de identidade, resistência e criatividade. Autores como Cruz e Sousa, Carolina Maria de Jesus, Conceição Evaristo e Djamila Ribeiro trazem narrativas que centram a experiência negra. Essa literatura é fundamental para a desconstrução de estereótipos e afirmação da humanidade negra.",
    author: "Fundação Biblioteca Nacional",
    link: "https://www.bn.gov.br/",
  },
  {
    id: "cultura-6",
    title: "Artes Visuais",
    description: "Expressão artística que celebra a estética e história negra",
    content: "As artes visuais afro-brasileiras incluem pintura, escultura, fotografia e arte contemporânea. Artistas negros usam suas obras para explorar identidade, história e resistência. Obras de artistas como Rosana Paulino, Amorim e Portinari refletem a complexidade da experiência negra e contribuem para a valorização da estética e criatividade negra.",
    author: "Pinacoteca do Estado",
    link: "https://www.pinacoteca.org.br/",
  },
  {
    id: "cultura-7",
    title: "Culinária Afro-Brasileira",
    description: "Sabores que conectam à herança africana e história do Brasil",
    content: "A culinária afro-brasileira é resultado da fusão de técnicas e ingredientes africanos com a realidade brasileira. Pratos como feijoada, acarajé, vatapá e moqueca carregam a história de resistência e criatividade. A cozinha é um espaço de preservação de memória, identidade e transmissão de conhecimento entre gerações.",
    author: "Instituto Moreira Salles",
    link: "https://www.ims.com.br/",
  },
  {
    id: "cultura-8",
    title: "Moda e Estética Negra",
    description: "Expressão de identidade, resistência e beleza",
    content: "A moda e estética negra são formas de afirmação de identidade e resistência. Do uso de turbantes à valorização de cabelos naturais, a moda negra celebra a beleza e diversidade. Designers negros como Lena Erziak e Xana Legere criam peças que honram a herança africana enquanto exploram a contemporaneidade.",
    author: "Museu de Arte de São Paulo",
    link: "https://www.masp.org.br/",
  },
];

export default function CulturaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFD700]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#4169E1] to-[#3050c0] py-16 px-4 text-center text-white border-b-4 border-[#DC143C]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Cultura</h1>
          <p className="text-xl text-gray-100">
            Expressões artísticas, música, dança e tradições que moldaram a identidade afro-brasileira
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 px-4 flex-1">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {cultureData.map((item) => (
              <ContentCard
                key={item.id}
                title={item.title}
                description={item.description}
                content={item.content}
                author={item.author}
                link={item.link}
                borderColor="border-[#4169E1]"
                titleColor="text-[#4169E1]"
              />
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
