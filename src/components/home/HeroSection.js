function HeroSection() {
    return (
        <section className="flex flex-col items-center py-8 gap-10">
            <div className="bg-[var(--white)] shadow-sm border-1 border-[var(--color-gray)] rounded-4xl flex flex-row justify-center items-center gap-2 px-6 py-2">
                <i className="animate-pulse-live text-[var(--color-accent-dark)] fa-regular fa-calendar-check"></i>
                <span>Plateforme d'événements en temps réel</span>
            </div>
            <h1 className="text-6xl font-bold text-center">
                Vos événements,
                <br /><span className="text-[var(--color-accent)]">synchronisés.</span>
            </h1>
            <p className="text-xl text-center">
                EventSync remplace les supports statiques par une interface
                <br />dynamique. Naviguez dans vos événements, interagissez en direct
                <br />avec les sessions, et engagez vos participants comme jamais.
            </p>
            <div className="flex flex-row justify-center items-center gap-10">
                <button className="flex flex-row justify-center items-center gap-2 text-white font-bold bg-[var(--black)] px-4 py-4 rounded-4xl">
                    <span className="text-lg">Découvrir la plateforme</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button className="text-lg text-[var(--black)] font-bold border border-[var(--color-gray)] px-4 py-4 rounded-4xl">
                    Se connecter
                    <span className="text-gray-600"> (admin)</span>
                </button>
            </div>
        </section>
    )
}

export default HeroSection;