import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: "dados" | "leis" | "figuras";
  content: string;
  author: string;
  link: string;
}

const contentData: ContentItem[] = [
  // Dados
  {
    id: "dados-1",
    title: "Desigualdade Racial no Brasil",
    description: "Estatísticas sobre a população negra e parda no Brasil",
    category: "dados",
    content: "O perfil racial da população brasileira é analisado nos levantamentos do Censo Demográfico como uma demanda legal. A partir dessas informações, forma-se o documento Informe MIR, no qual se encontra uma avaliação desses dados a fim de fomentar a igualdade social e se opor às desigualdades. Nesse sentido, a pesquisa mais vigente do Censo de 2022 ilustra que a população autodeclarada como negra ou parda está acima de 50%. Esse valor tende a se elevar desde o Censo de 1940. O desenvolvimento levou a êxitos significativos como o aumento da proporção preta e parda da população nos quesitos quantitativos da população residente segundo o sexo, níveis de grandes regiões, e as unidades federativas brasileiras com exceção de Roraima no contexto de comparação entre os anos de 2010 e 2022. Logo, os especialistas concluíram que a maior densidade populacional negra se deu devido às manifestações culturais organizadas pelos afrodescendentes e debates sobre o racismo e discriminação, construindo o sentimento nacional de pertencimento étnico-racial.",
    author: "Maria Júlia Costa",
    link: "https://www.gov.br/igualdaderacial/pt-br/composicao/secretaria-de-gestao-do-sistema-nacional-de-promocao-da-igualdade-racial/diretoria-de-avaliacao-monitoramento-e-gestao-da-informacao/informativos/Informe-edicao-censo-demogrfico2022.pdf",
  },
  {
    id: "dados-2",
    title: "Datafolha: 59% dos brasileiros consideram que a maior parte da população é racista",
    category: "dados",
    content: "Sem dúvida, o racismo, ou o preconceito contra indivíduos pertencentes a uma etnia, ainda tem uma presença significativa na sociedade brasileira, lamentavelmente. Dentro dessa realidade, é essencial destacar a necessidade de ter o Dia da Consciência Negra como feriado nacional, com o intuito de trazer atenção a aqueles que ainda sofrem com o preconceito racial. De acordo com uma pesquisa conduzida pelo Datafolha, 59% dos brasileiros acreditam que a maior parte da população é racista. Com isso em mente, o instituto de pesquisa entrevistou maiores de 16 anos de diversas etnias e a investigação revelou resultados consistentes: a maior parte de todas as etnias entrevistadas, incluindo brancos, negros e pardos, acreditam que a maior parte da população é racista. Além disso, algo ainda mais alarmante: 45% dos entrevistados acreditam que o racismo vem aumentando nos últimos tempos. Ademais, predominância do racismo revela que, mesmo em uma sociedade onde o preconceito racial é contra a lei e condenado, o racismo especialmente contra negros, continua sendo algo muito presente no cotidiano do cidadão brasileiro. Por certo, é necessário levantar um questionamento: será que podemos nos considerar uma sociedade moderna mesmo que o racismo ainda esteja tão presente? Portanto, é fundamental ressaltar a importância do Dia da Consciência Negra como feriado nacional, com o intuito de trazer visibilidade aos atos racistas diários, que muitas vezes passam despercebidos, e destacar o quão prejudicial essas delinquências são para a sociedade.",
    author: "Yumi Arakawa",
    link: "https://g1.globo.com/politica/noticia/2024/11/20/datafolha-racismo.ghtml",
  },
  {
    id: "dados-3",
    title: "Desigualdades Sociais por Cor ou Raça no Brasil",
    category: "dados",
    content: "A desigualdade racial é um problema recorrente que se estabeleceu durante o Brasil Colonial; historicamente persistente, normalmente caracterizada por uma grande concentração de patrimônio e renda, acesso desigual de serviços básicos, e uma ampla segregação predominante em todo o país. Atualmente, esta disparidade racial ainda estão presentes em nosso cotidiano, segundo dados da Pesquisa Nacional por Amostras de Domicílios em 2018, A força de trabalho negra brasileira representa 54,9% da população brasileira , Porém, apenas 29,9% dessas pessoas ocupam cargos de gerência, portanto, demonstrando como a desigualdade social ainda habita em nossa sociedade. A matéria disponibilizada trata-se de uma pesquisa conduzida pelo IBGE que traz dados concretos e educativos relacionados com a desigualdade social no Brasil, apresentando tabelas e gráficos que ajudam a compreender a persistência da desigualdade no Brasil. O site permite que o leitor perceber como o processo da escravidão e o racismo institucional não é apenas algo do passado, mas sim uma estrutura viva que percorre na vida de inumeros individuos negros, normalmente mitigando suas opportunidades de crescer na vida. Ao providenciar dados que comprovam como a cor determina as condições desiguais no Brasil, o site demonstra fatos fundamentais da consciência negra pois ele desmistifica o mito da democracia racial, fornecendo também uma base empírica para governos anti racistas e por fim desenvolve uma reflexão crítica, pois esses dados demonstram como a sociedade ainda não é igualitária, tornando o nosso papel para fazer uma mudança nesta estrutura social.",
    author: "Guilherme Oliveira",
    link: "https://educa.ibge.gov.br/jovens/materias-especiais/21039-desigualdades-sociais-por-cor-ou-raca-no-brasil.html",
  },
  {
    id: "dados-4",
    title: "TSE – Estatísticas Eleitorais sobre Representatividade Negra (2024)",
    category: "dados",
    content: "À medida que o Brasil se aproxima de eleições cada vez mais disputadas e observadas, surge uma pergunta essencial: quem realmente ocupa os espaços de poder no país? O relatório de Estatísticas Eleitorais do TSE (2024) oferece uma resposta reveladora e historicamente significativa. Pela primeira vez, o número de candidatos autodeclarados negros se aproxima da metade do total, um marco que reflete não apenas mudanças institucionais, mas também a força de décadas de mobilização social. Esse avanço é impulsionado por medidas recentes, como a garantia de distribuição proporcional de recursos do fundo eleitoral para candidaturas negras, que começa a corrigir desigualdades estruturais na corrida eleitoral. Assim como o 20 de Novembro, símbolo nacional de resistência, memória e afirmação da identidade negra, os novos dados do TSE mostram que a luta pela igualdade se estende para dentro da política, um território que historicamente silenciou vozes negras. Agora, esses espaços passam a ser gradualmente transformados em arenas de presença, influência e decisão. Mais do que números, os dados revelam um movimento profundo: a democracia brasileira se torna, pouco a pouco, mais parecida com o próprio povo que representa.",
    author: "Átila Neto",
    link: "https://www.tse.jus.br/eleicoes/estatisticas",
  },

  // Leis
  {
    id: "leis-1",
    title: "Lei 10.639/2003",
    description: "Obrigatoriedade do ensino de história afro-brasileira",
    category: "leis",
    content: "Esta lei torna obrigatório o ensino de história e cultura afro-brasileira e africana nas escolas públicas e privadas. Estabelece que o conteúdo deve abordar a luta dos negros no Brasil, a cultura negra brasileira e o negro na formação da sociedade nacional. É um marco importante na educação antirracista.",
    author: "Planalto Federal",
    link: "https://www.planalto.gov.br/ccivil_03/leis/2003/l10.639.htm",
  },
  {
    id: "leis-2",
    title: "Lei 12.288/2010 - Estatuto da Igualdade Racial",
    description: "Políticas públicas para igualdade racial",
    category: "leis",
    content: "O Estatuto da Igualdade Racial institui políticas públicas para garantir igualdade de oportunidades para a população negra. Aborda educação, trabalho, saúde, cultura e segurança. Prevê ações afirmativas, cotas em universidades e empresas, e combate à discriminação racial.",
    author: "Planalto Federal",
    link: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12288.htm",
  },
  {
    id: "leis-3",
    title: "Lei 7.716/1989 - Lei Caó",
    description: "Criminalização do racismo",
    category: "leis",
    content: "Define como crime a prática de racismo no Brasil. Estabelece penas para discriminação racial, preconceito de raça ou cor. É considerada uma lei inafiançável e imprescritível, reconhecendo a gravidade do racismo como crime contra a humanidade.",
    author: "Planalto Federal",
    link: "https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
  },
  {
    id: "leis-4",
    title: "Lei 12.990/2014 - Cotas para Concursos Públicos",
    description: "Reserva de vagas para negros em concursos públicos",
    category: "leis",
    content: "Reserva 20% das vagas em concursos públicos federais para candidatos negros. Essa política de ação afirmativa busca aumentar a representatividade de negros no serviço público. Diversos estados e municípios também adotaram políticas semelhantes.",
    author: "Planalto Federal",
    link: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12990.htm",
  },

  // Figuras
  {
    id: "figuras-1",
    title: "Zumbi dos Palmares",
    description: "Líder do Quilombo dos Palmares",
    category: "figuras",
    content: "Zumbi foi o último líder do Quilombo dos Palmares, um dos maiores símbolos de resistência contra a escravidão no Brasil. Nascido em 1655, liderou a resistência contra o Exército português por mais de uma década. Morreu em 20 de novembro de 1695, data que marca o Dia da Consciência Negra.",
    author: "Enciclopédia Britannica",
    link: "https://www.britannica.com/biography/Zumbi",
  },
  {
    id: "figuras-2",
    title: "Dandara dos Palmares",
    description: "Guerreira e companheira de Zumbi",
    category: "figuras",
    content: "Dandara foi uma mulher guerreira que lutou ao lado de Zumbi na resistência do Quilombo dos Palmares. Era conhecida por sua coragem e habilidade no combate. Morreu em combate em 1694, sendo um símbolo importante da resistência feminina negra.",
    author: "Museu Afro Brasil",
    link: "https://www.museuafrobrasil.org.br/",
  },
  {
    id: "figuras-3",
    title: "Luiz Gama",
    description: "Abolicionista e poeta",
    category: "figuras",
    content: "Luiz Gama (1830-1882) foi um dos mais importantes abolicionistas brasileiros. Como advogado, conseguiu libertar mais de 500 escravizados através de ações judiciais. Também foi poeta e jornalista, usando a literatura como ferramenta de luta contra a escravidão.",
    author: "Biblioteca Nacional",
    link: "https://www.bn.gov.br/",
  },
  {
    id: "figuras-4",
    title: "Carolina Maria de Jesus",
    description: "Escritora e ativista social",
    category: "figuras",
    content: "Carolina Maria de Jesus (1914-1977) foi uma escritora que documentou a vida nas favelas do Brasil. Seu livro 'Quarto de Despejo' é um testemunho importante sobre pobreza e racismo. Sua obra contribuiu para dar voz aos invisibilizados pela sociedade.",
    author: "Fundação Biblioteca Nacional",
    link: "https://www.bn.gov.br/",
  },
];

