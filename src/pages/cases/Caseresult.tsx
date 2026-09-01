import { cases } from "../../data";
import {useNavigate} from "react-router-dom";
function CaseResult() {
  const navigate = useNavigate();
  const savedId = localStorage.getItem("selectedCaseId");

  const caseItem = cases.find(
    (item) => item.id === Number(savedId)
  );

  if (!caseItem) {
    return <p>Case not found</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="relative w-full max-w-5xl border-4 border-primary
        bg-background p-10 text-center">

        {/* Solved Stamp */}
        <div className="absolute top-16 right-24 rotate-12
          border-4 border-green-700 px-4 py-2
          text-green-700 text-3xl font-bold opacity-60">
          SOLVED
        </div>

        {/* Icon */}
        <div className="mx-auto mb-6 w-20 h-20 rounded-full
          border border-primary flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-4xl">
            gavel
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display-lg text-display-lg text-primary uppercase">
          CASE CLOSED
        </h1>

        <p className="mt-4 text-on-surface-variant">
          "Correct! {caseItem.solution.culprit} was indeed the culprit."
        </p>

        {/* Evidence Log */}
        <div className="mt-10 max-w-xl mx-auto
          border border-outline-variant text-left ">

          <div className="border-l-4 border-primary p-5">

            <div className="flex justify-between mb-4 ">
              <span className="text-primary text-xs uppercase tracking-widest">
                Evidence Log
              </span>

              <span className="border border-outline-variant px-2 py-1
                text-[10px] uppercase">
                Archived
              </span>
            </div>

            <p className="text-on-surface-variant">
              {caseItem.solution.explanation}
            </p>

          </div>

          {/* Points */}
          <div className="border-t border-outline-variant p-6 text-center">

            <span className="text-xs uppercase tracking-widest text-primary">
              Operative Rating
            </span>

            <h2 className="text-2xl text-on-surface mt-2">
              Points Earned: +500
            </h2>

          </div>
        </div>

        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="mt-12 bg-primary text-white px-8 py-4
          uppercase text-xs tracking-widest
          hover:opacity-80 transition-opacity"
        >
          BACK TO HEADQUARTERS
        </button>

      </div>

    </div>
  );
}

export default CaseResult;