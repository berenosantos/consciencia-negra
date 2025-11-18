import Header from "@/components/Header";
import ContentCard from "@/components/ContentCard";

interface HistoryItem {
  id: string;
  period: string;
  title: string;
  //: string;
  content: string;
  author: string;
  link: string;
}

const historyData: HistoryItem[] = [
  {
    id: "historia-1",
    period: "1500-1600",
    title: "A importância do quilombo dos palmares",
    //: "Colonização portuguesa e início do tráfico negreiro",
    content: "O quilombo dos Palmares, iniciado por escravizados que haviam fugido das grandes lavouras de cana-de-açúcar no estado de Pernambuco, foi o maior quilombo que já existiu na américa latina. Sendo constituído na região da serra da barriga (na zona da mata de Alagoas), o quilombo chegou a reunir cerca de 20 mil habitantes, servindo como um dos maiores simbolos de resistencia a escravidão no Brasil. Os primeiros registros dados do quilombo surgem a partir de 1597, embora existam teorias que o quilombo existia antes disso. Com o tempo, Palmares cresceu, tornou-se reconhecido, e começou a servir de inspiração para outros escravizados a resistirem e fugirem. O nome de quilombo dos Palmares surgiu por ser construído em uma região que possui um grande número de palmeiras, sendo árvores que forneciam aos moradores diversas utilidades, como o alimento e as folhas que eram utilizadas para fazer o telhado dos casebres que eram construídos no local. A capital de Palmares possuía uma segurança extremamente rigorosa, e era cercado por três grandes muralhas de madeira que possuía torres de vigilância que estavam sempre atentas para garantir a segurança do quilombo. Para adicionar, aos arredores das muralhas existiam dezenas de armadilhas que reforçaram ainda mais a segurança de Palmares. As práticas de resistência mais comuns entre os escravizados da época eram as fugas e formações de quilombos, o que levava muitas vezes à destruição dos mesmos. Infelizmente, o quilombo foi destruído em 1694 e o seu líder, Zumbi, foi morto no ano seguinte em uma emboscada.",
    author: "Eric Valadares",
    link: "https://brasilescola.uol.com.br/historiab/quilombo-dos-palmares.htm",
  },
  {
    id: "historia-2",
    period: "1600-1700",
    title: "De onde surgiu o movimento da consciência negra",
    //: "Formação de comunidades de resistência e liberdade",
    content: "De onde surgiu o dia da consciência negra? O dia da consciencia negra surgiu a partir de um movimento social iniciado nos anos 70 por estudantes negros do Rio Grande do Sul, que propuseram o dia 20 de novembro com o intuito de homenagear a morte de Zumbi de palmares (lider do quilombo palmares) e contestar o protagonismo da princesa isabel na abolição da escravatura. Essa data foi instituída pela lei n.12.519 de 10 de novembro de 2011 e, apesar de não incluir todos estados do país inicialmente (sendo começado no município de União dos Palmares em Alagoas), hoje ela integra a nação toda e serve como uma data de reflexão e conscientização sobre nosso atos. É muito importante relembrar que esta data é apenas como uma marca, e não significa que só nela que devemos nos importar com a consciência negra, e sim todos os dias do ano.",
    author: "Eric Valadares",
    link: "https://www.vilapavao.es.gov.br/noticia/ler/9642/20-de-novembro-dia-da-consciencia-negra",
  },
  {
    id: "historia-3",
    period: "1700-1800",
    title: "Dia da Consciência Negra: a relevância e a contribuição histórica e cultural da população negra no Brasi",
    //: "Auge do comércio de escravizados africanos",
    content: "A celebração do Dia da Consciência Negra ocorre no dia 20 de Novembro e nesta data o Brasil celebra Zumbi dos Palmares, líder do Quilombo dos Palmares que representa um símbolo de resistência e luta contra a escravidão para a população negra no país. O feriado nacional não simboliza somente a luta antirracista, mas também celebra a diversa cultura afro que molda a indentidade do Brasil que conhecemos nos dias atuais, além de reconhecer as contribuições negras na formação social e econômica do país. Ao redor de todo o território nacional, manifestações artísticas, musicais e religiosas são realizadas com o objetivo de destacar como a herança afro-brasileira está presente em nosso cotidiano, seja na arte, na música, na culinária ou na religião. Dentre as inúmeras celebrações, se destacam as celebrações na Serra da Barriga, em Alagoas, local que pode ser considerado sagrado em termos de resistência, já que foi o local onde existiu o Quilombo dos Palmares. O lugar ganhou destaque ao realizar anualmente shows, rodas de capoeira, rituais e até homenagens aos que batalharam e ainda batalham para consolidar esse feriado como algo nacional. Instituições como A Fundação Palmares, o Iphan e o Ministério da Cultura se unem para promover uma programação ampla e inclusiva que valoriza a expressão afro-brasileira na música, culinária, literatura, moda e nas tradições que vem de religiões de matrizes africanas como o candomblé. Os projetos como “Cultura Negra Vive” e “Vozes de Ébano” reforçam a ideia de que a arte é a cultura são um instrumento de empoderamento e transformação social. Esses tipos de ações buscam educar e inspirar para além de somente celebrar, e estimulam as novas gerações a valorizarem as heranças e o legado do povo negro na construção do Brasil. Por fim, celebrar o Dia da Consciência Negra vai além de reconhecer o povo afro como um dos patrimônios mais importantes do povo brasileiro. Essa data nos permite reconhecer a força criativa e ancestral da cultura negra, além de fortalecer um fundamento essencial para um país mais justo, diverso e com direitos iguais. A data comemorativa se torna um dia onde podemos refletir, como devemos valorizar a herança cultural dos povos afro-descendentes no nosso cotidiano, para que o respeito às diferenças se torne a base para uma sociedade que vive em harmonia.",
    author: "Marcela Cunha",
    link: "https://www.gov.br/cultura/pt-br/assuntos/noticias/feriado-nacional-da-consciencia-negra-celebra-a-cultura-e-destaca-acoes-do-minc-para-reflexao-da-relevancia-e-a-contribuicao-historica-dessa-populacao",
  },
  {
    id: "historia-4",
    period: "1800-1850",
    title: "Dia da Consciência Negra: conquistas e lutas pelo fim do racismo",
    //: "Crescimento da resistência contra a escravidão",
    content: "Você sabe de que forma o racismo estrutural ainda influencia o acesso de pessoas negras à educação, ao mercado de trabalho e aos espaços de poder no Brasil? No dia 20 de novembro é celebrado o Dia da Consciência Negra no Brasil, decretado Lei Nacional em dezembro de 2023. A Universidade Federal do Espírito Santo (UFES) chama a atenção para o processo de conquistas e lutas para o fim da escravidão no Brasil, um país marcado por mais de 350 anos do processo escravocrata. Apesar de a escravidão ser proibida no Brasil há 136 anos, o racismo continua presente na nossa sociedade, dado, por parte, pelo período pós-abolição, em que a população permaneceu marginalizada e desprovida de acesso à saúde, à educação, à formação profissionalizante e à cidadania. O racismo continua presente na organização do nosso país e acontece principalmente pela falta de oportunidades para pessoas negras. Conquistas pelo fim do racismo e do preconceito já vêm acontecendo, como a Lei nº 7.716, de 5 de janeiro de 1989, também conhecida como Lei Caó, que define os crimes de preconceito de raça ou cor, e entre outras leis consideradas reparatórias, que buscam corrigir um dano causado anteriormente. Apesar de algumas medidas já terem sido tomadas, ainda existe um problema de racismo estrutural no nosso país, por isso convido você a ler esse documento da UFES, no qual explica-se tal situação, bem como evidenciam-se medidas tomadas pela universidade, as quais podem ser seguidas como exemplo.",
    author: "Paula Rocha",
    link: "https://ufes.br/conteudo/dia-da-consciencia-negra-conquistas-e-lutas-pelo-fim-do-racismo",
  },
  {
    id: "historia-5",
    period: "1850-1888",
    title: "Quilombos: história, direitos e desafios",
    //: "Leis progressivas rumo à liberdade dos escravizados",
    content: "Durante a escravidão no Brasil, o povo negro fugia das fazendas à procura da liberdade. Os quilombos surgiram durante esse período como local de refúgio. Esses lugares vieram a caracterizar-se pelo sentimento de resistência, união e preservação da cultura africana. O exemplo mais conhecido no Brasil é o Quilombos dos Palmares, chefiado por Zumbi, que inspirou a luta do povo negro por direitos e reconhecimento. Mesmo após a abolição da escravatura, as comunidades quilombolas continuam sendo alvo da exclusão social e a luta por terras ainda é um problema para esses povos. A Constituição de 1988 reconheceu o direito das comunidades negras à posse das terras por eles habitadas, porém o processo de regularização ainda é lento e repleto de obstáculos. Hoje em dia os quilombolas ainda clamam por respeito, acesso às políticas públicas e apoio a seus valores culturais.",
    author: "Gabriel Gusmão",
    link: "https://www.cese.org.br/blog/quilombolas-historia-direitos-e-desafios/?utm_source=chatgpt.com",
  },
  {
    id: "historia-6",
    period: "1888-1950",
    title: "Quem são as mulheres negras que transformaram o país mas foram esquecidas pela História oficial",
    //: "Período de discriminação sistemática e exclusão",
    content: "Você sabia que muitas mulheres negras transformaram o Brasil, mas suas histórias quase foram apagadas? Dandara, Esperança Garcia, Tia Ciata, Carolina Maria de Jesus e tantas outras foram fundamentais na luta por liberdade, igualdade e justiça, deixando legados que ainda influenciam nossa cultura, política e identidade. No site Geledés, é possível conhecer melhor essas trajetórias marcadas por resistência e superação e perceber como, mesmo diante do racismo e da exclusão, essas mulheres abriram caminhos para as gerações seguintes. Ao ler sobre elas, entendemos que reconhecer e valorizar essas vozes é essencial para construir um país que respeite sua verdadeira história e celebre o poder e a contribuição das mulheres negras.",
    author: "Valentina Accioly",
    link: "https://www.geledes.org.br/quem-sao-as-mulheres-negras-que-transformaram-o-pais-mas-foram-esquecidas-pela-historia-oficial/",
  },
];

export default function HistoriaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFD700]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#556B2F] to-[#6B8E23] py-16 px-4 text-center text-white border-b-4 border-[#228B22]">
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
                //={item.//}
                content={item.content}
                author={item.author}
                link={item.link}
                borderColor="border-[#6B8E23]"
                titleColor="text-[#6B8E23]"
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
