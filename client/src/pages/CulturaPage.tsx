import Header from "@/components/Header";
import ContentCard from "@/components/ContentCard";

interface CultureItem {
  id: string;
  title: string;
  //: string;
  content: string;
  author: string;
  link: string;
}

const cultureData: CultureItem[] = [
  {
    id: "cultura-1",
    title: "10 músicas brasileiras para o Dia da Consciência Negra",
    //: "Ritmo e dança que representa a identidade cultural brasileira",
    content: "A música sempre foi um instrumento de luta e de afirmação da identidade negra, refletida em diversos estilos, como o samba e o rap. A playlist criada por Raphael Vidigal e Graziele Martins reúne dez canções marcantes que expressam orgulho, resistência e crítica social, entre elas “Tributo a Martin Luther King” (Wilson Simonal), que homenageia Martin Luther King e incentiva a luta por justiça; “Negro É Lindo” (Jorge Ben Jor), que destaca o orgulho da identidade negra; “Sorriso Negro” (Dona Ivone Lara), que evidencia a notável resiliência da população negra ao transformar a dor e a opressão em força, cultura e resistência; e “Identidade” (Jorge Aragão), que critica o racismo estrutural e destaca a relevância da cultura negra no Brasil. Todas reforçam a valorização da negritude e a luta contra o racismo estrutural que ainda marca a sociedade brasileira. ",
    author: "Valentina El Hireche",
    link: "https://esquinamusical.com.br/10-musicas-brasileiras-para-o-dia-da-consciencia-negra/",
  },
  {
    id: "cultura-2",
    title: "25ª Marcha Zumbi dos Palmares acontece no Dia da Consciência Negra em Campinas.",
    //: "Arte marcial que combina luta, dança e música",
    content: "No próximo dia 20 de novembro, Campinas vai receber a 25ª edição da Marcha Zumbi dos Palmares. Essa manifestação tradicional marca o Dia Nacional do Zumbi e da Consciência Negra. O ato promete reunir centenas de pessoas em defesa da igualdade racial e da valorização da cultura afro-brasileira. Esse ano, a marcha irá homenagear a II Marcha Nacional de Mulheres Negras, com o tema 'Por reparação e pelo bem de viver'. Essa manifestação foi criada em 2000 e fez parte do movimento nacional que favoreceu a aprovação da lei nº 12.519/2011, responsável por instituir o dia da consciência negra como dia nacional em todo Brasil. Segundo os organizadores, a Marcha Zumbi dos Palmares é um espaço de valorização da identidade negra, contando com apresentações culturais, batuques, expressões de religiosidade de matriz africana e manifestações políticas. O evento também denuncia o racismo estrutural e as desigualdades históricas que atingem a população negra.",
    author: "Geddel Filho",
    link: "https://www.acidadeon.com/campinas/cotidiano/25a-marcha-zumbi-dos-palmares-acontece-no-dia-da-consciencia-negra-em-campinas/",
  },
  {
    id: "cultura-3",
    title: "A influência Africana na cultura brasileira",
    //: "Religião de matriz africana que preserva tradições ancestrais",
    content: "O site introduz o leitor de como a cultura africana influenciou o Brasil. Ele contextualiza  porque o dia da consciência negra foi criado e o porquê essa data foi escolhida para a celebração. A influência africana não está apenas nas palavras que se originam do continente, mas também na culinária, na música, e na religião. Com isso em mente, o site depois argumenta sobre a culinária africana e de como essas especiarias foram introduzidas no Brasil colonial, citando diversos pratos e temperos originários da cultura africana. O próximo tópico apresentado no site se concentra no vocabulário brasileiro e de como algumas expressões vindas do continente africana acabaram se encaixando no português. Diversas expressões foram introduzidas pelos bantus, um povo africano oriundo da Angola, Congo, e Moçambique, com mais de 300 línguas que juntas formaram grande parte do vocabulário brasileiro. Na música brasileira, a cultura africana contribuiu com a criação de grande parte dos ritmos musicais do Brasil, segundo o site apresentado. O samba, nasceu por volta do século XIX no Rio de Janeiro através de rituais religiosos com instrumentos de herança africana como os batuques e o tambor. Por fim, o site apresenta ao leitor as religiões derivadas da áfrica, que por sua vez, acabaram se sincretizando com o catolicismo como forma de driblar os colonizadores a acharem que os praticantes abandonaram sua religião primária. O candomblé é provavelmente a religião mais famosa no Brasil originária da África, os primeiros terreiros foram criados em Salvador com dezenas de orixás que se formaram como figuras por diversas influências Nigerianas e Angolanas.",
    author: "Lucas Rocha",
    link: "https://www.genera.com.br/blog/influencia-africana/?srsltid=AfmBOoptiMcjqKA6onCp_7QbsjA51757pUk5xxo9SJVNpllSyLWxMnQW",
  },
   {
    id: "cultura-31",
    title: "Fundação Cultural Palmares",
    //: "Religião de matriz africana que preserva tradições ancestrais",
    content: "A Fundação Cultural Palmares tem importância imensa para a Consciência Negra no Brasil como principal instituição pública dedicada à cultura afro-brasileira. Desempenha papel fundamental no reconhecimento e preservação do patrimônio cultural afrodescendente, certificando comunidades quilombolas e apoiando expressões artísticas. Desenvolve políticas públicas que valorizam a história e memória da população negra. Atua como referência para educadores, pesquisadores e movimentos sociais, promovendo a igualdade racial. Suas iniciativas combatem o racismo e fortalecem a identidade negra, dando relevância às contribuições africanas na formação nacional. É uma forma de mostrar o compromisso do Estado com a valorização dos afrodescendentes.",
    author: "Mateus Sampaio",
    link: "https://www.gov.br/palmares/pt-br/assuntos/noticias/palmares-37-anos-resistencia-memoria-e-futuro-da-cultura-negra-no-brasil",
  },
  {
    id: "cultura-4",
    title: "Dia da Consciência Negra: 10 expressões do português que geram controvérsia sobre racismo",
    //: "Gêneros musicais que refletem a história e resistência negra",
    content: "A Defensoria Pública da Bahia publicou, para o dia da Consciência Negra, uma espécie de dicionário de “expressões racistas” para gerar conscientização e abolí-las do cotidiano, visto que muitos brasileiros utilizam, acidentalmente, palavras ou expressões que se originaram da discriminação de negros, ao associarem a cor preta a algo negativo, tais como “da cor do pecado”, “denegrir”, “meia-tigela”, “macumba”, “mulato/a”, “escravo” e “criado-mudo”, dividindo opiniões devido à palavra “criado”, que possívelmente referencia os criados, pessoas geralmente escravizadas, que seguravam objetos para seus senhores e eram proibidos de falar. Por outro lado, muitos questionam essa teoria ao argumentar que esse termo não era utilizado, na época, para descrever escravos e sim pessoas criadas dentro de uma determinada família, adotadas, por exemplo, e que essa expressão provavelmente é derivada do inglês “dumbwaiter”. Mesmo que haja discussão entre pesquisadores sobre a origem desses termos devido às suas diversas interpretações, o importante a considerar é a conotação racista que foi criada sobre eles conforme se popularizaram. Adicionalmente, com o conhecimento amplo de hoje, é possível encontrar expressões ou palavras alternativas para tais termos, como “mesa de cabeceira”, que substitui “criado-mudo”. Para aprofundar-se no assunto, confira a análise na g1 no link abaixo.",
    author: "Luize Fasani",
    link: "https://g1.globo.com/consciencia-negra/noticia/2021/11/21/dia-da-consciencia-negra-10-expressoes-do-portugues-de-origem-racista.ghtml",
  },
  {
    id: "cultura-5",
    title: "Dia da Consciência Negra: Arte e Expressão",
    //: "Narrativas que centram a experiência e voz do povo negro",
    content: "A arte da consciência negra se trata de uma forma de expressar a luta contra o racismo, se manifestando em diversos recursos artísticos para valorizar a identidade negra, a resistência e a cultura africana. Essas obras possuem diversos elementos que se correlacionam com a consciência negra para assim abranger desde manifestações ancestrais africanas até a cultura afro-brasileira contemporânea. A fonte trata-se de uma matéria que utiliza diversos recursos artísticos, como pinturas, filmes, livros, músicas e peças para demonstrar a relevância da cultura africana e retratar a história da resistência contra o racismo, sendo assim, enfatizando o dia da consciência negra. Esta referência reuní várias obras renomadas como o livro O sol na Cabeça escrito por Geovani Martins, que reconhecem a exclusão das vozes negras ao decorrer da história mundial, acentuando a importancia do povo negro e dar visivbilidade para suas contribuições e as dificuldades enftrentadas. Este site foi produzido por duas instituições nacionais, sendo elas a Fundação João Pinheiro e o Conselho Regional de Economia (Minas Gerais), portanto, isso garante a sua credibilidade confiável pois ambas instituições são reconhecidas e especialistas academicamente,  por isso essa fonte pode ser acessada de uma forma segura para todos.",
    author: "Guilherme Oliveira",
    link: "https://observatoriodesigualdades.fjp.mg.gov.br/?p=4056",
  },
  {
    id: "cultura-6",
    title: "Encruzilhadas da Arte Afro-Brasileira no CCBB RJ",
    //: "Expressão artística que celebra a estética e história negra",
    content: "“Encruzilhadas da Arte Afro-Brasileira” foi uma exposição realizada até o dia 17 de Fevereiro de 2025 no Centro Cultural Banco do Brasil no Rio de Janeiro, reunindo mais de 140 obras que refletem a força e a profundidade da arte negra no Brasil. Com 62 artistas de diferentes épocas, regiões e estilos, percebe-se a vasta diversidade de temas como identidade, espiritualidade, a vida cotidiana e resistência. Conforme a revista “Raiz do Brasil” evidencia, a mostra trouxe ao público um pouco da história da arte brasileira, mas, trazendo o foco da narrativa geralmente contada por pessoas brancas para uma visão afrocentrada, apresentando obras em seções: Tornar-se, Linguagens, Cosmovisão, Orum e Cotidianos, desde produções pré-modernas à contemporâneas. As fotografias, esculturas e pinturas de grandes artistas brasileiros, veiculadas em “Encruzilhadas da Arte Afro-Brasileira”, reafirmam o quão essencial esses artistas negros são na construção da cultura nacional, além de promover reflexões sobre pertencimento e ancestralidade, que se destacaram em suas obras simbólicas, reforçando a representatividade e reconhecimento da arte afro-brasileira como parte da identidade do Brasil. Neste sentido, destacam-se nos eixos Tornar-se e Cotidiano, as pinturas de Arthur Timótheo da Costa e as fotografias de Lita Cerqueira, respectivamente. ",
    author: "Stella Francischetto",
    link: "https://raiz.art.br/2024/12/03/encruzilhadas-da-arte-afro-brasileira-no-ccbb-rj",
  },
  {
    id: "cultura-7",
    title: "Manifestações Culturais Negras",
    //: "Sabores que conectam à herança africana e história do Brasil",
    content: "A cultura afro-brasileira é um conjunto de manifestações culturais que são originadas a partir da contribuição dos descendentes africanos para a formação social, econômica e política do Brasil. Essas manifestações chegaram ao Brasil por meio do contato e conflito com as culturas indígenas e europeias. Essas manifestações culturais negras se incluem em diversas expressões como a capoeira, samba, jongo, maracatu e frevo, presentes também na música, luta, dança e culinária.  A matéria introduz diversas manifestações culturais referentes à cultura afro-brasileira, ressaltando a sua viabilidade a importância da cultura da etnia negra, a fonte fala sobre cada manifestação a partir de breves descrições que informam ao leitor a sua origem, significado e práticas em diferentes estados brasileiros. O texto apresenta vários grupos culturais que se originaram das raízes da África, demonstrando como essas práticas ainda estão vivas até hoje, valorizando a herança cultural. Ao mencionar diversas manifestações culturais, a matéria valoriza essas práticas ao mesmo tempo que homenageia ela como parte da identidade brasileira. A fonte é consideravelmente confiável por se tratar de um portal oficial, como uma divulgação governamental, fazendo com que estudantes, professores e a comunidade acessem esse site de uma forma sistemática e confiável. ",
    author: "Guilherme Oliveira",
    link: "https://www.gov.br/palmares/pt-br/departamentos/fomento-a-cultura/manifestacoes-culturais-negras-1",
  },
  {
    id: "cultura-8",
    title: "MinC lança Cultura Negra Vive 2025 e reafirma compromisso do Brasil com a valorização da ancestralidade",
    //: "Expressão de identidade, resistência e beleza",
    content: "O Ministério da Cultura (MinC) lançou uma campanha no dia 5 de novembro para reforçar a importância da Fundação Cultural Palmares. Essa fundação tem como principal objetivo promover políticas culturais igualitárias e inclusivas que contribuam para a valorização da história e das manifestações culturais e artísticas negras brasileiras como patrimônios nacionais. Também é enfatizado que garantir o direito à cultura para todos é um princípio citado na constituição e o MinC tem exercido isso por meio de muitas ações afirmativas na cultura, como políticas que estimulam a inclusão social. A Campanha Negra Vive 2025 teve uma notoriedade nacional buscando a igualdade racial, teve colaboração com o Ministério da Igualdade Racial (MIR), essa parceria gerou uma notória visibilidade às ações, celebrações e expressões culturais.",
    author: "Thiago Guimarães",
    link: "https://www.gov.br/cultura/pt-br/assuntos/noticias/minc-lanca-cultura-negra-vive-2025-e-reafirma-compromisso-do-brasil-com-a-valorizacao-da-ancestralidade/",
  },
];

export default function CulturaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFD700]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#4169E1] to-[#3050c0] py-16 px-4 text-center text-white border-b-4 border-[#DC143C]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Cultura</h1>
          <p className="text-xl text-gray-100">
            Expressões artísticas, música, dança e tradições que moldaram a identidade afro-brasileira
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 px-4 flex-1">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {cultureData.map((item) => (
              <ContentCard
                key={item.id}
                title={item.title}
                //={item.//}
                content={item.content}
                author={item.author}
                link={item.link}
                borderColor="border-[#4169E1]"
                titleColor="text-[#4169E1]"
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
