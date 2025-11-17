import Header from "@/components/Header";
import ContentCard from "@/components/ContentCard";

interface DataItem {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  link: string;
}

const dadosData: DataItem[] = [
  {
    id: "dados-1",
    title: "População Negra no Brasil",
    description: "Representatividade demográfica da população negra",
    content: "Segundo o IBGE, 56% da população brasileira se declara negra ou parda. Apesar dessa representatividade significativa, a população negra enfrenta desigualdades em renda, educação e acesso a oportunidades. Esses números refletem a importância de políticas que promovam igualdade racial.",
    author: "Instituto Brasileiro de Geografia e Estatística",
    link: "https://www.ibge.gov.br/",
  },
  {
    id: "dados-2",
    title: "Educação Superior",
    description: "Acesso de negros ao ensino superior",
    content: "Apenas 11% da população negra possui ensino superior completo, comparado a 22% da população branca. As políticas de ações afirmativas têm aumentado o acesso, mas disparidades persistem. A taxa de conclusão do ensino médio também é menor entre estudantes negros.",
    author: "Ministério da Educação",
    link: "https://www.gov.br/mec/",
  },
  {
    id: "dados-3",
    title: "Violência e Homicídios",
    description: "Estatísticas de violência contra população negra",
    content: "Negros representam 77% das vítimas de homicídio no Brasil. A taxa de homicídios entre homens negros é 2,5 vezes maior que entre homens brancos. Esses números alarmantes refletem desigualdades estruturais e a necessidade de políticas públicas de segurança mais efetivas.",
    author: "Atlas da Violência",
    link: "https://www.ipea.gov.br/atlasviolencia/",
  },
  {
    id: "dados-4",
    title: "Mercado de Trabalho",
    description: "Emprego e renda da população negra",
    content: "A taxa de desemprego entre negros é 1,5 vezes maior que entre brancos. Mesmo com escolaridade equivalente, negros ganham menos e têm menos acesso a posições de liderança. A representatividade em cargos executivos é inferior a 5%.",
    author: "DIEESE",
    link: "https://www.dieese.org.br/",
  },
  {
    id: "dados-5",
    title: "Renda Familiar",
    description: "Disparidades de renda entre negros e brancos",
    content: "A renda média de pessoas negras é aproximadamente 40% menor que a de pessoas brancas com a mesma escolaridade. Essa disparidade reflete discriminação histórica e contínua no mercado de trabalho. Políticas de redistribuição de renda são necessárias.",
    author: "IPEA - Instituto de Pesquisa Econômica Aplicada",
    link: "https://www.ipea.gov.br/",
  },
  {
    id: "dados-6",
    title: "Saúde Materna",
    description: "Mortalidade materna entre mulheres negras",
    content: "A taxa de mortalidade materna entre mulheres negras é 2,6 vezes maior que entre mulheres brancas. Essa disparidade reflete acesso desigual a cuidados de saúde, racismo institucional e determinantes sociais. Políticas de saúde devem considerar essas especificidades.",
    author: "Ministério da Saúde",
    link: "https://www.gov.br/saude/",
  },
  {
    id: "dados-7",
    title: "Encarceramento",
    description: "Sobrerrepresentação de negros no sistema carcerário",
    content: "Negros representam 64% da população carcerária brasileira. Essa sobrerrepresentação reflete discriminação no sistema de justiça criminal. Negros recebem penas maiores e têm menos acesso a defesa adequada. Reforma do sistema carcerário é essencial.",
    author: "Conselho Nacional de Justiça",
    link: "https://www.cnj.jus.br/",
  },
  {
    id: "dados-8",
    title: "Pobreza e Desigualdade",
    description: "Concentração de pobreza entre população negra",
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
                description={item.description}
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
        <p>&copy; 2024 Consciência Negra. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
