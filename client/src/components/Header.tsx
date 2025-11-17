import { Link } from "wouter";
import { APP_TITLE } from "@/const";

export default function Header() {
  const sections = [
    { name: "20 de Novembro", path: "/20-de-novembro" },
    { name: "Social", path: "/social" },
    { name: "Leis", path: "/leis" },
    { name: "História", path: "/historia" },
    { name: "Cultura", path: "/cultura" },
    { name: "Conceitos", path: "/conceitos" },
    { name: "Dados", path: "/dados" },
    { name: "Figuras", path: "/figuras" },
  ];

  return (
    <header className="bg-gradient-to-r from-[#228B22] via-[#1a6b1a] to-[#0a0a0a] text-white shadow-lg border-b-4 border-[#FFD700]">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <span className="text-2xl font-bold text-[#FFD700]">{APP_TITLE}</span>
        </Link>

        <div className="flex items-center gap-6">
          {sections.map((section) => (
            <Link
              key={section.path}
              href={section.path}
              className="font-medium transition hover:opacity-80 text-white"
            >
              {section.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
