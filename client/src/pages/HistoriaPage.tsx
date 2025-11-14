import Header from "@/components/Header";
import ContentCard from "@/components/ContentCard";

interface HistoryItem {
  id: string;
  period: string;
  title: string;
  description: string;
  content: string;
  author: string;
  link: string;
}

const historyData: HistoryItem[] = [
  {
    id: "historia-1",
    period: "1500-1600",
    title: "Chegada e Início da Escravidão",
    description: "Colonização portuguesa e início do tráfico negreiro",
    content: "Com a colonização portuguesa, africanos foram trazidos ao Brasil como escravizados. Inicialmente, havia maior número de indígenas escravizados, mas a resistência indígena e as epidemias levaram ao aumento do tráfico negreiro. A escravidão africana se tornou o sistema econômico central da colônia.",
    author: "Instituto Brasileiro de Geografia e Estatística",
    link: "https://www.ibge.gov.br/",
  },
  {
    id: "historia-2",
    period: "1600-1700",
    title: "Resistência e Quilombos",
    description: "Formação de comunidades de resistência e liberdade",
    content: "Durante este período, muitos escravizados fugiram e formaram quilombos, comunidades de resistência. O Quilombo dos Palmares, liderado por Zumbi, foi o maior e mais duradouro. Esses quilombos representavam a resistência e a busca por liberdade, desafiando o sistema escravocrata.",
    author: "Fundação Palmares",
    link: "https://www.palmares.gov.br/",
  },
  {
    id: "historia-3",
    period: "1700-1800",
    title: "Apogeu do Tráfico Negreiro",
    description: "Auge do comércio de escravizados africanos",
    content: "O século XVIII foi marcado pelo auge do tráfico negreiro. Milhões de africanos foram trazidos para o Brasil, principalmente para trabalhar nas plantações de cana-de-açúcar. A escravidão se consolidou como sistema econômico e social, moldando profundamente a sociedade brasileira.",
    author: "Biblioteca Nacional",
    link: "https://www.bn.gov.br/",
  },
  {
    id: "historia-4",
    period: "1800-1850",
    title: "Movimentos Abolicionistas",
    description: "Crescimento da resistência contra a escravidão",
    content: "No século XIX, movimentos abolicionistas ganharam força. Intelectuais, religiosos e ativistas começaram a questionar a escravidão. Leis como a Lei Eusébio de Queirós (1850) proibiram o tráfico negreiro. A pressão internacional e interna aumentava para o fim da escravidão.",
    author: "Planalto Federal",
    link: "https://www.planalto.gov.br/",
  },
  {
    id: "historia-5",
    period: "1850-1888",
    title: "Caminho para a Abolição",
    description: "Leis progressivas rumo à liberdade dos escravizados",
    content: "Leis progressivas foram aprovadas: Lei do Ventre Livre (1871), Lei dos Sexagenários (1885). Finalmente, em 13 de maio de 1888, a Princesa Isabel assinou a Lei Áurea, abolindo a escravidão no Brasil. No entanto, a liberdade não trouxe igualdade ou oportunidades para os negros libertos.",
    author: "Arquivo Nacional",
    link: "https://www.gov.br/arquivonacional/",
  },
  {
    id: "historia-6",
    period: "1888-1950",
    title: "Pós-Abolição e Marginalização",
    description: "Período de discriminação sistemática e exclusão",
    content: "Após a abolição, negros enfrentaram discriminação sistemática. Imigrantes europeus receberam terras e oportunidades que foram negadas aos negros. Políticas de branqueamento promoviam a imigração europeia. Negros foram marginalizados economicamente e socialmente, perpetuando desigualdades.",
    author: "IPEA - Instituto de Pesquisa Econômica Aplicada",
    link: "https://www.ipea.gov.br/",
  },
  {
    id: "historia-7",
    period: "1950-1988",
    title: "Movimentos Negros Modernos",
    description: "Organização e luta por direitos civis e igualdade",
    content: "A segunda metade do século XX viu o surgimento de movimentos negros organizados. O Movimento Negro Unificado, fundado em 1978, trouxe visibilidade às questões raciais. Intelectuais como Abdias do Nascimento e ativistas lutaram por igualdade racial, educação e representatividade.",
    author: "Museu Afro Brasil",
    link: "https://www.museuafrobrasil.org.br/",
  },
  {
    id: "historia-8",
    period: "1988-2024",
    title: "Constituição e Políticas de Igualdade",
    description: "Avanços legais e políticas de ação afirmativa",
    content: "A Constituição de 1988 proibiu a discriminação racial. Posteriormente, foram implementadas políticas de ação afirmativa como cotas em universidades e concursos públicos. A Lei 10.639/2003 tornou obrigatório o ensino de história afro-brasileira. Apesar dos avanços, a luta pela igualdade racial continua.",
    author: "Secretaria de Políticas de Promoção da Igualdade Racial",
    link: "https://www.gov.br/igualdaderacial/",
  },
];

export default function HistoriaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFD700]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#DC143C] to-[#b01030] py-16 px-4 text-center text-white border-b-4 border-[#228B22]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">História</h1>
          <p className="text-xl text-gray-100">
            Trajetória do povo negro desde a chegada ao Brasil até os dias atuais
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 px-4 flex-1">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {historyData.map((item) => (
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
