import { Link } from "wouter";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFD700]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] py-24 px-4 text-center text-white overflow-hidden border-b-4 border-[#228B22]">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="1200" height="600" fill="url(#pattern)" />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 text-[#FFD700] drop-shadow-lg">
            Consciência Negra
          </h1>
          <p className="text-2xl text-gray-200 mb-8 leading-relaxed">
            Celebrando história, cultura e contribuições na sociedade brasileira
          </p>
        </div>
      </section>)

      {/* Contextualização Section */}
      <section className="bg-[#0a0a0a] py-20 px-4 border-b-4 border-[#DC143C]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-8 text-center">
              Apresentação
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1a1a1a] p-10 rounded-lg border-2 border-[#228B22] md:col-span-2">
                <p className="text-gray-200 leading-relaxed text-xl md:text-2xl">
                  A sociedade brasileira é constituída de amplitude e variedade. Nessa perspectiva, sua História e suas representações culturais formam uma imensa riqueza, a qual se constitui de manifestações genuínas e de outras assimiladas e/ou adaptadas. Em meio a tantas influências, as africanas destacam-se como uma das mais presentes no cotidiano brasileiro, revelando-se em originalidade, resistência e disponibilidade para o diálogo. Assim, com o intuito de ampliar a aquisição e o compartilhamento de conhecimento a respeito de temas de grande interesse nos debates contemporâneos de interesse local e global, surgiu o Projeto Repertório 10 - Consciência Negra 2025. Para tanto, estudantes desenvolveram pesquisa, exercitaram seleção e análise, escreveram, debateram e construíram esse site.
                </p>

                <p className="mt-6 text-gray-200 leading-relaxed text-xl md:text-2xl">
                  Leitor, aceite o convite e navegue por saberes atuais e atuantes!
                </p>

                <p className="mt-6 text-right text-lg md:text-xl font-semibold text-gray-300">
                  Prof. Chico Mota
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t-4 border-[#228B22] py-8 px-4 text-center text-gray-500">
        <p>&copy; Site Desenvolvido por estudantes do 10° ano da Escola Pan Americana da Bahia, no componente curricular Língua Portuguesa, sob a orientaçao do Prof. Chico Mota, em novembro de 2025</p>
      </footer>
    </div>
  );
}