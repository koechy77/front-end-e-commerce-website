import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { heroes } from "../../data/database";

const DISPLAY_MS = 5000;

function HeroSlide({ hero, visible, priority }) {
  return (
    <div
      className={`hero-slide ${visible ? "hero-slide-visible" : "hero-slide-hidden"}`}
      aria-hidden={!visible}
    >
      <img
        src={hero.image}
        alt=""
        fetchPriority={priority ? "high" : "auto"}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="hero-slide-image"
      />
      <div className="hero-overlay" />
    </div>
  );
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);
  const transitionTimer = useRef(null);

  function finishTransition(index) {
    window.clearTimeout(transitionTimer.current);
    setNextIndex(null);
    setCurrentIndex(index);
  }

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((index) => {
        const next = (index + 1) % heroes.length;
        setNextIndex(next);
        window.clearTimeout(transitionTimer.current);
        transitionTimer.current = window.setTimeout(() => {
          finishTransition(next);
        }, 650);
        return index;
      });
    }, DISPLAY_MS);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(transitionTimer.current);
    };
  }, []);

  const currentHero = heroes[currentIndex];
  const nextHero = nextIndex === null ? null : heroes[nextIndex];

  function goToSlide(index) {
    if (index === currentIndex) return;
    setNextIndex(index);
    window.clearTimeout(transitionTimer.current);
    transitionTimer.current = window.setTimeout(() => {
      finishTransition(index);
    }, 650);
  }

  return (
    <section className={`hero hero-slide-${currentIndex}`} aria-label="Featured offers">
      <div className="hero-slide-wrapper">
        <HeroSlide hero={currentHero} visible={nextHero === null} priority />
        {nextHero && <HeroSlide hero={nextHero} visible priority={false} />}
      </div>

      <div className="hero-slide-content">
        <p className="hero-kicker">CHmart / new arrivals</p>
        <h1>{currentHero.title}</h1>
        <p className="hero-subtitle">{currentHero.subtitle}</p>
        <Link className="hero-cta" to="/products">
          Explore products <span aria-hidden="true">&#8594;</span>
        </Link>
      </div>

      <div className="hero-controls" aria-label="Choose featured offer">
        {heroes.map((hero, index) => (
          <button
            key={hero.title}
            type="button"
            className={`hero-dot ${index === currentIndex ? "hero-dot-active" : ""}`}
            aria-label={`Show ${hero.title}`}
            aria-current={index === currentIndex ? "true" : undefined}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
