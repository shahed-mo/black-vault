import { useNavigate } from "react-router-dom";
import Footer from "../ActiveCases/Footer"
import HeroSection from "./HeroSection"

function Home (){
    const navigate = useNavigate();
    return(
        <>
        <HeroSection/>
        <section className="mt-20 px-6">
  <div className="max-w-6xl mx-auto">

    {/* Section Title */}
    <div className="flex items-center gap-4 mb-6">
      <span className="text-primary text-xs tracking-[0.3em] uppercase">
        Featured Case
      </span>

      <div className="h-px flex-1 bg-outline-variant"></div>
    </div>

    {/* Case Card */}
    <div className="relative border border-outline-variant bg-surface-card p-8 md:p-12 overflow-hidden">

      {/* Classified */}
      <div className="absolute right-[-40px] top-10 rotate-12
        border-4 border-primary px-6 py-2
        text-primary text-xl font-bold
        opacity-10 uppercase tracking-widest">
        Classified
      </div>

      {/* Case Number */}
      <p className="text-primary text-xs tracking-[0.3em] uppercase">
        Case #047
      </p>

      {/* Title */}
      <h2 className="mt-4 text-3xl md:text-5xl font-bold
        uppercase tracking-wide text-on-surface">
        The Midnight Disappearance
      </h2>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-on-surface-variant leading-7">
        A mysterious disappearance has left investigators
        with more questions than answers. The last known
        sighting occurred just after midnight.
      </p>

      {/* Bottom */}
      <div className="mt-10 flex flex-col sm:flex-row
        sm:items-center sm:justify-between gap-6">

        <div>
          <p className="text-xs uppercase tracking-widest text-on-surface-variant">
            Status
          </p>

          <p className="mt-1 text-primary uppercase tracking-widest text-sm">
            Investigation Open
          </p>
        </div>

        <button
          onClick={() => navigate("/active-cases")}
          className="border border-primary text-primary
            px-6 py-3 uppercase text-xs
            tracking-[0.2em]
            hover:bg-primary hover:text-background
            transition-all"
        >
          Open Case File
        </button>

      </div>

    </div>
  </div>
</section>
        <Footer/>
        </>
    )
}

export default Home