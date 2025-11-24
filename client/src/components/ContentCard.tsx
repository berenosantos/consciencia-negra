import { useState } from "react";
import { X } from "lucide-react";

interface ContentCardProps {
  title: string;
  description: string;
  content: string;
  author: string;
  link: string;
  borderColor: string;
  titleColor: string;
}

export default function ContentCard({
  title,
  description,
  content,
  author,
  link,
  borderColor,
  titleColor,
}: ContentCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const truncatedContent = content.length > 450 ? content.substring(0, 650) + "..." : content;

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className={`rounded-lg border-2 ${borderColor} p-8 hover:shadow-lg transition h-full min-h-[400px] flex flex-col bg-white cursor-pointer group`}
      >
        <h3 className={`text-3xl font-bold mb-2 ${titleColor} group-hover:text-[#FFD700] transition`}>
          Texto Referência: {title}
        </h3>

        {/* Separator line */}
        <div className="border-t border-gray-300 my-3"></div>

        <p className="text-[#0a0a0a] mb-4 font-medium">
          {description}
        </p>
        <p className="text-[#333333] leading-relaxed flex-1 text-lg md:text-xl text-justify">
          {content.length > 450 ? content.substring(0, 450) + "..." : content}
        </p>

        {/* Author at bottom right */}
        <div className="mt-6 pt-4 border-t border-gray-300 text-right">
          <p className={`text-sm font-semibold ${titleColor}`}>
            {author}
          </p>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-green bg-opacity-30 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`${borderColor} border-b-2 p-6 flex justify-between items-start`}>
              <div className="flex-1">
                <h2 className={`text-3xl font-bold ${titleColor} mb-2`}>
                  {title}
                </h2>
                <p className="text-[#0a0a0a] font-medium">
                  {description}
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="ml-4 p-2 hover:bg-gray-100 rounded-full transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="border-t-2 border-gray-300 my-4 pt-4">
                <p className="text-[#333333] leading-relaxed text-lg md:text-xl mb-6 text-justify">
                  {content}
                </p>
              </div>

              {/* Author and Link */}
              <div className="flex justify-between items-center pt-6 border-t-2 border-gray-300">
                <p className={`text-sm font-semibold ${titleColor}`}>
                  {author}
                </p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-2 ${borderColor} text-white rounded-lg hover:opacity-80 transition font-semibold`}
                  style={{
                    backgroundColor: borderColor === "border-[#228B22]" ? "#228B22" : 
                                   borderColor === "border-[#DC143C]" ? "#DC143C" :
                                   borderColor === "border-[#4169E1]" ? "#4169E1" : "#FF6347"
                  }}
                >
                  Ver Referência
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
