import { DLR0001DealerHeroBannerProps } from "./types";
import "./styles.css";

export const DLR0001DealerHeroBanner = ({
  data,
}: {
  data: DLR0001DealerHeroBannerProps;
}) => {
  const { title, subtitle, buttonLabel, buttonHref, backgroundImage } =
    data ?? {};
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
