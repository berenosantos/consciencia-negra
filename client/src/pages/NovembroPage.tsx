import Header from "@/components/Header";
import ContentCard from "@/components/ContentCard";

interface ContentItem {
  id: string;
  title: string;
  //: string;
  content: string;
  author: string;
  link: string;
  color: "border-[#b01030]"
  titleColor: "text-[#b01030]" | "text-[#DC143C]" | "text-[#4169E1]";
}

const contentData: ContentItem[] = [
  {
    id: "nov-1",
    title: "20 de Novembro",
    //: "Celebração da identidade e resistência negra",
    content: "No dia 20 de novembro, é celebrado em todo o Brasil o Dia Nacional da Consciência Negra e do Zumbi de Palmares, que é um feriado nacional. A data tem como referência o dia em que Zumbi de Palmares foi capturado e assassinado. Zumbi é conhecido como o líder do Quilombo dos Palmares; que é visto como símbolo de luta e resistência dos negros escravizados. A data tem como um de seus objetivos chamar a atenção para a reflexão das consequências do racismo para a população negra. De acordo com o IBGE, 56,1% da população brasileira se autodeclaram pretas e pardas. Para viabilizar a justiça e a igualdade de oportunidades em um contexto institucional, o TJDFT (O Tribunal de Justiça do Distrito Federal e dos Territórios) criou entidades e leis para que o dia 20/11 ser  o Dia Nacional de Zumbi dos Palmares e da Consciência Negra, que foi oficialmente estabelecido pela Lei nº 12.519/2011. O TJDFT (O Tribunal de Justiça do Distrito Federal e dos Territórios) não foi quem criou a data, mas  reconhece esse dia como uma forma de promover ações de combate em relação ao racismo e à desigualdade social, alinhadas com o pacto do judiciário pela equidade racial. ",
    author: "Elisa Oliveira",
    link: "https://www12.senado.leg.br/noticias/videos/2024/11/dia-da-consciencia-negra-e-feriado-nacional-pela-primeira-vez#:~:text=O%20Dia%20da%20Consciência%20Negra,escravidão%20e%20enfrentamento%20ao%20racismo",
    color: "border-[#b01030]",
    titleColor: "text-[#b01030]",
  },
  {
    id: "nov-2",
    title: "20 de Novembro: Reconhecer, Mobilizar e Transformar o Brasil",
    //: "Símbolo de resistência contra a escravidão",
    content: "Em texto publicado pela CUT no dia 20 de novembro de 2024, fala-se da importância do Dia da Consciência Negra, que, em 2024,virou feriado nacional. O site fala sobre as lutas e historia do povo negro no Brasil. O site também fala sobre Zumbi dos Palmares. O texto me leva a refletir sobre o racismo O preconceito racial ainda se encontra em nosso dia a dia por conta que pessoas negras ainda são tratadas de forma sub-humana e com pouca e às vezes nenhuma oportunidade de trabalho, ou seja, ainda precisamos mudar muitas coisas. Por fim, até eventos ocorridos, como a V Conferência Nacional de Promoção da Igualdade Racial, a Segunda Marcha das Mulheres Negras falam sobre políticas públicas e Mulheres negras na luta social. O texto também fala sobre o movimento 21 Dias de Ativismo pelo Fim da Violência contra as Mulheres, uma vez que evidencia que lutar contra o racismo e o machismo é uma luta só.O texto acaba falando que a igualdade entre todas as racas e todos os generos e uma parte de luta dos trabalhadores de suma importancia para o Brasil ser um lugar mais justo.",
    author: "Sofia Imbassahy",
    link: "https://www.cut.org.br/artigos/20-de-novembro-reconhecer-mobilizar-e-transformar-o-brasil-e8e5?utm_source=",
    color: "border-[#b01030]",
    titleColor: "text-[#b01030]",
  },
  {
    id: "nov-3",
    title: "20 de Novembro - Dia da Consciência Negra",
    //: "Significado do 20 de novembro para o Brasil",
    content: "De que maneira o Dia da Consciência Negra ajuda a combater o racismo e o apagamento da história e cultura negra no Brasil? O Dia da Consciência Negra é celebrado em 20 de novembro, pois marca o dia da morte de Zumbi dos Palmares, lider revolucionario do Quilombo dos Palmares e um dos maiores símbolos da resistência negra contra a escravidão e o racismo no Brasil. A data, oficialmente instituída nacionalmente através da Lei nº 12.519, de 10 de novembro de 2011, homenageia Zumbi na data referente ao dia da sua capturada e morte em 1695. A importância desse dia vai muito além de ser somente uma celebração, trata-se do dia do reconhecimento da população negra, a importância da luta por igualdade, combate ao racismo e valorização da cultura afro-brasileira. A Pró-Reitoria de Ações Afirmativas e Equidade (PROAFE) da Universidade Federal do Paraná (UFPR), no artigo “20 de Novembro - Dia da Consciencia Negra”, traz uma reflexão sobre a posição da população negra na nossa sociedade - principalmente em cargos de liderança - e o histórico de luta por direitos iguais no nosso país. Ao longo da nossa história, os povos de origem e descendência negra tiveram seus direitos violados, sua integridade desrespeitada e sua humanidade destituídas. Efeitos disso podem ser acompanhados até o dia de hoje. Apesar dos avanços ao decorrer dos anos, o racismo estrutural ainda se faz presente em nossa sociedade, sustentado por desigualdades históricas que continuam impactando a população negra. Por isso, a importância de um dia para promover a consciência negra, o histórico de lutas e resistências, e as consequências históricas do período da escravidao e da pós-escravidao. Por isso, convido você a ler o artigo “20 de Novembro - Dia da Consciencia Negra”, publicado no Portal  da PROAFE da UFPR, no qual explica-se tal situação e a importância reconhecer as lutas contra o racismo.",
    author: "Paula Rocha",
    link: "https://proafe.ufpr.br/20-de-novembro-dia-da-consciencia-negra/",
    color: "border-[#b01030]",
    titleColor: "text-[#b01030]",
  },
  {
    id: "nov-4",
    title: "20 de novembro é feriado nacional? Conheça a história do Dia da Consciência Negra",
    //: "Movimentos sociais e ações no 20 de novembro",
    content: "O Dia da Consciência Negra, celebrado em 20 de Novembro, será feriado nacional no Brasil pela segunda vez em 2025. A data, que referencia a morte de Zumbi dos Palmares, foi idealizada em Porto Alegre e oficialmente reconhecida em Dezembro de 2023, quando o presidente Lula sancionou a lei. 14.759/2023. O dia da consciência negra surgiu em 1971, com o objetivo de valorizar a luta e a cultura do povo negro. Para simbolizar a busca pela igualdade social, a data escolhida foi 20 de Novembro, uma referência a morte de Zumbi, líder dos quilombos dos Palmares, em Alagoas, que batalhou contra forças coloniais durante 15 anos. Em seu fim, Zumbi foi decapitado e teve sua cabeça exposta na Praça do Carmo em 1695. O movimento foi oficialmente reconhecido em 2011, quando a então presidente Dilma Roussef decretou o 20 de Novembro como Dia Nacional de Zumbi dos Palmares e da Consciência Negra, contudo ela não definiu a data como feriado nacional. Como forma de enfatizar a luta do povo negro na busca por igualdade, em 21 de Dezembro de 2023 a data foi oficialmente reconhecida como feriado nacional em todo o território brasileiro. A origem da consciência negra, por sua vez, é bem interessante. Inconformados com a situação dos negros no Brasil, quatro jovens propuseram, em Porto Alegre durante o ano de 1971, que houvesse um dia no calendário para a população refletir sobre a questão racial. A data foi proposta por Antônio Carlos Côrtes, Oliveira Silveira, Vilmar Nunes e Ilmo da Silva, fundadores do grupo Palmares. Jovens naquela época, eles discordavam da celebração do 13 de Maio, Dia da Abolição da Escravatura, argumentando que, a data simboliza o dia em que a Princesa Isabel assinou a Lei Áurea, que apesar de abolir a escravidao, deixou os negros em um 'limbo', sem garantias de trabalho e incentivos para estudar.",
    author: "Geddel Filho",
    link: "https://gauchazh.clicrbs.com.br/viral/noticia/2025/11/20-de-novembro-e-feriado-nacional-conheca-a-historia-do-dia-da-consciencia-negra-cmhjfnlve007i013b8gqfx7gw.html",
    color: "border-[#b01030]",
    titleColor: "text-[#b01030]",
  },
  {
    id: "nov-5",
    title: "Consciência Negra: TJSE realizará evento ‘Afrofuturismo – pelo direito de sonhar’ no dia 18 de novembro",
    //: "Expressões culturais que celebram a negritude",
    content: "Para comemorar o Dia da Consciência Negra o Tribunal da Justiça de Sergipe irá realizar um seminário em prol da equidade racial, para fortalecer a cultura afro-brasileiro no âmbito judicial e também para homenagear o juiz de direito Edinaldo César Santos Júnior, que morreu em junho de 2025 e era uma grande influência em questões raciais, de gênero e do direito da criança e do adolescente. Esse seminário terá por volta de 4 horas de duração, mas a entrada será gratuita e aberta ao público, e incluirá apresentações de dança, curta-metragem, discussões, oficina de turbantes e feira preta.",
    author: "Daniel Alexim",
    link: "https://agencia.tjse.jus.br/noticias/item/16177-consciencia-negra-tjse-realizara-evento-afrofuturismo-pelo-direito-de-sonhar-no-dia-18-de-novembro",
    color: "border-[#b01030]",
    titleColor: "text-[#b01030]",
  },
  {
    id: "nov-99",
    title: "Consciência Negra e Zumbi dos Palmares: entenda significado do feriado comemorado nacionalmente pela primeira vez",
    //: "Expressões culturais que celebram a negritude",
    content: "Para comemorar o Dia da Consciência Negra o Tribunal da Justiça de Sergipe irá realizar um seminário em prol da equidade racial, para fortalecer a cultura afro-brasileiro no âmbito judicial e também para homenagear o juiz de direito Edinaldo César Santos Júnior, que morreu em junho de 2025 e era uma grande influência em questões raciais, de gênero e do direito da criança e do adolescente. Esse seminário terá por volta de 4 horas de duração, mas a entrada será gratuita e aberta ao público, e incluirá apresentações de dança, curta-metragem, discussões, oficina de turbantes e feira preta.",
    author: "Letícia Copello",
    link: "https://g1.globo.com/mg/minas-gerais/noticia/2024/11/20/consciencia-negra-e-zumbi-dos-palmares-entenda-significado-do-feriado-comemorado-nacionalmente-pela-primeira-vez.ghtml",
    color: "border-[#b01030]",
    titleColor: "text-[#b01030]",
  },
  {
    id: "nov-6",
    title: "Educação e Conscientização",
    //: "Importância da educação sobre história negra",
    content: "O 20 de novembro é oportunidade para educação sobre história, cultura e contribuições do povo negro. Escolas, universidades e organizações promovem debates, palestras e atividades educativas. Educação é fundamental para combater estereótipos, promover igualdade e formar cidadãos conscientes.",
    author: "Ministério da Educação",
    link: "https://www.gov.br/mec/",
    color: "border-[#b01030]",
    titleColor: "text-[#b01030]",
  },
  {
    id: "nov-7",
    title: "Como surgiu o Dia da Consciência Negra no Brasil ",
    //: "Desafios persistentes e necessidade de ação",
    content: "O Dia da Consciência Negra é celebrado em 20 de novembro, para homenagear Zumbi dos Palmares, se tornando símbolo da luta contra a escravidão na história do Brasil. A data foi escolhida em memória da morte de Zumbi, que ocorreu em 1695, o líder da nação do Quilombo dos Palmares, mais importante espaço de ocupação de pessoas negras fugindo da escravidão durante o período colonial brasileiro. Nos anos 70, o Movimento Negro Unificado pediu um dia de reflexão sobre a luta e a contribuição do povo negro para o país. Em 2003, o governo inseriu o tópico História e Cultura Afro-Brasileira aos currículos escolares, mas somente em 2011, o Congresso Federal editou a Lei nº 12.519, de 20 de novembro, instituindo o Dia Nacional da Consciência Negra. O 20 de novembro é, portanto, uma data para reflexão e discussão sobre o preconceito, a má distribuição de riqueza social e a necessária valorização e contribuição do povo de matriz africana na nossa Nação.",
    author: "Gabriel Gusmão",
    link: "https://www.nationalgeographicbrasil.com/historia/2024/11/como-surgiu-o-dia-da-consciencia-negra-no-brasil?utm_source=chatgpt.com",
    color: "border-[#b01030]",
    titleColor: "text-[#b01030]",
  },
  {
    id: "nov-8",
    title: "Consciência Negra em Salvador: entenda por que a data não é feriado na cidade com a maior população preta fora da África ",
    //: "Convite para participação de toda a sociedade",
    content: "Segundo o IBGE, Salvador é a cidade com maior população negra fora da África, o que é mais uma razão para celebrar a história e constante luta contra o racismo, que essas pessoas enfrentam e vêm enfrentando há tanto tempo. Porém, mesmo assim, a cidade passou muito tempo sem ter o Dia da Consciência Negra como feriado, e apesar da falta do feriado na cidade ser chocante para muitos, há uma explicação para o fato. De acordo com a Câmara Municipal de Salvador, a data não pôde ser feriado municipal porque a cidade já havia preenchido a quantidade prevista em lei de feriados. O ex-deputado estadual da Bahia, Bira Coroa, chegou a propor, em 2021, um Projeto de Lei (PL), na Assembleia Legislativa, que instituía feriado estadual no dia 20 de novembro. O projeto chegou a transitar por comissões, mas como o ex-parlamentar não foi reeleito em 2022, o projeto foi arquivado. A data foi reconhecida oficialmente como nacional em dezembro de 2023, com a lei federal Nº 14.759, quando Luiz Inácio Lula da Silva sancionou-a. Desta forma, Salvador finalmente teve a oportunidade de comemorá-la. Esse processo, apesar de poder ser explicado de maneira resumida, foi um processo bastante burocrático, levando décadas para ser finalizado. O link a seguir traz uma análise detalhada sobre a construção histórica e legal dessa conquista, uma leitura essencial para compreender todo o contexto.",
    author: "Letícia Copello",
    link: "https://g1.globo.com/ba/bahia/novembronegro/noticia/2023/11/20/entenda-feriado-20-de-novembro-em-salvador.ghtml",
    color: "border-[#b01030]",
    titleColor: "text-[#b01030]",
  },
  {
  id: "nov-9",
    title: "Consciência Negra: o que é, origem, história, dia",
    //: "Convite para participação de toda a sociedade",
    content: "A política da Consciência Negra, especialmente com o Movimento Negro Unificado, foi uma das primeiras em organização e influência na década de 1970. Zumbi dos Palmares, um exemplo da luta na aboliçao da escravidão, teve a data de sua morte, datado no dia 20 de novembro, oficializada como Dia Nacional da Consciência Negra pela Lei nº 12.519/2011 que se juntou ao calendário de feriados nacionais do país, aparecendo em 2023 com a Lei nº 14.759. Assim, a Consciência Negra, neste momento, não é apenas um conceito, mas um processo da população negra ser destacada em seu espaço e importância histórica, sendo vista de acordo com sua dignidade e avaliada, já que esta data visa ao combate a anos de descriminação injusta contra a população negra. Além disso, o dia da Consciencia Negra traz consigo diversos valores, dentre eles a valorização da identidade, cultura, história do povo e resistência do negro no Brasil, além de que o processo de luta contra o rascimo é uma longa e gloriosa história.",
    author: "Lamis Cheaito",
    link: "https://brasilescola.uol.com.br/sociologia/consciencia-negra.htm",
    color: "border-[#b01030]",
    titleColor: "text-[#b01030]",
  },
  {
  id: "nov-10",
    title: "Consciência negra: qual a origem da data celebrada em 20 de novembro.",
    //: "Convite para participação de toda a sociedade",
    content: "20 de Novembro, Dia Nacional de Zumbi e da Consciência Negra, é uma data que, a cada ano, passa a ser mais importante e conhecida dentro da sociedade brasileira, sendo um dos pilares na luta em oposição ao racismo e pelos direitos da população negra. No entanto, muito sobre a origem dessa comemoração é constantemente reduzida à morte de Zumbi dos Palmares, um dos grandes símbolos do enfrentamento ao sistema escravista no Brasil. Ainda assim, no país, há diversas manifestações culturais e literárias que abordam toda a complexidade do tema, embora não sejam tão focalizadas quanto o quilombola. Nesse sentido, o texto “Consciência negra: qual a origem da data celebrada em 20 de novembro”, escrito por Rafael Ciscati e publicado no site Brasil de Direitos, foi produzido e traz reflexões valiosas sobre a evolução da consciência negra no Brasil. Ademais, o texto aborda temas ainda atuais, como o esquecimento de figuras negras representativas na testilha em contraposição à escravidão, o questionamento sobre e as consequências da precária e triste realidade da abolição da escravidão, além de como o dia 20 de Novembro expandiu de uma comemoração com duas dúzias de estudantes, em Porto Alegre, no ano de 1971, para um feriado nacional e de extrema relevância.",
    author: "Antonio Ribeiro",
    link: "https://www.brasildedireitos.org.br/atualidades/consciencia-negra-qual-a-origem-da-data-celebrada-em-20-de-novembro/",
    color: "border-[#b01030]",
    titleColor: "text-[#b01030]",
  },
  {
  id: "nov-11",
    title: "Importância do Dia da Consciência Negra",
    //: "Convite para participação de toda a sociedade",
    content: "Muitos acham que a data do Dia da Consciência Negra pode ser apenas celebrada para relembrar a luta de Zumbi dos Palmares, porém é também um dia dedicado à luta contra o racismo e todo o mal que ele causa ao nosso país. É uma data para que possamos eliminar práticas racistas atualmente, mas também é um momento para relembrar todos aqueles que, no passado, dedicaram suas vidas ao combate contra escravidão. Claro que a postura contra o racismo não deve apenas ocorrer no dia 20 de novembro, isso porque devemos sempre lembrar de que a atual condição do Brasil é resultado de mais de 300 anos de escravidão, o que moldou costumes e práticas do brasileiro, o que tornou o racismo e a hierarquização marcar fixamente em nossa sociedade. Mesmo com esses conflitos, durante as últimas décadas houve mudanças significativas, mas o Brasil ainda tem muito para melhorar, e é extremamente necessário confrontar a falta de oportunidades que os negros têm no mercado de trabalho, eliminar a violência policial, acabar com o apagamento da cultura africana, e erradicar com o preconceito com as religiões de matriz africana. O racismo é estrutural e está presente em todas as áreas da nossa sociedade, o que causa esta desigualdade em nosso país. O Dia da consciência Negra também serve para nos lembrar que jovens negros têm direito a educação de qualidade e oportunidades iguais, isso porque os negros e pardos representam cerca de 65% da população, mas essa proporção não se reproduz em locais como a política e o Legislativo.",
    author: "Gustavo Fichman",
    link: "https://www.vilapavao.es.gov.br/noticia/ler/9642/20-de-novembro-dia-da-consciencia-negra",
    color: "border-[#b01030]",
    titleColor: "text-[#b01030]",
  },
    {
  id: "nov-12",
    title: "Pela primeira vez, feriado da Consciência Negra é nacional",
    //: "Convite para participação de toda a sociedade",
    content: "Em 2023, o Dia da Consciência Negra se tornou feriado nacional pela Lei nº 14.759, marcando um momento importante no reconhecimento e na contribuição do povo negro para o Brasil. A data, comemorada em 20 de novembro, homenageia Zumbi dos Palmares, símbolo de resistência à escravidão. No site do Governo Federal, é possível entender que essa decisão vai além de um simples feriado, pois reforça a importância de refletir sobre a igualdade racial, o respeito e a valorização da cultura afro-brasileira. Essa conquista também evidencia a necessidade de manter viva a memória das lutas contra o racismo e de promover maior inclusão na sociedade. Mais do que um dia de descanso, é uma oportunidade para reconhecer a história e fortalecer a construção de um país mais justo e diverso. ",
    author: "Valentina Accioly",
    link: "https://www.gov.br/mds/pt-br/noticias-e-conteudos/desenvolvimento-social/noticias-desenvolvimento-social/pela-primeira-vez-feriado-da-consciencia-negra-e-nacional",
    color: "border-[#b01030]",
    titleColor: "text-[#b01030]",
  },
];

export default function NovembroPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFD700] text-[#b01030]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#DC143C] to-[#b01030] py-16 px-4 text-center text-white border-b-4 border-[#b01030]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4 text-white">20 de Novembro</h1>
          <p className="text-xl text-gray-100 mb-8">
            Dia da Consciência Negra - Celebração, história e luta pela igualdade racial
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 px-4 flex-1">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {contentData.map((item) => (
              <ContentCard
                key={item.id}
                title={item.title}
                //={item.//}
                content={item.content}
                author={item.author}
                link={item.link}
                borderColor={item.color}
                titleColor={item.titleColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#b01030] border-t-4 border-[#DC143C] py-8 px-4 text-center text-[#b01030]">
        <p>&copy; Site Desenvolvido por estudantes do 10° ano da Escola Pan Americana da Bahia, no componente curricular Língua Portuguesa, sob a orientaçao do Prof. Chico Mota, em novembro de 2025</p>
      </footer>
    </div>
  );
}
