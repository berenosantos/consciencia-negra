import Header from "@/components/Header";
import ContentCard from "@/components/ContentCard";

interface SocialItem {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  link: string;
}

const socialData: SocialItem[] = [
  {
    id: "social-1",
    title: "Movimento Negro Unificado",
    description: "Organização que lutas pela igualdade racial",
    content: "O Movimento Negro Unificado (MNU), fundado em 1978, é uma das principais organizações de luta pela igualdade racial no Brasil. Trabalha pela conscientização, educação e mobilização da população negra. O MNU foi fundamental para estabelecer o 20 de novembro como Dia da Consciência Negra.",
    author: "Movimento Negro Unificado",
    link: "https://www.mnu.org.br/",
  },
  {
    id: "social-2",
    title: "Ações Afirmativas",
    description: "Políticas para reduzir desigualdades raciais",
    content: "Ações afirmativas são políticas públicas que buscam reduzir desigualdades históricas. No Brasil, incluem cotas em universidades, concursos públicos e empresas. Essas políticas reconhecem que a igualdade formal não é suficiente para corrigir séculos de discriminação.",
    author: "Secretaria de Políticas de Promoção da Igualdade Racial",
    link: "https://www.gov.br/igualdaderacial/",
  },
  {
    id: "social-3",
    title: "Representatividade Negra",
    description: "Importância da presença negra em espaços de poder",
    content: "A representatividade negra em espaços de poder é crucial para mudanças estruturais. Quando pessoas negras ocupam posições de liderança, políticas e decisões tendem a considerar perspectivas historicamente marginalizadas. Aumentar a representatividade é um passo essencial para a transformação social.",
    author: "Instituto de Pesquisa Econômica Aplicada",
    link: "https://www.ipea.gov.br/",
  },
  {
    id: "social-4",
    title: "Educação Antirracista",
    description: "Educação que combate o racismo nas escolas",
    content: "A educação antirracista busca desconstruir narrativas eurocêntricas e promover a história e cultura africana e afro-brasileira. Lei 10.639/2003 torna obrigatório o ensino de história afro-brasileira. Educação antirracista é fundamental para formar cidadãos conscientes e igualitários.",
    author: "Ministério da Educação",
    link: "https://www.gov.br/mec/",
  },
  {
    id: "social-5",
    title: "Saúde da População Negra",
    description: "Disparidades de saúde e acesso a serviços",
    content: "A população negra enfrenta maiores taxas de mortalidade materna, hipertensão e outras doenças. Essas disparidades refletem racismo estrutural, acesso desigual a serviços de saúde e determinantes sociais. Políticas de saúde devem considerar especificidades da população negra.",
    author: "Ministério da Saúde",
    link: "https://www.gov.br/saude/",
  },
  {
    id: "social-6",
    title: "Violência Policial",
    description: "Abuso de força contra população negra",
    content: "Negros são desproporcionalmente vítimas de violência policial. Estudos mostram que negros têm maior chance de serem abordados, revistados e mortos por policiais. Combater violência policial é essencial para justiça racial e segurança pública equitativa.",
    author: "Anistia Internacional",
    link: "https://www.amnesty.org/",
  },
  {
    id: "social-7",
    title: "Emprego e Renda",
    description: "Desigualdades econômicas entre negros e brancos",
    content: "Negros ganham em média 40% menos que brancos com mesma escolaridade. Taxa de desemprego é maior entre negros. Acesso a posições de liderança é limitado. Políticas de inclusão econômica são necessárias para reduzir desigualdades.",
    author: "DIEESE",
    link: "https://www.dieese.org.br/",
  },
  {
    id: "social-8",
    title: "Feminismo Negro",
    description: "Luta que considera raça, gênero e classe",
    content: "Feminismo negro reconhece que mulheres negras enfrentam discriminações múltiplas e interseccionadas. Não basta lutar apenas por gênero ou raça isoladamente. Feminismo negro centra a experiência de mulheres negras e propõe transformação social integral.",
    author: "Biblioteca Nacional",
    link: "https://www.bn.gov.br/",
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
                description={item.description}
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
        <p>&copy; 2024 Consciência Negra. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
