import Header from "@/components/Header";
import ContentCard from "@/components/ContentCard";

interface FigureItem {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  link: string;
}

const figurasData: FigureItem[] = [
  {
    id: "figuras-1",
    title: "Zumbi dos Palmares",
    description: "Líder do Quilombo dos Palmares",
    content: "Zumbi foi o último líder do Quilombo dos Palmares, um dos maiores símbolos de resistência contra a escravidão no Brasil. Nascido em 1655, liderou a resistência contra o Exército português por mais de uma década. Morreu em 20 de novembro de 1695, data que marca o Dia da Consciência Negra.",
    author: "Enciclopédia Britannica",
    link: "https://www.britannica.com/biography/Zumbi",
  },
  {
    id: "figuras-2",
    title: "Dandara dos Palmares",
    description: "Guerreira e companheira de Zumbi",
    content: "Dandara foi uma mulher guerreira que lutou ao lado de Zumbi na resistência do Quilombo dos Palmares. Era conhecida por sua coragem e habilidade no combate. Morreu em combate em 1694, sendo um símbolo importante da resistência feminina negra.",
    author: "Museu Afro Brasil",
    link: "https://www.museuafrobrasil.org.br/",
  },
  {
    id: "figuras-3",
    title: "Luiz Gama",
    description: "Abolicionista e poeta",
    content: "Luiz Gama (1830-1882) foi um dos mais importantes abolicionistas brasileiros. Como advogado, conseguiu libertar mais de 500 escravizados através de ações judiciais. Também foi poeta e jornalista, usando a literatura como ferramenta de luta contra a escravidão.",
    author: "Biblioteca Nacional",
    link: "https://www.bn.gov.br/",
  },
  {
    id: "figuras-4",
    title: "Carolina Maria de Jesus",
    description: "Escritora e ativista social",
    content: "Carolina Maria de Jesus (1914-1977) foi uma escritora que documentou a vida nas favelas do Brasil. Seu livro 'Quarto de Despejo' é um testemunho importante sobre pobreza e racismo. Sua obra contribuiu para dar voz aos invisibilizados pela sociedade.",
    author: "Fundação Biblioteca Nacional",
    link: "https://www.bn.gov.br/",
  },
  {
    id: "figuras-5",
    title: "Abdias do Nascimento",
    description: "Intelectual, artista e ativista",
    content: "Abdias do Nascimento (1914-2011) foi um importante intelectual, artista e ativista do movimento negro. Fundou o Teatro Experimental do Negro e trabalhou pela valorização da cultura negra. Sua obra abrange teatro, artes plásticas, poesia e ativismo político.",
    author: "Instituto de Pesquisa Econômica Aplicada",
    link: "https://www.ipea.gov.br/",
  },
  {
    id: "figuras-6",
    title: "Conceição Evaristo",
    description: "Escritora e poetisa",
    content: "Conceição Evaristo é uma importante escritora contemporânea que aborda temas de raça, gênero e classe em suas obras. Seus livros como 'Ponciá Vicêncio' e 'Becos da Memória' exploram a experiência de mulheres negras. Sua literatura é fundamental para a afirmação da voz negra.",
    author: "Biblioteca Nacional",
    link: "https://www.bn.gov.br/",
  },
  {
    id: "figuras-7",
    title: "Gilberto Gil",
    description: "Músico e compositor",
    content: "Gilberto Gil é um músico e compositor que sempre abordou temas sociais e políticos em suas obras. Suas músicas celebram a cultura brasileira e africana. Contribuiu para a valorização da música afro-brasileira e da identidade negra.",
    author: "Biblioteca Nacional",
    link: "https://www.bn.gov.br/",
  },
  {
    id: "figuras-8",
    title: "Djamila Ribeiro",
    description: "Filósofa e ativista",
    content: "Djamila Ribeiro é uma filósofa e ativista que trabalha com temas de raça, gênero e feminismo negro. Seus livros como 'O que é lugar de fala?' são importantes para entender interseccionalidade. Contribui para educação e conscientização sobre igualdade racial.",
    author: "Fundação Biblioteca Nacional",
    link: "https://www.bn.gov.br/",
  },
];

export default function FigurasPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFD700]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#D87C47] to-[#C76B39] py-16 px-4 text-center text-white border-b-4 border-[#DC143C]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Figuras</h1>
          <p className="text-xl text-gray-100">
            Personalidades que marcaram a história da luta pela igualdade racial
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 px-4 flex-1">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {figurasData.map((item) => (
              <ContentCard
                key={item.id}
                title={item.title}
                description={item.description}
                content={item.content}
                author={item.author}
                link={item.link}
                borderColor="border-[#C76B39]"
                titleColor="text-[#C76B39]"
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
