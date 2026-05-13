function Header() {
    return (
        <header className="header bg-[var(--white-background)] sticky top-0 px-[50px] py-4 flex flex-row justify-between items-center">
            <div className="header_brand flex justify-center items-center">
                <h1 className="text-2xl font-bold">
                    <span>Event</span>
                    <span className="text-[var(--color-accent)]">Sync</span> 
                </h1>
            </div>
            <nav className="header_nav hidden lg:block">
                <ul className="flex flex-row justify-center items-center gap-10">
                    <li>Fonctionnalité</li>
                    <li>Comment ça marche</li>
                    <li>rôles</li>
                </ul>
            </nav>
            <div className="header_actions hidden lg:flex flex flex-row justify-center items-center gap-6">
                <button className="text-[var(--black)] font-medium">Se connecter</button>
                <button className="text-white font-semibold bg-[var(--black)] px-6 py-2 rounded-4xl">Commencer</button>
            </div>
            <button className="lg:hidden text-2xl text-[var(--black)]">
                <i className="fa-solid fa-bars"></i>
            </button>
        </header>
    )
}

export default Header;