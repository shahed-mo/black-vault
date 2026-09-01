import { useOutletContext } from "react-router-dom";
import Article from "./Article";
import type { Case } from "../../data";
import Footer from "./Footer";

interface OutletContext {
  visibleCases: Case[];
}

function Acases() {
  const { visibleCases } = useOutletContext<OutletContext>();

  return (
    <>
      <header className="text-center mb-12 w-full">
        <h1 className="font-display-lg text-display-lg text-primary uppercase tracking-tight mb-4">
          ACTIVE DOSSIERS
        </h1>

        <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto">
          Select a case file below to review the latest evidence and begin your investigation.
        </p>
      </header>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {visibleCases.map((caseItem) => (
          <Article
            key={caseItem.id}
            caseItem={caseItem}
          />
        ))}
      </div>
      <Footer/>
    </>
  );
}

export default Acases;