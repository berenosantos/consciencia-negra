import { Link } from "wouter";
import { APP_TITLE } from "@/const";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#228B22] via-[#1a6b1a] to-[#0a0a0a] text-white shadow-lg border-b-4 border-[#FFD700]">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <span className="text-2xl font-bold text-[#FFD700]">{APP_TITLE}</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-4 flex-wrap">
          <Link href="/" className="hover:text-[#FFD700] transition font-medium text-white text-sm">
            Página Inicial
          </Link>
          <Link href="/social" className="hover:text-[#FFD700] transition font-medium text-white text-sm">
            Social
          </Link>
          <Link href="/leis" className="hover:text-[#FFD700] transition font-medium text-white text-sm">
            Leis
          </Link>
          <Link href="/historia" className="hover:text-[#FFD700] transition font-medium text-white text-sm">
            História
          </Link>
          <Link href="/cultura" className="hover:text-[#FFD700] transition font-medium text-white text-sm">
            Cultura
          </Link>
          <Link href="/conceitos" className="hover:text-[#FFD700] transition font-medium text-white text-sm">
            Conceitos
          </Link>
          <Link href="/dados" className="hover:text-[#FFD700] transition font-medium text-white text-sm">
            Dados
          </Link>
          <Link href="/20-de-novembro" className="hover:text-[#FFD700] transition font-medium text-white text-sm">
            20 de Novembro
          </Link>
          <Link href="/figuras" className="hover:text-[#FFD700] transition font-medium text-white text-sm">
            Figuras
          </Link>
        </div>
      </nav>
    </header>
  );
}
