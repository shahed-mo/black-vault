import { useNavigate } from "react-router-dom";
import { cases } from "../../data";
import Footer from "../ActiveCases/Footer";
import { useState } from "react";

function Cases() {
  const navigate = useNavigate();
  const [selectedSuspect, setSelectedSuspect] = useState<string | null>(null);

  const savedId = localStorage.getItem("selectedCaseId");

  const caseItem = cases.find(
    (item) => item.id === Number(savedId)
  );

  if (!caseItem) {
    return <p>Case not found</p>;
  }

const handleAccuse = () => {
  if (!selectedSuspect) return;

  const isCorrect =
    selectedSuspect === caseItem.solution.culprit;

  // لو حل القضية صح → احفظها
  if (isCorrect) {
    const solvedCases = JSON.parse(
      localStorage.getItem("solvedCases") || "[]"
    );

    const isAlreadySaved = solvedCases.some(
      (item: any) => item.id === caseItem.id
    );

    if (!isAlreadySaved) {
      solvedCases.push(caseItem);

      localStorage.setItem(
        "solvedCases",
        JSON.stringify(solvedCases)
      );
    }
  }

  // بعد كده روح لصفحة CaseResult
  navigate("/case-result");
};

  return (
    <>
      <div className="relative min-h-screen">
        {/* CLASSIFIED Stamp */}
       <div
  className="absolute top-1/2 left-1/2
  -translate-x-1/2 -translate-y-1/2
  rotate-[-15deg]
  font-headline-lg
  text-[45px] sm:text-[65px] md:text-[90px] lg:text-[120px]
  font-bold text-primary
  border-4 sm:border-6 md:border-8
  border-primary
  p-2 sm:p-3 md:p-4
  uppercase tracking-[0.15em]
  whitespace-nowrap
  opacity-10 pointer-events-none z-0"
>
  CLASSIFIED
</div>

        {/* Content */}
        <div className="relative z-10">
          <div className="mb-12 border-b border-outline-gold pb-6
            flex flex-col md:flex-row justify-between
            items-start md:items-end gap-6"
          >
            <div>
              <div className="font-label-caps text-label-caps
               text-primary mb-2 bg-surface-container inline-block px-2
                py-1 border border-outline-variant">CASE ID: #{caseItem.id}</div>
              <h1 className="font-display-lg text-display-lg text-primary uppercase">{caseItem.title}</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-20">
            {/* Left Column: Details & Evidence */}
            <div className="md:col-span-8 flex flex-col gap-8">
              <section className="bg-surface-card border border-outline-gold
               p-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-background/50
                 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h2 className="font-label-caps text-label-caps text-primary border-b border-outline-variant pb-2 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">description</span>
                  Incident Description
                </h2>
                <p className="font-quote-italic text-quote-italic text-on-surface-variant leading-relaxed">
                  {caseItem.description}
                </p>
              </section>

              <section>
                <h2 className="font-label-caps text-label-caps text-primary border-b border-outline-variant pb-2 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">fingerprint</span>
                  Recovered Evidence
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {caseItem.evidence.map((item, idx) => (
                    <div key={idx} className="bg-surface-container border border-outline-variant p-4 hover:border-primary 
                    transition-colors duration-300 flex items-start gap-4 cursor-pointer">
                      <div className="w-16 h-16 bg-surface-bright border border-outline-gold 
                      flex items-center justify-center shrink-0"
                        style={{
                          backgroundImage: `url(${'https://lh3.googleusercontent.com/aida-public/AB6AXuDPedAYDSv2uj99jye1bF2Xzw8I7vejYO0fC-EVyqD9gWqKsXsX8Twk0ojsuGoJrPbfb8S1c76Se_augL4r-0LcWX1YwAaCRxGIiKYiaVsRGP7aX-ukvqHVFx3_G1SbIKD1LJZ72KletZuTQvXBodi7U0dklzJrJAZ4YiJ0c_TbRM-YMF23zbeqbY17spKKNY29LbchFyaNzaeI0ZwSVf9sbfsfQI6ZMbyvOBVMevfoP2rVQlAQcNgeDA'})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center"
                        }}></div>
                      <div>
                        <h3 className="font-label-caps text-label-caps text-on-surface mb-1">{item.title}</h3>
                        <p className="text-[14px] text-on-surface-variant">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: Suspects & Timeline */}
            <div className="md:col-span-4 flex flex-col gap-8">
              <section className="bg-surface-card border border-outline-gold p-6">
                <h2 className="font-label-caps text-label-caps text-primary border-b border-outline-variant pb-2 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">group</span>
                  Persons of Interest
                </h2>
                <ul className="flex flex-col gap-4">
                  {caseItem.suspects.map((suspect) => (
                    <li
                      key={suspect.name}
                      onClick={() => setSelectedSuspect(suspect.name)}
                      className={`flex items-center gap-4 group cursor-pointer p-2 border transition-colors
                        ${
                          selectedSuspect === suspect.name
                            ? "border-primary bg-primary/10"
                            : "border-transparent"
                        }`}
                    >
                      <div className="w-12 h-12 rounded-full border border-outline-variant overflow-hidden grayscale group-hover:border-primary">
                        <img
                          src={suspect.image}
                          alt={suspect.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-label-caps text-label-caps text-on-surface">
                          {suspect.name}
                        </div>
                        <div className="text-[12px] text-on-surface-variant uppercase tracking-wider">
                          {suspect.role}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleAccuse}
                  disabled={!selectedSuspect}
                  className="mt-6 w-full border border-primary bg-primary-container
                  px-6 py-3 font-label-caps text-label-caps uppercase
                  text-on-primary-container disabled:opacity-40
                  disabled:cursor-not-allowed"
                >
                  ACCUSE SUSPECT
                </button>
              </section>

              <section className="bg-surface-container-lowest border border-outline-variant
               p-6 h-full border-l-4 border-l-error">
                <h2 className="font-label-caps text-label-caps text-error border-b border-outline-variant pb-2 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">science</span>
                  Forensic Notes
                </h2>
                <div className="font-label-caps text-label-caps text-on-surface-variant space-y-4 leading-loose">
                  {caseItem.timeline.map((event, index) => (
                    <p key={index}>
                      &gt; {event}
                    </p>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cases;