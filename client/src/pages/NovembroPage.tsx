import Header from "@/components/Header";
import ContentCard from "@/components/ContentCard";

interface ContentItem {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  link: string;
  color: "border-[#228B22]" | "border-[#DC143C]" | "border-[#4169E1]";
  titleColor: "text-[#228B22]" | "text-[#DC143C]" | "text-[#4169E1]";
}

const contentData: ContentItem[] = [
  {
    id: "nov-1",
    title: "Dia da Consciência Negra",
    description: "Celebração da identidade e resistência negra",
    content: "O 20 de novembro marca o Dia da Consciência Negra, data que celebra a identidade, história e contribuições do povo negro. Escolhida por ser o aniversário da morte de Zumbi dos Palmares em 1695, simboliza resistência e luta pela liberdade. É um dia de reflexão sobre o racismo e de afirmação da negritude.",
    author: "Movimento Negro Unificado",
    link: "https://www.mnu.org.br/",
    color: "border-[#228B22]",
    titleColor: "text-[#228B22]",
  },
  {
    id: "nov-2",
    title: "Zumbi dos Palmares",
    description: "Símbolo de resistência contra a escravidão",
    content: "Zumbi foi o último líder do Quilombo dos Palmares, um dos maiores símbolos de resistência contra a escravidão no Brasil. Nascido em 1655, liderou a resistência por mais de uma década. Morreu em 20 de novembro de 1695, data que marca o Dia da Consciência Negra em sua homenagem.",
    author: "Instituto Brasileiro de Geografia e Estatística",
    link: "https://www.ibge.gov.br/",
    color: "border-[#DC143C]",
    titleColor: "text-[#228B22]",
  },
  {
    id: "nov-3",
    title: "Importância Histórica",
    description: "Significado do 20 de novembro para o Brasil",
    content: "O 20 de novembro representa um marco na história do Brasil. Reconhece a resistência dos povos africanos e afro-brasileiros contra a opressão. É um dia para celebrar a cultura, história e contribuições da população negra. Também é momento para refletir sobre desigualdades persistentes e lutar por mudanças.",
    author: "Fundação Palmares",
    link: "https://www.palmares.gov.br/",
    color: "border-[#4169E1]",
    titleColor: "text-[#228B22]",
  },
  {
    id: "nov-4",
    title: "Mobilização e Ativismo",
    description: "Movimentos sociais e ações no 20 de novembro",
    content: "O 20 de novembro é marcado por manifestações, seminários, eventos culturais e atividades educativas. Movimentos negros, organizações sociais e comunidades se mobilizam para conscientizar sobre racismo e promover igualdade. É um dia de celebração, educação e luta contínua pela justiça racial.",
    author: "Secretaria de Políticas de Promoção da Igualdade Racial",
    link: "https://www.gov.br/igualdaderacial/",
    color: "border-[#228B22]",
    titleColor: "text-[#228B22]",
  },
  {
    id: "nov-5",
    title: "Cultura e Identidade",
    description: "Expressões culturais que celebram a negritude",
    content: "No 20 de novembro, celebrações incluem apresentações de samba, capoeira, música afro-brasileira e outras expressões culturais. Essas manifestações reafirmam a identidade negra e a importância da herança africana. Cultura é resistência e forma de manter viva a memória coletiva.",
    author: "Instituto do Patrimônio Histórico e Artístico Nacional",
    link: "https://www.iphan.gov.br/",
    color: "border-[#DC143C]",
    titleColor: "text-[#228B22]",
  },
  {
    id: "nov-6",
    title: "Educação e Conscientização",
    description: "Importância da educação sobre história negra",
    content: "O 20 de novembro é oportunidade para educação sobre história, cultura e contribuições do povo negro. Escolas, universidades e organizações promovem debates, palestras e atividades educativas. Educação é fundamental para combater estereótipos, promover igualdade e formar cidadãos conscientes.",
    author: "Ministério da Educação",
    link: "https://www.gov.br/mec/",
    color: "border-[#4169E1]",
    titleColor: "text-[#228B22]",
  },
  {
    id: "nov-7",
    title: "Luta Contínua",
    description: "Desafios persistentes e necessidade de ação",
    content: "Apesar de avanços, desigualdades raciais persistem em educação, saúde, emprego e segurança. O 20 de novembro é momento para refletir sobre essas desigualdades e reafirmar compromisso com mudanças. A luta pela igualdade racial é contínua e requer ação de toda a sociedade.",
    author: "IPEA - Instituto de Pesquisa Econômica Aplicada",
    link: "https://www.ipea.gov.br/",
    color: "border-[#228B22]",
    titleColor: "text-[#228B22]",
  },
  {
    id: "nov-8",
    title: "Solidariedade e Inclusão",
    description: "Convite para participação de toda a sociedade",
    content: "O 20 de novembro não é apenas para pessoas negras. É convite para toda a sociedade refletir sobre racismo, aprender história negra e participar da luta pela igualdade. Solidariedade e inclusão são essenciais para transformação social. Todos têm papel na construção de um Brasil mais justo.",
    author: "Biblioteca Nacional",
    link: "https://www.bn.gov.br/",
    color: "border-[#DC143C]",
    titleColor: "text-[#228B22]",
  },
];

export default function NovembroPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFD700] text-[#228B22]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#DC143C] to-[#b01030] py-16 px-4 text-center text-white border-b-4 border-[#228B22]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4 text-white">20 de Novembro</h1>
          <p className="text-xl text-gray-100 mb-8">
            Dia da Consciência Negra - Celebração, história e luta pela igualdade racial
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 px-4 flex-1">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {contentData.map((item) => (
              <ContentCard
                key={item.id}
                title={item.title}
                description={item.description}
                content={item.content}
                author={item.author}
                link={item.link}
                borderColor={item.color}
                titleColor={item.titleColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#228B22] border-t-4 border-[#DC143C] py-8 px-4 text-center text-[#228B22]">
        <p>&copy; 2024 Consciência Negra. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
