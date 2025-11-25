import Header from "@/components/Header";
import ContentCard from "@/components/ContentCard";

interface FigureItem {
  id: string;
  title: string;
  //: string;
  content: string;
  author: string;
  link: string;
}

const figurasData: FigureItem[] = [
  {
    id: "figuras-1",
    title: "6 brasileiros que lutaram pelo fim da escravidão no Brasil:s",
    //: "Líder do Quilombo dos Palmares",
    content: "No dia 20 de Novembro, é comemorado o dia da Consciência Negra no Brasil, e para que um dia essa data fosse concretizada, figuras históricas e essenciais para a consolidação da cultura africana existiram e batalharam contra um ciclo que parecia interminável, a escravidão. Essa data foi escolhida em homenagem a Zumbi dos Palmares, líder do maior quilombo do país e símbolo da luta em prol da liberdade e contra a escravidão. O feriado não apenas representa a luta contra o racismo e a defesa da igualdade entre raças, mas também celebra o legado da identidade negra. Além de Zumbi, a luta pela abolição da escravidão no Brasil foi marcada pela presença de figuras marcantes que desafiaram a injustiça e a opressão. Luiz Gama usou o direito para libertar pessoas escravizadas; Maria Tomásia liderou mulheres no Ceará em defesa da liberdade; André Rebouças lutou pela inclusão dos negros na sociedade; e Maria Firmina dos Reis denunciou a escravidão por meio da literatura. Outros nomes, como Adelina e Francisco José do Nascimento, mostraram sua coragem e resistência nas ruas. Em 1888, após mais de três séculos de escravidão que resultaram em 4,9 milhões de africanos traficados para o Brasil (sendo que mais de 600 mil morreram no caminho), a princesa Isabel, assinou a Lei Áurea, que pôs fim oficial à escravidão no país. Por mais que seja um acontecimento histórico, essa liberdade veio sem apoio e sem oportunidades para aqueles que haviam sido escravizados. A abolição não foi um gesto de bondade da monarquia, e sim o resultado da luta perseverante dos que resistiram por um bem maior e fizeram da esperança e da coragem fatores incontíveis. Dessa maneira, todos contribuíram para que o país alcançasse a abolição. Suas histórias relembram a luta e a persistência, e que o combate ao racismo ainda é necessário para garantir igualdade e justiça social no Brasil. Portanto, a Consciência Negra vai além de um feriado, mas um convite à reflexão sobre a história, memória e valorização da cultura negra. As histórias desses heróis demonstram uma conquista coletiva fruto de grande resistência e deve ser sempre lembrada.",
    author: "Isabella Farias",
    link: "https://www.bbc.com/portuguese/articles/c51n4y7nr2vo",
  },
  {
    id: "figuras-2",
    title: "16 personalidades negras que mudaram a história no mundo",
    //: "Guerreira e companheira de Zumbi",
    content: "Ao longo da história, inúmeras figuras negras são amplamente reconhecidas por desempenharem papéis fundamentais  na construção de uma sociedade mais tolerante e igualitária, contribuindo com o enfraquecimento da desigualdade, e a representatividade da luta contra o racismo. A matéria aborda um conteúdo que refere-se a uma lista de figuras negras que foram críticas e revolucionárias para a história da humanidade. O texto descreve como essas pessoas se estabeleceram de uma forma significativa, evidenciando como elas contribuem para diversas áreas importantes como ciência, economia, política, sociedade e cultura. Com base em breves descrições de cada figura negra, o texto analisa a importância de suas trajetórias e o impacto na sociedade, assim como a sua relevância sobre a consciência negra. Ao evidenciar as vitórias e desafios enfrentados por essas figuras negras, essa materia contribui para fortaleçer uma maior visibilidade dessas figuras, assim ampliando a representatividade e o reconhecimento dessas personalidades. Por fim, a fonte ressalta como as personalidades citadas demonstram exemplos concretos de luta, isso consequentemente reflete sobre o propósito do dia da consciência negra, destacando não só a sua contribuição para sociedade mas também para reconhecer as contínuas desigualdades ainda presentes. Devido ao fato de que a materia foi feita por um Intelectual formado e especialista em história, isso destaca a credibilidade do site, garantindo um acesso seguro.",
    author: "Guilerheme Oliveira",
    link: "https://brasilescola.uol.com.br/historiag/16-personalidades-negras-que-mudaram-a-historia-do-mundo.htm",
  },
  {
    id: "figuras-99",
    title: "Dandara dos Palmares: Grande Guerreira",
    //: "Guerreira e companheira de Zumbi",
    content: "Dandara dos Palmares foi uma guerreira muito importante na história do Brasil. Ela viveu no Quilombo dos Palmares, no século XVII, que era uma comunidade de pessoas escravizadas que haviam fugido. Dandara lutava ao lado de Zumbi, seu companheiro, para defender o quilombo dos ataques dos portugueses. Além de lutar, Dandara também tomava decisões importantes. Quando o quilombo foi invadido, ela preferiu morrer do que ser escravizada novamente. Essa coragem fez dela um símbolo de resistência e liberdade. No Dia da Consciência Negra, lembramos de Dandara como exemplo da força das mulheres negras. Sua história nos ensina sobre a luta contra a injustiça e a importância de nunca desistir dos nossos valores, baseando-nos na ética e nas leis. Por isso, ela continua inspirando muitas pessoas até hoje. Assim, podemos concluir que ela é uma personagem da história de extrema importância para o dia da consciência negra, sendo indispensável nos dias atuais como figura de inspiração para mulheres afrodescendentes",
    author: "Mateus Sampaio",
    link: "https://brasilescola.uol.com.br/historia/dandara-dos-palmares.htm",
  },
  {
    id: "figuras-3",
    title: "Legado Zumbi dos Palmare",
    //: "Abolicionista e poeta",
    content: "O Dia da Consciência Negra foi marcado como um símbolo de resistência e de reconhecimento da população negra na sociedade brasileira. Um dos principais motivos que disponibilizaram um dia dedicado à contribuição da comunidade afrodescendente no Brasil foi o legado do líder Quilombola Zumbi dos Palmares. O quilombola nasceu no século XVII durante o período colonial no Brasil. Ele se tornou líder do maior Quilombo que já existiu no país. Também se tornou referência da resistência contra os portugueses na tentativa de destruir os Quilombos. Ele se encontra como herói nacional pelos seus feitos de conservação da cultura africana na sociedade brasileira. Nos dias atuais, a comunidade afro-brasileira utiliza a história e o legado de Zumbi em movimentos contra o racismo e a desigualdade social que muitos afro-descendentes deparam-se com no Brasil. O site também aborda a morte de Zumbi, que foi de extrema importância para a criação da data comemorativa do Dia da Consciência Negra. Depois da destruição do quilombo Cerca Real do Macaco, Zumbi fugiu e se embrenhou no mato com alguns companheiros. Durante esse período de aproximadamente um ano, seu companheiro Antônio Soares denunciou a localização de Zumbi que foi decapitado e exposto em praça pública por vários dias.",
    author: "Lucas Rocha",
    link: "https://www.bn.gov.br/",
  },
  {
    id: "figuras-4",
    title: "Lélia Gonzalez: Mulher Negra na História do Brasil",
    //: "Escritora e ativista social",
    content: "Lélia Gonzalez, belo-horizontina nascida em em 1º de fevereiro de 1935, foi uma intelectual, antropóloga, professora e militante negra que lutou ativamente contra o racismo e sexismo no Brasil. Filha de mãe indígena e pai negro, ganhou notoriedade pela sua análise de como as desigualdades sociais e de gênero são alicerces da sociedade brasileira. Também argumentava que o conhecimento acadêmico deveria ter uma função prática, sendo aplicada a transformação social e foi uma das primeiras a abordar as identidades singulares da mulher negra dentro do movimento feminista e no movimento negro. Uma das suas obras mais importantes é “Lugar de Negro”, onde é discutida a divisão racial dos espaços no país. Sua trajetória e pensamento ainda inspiram o combate ao racismo e à exclusão das populações negras.",
    author: "Breno Santos",
    link: "https://www.geledes.org.br/lelia-gonzalez-mulher-negra-na-historia-do-brasi/",
  },
  {
    id: "figuras-5",
    title: "Lilia Schwarcz - Academia Brasileira de Letras",
    //: "Intelectual, artista e ativista",
    content: "Lilia Schwarcz é uma historiadora, professora, antropóloga e escritora, nascida em São Paulo, 1957. É uma mulher de extrema importância para o dia 20 de novembro, quando se comemora o dia da Consciência Negra. Um dia que deve ser marcado na história pois esse assunto faz parte da origem do nosso país. Lilia Schwarcz enfatiza o topico por meio de  seus livro como ‘’imagens da branquitude; presença da ausência,Nem Preto Nem Branco, Muito Pelo Contrário; cor e raça na sociabilidade Brasileira , olhares Negros: raca e Representacao’’, e muitos outros. Ela é uma mulher branca que tem uma grande importância para a luta antirracista. Lilia já foi uma professora sênior do Departamento de Antropologia da Universidade de São Paulo e Global Scholar e atualmente Visiting Professor em Princeton. Ela usa esta posição de privilégio para denunciar o racismo estrutural e valorizar a história e a cultura negra, que já foi muito apagada pela sociedade brasileira. Lilia  sempre se mostra presente em podcast e entrevista para demonstrar como o racismo foi construído ao longo do tempo  e como ainda afeta o presente. Ao trazer a sua empatia com o papel da branquitude e discutir seus privilégios, ela luta e contrribui para um Brasil mais justo e consciente, onde os negros possam ser ouvidos e respeitados",
    author: "Maria Eduarda Silva",
    link: "https://www.academia.org.br/academicos/lilia-schwarcz/discurso-de-posse",
  },
  {
    id: "figuras-6",
    title: "Mulheres negras na ciência",
    //: "Escritora e poetisa",
    content: "Além de ser, lamentavelmente, reduzido o destaque à atuação das mulheres na área científica, menos ainda se comenta da presença das mulheres negras nesse campo. Tem sido em verdade um sinônimo de resistência. Nesse cenário, é importante destacar o trabalho de Jaqueline Goes de Jesus, a biomédica brasileira que coordenou o sequenciamento do genoma do vírus Sars-Cov-2, e várias outras cientistas em áreas que abrangem saúde, biologia e tecnologia. Elas representam uma geração que luta por visibilidade e valorização da produção científica negra no país. A inclusão de mulheres negras em projetos, grupos e ambientes universitários também é relevante para incentivar meninas na ciência",
    author: "Gabriel Gusmão",
    link: "https://www.revistas.uneb.br/index.php/pontosdeint/article/view/v14n2p87?utm_source=chatgpt.com",
  },
  {
    id: "figuras-7",
    title: "O que a negritude de Machado de Assis diz sobre como o Brasil lida com o racismo",
    //: "Músico e compositor",
    content: "No dia em que celebramos a Consciência Negra (20/11), a imagem de Machado de Assis, indiscutivelmente uma das figuras mais emblemáticas da literatura brasileira, é relembrada com curiosa relevância. Reconhecido por suas obras renomadas — Memórias Póstumas de Brás Cuba, Dom Casmurro, Ressurreição, Helena —, essa data traz à tona uma inusitada divergência sobre a sua raça. Filho de pais ex-escravos mulatos alforriados, Machado de Assis se destacou no cenário literário, um espaço majoritariamente branco, levando-o a enfrentar as consequências da profunda desigualdade social e racial presente na sociedade brasileira durante o século XIX. Dito isso, a reportagem “O que a negritude de Machado de Assis diz sobre como o Brasil lida com o racismo”, veiculada pela BBC e escrita por Edison Veiga, salienta justamente a dúvida que se perpetua na sociedade desde antes da morte do autor: afinal, Machado de Assis era branco ou negro? Exibindo teses atuais das professoras e historiadoras Raquel Machado Gonçalves Campos (UFG) e Cristiane Garcia (UFSC), asserções de época dos jornalistas Joaquim Nabuco (1849-1910) e José Veríssimo (1857-1916), e mencionando a controversa certidão de óbito do autor, assinada à época pelo escrivão Olympio da Silva Pereira, o texto destaca, sobretudo, a falta de valorização da população negra, refletindo como o embranquecimento histórico de Machado de Assis vai além do racismo estrutural da época, fazendo-se presente até hoje, como retratado em uma propaganda da Caixa Econômica Federal em 2011. Logo, até que ponto podemos concluir que a negritude de Machado de Assis é legítima? Para saber mais, acesse o link da matéria.",
    author: "Maria Paula Bastos",
    link: "https://www.bbc.com/portuguese/articles/cl7xvyz1eyro",
  },
  {
    id: "figuras-8",
    title: "Quem foi Maria Firmina dos Reis?",
    //: "Filósofa e ativista",
    content: "Maria Firmina foi professora e escritora brasileira no século 19. Ela, filha de uma mulher escravizada, foi uma defensora ferrenha da abolição da escravidão e escreveu muitos textos que tiveram um impacto significativo para a sociedade. Um dos seus romances mais famosos é Úrsula, que foi considerado o primeiro romance abolicionista publicado por uma mulher negra no Brasil e também na América Latina. Seus textos e sua história têm ganhado cada vez mais atenção na crítica literária. Nos últimos anos, a obra de Firmina chegou a ser escolhida para entrar nas listas de leituras obrigatórias nos vestibulares do Brasil. Por meio dessa obra e de outras escritas, como o conto A Escrava Firmina, denunciou a escravidão, a opressão a mulheres negras e trouxe a literatura brasileira para um outro patamar the rechonecimento e de  qualidade.",
    author: "Marcelo Sangalo",
    link: "https://www.todamateria.com.br/quem-foi-maria-firmina-dos-reis-sua-importancia-na-literatura-e-principais-obras/",
  },
  {
    id: "figuras-9",
    title: "Zumbi dos Palmares",
    //: "Filósofa e ativista",
    content: "Zumbi dos Palmares foi o último líder e o mais relevante do Quilombo dos Palmares, uma comunidade que foi formada por africanos escravizados que fugiram da escravidão. Zumbi foi reconhecido pela sua coragem, por suas habilidades e sua liderança. Zumbi defendia a liberdade do seu povo e ia contra à dominação colonial. Ele nasceu no próprio Quilombo dos Palmares, porém só recebeu educação após ser aprisionado quando era criança, mas conseguiu fugir e retornar ao quilombo, onde ele se destacou em batalhas contra os portugueses. Em 1680, Zumbi assumiu a liderança dos Palmares e adotou uma postura firme diante do governo colonial, até ser traído e morto em 1695. Sua morte, no dia 20 de novembro, se transformou no Dia da Consciência Negra, além disso, sua memória é celebrada em homenagens como a Faculdade Zumbi dos Palmares e o Aeroporto de Maceió, virando um símbolo da resistência e liberdade negra no Brasil.",
    author: "Rodrigo Telles",
    link: "https://www.todamateria.com.br/zumbi-dos-palmares/?utm_source=chatgpt.com/",
  },
];

export default function FigurasPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFD700]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#D87C47] to-[#C76B39] py-16 px-4 text-center text-white border-b-4 border-[#DC143C]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Figuras</h1>
          <p className="text-xl text-gray-100">
            Personalidades que marcaram a história da luta pela igualdade racial
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 px-4 flex-1">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {figurasData.map((item) => (
              <ContentCard
                key={item.id}
                title={item.title}
                //={item.//}
                content={item.content}
                author={item.author}
                link={item.link}
                borderColor="border-[#C76B39]"
                titleColor="text-[#C76B39]"
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
