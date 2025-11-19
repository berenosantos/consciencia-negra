import Header from "@/components/Header";
import ContentCard from "@/components/ContentCard";

interface ConceptItem {
  id: string;
  title: string;
  //: string;
  content: string;
  author: string;
  link: string;
}

const conceptsData: ConceptItem[] = [
  {
    id: "conceito-1",
    title: "Afrodescendências",
    //: "Discriminação sistemática enraizada nas instituições",
    content: "Afrodescendente é qualquer indivíduo de origem ou com ascendência africana e esse conjunto tem papel significativo na formação do Brasil. Durante mais de três séculos de escravidão, milhões de africanos foram trazidos a força, proveniente de regiões como Angola, Moçambique, Guiné, e desempenharam um papel fundamental na cultura brasileira, seja na língua, culinária, música, religiosidade, danças ou outros saberes. Mesmo após a abolição, os afrodescendentes continuam a enfrentar o racismo e as desigualdades, o que torna imprescindíveis políticas públicas e ações afirmativas. O conceito “afrodescendente”, de ampla aceitação, denota também a caracterização de um termo respeitoso, enfatizando, ademais a ancestralidade africana, a construção social da identidade por meio das vivências, do pertencimento e do saber.",
    author: "Rodrigo Telles",
    link: "https://www.significados.com.br/afrodescendente",
  },
  {
    id: "conceito-2",
    title: "Consciência Negra",
    //: "Identidade, cultura e consciência do povo negro",
    content: "O texto sobre a Consciência Negra,publicado no site Mundo Educação, fala sobre o significado e a importância dessa data para o Brasil. O texto mostra que ter consciência negra e entender as causas e a história do povo afrodescendente, valorizando as marcas que foram deixadas pelo racismo e a importância de lutar contra ele todos os dias. O texto explica que o Dia da Consciência Negra, comemorado no dia de 20 de novembro não só marca o Dia da Consciência Negra mas marca também a morte de Zumbi dos Palmares, símbolo de coragem e liberdade, que comemora a força da cultura afro-brasileira e destaca que a busca pela igualdade ainda não acabou.O texto tambem mostra as vitorias do movimento negro, como as leis que proibem o preconceito racial, que garantem vagas nas universidades e explicam o ensino da historia e da cultura afro-brasileira nas escolas. No fim, o texto mostra que o Dia da Consciência Negra é um momento para pensar e aprender, e lembrando que a luta contra o racismo tem que acontecer todos os dias e não só em uma data. ",
    author: "Sofia Imbassahy",
    link: "https://mundoeducacao.uol.com.br/sociologia/consciencia-negra.htm",
  },
  {
    id: "conceito-3",
    title: "Empoderamento Negro",
    //: "Conexão com a história e legado dos antepassados",
    content: "O empoderamento negro não consiste só na expressão da identidade cultural mas também em consciência, autoestima, autonomia econômica e participação política. O empoderamento se divide em quatro categorias.  O cognitivo faz com que a população negra compreenda suas raízes e efeitos do racismo; o psicólogo, que diz à respeito da autoestima e a valorização da história e cultura negra; o econômico, que busca ocupar espaços de poder e buscar a independência financeira; e o político, que é a capacidade de agir para a transformação social. Assim, o Empoderamento Negro é um processo contínuo, que busca a superação das estruturas de opressão histórica e a construção de uma comunidade mais justa e solidária, segundo a ideia de que o empoderamento individual deve se refletir no empoderamento coletivo.",
    author: "Rodrigo Telles",
    link: "https://revistaafirmativa.com.br/entenda-o-empoderamento-negro-didaticamente",
  },
  {
    id: "conceito-4",
    title: "Quilombo",
    //: "Dispersão dos povos africanos pelo mundo",
    content: "Os quilombos eram comunidades que foram formadas por africanos escravizados e outros grupos que tentavam ter a liberdade e a proteção contra a violência do sistema escravista no Brasil colonial. Criados a partir do século XVI, os quilombos existiam como centros de resistência, onde os moradores podiam usufruir dos seus modos de vida, praticar suas culturas, produzir alimentos e estabelecer comércio com as regiões próximas. O quilombo mais conhecido foi o dos Palmares, que chegou a juntar milhares de habitantes e se virou símbolo da luta contra a escravidão, se destacando pela organização, capacidade de defesa e liderança de figuras como Zumbi dos Palmares. ",
    author: "Rodrigo Telles",
    link: "https://www.cut.org.br/noticias/saiba-o-que-e-racismo-estrutural-e-como-ele-se-organiza-no-brasil-0a7d?utm_source=chatgpt.com",
  },
  {
    id: "conceito-5",
    title: "Racismo Estrutural",
    //: "Comunidades de resistência e liberdade",
    content: "Racismo estrutural é um sistema contínuo, que organiza a vida do brasileiro cuja cor da pele favorece as pessoas brancas, enquanto as pessoas negras e indígenas fazem parte do grupo marginalizado. Essa formação das desigualdades inicia-se desde o tempo da escravidão da história do país, que herdou marcas nas instituições, nas relações de poder e na acessibilidade dos direitos básicos, que se perpetuam hoje em forma de desigualdades dramáticas como a violência policial, a pobreza, a falta de oportunidades e a ausência de negros nos espaços de comando. O racismo estrutural não se encontra somente nas atitudes individuais, mas forma as estruturas sociais, políticas e culturais, que induzem consequências ao longo do ciclo de vida e à exclusão. Exemplos como o de João Pedro, Miguel e a trabalhadora doméstica vítima da Covid-19, retratam o cotidiano do racismo que é o presente indicativo do desencadear da percepção que se possa ter.",
    author: "Rodrigo Telles",
    link: "https://mundoeducacao.uol.com.br/historiadobrasil/quilombos.htm?utm_source=chatgpt.com",
  },
];

export default function ConceitsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFD700]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#D2B48C] to-[#C8A165] py-16 px-4 text-center text-white border-b-4 border-[#DC143C]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Conceitos Fundamentais</h1>
          <p className="text-xl text-gray-100">
            Entenda os principais conceitos que fundamentam a Consciência Negra e a luta pela igualdade racial
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 px-4 flex-1">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {conceptsData.map((item) => (
              <ContentCard
                key={item.id}
                title={item.title}
                //={item.//}
                content={item.content}
                author={item.author}
                link={item.link}
                borderColor="border-[#C8A165]"
                titleColor="text-[#C8A165]"
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
