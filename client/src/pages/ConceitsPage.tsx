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
    title: "Preconceito e discriminação dificultam êxito acadêmico de estudantes negros",
    //: "Dispersão dos povos africanos pelo mundo",
    content: "Estudo feito na Universidade de São Paulo (USP), a maior instituição de ensino superior do país, destaca os limites e possibilidades para o bem-viver de alunos negros e indígenas em instituições de ensino superior ao ser a última a aderir à reserva de vagas do sistema de cotas para esses estudantes. Apesar dessa abertura de portas não só realizada pela USP, ainda é preciso que eles se sintam suficientemente integrados e acolhidos no ambiênte acadêmico para que possam ter resultados satisfatórios durante o período de graduação e, em seguida, a pós graduação. Adicionalmente, o estudo avalia o índice de Bem-Estar Subjetivo (BES) dos estudantes, que relaciona diversos aspectos e descreve o nível de satisfação de indivíduos de acordo com suas próprias avaliações de suas vidas. O estudo evidencia que o BES de estudantes negros é menor que o dos estudantes não-negros, pois enfrentam maiores dificuldades de adaptação acadêmica e utilizam mais os auxílios para permanência estudantil e os serviços de saúde mental, considerando que são afetados por situações de preconceito e discriminação vivenciadas em ambientes acadêmicos. Para saber mais, acesse o site da CNN abaixo.",
    author: "Luize Fasani",
    link: "https://www.cnnbrasil.com.br/educacao/preconceito-e-discriminacao-dificultam-integracao-e-exito-academico-de-estudante/",
  },
  {
    id: "conceito-5",
    title: "Quilombo",
    //: "Comunidades de resistência e liberdade",
    content: "Quilombos eram comunidades formadas por escravizados fugidos e seus descendentes. Representam espaços de resistência, liberdade e reconstrução da vida africana nas Américas. O Quilombo dos Palmares, liderado por Zumbi, é o exemplo mais famoso de resistência contra a escravidão.",
    author: "Instituto Nacional de Colonização e Reforma Agrária",
    link: "https://www.gov.br/incra/",
  },
  {
    id: "conceito-6",
    title: "Empoderamento Negro",
    //: "Processo de fortalecimento e autonomia",
    content: "Empoderamento negro é o processo de fortalecer a consciência, autonomia e poder de decisão da população negra. Envolve educação, acesso a oportunidades, representatividade em espaços de poder e a valorização da cultura e história negra. É um movimento de transformação social.",
    author: "Secretaria de Políticas de Promoção da Igualdade Racial",
    link: "https://www.gov.br/igualdaderacial/",
  },
  {
    id: "conceito-7",
    title: "Interseccionalidade",
    //: "Análise de múltiplas formas de opressão",
    content: "Interseccionalidade é um conceito que analisa como diferentes formas de opressão (raça, gênero, classe, sexualidade) se intersectam e se reforçam mutuamente. Reconhece que pessoas negras, especialmente mulheres negras, enfrentam discriminações múltiplas e complexas.",
    author: "Biblioteca Nacional",
    link: "https://www.bn.gov.br/",
  },
  {
    id: "conceito-8",
    title: "Afrocentrismo",
    //: "Perspectiva centrada na experiência africana",
    content: "Afrocentrismo é uma perspectiva que coloca a experiência, história e cultura africana no centro da análise, em vez de vê-las através de uma lente eurocêntrica. Busca recuperar narrativas africanas e afro-brasileiras que foram marginalizadas ou distorcidas pela historiografia ocidental.",
    author: "Fundação Biblioteca Nacional",
    link: "https://www.bn.gov.br/",
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
        <p>&copy; 2024 Consciência Negra. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
