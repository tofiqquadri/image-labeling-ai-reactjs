const HeroSection = () => {
    return (
        <section id="hero" className="hero-section mt-20">
            <div className="max-w-7xl mx-auto px-5 md:px-0">
                <h1 className="text-gray-900 font-Graphik font-bold text-4xl md:text-6xl text-center">
                    Welcome to Rapidata!
                </h1>

                <p className="text-center text-sm md:text-base font-Graphik mt-3 font-normal italic">
                    "FAST AND RELIABLE DATALABELING FOR YOUR AI"
                </p>

                <img
                    src="images/hero.png"
                    className="mx-auto w-3/4 md:w-1/2 mt-8 md:mt-14"
                    alt=""
                />
            </div>
        </section>
    );
};

export default HeroSection;
