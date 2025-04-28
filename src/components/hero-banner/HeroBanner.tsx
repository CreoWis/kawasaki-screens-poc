import { IPageData } from "content/data.types";
import "./HeroBanner.css";

export const HeroBanner = ({ data }: { data: IPageData }) => {
  const {
    title,
    subtitle,
    buttonLabel,
    buttonHref,
    secondaryButtonLabel,
    secondaryButtonHref,
    backgroundImage,
  } = data.heroBanner ?? {};

  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="hero-banner__overlay" />

      {/* Content */}
      <div className="hero-banner__content">
        {subtitle && <p className="hero-banner__subtitle">{subtitle}</p>}
        <h1 className="hero-banner__title">{title}</h1>

        <div className="hero-banner__buttons">
          <a href={buttonHref} className="hero-banner__button primary">
            {buttonLabel}
          </a>
          <a
            href={secondaryButtonHref}
            className="hero-banner__button secondary"
          >
            {secondaryButtonLabel}
          </a>
        </div>

        <div className="hero-banner__scroll-hint">
          <span>⇩ Scroll down for more content</span>
        </div>
      </div>
    </section>
  );
};
