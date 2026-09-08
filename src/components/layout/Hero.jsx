import { heroes } from "../../data/database";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [currentHero, setCurrentHero] = useState(0);
  const [nextHero, setNextHero] = useState(null);
  const currentHeroRef = useRef(0);

  useEffect(() => {
    let timeout;

    const interval = setInterval(() => {
      const next = (currentHeroRef.current + 1) % heroes.length;
      setNextHero(next);

      timeout = setTimeout(() => {
        setCurrentHero(next);
        currentHeroRef.current = next;
        setNextHero(null);
      }, 700);
    }, 4500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const hero = heroes[currentHero];
  const incoming = nextHero !== null ? heroes[nextHero] : null;

  return (
    <section className="h-[60vh] w-full relative overflow-hidden rounded-2xl shadow-xl">
      <div className="absolute inset-0">
        <div className="hero-slide-wrapper">
          <div className={`hero-slide ${incoming ? "slide-out" : "slide-active"}`}>
            <img src={hero.image} alt={hero.title} fetchPriority="high" decoding="async" className="hero-slide-image" />
            <div className="hero-overlay"></div>
            <div className="hero-slide-content">
              <h1 className="text-3xl md:text-5xl font-bold font-scribble">
                {hero.title}
              </h1>
              <p className="mt-3 text-sm md:text-lg max-w-md font-scribble">
                {hero.subtitle}
              </p>
            </div>
          </div>

          {incoming && (
            <div className="hero-slide slide-in">
              <img src={incoming.image} alt={incoming.title} decoding="async" className="hero-slide-image" />
              <div className="hero-overlay"></div>
              <div className="hero-slide-content">
                <h1 className="text-3xl md:text-5xl font-bold font-scribble">
                  {incoming.title}
                </h1>
                <p className="mt-3 text-sm md:text-lg max-w-md font-scribble">
                  {incoming.subtitle}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