export default function NovembroPage() {
  const [selectedCategory, setSelectedCategory] = useState<"todos" | "dados" | "leis" | "figuras">("todos");

  const filteredContent = selectedCategory === "todos" 
    ? contentData 
    : contentData.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFD700]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#DC143C] to-[#b01030] py-16 px-4 text-center text-white border-b-4 border-[#228B22]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4 text-white">20 de Novembro</h1>
          <p className="text-xl text-gray-100 mb-8">
            Dia da Consciência Negra — Explore a trajetória, as conquistas e os símbolos da luta por igualdade e respeito racial no Brasil.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-[#FFD700] py-8 px-4 sticky top-0 z-10 border-b-2 border-[#228B22]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              onClick={() => setSelectedCategory("todos")}
              className={`px-6 py-2 rounded-full font-medium transition ${
                selectedCategory === "todos"
                  ? "bg-[#228B22] text-white hover:bg-[#1a6b1a]"
                  : "bg-white text-[#FFD700] hover:bg-gray-100"
              }`}
            >
              Todas as Categorias
            </Button>
            <Button
              onClick={() => setSelectedCategory("dados")}
              className={`px-6 py-2 rounded-full font-medium transition ${
                selectedCategory === "dados"
                  ? "bg-[#228B22] text-white hover:bg-[#1a6b1a]"
                  : "bg-white text-[#228B22] hover:bg-gray-100"
              }`}
            >
              Dados
            </Button>
            <Button
              onClick={() => setSelectedCategory("leis")}
              className={`px-6 py-2 rounded-full font-medium transition ${
                selectedCategory === "leis"
                  ? "bg-[#DC143C] text-white hover:bg-[#b01030]"
                  : "bg-white text-[#DC143C] hover:bg-gray-100"
              }`}
            >
              Leis
            </Button>
            <Button
              onClick={() => setSelectedCategory("figuras")}
              className={`px-6 py-2 rounded-full font-medium transition ${
                selectedCategory === "figuras"
                  ? "bg-[#4169E1] text-white hover:bg-[#3050c0]"
                  : "bg-white text-[#4169E1] hover:bg-gray-100"
              }`}
            >
              Figuras
            </Button>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 px-4 flex-1">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredContent.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <div
                  className={`rounded-lg border-2 p-8 hover:shadow-lg transition h-full flex flex-col bg-white ${
                    item.category === "dados"
                      ? "border-[#228B22]"
                      : item.category === "leis"
                      ? "border-[#DC143C]"
                      : "border-[#4169E1]"
                  }`}
                >
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 text-sm font-bold rounded-full mb-4 ${
                      item.category === "dados"
                        ? "bg-[#228B22] text-white"
                        : item.category === "leis"
                        ? "bg-[#DC143C] text-white"
                        : "bg-[#4169E1] text-white"
                    }`}>
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 group-hover:text-[#FFD700] transition ${
                    item.category === "dados"
                      ? "text-[#228B22]"
                      : item.category === "leis"
                      ? "text-[#DC143C]"
                      : "text-[#4169E1]"
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-[#0a0a0a] mb-4 font-medium">
                    {item.description}
                  </p>
                  <p className="text-[#333333] leading-relaxed flex-1">
                    {item.content}
                  </p>
                  
                  {/* Author at bottom right */}
                  <div className="mt-6 pt-4 border-t border-gray-300 text-right">
                    <p className={`text-sm font-semibold ${
                      item.category === "dados"
                        ? "text-[#228B22]"
                        : item.category === "leis"
                        ? "text-[#DC143C]"
                        : "text-[#4169E1]"
                    }`}>
                      {item.author}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#228B22] border-t-4 border-[#DC143C] py-8 px-4 text-center text-white">
        <p>&copy; Projeto Desenvolvido por alunos do 10° ano da Escola Pan Americana da Bahia com o intuito de trazer visibilidade à cultura negra.</p>
      </footer>
    </div>
  );
}
