import { IPageData } from "content/data.types";
import "./DealerHeroBanner.css";

export const DealerHeroBanner = ({ data }: { data: IPageData }) => {
  const { title, subtitle, buttonLabel, buttonHref, backgroundImage } =
    data.dealerHeroBanner ?? {};
  return (
    <section
      className="dealer-hero-banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="dealer-hero-banner__overlay" />

      {/* Content */}
      <div className="dealer-hero-banner__content">
        {subtitle && <p className="dealer-hero-banner__subtitle">{subtitle}</p>}
        <h1 className="dealer-hero-banner__title">{title}</h1>
        {buttonLabel && buttonHref && (
          <a href={buttonHref} className="dealer-hero-banner__button">
            {buttonLabel}
          </a>
        )}
      </div>
    </section>
  );
};
