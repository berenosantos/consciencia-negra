import Header from "@/components/Header";
import ContentCard from "@/components/ContentCard";

interface DataItem {
  id: string;
  title: string;
  //: string;
  content: string;
  author: string;
  link: string;
}

const dadosData: DataItem[] = [
  {
    id: "dados-1",
    title: "Censo 2022: pela primeira vez, desde 1991, a maior parte da população do Brasil se declara parda ",
    //: "Representatividade demográfica da população negra",
    content: "As estatísticas apresentadas pelo IBGE com os resultados do universo da população por identificação etnico-racial constatam a proeminência da população negra no país. Isso é perceptível pelo dado demarcado onde 45,3% dos residentes se identificam como pardos. O dado é comprovado pela relação dos Censos de 2010 para 2022 em que a proporção do grupo preto subiu de 7,6% para 10,2% e a proporção do grupo pardo ampliou 11,9%. Além disso, os índices territoriais agregam a esta constatação, evidenciando que os pardos se estabeleceram em 3.245 municípios do país, considerando 58,3% do total de municípios. Retomando esse tema, os pardos ressaltaram-se no recorte da Amazônia Legal, considerando 65,2% (17.373.150) da comunidade. Entre diversos desenvolvimentos, o Censo de 2022 abordou a maior inclusão da população negra em todos os recortes de idade, já que os pardos mostraram altos marcos até os 44 anos e os pretos na faixa de 30 a 44 anos. Diante disso, o IBGE reforçou as conclusões do Censo Demográfico a respeito do predomínio negro em especial os pardos no Brasil, desencadeando o reconhecimento da influência afro descendente.",
    author: "Maria Júlia Scala Fracassi Costa",
    link: "https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38719-censo-2022-pela-primeira-vez-desde-1991-a-maior-parte-da-populacao-do-brasil-se-declara-parda",
  },
  {
    id: "dados-2",
    title: "Datafolha: 59% dos brasileiros consideram que a maior parte da população é racista",
    //: "Acesso de negros ao ensino superior",
    content: "Sem dúvida, o racismo, ou o preconceito contra indivíduos pertencentes a uma etnia, ainda tem uma presença significativa na sociedade brasileira, lamentavelmente. Dentro dessa realidade, é essencial destacar a necessidade de ter o Dia da Consciência Negra como feriado nacional, com o intuito de trazer atenção a aqueles que ainda sofrem com o preconceito racial. De acordo com uma pesquisa conduzida pelo Datafolha, 59% dos brasileiros acreditam que a maior parte da população é racista. Com isso em mente, o instituto de pesquisa entrevistou maiores de 16 anos de diversas etnias e a investigação revelou resultados consistentes: a maior parte de todas as etnias entrevistadas, incluindo brancos, negros e pardos, acreditam que a maior parte da população é racista. Além disso, algo ainda mais alarmante: 45% dos entrevistados acreditam que o racismo vem aumentando nos últimos tempos. Ademais, predominância do racismo revela que, mesmo em uma sociedade onde o preconceito racial é contra a lei e condenado, o racismo especialmente contra negros, continua sendo algo muito presente no cotidiano do cidadão brasileiro. Por certo, é necessário levantar um questionamento: será que podemos nos considerar uma sociedade moderna mesmo que o racismo ainda esteja tão presente? Portanto, é fundamental ressaltar a importância do Dia da Consciência Negra como feriado nacional, com o intuito de trazer visibilidade aos atos racistas diários, que muitas vezes passam despercebidos, e destacar o quão prejudicial essas delinquências são para a sociedade.",
    author: "Yumi Arakawa",
    link: "https://g1.globo.com/politica/noticia/2024/11/20/datafolha-racismo.ghtml",
  },
  {
    id: "dados-3",
    title: "Desigualdades Sociais por Cor ou Raça no Brasil",
    //: "Estatísticas de violência contra população negra",
    content: "A desigualdade racial é um problema recorrente que se estabeleceu durante o Brasil Colonial; historicamente persistente, normalmente caracterizada por uma grande concentração de patrimônio e renda, acesso desigual de serviços básicos, e uma ampla segregação predominante em todo o país. Atualmente, esta disparidade racial ainda estão presentes em nosso cotidiano, segundo dados da Pesquisa Nacional por Amostras de Domicílios em 2018, A força de trabalho negra brasileira representa 54,9% da população brasileira , Porém, apenas 29,9% dessas pessoas ocupam cargos de gerência, portanto, demonstrando como a desigualdade social ainda habita em nossa sociedade. A matéria disponibilizada trata-se de uma pesquisa conduzida pelo IBGE que traz dados concretos e educativos relacionados com a desigualdade social no Brasil, apresentando tabelas e gráficos que ajudam a compreender a persistência da desigualdade no Brasil. O site permite que o leitor perceber como o processo da escravidão e o racismo institucional não é apenas algo do passado, mas sim uma estrutura viva que percorre na vida de inumeros individuos negros, normalmente mitigando suas opportunidades de crescer na vida. Ao providenciar dados que comprovam como a cor determina as condições desiguais no Brasil, o site demonstra fatos fundamentais da consciência negra pois ele desmistifica o mito da democracia racial, fornecendo também uma base empírica para governos anti racistas e por fim desenvolve uma reflexão crítica, pois esses dados demonstram como a sociedade ainda não é igualitária, tornando o nosso papel para fazer uma mudança nesta estrutura social.",
    author: "Guilherme Oliveira",
    link: "https://educa.ibge.gov.br/jovens/materias-especiais/21039-desigualdades-sociais-por-cor-ou-raca-no-brasil.html",
  },
  {
    id: "dados-4",
    title: "Edição Censo Demográfico 2022: Monitoramento e Avaliação",
    //: "Emprego e renda da população negra",
    content: "O perfil racial da população brasileira é analisado nos levantamentos do Censo Demográfico como uma demanda legal. A partir dessas informações, forma-se o documento Informe MIR, no qual se encontra uma avaliação desses dados a fim de fomentar a igualdade social e se opor às desigualdades. Nesse sentido, a pesquisa mais vigente do Censo de 2022 ilustra que a população autodeclarada como negra ou parda está acima de 50%. Esse valor tende a se elevar desde o Censo de 1940. O desenvolvimento levou a êxitos significativos como o aumento da proporção preta e parda da população nos quesitos quantitativos da população residente segundo o sexo, níveis de grandes regiões, e as unidades federativas brasileiras com exceção de Roraima no contexto de comparação entre os anos de 2010 e 2022. Logo, os especialistas concluíram que a maior densidade populacional negra se deu devido às manifestações culturais organizadas pelos afrodescendentes e debates sobre o racismo e discriminação, construindo o sentimento nacional de pertencimento étnico-racial. ",
    author: "Maria Júlia Scala Fracassi Costa",
    link: "https://www.gov.br/igualdaderacial/pt-br/composicao/secretaria-de-gestao-do-sistema-nacional-de-promocao-da-igualdade-racial/diretoria-de-avaliacao-monitoramento-e-gestao-da-informacao/informativos/Informe-edicao-censo-demogrfico2022.pdf",
  },
  {
    id: "dados-5",
    title: "Novembro Negro: um panorama sobre a população negra com deficiência no Brasil",
    //: "Disparidades de renda entre negros e brancos",
    content: "O Novembro Negro promove uma reflexão sobre a luta antirracista e a valorização da população negra. Além disso, é fundamental incluir um olhar mais cuidadoso às pessoas negras com deficiência no Brasil. A matéria publicada pelo portal gov.br destaca como “Para um grupo como negros com deficiência, as dificuldades costumam ser ainda maiores”, reconhecendo que mais de 54% da população com deficiência se autodeclara parda ou negra. Os dados acima demonstram a importância de abordar o racismo assim como o sexismo e capacitismo, uma vez que geram maior exclusão e difícil acesso a serviços e oportunidades. Estas formas de descriminação diminuem o acesso ao mercado de trabalho e cuidados de saúde. Estudos apontam que apenas 0,6% das pessoas negras com deficiência têm acesso ao ensino superior em universidades públicas e que 42,9% das mulheres negras com deficiência estão mais vulneráveis a violência. Ainda, há uma forte presença da disparidade salarial entre pessoas brancas e negras com deficiência, e uma taxa de informalidade de 57% entre pardos e negros com deficiência, e 49% entre brancos com deficiência. Logo, a conscientização e educação são grandes passos na busca de mais inclusividade e igualdade. O dia 20 de Novembro, Dia da Consciência Negra, é um momento de reflexão sobre essas desigualdades, chamando atenção para a necessidade de maior acesso à educação, saúde, emprego e outras oportunidades, trazendo então um fim ao capacitismo e injustiças sociais.",
    author: "Stella Francischetto",
    link: "https://www.gov.br/mdh/pt-br/assuntos/noticias/2023/novembro/novembro-negro-um-panorama-sobre-a-populacao-negra-com-deficiencia-no-brasil?utm_source=chatgpt.com",
  },
  {
    id: "dados-6",
    title: "TSE – Estatísticas Eleitorais sobre Representatividade Negra (2024)",
    //: "Mortalidade materna entre mulheres negras",
    content: " À medida que o Brasil se aproxima de eleições cada vez mais disputadas e observadas, surge uma pergunta essencial: quem realmente ocupa os espaços de poder no país? O relatório de Estatísticas Eleitorais do TSE (2024) oferece uma resposta reveladora e historicamente significativa. Pela primeira vez, o número de candidatos autodeclarados negros se aproxima da metade do total, um marco que reflete não apenas mudanças institucionais, mas também a força de décadas de mobilização social. Esse avanço é impulsionado por medidas recentes, como a garantia de distribuição proporcional de recursos do fundo eleitoral para candidaturas negras, que começa a corrigir desigualdades estruturais na corrida eleitoral. Assim como o 20 de Novembro, símbolo nacional de resistência, memória e afirmação da identidade negra, os novos dados do TSE mostram que a luta pela igualdade se estende para dentro da política, um território que historicamente silenciou vozes negras. Agora, esses espaços passam a ser gradualmente transformados em arenas de presença, influência e decisão. Mais do que números, os dados revelam um movimento profundo: a democracia brasileira se torna, pouco a pouco, mais parecida com o próprio povo que representa.",
    author: "Ministério da Saúde",
    link: "https://www.gov.br/saude/",
  },
  {
    id: "dados-7",
    title: "Encarceramento",
    //: "Sobrerrepresentação de negros no sistema carcerário",
    content: "Negros representam 64% da população carcerária brasileira. Essa sobrerrepresentação reflete discriminação no sistema de justiça criminal. Negros recebem penas maiores e têm menos acesso a defesa adequada. Reforma do sistema carcerário é essencial.",
    author: "Conselho Nacional de Justiça",
    link: "https://www.cnj.jus.br/",
  },
  {
    id: "dados-8",
    title: "Pobreza e Desigualdade",
    //: "Concentração de pobreza entre população negra",
    content: "Negros representam 70% da população em situação de pobreza extrema. Essa concentração reflete séculos de exclusão econômica. Políticas de redistribuição de renda e acesso a oportunidades são necessárias para reduzir desigualdades.",
    author: "Fundação Getúlio Vargas",
    link: "https://www.fgv.br/",
  },
];

export default function DadosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFD700]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#7A5230] to-[#8B5A2B] py-16 px-4 text-center text-white border-b-4 border-[#DC143C]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Dados</h1>
          <p className="text-xl text-gray-100">
            Estatísticas e números que revelam desigualdades raciais no Brasil
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 px-4 flex-1">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {dadosData.map((item) => (
              <ContentCard
                key={item.id}
                title={item.title}
                //={item.//}
                content={item.content}
                author={item.author}
                link={item.link}
                borderColor="border-[#8B5A2B]"
                titleColor="text-[#8B5A2B]"
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
