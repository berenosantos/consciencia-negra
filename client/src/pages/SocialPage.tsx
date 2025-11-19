import Header from "@/components/Header";
import ContentCard from "@/components/ContentCard";

interface SocialItem {
  id: string;
  title: string;
  //: string;
  content: string;
  author: string;
  link: string;
}

const socialData: SocialItem[] = [
  {
    id: "social-1",
    title: "Consciência Negra: Para além de não ser racista, é necessário ser antirracista",
    //: "Organização que lutas pela igualdade racial",
    content: "A conscientização da importância do preto na sociedade e do reconhecimento de seus valores deve fazer parte da cultura brasileira, uma sociedade marcada por 350 anos de escravidão e pelo tráfico de populações negras da África. A redação “Consciência Negra: Para além de não ser racista, é necessário ser antirracista”, publicada pela Redação Educa SC, destaca o mês de novembro que marca a celebração da consciência negra. O intuito do texto é abordar a importância dessa data e a necessidade de não ser somente neutro em relação ao racismo, e sim, contra o preconceito. O artigo tem como temas principais a importância das discussões sobre o racismo nas escolas, a urgência da educação antirracista e como aplicar a educação antirracista as instituições. Além disso, reforça a importância da aplicação da lei n°11.645/2008 em instituições, que torna obrigatório o ensino da história e cultura afro-brasileira e indígena no ensino médio e fundamental de todo o Brasil. A redação enfatiza que o racismo não é algo do passado, está constantemente presente e em reformulação. Dessa forma, o texto mostra a necessidade de luta e superação dessas estruturas que causam a discriminação racial e a exclusão, provocando reflexão e mudança para uma comunidade mais diversificada e justa.",
    author: "Berta Sant'Anna",
    link: "https://educasc.com.br/formacao/consciencia-negra-para-alem-de-nao-ser-racista-e-necessario-ser-antirracista/",
  },
  {
    id: "social-2",
    title: "Consciência Negra e garantia dos direitos do povo negro são temas do “Me Conta, Brasils”",
    //: "Políticas para reduzir desigualdades raciais",
    content: "O dia 20 de Novembro marca o importante Dia da Consciência Negra, instituído pela Lei 14.759/2023 como um convite para refletir sobre o preconceito e racismo ainda presentes na sociedade brasileira. No programa “Me Conta, Brasil”, é evidente a importância de não apenas preservar e valorizar esta história de coragem e resistência, mas também é necessário agir de forma que ela seja um ensinamento. “Essa data é para vivenciar, para as pessoas terem a consciência realmente de que o preto existe, que o preto é preto, para não deixar isso morrer. Isso é da gente e a gente existe”, diz Carlos Sampaio no programa. Em um dos episódios, a apresentadora Keila Santana se juntou com as convidadas Bárbara Souza, diretora de Ações Governamentais do Ministério da Igualdade Racial, e Zara Figueiredo, secretária de Alfabetização de Jovens e Adultos, Diversidade e Inclusão do Ministério da Educação (MEC) para discutir formas de promover a valorização da população negra com ações, políticas, e em primeiro lugar, educação antirracismo. Além disso, Bárbara Souza relembra a importância do dia 20 de novembro, que marca a morte de Zumbi dos Palmares, uma grande figura da liderança quilombola e referência nacional da resistência em conjunto com Dandara, Acotirene, e tantos outros vindos de Serra da Barriga, em Alagoas. Estas memórias são um patrimônio histórico e cultural que reforçam a importância de garantir direitos e educação através de políticas como a Política da Igualdade Racial, proteção de comunidades quilombolas como Aquilomba Brasil, e programas educacionais voltados à causa. Esses são passos essenciais para o estabelecimento de mais justiça na sociedade.",
    author: "Stella Francischetto",
    link: "https://www.gov.br/igualdaderacial/",
  },
  {
    id: "social-31",
    title: "Desigualdade Racial com Acesso ao Sistema de Saúde Brasileiro",
    //: "Religião de matriz africana que preserva tradições ancestrais",
    content: "Para garantir melhorias na equidade do sistema de saúde do Brasil, é necessário olhar também para as desigualdades que atingem de forma desproporcional a população negra, assim como a documentação das desigualdades. As limitações na abrangência das ações de saúde fazem com que os problemas de saúde mais sérios que afetam essa população negra permaneçam. A Política Nacional de Saúde Integral da População Negra, criada em 2009, é a principal norma para a construção de políticas que visem o atendimento das injustiças e propõe ações que vão da formação de profissionais de saúde à construção de dados em sistemas de saúde desagregados por raça. Porém, verifica-se que a falta de implementação é devida a questões objetivas, como a formação das equipes de saúde e a falta de instrumentos de vigilância. Essas questões objetivas não permitem que o Brasil, na prática, exerça os direitos de união e integridade de todos, já que as particularidades dessa população negra não estão presentes nos serviços de saúde.",
    author: "Mateus Sampaio",
    link: "https://www.gov.br/saude/pt-br",
  },
  {
    id: "social-3",
    title: "Dia da Consciência Negra: Reflexão e resistência ganham força na Bahia, especialmente em Salvador",
    //: "Importância da presença negra em espaços de poder",
    content: "Dia da Consciência Negra: Reflexão e resistência ganham força na Bahia, especialmente em SalvadorO Dia da Consciência Negra, celebrado em 20 de novembro, foi instituído como feriado nacional em 2021 para reconhecer a contribuição da população negra na formação do Brasil e reforçar a luta contra o racismo. A data homenageia Zumbi dos Palmares, símbolo da resistência à escravidão, que possui grande relevância na Bahia, especialmente em sua capital, Salvador, cidade considerada a que possui a maior população negra fora da África, onde manifestações culturais e debates valorizam a cultura afro-brasileira e a busca por igualdade. Mais do que uma celebração, o dia representa um momento de reflexão sobre o passado e a importância de políticas públicas que promovam justiça e inclusão social.",
    author: "Valentina El Hireche",
    link: "https://letsgobahia.com.br/noticia/default/dia-da-consciencia-negra-reflexao-e-resistencia-ganham-forca-na-bahia-especialmente-em-salvador ",
  },
  {
    id: "social-4",
    title: "Dia da Consciência Negra - Rio de Janeiro",
    //: "Educação que combate o racismo nas escolas",
    content: " O Dia da Consciência Negra, comemorado em 20 de novembro, data que marca a morte de Zumbi dos Palmares, símbolo da resistência negra no Brasil. Essa data nos faz refletir sobre racismo estrutural ainda presente na sociedade, além da importância de reconhecer e valorizar a história negra. O termo consciência foi criado no final da década de 60 por um grupo de estudantes sul africanos. Naquela época o líder Bantu Steve Biko trabalhou para representar o orgulho de ser negro e o direito de existir em um mundo em que ser branco é o padrão e ao negro se torna ímpossível alçancar o “modelo”. Essa construção histórica normalizou a branquitude esquecendo que esse padrão não é natural, mas sim algo construído historicamente. Trazer a visibilidade à identidade negra também é algo  importante pois deve-se conhecer, debater e trazer à tona as questões que afligem a nossa sociedade. ",
    author: "Maria Eduarda Walter",
    link: "https://www.tjrj.jus.br/web/portal-conhecimento/noticias/noticia/-/visualizar-conteudo/5736540/7693049",
  },
  {
    id: "social-5",
    title: "Dia da Consciência Negra: saiba o que fecha e o que abre no feriado nacional",
    //: "Disparidades de saúde e acesso a serviços",
    content: "O texto fala sobre o próprio Dia da Consciência Negra, o funcionamento de estabelecimentos e como será o trabalho dos funcionários neste dia, já que é um feriado nacional desde 2023. O autor introduz brevemente o Dia da Consciência Negra falando sobre a sua instituição no governo da presidente Dilma Rousseff na Lei 12.519/2011 como um combate ao racismo e às desigualdades. Mas apenas em Dezembro de 2023 que a Lei se tornou oficial, após o presidente Lula sancionar a Lei 14.759/2023. E a respeito dos estabelecimentos e seus empregados, os serviços públicos terão expediente reduzido ou suspenso, bancos e outras instituições financeiras não estarão em funcionamento, ou seja; qualquer pendência ou pagamento ficará para o próximo dia útil. Algumas lojas de conveniências, shoppings e serviços podem abrir, mas os funcionários que trabalharem nesses dias terão direito a remuneração diferenciada ou folga remuneratória.",
    author: "Daniel Alexim",
    link: "https://www.brasildefato.com.br/2025/11/03/dia-da-consciencia-negra-saiba-o-que-fecha-e-o-que-abre-no-feriado-nacional/",
  },
  {
    id: "social-6",
    title: "Educação como fator de apartheid social, econômico e racial",
    //: "Abuso de força contra população negra",
    content: "Na sociedade brasileira atual, em tese, a educação é um direito fundamental de todo cidadão. Entretanto, essa não é a situação que a cada dia e nova notícia se vê, sendo um claro exemplo da existente desigualdade social e racial no Brasil. Ademais, o cenário é resultado de séculos de marginalização e discriminação - mesmo após a abolição da escravidão -, culminando em diferenças que deveriam ser inaceitáveis, mas são enfatizadas em todas as esferas da população, especialmente no ensino. Nesse sentido, o artigo “Educação como fator de apartheid social, econômico e racial”, escrito por Maurício Pestana e publicado no site online da CNN Brasil, trata sobre o contraste entre as escolas frequentadas pelas populações negra e branca, além de demonstrar como isso expõe e é uma representação do “apartheid social, econômico e racial” no país. Não só isso, mas o texto destaca dados alarmantes sobre a presente conjuntura, que há muito não muda - como o fato de que, em “São Paulo, nenhum dos dez colégios com melhor desempenho no ENEM [2019] registrou mais de 20% de alunos pretos ou pardos”. Por fim, a publicação busca trazer uma necessária reflexão na pequena parcela da nação que pode fazer a diferença, mostrando que locais que têm como objetivo serem berços de excelência e diversidade são, na realidade, espaços que acentuam a extrema segregação e exclusão no país.",
    author: "Antonio Ribeiro",
    link: "https://www.cnnbrasil.com.br/colunas/mauricio-pestana/nacional/educacao-como-fator-de-apartheid-social-economico-e-racial/",
  },
  {
    id: "social-7",
    title: "No Mês da Consciência Negra, ações do Iphan destacam patrimônio e reparação",
    //: "Desigualdades econômicas entre negros e brancos",
    content: "Sob coordenação do Comitê Permanente para Preservação do Patrimônio Cultural de Matriz Africana (Copmaf), unidades deste Instituto realizarão 40 ações em todas as regiões do país. Com o tema 'Patrimônio e reparação', a segunda edição do ciclo de eventos do Instituto do Patrimônio Histórico e Artístico Nacional (Iphan) para o Mês da Consciência Negra está acontecendo, com o objetivo de promover o património cultural de matriz africana, especialmente para o fortalecimento da justiça social e dos direitos da população negra. Ao longo do mês, serão realizadas 40 ações de forma presencial, híbrida e remota.                Para o Copmaf, o tema em questão ocupa um lugar singular no debate sobre patrimônio: por um lado, ele é um testemunho da violência da escravidão, do racismo e da marginalização das práticas culturais negras e indígenas. Por outro lado, ele dá vida às estratégias de resistência, criação e sobrevivência das comunidades. Os eventos terão diferentes formatos, como exposições artísticas, rodas de samba, seminários acadêmicos, oficinas de educação patrimonial, encontros de comunidades tradicionais, entre outros. As ações almejam engajar diversos públicos, desde comunidades quilombolas e povos de terreiro até estudantes, pesquisadores e a sociedade em geral. O ciclo de eventos será inaugurado já no próximo sábado, 10 de novembro, às 9h. A programação reflete um esforço governamental para promover o debate sobre a reparação histórica e fortalecer as políticas de preservação do patrimônio cultural de matriz africana, pilar fundamental da construção do país e da identidade nacional. ",
    author: "Geddel Filho", 
    link: "https://agenciagov.ebc.com.br/noticias/202510/em-eventos-do-mes-da-consciencia-negra-iphan-destaca-patrimonio-e-reparacao",
  },
  {
    id: "social-91",
    title: "O Dia da Consciência Negra promove a “Consciência” o ano todo?",
    //: "Desigualdades econômicas entre negros e brancos",
    content: "O Dia da Consciência Negra é uma data para a reflexão crítica do que, em nosso dia a dia, nos falta para termos uma sociedade mais confortável e menos desigual, menos preconceituosa e, acima de tudo, mais inclusiva para a população negra. As resistências, o lugar que as pessoas negras ocupam e a falta de justiça social são questões que precisam ser abordadas o ano inteiro. As pautas em torno de Zumbi dos Palmares e de Dandara, além de todas as outras que permeiam esta data, trazem uma crítica sobre as condições e as estruturas sociais e, principalmente, as desigualdades que são marcadas pela cor da pele. As estruturas sociais precisam ser reordenadas e as políticas sociais, mudadas. Essas mudanças, e tantas outras, precisam ser incorporadas de forma definitiva para que possamos ter uma sociedade antirracista.",
    author: "Mateus Sampaio",
    link: "https://www.geledes.org.br/consciencia-negra-significado",
  },
  {
    id: "social-8",
    title: "PNPIR – Política Nacional de Promoção da Igualdade Racial",
    //: "Luta que considera raça, gênero e classe",
    content: "Em um país de raízes plurais, mas ainda marcado por profundas desigualdades raciais, políticas públicas estruturadas tornam-se essenciais para transformar a realidade. É nesse contexto que surge a Política Nacional de Promoção da Igualdade Racial (PNPIR), uma iniciativa coordenada pelo Ministério da Igualdade Racial que busca combater o racismo institucional e ampliar as oportunidades econômicas, educacionais e culturais para populações negras, quilombolas e indígenas. Mais do que uma simples lei, a PNPIR funciona como um eixo articulador de ações afirmativas em todo o território nacional, conectando o poder público e os movimentos sociais que há décadas lutam por reconhecimento e equidade. Ao integrar políticas setoriais e promover o diálogo entre diferentes esferas do governo, a iniciativa fortalece a construção de uma sociedade mais justa e representativa. Os impactos da PNPIR podem ser observados em projetos de capacitação profissional, empreendedorismo negro e promoção da diversidade nos setores público e privado. Cada uma dessas ações reafirma o compromisso do Estado com uma transformação profunda, aquela que não se limita ao discurso, mas que promove inclusão real e duradoura.",
    author: "Átila Neto",
    link: "https://www.gov.br/igualdaderacial",
  },
  {
    id: "social-9",
    title: "Por que a consciência é negra e não humana?",
    //: "Luta que considera raça, gênero e classe",
    content: "É preciso manter o espírito da consciência negra não só em Novembro, mas também durante todo o ano. No dia da consciência negra muito se fala sobre pessoas negras, leis anti-racistas e pesquisas de como vive o negro no Brasil, até que o mês acaba e essa repercusão parace esvair-se junto a Novembro. A consciência é humana, deveria ser mas não é, todos são iguais, deveriam ser mas não são não precisa de data, poderia mas não dá. A consciência é negra por razões do passado, do presente e do futuro. A consciência é negra porque os negros e não os brancos foram escravizados por 300 anos no Brasil. A consciência é negra porque é do negro que se espera mais resistência para passar por situações como uma pandemia, considerando o nível de vulnerabilidade social. A consciência é negra porque a perfeita consciência humana nunca existiu e os negros precisam preparar as futuras gerações  para que a trajetória de avanços, ainda que limitada, não seja arruinada.Escolhi trabalhar com essa notícia porque ela dá maior magnitude ao dia da consciência negra, sendo capaz de dissecar esse conceito explicando o porquê da consciência ser especificamente negra e não humana em termos gerais. Além disso, esse arquivo tem um poder reflexivo muito grande ao propor que o dia da consciência negra não deve ser discutido, pensado e refletido apenas no mês de Novembro mas sim durante todo o ano. Outro ponto de destaque da notícia é o contraste que a autora faz entre a forma que as pessoas deveriam agir em relação à forma que realmente agem, trazendo mais uma reflexão muito poderosa.",
    author: "Geddel Filho",
    link: "https://www.cnnbrasil.com.br/nacional/por-que-a-consciencia-e-negra-e-nao-humana/",
  },
  {
    id: "social-10",
    title: "Por que ter um mês da Consciência Negra?",
    //: "Luta que considera raça, gênero e classe",
    content: "Depois que a escravidão foi abolida no Brasil, em 13 de maio de 1888, tornou-se importante criar um feriado para destacar o dia em que a raça não mudava mais seus direitos e, agora, a liberdade desse grupo social. Por este motivo, quando a morte de Zumbi de Palamares, um negro de Pernambuco que foi escravizado, virou a tona no dia 20 de novembro, essa data começou a ser usada com foco em incluir a parte com desigualdade racial da sociedade na política e na comunidade. - No entanto, era mais adequado comemorar o sucesso dos negros do que somente o fato de eles terem direitos básicos. Então essa data ficou conhecida como “Dia Nacional de Zumbi e da Consciência Negra”, pela Lei n. 12.519. Quem deu a ideia e a origem desse feriado foi o Movimento Negro Unificado (MNU), um grupo que procura lidar com o racismo, a violência policial contra população negra, a desigualdade social, a educação e a história desse tópico, entre outras pautas. Afinal, ter um mês fixo dando ênfase na Consciência Negra é extremamente necessário, pois ajuda a alertar a sociedade sobre este tema. O mais que esse assunto é citado, o mais forte ele fica, e por isso, ficamos mais perto de combater o racismo e a desigualdade social por causa da raça.",
    author: "Fernanda Barral",
    link: "https://futura.frm.org.br/conteudo/mobilizacao-social/artigo/por-que-ter-um-mes-da-consciencia-negra",
  },
  {
    id: "social-11",
    title: "Por que o racismo ainda é uma realidade?",
    //: "Luta que considera raça, gênero e classe",
    content: "É notório que a desigualdade racial ainda está presente em nossa sociedade por conta de muitos motivos que estão conectados entre si. O racismo estrutural, faz parte de como a nossa sociedade foi fundada. Em acordo com esses fatores, vemos afro descendentes que ainda sofrem pela discriminacao. É de extrema importância citar que a educação ainda é desigual juntamente com a saúde e oportunidades de emprego, o que torna o problema ainda mais complexo. Tudo isso influencia o ciclo da desigualdade racial. O ideal seriam a criação de novas políticas e leis que combatam o racismo e garantam o direito de igualdade do cidadão.",
    author: "Thiago Guimarães",
    link: "https://fia.com.br/blog/desigualdade-racial/#:~:text=igualdade%20de%20oportunidades.-,Por%20que%20a%20desigualdade%20racial%20ainda%20existe?,igualdade%20de%20oportunidades%20para%20todos",
  },
  {
    id: "social-12",
    title: "Preconceito e discriminação dificultam êxito acadêmico de estudantes negros",
    //: "Luta que considera raça, gênero e classe",
    content: "Estudo feito na Universidade de São Paulo (USP), a maior instituição de ensino superior do país, destaca os limites e possibilidades para o bem-viver de alunos negros e indígenas em instituições de ensino superior ao ser a última a aderir à reserva de vagas do sistema de cotas para esses estudantes. Apesar dessa abertura de portas não só realizada pela USP, ainda é preciso que eles se sintam suficientemente integrados e acolhidos no ambiente acadêmico para que possam ter resultados satisfatórios durante o período de graduação e, em seguida, a pós graduação. Adicionalmente, o estudo avalia o índice de Bem-Estar Subjetivo (BES) dos estudantes, que relaciona diversos aspectos e descreve o nível de satisfação de indivíduos de acordo com suas próprias avaliações de suas vidas. O estudo evidencia que o BES de estudantes negros é menor que o dos estudantes não-negros, pois enfrentam maiores dificuldades de adaptação acadêmica e utilizam mais os auxílios para permanência estudantil e os serviços de saúde mental, considerando que são afetados por situações de preconceito e discriminação vivenciadas em ambientes acadêmicos. Para saber mais, acesse o site da CNN abaixo.",
    author: "Luize Fasani",
    link: "https://www.cnnbrasil.com.br/educacao/preconceito-e-discriminacao-dificultam-integracao-e-exito-academico-de-estudante/",
  },
];

export default function SocialPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFD700]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FF6347] to-[#e53a2e] py-16 px-4 text-center text-white border-b-4 border-[#228B22]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Social</h1>
          <p className="text-xl text-gray-100">
            Questões sociais, políticas públicas e movimentos de luta pela igualdade racial
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 px-4 flex-1">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {socialData.map((item) => (
              <ContentCard
                key={item.id}
                title={item.title}
                //={item.//}
                content={item.content}
                author={item.author}
                link={item.link}
                borderColor="border-[#FF6347]"
                titleColor="text-[#FF6347]"
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
