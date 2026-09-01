import { useEffect, useState } from "react";

function Solve() {
  const [solvedCases, setSolvedCases] = useState<any[]>([]);

  useEffect(() => {
    const savedCases = JSON.parse(
      localStorage.getItem("solvedCases") || "[]"
    );

    setSolvedCases(savedCases);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-primary mb-8">
        Solved Cases
      </h1>

      {solvedCases.length === 0 ? (
        <p>No solved cases yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solvedCases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="border border-outline-gold p-6 bg-surface-card"
            >
              <p className="text-primary">
                CASE #{caseItem.id}
              </p>

              <h2 className="text-xl font-bold mt-2">
                {caseItem.title}
              </h2>

              <p className="mt-3 text-on-surface-variant">
                {caseItem.description}
              </p>

              <p className="mt-4 text-green-500">
                ✓ SOLVED
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Solve;