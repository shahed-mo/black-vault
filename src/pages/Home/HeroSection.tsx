function HeroSection(){
    return(
        <section className="flex flex-col items-center text-center space-y-6 mt-8 relative">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
             from-surface-card/50 via-background to-background blur-2xl"></div>
            <h1 className="font-display-lg text-display-lg text-on-surface">WELCOME, DETECTIVE</h1>
            <p className="font-quote-italic text-quote-italic text-on-surface-variant max-w-md mx-auto">
                The city has secrets that only you can uncover. Your next case awaits.
            </p>
            <button className="mt-8 bg-primary-container text-on-primary-container
             px-8 py-4 font-label-caps text-label-caps uppercase hover:bg-surface-tint
             transition-colors shadow-lg shadow-primary-container/10 border border-gold-dim
             hover:border-primary active:scale-[0.98]">
                START INVESTIGATION
            </button>
        </section>
    )
}

export default HeroSection