      import { Link } from "wouter";
import { APP_TITLE } from "@/const";

export default function Header() {
  const sections = [
    { name: "20 de Novembro", path: "/20-de-novembro", color: "#DC143C" },
    { name: "Social", path: "/social", color: "#FF6347" },
    { name: "Leis", path: "/leis", color: "#DC143C" },
    { name: "História", path: "/historia", color: "#DC143C" },
    { name: "Cultura", path: "/cultura", color: "#FF6347" },
    { name: "Conceitos", path: "/conceitos", color: "#228B22" },
    { name: "Dados", path: "/dados", color: "#228B22" },
    { name: "Figuras", path: "/figuras", color: "#4169E1" },
  ];

  return (
    <header className="bg-gradient-to-r from-[#228B22] via-[#1a6b1a] to-[#0a0a0a] text-white shadow-lg border-b-4 border-[#FFD700]">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <span className="text-2xl font-bold text-[#FFD700]">{APP_TITLE}</span>
        </Link>
        
        <div className="flex items-center gap-2">
          {sections.map((section) => (
            <Link
              key={section.path}
              href={section.path}
              className="px-3 py-2 rounded-md text-sm font-medium transition hover:opacity-80"
              style={{ backgroundColor: section.color, color: "white" }}
            >
              {section.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
