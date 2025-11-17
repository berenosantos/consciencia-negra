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
            Celebrando a história, cultura e contribuições do povo negro na sociedade brasileira
          </p>
        </div>
      </section>)

      {/* Contextualização Section */}
      <section className="bg-[#0a0a0a] py-20 px-4 border-b-4 border-[#DC143C]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-8">Contextualização</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1a1a1a] p-8 rounded-lg border-2 border-[#228B22]">
              <p className="text-gray-200 leading-relaxed">
                A Consciência Negra é mais que uma data comemorativa. É um movimento de reflexão sobre a história, identidade e direitos do povo negro. O dia 20 de novembro marca o aniversário da morte de Zumbi dos Palmares, símbolo de resistência contra a escravidão.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-8 rounded-lg border-2 border-[#4169E1]">
              <p className="text-gray-200 leading-relaxed">
                Este site oferece informações sobre dados estatísticos, leis de proteção e figuras históricas que moldaram a história afro-brasileira. Explore as seções para aprender mais sobre essa importante parte da nossa identidade nacional.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t-4 border-[#228B22] py-8 px-4 text-center text-gray-500">
        <p>&copy; Projeto Desenvolvido por alunos do 10° ano da Escola Pan Americana da Bahia com o intuito de trazer visibilidade à cultura negra.
</p>
      </footer>
    </div>
  );
}
