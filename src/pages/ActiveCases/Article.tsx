import type { Case } from "../../data";
import { useNavigate } from "react-router-dom";

interface ArticleProps {
  caseItem: Case;
}

function Article({ caseItem }: ArticleProps) {
  const navigate = useNavigate();
    const handleOpenCase = () => {
    localStorage.setItem("selectedCaseId", String(caseItem.id));
    navigate("/cases")
  };

  return (
    <article
    onClick={handleOpenCase}
      className="bg-surface-card border border-outline-gold group cursor-pointer
      hover:border-primary transition-colors duration-300 relative overflow-hidden
      flex flex-col h-full shadow-lg"
    >
      {/* Image */}
      <div className="h-48 w-full relative border-b border-outline-gold overflow-hidden">
        <img src={caseItem.image} alt={caseItem.title}
        className="object-cover w-full h-full
        transition-transform duration-500
        group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />

        {/* Status */}
        <div className="absolute top-4 right-4 border border-outline px-2 py-1 bg-surface/80 backdrop-blur-sm">
          <span className="font-label-caps text-label-caps text-primary">
            STATUS: OPEN
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        
        {/* Case Number */}
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined text-outline-gold text-sm">
            folder
          </span>

          <span className="font-label-caps text-[10px] text-outline-gold tracking-widest uppercase">
            Case #{caseItem.id}
          </span>
        </div>

        {/* Title */}
        <h2
          className="font-headline-lg-mobile text-headline-lg-mobile
          text-on-surface mb-2 group-hover:text-primary transition-colors"
        >
          {caseItem.title}
        </h2>

        {/* Description */}
        <p
          className="font-body-md text-body-md text-on-surface-variant
          line-clamp-2 mb-6"
        >
          {caseItem.description}
        </p>

        {/* Footer */}
        <div
          className="mt-auto flex justify-between items-center
          border-t border-outline-variant pt-4"
        >
          <span
            className="font-label-caps text-label-caps text-on-surface-variant
            group-hover:text-primary transition-colors"
          >
            REVIEW EVIDENCE
          </span>

          <span
            className="material-symbols-outlined text-outline-gold
            group-hover:text-primary transition-colors
            transform group-hover:translate-x-1"
          >
            arrow_forward
          </span>
        </div>
      </div>
    </article>
  );
}

export default Article;