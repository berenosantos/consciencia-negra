import Header from "@/components/Header";
import ContentCard from "@/components/ContentCard";

interface LawItem {
  id: string;
  title: string;
  //: string;
  content: string;
  author: string;
  link: string;
}

const leisData: LawItem[] = [
  {
    id: "leis-1",
    title: "Lei 10.639/2003",
    //: "Obrigatoriedade do ensino de história afro-brasileira",
    content: "O primeiro estado brasileiro a decretar como feriado estadual o Dia da Consciência Negra, em 20 de novembro, foi o estado de Alagoas, após a lei de nº 5.724 ser sancionada em 01 de agosto de 1995, implementando 20 de novembro como feriado em cem municípios. Essa lei representa a valorização da história e da cultura negra em Alagoas, homenageando Zumbi dos Palmares, que nasceu em Serra da Barriga, localizada na cidade alagoana de União de Palmares. Foi lá também onde Zumbi viveu e lutou sua vida toda, se tornando um símbolo de resistência não só de Alagoas, mas do Brasil todo.",
    author: "Breno Santos",
    link: "https://www.legisweb.com.br/legislacao/?id=116708",
  },
  {
    id: "leis-2",
    title: "Lei nº 7.716/1989",
    //: "Políticas públicas para igualdade racial",
    content: "A Lei nº 7.716/1989 foi feita para condenar crimes de discriminação racial no Brasil. A lei abrange que é crime praticar ou incentivar de qualquer forma o racismo, como impedir o acesso a certos lugares, gerar injuria por conta da cor de pele ou negar emprego. Ela é de muita importância, pois protege os direitos das pessoas e ajuda  a garantir que todos sejam tratados de forma igualitária e respeitosa. Um dos principais objetivos da lei nº 7.716/1989 é lidar com o preconceito, assim promovendo uma sociedade mais igualitaria e sem preconceitos. ",
    author: "Thiago Guimarães",
    link: "https://legislacao.presidencia.gov.br/atos/?tipo=LEI&numero=7716&ano=1989&ato=469UTSq1EeFpWTde0",
  },
  {
    id: "leis-3",
    title: "Lei nº 11.645, de 10 março de 2008",
    //: "Criminalização do racismo",
    content: "A Lei nº 11.645, criada no dia 10 de março de 2008, consequentemente altera a Lei de Diretrizes e Bases da Educação Nacional, tornando o ensino da História e Cultura Afro-Brasileira e Indígena nas escolas do ensino fundamental e médio obrigatório. A lei determina que as escolas devem abordar o conteúdo da contribuição dos povos africanos e indígenas na formação da sociedade brasileira. Além disso, há temas como por exemplo, a hístoria da África e dos africanos, o conflito dos negros, indígenas no Brasil, entre outros.",
    author: "Lamis Cheito",
    link: "http://www.planalto.gov.br/ccivil_03/_Ato2007-2010/2008/Lei/L11645.htm4",
  },
  {
    id: "leis-4",
    title: "Lei n° 12.519 de 10/11/2011",
    //: "Reserva de vagas para negros em concursos públicos",
    content: " Durante séculos, o Brasil conviveu com desigualdades raciais profundas, marcadas pela exclusão da população negra dos espaços de poder, educação e representação. A criação da Lei nº 12.288/2010, conhecida como Estatuto da Igualdade Racial, representou um marco histórico e jurídico na consolidação das políticas de combate ao racismo no país. O Estatuto foi concebido para garantir igualdade de oportunidades e combater a discriminação racial em áreas fundamentais como educação, cultura, esporte, trabalho e saúde. Mais do que um instrumento legal, ele simboliza o reconhecimento oficial das desigualdades estruturais que persistem na sociedade brasileira e a necessidade de enfrentá-las por meio de políticas públicas permanentes. Assim como o Dia da Consciência Negra, o Estatuto da Igualdade Racial reflete o amadurecimento de décadas de mobilização do movimento negro e de intelectuais afro-brasileiros, cuja luta incansável transformou reivindicações históricas em conquistas legais. Ao instituir mecanismos concretos de reparação e inclusão, o Estatuto reafirma o compromisso do Estado com a construção de um Brasil verdadeiramente plural, justo e democrático.",
    author: "Átila Neto",
    link: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12288.htm",
  },
  {
    id: "leis-5",
    title: "Lei n 12.711/2012",
    //: "Proibição de discriminação racial",
    content: " Por muito tempo, o acesso ao ensino superior brasileiro foi privilégio de poucos, reflexo direto das desigualdades raciais e econômicas que marcam a história do país. A Lei nº 12.711/2012, conhecida como Lei de Cotas, representou uma virada decisiva nesse cenário ao garantir a reserva de vagas em universidades e institutos federais para estudantes negros, indígenas e de baixa renda. Mais do que ampliar o número de matrículas, a lei simboliza um projeto de justiça social e reparação histórica, reconhecendo que a educação é um dos caminhos mais poderosos de transformação e inclusão. Ao abrir as portas das universidades públicas para novos grupos sociais, ela contribuiu para redesenhar o rosto da academia e aproximá-la da realidade brasileira. Assim como o Dia da Consciência Negra convida à reflexão sobre identidade, pertencimento e resistência, a Lei de Cotas rompeu com décadas de exclusão e silenciamento, afirmando que o conhecimento deve ser um direito de todos, e não um privilégio de poucos. Seu legado é o de uma nação que aprende, pouco a pouco, a se reconhecer em sua própria diversidade.",
    author: "Átila Neto",
    link: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12711.htmm",
  },
  {
    id: "leis-6",
    title: "Lei n° 12.990/2014",
    //: "Ensino de história indígena e africana",
    content: " Durante décadas, o serviço público brasileiro refletiu as desigualdades estruturais da sociedade: enquanto a população negra formava a maioria do país, sua presença em cargos de prestígio e decisão era mínima. Foi diante desse cenário que surgiu a Lei nº 12.990/2014, determinando que 20% das vagas em concursos públicos federais sejam reservadas a pessoas negras. Inspirada nas diretrizes do Estatuto da Igualdade Racial, essa legislação reconhece que o acesso ao funcionalismo público é também uma ferramenta de inclusão social e representatividade política. Mais do que uma medida administrativa, ela simboliza o reconhecimento de que o Estado deve refletir a diversidade de seu próprio povo. Ao garantir oportunidades concretas e corrigir desequilíbrios históricos, a Lei nº 12.990/2014 reafirma o compromisso constitucional com a igualdade e transforma em prática o ideal de uma sociedade mais justa, plural e democrática, onde o mérito e a diversidade caminham lado a lado na construção do futuro",
    author: "Átila Neto",
    link: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12990.htm",
  },
];

export default function LeisPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFD700]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#CC7722] to-[#B5651D] py-16 px-4 text-center text-white border-b-4 border-[#228B22]">
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
                //={item.//}
                content={item.content}
                author={item.author}
                link={item.link}
                borderColor="border-[#CC7722]"
                titleColor="text-[#CC7722]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#228B22] border-t-4 border-[#DC143C] py-8 px-4 text-center text-white">
        <p>&copy; Site Desenvolvido por estudantes do 10° ano da Escola Pan Americana da Bahia, no componente curricular Língua Portuguesa, sob a orientaçao do Prof. Chico Mota, em novembro de 2025</p>
      </footer>
    </div>
  );
}
