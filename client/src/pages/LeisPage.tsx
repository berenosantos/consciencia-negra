import Header from "@/components/Header";
import ContentCard from "@/components/ContentCard";

interface LawItem {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  link: string;
}

const leisData: LawItem[] = [
  {
    id: "leis-1",
    title: "Lei 10.639/2003",
    description: "Obrigatoriedade do ensino de história afro-brasileira",
    content: "Esta lei torna obrigatório o ensino de história e cultura afro-brasileira e africana nas escolas públicas e privadas. Estabelece que o conteúdo deve abordar a luta dos negros no Brasil, a cultura negra brasileira e o negro na formação da sociedade nacional. É um marco importante na educação antirracista.",
    author: "Planalto Federal",
    link: "https://www.planalto.gov.br/ccivil_03/leis/2003/l10.639.htm",
  },
  {
    id: "leis-2",
    title: "Lei 12.288/2010 - Estatuto da Igualdade Racial",
    description: "Políticas públicas para igualdade racial",
    content: "O Estatuto da Igualdade Racial institui políticas públicas para garantir igualdade de oportunidades para a população negra. Aborda educação, trabalho, saúde, cultura e segurança. Prevê ações afirmativas, cotas em universidades e empresas, e combate à discriminação racial.",
    author: "Planalto Federal",
    link: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12288.htm",
  },
  {
    id: "leis-3",
    title: "Lei 7.716/1989 - Lei Caó",
    description: "Criminalização do racismo",
    content: "Define como crime a prática de racismo no Brasil. Estabelece penas para discriminação racial, preconceito de raça ou cor. É considerada uma lei inafiançável e imprescritível, reconhecendo a gravidade do racismo como crime contra a humanidade.",
    author: "Planalto Federal",
    link: "https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
  },
  {
    id: "leis-4",
    title: "Lei 12.990/2014 - Cotas para Concursos Públicos",
    description: "Reserva de vagas para negros em concursos públicos",
    content: "Reserva 20% das vagas em concursos públicos federais para candidatos negros. Essa política de ação afirmativa busca aumentar a representatividade de negros no serviço público. Diversos estados e municípios também adotaram políticas semelhantes.",
    author: "Planalto Federal",
    link: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12990.htm",
  },
  {
    id: "leis-5",
    title: "Constituição Federal de 1988",
    description: "Proibição de discriminação racial",
    content: "A Constituição Federal de 1988 proíbe a discriminação racial em seu artigo 5º. Estabelece que todos são iguais perante a lei, sem distinção de qualquer natureza. É a base legal para todas as políticas de igualdade racial no Brasil.",
    author: "Planalto Federal",
    link: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
  },
  {
    id: "leis-6",
    title: "Lei 11.645/2008",
    description: "Ensino de história indígena e africana",
    content: "Altera a Lei 10.639/2003 para incluir também a história e cultura dos povos indígenas. Torna obrigatório o ensino de história indígena nas escolas. Reconhece a importância de múltiplas perspectivas históricas na educação.",
    author: "Planalto Federal",
    link: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11645.htm",
  },
  {
    id: "leis-7",
    title: "Lei 13.146/2015 - Lei Brasileira de Inclusão",
    description: "Direitos de pessoas com deficiência",
    content: "Embora focada em pessoas com deficiência, essa lei também aborda discriminação e inclusão. Reconhece que grupos historicamente marginalizados têm direitos especiais. Serve como modelo para políticas de inclusão de outros grupos.",
    author: "Planalto Federal",
    link: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm",
  },
  {
    id: "leis-8",
    title: "Políticas de Ação Afirmativa em Universidades",
    description: "Cotas e políticas de inclusão no ensino superior",
    content: "Muitas universidades federais adotaram cotas para negros, indígenas e alunos de escolas públicas. Lei 12.711/2012 estabelece cotas em universidades federais e institutos federais. Essas políticas aumentaram significativamente o acesso de negros ao ensino superior.",
    author: "Planalto Federal",
    link: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12711.htm",
  },
];

export default function LeisPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFD700]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#DC143C] to-[#b01030] py-16 px-4 text-center text-white border-b-4 border-[#228B22]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Leis</h1>
          <p className="text-xl text-gray-100">
            Legislação que protege e promove direitos da população negra
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 px-4 flex-1">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {leisData.map((item) => (
              <ContentCard
                key={item.id}
                title={item.title}
                description={item.description}
                content={item.content}
                author={item.author}
                link={item.link}
                borderColor="border-[#DC143C]"
                titleColor="text-[#DC143C]"
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
