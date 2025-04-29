import { COM0003NewChallengerBannerProps } from "./types";
import "./styles.css";

export const COM0003NewChallengerBanner = ({
  data,
}: {
  data: COM0003NewChallengerBannerProps;
}) => {
  const { title, subtitle, buttonLabel, buttonHref, backgroundImage } =
    data ?? {};
  return (
    <section
      className="cta-banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="cta-banner__overlay" />

      {/* Content */}
      <div className="cta-banner__content">
        <h2 className="cta-banner__title">{title}</h2>
        {subtitle && <p className="cta-banner__subtitle">{subtitle}</p>}
        <a href={buttonHref} className="cta-banner__button">
          {buttonLabel}
        </a>
      </div>
    </section>
  );
};
