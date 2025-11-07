import Header from "@/components/Header";

interface HistoryItem {
  id: string;
  period: string;
  title: string;
  content: string;
}

const historyData: HistoryItem[] = [
  {
    id: "historia-1",
    period: "1500-1600",
    title: "Chegada e Início da Escravidão",
    content: "Com a colonização portuguesa, africanos foram trazidos ao Brasil como escravizados. Inicialmente, havia maior número de indígenas escravizados, mas a resistência indígena e as epidemias levaram ao aumento do tráfico negreiro. A escravidão africana se tornou o sistema econômico central da colônia.",
  },
  {
    id: "historia-2",
    period: "1600-1700",
    title: "Resistência e Quilombos",
    content: "Durante este período, muitos escravizados fugiram e formaram quilombos, comunidades de resistência. O Quilombo dos Palmares, liderado por Zumbi, foi o maior e mais duradouro. Esses quilombos representavam a resistência e a busca por liberdade, desafiando o sistema escravocrata.",
  },
  {
    id: "historia-3",
    period: "1700-1800",
    title: "Apogeu do Tráfico Negreiro",
    content: "O século XVIII foi marcado pelo auge do tráfico negreiro. Milhões de africanos foram trazidos para o Brasil, principalmente para trabalhar nas plantações de cana-de-açúcar. A escravidão se consolidou como sistema econômico e social, moldando profundamente a sociedade brasileira.",
  },
  {
    id: "historia-4",
    period: "1800-1850",
    title: "Movimentos Abolicionistas",
    content: "No século XIX, movimentos abolicionistas ganharam força. Intelectuais, religiosos e ativistas começaram a questionar a escravidão. Leis como a Lei Eusébio de Queirós (1850) proibiram o tráfico negreiro. A pressão internacional e interna aumentava para o fim da escravidão.",
  },
  {
    id: "historia-5",
    period: "1850-1888",
    title: "Caminho para a Abolição",
    content: "Leis progressivas foram aprovadas: Lei do Ventre Livre (1871), Lei dos Sexagenários (1885). Finalmente, em 13 de maio de 1888, a Princesa Isabel assinou a Lei Áurea, abolindo a escravidão no Brasil. No entanto, a liberdade não trouxe igualdade ou oportunidades para os negros libertos.",
  },
  {
    id: "historia-6",
    period: "1888-1950",
    title: "Pós-Abolição e Marginalização",
    content: "Após a abolição, negros enfrentaram discriminação sistemática. Imigrantes europeus receberam terras e oportunidades que foram negadas aos negros. Políticas de branqueamento promoviam a imigração europeia. Negros foram marginalizados economicamente e socialmente, perpetuando desigualdades.",
  },
  {
    id: "historia-7",
    period: "1950-1988",
    title: "Movimentos Negros Modernos",
    content: "Movimentos negros se organizaram para lutar contra a discriminação. O Movimento Negro Unificado (MNU), fundado em 1978, foi importante para a conscientização. A Constituição de 1988 reconheceu o racismo como crime inafiançável. Políticas de ações afirmativas começaram a ser discutidas.",
  },
  {
    id: "historia-8",
    period: "1988-2024",
    title: "Luta Contemporânea por Igualdade",
    content: "Desde a Constituição de 1988, avanços foram conquistados: Lei 10.639/2003 (ensino de história afro-brasileira), Lei 12.288/2010 (Estatuto da Igualdade Racial), cotas em universidades e concursos públicos. Mas a luta continua contra racismo estrutural, desigualdades econômicas e sociais.",
  },
];

export default function HistoriaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] py-16 px-4 text-center text-white border-b-4 border-[#DC143C]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4 text-[#FFD700]">História do Povo Negro no Brasil</h1>
          <p className="text-xl text-gray-200">
            Uma trajetória de resistência, luta e contribuições fundamentais para a formação da sociedade brasileira
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 flex-1">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {historyData.map((item, index) => (
              <div key={item.id} className="flex gap-8">
                {/* Timeline line and dot */}
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full border-4 border-[#0a0a0a] z-10 ${
                    index % 4 === 0
                      ? "bg-[#228B22]"
                      : index % 4 === 1
                      ? "bg-[#FFD700]"
                      : index % 4 === 2
                      ? "bg-[#DC143C]"
                      : "bg-[#4169E1]"
                  }`}></div>
                  {index < historyData.length - 1 && (
                    <div className={`w-1 flex-1 my-2 ${
                      index % 4 === 0
                        ? "bg-[#228B22]"
                        : index % 4 === 1
                        ? "bg-[#FFD700]"
                        : index % 4 === 2
                        ? "bg-[#DC143C]"
                        : "bg-[#4169E1]"
                    }`} style={{ minHeight: "200px" }}></div>
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <div className={`rounded-lg border-2 p-8 hover:border-[#FFD700] transition ${
                    index % 4 === 0
                      ? "bg-[#1a1a1a] border-[#228B22]"
                      : index % 4 === 1
                      ? "bg-[#1a1a1a] border-[#FFD700]"
                      : index % 4 === 2
                      ? "bg-[#1a1a1a] border-[#DC143C]"
                      : "bg-[#1a1a1a] border-[#4169E1]"
                  }`}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`px-4 py-2 font-bold rounded-full text-sm ${
                        index % 4 === 0
                          ? "bg-[#228B22] text-white"
                          : index % 4 === 1
                          ? "bg-[#FFD700] text-[#0a0a0a]"
                          : index % 4 === 2
                          ? "bg-[#DC143C] text-white"
                          : "bg-[#4169E1] text-white"
                      }`}>
                        {item.period}
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-200 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
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
