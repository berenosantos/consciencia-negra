import { Link } from "wouter";
import { APP_TITLE } from "@/const";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#228B22] via-[#1a6b1a] to-[#0a0a0a] text-white shadow-lg border-b-4 border-[#FFD700]">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <span className="text-2xl font-bold text-[#FFD700]">{APP_TITLE}</span>
        </Link>
        
        <div className="flex items-center gap-8">
          <Link href="/" className="hover:text-[#FFD700] transition font-medium text-white">
            Página Inicial
          </Link>
          <Link href="/20-de-novembro" className="hover:text-[#FFD700] transition font-medium text-white">
            20 de Novembro
          </Link>
          <Link href="/cultura" className="hover:text-[#FFD700] transition font-medium text-white">
            Cultura
          </Link>
          <Link href="/historia" className="hover:text-[#FFD700] transition font-medium text-white">
            História
          </Link>
        </div>
      </nav>
    </header>
  );
}
